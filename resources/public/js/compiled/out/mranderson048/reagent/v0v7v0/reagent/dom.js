// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('mranderson048.reagent.v0v7v0.reagent.interop');
if(typeof mranderson048.reagent.v0v7v0.reagent.dom.imported !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.dom.imported = null;
}
mranderson048.reagent.v0v7v0.reagent.dom.module = (function mranderson048$reagent$v0v7v0$reagent$dom$module(){
if(!((mranderson048.reagent.v0v7v0.reagent.dom.imported == null))){
return mranderson048.reagent.v0v7v0.reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return mranderson048.reagent.v0v7v0.reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__3922__auto__ = mranderson048.reagent.v0v7v0.reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof mranderson048.reagent.v0v7v0.reagent.dom.roots !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mranderson048.reagent.v0v7v0.reagent.dom.unmount_comp = (function mranderson048$reagent$v0v7v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots,cljs.core.dissoc,container);

return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
mranderson048.reagent.v0v7v0.reagent.dom.render_comp = (function mranderson048$reagent$v0v7v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_75195 = mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_75195){
return (function (){
var _STAR_always_update_STAR_75196 = mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson048.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_75196;
}});})(_STAR_always_update_STAR_75195))
);
}finally {mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_75195;
}});
mranderson048.reagent.v0v7v0.reagent.dom.re_render_component = (function mranderson048$reagent$v0v7v0$reagent$dom$re_render_component(comp,container){
return mranderson048.reagent.v0v7v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v7v0.reagent.dom.render = (function mranderson048$reagent$v0v7v0$reagent$dom$render(var_args){
var G__75198 = arguments.length;
switch (G__75198) {
case 2:
return mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v7v0.reagent.dom.render.call(null,comp,container,null);
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return mranderson048.reagent.v0v7v0.reagent.dom.render_comp.call(null,f,container,callback);
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson048.reagent.v0v7v0.reagent.dom.unmount_component_at_node = (function mranderson048$reagent$v0v7v0$reagent$dom$unmount_component_at_node(container){
return mranderson048.reagent.v0v7v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v7v0.reagent.dom.dom_node = (function mranderson048$reagent$v0v7v0$reagent$dom$dom_node(this$){
return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["findDOMNode"])(this$);
});
mranderson048.reagent.v0v7v0.reagent.impl.template.find_dom_node = mranderson048.reagent.v0v7v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson048.reagent.v0v7v0.reagent.dom.force_update_all = (function mranderson048$reagent$v0v7v0$reagent$dom$force_update_all(){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var seq__75200_75204 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots)));
var chunk__75201_75205 = null;
var count__75202_75206 = (0);
var i__75203_75207 = (0);
while(true){
if((i__75203_75207 < count__75202_75206)){
var v_75208 = cljs.core._nth.call(null,chunk__75201_75205,i__75203_75207);
cljs.core.apply.call(null,mranderson048.reagent.v0v7v0.reagent.dom.re_render_component,v_75208);


var G__75209 = seq__75200_75204;
var G__75210 = chunk__75201_75205;
var G__75211 = count__75202_75206;
var G__75212 = (i__75203_75207 + (1));
seq__75200_75204 = G__75209;
chunk__75201_75205 = G__75210;
count__75202_75206 = G__75211;
i__75203_75207 = G__75212;
continue;
} else {
var temp__4657__auto___75213 = cljs.core.seq.call(null,seq__75200_75204);
if(temp__4657__auto___75213){
var seq__75200_75214__$1 = temp__4657__auto___75213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75200_75214__$1)){
var c__4319__auto___75215 = cljs.core.chunk_first.call(null,seq__75200_75214__$1);
var G__75216 = cljs.core.chunk_rest.call(null,seq__75200_75214__$1);
var G__75217 = c__4319__auto___75215;
var G__75218 = cljs.core.count.call(null,c__4319__auto___75215);
var G__75219 = (0);
seq__75200_75204 = G__75216;
chunk__75201_75205 = G__75217;
count__75202_75206 = G__75218;
i__75203_75207 = G__75219;
continue;
} else {
var v_75220 = cljs.core.first.call(null,seq__75200_75214__$1);
cljs.core.apply.call(null,mranderson048.reagent.v0v7v0.reagent.dom.re_render_component,v_75220);


var G__75221 = cljs.core.next.call(null,seq__75200_75214__$1);
var G__75222 = null;
var G__75223 = (0);
var G__75224 = (0);
seq__75200_75204 = G__75221;
chunk__75201_75205 = G__75222;
count__75202_75206 = G__75223;
i__75203_75207 = G__75224;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1549004133785
