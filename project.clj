(defproject foreclojure "2.0.0-rc2"
  :description "4clojure - a website for learning Clojure"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.5"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [org.clojure/core.async "0.2.391"]
                 [re-com "2.1.0"]
                 [secretary "1.2.3"]
                 [yogthos/config "0.8"]
                 [re-pressed "0.2.2"]
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

  ;:plugins [[lein-ring "0.7.1"]]
  :plugins [[lein-cljsbuild "1.1.7"]]

  :min-lein-version "2.5.3"
  :source-paths ["src/clj" "src/cljs"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]
             ;:ring-handler clj4tw.handler/dev-handler
             :ring-handler foreclojure.core/app
             :init foreclojure.mongo/prepare-mongo}

  :profiles
  {:dev
            {:dependencies [#_[midje "1.3.0" :exclusions [org.clojure/clojure]]
                            [binaryage/devtools "0.9.10"]
                            [day8.re-frame/re-frame-10x "0.3.3"]
                            [day8.re-frame/tracing "0.5.1"]]

             :plugins      [[lein-figwheel "0.5.16"]]}
   :prod { :dependencies [[day8.re-frame/tracing-stubs "0.5.1"]]}
   :uberjar {:source-paths ["env/prod/clj"]
             :dependencies [[day8.re-frame/tracing-stubs "0.5.1"]]
             :omit-source  true
             :main         foreclojure.core
             :aot          [foreclojure.core]
             :uberjar-name "clj4tw.jar"
             :prep-tasks   ["compile" ["cljsbuild" "once" "min"]]}}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "clj4tw.core/mount-root"
                    :open-urls ["http://localhost:3449/index.html"]}
     :compiler     {:main                 clj4tw.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                      :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload
                                           day8.re-frame-10x.preload]
                    :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true
                                           "day8.re_frame.tracing.trace_enabled_QMARK_" true}
                    :external-config      {:devtools/config {:features-to-install :all}}}}


    {:id           "min"
     :source-paths ["src/cljs"]
     :jar true
     :compiler     {:main            foreclojure.core/app
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}]}

  ;:profiles {:dev {:dependencies [[midje "1.3.0" :exclusions [org.clojure/clojure]]]}}
  :checksum-deps true)
  ;:main foreclojure.core)
  ;:ring {:handler foreclojure.core/app
  ;       :init foreclojure.mongo/prepare-mongo})
