// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson048$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__75687_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__75687_SHARP_));
});
if(!(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___75688 = cljs.core.first.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___75688)){
var not_i_75689 = temp__4657__auto___75688;
if(cljs.core.fn_QMARK_.call(null,not_i_75689)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_75689);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_75689);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson048.re_frame.v0v10v2.re_frame.events.register = (function mranderson048$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,id,mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.handle = (function mranderson048$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_75690 = mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_75691 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson048.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__75592__auto___75704 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__75593__auto___75705 = (end__75592__auto___75704 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__75692_75706 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__75693_75707 = null;
var count__75694_75708 = (0);
var i__75695_75709 = (0);
while(true){
if((i__75695_75709 < count__75694_75708)){
var vec__75696_75710 = cljs.core._nth.call(null,chunk__75693_75707,i__75695_75709);
var k__75594__auto___75711 = cljs.core.nth.call(null,vec__75696_75710,(0),null);
var cb__75595__auto___75712 = cljs.core.nth.call(null,vec__75696_75710,(1),null);
try{cb__75595__auto___75712.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___75705,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e75699){if((e75699 instanceof java.lang.Exception)){
var e__75596__auto___75713 = e75699;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___75711,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___75713);
} else {
throw e75699;

}
}

var G__75714 = seq__75692_75706;
var G__75715 = chunk__75693_75707;
var G__75716 = count__75694_75708;
var G__75717 = (i__75695_75709 + (1));
seq__75692_75706 = G__75714;
chunk__75693_75707 = G__75715;
count__75694_75708 = G__75716;
i__75695_75709 = G__75717;
continue;
} else {
var temp__4657__auto___75718 = cljs.core.seq.call(null,seq__75692_75706);
if(temp__4657__auto___75718){
var seq__75692_75719__$1 = temp__4657__auto___75718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75692_75719__$1)){
var c__4319__auto___75720 = cljs.core.chunk_first.call(null,seq__75692_75719__$1);
var G__75721 = cljs.core.chunk_rest.call(null,seq__75692_75719__$1);
var G__75722 = c__4319__auto___75720;
var G__75723 = cljs.core.count.call(null,c__4319__auto___75720);
var G__75724 = (0);
seq__75692_75706 = G__75721;
chunk__75693_75707 = G__75722;
count__75694_75708 = G__75723;
i__75695_75709 = G__75724;
continue;
} else {
var vec__75700_75725 = cljs.core.first.call(null,seq__75692_75719__$1);
var k__75594__auto___75726 = cljs.core.nth.call(null,vec__75700_75725,(0),null);
var cb__75595__auto___75727 = cljs.core.nth.call(null,vec__75700_75725,(1),null);
try{cb__75595__auto___75727.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___75705,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e75703){if((e75703 instanceof java.lang.Exception)){
var e__75596__auto___75728 = e75703;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___75726,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___75728);
} else {
throw e75703;

}
}

var G__75729 = cljs.core.next.call(null,seq__75692_75719__$1);
var G__75730 = null;
var G__75731 = (0);
var G__75732 = (0);
seq__75692_75706 = G__75729;
chunk__75693_75707 = G__75730;
count__75694_75708 = G__75731;
i__75695_75709 = G__75732;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_75691;
}} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_75690;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1549004134777
