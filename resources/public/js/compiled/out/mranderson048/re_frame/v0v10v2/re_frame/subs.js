// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__76169_76179 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction));
var chunk__76170_76180 = null;
var count__76171_76181 = (0);
var i__76172_76182 = (0);
while(true){
if((i__76172_76182 < count__76171_76181)){
var vec__76173_76183 = cljs.core._nth.call(null,chunk__76170_76180,i__76172_76182);
var k_76184 = cljs.core.nth.call(null,vec__76173_76183,(0),null);
var rxn_76185 = cljs.core.nth.call(null,vec__76173_76183,(1),null);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_76185);


var G__76186 = seq__76169_76179;
var G__76187 = chunk__76170_76180;
var G__76188 = count__76171_76181;
var G__76189 = (i__76172_76182 + (1));
seq__76169_76179 = G__76186;
chunk__76170_76180 = G__76187;
count__76171_76181 = G__76188;
i__76172_76182 = G__76189;
continue;
} else {
var temp__4657__auto___76190 = cljs.core.seq.call(null,seq__76169_76179);
if(temp__4657__auto___76190){
var seq__76169_76191__$1 = temp__4657__auto___76190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76169_76191__$1)){
var c__4319__auto___76192 = cljs.core.chunk_first.call(null,seq__76169_76191__$1);
var G__76193 = cljs.core.chunk_rest.call(null,seq__76169_76191__$1);
var G__76194 = c__4319__auto___76192;
var G__76195 = cljs.core.count.call(null,c__4319__auto___76192);
var G__76196 = (0);
seq__76169_76179 = G__76193;
chunk__76170_76180 = G__76194;
count__76171_76181 = G__76195;
i__76172_76182 = G__76196;
continue;
} else {
var vec__76176_76197 = cljs.core.first.call(null,seq__76169_76191__$1);
var k_76198 = cljs.core.nth.call(null,vec__76176_76197,(0),null);
var rxn_76199 = cljs.core.nth.call(null,vec__76176_76197,(1),null);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_76199);


var G__76200 = cljs.core.next.call(null,seq__76169_76191__$1);
var G__76201 = null;
var G__76202 = (0);
var G__76203 = (0);
seq__76169_76179 = G__76200;
chunk__76170_76180 = G__76201;
count__76171_76181 = G__76202;
i__76172_76182 = G__76203;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$subs$clear_all_handlers_BANG_(){
mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind);

return mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return = (function mranderson048$re_frame$v0v10v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson048.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_76204 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__75592__auto___76217 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__75593__auto___76218 = (end__75592__auto___76217 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__76205_76219 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__76206_76220 = null;
var count__76207_76221 = (0);
var i__76208_76222 = (0);
while(true){
if((i__76208_76222 < count__76207_76221)){
var vec__76209_76223 = cljs.core._nth.call(null,chunk__76206_76220,i__76208_76222);
var k__75594__auto___76224 = cljs.core.nth.call(null,vec__76209_76223,(0),null);
var cb__75595__auto___76225 = cljs.core.nth.call(null,vec__76209_76223,(1),null);
try{cb__75595__auto___76225.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76218,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76212){if((e76212 instanceof java.lang.Exception)){
var e__75596__auto___76226 = e76212;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76224,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76226);
} else {
throw e76212;

}
}

var G__76227 = seq__76205_76219;
var G__76228 = chunk__76206_76220;
var G__76229 = count__76207_76221;
var G__76230 = (i__76208_76222 + (1));
seq__76205_76219 = G__76227;
chunk__76206_76220 = G__76228;
count__76207_76221 = G__76229;
i__76208_76222 = G__76230;
continue;
} else {
var temp__4657__auto___76231 = cljs.core.seq.call(null,seq__76205_76219);
if(temp__4657__auto___76231){
var seq__76205_76232__$1 = temp__4657__auto___76231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76205_76232__$1)){
var c__4319__auto___76233 = cljs.core.chunk_first.call(null,seq__76205_76232__$1);
var G__76234 = cljs.core.chunk_rest.call(null,seq__76205_76232__$1);
var G__76235 = c__4319__auto___76233;
var G__76236 = cljs.core.count.call(null,c__4319__auto___76233);
var G__76237 = (0);
seq__76205_76219 = G__76234;
chunk__76206_76220 = G__76235;
count__76207_76221 = G__76236;
i__76208_76222 = G__76237;
continue;
} else {
var vec__76213_76238 = cljs.core.first.call(null,seq__76205_76232__$1);
var k__75594__auto___76239 = cljs.core.nth.call(null,vec__76213_76238,(0),null);
var cb__75595__auto___76240 = cljs.core.nth.call(null,vec__76213_76238,(1),null);
try{cb__75595__auto___76240.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76218,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76216){if((e76216 instanceof java.lang.Exception)){
var e__75596__auto___76241 = e76216;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76239,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76241);
} else {
throw e76216;

}
}

var G__76242 = cljs.core.next.call(null,seq__76205_76232__$1);
var G__76243 = null;
var G__76244 = (0);
var G__76245 = (0);
seq__76205_76219 = G__76242;
chunk__76206_76220 = G__76243;
count__76207_76221 = G__76244;
i__76208_76222 = G__76245;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_76204;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76246 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76246;

} else {
}

return r;
});
mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup = (function mranderson048$re_frame$v0v10v2$re_frame$subs$cache_lookup(var_args){
var G__76248 = arguments.length;
switch (G__76248) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson048.re-frame.v0v10v2.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe = (function mranderson048$re_frame$v0v10v2$re_frame$subs$subscribe(var_args){
var G__76251 = arguments.length;
switch (G__76251) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_76252 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76279 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76279;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76280 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76280;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76281 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76281;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__75592__auto___76282 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__75593__auto___76283 = (end__75592__auto___76282 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__76253_76284 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__76254_76285 = null;
var count__76255_76286 = (0);
var i__76256_76287 = (0);
while(true){
if((i__76256_76287 < count__76255_76286)){
var vec__76257_76288 = cljs.core._nth.call(null,chunk__76254_76285,i__76256_76287);
var k__75594__auto___76289 = cljs.core.nth.call(null,vec__76257_76288,(0),null);
var cb__75595__auto___76290 = cljs.core.nth.call(null,vec__76257_76288,(1),null);
try{cb__75595__auto___76290.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76283,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76260){if((e76260 instanceof java.lang.Exception)){
var e__75596__auto___76291 = e76260;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76289,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76291);
} else {
throw e76260;

}
}

var G__76292 = seq__76253_76284;
var G__76293 = chunk__76254_76285;
var G__76294 = count__76255_76286;
var G__76295 = (i__76256_76287 + (1));
seq__76253_76284 = G__76292;
chunk__76254_76285 = G__76293;
count__76255_76286 = G__76294;
i__76256_76287 = G__76295;
continue;
} else {
var temp__4657__auto___76296 = cljs.core.seq.call(null,seq__76253_76284);
if(temp__4657__auto___76296){
var seq__76253_76297__$1 = temp__4657__auto___76296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76253_76297__$1)){
var c__4319__auto___76298 = cljs.core.chunk_first.call(null,seq__76253_76297__$1);
var G__76299 = cljs.core.chunk_rest.call(null,seq__76253_76297__$1);
var G__76300 = c__4319__auto___76298;
var G__76301 = cljs.core.count.call(null,c__4319__auto___76298);
var G__76302 = (0);
seq__76253_76284 = G__76299;
chunk__76254_76285 = G__76300;
count__76255_76286 = G__76301;
i__76256_76287 = G__76302;
continue;
} else {
var vec__76261_76303 = cljs.core.first.call(null,seq__76253_76297__$1);
var k__75594__auto___76304 = cljs.core.nth.call(null,vec__76261_76303,(0),null);
var cb__75595__auto___76305 = cljs.core.nth.call(null,vec__76261_76303,(1),null);
try{cb__75595__auto___76305.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76283,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76264){if((e76264 instanceof java.lang.Exception)){
var e__75596__auto___76306 = e76264;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76304,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76306);
} else {
throw e76264;

}
}

var G__76307 = cljs.core.next.call(null,seq__76253_76297__$1);
var G__76308 = null;
var G__76309 = (0);
var G__76310 = (0);
seq__76253_76284 = G__76307;
chunk__76254_76285 = G__76308;
count__76255_76286 = G__76309;
i__76256_76287 = G__76310;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_76252;
}} else {
var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76311 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76311;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76312 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76312;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76313 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76313;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_76265 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76314 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76314;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76315 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76315;

} else {
}

if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___76316 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___76316)){
var not_reactive_76317 = temp__4657__auto___76316;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_76317);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76318 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76318;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_76265){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_76265))
);
var sub = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_76265){
return (function (){
return handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_76265))
);
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_76265){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_76265))
));
}
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__75592__auto___76319 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__75593__auto___76320 = (end__75592__auto___76319 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__76266_76321 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__76267_76322 = null;
var count__76268_76323 = (0);
var i__76269_76324 = (0);
while(true){
if((i__76269_76324 < count__76268_76323)){
var vec__76270_76325 = cljs.core._nth.call(null,chunk__76267_76322,i__76269_76324);
var k__75594__auto___76326 = cljs.core.nth.call(null,vec__76270_76325,(0),null);
var cb__75595__auto___76327 = cljs.core.nth.call(null,vec__76270_76325,(1),null);
try{cb__75595__auto___76327.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76320,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76273){if((e76273 instanceof java.lang.Exception)){
var e__75596__auto___76328 = e76273;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76326,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76328);
} else {
throw e76273;

}
}

var G__76329 = seq__76266_76321;
var G__76330 = chunk__76267_76322;
var G__76331 = count__76268_76323;
var G__76332 = (i__76269_76324 + (1));
seq__76266_76321 = G__76329;
chunk__76267_76322 = G__76330;
count__76268_76323 = G__76331;
i__76269_76324 = G__76332;
continue;
} else {
var temp__4657__auto___76333 = cljs.core.seq.call(null,seq__76266_76321);
if(temp__4657__auto___76333){
var seq__76266_76334__$1 = temp__4657__auto___76333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76266_76334__$1)){
var c__4319__auto___76335 = cljs.core.chunk_first.call(null,seq__76266_76334__$1);
var G__76336 = cljs.core.chunk_rest.call(null,seq__76266_76334__$1);
var G__76337 = c__4319__auto___76335;
var G__76338 = cljs.core.count.call(null,c__4319__auto___76335);
var G__76339 = (0);
seq__76266_76321 = G__76336;
chunk__76267_76322 = G__76337;
count__76268_76323 = G__76338;
i__76269_76324 = G__76339;
continue;
} else {
var vec__76274_76340 = cljs.core.first.call(null,seq__76266_76334__$1);
var k__75594__auto___76341 = cljs.core.nth.call(null,vec__76274_76340,(0),null);
var cb__75595__auto___76342 = cljs.core.nth.call(null,vec__76274_76340,(1),null);
try{cb__75595__auto___76342.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76320,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76277){if((e76277 instanceof java.lang.Exception)){
var e__75596__auto___76343 = e76277;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76341,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76343);
} else {
throw e76277;

}
}

var G__76344 = cljs.core.next.call(null,seq__76266_76334__$1);
var G__76345 = null;
var G__76346 = (0);
var G__76347 = (0);
seq__76266_76321 = G__76344;
chunk__76267_76322 = G__76345;
count__76268_76323 = G__76346;
i__76269_76324 = G__76347;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_76265;
}} else {
var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76348 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76348;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76349 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76349;

} else {
}

if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___76350 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___76350)){
var not_reactive_76351 = temp__4657__auto___76350;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_76351);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76352 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76352;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.map_vals = (function mranderson048$re_frame$v0v10v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__76353){
var vec__76354 = p__76353;
var k = cljs.core.nth.call(null,vec__76354,(0),null);
var v = cljs.core.nth.call(null,vec__76354,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals = (function mranderson048$re_frame$v0v10v2$re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?mranderson048.re_frame.v0v10v2.re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76357 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76357;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub = (function mranderson048$re_frame$v0v10v2$re_frame$subs$reg_sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___76390 = arguments.length;
var i__4500__auto___76391 = (0);
while(true){
if((i__4500__auto___76391 < len__4499__auto___76390)){
args__4502__auto__.push((arguments[i__4500__auto___76391]));

var G__76392 = (i__4500__auto___76391 + (1));
i__4500__auto___76391 = G__76392;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__76360 = cljs.core.count.call(null,input_args);
switch (G__76360) {
case (0):
return ((function (G__76360,computation_fn,input_args,err_header){
return (function() {
var G__76394 = null;
var G__76394__1 = (function (_){
return mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
});
var G__76394__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
});
G__76394 = function(_,___$1){
switch(arguments.length){
case 1:
return G__76394__1.call(this,_);
case 2:
return G__76394__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__76394.cljs$core$IFn$_invoke$arity$1 = G__76394__1;
G__76394.cljs$core$IFn$_invoke$arity$2 = G__76394__2;
return G__76394;
})()
;})(G__76360,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__76361 = input_args;
var marker = cljs.core.nth.call(null,vec__76361,(0),null);
var vec = cljs.core.nth.call(null,vec__76361,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__76361,marker,vec,G__76360,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(vec__76361,marker,vec,G__76360,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__76360,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__76360,computation_fn,input_args,err_header))

}
})();
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_76364 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76395 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76395;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__75592__auto___76396 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__75593__auto___76397 = (end__75592__auto___76396 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__76365_76398 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__76366_76399 = null;
var count__76367_76400 = (0);
var i__76368_76401 = (0);
while(true){
if((i__76368_76401 < count__76367_76400)){
var vec__76369_76402 = cljs.core._nth.call(null,chunk__76366_76399,i__76368_76401);
var k__75594__auto___76403 = cljs.core.nth.call(null,vec__76369_76402,(0),null);
var cb__75595__auto___76404 = cljs.core.nth.call(null,vec__76369_76402,(1),null);
try{cb__75595__auto___76404.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76397,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76372){if((e76372 instanceof java.lang.Exception)){
var e__75596__auto___76405 = e76372;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76403,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76405);
} else {
throw e76372;

}
}

var G__76406 = seq__76365_76398;
var G__76407 = chunk__76366_76399;
var G__76408 = count__76367_76400;
var G__76409 = (i__76368_76401 + (1));
seq__76365_76398 = G__76406;
chunk__76366_76399 = G__76407;
count__76367_76400 = G__76408;
i__76368_76401 = G__76409;
continue;
} else {
var temp__4657__auto___76410 = cljs.core.seq.call(null,seq__76365_76398);
if(temp__4657__auto___76410){
var seq__76365_76411__$1 = temp__4657__auto___76410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76365_76411__$1)){
var c__4319__auto___76412 = cljs.core.chunk_first.call(null,seq__76365_76411__$1);
var G__76413 = cljs.core.chunk_rest.call(null,seq__76365_76411__$1);
var G__76414 = c__4319__auto___76412;
var G__76415 = cljs.core.count.call(null,c__4319__auto___76412);
var G__76416 = (0);
seq__76365_76398 = G__76413;
chunk__76366_76399 = G__76414;
count__76367_76400 = G__76415;
i__76368_76401 = G__76416;
continue;
} else {
var vec__76373_76417 = cljs.core.first.call(null,seq__76365_76411__$1);
var k__75594__auto___76418 = cljs.core.nth.call(null,vec__76373_76417,(0),null);
var cb__75595__auto___76419 = cljs.core.nth.call(null,vec__76373_76417,(1),null);
try{cb__75595__auto___76419.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76397,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76376){if((e76376 instanceof java.lang.Exception)){
var e__75596__auto___76420 = e76376;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76418,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76420);
} else {
throw e76376;

}
}

var G__76421 = cljs.core.next.call(null,seq__76365_76411__$1);
var G__76422 = null;
var G__76423 = (0);
var G__76424 = (0);
seq__76365_76398 = G__76421;
chunk__76366_76399 = G__76422;
count__76367_76400 = G__76423;
i__76368_76401 = G__76424;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_76364;
}} else {
var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76425 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76425;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_76377 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76426 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76426;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__75592__auto___76427 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__75593__auto___76428 = (end__75592__auto___76427 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__76378_76429 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__76379_76430 = null;
var count__76380_76431 = (0);
var i__76381_76432 = (0);
while(true){
if((i__76381_76432 < count__76380_76431)){
var vec__76382_76433 = cljs.core._nth.call(null,chunk__76379_76430,i__76381_76432);
var k__75594__auto___76434 = cljs.core.nth.call(null,vec__76382_76433,(0),null);
var cb__75595__auto___76435 = cljs.core.nth.call(null,vec__76382_76433,(1),null);
try{cb__75595__auto___76435.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76428,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76385){if((e76385 instanceof java.lang.Exception)){
var e__75596__auto___76436 = e76385;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76434,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76436);
} else {
throw e76385;

}
}

var G__76437 = seq__76378_76429;
var G__76438 = chunk__76379_76430;
var G__76439 = count__76380_76431;
var G__76440 = (i__76381_76432 + (1));
seq__76378_76429 = G__76437;
chunk__76379_76430 = G__76438;
count__76380_76431 = G__76439;
i__76381_76432 = G__76440;
continue;
} else {
var temp__4657__auto___76441 = cljs.core.seq.call(null,seq__76378_76429);
if(temp__4657__auto___76441){
var seq__76378_76442__$1 = temp__4657__auto___76441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76378_76442__$1)){
var c__4319__auto___76443 = cljs.core.chunk_first.call(null,seq__76378_76442__$1);
var G__76444 = cljs.core.chunk_rest.call(null,seq__76378_76442__$1);
var G__76445 = c__4319__auto___76443;
var G__76446 = cljs.core.count.call(null,c__4319__auto___76443);
var G__76447 = (0);
seq__76378_76429 = G__76444;
chunk__76379_76430 = G__76445;
count__76380_76431 = G__76446;
i__76381_76432 = G__76447;
continue;
} else {
var vec__76386_76448 = cljs.core.first.call(null,seq__76378_76442__$1);
var k__75594__auto___76449 = cljs.core.nth.call(null,vec__76386_76448,(0),null);
var cb__75595__auto___76450 = cljs.core.nth.call(null,vec__76386_76448,(1),null);
try{cb__75595__auto___76450.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75593__auto___76428,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e76389){if((e76389 instanceof java.lang.Exception)){
var e__75596__auto___76451 = e76389;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__75594__auto___76449,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__75596__auto___76451);
} else {
throw e76389;

}
}

var G__76452 = cljs.core.next.call(null,seq__76378_76442__$1);
var G__76453 = null;
var G__76454 = (0);
var G__76455 = (0);
seq__76378_76429 = G__76452;
chunk__76379_76430 = G__76453;
count__76380_76431 = G__76454;
i__76381_76432 = G__76455;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_76377;
}} else {
var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__75597__auto___76456 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__75597__auto___76456;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2;
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3;
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq76358){
var G__76359 = cljs.core.first.call(null,seq76358);
var seq76358__$1 = cljs.core.next.call(null,seq76358);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76359,seq76358__$1);
});


//# sourceMappingURL=subs.js.map?rel=1549004135552
