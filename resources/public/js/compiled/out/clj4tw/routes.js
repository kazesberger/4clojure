// Compiled by ClojureScript 1.10.238 {}
goog.provide('clj4tw.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('clj4tw.events');
clj4tw.routes.hook_browser_navigation_BANG_ = (function clj4tw$routes$hook_browser_navigation_BANG_(){
var G__62109 = (new goog.History());
goog.events.listen(G__62109,goog.history.EventType.NAVIGATE,((function (G__62109){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__62109))
);

G__62109.setEnabled(true);

return G__62109;
});
clj4tw.routes.app_routes = (function clj4tw$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__61869__auto___62120 = (function (params__61870__auto__){
if(cljs.core.map_QMARK_.call(null,params__61870__auto__)){
var map__62110 = params__61870__auto__;
var map__62110__$1 = ((((!((map__62110 == null)))?(((((map__62110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62110):map__62110);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","set-active-panel","clj4tw.events/set-active-panel",-459469127),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","set-re-pressed-example","clj4tw.events/set-re-pressed-example",1699075819),null], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","set-re-pressed-example","clj4tw.events/set-re-pressed-example",1699075819),"Hello, world!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(72)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(69)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(76)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(76)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(79)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(27)], null)], null)], null)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__61870__auto__)){
var vec__62112 = params__61870__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","set-active-panel","clj4tw.events/set-active-panel",-459469127),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","set-re-pressed-example","clj4tw.events/set-re-pressed-example",1699075819),null], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","set-re-pressed-example","clj4tw.events/set-re-pressed-example",1699075819),"Hello, world!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(72)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(69)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(76)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(76)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(79)], null)], null)], null)], null),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(27)], null)], null)], null)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__61869__auto___62120);


var action__61869__auto___62121 = (function (params__61870__auto__){
if(cljs.core.map_QMARK_.call(null,params__61870__auto__)){
var map__62115 = params__61870__auto__;
var map__62115__$1 = ((((!((map__62115 == null)))?(((((map__62115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62115):map__62115);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","set-active-panel","clj4tw.events/set-active-panel",-459469127),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__61870__auto__)){
var vec__62117 = params__61870__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","set-active-panel","clj4tw.events/set-active-panel",-459469127),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__61869__auto___62121);


return clj4tw.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1549004107384
