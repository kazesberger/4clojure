// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('mranderson048.garden.v1v3v3.garden.util');
goog.require('mranderson048.garden.v1v3v3.garden.color');
goog.require('mranderson048.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4502__auto__ = [];
var len__4499__auto___84202 = arguments.length;
var i__4500__auto___84203 = (0);
while(true){
if((i__4500__auto___84203 < len__4499__auto___84202)){
args__4502__auto__.push((arguments[i__4500__auto___84203]));

var G__84204 = (i__4500__auto___84203 + (1));
i__4500__auto___84203 = G__84204;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__84205__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__84205 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__84206__i = 0, G__84206__a = new Array(arguments.length -  0);
while (G__84206__i < G__84206__a.length) {G__84206__a[G__84206__i] = arguments[G__84206__i + 0]; ++G__84206__i;}
  children = new cljs.core.IndexedSeq(G__84206__a,0,null);
} 
return G__84205__delegate.call(this,children);};
G__84205.cljs$lang$maxFixedArity = 0;
G__84205.cljs$lang$applyTo = (function (arglist__84207){
var children = cljs.core.seq(arglist__84207);
return G__84205__delegate(children);
});
G__84205.cljs$core$IFn$_invoke$arity$variadic = G__84205__delegate;
return G__84205;
})()
;
}
});

mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq84200){
var G__84201 = cljs.core.first.call(null,seq84200);
var seq84200__$1 = cljs.core.next.call(null,seq84200);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84201,seq84200__$1);
});

mranderson048.garden.v1v3v3.garden.stylesheet.cssfn = (function mranderson048$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__84208__delegate = function (args){
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__84208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84209__i = 0, G__84209__a = new Array(arguments.length -  0);
while (G__84209__i < G__84209__a.length) {G__84209__a[G__84209__i] = arguments[G__84209__i + 0]; ++G__84209__i;}
  args = new cljs.core.IndexedSeq(G__84209__a,0,null);
} 
return G__84208__delegate.call(this,args);};
G__84208.cljs$lang$maxFixedArity = 0;
G__84208.cljs$lang$applyTo = (function (arglist__84210){
var args = cljs.core.seq(arglist__84210);
return G__84208__delegate(args);
});
G__84208.cljs$core$IFn$_invoke$arity$variadic = G__84208__delegate;
return G__84208;
})()
;
});
mranderson048.garden.v1v3v3.garden.stylesheet.at_rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4502__auto__ = [];
var len__4499__auto___84212 = arguments.length;
var i__4500__auto___84213 = (0);
while(true){
if((i__4500__auto___84213 < len__4499__auto___84212)){
args__4502__auto__.push((arguments[i__4500__auto___84213]));

var G__84214 = (i__4500__auto___84213 + (1));
i__4500__auto___84213 = G__84214;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq84211){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84211));
});

/**
 * Create a CSS @import rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__84218 = arguments.length;
switch (G__84218) {
case 1:
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___84220 = arguments.length;
var i__4500__auto___84221 = (0);
while(true){
if((i__4500__auto___84221 < len__4499__auto___84220)){
args_arr__4514__auto__.push((arguments[i__4500__auto___84221]));

var G__84222 = (i__4500__auto___84221 + (1));
i__4500__auto___84221 = G__84222;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq84216){
var G__84217 = cljs.core.first.call(null,seq84216);
var seq84216__$1 = cljs.core.next.call(null,seq84216);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84217,seq84216__$1);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___84225 = arguments.length;
var i__4500__auto___84226 = (0);
while(true){
if((i__4500__auto___84226 < len__4499__auto___84225)){
args__4502__auto__.push((arguments[i__4500__auto___84226]));

var G__84227 = (i__4500__auto___84226 + (1));
i__4500__auto___84226 = G__84227;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq84223){
var G__84224 = cljs.core.first.call(null,seq84223);
var seq84223__$1 = cljs.core.next.call(null,seq84223);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84224,seq84223__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___84230 = arguments.length;
var i__4500__auto___84231 = (0);
while(true){
if((i__4500__auto___84231 < len__4499__auto___84230)){
args__4502__auto__.push((arguments[i__4500__auto___84231]));

var G__84232 = (i__4500__auto___84231 + (1));
i__4500__auto___84231 = G__84232;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq84228){
var G__84229 = cljs.core.first.call(null,seq84228);
var seq84228__$1 = cljs.core.next.call(null,seq84228);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84229,seq84228__$1);
});

/**
 * Create a color from RGB values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rgb = (function mranderson048$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return mranderson048.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.hsl = (function mranderson048$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return mranderson048.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1549004155296
