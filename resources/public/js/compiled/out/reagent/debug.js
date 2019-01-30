// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__50725__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__50725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50726__i = 0, G__50726__a = new Array(arguments.length -  0);
while (G__50726__i < G__50726__a.length) {G__50726__a[G__50726__i] = arguments[G__50726__i + 0]; ++G__50726__i;}
  args = new cljs.core.IndexedSeq(G__50726__a,0,null);
} 
return G__50725__delegate.call(this,args);};
G__50725.cljs$lang$maxFixedArity = 0;
G__50725.cljs$lang$applyTo = (function (arglist__50727){
var args = cljs.core.seq(arglist__50727);
return G__50725__delegate(args);
});
G__50725.cljs$core$IFn$_invoke$arity$variadic = G__50725__delegate;
return G__50725;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__50728__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__50728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50729__i = 0, G__50729__a = new Array(arguments.length -  0);
while (G__50729__i < G__50729__a.length) {G__50729__a[G__50729__i] = arguments[G__50729__i + 0]; ++G__50729__i;}
  args = new cljs.core.IndexedSeq(G__50729__a,0,null);
} 
return G__50728__delegate.call(this,args);};
G__50728.cljs$lang$maxFixedArity = 0;
G__50728.cljs$lang$applyTo = (function (arglist__50730){
var args = cljs.core.seq(arglist__50730);
return G__50728__delegate(args);
});
G__50728.cljs$core$IFn$_invoke$arity$variadic = G__50728__delegate;
return G__50728;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1548888377091
