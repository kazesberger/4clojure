// Compiled by ClojureScript 1.10.238 {}
goog.provide('clj4tw.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clj4tw.db');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("clj4tw.events","initialize-db","clj4tw.events/initialize-db",-1676424017),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__60361__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__60362__auto__ = clj4tw.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__60362__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__60362__auto__;
}catch (e61336){var e = e61336;
throw e;
}}):(function (_,___$1){
return clj4tw.db.default_db;
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("clj4tw.events","set-active-panel","clj4tw.events/set-active-panel",-459469127),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__61337){
var vec__61338 = p__61337;
var _ = cljs.core.nth.call(null,vec__61338,(0),null);
var active_panel = cljs.core.nth.call(null,vec__61338,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__60361__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__60362__auto__ = cljs.core.assoc.call(null,(function (){var opts__60361__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__60362__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__60362__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__60362__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__60361__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__60362__auto__ = active_panel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__60362__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__60362__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__60362__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__60362__auto__;
}catch (e61341){var e = e61341;
throw e;
}}):(function (db,p__61342){
var vec__61343 = p__61342;
var _ = cljs.core.nth.call(null,vec__61343,(0),null);
var active_panel = cljs.core.nth.call(null,vec__61343,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("clj4tw.events","set-re-pressed-example","clj4tw.events/set-re-pressed-example",1699075819),(function (db,p__61346){
var vec__61347 = p__61346;
var _ = cljs.core.nth.call(null,vec__61347,(0),null);
var value = cljs.core.nth.call(null,vec__61347,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"re-pressed-example","re-pressed-example",1847120022),value);
}));

//# sourceMappingURL=events.js.map?rel=1549004106244
