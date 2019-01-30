(defproject foreclojure "2.0.0-rc2"
  :description "4clojure - a website for learning Clojure"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [compojure "1.6.1"]
                 [hiccup "1.0.3"]
                 [clojail "1.0.6"]
                 [lib-noir "0.1.1"]
                 [congomongo "1.0.1"]
                 [org.jasypt/jasypt "1.9.2"]
                 [cheshire "5.8.1"]
                 [org.flatland/useful "0.11.6"]
                 [amalloy/ring-gzip-middleware "0.1.3"]
                 [amalloy/mongo-session "0.0.2"]
                 [innuendo "0.1.7"] ; used for paste! -> social.clj
                 [clj-http "3.9.0"] ; to bump transitive innuendo dep
                 [ring "1.4.0"]
                 [incanter/incanter-core "1.9.3"]
                 [incanter/incanter-charts "1.9.3"]
                 [clj-time "0.15.0"]
                 [commons-lang "2.6"]
                 [org.apache.commons/commons-email "1.2"]
                 [org.clojure/data.xml "0.2.0-alpha6"]]
  :plugins [[lein-ring "0.7.1"]]
  :profiles {:dev {:dependencies [[midje "1.3.0" :exclusions [org.clojure/clojure]]]}}
  :checksum-deps true
  :main foreclojure.core
  :ring {:handler foreclojure.core/app
         :init foreclojure.mongo/prepare-mongo})
