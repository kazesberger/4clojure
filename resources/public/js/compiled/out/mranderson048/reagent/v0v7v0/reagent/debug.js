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
var G__62976__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__62976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62977__i = 0, G__62977__a = new Array(arguments.length -  0);
while (G__62977__i < G__62977__a.length) {G__62977__a[G__62977__i] = arguments[G__62977__i + 0]; ++G__62977__i;}
  args = new cljs.core.IndexedSeq(G__62977__a,0,null);
} 
return G__62976__delegate.call(this,args);};
G__62976.cljs$lang$maxFixedArity = 0;
G__62976.cljs$lang$applyTo = (function (arglist__62978){
var args = cljs.core.seq(arglist__62978);
return G__62976__delegate(args);
});
G__62976.cljs$core$IFn$_invoke$arity$variadic = G__62976__delegate;
return G__62976;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__62979__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__62979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62980__i = 0, G__62980__a = new Array(arguments.length -  0);
while (G__62980__i < G__62980__a.length) {G__62980__a[G__62980__i] = arguments[G__62980__i + 0]; ++G__62980__i;}
  args = new cljs.core.IndexedSeq(G__62980__a,0,null);
} 
return G__62979__delegate.call(this,args);};
G__62979.cljs$lang$maxFixedArity = 0;
G__62979.cljs$lang$applyTo = (function (arglist__62981){
var args = cljs.core.seq(arglist__62981);
return G__62979__delegate(args);
});
G__62979.cljs$core$IFn$_invoke$arity$variadic = G__62979__delegate;
return G__62979;
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

//# sourceMappingURL=debug.js.map?rel=1548888394227
