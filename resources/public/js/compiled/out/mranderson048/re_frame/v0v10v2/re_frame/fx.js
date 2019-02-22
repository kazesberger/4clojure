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
var seq__76539 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__76540 = null;
var count__76541 = (0);
var i__76542 = (0);
while(true){
if((i__76542 < count__76541)){
var vec__76543 = cljs.core._nth.call(null,chunk__76540,i__76542);
var effect_key = cljs.core.nth.call(null,vec__76543,(0),null);
var effect_value = cljs.core.nth.call(null,vec__76543,(1),null);
var temp__4655__auto___76549 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___76549)){
var effect_fn_76550 = temp__4655__auto___76549;
effect_fn_76550.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__76551 = seq__76539;
var G__76552 = chunk__76540;
var G__76553 = count__76541;
var G__76554 = (i__76542 + (1));
seq__76539 = G__76551;
chunk__76540 = G__76552;
count__76541 = G__76553;
i__76542 = G__76554;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__76539);
if(temp__4657__auto__){
var seq__76539__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76539__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__76539__$1);
var G__76555 = cljs.core.chunk_rest.call(null,seq__76539__$1);
var G__76556 = c__4319__auto__;
var G__76557 = cljs.core.count.call(null,c__4319__auto__);
var G__76558 = (0);
seq__76539 = G__76555;
chunk__76540 = G__76556;
count__76541 = G__76557;
i__76542 = G__76558;
continue;
} else {
var vec__76546 = cljs.core.first.call(null,seq__76539__$1);
var effect_key = cljs.core.nth.call(null,vec__76546,(0),null);
var effect_value = cljs.core.nth.call(null,vec__76546,(1),null);
var temp__4655__auto___76559 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___76559)){
var effect_fn_76560 = temp__4655__auto___76559;
effect_fn_76560.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__76561 = cljs.core.next.call(null,seq__76539__$1);
var G__76562 = null;
var G__76563 = (0);
var G__76564 = (0);
seq__76539 = G__76561;
chunk__76540 = G__76562;
count__76541 = G__76563;
i__76542 = G__76564;
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
var seq__76565 = cljs.core.seq.call(null,value);
var chunk__76566 = null;
var count__76567 = (0);
var i__76568 = (0);
while(true){
if((i__76568 < count__76567)){
var map__76569 = cljs.core._nth.call(null,chunk__76566,i__76568);
var map__76569__$1 = ((((!((map__76569 == null)))?(((((map__76569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76569):map__76569);
var effect = map__76569__$1;
var ms = cljs.core.get.call(null,map__76569__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__76569__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__76565,chunk__76566,count__76567,i__76568,map__76569,map__76569__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__76565,chunk__76566,count__76567,i__76568,map__76569,map__76569__$1,effect,ms,dispatch))
,ms);
}


var G__76573 = seq__76565;
var G__76574 = chunk__76566;
var G__76575 = count__76567;
var G__76576 = (i__76568 + (1));
seq__76565 = G__76573;
chunk__76566 = G__76574;
count__76567 = G__76575;
i__76568 = G__76576;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__76565);
if(temp__4657__auto__){
var seq__76565__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76565__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__76565__$1);
var G__76577 = cljs.core.chunk_rest.call(null,seq__76565__$1);
var G__76578 = c__4319__auto__;
var G__76579 = cljs.core.count.call(null,c__4319__auto__);
var G__76580 = (0);
seq__76565 = G__76577;
chunk__76566 = G__76578;
count__76567 = G__76579;
i__76568 = G__76580;
continue;
} else {
var map__76571 = cljs.core.first.call(null,seq__76565__$1);
var map__76571__$1 = ((((!((map__76571 == null)))?(((((map__76571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76571):map__76571);
var effect = map__76571__$1;
var ms = cljs.core.get.call(null,map__76571__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__76571__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__76565,chunk__76566,count__76567,i__76568,map__76571,map__76571__$1,effect,ms,dispatch,seq__76565__$1,temp__4657__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__76565,chunk__76566,count__76567,i__76568,map__76571,map__76571__$1,effect,ms,dispatch,seq__76565__$1,temp__4657__auto__))
,ms);
}


var G__76581 = cljs.core.next.call(null,seq__76565__$1);
var G__76582 = null;
var G__76583 = (0);
var G__76584 = (0);
seq__76565 = G__76581;
chunk__76566 = G__76582;
count__76567 = G__76583;
i__76568 = G__76584;
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
var seq__76585 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__76586 = null;
var count__76587 = (0);
var i__76588 = (0);
while(true){
if((i__76588 < count__76587)){
var event = cljs.core._nth.call(null,chunk__76586,i__76588);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__76589 = seq__76585;
var G__76590 = chunk__76586;
var G__76591 = count__76587;
var G__76592 = (i__76588 + (1));
seq__76585 = G__76589;
chunk__76586 = G__76590;
count__76587 = G__76591;
i__76588 = G__76592;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__76585);
if(temp__4657__auto__){
var seq__76585__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76585__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__76585__$1);
var G__76593 = cljs.core.chunk_rest.call(null,seq__76585__$1);
var G__76594 = c__4319__auto__;
var G__76595 = cljs.core.count.call(null,c__4319__auto__);
var G__76596 = (0);
seq__76585 = G__76593;
chunk__76586 = G__76594;
count__76587 = G__76595;
i__76588 = G__76596;
continue;
} else {
var event = cljs.core.first.call(null,seq__76585__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__76597 = cljs.core.next.call(null,seq__76585__$1);
var G__76598 = null;
var G__76599 = (0);
var G__76600 = (0);
seq__76585 = G__76597;
chunk__76586 = G__76598;
count__76587 = G__76599;
i__76588 = G__76600;
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
var seq__76601 = cljs.core.seq.call(null,value);
var chunk__76602 = null;
var count__76603 = (0);
var i__76604 = (0);
while(true){
if((i__76604 < count__76603)){
var event = cljs.core._nth.call(null,chunk__76602,i__76604);
clear_event.call(null,event);


var G__76605 = seq__76601;
var G__76606 = chunk__76602;
var G__76607 = count__76603;
var G__76608 = (i__76604 + (1));
seq__76601 = G__76605;
chunk__76602 = G__76606;
count__76603 = G__76607;
i__76604 = G__76608;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__76601);
if(temp__4657__auto__){
var seq__76601__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76601__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__76601__$1);
var G__76609 = cljs.core.chunk_rest.call(null,seq__76601__$1);
var G__76610 = c__4319__auto__;
var G__76611 = cljs.core.count.call(null,c__4319__auto__);
var G__76612 = (0);
seq__76601 = G__76609;
chunk__76602 = G__76610;
count__76603 = G__76611;
i__76604 = G__76612;
continue;
} else {
var event = cljs.core.first.call(null,seq__76601__$1);
clear_event.call(null,event);


var G__76613 = cljs.core.next.call(null,seq__76601__$1);
var G__76614 = null;
var G__76615 = (0);
var G__76616 = (0);
seq__76601 = G__76613;
chunk__76602 = G__76614;
count__76603 = G__76615;
i__76604 = G__76616;
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

//# sourceMappingURL=fx.js.map?rel=1549004135695
