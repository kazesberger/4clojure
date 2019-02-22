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
var _STAR_current_trace_STAR_83800 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__83801 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__83802 = null;
var count__83803 = (0);
var i__83804 = (0);
while(true){
if((i__83804 < count__83803)){
var vec__83805 = cljs.core._nth.call(null,chunk__83802,i__83804);
var effect_key = cljs.core.nth.call(null,vec__83805,(0),null);
var effect_value = cljs.core.nth.call(null,vec__83805,(1),null);
var temp__4655__auto___83821 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___83821)){
var effect_fn_83822 = temp__4655__auto___83821;
effect_fn_83822.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__83823 = seq__83801;
var G__83824 = chunk__83802;
var G__83825 = count__83803;
var G__83826 = (i__83804 + (1));
seq__83801 = G__83823;
chunk__83802 = G__83824;
count__83803 = G__83825;
i__83804 = G__83826;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83801);
if(temp__4657__auto__){
var seq__83801__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83801__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__83801__$1);
var G__83827 = cljs.core.chunk_rest.call(null,seq__83801__$1);
var G__83828 = c__4319__auto__;
var G__83829 = cljs.core.count.call(null,c__4319__auto__);
var G__83830 = (0);
seq__83801 = G__83827;
chunk__83802 = G__83828;
count__83803 = G__83829;
i__83804 = G__83830;
continue;
} else {
var vec__83808 = cljs.core.first.call(null,seq__83801__$1);
var effect_key = cljs.core.nth.call(null,vec__83808,(0),null);
var effect_value = cljs.core.nth.call(null,vec__83808,(1),null);
var temp__4655__auto___83831 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___83831)){
var effect_fn_83832 = temp__4655__auto___83831;
effect_fn_83832.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__83833 = cljs.core.next.call(null,seq__83801__$1);
var G__83834 = null;
var G__83835 = (0);
var G__83836 = (0);
seq__83801 = G__83833;
chunk__83802 = G__83834;
count__83803 = G__83835;
i__83804 = G__83836;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__51821__auto___83837 = re_frame.interop.now.call(null);
var duration__51822__auto___83838 = (end__51821__auto___83837 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51822__auto___83838,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__51821__auto___83837);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_83800;
}} else {
var seq__83811 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__83812 = null;
var count__83813 = (0);
var i__83814 = (0);
while(true){
if((i__83814 < count__83813)){
var vec__83815 = cljs.core._nth.call(null,chunk__83812,i__83814);
var effect_key = cljs.core.nth.call(null,vec__83815,(0),null);
var effect_value = cljs.core.nth.call(null,vec__83815,(1),null);
var temp__4655__auto___83839 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___83839)){
var effect_fn_83840 = temp__4655__auto___83839;
effect_fn_83840.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__83841 = seq__83811;
var G__83842 = chunk__83812;
var G__83843 = count__83813;
var G__83844 = (i__83814 + (1));
seq__83811 = G__83841;
chunk__83812 = G__83842;
count__83813 = G__83843;
i__83814 = G__83844;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83811);
if(temp__4657__auto__){
var seq__83811__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83811__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__83811__$1);
var G__83845 = cljs.core.chunk_rest.call(null,seq__83811__$1);
var G__83846 = c__4319__auto__;
var G__83847 = cljs.core.count.call(null,c__4319__auto__);
var G__83848 = (0);
seq__83811 = G__83845;
chunk__83812 = G__83846;
count__83813 = G__83847;
i__83814 = G__83848;
continue;
} else {
var vec__83818 = cljs.core.first.call(null,seq__83811__$1);
var effect_key = cljs.core.nth.call(null,vec__83818,(0),null);
var effect_value = cljs.core.nth.call(null,vec__83818,(1),null);
var temp__4655__auto___83849 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___83849)){
var effect_fn_83850 = temp__4655__auto___83849;
effect_fn_83850.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__83851 = cljs.core.next.call(null,seq__83811__$1);
var G__83852 = null;
var G__83853 = (0);
var G__83854 = (0);
seq__83811 = G__83851;
chunk__83812 = G__83852;
count__83813 = G__83853;
i__83814 = G__83854;
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
var seq__83855 = cljs.core.seq.call(null,value);
var chunk__83856 = null;
var count__83857 = (0);
var i__83858 = (0);
while(true){
if((i__83858 < count__83857)){
var map__83859 = cljs.core._nth.call(null,chunk__83856,i__83858);
var map__83859__$1 = ((((!((map__83859 == null)))?(((((map__83859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83859):map__83859);
var effect = map__83859__$1;
var ms = cljs.core.get.call(null,map__83859__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__83859__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__83855,chunk__83856,count__83857,i__83858,map__83859,map__83859__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__83855,chunk__83856,count__83857,i__83858,map__83859,map__83859__$1,effect,ms,dispatch))
,ms);
}


var G__83863 = seq__83855;
var G__83864 = chunk__83856;
var G__83865 = count__83857;
var G__83866 = (i__83858 + (1));
seq__83855 = G__83863;
chunk__83856 = G__83864;
count__83857 = G__83865;
i__83858 = G__83866;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83855);
if(temp__4657__auto__){
var seq__83855__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83855__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__83855__$1);
var G__83867 = cljs.core.chunk_rest.call(null,seq__83855__$1);
var G__83868 = c__4319__auto__;
var G__83869 = cljs.core.count.call(null,c__4319__auto__);
var G__83870 = (0);
seq__83855 = G__83867;
chunk__83856 = G__83868;
count__83857 = G__83869;
i__83858 = G__83870;
continue;
} else {
var map__83861 = cljs.core.first.call(null,seq__83855__$1);
var map__83861__$1 = ((((!((map__83861 == null)))?(((((map__83861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83861):map__83861);
var effect = map__83861__$1;
var ms = cljs.core.get.call(null,map__83861__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__83861__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__83855,chunk__83856,count__83857,i__83858,map__83861,map__83861__$1,effect,ms,dispatch,seq__83855__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__83855,chunk__83856,count__83857,i__83858,map__83861,map__83861__$1,effect,ms,dispatch,seq__83855__$1,temp__4657__auto__))
,ms);
}


var G__83871 = cljs.core.next.call(null,seq__83855__$1);
var G__83872 = null;
var G__83873 = (0);
var G__83874 = (0);
seq__83855 = G__83871;
chunk__83856 = G__83872;
count__83857 = G__83873;
i__83858 = G__83874;
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
var seq__83875 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__83876 = null;
var count__83877 = (0);
var i__83878 = (0);
while(true){
if((i__83878 < count__83877)){
var event = cljs.core._nth.call(null,chunk__83876,i__83878);
re_frame.router.dispatch.call(null,event);


var G__83879 = seq__83875;
var G__83880 = chunk__83876;
var G__83881 = count__83877;
var G__83882 = (i__83878 + (1));
seq__83875 = G__83879;
chunk__83876 = G__83880;
count__83877 = G__83881;
i__83878 = G__83882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83875);
if(temp__4657__auto__){
var seq__83875__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83875__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__83875__$1);
var G__83883 = cljs.core.chunk_rest.call(null,seq__83875__$1);
var G__83884 = c__4319__auto__;
var G__83885 = cljs.core.count.call(null,c__4319__auto__);
var G__83886 = (0);
seq__83875 = G__83883;
chunk__83876 = G__83884;
count__83877 = G__83885;
i__83878 = G__83886;
continue;
} else {
var event = cljs.core.first.call(null,seq__83875__$1);
re_frame.router.dispatch.call(null,event);


var G__83887 = cljs.core.next.call(null,seq__83875__$1);
var G__83888 = null;
var G__83889 = (0);
var G__83890 = (0);
seq__83875 = G__83887;
chunk__83876 = G__83888;
count__83877 = G__83889;
i__83878 = G__83890;
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
var seq__83891 = cljs.core.seq.call(null,value);
var chunk__83892 = null;
var count__83893 = (0);
var i__83894 = (0);
while(true){
if((i__83894 < count__83893)){
var event = cljs.core._nth.call(null,chunk__83892,i__83894);
clear_event.call(null,event);


var G__83895 = seq__83891;
var G__83896 = chunk__83892;
var G__83897 = count__83893;
var G__83898 = (i__83894 + (1));
seq__83891 = G__83895;
chunk__83892 = G__83896;
count__83893 = G__83897;
i__83894 = G__83898;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83891);
if(temp__4657__auto__){
var seq__83891__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83891__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__83891__$1);
var G__83899 = cljs.core.chunk_rest.call(null,seq__83891__$1);
var G__83900 = c__4319__auto__;
var G__83901 = cljs.core.count.call(null,c__4319__auto__);
var G__83902 = (0);
seq__83891 = G__83899;
chunk__83892 = G__83900;
count__83893 = G__83901;
i__83894 = G__83902;
continue;
} else {
var event = cljs.core.first.call(null,seq__83891__$1);
clear_event.call(null,event);


var G__83903 = cljs.core.next.call(null,seq__83891__$1);
var G__83904 = null;
var G__83905 = (0);
var G__83906 = (0);
seq__83891 = G__83903;
chunk__83892 = G__83904;
count__83893 = G__83905;
i__83894 = G__83906;
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

//# sourceMappingURL=fx.js.map?rel=1549004154549
