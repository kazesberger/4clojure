(ns foreclojure.mongo
  (:use somnium.congomongo
        [foreclojure.data-set :only [load-problems]]
        [foreclojure.config   :only [config]]
        [foreclojure.problems :only [number-from-mongo-key solved-stats get-problem-list]]
        [foreclojure.users    :only [get-users]]))

(comment
  (defn mongo!
    "Creates a Mongo object and sets the default database.

  Does not support replica sets, and will be deprecated in future
  releases.  Please use 'make-connection' in combination with
  'with-mongo' or 'set-connection!' instead.

     Keyword arguments include:
     :host -> defaults to localhost
     :port -> defaults to 27017
     :db   -> defaults to nil (you'll have to set it anyway, might as well do it now.)"
    {:arglists '([:db ? :host "localhost" :port 27017])}
    [& {:keys [db host port]
        :or {db nil host "localhost" port 27017}}]
    (set-connection! (make-connection db :host host :port port))
    true)

  (defn authenticate
    "Authenticate against either the current or a specified database connection.
   Note that authenticating twice against the same database will raise an error."
    ([conn username password]
     (.authenticate (get-db conn)
                    ^String username
                    (.toCharArray ^String password)))
    ([username password]
     (authenticate *mongo-config* username password))))


(defn connect-to-db []
  (let [{:keys [db-user db-pwd db-name db-host db-port]
         :or {db-name "mydb" db-host "localhost" db-port 27017}} config]
    (set-connection!
      (make-connection db-name
                       :instances [{:hosts db-host
                                    :port db-port}]
                       :username db-user
                       :password db-pwd))))

(defn prepare-problems []
  (when-not (fetch-one :problems)
    (load-problems))
  (add-index! :problems [:solved]))

(defn prepare-seqs []
  (update! :seqs
           {:_id "problems"}
           {:$set {:seq (->> (fetch :problems :only [:_id])
                             (map :_id)
                             (apply max)
                             (inc))}}))

;; make it easier to get off the ground by marking contributors automatically
;; useful since some "in-development" features aren't enabled for all users
(defn prepare-users []
  (add-index! :users [:user] :unique true)
  (add-index! :users [[:solved -1]])
  (add-index! :users [:email])
  (update! :users
           {:user {:$in (:contributors config)}}
           {:$set {:contributor true}}
           :upsert false
           :multiple true))

(defn prepare-solutions []
  (add-index! :solutions [:user :problem]))

(defn reconcile-solved-count
  "Overwrites the times-solved field in the problems collection based on data from the users collection. Should only be called on server startup since it isn't a safe operation. Also updates the total-solved agent."
  []
  (let [+ (fnil + 0)
        [raw-scores raw-solved] (for [field [:scores :solved]]
                                  ;; we fetch two separate collections so that it's easy to iterate
                                  ;; over it twice without holding onto the head on the first pass
                                  (mapcat field (fetch :users :only [:scores :solved])))
        scores (->> raw-scores
                    (frequencies)
                    (reduce (fn [scores [[id score] times]]
                              (update-in scores
                                         [(number-from-mongo-key id) score]
                                         + times))
                            {}))
        solved-counts (frequencies (map int raw-solved))
        total (reduce + 0 (vals solved-counts))]
    (send solved-stats (constantly (assoc scores :total total :solved-counts solved-counts)))))

(defn prepare-mongo []
  (connect-to-db)
  (prepare-problems)
  (prepare-seqs)
  (prepare-users)
  (prepare-solutions)
  (reconcile-solved-count))
