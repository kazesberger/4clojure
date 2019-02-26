(ns user
  (:require [figwheel-sidecar.repl-api :as fw]))


;(def figwheel-config
;  {:figwheel-options {} ;; <-- figwheel server config goes here
;   :build-ids ["dev"]   ;; <-- a vector of build ids to start autobuilding
;   :all-builds          ;; <-- supply your build configs here
;     [{:id "dev"
;       :figwheel true
;       :source-paths ["cljs-src"]
;       :compiler {:main "repler.core"
;                  :asset-path "js/out"
;                  :output-to "resources/public/js/repler.js"
;                  :output-dir "resources/public/js/out"}}]})

(defn e-handler-reify []
  (Thread/setDefaultUncaughtExceptionHandler
    (reify Thread$UncaughtExceptionHandler
      (uncaughtException [this thread error]
        (prn "uncaught error\n" thread error)))))

(defn start! []
  (fw/start-figwheel!))