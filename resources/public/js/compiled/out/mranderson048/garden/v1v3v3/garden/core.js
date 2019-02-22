// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson048.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson048.garden.v1v3v3.garden.core.css = (function mranderson048$garden$v1v3v3$garden$core$css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___83332 = arguments.length;
var i__4500__auto___83333 = (0);
while(true){
if((i__4500__auto___83333 < len__4499__auto___83332)){
args__4502__auto__.push((arguments[i__4500__auto___83333]));

var G__83334 = (i__4500__auto___83333 + (1));
i__4500__auto___83333 = G__83334;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,mranderson048.garden.v1v3v3.garden.compiler.compile_css,rules);
});

mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq83331){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83331));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson048.garden.v1v3v3.garden.core.style = (function mranderson048$garden$v1v3v3$garden$core$style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___83336 = arguments.length;
var i__4500__auto___83337 = (0);
while(true){
if((i__4500__auto___83337 < len__4499__auto___83336)){
args__4502__auto__.push((arguments[i__4500__auto___83337]));

var G__83338 = (i__4500__auto___83337 + (1));
i__4500__auto___83337 = G__83338;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson048.garden.v1v3v3.garden.compiler.compile_style.call(null,maps);
});

mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq83335){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83335));
});


//# sourceMappingURL=core.js.map?rel=1549004152909
