// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__67917_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__67917_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__67918 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__67919 = null;
var count__67920 = (0);
var i__67921 = (0);
while(true){
if((i__67921 < count__67920)){
var n = cljs.core._nth.call(null,chunk__67919,i__67921);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__67922 = seq__67918;
var G__67923 = chunk__67919;
var G__67924 = count__67920;
var G__67925 = (i__67921 + (1));
seq__67918 = G__67922;
chunk__67919 = G__67923;
count__67920 = G__67924;
i__67921 = G__67925;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__67918);
if(temp__4657__auto__){
var seq__67918__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67918__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__67918__$1);
var G__67926 = cljs.core.chunk_rest.call(null,seq__67918__$1);
var G__67927 = c__4319__auto__;
var G__67928 = cljs.core.count.call(null,c__4319__auto__);
var G__67929 = (0);
seq__67918 = G__67926;
chunk__67919 = G__67927;
count__67920 = G__67928;
i__67921 = G__67929;
continue;
} else {
var n = cljs.core.first.call(null,seq__67918__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__67930 = cljs.core.next.call(null,seq__67918__$1);
var G__67931 = null;
var G__67932 = (0);
var G__67933 = (0);
seq__67918 = G__67930;
chunk__67919 = G__67931;
count__67920 = G__67932;
i__67921 = G__67933;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__67934){
var vec__67935 = p__67934;
var _ = cljs.core.nth.call(null,vec__67935,(0),null);
var v = cljs.core.nth.call(null,vec__67935,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__67938){
var vec__67939 = p__67938;
var k = cljs.core.nth.call(null,vec__67939,(0),null);
var v = cljs.core.nth.call(null,vec__67939,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__67951_67959 = cljs.core.seq.call(null,deps);
var chunk__67952_67960 = null;
var count__67953_67961 = (0);
var i__67954_67962 = (0);
while(true){
if((i__67954_67962 < count__67953_67961)){
var dep_67963 = cljs.core._nth.call(null,chunk__67952_67960,i__67954_67962);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_67963;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_67963));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_67963,(depth + (1)),state);
} else {
}


var G__67964 = seq__67951_67959;
var G__67965 = chunk__67952_67960;
var G__67966 = count__67953_67961;
var G__67967 = (i__67954_67962 + (1));
seq__67951_67959 = G__67964;
chunk__67952_67960 = G__67965;
count__67953_67961 = G__67966;
i__67954_67962 = G__67967;
continue;
} else {
var temp__4657__auto___67968 = cljs.core.seq.call(null,seq__67951_67959);
if(temp__4657__auto___67968){
var seq__67951_67969__$1 = temp__4657__auto___67968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67951_67969__$1)){
var c__4319__auto___67970 = cljs.core.chunk_first.call(null,seq__67951_67969__$1);
var G__67971 = cljs.core.chunk_rest.call(null,seq__67951_67969__$1);
var G__67972 = c__4319__auto___67970;
var G__67973 = cljs.core.count.call(null,c__4319__auto___67970);
var G__67974 = (0);
seq__67951_67959 = G__67971;
chunk__67952_67960 = G__67972;
count__67953_67961 = G__67973;
i__67954_67962 = G__67974;
continue;
} else {
var dep_67975 = cljs.core.first.call(null,seq__67951_67969__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_67975;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_67975));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_67975,(depth + (1)),state);
} else {
}


var G__67976 = cljs.core.next.call(null,seq__67951_67969__$1);
var G__67977 = null;
var G__67978 = (0);
var G__67979 = (0);
seq__67951_67959 = G__67976;
chunk__67952_67960 = G__67977;
count__67953_67961 = G__67978;
i__67954_67962 = G__67979;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__67955){
var vec__67956 = p__67955;
var seq__67957 = cljs.core.seq.call(null,vec__67956);
var first__67958 = cljs.core.first.call(null,seq__67957);
var seq__67957__$1 = cljs.core.next.call(null,seq__67957);
var x = first__67958;
var xs = seq__67957__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__67956,seq__67957,first__67958,seq__67957__$1,x,xs,get_deps__$1){
return (function (p1__67942_SHARP_){
return clojure.set.difference.call(null,p1__67942_SHARP_,x);
});})(vec__67956,seq__67957,first__67958,seq__67957__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__67980 = cljs.core.seq.call(null,provides);
var chunk__67981 = null;
var count__67982 = (0);
var i__67983 = (0);
while(true){
if((i__67983 < count__67982)){
var prov = cljs.core._nth.call(null,chunk__67981,i__67983);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__67984_67992 = cljs.core.seq.call(null,requires);
var chunk__67985_67993 = null;
var count__67986_67994 = (0);
var i__67987_67995 = (0);
while(true){
if((i__67987_67995 < count__67986_67994)){
var req_67996 = cljs.core._nth.call(null,chunk__67985_67993,i__67987_67995);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_67996,prov);


var G__67997 = seq__67984_67992;
var G__67998 = chunk__67985_67993;
var G__67999 = count__67986_67994;
var G__68000 = (i__67987_67995 + (1));
seq__67984_67992 = G__67997;
chunk__67985_67993 = G__67998;
count__67986_67994 = G__67999;
i__67987_67995 = G__68000;
continue;
} else {
var temp__4657__auto___68001 = cljs.core.seq.call(null,seq__67984_67992);
if(temp__4657__auto___68001){
var seq__67984_68002__$1 = temp__4657__auto___68001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67984_68002__$1)){
var c__4319__auto___68003 = cljs.core.chunk_first.call(null,seq__67984_68002__$1);
var G__68004 = cljs.core.chunk_rest.call(null,seq__67984_68002__$1);
var G__68005 = c__4319__auto___68003;
var G__68006 = cljs.core.count.call(null,c__4319__auto___68003);
var G__68007 = (0);
seq__67984_67992 = G__68004;
chunk__67985_67993 = G__68005;
count__67986_67994 = G__68006;
i__67987_67995 = G__68007;
continue;
} else {
var req_68008 = cljs.core.first.call(null,seq__67984_68002__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_68008,prov);


var G__68009 = cljs.core.next.call(null,seq__67984_68002__$1);
var G__68010 = null;
var G__68011 = (0);
var G__68012 = (0);
seq__67984_67992 = G__68009;
chunk__67985_67993 = G__68010;
count__67986_67994 = G__68011;
i__67987_67995 = G__68012;
continue;
}
} else {
}
}
break;
}


var G__68013 = seq__67980;
var G__68014 = chunk__67981;
var G__68015 = count__67982;
var G__68016 = (i__67983 + (1));
seq__67980 = G__68013;
chunk__67981 = G__68014;
count__67982 = G__68015;
i__67983 = G__68016;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__67980);
if(temp__4657__auto__){
var seq__67980__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67980__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__67980__$1);
var G__68017 = cljs.core.chunk_rest.call(null,seq__67980__$1);
var G__68018 = c__4319__auto__;
var G__68019 = cljs.core.count.call(null,c__4319__auto__);
var G__68020 = (0);
seq__67980 = G__68017;
chunk__67981 = G__68018;
count__67982 = G__68019;
i__67983 = G__68020;
continue;
} else {
var prov = cljs.core.first.call(null,seq__67980__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__67988_68021 = cljs.core.seq.call(null,requires);
var chunk__67989_68022 = null;
var count__67990_68023 = (0);
var i__67991_68024 = (0);
while(true){
if((i__67991_68024 < count__67990_68023)){
var req_68025 = cljs.core._nth.call(null,chunk__67989_68022,i__67991_68024);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_68025,prov);


var G__68026 = seq__67988_68021;
var G__68027 = chunk__67989_68022;
var G__68028 = count__67990_68023;
var G__68029 = (i__67991_68024 + (1));
seq__67988_68021 = G__68026;
chunk__67989_68022 = G__68027;
count__67990_68023 = G__68028;
i__67991_68024 = G__68029;
continue;
} else {
var temp__4657__auto___68030__$1 = cljs.core.seq.call(null,seq__67988_68021);
if(temp__4657__auto___68030__$1){
var seq__67988_68031__$1 = temp__4657__auto___68030__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67988_68031__$1)){
var c__4319__auto___68032 = cljs.core.chunk_first.call(null,seq__67988_68031__$1);
var G__68033 = cljs.core.chunk_rest.call(null,seq__67988_68031__$1);
var G__68034 = c__4319__auto___68032;
var G__68035 = cljs.core.count.call(null,c__4319__auto___68032);
var G__68036 = (0);
seq__67988_68021 = G__68033;
chunk__67989_68022 = G__68034;
count__67990_68023 = G__68035;
i__67991_68024 = G__68036;
continue;
} else {
var req_68037 = cljs.core.first.call(null,seq__67988_68031__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_68037,prov);


var G__68038 = cljs.core.next.call(null,seq__67988_68031__$1);
var G__68039 = null;
var G__68040 = (0);
var G__68041 = (0);
seq__67988_68021 = G__68038;
chunk__67989_68022 = G__68039;
count__67990_68023 = G__68040;
i__67991_68024 = G__68041;
continue;
}
} else {
}
}
break;
}


var G__68042 = cljs.core.next.call(null,seq__67980__$1);
var G__68043 = null;
var G__68044 = (0);
var G__68045 = (0);
seq__67980 = G__68042;
chunk__67981 = G__68043;
count__67982 = G__68044;
i__67983 = G__68045;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__68046_68050 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__68047_68051 = null;
var count__68048_68052 = (0);
var i__68049_68053 = (0);
while(true){
if((i__68049_68053 < count__68048_68052)){
var ns_68054 = cljs.core._nth.call(null,chunk__68047_68051,i__68049_68053);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_68054);


var G__68055 = seq__68046_68050;
var G__68056 = chunk__68047_68051;
var G__68057 = count__68048_68052;
var G__68058 = (i__68049_68053 + (1));
seq__68046_68050 = G__68055;
chunk__68047_68051 = G__68056;
count__68048_68052 = G__68057;
i__68049_68053 = G__68058;
continue;
} else {
var temp__4657__auto___68059 = cljs.core.seq.call(null,seq__68046_68050);
if(temp__4657__auto___68059){
var seq__68046_68060__$1 = temp__4657__auto___68059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68046_68060__$1)){
var c__4319__auto___68061 = cljs.core.chunk_first.call(null,seq__68046_68060__$1);
var G__68062 = cljs.core.chunk_rest.call(null,seq__68046_68060__$1);
var G__68063 = c__4319__auto___68061;
var G__68064 = cljs.core.count.call(null,c__4319__auto___68061);
var G__68065 = (0);
seq__68046_68050 = G__68062;
chunk__68047_68051 = G__68063;
count__68048_68052 = G__68064;
i__68049_68053 = G__68065;
continue;
} else {
var ns_68066 = cljs.core.first.call(null,seq__68046_68060__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_68066);


var G__68067 = cljs.core.next.call(null,seq__68046_68060__$1);
var G__68068 = null;
var G__68069 = (0);
var G__68070 = (0);
seq__68046_68050 = G__68067;
chunk__68047_68051 = G__68068;
count__68048_68052 = G__68069;
i__68049_68053 = G__68070;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__68071__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__68071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68072__i = 0, G__68072__a = new Array(arguments.length -  0);
while (G__68072__i < G__68072__a.length) {G__68072__a[G__68072__i] = arguments[G__68072__i + 0]; ++G__68072__i;}
  args = new cljs.core.IndexedSeq(G__68072__a,0,null);
} 
return G__68071__delegate.call(this,args);};
G__68071.cljs$lang$maxFixedArity = 0;
G__68071.cljs$lang$applyTo = (function (arglist__68073){
var args = cljs.core.seq(arglist__68073);
return G__68071__delegate(args);
});
G__68071.cljs$core$IFn$_invoke$arity$variadic = G__68071__delegate;
return G__68071;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__68074_SHARP_,p2__68075_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68074_SHARP_)].join('')),p2__68075_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__68076_SHARP_,p2__68077_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68076_SHARP_)].join(''),p2__68077_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__68078 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__68078.addCallback(((function (G__68078){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__68078))
);

G__68078.addErrback(((function (G__68078){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__68078))
);

return G__68078;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e68079){if((e68079 instanceof Error)){
var e = e68079;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e68079;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e68080){if((e68080 instanceof Error)){
var e = e68080;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e68080;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__68081 = cljs.core._EQ_;
var expr__68082 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__68081.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__68082))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__68081.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__68082))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__68081.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__68082))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__68081,expr__68082){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__68081,expr__68082))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__68084,callback){
var map__68085 = p__68084;
var map__68085__$1 = ((((!((map__68085 == null)))?(((((map__68085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68085):map__68085);
var file_msg = map__68085__$1;
var request_url = cljs.core.get.call(null,map__68085__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__68085,map__68085__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__68085,map__68085__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__){
return (function (state_68123){
var state_val_68124 = (state_68123[(1)]);
if((state_val_68124 === (7))){
var inst_68119 = (state_68123[(2)]);
var state_68123__$1 = state_68123;
var statearr_68125_68151 = state_68123__$1;
(statearr_68125_68151[(2)] = inst_68119);

(statearr_68125_68151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (1))){
var state_68123__$1 = state_68123;
var statearr_68126_68152 = state_68123__$1;
(statearr_68126_68152[(2)] = null);

(statearr_68126_68152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (4))){
var inst_68089 = (state_68123[(7)]);
var inst_68089__$1 = (state_68123[(2)]);
var state_68123__$1 = (function (){var statearr_68127 = state_68123;
(statearr_68127[(7)] = inst_68089__$1);

return statearr_68127;
})();
if(cljs.core.truth_(inst_68089__$1)){
var statearr_68128_68153 = state_68123__$1;
(statearr_68128_68153[(1)] = (5));

} else {
var statearr_68129_68154 = state_68123__$1;
(statearr_68129_68154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (15))){
var inst_68102 = (state_68123[(8)]);
var inst_68104 = (state_68123[(9)]);
var inst_68106 = inst_68104.call(null,inst_68102);
var state_68123__$1 = state_68123;
var statearr_68130_68155 = state_68123__$1;
(statearr_68130_68155[(2)] = inst_68106);

(statearr_68130_68155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (13))){
var inst_68113 = (state_68123[(2)]);
var state_68123__$1 = state_68123;
var statearr_68131_68156 = state_68123__$1;
(statearr_68131_68156[(2)] = inst_68113);

(statearr_68131_68156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (6))){
var state_68123__$1 = state_68123;
var statearr_68132_68157 = state_68123__$1;
(statearr_68132_68157[(2)] = null);

(statearr_68132_68157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (17))){
var inst_68110 = (state_68123[(2)]);
var state_68123__$1 = state_68123;
var statearr_68133_68158 = state_68123__$1;
(statearr_68133_68158[(2)] = inst_68110);

(statearr_68133_68158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (3))){
var inst_68121 = (state_68123[(2)]);
var state_68123__$1 = state_68123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68123__$1,inst_68121);
} else {
if((state_val_68124 === (12))){
var state_68123__$1 = state_68123;
var statearr_68134_68159 = state_68123__$1;
(statearr_68134_68159[(2)] = null);

(statearr_68134_68159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (2))){
var state_68123__$1 = state_68123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68123__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_68124 === (11))){
var inst_68094 = (state_68123[(10)]);
var inst_68100 = figwheel.client.file_reloading.blocking_load.call(null,inst_68094);
var state_68123__$1 = state_68123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68123__$1,(14),inst_68100);
} else {
if((state_val_68124 === (9))){
var inst_68094 = (state_68123[(10)]);
var state_68123__$1 = state_68123;
if(cljs.core.truth_(inst_68094)){
var statearr_68135_68160 = state_68123__$1;
(statearr_68135_68160[(1)] = (11));

} else {
var statearr_68136_68161 = state_68123__$1;
(statearr_68136_68161[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (5))){
var inst_68089 = (state_68123[(7)]);
var inst_68095 = (state_68123[(11)]);
var inst_68094 = cljs.core.nth.call(null,inst_68089,(0),null);
var inst_68095__$1 = cljs.core.nth.call(null,inst_68089,(1),null);
var state_68123__$1 = (function (){var statearr_68137 = state_68123;
(statearr_68137[(11)] = inst_68095__$1);

(statearr_68137[(10)] = inst_68094);

return statearr_68137;
})();
if(cljs.core.truth_(inst_68095__$1)){
var statearr_68138_68162 = state_68123__$1;
(statearr_68138_68162[(1)] = (8));

} else {
var statearr_68139_68163 = state_68123__$1;
(statearr_68139_68163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (14))){
var inst_68094 = (state_68123[(10)]);
var inst_68104 = (state_68123[(9)]);
var inst_68102 = (state_68123[(2)]);
var inst_68103 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_68104__$1 = cljs.core.get.call(null,inst_68103,inst_68094);
var state_68123__$1 = (function (){var statearr_68140 = state_68123;
(statearr_68140[(8)] = inst_68102);

(statearr_68140[(9)] = inst_68104__$1);

return statearr_68140;
})();
if(cljs.core.truth_(inst_68104__$1)){
var statearr_68141_68164 = state_68123__$1;
(statearr_68141_68164[(1)] = (15));

} else {
var statearr_68142_68165 = state_68123__$1;
(statearr_68142_68165[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (16))){
var inst_68102 = (state_68123[(8)]);
var inst_68108 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_68102);
var state_68123__$1 = state_68123;
var statearr_68143_68166 = state_68123__$1;
(statearr_68143_68166[(2)] = inst_68108);

(statearr_68143_68166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (10))){
var inst_68115 = (state_68123[(2)]);
var state_68123__$1 = (function (){var statearr_68144 = state_68123;
(statearr_68144[(12)] = inst_68115);

return statearr_68144;
})();
var statearr_68145_68167 = state_68123__$1;
(statearr_68145_68167[(2)] = null);

(statearr_68145_68167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (8))){
var inst_68095 = (state_68123[(11)]);
var inst_68097 = eval(inst_68095);
var state_68123__$1 = state_68123;
var statearr_68146_68168 = state_68123__$1;
(statearr_68146_68168[(2)] = inst_68097);

(statearr_68146_68168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__58152__auto__))
;
return ((function (switch__50568__auto__,c__58152__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50569__auto__ = null;
var figwheel$client$file_reloading$state_machine__50569__auto____0 = (function (){
var statearr_68147 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68147[(0)] = figwheel$client$file_reloading$state_machine__50569__auto__);

(statearr_68147[(1)] = (1));

return statearr_68147;
});
var figwheel$client$file_reloading$state_machine__50569__auto____1 = (function (state_68123){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_68123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e68148){if((e68148 instanceof Object)){
var ex__50572__auto__ = e68148;
var statearr_68149_68169 = state_68123;
(statearr_68149_68169[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68170 = state_68123;
state_68123 = G__68170;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50569__auto__ = function(state_68123){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50569__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50569__auto____1.call(this,state_68123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50569__auto____0;
figwheel$client$file_reloading$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50569__auto____1;
return figwheel$client$file_reloading$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__))
})();
var state__58154__auto__ = (function (){var statearr_68150 = f__58153__auto__.call(null);
(statearr_68150[(6)] = c__58152__auto__);

return statearr_68150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__))
);

return c__58152__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__68172 = arguments.length;
switch (G__68172) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__68174,callback){
var map__68175 = p__68174;
var map__68175__$1 = ((((!((map__68175 == null)))?(((((map__68175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68175):map__68175);
var file_msg = map__68175__$1;
var namespace = cljs.core.get.call(null,map__68175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__68175,map__68175__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__68175,map__68175__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__68177){
var map__68178 = p__68177;
var map__68178__$1 = ((((!((map__68178 == null)))?(((((map__68178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68178):map__68178);
var file_msg = map__68178__$1;
var namespace = cljs.core.get.call(null,map__68178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__68180){
var map__68181 = p__68180;
var map__68181__$1 = ((((!((map__68181 == null)))?(((((map__68181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68181):map__68181);
var file_msg = map__68181__$1;
var namespace = cljs.core.get.call(null,map__68181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__68183,callback){
var map__68184 = p__68183;
var map__68184__$1 = ((((!((map__68184 == null)))?(((((map__68184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68184):map__68184);
var file_msg = map__68184__$1;
var request_url = cljs.core.get.call(null,map__68184__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__68184__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__58152__auto___68234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___68234,out){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___68234,out){
return (function (state_68219){
var state_val_68220 = (state_68219[(1)]);
if((state_val_68220 === (1))){
var inst_68193 = cljs.core.seq.call(null,files);
var inst_68194 = cljs.core.first.call(null,inst_68193);
var inst_68195 = cljs.core.next.call(null,inst_68193);
var inst_68196 = files;
var state_68219__$1 = (function (){var statearr_68221 = state_68219;
(statearr_68221[(7)] = inst_68195);

(statearr_68221[(8)] = inst_68194);

(statearr_68221[(9)] = inst_68196);

return statearr_68221;
})();
var statearr_68222_68235 = state_68219__$1;
(statearr_68222_68235[(2)] = null);

(statearr_68222_68235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68220 === (2))){
var inst_68196 = (state_68219[(9)]);
var inst_68202 = (state_68219[(10)]);
var inst_68201 = cljs.core.seq.call(null,inst_68196);
var inst_68202__$1 = cljs.core.first.call(null,inst_68201);
var inst_68203 = cljs.core.next.call(null,inst_68201);
var inst_68204 = (inst_68202__$1 == null);
var inst_68205 = cljs.core.not.call(null,inst_68204);
var state_68219__$1 = (function (){var statearr_68223 = state_68219;
(statearr_68223[(11)] = inst_68203);

(statearr_68223[(10)] = inst_68202__$1);

return statearr_68223;
})();
if(inst_68205){
var statearr_68224_68236 = state_68219__$1;
(statearr_68224_68236[(1)] = (4));

} else {
var statearr_68225_68237 = state_68219__$1;
(statearr_68225_68237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68220 === (3))){
var inst_68217 = (state_68219[(2)]);
var state_68219__$1 = state_68219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68219__$1,inst_68217);
} else {
if((state_val_68220 === (4))){
var inst_68202 = (state_68219[(10)]);
var inst_68207 = figwheel.client.file_reloading.reload_js_file.call(null,inst_68202);
var state_68219__$1 = state_68219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68219__$1,(7),inst_68207);
} else {
if((state_val_68220 === (5))){
var inst_68213 = cljs.core.async.close_BANG_.call(null,out);
var state_68219__$1 = state_68219;
var statearr_68226_68238 = state_68219__$1;
(statearr_68226_68238[(2)] = inst_68213);

(statearr_68226_68238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68220 === (6))){
var inst_68215 = (state_68219[(2)]);
var state_68219__$1 = state_68219;
var statearr_68227_68239 = state_68219__$1;
(statearr_68227_68239[(2)] = inst_68215);

(statearr_68227_68239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68220 === (7))){
var inst_68203 = (state_68219[(11)]);
var inst_68209 = (state_68219[(2)]);
var inst_68210 = cljs.core.async.put_BANG_.call(null,out,inst_68209);
var inst_68196 = inst_68203;
var state_68219__$1 = (function (){var statearr_68228 = state_68219;
(statearr_68228[(12)] = inst_68210);

(statearr_68228[(9)] = inst_68196);

return statearr_68228;
})();
var statearr_68229_68240 = state_68219__$1;
(statearr_68229_68240[(2)] = null);

(statearr_68229_68240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__58152__auto___68234,out))
;
return ((function (switch__50568__auto__,c__58152__auto___68234,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto____0 = (function (){
var statearr_68230 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68230[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto__);

(statearr_68230[(1)] = (1));

return statearr_68230;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto____1 = (function (state_68219){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_68219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e68231){if((e68231 instanceof Object)){
var ex__50572__auto__ = e68231;
var statearr_68232_68241 = state_68219;
(statearr_68232_68241[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68242 = state_68219;
state_68219 = G__68242;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto__ = function(state_68219){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto____1.call(this,state_68219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___68234,out))
})();
var state__58154__auto__ = (function (){var statearr_68233 = f__58153__auto__.call(null);
(statearr_68233[(6)] = c__58152__auto___68234);

return statearr_68233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___68234,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__68243,opts){
var map__68244 = p__68243;
var map__68244__$1 = ((((!((map__68244 == null)))?(((((map__68244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68244):map__68244);
var eval_body = cljs.core.get.call(null,map__68244__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__68244__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e68246){var e = e68246;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__68247_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__68247_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__68248){
var vec__68249 = p__68248;
var k = cljs.core.nth.call(null,vec__68249,(0),null);
var v = cljs.core.nth.call(null,vec__68249,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__68252){
var vec__68253 = p__68252;
var k = cljs.core.nth.call(null,vec__68253,(0),null);
var v = cljs.core.nth.call(null,vec__68253,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__68259,p__68260){
var map__68261 = p__68259;
var map__68261__$1 = ((((!((map__68261 == null)))?(((((map__68261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68261):map__68261);
var opts = map__68261__$1;
var before_jsload = cljs.core.get.call(null,map__68261__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__68261__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__68261__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__68262 = p__68260;
var map__68262__$1 = ((((!((map__68262 == null)))?(((((map__68262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68262):map__68262);
var msg = map__68262__$1;
var files = cljs.core.get.call(null,map__68262__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__68262__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__68262__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_68416){
var state_val_68417 = (state_68416[(1)]);
if((state_val_68417 === (7))){
var inst_68277 = (state_68416[(7)]);
var inst_68276 = (state_68416[(8)]);
var inst_68279 = (state_68416[(9)]);
var inst_68278 = (state_68416[(10)]);
var inst_68284 = cljs.core._nth.call(null,inst_68277,inst_68279);
var inst_68285 = figwheel.client.file_reloading.eval_body.call(null,inst_68284,opts);
var inst_68286 = (inst_68279 + (1));
var tmp68418 = inst_68277;
var tmp68419 = inst_68276;
var tmp68420 = inst_68278;
var inst_68276__$1 = tmp68419;
var inst_68277__$1 = tmp68418;
var inst_68278__$1 = tmp68420;
var inst_68279__$1 = inst_68286;
var state_68416__$1 = (function (){var statearr_68421 = state_68416;
(statearr_68421[(7)] = inst_68277__$1);

(statearr_68421[(11)] = inst_68285);

(statearr_68421[(8)] = inst_68276__$1);

(statearr_68421[(9)] = inst_68279__$1);

(statearr_68421[(10)] = inst_68278__$1);

return statearr_68421;
})();
var statearr_68422_68505 = state_68416__$1;
(statearr_68422_68505[(2)] = null);

(statearr_68422_68505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (20))){
var inst_68319 = (state_68416[(12)]);
var inst_68327 = figwheel.client.file_reloading.sort_files.call(null,inst_68319);
var state_68416__$1 = state_68416;
var statearr_68423_68506 = state_68416__$1;
(statearr_68423_68506[(2)] = inst_68327);

(statearr_68423_68506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (27))){
var state_68416__$1 = state_68416;
var statearr_68424_68507 = state_68416__$1;
(statearr_68424_68507[(2)] = null);

(statearr_68424_68507[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (1))){
var inst_68268 = (state_68416[(13)]);
var inst_68265 = before_jsload.call(null,files);
var inst_68266 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_68267 = (function (){return ((function (inst_68268,inst_68265,inst_68266,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__68256_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__68256_SHARP_);
});
;})(inst_68268,inst_68265,inst_68266,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68268__$1 = cljs.core.filter.call(null,inst_68267,files);
var inst_68269 = cljs.core.not_empty.call(null,inst_68268__$1);
var state_68416__$1 = (function (){var statearr_68425 = state_68416;
(statearr_68425[(14)] = inst_68266);

(statearr_68425[(15)] = inst_68265);

(statearr_68425[(13)] = inst_68268__$1);

return statearr_68425;
})();
if(cljs.core.truth_(inst_68269)){
var statearr_68426_68508 = state_68416__$1;
(statearr_68426_68508[(1)] = (2));

} else {
var statearr_68427_68509 = state_68416__$1;
(statearr_68427_68509[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (24))){
var state_68416__$1 = state_68416;
var statearr_68428_68510 = state_68416__$1;
(statearr_68428_68510[(2)] = null);

(statearr_68428_68510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (39))){
var inst_68369 = (state_68416[(16)]);
var state_68416__$1 = state_68416;
var statearr_68429_68511 = state_68416__$1;
(statearr_68429_68511[(2)] = inst_68369);

(statearr_68429_68511[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (46))){
var inst_68411 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
var statearr_68430_68512 = state_68416__$1;
(statearr_68430_68512[(2)] = inst_68411);

(statearr_68430_68512[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (4))){
var inst_68313 = (state_68416[(2)]);
var inst_68314 = cljs.core.List.EMPTY;
var inst_68315 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_68314);
var inst_68316 = (function (){return ((function (inst_68313,inst_68314,inst_68315,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__68257_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__68257_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__68257_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__68257_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_68313,inst_68314,inst_68315,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68317 = cljs.core.filter.call(null,inst_68316,files);
var inst_68318 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_68319 = cljs.core.concat.call(null,inst_68317,inst_68318);
var state_68416__$1 = (function (){var statearr_68431 = state_68416;
(statearr_68431[(17)] = inst_68315);

(statearr_68431[(18)] = inst_68313);

(statearr_68431[(12)] = inst_68319);

return statearr_68431;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_68432_68513 = state_68416__$1;
(statearr_68432_68513[(1)] = (16));

} else {
var statearr_68433_68514 = state_68416__$1;
(statearr_68433_68514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (15))){
var inst_68303 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
var statearr_68434_68515 = state_68416__$1;
(statearr_68434_68515[(2)] = inst_68303);

(statearr_68434_68515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (21))){
var inst_68329 = (state_68416[(19)]);
var inst_68329__$1 = (state_68416[(2)]);
var inst_68330 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_68329__$1);
var state_68416__$1 = (function (){var statearr_68435 = state_68416;
(statearr_68435[(19)] = inst_68329__$1);

return statearr_68435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68416__$1,(22),inst_68330);
} else {
if((state_val_68417 === (31))){
var inst_68414 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68416__$1,inst_68414);
} else {
if((state_val_68417 === (32))){
var inst_68369 = (state_68416[(16)]);
var inst_68374 = inst_68369.cljs$lang$protocol_mask$partition0$;
var inst_68375 = (inst_68374 & (64));
var inst_68376 = inst_68369.cljs$core$ISeq$;
var inst_68377 = (cljs.core.PROTOCOL_SENTINEL === inst_68376);
var inst_68378 = ((inst_68375) || (inst_68377));
var state_68416__$1 = state_68416;
if(cljs.core.truth_(inst_68378)){
var statearr_68436_68516 = state_68416__$1;
(statearr_68436_68516[(1)] = (35));

} else {
var statearr_68437_68517 = state_68416__$1;
(statearr_68437_68517[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (40))){
var inst_68391 = (state_68416[(20)]);
var inst_68390 = (state_68416[(2)]);
var inst_68391__$1 = cljs.core.get.call(null,inst_68390,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_68392 = cljs.core.get.call(null,inst_68390,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_68393 = cljs.core.not_empty.call(null,inst_68391__$1);
var state_68416__$1 = (function (){var statearr_68438 = state_68416;
(statearr_68438[(20)] = inst_68391__$1);

(statearr_68438[(21)] = inst_68392);

return statearr_68438;
})();
if(cljs.core.truth_(inst_68393)){
var statearr_68439_68518 = state_68416__$1;
(statearr_68439_68518[(1)] = (41));

} else {
var statearr_68440_68519 = state_68416__$1;
(statearr_68440_68519[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (33))){
var state_68416__$1 = state_68416;
var statearr_68441_68520 = state_68416__$1;
(statearr_68441_68520[(2)] = false);

(statearr_68441_68520[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (13))){
var inst_68289 = (state_68416[(22)]);
var inst_68293 = cljs.core.chunk_first.call(null,inst_68289);
var inst_68294 = cljs.core.chunk_rest.call(null,inst_68289);
var inst_68295 = cljs.core.count.call(null,inst_68293);
var inst_68276 = inst_68294;
var inst_68277 = inst_68293;
var inst_68278 = inst_68295;
var inst_68279 = (0);
var state_68416__$1 = (function (){var statearr_68442 = state_68416;
(statearr_68442[(7)] = inst_68277);

(statearr_68442[(8)] = inst_68276);

(statearr_68442[(9)] = inst_68279);

(statearr_68442[(10)] = inst_68278);

return statearr_68442;
})();
var statearr_68443_68521 = state_68416__$1;
(statearr_68443_68521[(2)] = null);

(statearr_68443_68521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (22))){
var inst_68333 = (state_68416[(23)]);
var inst_68329 = (state_68416[(19)]);
var inst_68337 = (state_68416[(24)]);
var inst_68332 = (state_68416[(25)]);
var inst_68332__$1 = (state_68416[(2)]);
var inst_68333__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_68332__$1);
var inst_68334 = (function (){var all_files = inst_68329;
var res_SINGLEQUOTE_ = inst_68332__$1;
var res = inst_68333__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_68333,inst_68329,inst_68337,inst_68332,inst_68332__$1,inst_68333__$1,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__68258_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__68258_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_68333,inst_68329,inst_68337,inst_68332,inst_68332__$1,inst_68333__$1,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68335 = cljs.core.filter.call(null,inst_68334,inst_68332__$1);
var inst_68336 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_68337__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_68336);
var inst_68338 = cljs.core.not_empty.call(null,inst_68337__$1);
var state_68416__$1 = (function (){var statearr_68444 = state_68416;
(statearr_68444[(23)] = inst_68333__$1);

(statearr_68444[(24)] = inst_68337__$1);

(statearr_68444[(26)] = inst_68335);

(statearr_68444[(25)] = inst_68332__$1);

return statearr_68444;
})();
if(cljs.core.truth_(inst_68338)){
var statearr_68445_68522 = state_68416__$1;
(statearr_68445_68522[(1)] = (23));

} else {
var statearr_68446_68523 = state_68416__$1;
(statearr_68446_68523[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (36))){
var state_68416__$1 = state_68416;
var statearr_68447_68524 = state_68416__$1;
(statearr_68447_68524[(2)] = false);

(statearr_68447_68524[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (41))){
var inst_68391 = (state_68416[(20)]);
var inst_68395 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_68396 = cljs.core.map.call(null,inst_68395,inst_68391);
var inst_68397 = cljs.core.pr_str.call(null,inst_68396);
var inst_68398 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68397)].join('');
var inst_68399 = figwheel.client.utils.log.call(null,inst_68398);
var state_68416__$1 = state_68416;
var statearr_68448_68525 = state_68416__$1;
(statearr_68448_68525[(2)] = inst_68399);

(statearr_68448_68525[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (43))){
var inst_68392 = (state_68416[(21)]);
var inst_68402 = (state_68416[(2)]);
var inst_68403 = cljs.core.not_empty.call(null,inst_68392);
var state_68416__$1 = (function (){var statearr_68449 = state_68416;
(statearr_68449[(27)] = inst_68402);

return statearr_68449;
})();
if(cljs.core.truth_(inst_68403)){
var statearr_68450_68526 = state_68416__$1;
(statearr_68450_68526[(1)] = (44));

} else {
var statearr_68451_68527 = state_68416__$1;
(statearr_68451_68527[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (29))){
var inst_68333 = (state_68416[(23)]);
var inst_68369 = (state_68416[(16)]);
var inst_68329 = (state_68416[(19)]);
var inst_68337 = (state_68416[(24)]);
var inst_68335 = (state_68416[(26)]);
var inst_68332 = (state_68416[(25)]);
var inst_68365 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_68368 = (function (){var all_files = inst_68329;
var res_SINGLEQUOTE_ = inst_68332;
var res = inst_68333;
var files_not_loaded = inst_68335;
var dependencies_that_loaded = inst_68337;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_68333,inst_68369,inst_68329,inst_68337,inst_68335,inst_68332,inst_68365,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__68367){
var map__68452 = p__68367;
var map__68452__$1 = ((((!((map__68452 == null)))?(((((map__68452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68452):map__68452);
var namespace = cljs.core.get.call(null,map__68452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_68333,inst_68369,inst_68329,inst_68337,inst_68335,inst_68332,inst_68365,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68369__$1 = cljs.core.group_by.call(null,inst_68368,inst_68335);
var inst_68371 = (inst_68369__$1 == null);
var inst_68372 = cljs.core.not.call(null,inst_68371);
var state_68416__$1 = (function (){var statearr_68454 = state_68416;
(statearr_68454[(28)] = inst_68365);

(statearr_68454[(16)] = inst_68369__$1);

return statearr_68454;
})();
if(inst_68372){
var statearr_68455_68528 = state_68416__$1;
(statearr_68455_68528[(1)] = (32));

} else {
var statearr_68456_68529 = state_68416__$1;
(statearr_68456_68529[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (44))){
var inst_68392 = (state_68416[(21)]);
var inst_68405 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_68392);
var inst_68406 = cljs.core.pr_str.call(null,inst_68405);
var inst_68407 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68406)].join('');
var inst_68408 = figwheel.client.utils.log.call(null,inst_68407);
var state_68416__$1 = state_68416;
var statearr_68457_68530 = state_68416__$1;
(statearr_68457_68530[(2)] = inst_68408);

(statearr_68457_68530[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (6))){
var inst_68310 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
var statearr_68458_68531 = state_68416__$1;
(statearr_68458_68531[(2)] = inst_68310);

(statearr_68458_68531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (28))){
var inst_68335 = (state_68416[(26)]);
var inst_68362 = (state_68416[(2)]);
var inst_68363 = cljs.core.not_empty.call(null,inst_68335);
var state_68416__$1 = (function (){var statearr_68459 = state_68416;
(statearr_68459[(29)] = inst_68362);

return statearr_68459;
})();
if(cljs.core.truth_(inst_68363)){
var statearr_68460_68532 = state_68416__$1;
(statearr_68460_68532[(1)] = (29));

} else {
var statearr_68461_68533 = state_68416__$1;
(statearr_68461_68533[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (25))){
var inst_68333 = (state_68416[(23)]);
var inst_68349 = (state_68416[(2)]);
var inst_68350 = cljs.core.not_empty.call(null,inst_68333);
var state_68416__$1 = (function (){var statearr_68462 = state_68416;
(statearr_68462[(30)] = inst_68349);

return statearr_68462;
})();
if(cljs.core.truth_(inst_68350)){
var statearr_68463_68534 = state_68416__$1;
(statearr_68463_68534[(1)] = (26));

} else {
var statearr_68464_68535 = state_68416__$1;
(statearr_68464_68535[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (34))){
var inst_68385 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
if(cljs.core.truth_(inst_68385)){
var statearr_68465_68536 = state_68416__$1;
(statearr_68465_68536[(1)] = (38));

} else {
var statearr_68466_68537 = state_68416__$1;
(statearr_68466_68537[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (17))){
var state_68416__$1 = state_68416;
var statearr_68467_68538 = state_68416__$1;
(statearr_68467_68538[(2)] = recompile_dependents);

(statearr_68467_68538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (3))){
var state_68416__$1 = state_68416;
var statearr_68468_68539 = state_68416__$1;
(statearr_68468_68539[(2)] = null);

(statearr_68468_68539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (12))){
var inst_68306 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
var statearr_68469_68540 = state_68416__$1;
(statearr_68469_68540[(2)] = inst_68306);

(statearr_68469_68540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (2))){
var inst_68268 = (state_68416[(13)]);
var inst_68275 = cljs.core.seq.call(null,inst_68268);
var inst_68276 = inst_68275;
var inst_68277 = null;
var inst_68278 = (0);
var inst_68279 = (0);
var state_68416__$1 = (function (){var statearr_68470 = state_68416;
(statearr_68470[(7)] = inst_68277);

(statearr_68470[(8)] = inst_68276);

(statearr_68470[(9)] = inst_68279);

(statearr_68470[(10)] = inst_68278);

return statearr_68470;
})();
var statearr_68471_68541 = state_68416__$1;
(statearr_68471_68541[(2)] = null);

(statearr_68471_68541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (23))){
var inst_68333 = (state_68416[(23)]);
var inst_68329 = (state_68416[(19)]);
var inst_68337 = (state_68416[(24)]);
var inst_68335 = (state_68416[(26)]);
var inst_68332 = (state_68416[(25)]);
var inst_68340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_68342 = (function (){var all_files = inst_68329;
var res_SINGLEQUOTE_ = inst_68332;
var res = inst_68333;
var files_not_loaded = inst_68335;
var dependencies_that_loaded = inst_68337;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_68333,inst_68329,inst_68337,inst_68335,inst_68332,inst_68340,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__68341){
var map__68472 = p__68341;
var map__68472__$1 = ((((!((map__68472 == null)))?(((((map__68472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68472):map__68472);
var request_url = cljs.core.get.call(null,map__68472__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_68333,inst_68329,inst_68337,inst_68335,inst_68332,inst_68340,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68343 = cljs.core.reverse.call(null,inst_68337);
var inst_68344 = cljs.core.map.call(null,inst_68342,inst_68343);
var inst_68345 = cljs.core.pr_str.call(null,inst_68344);
var inst_68346 = figwheel.client.utils.log.call(null,inst_68345);
var state_68416__$1 = (function (){var statearr_68474 = state_68416;
(statearr_68474[(31)] = inst_68340);

return statearr_68474;
})();
var statearr_68475_68542 = state_68416__$1;
(statearr_68475_68542[(2)] = inst_68346);

(statearr_68475_68542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (35))){
var state_68416__$1 = state_68416;
var statearr_68476_68543 = state_68416__$1;
(statearr_68476_68543[(2)] = true);

(statearr_68476_68543[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (19))){
var inst_68319 = (state_68416[(12)]);
var inst_68325 = figwheel.client.file_reloading.expand_files.call(null,inst_68319);
var state_68416__$1 = state_68416;
var statearr_68477_68544 = state_68416__$1;
(statearr_68477_68544[(2)] = inst_68325);

(statearr_68477_68544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (11))){
var state_68416__$1 = state_68416;
var statearr_68478_68545 = state_68416__$1;
(statearr_68478_68545[(2)] = null);

(statearr_68478_68545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (9))){
var inst_68308 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
var statearr_68479_68546 = state_68416__$1;
(statearr_68479_68546[(2)] = inst_68308);

(statearr_68479_68546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (5))){
var inst_68279 = (state_68416[(9)]);
var inst_68278 = (state_68416[(10)]);
var inst_68281 = (inst_68279 < inst_68278);
var inst_68282 = inst_68281;
var state_68416__$1 = state_68416;
if(cljs.core.truth_(inst_68282)){
var statearr_68480_68547 = state_68416__$1;
(statearr_68480_68547[(1)] = (7));

} else {
var statearr_68481_68548 = state_68416__$1;
(statearr_68481_68548[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (14))){
var inst_68289 = (state_68416[(22)]);
var inst_68298 = cljs.core.first.call(null,inst_68289);
var inst_68299 = figwheel.client.file_reloading.eval_body.call(null,inst_68298,opts);
var inst_68300 = cljs.core.next.call(null,inst_68289);
var inst_68276 = inst_68300;
var inst_68277 = null;
var inst_68278 = (0);
var inst_68279 = (0);
var state_68416__$1 = (function (){var statearr_68482 = state_68416;
(statearr_68482[(7)] = inst_68277);

(statearr_68482[(8)] = inst_68276);

(statearr_68482[(9)] = inst_68279);

(statearr_68482[(32)] = inst_68299);

(statearr_68482[(10)] = inst_68278);

return statearr_68482;
})();
var statearr_68483_68549 = state_68416__$1;
(statearr_68483_68549[(2)] = null);

(statearr_68483_68549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (45))){
var state_68416__$1 = state_68416;
var statearr_68484_68550 = state_68416__$1;
(statearr_68484_68550[(2)] = null);

(statearr_68484_68550[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (26))){
var inst_68333 = (state_68416[(23)]);
var inst_68329 = (state_68416[(19)]);
var inst_68337 = (state_68416[(24)]);
var inst_68335 = (state_68416[(26)]);
var inst_68332 = (state_68416[(25)]);
var inst_68352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_68354 = (function (){var all_files = inst_68329;
var res_SINGLEQUOTE_ = inst_68332;
var res = inst_68333;
var files_not_loaded = inst_68335;
var dependencies_that_loaded = inst_68337;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_68333,inst_68329,inst_68337,inst_68335,inst_68332,inst_68352,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__68353){
var map__68485 = p__68353;
var map__68485__$1 = ((((!((map__68485 == null)))?(((((map__68485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68485):map__68485);
var namespace = cljs.core.get.call(null,map__68485__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__68485__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_68333,inst_68329,inst_68337,inst_68335,inst_68332,inst_68352,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68355 = cljs.core.map.call(null,inst_68354,inst_68333);
var inst_68356 = cljs.core.pr_str.call(null,inst_68355);
var inst_68357 = figwheel.client.utils.log.call(null,inst_68356);
var inst_68358 = (function (){var all_files = inst_68329;
var res_SINGLEQUOTE_ = inst_68332;
var res = inst_68333;
var files_not_loaded = inst_68335;
var dependencies_that_loaded = inst_68337;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_68333,inst_68329,inst_68337,inst_68335,inst_68332,inst_68352,inst_68354,inst_68355,inst_68356,inst_68357,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_68333,inst_68329,inst_68337,inst_68335,inst_68332,inst_68352,inst_68354,inst_68355,inst_68356,inst_68357,state_val_68417,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68359 = setTimeout(inst_68358,(10));
var state_68416__$1 = (function (){var statearr_68487 = state_68416;
(statearr_68487[(33)] = inst_68352);

(statearr_68487[(34)] = inst_68357);

return statearr_68487;
})();
var statearr_68488_68551 = state_68416__$1;
(statearr_68488_68551[(2)] = inst_68359);

(statearr_68488_68551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (16))){
var state_68416__$1 = state_68416;
var statearr_68489_68552 = state_68416__$1;
(statearr_68489_68552[(2)] = reload_dependents);

(statearr_68489_68552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (38))){
var inst_68369 = (state_68416[(16)]);
var inst_68387 = cljs.core.apply.call(null,cljs.core.hash_map,inst_68369);
var state_68416__$1 = state_68416;
var statearr_68490_68553 = state_68416__$1;
(statearr_68490_68553[(2)] = inst_68387);

(statearr_68490_68553[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (30))){
var state_68416__$1 = state_68416;
var statearr_68491_68554 = state_68416__$1;
(statearr_68491_68554[(2)] = null);

(statearr_68491_68554[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (10))){
var inst_68289 = (state_68416[(22)]);
var inst_68291 = cljs.core.chunked_seq_QMARK_.call(null,inst_68289);
var state_68416__$1 = state_68416;
if(inst_68291){
var statearr_68492_68555 = state_68416__$1;
(statearr_68492_68555[(1)] = (13));

} else {
var statearr_68493_68556 = state_68416__$1;
(statearr_68493_68556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (18))){
var inst_68323 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
if(cljs.core.truth_(inst_68323)){
var statearr_68494_68557 = state_68416__$1;
(statearr_68494_68557[(1)] = (19));

} else {
var statearr_68495_68558 = state_68416__$1;
(statearr_68495_68558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (42))){
var state_68416__$1 = state_68416;
var statearr_68496_68559 = state_68416__$1;
(statearr_68496_68559[(2)] = null);

(statearr_68496_68559[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (37))){
var inst_68382 = (state_68416[(2)]);
var state_68416__$1 = state_68416;
var statearr_68497_68560 = state_68416__$1;
(statearr_68497_68560[(2)] = inst_68382);

(statearr_68497_68560[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68417 === (8))){
var inst_68276 = (state_68416[(8)]);
var inst_68289 = (state_68416[(22)]);
var inst_68289__$1 = cljs.core.seq.call(null,inst_68276);
var state_68416__$1 = (function (){var statearr_68498 = state_68416;
(statearr_68498[(22)] = inst_68289__$1);

return statearr_68498;
})();
if(inst_68289__$1){
var statearr_68499_68561 = state_68416__$1;
(statearr_68499_68561[(1)] = (10));

} else {
var statearr_68500_68562 = state_68416__$1;
(statearr_68500_68562[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50568__auto__,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto____0 = (function (){
var statearr_68501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68501[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto__);

(statearr_68501[(1)] = (1));

return statearr_68501;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto____1 = (function (state_68416){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_68416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e68502){if((e68502 instanceof Object)){
var ex__50572__auto__ = e68502;
var statearr_68503_68563 = state_68416;
(statearr_68503_68563[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68564 = state_68416;
state_68416 = G__68564;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto__ = function(state_68416){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto____1.call(this,state_68416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__58154__auto__ = (function (){var statearr_68504 = f__58153__auto__.call(null);
(statearr_68504[(6)] = c__58152__auto__);

return statearr_68504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__,map__68261,map__68261__$1,opts,before_jsload,on_jsload,reload_dependents,map__68262,map__68262__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__58152__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__68567,link){
var map__68568 = p__68567;
var map__68568__$1 = ((((!((map__68568 == null)))?(((((map__68568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68568):map__68568);
var file = cljs.core.get.call(null,map__68568__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__68568,map__68568__$1,file){
return (function (p1__68565_SHARP_,p2__68566_SHARP_){
if(cljs.core._EQ_.call(null,p1__68565_SHARP_,p2__68566_SHARP_)){
return p1__68565_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__68568,map__68568__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__68571){
var map__68572 = p__68571;
var map__68572__$1 = ((((!((map__68572 == null)))?(((((map__68572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68572):map__68572);
var match_length = cljs.core.get.call(null,map__68572__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__68572__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__68570_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__68570_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__68574_SHARP_,p2__68575_SHARP_){
return cljs.core.assoc.call(null,p1__68574_SHARP_,cljs.core.get.call(null,p2__68575_SHARP_,key),p2__68575_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_68576 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_68576);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_68576);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__68577,p__68578){
var map__68579 = p__68577;
var map__68579__$1 = ((((!((map__68579 == null)))?(((((map__68579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68579):map__68579);
var on_cssload = cljs.core.get.call(null,map__68579__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__68580 = p__68578;
var map__68580__$1 = ((((!((map__68580 == null)))?(((((map__68580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68580):map__68580);
var files_msg = map__68580__$1;
var files = cljs.core.get.call(null,map__68580__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1548888405108
