(ns clj4tw.db
  (:require
    [clj4tw.routes :as routes]))

(def default-db
  {:name "re-frame"
   :tabs [{:id ::oldui  :label "Old UI"  :say-this "I don't like my tab siblings, they smell."}
          {:id ::routes/home-panel  :label "Main"  :route-path "/"}
          {:id ::routes/about-panel  :label "About"  :route-path "/about"}
          {:id ::routes/problems-panel  :label "Problem List"  :route-path "/problems"}
          {:id ::routes/topusers-panel  :label "Top Users" :route-path "/topusers"}
          {:id ::routes/help-panel  :label "Help" :route-path "/help"}
          {:id ::routes/repl-panel  :label "REPL" :route-path "/repl"}
          {:id ::routes/docs-panel  :label "Docs" :route-path "/docs"}]
   :active-panel ::routes/home-panel})
