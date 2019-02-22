// Compiled by ClojureScript 1.10.238 {}
goog.provide('clj4tw.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('clj4tw.events');
goog.require('clj4tw.routes');
goog.require('clj4tw.views');
goog.require('clj4tw.config');
clj4tw.core.dev_setup = (function clj4tw$core$dev_setup(){
if(clj4tw.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
clj4tw.core.mount_root = (function clj4tw$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj4tw.views.main_panel], null),document.getElementById("app"));
});
clj4tw.core.init = (function clj4tw$core$init(){
clj4tw.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clj4tw.events","initialize-db","clj4tw.events/initialize-db",-1676424017)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),"keydown"], null));

clj4tw.core.dev_setup.call(null);

return clj4tw.core.mount_root.call(null);
});
goog.exportSymbol('clj4tw.core.init', clj4tw.core.init);

//# sourceMappingURL=core.js.map?rel=1549004117716
