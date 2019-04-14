(ns clj4tw.views
  (:require
    [re-frame.core :as re-frame]
    [re-com.core :as re-com]
    [re-pressed.core :as rp]
    [clj4tw.subs :as subs]
    [clj4tw.events :as events]
    [clj4tw.routes :as routes]
    [secretary.core :as secretary]))


;; home

(defn display-re-pressed-example []
  (let [re-pressed-example (re-frame/subscribe [::subs/re-pressed-example])]
    [:div

     [:p
      [:span "Re-pressed is listening for keydown events. A message will be displayed when you type "]
      [:strong [:code "hello"]]
      [:span ". So go ahead, try it out!"]]

     (when-let [rpe @re-pressed-example]
       [re-com/alert-box
        :alert-type :info
        :body rpe])]))

(defn header []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :label (str "Hello " @name ". Solve some Problems.")
     :level :level1]))

(defn navigation-tabs []
  (let [tabs (re-frame/subscribe [::subs/tabs])
        active-panel (re-frame/subscribe [::subs/active-panel])]
    [re-com/horizontal-bar-tabs
       :model @active-panel
       :tabs @tabs
       :on-change     (fn [new-panel-id]
                        (secretary/dispatch! (:route-path (first (filter #(= new-panel-id (:id %)) @tabs)))))]))


(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [[header]
              [navigation-tabs]

              [display-re-pressed-example]]])


;; about

(defn about-title []
  [re-com/title
   :label "This is the About Page."
   :level :level1])

(defn about-panel []
  [re-com/v-box
   :gap "1em"
   :children [[about-title]
              [navigation-tabs]]])

              ;; main

(defn- panels [panel-name]
  (case panel-name
    ::routes/home-panel [home-panel]
    ::routes/about-panel [about-panel]
    ::routes/problems-panel [about-panel]
    ::routes/topusers-panel [about-panel]
    ::routes/help-panel [about-panel]
    ::routes/repl-panel [about-panel]
    ::routes/docs-panel [about-panel]
    [:div]))

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [re-com/v-box
     :height "100%"
     :children [[panels @active-panel]]]))
