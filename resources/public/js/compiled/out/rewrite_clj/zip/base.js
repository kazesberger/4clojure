// Compiled by ClojureScript 1.10.238 {}
goog.provide('rewrite_clj.zip.base');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
/**
 * Create zipper over the given Clojure/EDN node.
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(node){
return clojure.zip.zipper.call(null,rewrite_clj.node.inner_QMARK_,cljs.core.comp.call(null,cljs.core.seq,rewrite_clj.node.children),rewrite_clj.node.replace_children,node);
});
/**
 * Create zipper over the given Clojure/EDN node and move
 * to the first non-whitespace/non-comment child.
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(node){
while(true){
if(cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,node),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.edn_STAR_.call(null,node);
var or__3922__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.down.call(null,top));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return top;
}
} else {
var G__64548 = rewrite_clj.node.forms_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
node = G__64548;
continue;
}
break;
}
});
/**
 * Get tag of node at the current zipper location.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__64549 = zloc;
var G__64549__$1 = (((G__64549 == null))?null:clojure.zip.node.call(null,G__64549));
if((G__64549__$1 == null)){
return null;
} else {
return rewrite_clj.node.tag.call(null,G__64549__$1);
}
});
/**
 * Get sexpr represented by the given node.
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__64550 = zloc;
var G__64550__$1 = (((G__64550 == null))?null:clojure.zip.node.call(null,G__64550));
if((G__64550__$1 == null)){
return null;
} else {
return rewrite_clj.node.sexpr.call(null,G__64550__$1);
}
});
/**
 * Get children as s-expressions.
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__64551 = zloc;
var G__64551__$1 = (((G__64551 == null))?null:clojure.zip.node.call(null,G__64551));
if((G__64551__$1 == null)){
return null;
} else {
return rewrite_clj.node.child_sexprs.call(null,G__64551__$1);
}
});
/**
 * Get length of printable string for the given zipper location.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__3922__auto__ = (function (){var G__64553 = zloc;
var G__64553__$1 = (((G__64553 == null))?null:clojure.zip.node.call(null,G__64553));
if((G__64553__$1 == null)){
return null;
} else {
return rewrite_clj.node.length.call(null,G__64553__$1);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
});
/**
 * Create zipper from String.
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(s){
var G__64554 = s;
var G__64554__$1 = (((G__64554 == null))?null:rewrite_clj.parser.parse_string_all.call(null,G__64554));
if((G__64554__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn.call(null,G__64554__$1);
}
});
/**
 * Create string representing the current zipper location.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__64555 = zloc;
var G__64555__$1 = (((G__64555 == null))?null:clojure.zip.node.call(null,G__64555));
if((G__64555__$1 == null)){
return null;
} else {
return rewrite_clj.node.string.call(null,G__64555__$1);
}
});
/**
 * Create string representing the zipped-up zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__64556 = zloc;
var G__64556__$1 = (((G__64556 == null))?null:clojure.zip.root.call(null,G__64556));
if((G__64556__$1 == null)){
return null;
} else {
return rewrite_clj.node.string.call(null,G__64556__$1);
}
});

//# sourceMappingURL=base.js.map?rel=1548888397585
