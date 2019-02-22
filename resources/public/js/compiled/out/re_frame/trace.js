// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__83023){
var map__83024 = p__83023;
var map__83024__$1 = ((((!((map__83024 == null)))?(((((map__83024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83024):map__83024);
var operation = cljs.core.get.call(null,map__83024__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__83024__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__83024__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__83024__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__83026_83038 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__83027_83039 = null;
var count__83028_83040 = (0);
var i__83029_83041 = (0);
while(true){
if((i__83029_83041 < count__83028_83040)){
var vec__83030_83042 = cljs.core._nth.call(null,chunk__83027_83039,i__83029_83041);
var k_83043 = cljs.core.nth.call(null,vec__83030_83042,(0),null);
var cb_83044 = cljs.core.nth.call(null,vec__83030_83042,(1),null);
try{cb_83044.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e83033){var e_83045 = e83033;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_83043,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_83045);
}

var G__83046 = seq__83026_83038;
var G__83047 = chunk__83027_83039;
var G__83048 = count__83028_83040;
var G__83049 = (i__83029_83041 + (1));
seq__83026_83038 = G__83046;
chunk__83027_83039 = G__83047;
count__83028_83040 = G__83048;
i__83029_83041 = G__83049;
continue;
} else {
var temp__4657__auto___83050 = cljs.core.seq.call(null,seq__83026_83038);
if(temp__4657__auto___83050){
var seq__83026_83051__$1 = temp__4657__auto___83050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83026_83051__$1)){
var c__4319__auto___83052 = cljs.core.chunk_first.call(null,seq__83026_83051__$1);
var G__83053 = cljs.core.chunk_rest.call(null,seq__83026_83051__$1);
var G__83054 = c__4319__auto___83052;
var G__83055 = cljs.core.count.call(null,c__4319__auto___83052);
var G__83056 = (0);
seq__83026_83038 = G__83053;
chunk__83027_83039 = G__83054;
count__83028_83040 = G__83055;
i__83029_83041 = G__83056;
continue;
} else {
var vec__83034_83057 = cljs.core.first.call(null,seq__83026_83051__$1);
var k_83058 = cljs.core.nth.call(null,vec__83034_83057,(0),null);
var cb_83059 = cljs.core.nth.call(null,vec__83034_83057,(1),null);
try{cb_83059.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e83037){var e_83060 = e83037;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_83058,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_83060);
}

var G__83061 = cljs.core.next.call(null,seq__83026_83051__$1);
var G__83062 = null;
var G__83063 = (0);
var G__83064 = (0);
seq__83026_83038 = G__83061;
chunk__83027_83039 = G__83062;
count__83028_83040 = G__83063;
i__83029_83041 = G__83064;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1549004151915
