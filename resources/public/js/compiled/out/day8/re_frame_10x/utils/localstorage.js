// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__83193 = arguments.length;
switch (G__83193) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__83195 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__83196 = null;
var count__83197 = (0);
var i__83198 = (0);
while(true){
if((i__83198 < count__83197)){
var k = cljs.core._nth.call(null,chunk__83196,i__83198);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__83199 = seq__83195;
var G__83200 = chunk__83196;
var G__83201 = count__83197;
var G__83202 = (i__83198 + (1));
seq__83195 = G__83199;
chunk__83196 = G__83200;
count__83197 = G__83201;
i__83198 = G__83202;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83195);
if(temp__4657__auto__){
var seq__83195__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83195__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__83195__$1);
var G__83203 = cljs.core.chunk_rest.call(null,seq__83195__$1);
var G__83204 = c__4319__auto__;
var G__83205 = cljs.core.count.call(null,c__4319__auto__);
var G__83206 = (0);
seq__83195 = G__83203;
chunk__83196 = G__83204;
count__83197 = G__83205;
i__83198 = G__83206;
continue;
} else {
var k = cljs.core.first.call(null,seq__83195__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__83207 = cljs.core.next.call(null,seq__83195__$1);
var G__83208 = null;
var G__83209 = (0);
var G__83210 = (0);
seq__83195 = G__83207;
chunk__83196 = G__83208;
count__83197 = G__83209;
i__83198 = G__83210;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1549004152188
