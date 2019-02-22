// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__74684__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__74684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74685__i = 0, G__74685__a = new Array(arguments.length -  0);
while (G__74685__i < G__74685__a.length) {G__74685__a[G__74685__i] = arguments[G__74685__i + 0]; ++G__74685__i;}
  args = new cljs.core.IndexedSeq(G__74685__a,0,null);
} 
return G__74684__delegate.call(this,args);};
G__74684.cljs$lang$maxFixedArity = 0;
G__74684.cljs$lang$applyTo = (function (arglist__74686){
var args = cljs.core.seq(arglist__74686);
return G__74684__delegate(args);
});
G__74684.cljs$core$IFn$_invoke$arity$variadic = G__74684__delegate;
return G__74684;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__74687__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__74687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74688__i = 0, G__74688__a = new Array(arguments.length -  0);
while (G__74688__i < G__74688__a.length) {G__74688__a[G__74688__i] = arguments[G__74688__i + 0]; ++G__74688__i;}
  args = new cljs.core.IndexedSeq(G__74688__a,0,null);
} 
return G__74687__delegate.call(this,args);};
G__74687.cljs$lang$maxFixedArity = 0;
G__74687.cljs$lang$applyTo = (function (arglist__74689){
var args = cljs.core.seq(arglist__74689);
return G__74687__delegate(args);
});
G__74687.cljs$core$IFn$_invoke$arity$variadic = G__74687__delegate;
return G__74687;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1549004131964
