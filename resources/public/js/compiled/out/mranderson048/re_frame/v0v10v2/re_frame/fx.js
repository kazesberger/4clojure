// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
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
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__63940 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__63941 = null;
var count__63942 = (0);
var i__63943 = (0);
while(true){
if((i__63943 < count__63942)){
var vec__63944 = cljs.core._nth.call(null,chunk__63941,i__63943);
var effect_key = cljs.core.nth.call(null,vec__63944,(0),null);
var effect_value = cljs.core.nth.call(null,vec__63944,(1),null);
var temp__4655__auto___63950 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___63950)){
var effect_fn_63951 = temp__4655__auto___63950;
effect_fn_63951.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__63952 = seq__63940;
var G__63953 = chunk__63941;
var G__63954 = count__63942;
var G__63955 = (i__63943 + (1));
seq__63940 = G__63952;
chunk__63941 = G__63953;
count__63942 = G__63954;
i__63943 = G__63955;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63940);
if(temp__4657__auto__){
var seq__63940__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63940__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__63940__$1);
var G__63956 = cljs.core.chunk_rest.call(null,seq__63940__$1);
var G__63957 = c__4319__auto__;
var G__63958 = cljs.core.count.call(null,c__4319__auto__);
var G__63959 = (0);
seq__63940 = G__63956;
chunk__63941 = G__63957;
count__63942 = G__63958;
i__63943 = G__63959;
continue;
} else {
var vec__63947 = cljs.core.first.call(null,seq__63940__$1);
var effect_key = cljs.core.nth.call(null,vec__63947,(0),null);
var effect_value = cljs.core.nth.call(null,vec__63947,(1),null);
var temp__4655__auto___63960 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___63960)){
var effect_fn_63961 = temp__4655__auto___63960;
effect_fn_63961.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__63962 = cljs.core.next.call(null,seq__63940__$1);
var G__63963 = null;
var G__63964 = (0);
var G__63965 = (0);
seq__63940 = G__63962;
chunk__63941 = G__63963;
count__63942 = G__63964;
i__63943 = G__63965;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__63966 = cljs.core.seq.call(null,value);
var chunk__63967 = null;
var count__63968 = (0);
var i__63969 = (0);
while(true){
if((i__63969 < count__63968)){
var map__63970 = cljs.core._nth.call(null,chunk__63967,i__63969);
var map__63970__$1 = ((((!((map__63970 == null)))?(((((map__63970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63970):map__63970);
var effect = map__63970__$1;
var ms = cljs.core.get.call(null,map__63970__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__63970__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__63966,chunk__63967,count__63968,i__63969,map__63970,map__63970__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__63966,chunk__63967,count__63968,i__63969,map__63970,map__63970__$1,effect,ms,dispatch))
,ms);
}


var G__63974 = seq__63966;
var G__63975 = chunk__63967;
var G__63976 = count__63968;
var G__63977 = (i__63969 + (1));
seq__63966 = G__63974;
chunk__63967 = G__63975;
count__63968 = G__63976;
i__63969 = G__63977;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63966);
if(temp__4657__auto__){
var seq__63966__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63966__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__63966__$1);
var G__63978 = cljs.core.chunk_rest.call(null,seq__63966__$1);
var G__63979 = c__4319__auto__;
var G__63980 = cljs.core.count.call(null,c__4319__auto__);
var G__63981 = (0);
seq__63966 = G__63978;
chunk__63967 = G__63979;
count__63968 = G__63980;
i__63969 = G__63981;
continue;
} else {
var map__63972 = cljs.core.first.call(null,seq__63966__$1);
var map__63972__$1 = ((((!((map__63972 == null)))?(((((map__63972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63972):map__63972);
var effect = map__63972__$1;
var ms = cljs.core.get.call(null,map__63972__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__63972__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__63966,chunk__63967,count__63968,i__63969,map__63972,map__63972__$1,effect,ms,dispatch,seq__63966__$1,temp__4657__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__63966,chunk__63967,count__63968,i__63969,map__63972,map__63972__$1,effect,ms,dispatch,seq__63966__$1,temp__4657__auto__))
,ms);
}


var G__63982 = cljs.core.next.call(null,seq__63966__$1);
var G__63983 = null;
var G__63984 = (0);
var G__63985 = (0);
seq__63966 = G__63982;
chunk__63967 = G__63983;
count__63968 = G__63984;
i__63969 = G__63985;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__63986 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__63987 = null;
var count__63988 = (0);
var i__63989 = (0);
while(true){
if((i__63989 < count__63988)){
var event = cljs.core._nth.call(null,chunk__63987,i__63989);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__63990 = seq__63986;
var G__63991 = chunk__63987;
var G__63992 = count__63988;
var G__63993 = (i__63989 + (1));
seq__63986 = G__63990;
chunk__63987 = G__63991;
count__63988 = G__63992;
i__63989 = G__63993;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63986);
if(temp__4657__auto__){
var seq__63986__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63986__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__63986__$1);
var G__63994 = cljs.core.chunk_rest.call(null,seq__63986__$1);
var G__63995 = c__4319__auto__;
var G__63996 = cljs.core.count.call(null,c__4319__auto__);
var G__63997 = (0);
seq__63986 = G__63994;
chunk__63987 = G__63995;
count__63988 = G__63996;
i__63989 = G__63997;
continue;
} else {
var event = cljs.core.first.call(null,seq__63986__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__63998 = cljs.core.next.call(null,seq__63986__$1);
var G__63999 = null;
var G__64000 = (0);
var G__64001 = (0);
seq__63986 = G__63998;
chunk__63987 = G__63999;
count__63988 = G__64000;
i__63989 = G__64001;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__64002 = cljs.core.seq.call(null,value);
var chunk__64003 = null;
var count__64004 = (0);
var i__64005 = (0);
while(true){
if((i__64005 < count__64004)){
var event = cljs.core._nth.call(null,chunk__64003,i__64005);
clear_event.call(null,event);


var G__64006 = seq__64002;
var G__64007 = chunk__64003;
var G__64008 = count__64004;
var G__64009 = (i__64005 + (1));
seq__64002 = G__64006;
chunk__64003 = G__64007;
count__64004 = G__64008;
i__64005 = G__64009;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__64002);
if(temp__4657__auto__){
var seq__64002__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64002__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__64002__$1);
var G__64010 = cljs.core.chunk_rest.call(null,seq__64002__$1);
var G__64011 = c__4319__auto__;
var G__64012 = cljs.core.count.call(null,c__4319__auto__);
var G__64013 = (0);
seq__64002 = G__64010;
chunk__64003 = G__64011;
count__64004 = G__64012;
i__64005 = G__64013;
continue;
} else {
var event = cljs.core.first.call(null,seq__64002__$1);
clear_event.call(null,event);


var G__64014 = cljs.core.next.call(null,seq__64002__$1);
var G__64015 = null;
var G__64016 = (0);
var G__64017 = (0);
seq__64002 = G__64014;
chunk__64003 = G__64015;
count__64004 = G__64016;
i__64005 = G__64017;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1548888395971
