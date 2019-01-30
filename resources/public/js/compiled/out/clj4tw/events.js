// Compiled by ClojureScript 1.10.238 {}
goog.provide('clj4tw.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clj4tw.db');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("clj4tw.events","initialize-db","clj4tw.events/initialize-db",-1676424017),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__56825__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__56826__auto__ = clj4tw.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__56826__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__56826__auto__;
}catch (e57352){var e = e57352;
throw e;
}}):(function (_,___$1){
return clj4tw.db.default_db;
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("clj4tw.events","set-active-panel","clj4tw.events/set-active-panel",-459469127),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__57353){
var vec__57354 = p__57353;
var _ = cljs.core.nth.call(null,vec__57354,(0),null);
var active_panel = cljs.core.nth.call(null,vec__57354,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__56825__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__56826__auto__ = cljs.core.assoc.call(null,(function (){var opts__56825__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__56826__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__56826__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__56826__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__56825__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__56826__auto__ = active_panel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__56826__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__56826__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__56826__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__56826__auto__;
}catch (e57357){var e = e57357;
throw e;
}}):(function (db,p__57358){
var vec__57359 = p__57358;
var _ = cljs.core.nth.call(null,vec__57359,(0),null);
var active_panel = cljs.core.nth.call(null,vec__57359,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("clj4tw.events","set-re-pressed-example","clj4tw.events/set-re-pressed-example",1699075819),(function (db,p__57362){
var vec__57363 = p__57362;
var _ = cljs.core.nth.call(null,vec__57363,(0),null);
var value = cljs.core.nth.call(null,vec__57363,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));

//# sourceMappingURL=events.js.map?rel=1548888385773
