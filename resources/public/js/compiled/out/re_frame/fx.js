// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_56985 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__56986 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56987 = null;
var count__56988 = (0);
var i__56989 = (0);
while(true){
if((i__56989 < count__56988)){
var vec__56990 = cljs.core._nth.call(null,chunk__56987,i__56989);
var effect_key = cljs.core.nth.call(null,vec__56990,(0),null);
var effect_value = cljs.core.nth.call(null,vec__56990,(1),null);
var temp__4655__auto___57006 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___57006)){
var effect_fn_57007 = temp__4655__auto___57006;
effect_fn_57007.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__57008 = seq__56986;
var G__57009 = chunk__56987;
var G__57010 = count__56988;
var G__57011 = (i__56989 + (1));
seq__56986 = G__57008;
chunk__56987 = G__57009;
count__56988 = G__57010;
i__56989 = G__57011;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56986);
if(temp__4657__auto__){
var seq__56986__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56986__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__56986__$1);
var G__57012 = cljs.core.chunk_rest.call(null,seq__56986__$1);
var G__57013 = c__4319__auto__;
var G__57014 = cljs.core.count.call(null,c__4319__auto__);
var G__57015 = (0);
seq__56986 = G__57012;
chunk__56987 = G__57013;
count__56988 = G__57014;
i__56989 = G__57015;
continue;
} else {
var vec__56993 = cljs.core.first.call(null,seq__56986__$1);
var effect_key = cljs.core.nth.call(null,vec__56993,(0),null);
var effect_value = cljs.core.nth.call(null,vec__56993,(1),null);
var temp__4655__auto___57016 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___57016)){
var effect_fn_57017 = temp__4655__auto___57016;
effect_fn_57017.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__57018 = cljs.core.next.call(null,seq__56986__$1);
var G__57019 = null;
var G__57020 = (0);
var G__57021 = (0);
seq__56986 = G__57018;
chunk__56987 = G__57019;
count__56988 = G__57020;
i__56989 = G__57021;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__51413__auto___57022 = re_frame.interop.now.call(null);
var duration__51414__auto___57023 = (end__51413__auto___57022 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51414__auto___57023,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__51413__auto___57022);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_56985;
}} else {
var seq__56996 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56997 = null;
var count__56998 = (0);
var i__56999 = (0);
while(true){
if((i__56999 < count__56998)){
var vec__57000 = cljs.core._nth.call(null,chunk__56997,i__56999);
var effect_key = cljs.core.nth.call(null,vec__57000,(0),null);
var effect_value = cljs.core.nth.call(null,vec__57000,(1),null);
var temp__4655__auto___57024 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___57024)){
var effect_fn_57025 = temp__4655__auto___57024;
effect_fn_57025.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__57026 = seq__56996;
var G__57027 = chunk__56997;
var G__57028 = count__56998;
var G__57029 = (i__56999 + (1));
seq__56996 = G__57026;
chunk__56997 = G__57027;
count__56998 = G__57028;
i__56999 = G__57029;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56996);
if(temp__4657__auto__){
var seq__56996__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56996__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__56996__$1);
var G__57030 = cljs.core.chunk_rest.call(null,seq__56996__$1);
var G__57031 = c__4319__auto__;
var G__57032 = cljs.core.count.call(null,c__4319__auto__);
var G__57033 = (0);
seq__56996 = G__57030;
chunk__56997 = G__57031;
count__56998 = G__57032;
i__56999 = G__57033;
continue;
} else {
var vec__57003 = cljs.core.first.call(null,seq__56996__$1);
var effect_key = cljs.core.nth.call(null,vec__57003,(0),null);
var effect_value = cljs.core.nth.call(null,vec__57003,(1),null);
var temp__4655__auto___57034 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___57034)){
var effect_fn_57035 = temp__4655__auto___57034;
effect_fn_57035.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__57036 = cljs.core.next.call(null,seq__56996__$1);
var G__57037 = null;
var G__57038 = (0);
var G__57039 = (0);
seq__56996 = G__57036;
chunk__56997 = G__57037;
count__56998 = G__57038;
i__56999 = G__57039;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__57040 = cljs.core.seq.call(null,value);
var chunk__57041 = null;
var count__57042 = (0);
var i__57043 = (0);
while(true){
if((i__57043 < count__57042)){
var map__57044 = cljs.core._nth.call(null,chunk__57041,i__57043);
var map__57044__$1 = ((((!((map__57044 == null)))?(((((map__57044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57044):map__57044);
var effect = map__57044__$1;
var ms = cljs.core.get.call(null,map__57044__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__57044__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__57040,chunk__57041,count__57042,i__57043,map__57044,map__57044__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__57040,chunk__57041,count__57042,i__57043,map__57044,map__57044__$1,effect,ms,dispatch))
,ms);
}


var G__57048 = seq__57040;
var G__57049 = chunk__57041;
var G__57050 = count__57042;
var G__57051 = (i__57043 + (1));
seq__57040 = G__57048;
chunk__57041 = G__57049;
count__57042 = G__57050;
i__57043 = G__57051;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57040);
if(temp__4657__auto__){
var seq__57040__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57040__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57040__$1);
var G__57052 = cljs.core.chunk_rest.call(null,seq__57040__$1);
var G__57053 = c__4319__auto__;
var G__57054 = cljs.core.count.call(null,c__4319__auto__);
var G__57055 = (0);
seq__57040 = G__57052;
chunk__57041 = G__57053;
count__57042 = G__57054;
i__57043 = G__57055;
continue;
} else {
var map__57046 = cljs.core.first.call(null,seq__57040__$1);
var map__57046__$1 = ((((!((map__57046 == null)))?(((((map__57046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57046):map__57046);
var effect = map__57046__$1;
var ms = cljs.core.get.call(null,map__57046__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__57046__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__57040,chunk__57041,count__57042,i__57043,map__57046,map__57046__$1,effect,ms,dispatch,seq__57040__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__57040,chunk__57041,count__57042,i__57043,map__57046,map__57046__$1,effect,ms,dispatch,seq__57040__$1,temp__4657__auto__))
,ms);
}


var G__57056 = cljs.core.next.call(null,seq__57040__$1);
var G__57057 = null;
var G__57058 = (0);
var G__57059 = (0);
seq__57040 = G__57056;
chunk__57041 = G__57057;
count__57042 = G__57058;
i__57043 = G__57059;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__57060 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__57061 = null;
var count__57062 = (0);
var i__57063 = (0);
while(true){
if((i__57063 < count__57062)){
var event = cljs.core._nth.call(null,chunk__57061,i__57063);
re_frame.router.dispatch.call(null,event);


var G__57064 = seq__57060;
var G__57065 = chunk__57061;
var G__57066 = count__57062;
var G__57067 = (i__57063 + (1));
seq__57060 = G__57064;
chunk__57061 = G__57065;
count__57062 = G__57066;
i__57063 = G__57067;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57060);
if(temp__4657__auto__){
var seq__57060__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57060__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57060__$1);
var G__57068 = cljs.core.chunk_rest.call(null,seq__57060__$1);
var G__57069 = c__4319__auto__;
var G__57070 = cljs.core.count.call(null,c__4319__auto__);
var G__57071 = (0);
seq__57060 = G__57068;
chunk__57061 = G__57069;
count__57062 = G__57070;
i__57063 = G__57071;
continue;
} else {
var event = cljs.core.first.call(null,seq__57060__$1);
re_frame.router.dispatch.call(null,event);


var G__57072 = cljs.core.next.call(null,seq__57060__$1);
var G__57073 = null;
var G__57074 = (0);
var G__57075 = (0);
seq__57060 = G__57072;
chunk__57061 = G__57073;
count__57062 = G__57074;
i__57063 = G__57075;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__57076 = cljs.core.seq.call(null,value);
var chunk__57077 = null;
var count__57078 = (0);
var i__57079 = (0);
while(true){
if((i__57079 < count__57078)){
var event = cljs.core._nth.call(null,chunk__57077,i__57079);
clear_event.call(null,event);


var G__57080 = seq__57076;
var G__57081 = chunk__57077;
var G__57082 = count__57078;
var G__57083 = (i__57079 + (1));
seq__57076 = G__57080;
chunk__57077 = G__57081;
count__57078 = G__57082;
i__57079 = G__57083;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57076);
if(temp__4657__auto__){
var seq__57076__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57076__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57076__$1);
var G__57084 = cljs.core.chunk_rest.call(null,seq__57076__$1);
var G__57085 = c__4319__auto__;
var G__57086 = cljs.core.count.call(null,c__4319__auto__);
var G__57087 = (0);
seq__57076 = G__57084;
chunk__57077 = G__57085;
count__57078 = G__57086;
i__57079 = G__57087;
continue;
} else {
var event = cljs.core.first.call(null,seq__57076__$1);
clear_event.call(null,event);


var G__57088 = cljs.core.next.call(null,seq__57076__$1);
var G__57089 = null;
var G__57090 = (0);
var G__57091 = (0);
seq__57076 = G__57088;
chunk__57077 = G__57089;
count__57078 = G__57090;
i__57079 = G__57091;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1548888385356
