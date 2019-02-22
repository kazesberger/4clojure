// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function re_com$util$fmap_$_iter__62250(s__62251){
return (new cljs.core.LazySeq(null,(function (){
var s__62251__$1 = s__62251;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62251__$1);
if(temp__4657__auto__){
var s__62251__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62251__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__62251__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__62253 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__62252 = (0);
while(true){
if((i__62252 < size__4291__auto__)){
var vec__62254 = cljs.core._nth.call(null,c__4290__auto__,i__62252);
var k = cljs.core.nth.call(null,vec__62254,(0),null);
var val = cljs.core.nth.call(null,vec__62254,(1),null);
cljs.core.chunk_append.call(null,b__62253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__62260 = (i__62252 + (1));
i__62252 = G__62260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62253),re_com$util$fmap_$_iter__62250.call(null,cljs.core.chunk_rest.call(null,s__62251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62253),null);
}
} else {
var vec__62257 = cljs.core.first.call(null,s__62251__$2);
var k = cljs.core.nth.call(null,vec__62257,(0),null);
var val = cljs.core.nth.call(null,vec__62257,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__62250.call(null,cljs.core.rest.call(null,s__62251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62262 = arguments.length;
var i__4500__auto___62263 = (0);
while(true){
if((i__4500__auto___62263 < len__4499__auto___62262)){
args__4502__auto__.push((arguments[i__4500__auto___62263]));

var G__62264 = (i__4500__auto___62263 + (1));
i__4500__auto___62263 = G__62264;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.util.deep_merge.cljs$lang$applyTo = (function (seq62261){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62261));
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62269 = arguments.length;
var i__4500__auto___62270 = (0);
while(true){
if((i__4500__auto___62270 < len__4499__auto___62269)){
args__4502__auto__.push((arguments[i__4500__auto___62270]));

var G__62271 = (i__4500__auto___62270 + (1));
i__4500__auto___62270 = G__62271;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
re_com.util.px.cljs$lang$applyTo = (function (seq62267){
var G__62268 = cljs.core.first.call(null,seq62267);
var seq62267__$1 = cljs.core.next.call(null,seq62267);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62268,seq62267__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62278 = arguments.length;
var i__4500__auto___62279 = (0);
while(true){
if((i__4500__auto___62279 < len__4499__auto___62278)){
args__4502__auto__.push((arguments[i__4500__auto___62279]));

var G__62280 = (i__4500__auto___62279 + (1));
i__4500__auto___62279 = G__62280;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__62275){
var map__62276 = p__62275;
var map__62276__$1 = ((((!((map__62276 == null)))?(((((map__62276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62276):map__62276);
var id_fn = cljs.core.get.call(null,map__62276__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__62276,map__62276__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__62276,map__62276__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.position_for_id.cljs$lang$applyTo = (function (seq62272){
var G__62273 = cljs.core.first.call(null,seq62272);
var seq62272__$1 = cljs.core.next.call(null,seq62272);
var G__62274 = cljs.core.first.call(null,seq62272__$1);
var seq62272__$2 = cljs.core.next.call(null,seq62272__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62273,G__62274,seq62272__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62288 = arguments.length;
var i__4500__auto___62289 = (0);
while(true){
if((i__4500__auto___62289 < len__4499__auto___62288)){
args__4502__auto__.push((arguments[i__4500__auto___62289]));

var G__62290 = (i__4500__auto___62289 + (1));
i__4500__auto___62289 = G__62290;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__62285){
var map__62286 = p__62285;
var map__62286__$1 = ((((!((map__62286 == null)))?(((((map__62286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62286):map__62286);
var id_fn = cljs.core.get.call(null,map__62286__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__62286,map__62286__$1,id_fn){
return (function (p1__62281_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__62281_SHARP_),id);
});})(map__62286,map__62286__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.item_for_id.cljs$lang$applyTo = (function (seq62282){
var G__62283 = cljs.core.first.call(null,seq62282);
var seq62282__$1 = cljs.core.next.call(null,seq62282);
var G__62284 = cljs.core.first.call(null,seq62282__$1);
var seq62282__$2 = cljs.core.next.call(null,seq62282__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62283,G__62284,seq62282__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62298 = arguments.length;
var i__4500__auto___62299 = (0);
while(true){
if((i__4500__auto___62299 < len__4499__auto___62298)){
args__4502__auto__.push((arguments[i__4500__auto___62299]));

var G__62300 = (i__4500__auto___62299 + (1));
i__4500__auto___62299 = G__62300;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__62295){
var map__62296 = p__62295;
var map__62296__$1 = ((((!((map__62296 == null)))?(((((map__62296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62296):map__62296);
var id_fn = cljs.core.get.call(null,map__62296__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__62296,map__62296__$1,id_fn){
return (function (p1__62291_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__62291_SHARP_),id);
});})(map__62296,map__62296__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq62292){
var G__62293 = cljs.core.first.call(null,seq62292);
var seq62292__$1 = cljs.core.next.call(null,seq62292);
var G__62294 = cljs.core.first.call(null,seq62292__$1);
var seq62292__$2 = cljs.core.next.call(null,seq62292__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62293,G__62294,seq62292__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__62301 = current_node.parentNode;
var G__62302 = (sum_scroll_left + current_node.scrollLeft);
var G__62303 = (sum_scroll_top + current_node.scrollTop);
current_node = G__62301;
sum_scroll_left = G__62302;
sum_scroll_top = G__62303;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1549004107883
