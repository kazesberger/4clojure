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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__90014_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__90014_SHARP_));
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
var seq__90015 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__90016 = null;
var count__90017 = (0);
var i__90018 = (0);
while(true){
if((i__90018 < count__90017)){
var n = cljs.core._nth.call(null,chunk__90016,i__90018);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__90019 = seq__90015;
var G__90020 = chunk__90016;
var G__90021 = count__90017;
var G__90022 = (i__90018 + (1));
seq__90015 = G__90019;
chunk__90016 = G__90020;
count__90017 = G__90021;
i__90018 = G__90022;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__90015);
if(temp__4657__auto__){
var seq__90015__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90015__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__90015__$1);
var G__90023 = cljs.core.chunk_rest.call(null,seq__90015__$1);
var G__90024 = c__4319__auto__;
var G__90025 = cljs.core.count.call(null,c__4319__auto__);
var G__90026 = (0);
seq__90015 = G__90023;
chunk__90016 = G__90024;
count__90017 = G__90025;
i__90018 = G__90026;
continue;
} else {
var n = cljs.core.first.call(null,seq__90015__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__90027 = cljs.core.next.call(null,seq__90015__$1);
var G__90028 = null;
var G__90029 = (0);
var G__90030 = (0);
seq__90015 = G__90027;
chunk__90016 = G__90028;
count__90017 = G__90029;
i__90018 = G__90030;
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
return cljs.core.some.call(null,(function (p__90031){
var vec__90032 = p__90031;
var _ = cljs.core.nth.call(null,vec__90032,(0),null);
var v = cljs.core.nth.call(null,vec__90032,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__90035){
var vec__90036 = p__90035;
var k = cljs.core.nth.call(null,vec__90036,(0),null);
var v = cljs.core.nth.call(null,vec__90036,(1),null);
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

var seq__90048_90056 = cljs.core.seq.call(null,deps);
var chunk__90049_90057 = null;
var count__90050_90058 = (0);
var i__90051_90059 = (0);
while(true){
if((i__90051_90059 < count__90050_90058)){
var dep_90060 = cljs.core._nth.call(null,chunk__90049_90057,i__90051_90059);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_90060;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_90060));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_90060,(depth + (1)),state);
} else {
}


var G__90061 = seq__90048_90056;
var G__90062 = chunk__90049_90057;
var G__90063 = count__90050_90058;
var G__90064 = (i__90051_90059 + (1));
seq__90048_90056 = G__90061;
chunk__90049_90057 = G__90062;
count__90050_90058 = G__90063;
i__90051_90059 = G__90064;
continue;
} else {
var temp__4657__auto___90065 = cljs.core.seq.call(null,seq__90048_90056);
if(temp__4657__auto___90065){
var seq__90048_90066__$1 = temp__4657__auto___90065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90048_90066__$1)){
var c__4319__auto___90067 = cljs.core.chunk_first.call(null,seq__90048_90066__$1);
var G__90068 = cljs.core.chunk_rest.call(null,seq__90048_90066__$1);
var G__90069 = c__4319__auto___90067;
var G__90070 = cljs.core.count.call(null,c__4319__auto___90067);
var G__90071 = (0);
seq__90048_90056 = G__90068;
chunk__90049_90057 = G__90069;
count__90050_90058 = G__90070;
i__90051_90059 = G__90071;
continue;
} else {
var dep_90072 = cljs.core.first.call(null,seq__90048_90066__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_90072;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_90072));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_90072,(depth + (1)),state);
} else {
}


var G__90073 = cljs.core.next.call(null,seq__90048_90066__$1);
var G__90074 = null;
var G__90075 = (0);
var G__90076 = (0);
seq__90048_90056 = G__90073;
chunk__90049_90057 = G__90074;
count__90050_90058 = G__90075;
i__90051_90059 = G__90076;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__90052){
var vec__90053 = p__90052;
var seq__90054 = cljs.core.seq.call(null,vec__90053);
var first__90055 = cljs.core.first.call(null,seq__90054);
var seq__90054__$1 = cljs.core.next.call(null,seq__90054);
var x = first__90055;
var xs = seq__90054__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__90053,seq__90054,first__90055,seq__90054__$1,x,xs,get_deps__$1){
return (function (p1__90039_SHARP_){
return clojure.set.difference.call(null,p1__90039_SHARP_,x);
});})(vec__90053,seq__90054,first__90055,seq__90054__$1,x,xs,get_deps__$1))
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
var seq__90077 = cljs.core.seq.call(null,provides);
var chunk__90078 = null;
var count__90079 = (0);
var i__90080 = (0);
while(true){
if((i__90080 < count__90079)){
var prov = cljs.core._nth.call(null,chunk__90078,i__90080);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__90081_90089 = cljs.core.seq.call(null,requires);
var chunk__90082_90090 = null;
var count__90083_90091 = (0);
var i__90084_90092 = (0);
while(true){
if((i__90084_90092 < count__90083_90091)){
var req_90093 = cljs.core._nth.call(null,chunk__90082_90090,i__90084_90092);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90093,prov);


var G__90094 = seq__90081_90089;
var G__90095 = chunk__90082_90090;
var G__90096 = count__90083_90091;
var G__90097 = (i__90084_90092 + (1));
seq__90081_90089 = G__90094;
chunk__90082_90090 = G__90095;
count__90083_90091 = G__90096;
i__90084_90092 = G__90097;
continue;
} else {
var temp__4657__auto___90098 = cljs.core.seq.call(null,seq__90081_90089);
if(temp__4657__auto___90098){
var seq__90081_90099__$1 = temp__4657__auto___90098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90081_90099__$1)){
var c__4319__auto___90100 = cljs.core.chunk_first.call(null,seq__90081_90099__$1);
var G__90101 = cljs.core.chunk_rest.call(null,seq__90081_90099__$1);
var G__90102 = c__4319__auto___90100;
var G__90103 = cljs.core.count.call(null,c__4319__auto___90100);
var G__90104 = (0);
seq__90081_90089 = G__90101;
chunk__90082_90090 = G__90102;
count__90083_90091 = G__90103;
i__90084_90092 = G__90104;
continue;
} else {
var req_90105 = cljs.core.first.call(null,seq__90081_90099__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90105,prov);


var G__90106 = cljs.core.next.call(null,seq__90081_90099__$1);
var G__90107 = null;
var G__90108 = (0);
var G__90109 = (0);
seq__90081_90089 = G__90106;
chunk__90082_90090 = G__90107;
count__90083_90091 = G__90108;
i__90084_90092 = G__90109;
continue;
}
} else {
}
}
break;
}


var G__90110 = seq__90077;
var G__90111 = chunk__90078;
var G__90112 = count__90079;
var G__90113 = (i__90080 + (1));
seq__90077 = G__90110;
chunk__90078 = G__90111;
count__90079 = G__90112;
i__90080 = G__90113;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__90077);
if(temp__4657__auto__){
var seq__90077__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90077__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__90077__$1);
var G__90114 = cljs.core.chunk_rest.call(null,seq__90077__$1);
var G__90115 = c__4319__auto__;
var G__90116 = cljs.core.count.call(null,c__4319__auto__);
var G__90117 = (0);
seq__90077 = G__90114;
chunk__90078 = G__90115;
count__90079 = G__90116;
i__90080 = G__90117;
continue;
} else {
var prov = cljs.core.first.call(null,seq__90077__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__90085_90118 = cljs.core.seq.call(null,requires);
var chunk__90086_90119 = null;
var count__90087_90120 = (0);
var i__90088_90121 = (0);
while(true){
if((i__90088_90121 < count__90087_90120)){
var req_90122 = cljs.core._nth.call(null,chunk__90086_90119,i__90088_90121);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90122,prov);


var G__90123 = seq__90085_90118;
var G__90124 = chunk__90086_90119;
var G__90125 = count__90087_90120;
var G__90126 = (i__90088_90121 + (1));
seq__90085_90118 = G__90123;
chunk__90086_90119 = G__90124;
count__90087_90120 = G__90125;
i__90088_90121 = G__90126;
continue;
} else {
var temp__4657__auto___90127__$1 = cljs.core.seq.call(null,seq__90085_90118);
if(temp__4657__auto___90127__$1){
var seq__90085_90128__$1 = temp__4657__auto___90127__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90085_90128__$1)){
var c__4319__auto___90129 = cljs.core.chunk_first.call(null,seq__90085_90128__$1);
var G__90130 = cljs.core.chunk_rest.call(null,seq__90085_90128__$1);
var G__90131 = c__4319__auto___90129;
var G__90132 = cljs.core.count.call(null,c__4319__auto___90129);
var G__90133 = (0);
seq__90085_90118 = G__90130;
chunk__90086_90119 = G__90131;
count__90087_90120 = G__90132;
i__90088_90121 = G__90133;
continue;
} else {
var req_90134 = cljs.core.first.call(null,seq__90085_90128__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90134,prov);


var G__90135 = cljs.core.next.call(null,seq__90085_90128__$1);
var G__90136 = null;
var G__90137 = (0);
var G__90138 = (0);
seq__90085_90118 = G__90135;
chunk__90086_90119 = G__90136;
count__90087_90120 = G__90137;
i__90088_90121 = G__90138;
continue;
}
} else {
}
}
break;
}


var G__90139 = cljs.core.next.call(null,seq__90077__$1);
var G__90140 = null;
var G__90141 = (0);
var G__90142 = (0);
seq__90077 = G__90139;
chunk__90078 = G__90140;
count__90079 = G__90141;
i__90080 = G__90142;
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
var seq__90143_90147 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__90144_90148 = null;
var count__90145_90149 = (0);
var i__90146_90150 = (0);
while(true){
if((i__90146_90150 < count__90145_90149)){
var ns_90151 = cljs.core._nth.call(null,chunk__90144_90148,i__90146_90150);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_90151);


var G__90152 = seq__90143_90147;
var G__90153 = chunk__90144_90148;
var G__90154 = count__90145_90149;
var G__90155 = (i__90146_90150 + (1));
seq__90143_90147 = G__90152;
chunk__90144_90148 = G__90153;
count__90145_90149 = G__90154;
i__90146_90150 = G__90155;
continue;
} else {
var temp__4657__auto___90156 = cljs.core.seq.call(null,seq__90143_90147);
if(temp__4657__auto___90156){
var seq__90143_90157__$1 = temp__4657__auto___90156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90143_90157__$1)){
var c__4319__auto___90158 = cljs.core.chunk_first.call(null,seq__90143_90157__$1);
var G__90159 = cljs.core.chunk_rest.call(null,seq__90143_90157__$1);
var G__90160 = c__4319__auto___90158;
var G__90161 = cljs.core.count.call(null,c__4319__auto___90158);
var G__90162 = (0);
seq__90143_90147 = G__90159;
chunk__90144_90148 = G__90160;
count__90145_90149 = G__90161;
i__90146_90150 = G__90162;
continue;
} else {
var ns_90163 = cljs.core.first.call(null,seq__90143_90157__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_90163);


var G__90164 = cljs.core.next.call(null,seq__90143_90157__$1);
var G__90165 = null;
var G__90166 = (0);
var G__90167 = (0);
seq__90143_90147 = G__90164;
chunk__90144_90148 = G__90165;
count__90145_90149 = G__90166;
i__90146_90150 = G__90167;
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
var G__90168__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__90168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90169__i = 0, G__90169__a = new Array(arguments.length -  0);
while (G__90169__i < G__90169__a.length) {G__90169__a[G__90169__i] = arguments[G__90169__i + 0]; ++G__90169__i;}
  args = new cljs.core.IndexedSeq(G__90169__a,0,null);
} 
return G__90168__delegate.call(this,args);};
G__90168.cljs$lang$maxFixedArity = 0;
G__90168.cljs$lang$applyTo = (function (arglist__90170){
var args = cljs.core.seq(arglist__90170);
return G__90168__delegate(args);
});
G__90168.cljs$core$IFn$_invoke$arity$variadic = G__90168__delegate;
return G__90168;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__90171_SHARP_,p2__90172_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__90171_SHARP_)].join('')),p2__90172_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__90173_SHARP_,p2__90174_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__90173_SHARP_)].join(''),p2__90174_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__90175 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__90175.addCallback(((function (G__90175){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__90175))
);

G__90175.addErrback(((function (G__90175){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__90175))
);

return G__90175;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e90176){if((e90176 instanceof Error)){
var e = e90176;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e90176;

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
}catch (e90177){if((e90177 instanceof Error)){
var e = e90177;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e90177;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__90178 = cljs.core._EQ_;
var expr__90179 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__90178.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__90179))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__90178.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__90179))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__90178.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__90179))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__90178,expr__90179){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__90178,expr__90179))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__90181,callback){
var map__90182 = p__90181;
var map__90182__$1 = ((((!((map__90182 == null)))?(((((map__90182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90182):map__90182);
var file_msg = map__90182__$1;
var request_url = cljs.core.get.call(null,map__90182__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__90182,map__90182__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__90182,map__90182__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__){
return (function (state_90220){
var state_val_90221 = (state_90220[(1)]);
if((state_val_90221 === (7))){
var inst_90216 = (state_90220[(2)]);
var state_90220__$1 = state_90220;
var statearr_90222_90248 = state_90220__$1;
(statearr_90222_90248[(2)] = inst_90216);

(statearr_90222_90248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (1))){
var state_90220__$1 = state_90220;
var statearr_90223_90249 = state_90220__$1;
(statearr_90223_90249[(2)] = null);

(statearr_90223_90249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (4))){
var inst_90186 = (state_90220[(7)]);
var inst_90186__$1 = (state_90220[(2)]);
var state_90220__$1 = (function (){var statearr_90224 = state_90220;
(statearr_90224[(7)] = inst_90186__$1);

return statearr_90224;
})();
if(cljs.core.truth_(inst_90186__$1)){
var statearr_90225_90250 = state_90220__$1;
(statearr_90225_90250[(1)] = (5));

} else {
var statearr_90226_90251 = state_90220__$1;
(statearr_90226_90251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (15))){
var inst_90199 = (state_90220[(8)]);
var inst_90201 = (state_90220[(9)]);
var inst_90203 = inst_90201.call(null,inst_90199);
var state_90220__$1 = state_90220;
var statearr_90227_90252 = state_90220__$1;
(statearr_90227_90252[(2)] = inst_90203);

(statearr_90227_90252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (13))){
var inst_90210 = (state_90220[(2)]);
var state_90220__$1 = state_90220;
var statearr_90228_90253 = state_90220__$1;
(statearr_90228_90253[(2)] = inst_90210);

(statearr_90228_90253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (6))){
var state_90220__$1 = state_90220;
var statearr_90229_90254 = state_90220__$1;
(statearr_90229_90254[(2)] = null);

(statearr_90229_90254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (17))){
var inst_90207 = (state_90220[(2)]);
var state_90220__$1 = state_90220;
var statearr_90230_90255 = state_90220__$1;
(statearr_90230_90255[(2)] = inst_90207);

(statearr_90230_90255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (3))){
var inst_90218 = (state_90220[(2)]);
var state_90220__$1 = state_90220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90220__$1,inst_90218);
} else {
if((state_val_90221 === (12))){
var state_90220__$1 = state_90220;
var statearr_90231_90256 = state_90220__$1;
(statearr_90231_90256[(2)] = null);

(statearr_90231_90256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (2))){
var state_90220__$1 = state_90220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90220__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_90221 === (11))){
var inst_90191 = (state_90220[(10)]);
var inst_90197 = figwheel.client.file_reloading.blocking_load.call(null,inst_90191);
var state_90220__$1 = state_90220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90220__$1,(14),inst_90197);
} else {
if((state_val_90221 === (9))){
var inst_90191 = (state_90220[(10)]);
var state_90220__$1 = state_90220;
if(cljs.core.truth_(inst_90191)){
var statearr_90232_90257 = state_90220__$1;
(statearr_90232_90257[(1)] = (11));

} else {
var statearr_90233_90258 = state_90220__$1;
(statearr_90233_90258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (5))){
var inst_90186 = (state_90220[(7)]);
var inst_90192 = (state_90220[(11)]);
var inst_90191 = cljs.core.nth.call(null,inst_90186,(0),null);
var inst_90192__$1 = cljs.core.nth.call(null,inst_90186,(1),null);
var state_90220__$1 = (function (){var statearr_90234 = state_90220;
(statearr_90234[(11)] = inst_90192__$1);

(statearr_90234[(10)] = inst_90191);

return statearr_90234;
})();
if(cljs.core.truth_(inst_90192__$1)){
var statearr_90235_90259 = state_90220__$1;
(statearr_90235_90259[(1)] = (8));

} else {
var statearr_90236_90260 = state_90220__$1;
(statearr_90236_90260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (14))){
var inst_90201 = (state_90220[(9)]);
var inst_90191 = (state_90220[(10)]);
var inst_90199 = (state_90220[(2)]);
var inst_90200 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_90201__$1 = cljs.core.get.call(null,inst_90200,inst_90191);
var state_90220__$1 = (function (){var statearr_90237 = state_90220;
(statearr_90237[(8)] = inst_90199);

(statearr_90237[(9)] = inst_90201__$1);

return statearr_90237;
})();
if(cljs.core.truth_(inst_90201__$1)){
var statearr_90238_90261 = state_90220__$1;
(statearr_90238_90261[(1)] = (15));

} else {
var statearr_90239_90262 = state_90220__$1;
(statearr_90239_90262[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (16))){
var inst_90199 = (state_90220[(8)]);
var inst_90205 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_90199);
var state_90220__$1 = state_90220;
var statearr_90240_90263 = state_90220__$1;
(statearr_90240_90263[(2)] = inst_90205);

(statearr_90240_90263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (10))){
var inst_90212 = (state_90220[(2)]);
var state_90220__$1 = (function (){var statearr_90241 = state_90220;
(statearr_90241[(12)] = inst_90212);

return statearr_90241;
})();
var statearr_90242_90264 = state_90220__$1;
(statearr_90242_90264[(2)] = null);

(statearr_90242_90264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90221 === (8))){
var inst_90192 = (state_90220[(11)]);
var inst_90194 = eval(inst_90192);
var state_90220__$1 = state_90220;
var statearr_90243_90265 = state_90220__$1;
(statearr_90243_90265[(2)] = inst_90194);

(statearr_90243_90265[(1)] = (10));


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
});})(c__62848__auto__))
;
return ((function (switch__50623__auto__,c__62848__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50624__auto__ = null;
var figwheel$client$file_reloading$state_machine__50624__auto____0 = (function (){
var statearr_90244 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90244[(0)] = figwheel$client$file_reloading$state_machine__50624__auto__);

(statearr_90244[(1)] = (1));

return statearr_90244;
});
var figwheel$client$file_reloading$state_machine__50624__auto____1 = (function (state_90220){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_90220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e90245){if((e90245 instanceof Object)){
var ex__50627__auto__ = e90245;
var statearr_90246_90266 = state_90220;
(statearr_90246_90266[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90267 = state_90220;
state_90220 = G__90267;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50624__auto__ = function(state_90220){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50624__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50624__auto____1.call(this,state_90220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50624__auto____0;
figwheel$client$file_reloading$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50624__auto____1;
return figwheel$client$file_reloading$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__))
})();
var state__62850__auto__ = (function (){var statearr_90247 = f__62849__auto__.call(null);
(statearr_90247[(6)] = c__62848__auto__);

return statearr_90247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__))
);

return c__62848__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__90269 = arguments.length;
switch (G__90269) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__90271,callback){
var map__90272 = p__90271;
var map__90272__$1 = ((((!((map__90272 == null)))?(((((map__90272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90272):map__90272);
var file_msg = map__90272__$1;
var namespace = cljs.core.get.call(null,map__90272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__90272,map__90272__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__90272,map__90272__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__90274){
var map__90275 = p__90274;
var map__90275__$1 = ((((!((map__90275 == null)))?(((((map__90275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90275):map__90275);
var file_msg = map__90275__$1;
var namespace = cljs.core.get.call(null,map__90275__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__90277){
var map__90278 = p__90277;
var map__90278__$1 = ((((!((map__90278 == null)))?(((((map__90278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90278):map__90278);
var file_msg = map__90278__$1;
var namespace = cljs.core.get.call(null,map__90278__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__90280,callback){
var map__90281 = p__90280;
var map__90281__$1 = ((((!((map__90281 == null)))?(((((map__90281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90281):map__90281);
var file_msg = map__90281__$1;
var request_url = cljs.core.get.call(null,map__90281__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__90281__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__62848__auto___90331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___90331,out){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___90331,out){
return (function (state_90316){
var state_val_90317 = (state_90316[(1)]);
if((state_val_90317 === (1))){
var inst_90290 = cljs.core.seq.call(null,files);
var inst_90291 = cljs.core.first.call(null,inst_90290);
var inst_90292 = cljs.core.next.call(null,inst_90290);
var inst_90293 = files;
var state_90316__$1 = (function (){var statearr_90318 = state_90316;
(statearr_90318[(7)] = inst_90292);

(statearr_90318[(8)] = inst_90291);

(statearr_90318[(9)] = inst_90293);

return statearr_90318;
})();
var statearr_90319_90332 = state_90316__$1;
(statearr_90319_90332[(2)] = null);

(statearr_90319_90332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90317 === (2))){
var inst_90299 = (state_90316[(10)]);
var inst_90293 = (state_90316[(9)]);
var inst_90298 = cljs.core.seq.call(null,inst_90293);
var inst_90299__$1 = cljs.core.first.call(null,inst_90298);
var inst_90300 = cljs.core.next.call(null,inst_90298);
var inst_90301 = (inst_90299__$1 == null);
var inst_90302 = cljs.core.not.call(null,inst_90301);
var state_90316__$1 = (function (){var statearr_90320 = state_90316;
(statearr_90320[(11)] = inst_90300);

(statearr_90320[(10)] = inst_90299__$1);

return statearr_90320;
})();
if(inst_90302){
var statearr_90321_90333 = state_90316__$1;
(statearr_90321_90333[(1)] = (4));

} else {
var statearr_90322_90334 = state_90316__$1;
(statearr_90322_90334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90317 === (3))){
var inst_90314 = (state_90316[(2)]);
var state_90316__$1 = state_90316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90316__$1,inst_90314);
} else {
if((state_val_90317 === (4))){
var inst_90299 = (state_90316[(10)]);
var inst_90304 = figwheel.client.file_reloading.reload_js_file.call(null,inst_90299);
var state_90316__$1 = state_90316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90316__$1,(7),inst_90304);
} else {
if((state_val_90317 === (5))){
var inst_90310 = cljs.core.async.close_BANG_.call(null,out);
var state_90316__$1 = state_90316;
var statearr_90323_90335 = state_90316__$1;
(statearr_90323_90335[(2)] = inst_90310);

(statearr_90323_90335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90317 === (6))){
var inst_90312 = (state_90316[(2)]);
var state_90316__$1 = state_90316;
var statearr_90324_90336 = state_90316__$1;
(statearr_90324_90336[(2)] = inst_90312);

(statearr_90324_90336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90317 === (7))){
var inst_90300 = (state_90316[(11)]);
var inst_90306 = (state_90316[(2)]);
var inst_90307 = cljs.core.async.put_BANG_.call(null,out,inst_90306);
var inst_90293 = inst_90300;
var state_90316__$1 = (function (){var statearr_90325 = state_90316;
(statearr_90325[(12)] = inst_90307);

(statearr_90325[(9)] = inst_90293);

return statearr_90325;
})();
var statearr_90326_90337 = state_90316__$1;
(statearr_90326_90337[(2)] = null);

(statearr_90326_90337[(1)] = (2));


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
});})(c__62848__auto___90331,out))
;
return ((function (switch__50623__auto__,c__62848__auto___90331,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto____0 = (function (){
var statearr_90327 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90327[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto__);

(statearr_90327[(1)] = (1));

return statearr_90327;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto____1 = (function (state_90316){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_90316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e90328){if((e90328 instanceof Object)){
var ex__50627__auto__ = e90328;
var statearr_90329_90338 = state_90316;
(statearr_90329_90338[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90339 = state_90316;
state_90316 = G__90339;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto__ = function(state_90316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto____1.call(this,state_90316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___90331,out))
})();
var state__62850__auto__ = (function (){var statearr_90330 = f__62849__auto__.call(null);
(statearr_90330[(6)] = c__62848__auto___90331);

return statearr_90330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___90331,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__90340,opts){
var map__90341 = p__90340;
var map__90341__$1 = ((((!((map__90341 == null)))?(((((map__90341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90341):map__90341);
var eval_body = cljs.core.get.call(null,map__90341__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__90341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e90343){var e = e90343;
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
return (function (p1__90344_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__90344_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__90345){
var vec__90346 = p__90345;
var k = cljs.core.nth.call(null,vec__90346,(0),null);
var v = cljs.core.nth.call(null,vec__90346,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__90349){
var vec__90350 = p__90349;
var k = cljs.core.nth.call(null,vec__90350,(0),null);
var v = cljs.core.nth.call(null,vec__90350,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__90356,p__90357){
var map__90358 = p__90356;
var map__90358__$1 = ((((!((map__90358 == null)))?(((((map__90358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90358):map__90358);
var opts = map__90358__$1;
var before_jsload = cljs.core.get.call(null,map__90358__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__90358__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__90358__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__90359 = p__90357;
var map__90359__$1 = ((((!((map__90359 == null)))?(((((map__90359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90359):map__90359);
var msg = map__90359__$1;
var files = cljs.core.get.call(null,map__90359__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__90359__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__90359__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_90513){
var state_val_90514 = (state_90513[(1)]);
if((state_val_90514 === (7))){
var inst_90373 = (state_90513[(7)]);
var inst_90375 = (state_90513[(8)]);
var inst_90374 = (state_90513[(9)]);
var inst_90376 = (state_90513[(10)]);
var inst_90381 = cljs.core._nth.call(null,inst_90374,inst_90376);
var inst_90382 = figwheel.client.file_reloading.eval_body.call(null,inst_90381,opts);
var inst_90383 = (inst_90376 + (1));
var tmp90515 = inst_90373;
var tmp90516 = inst_90375;
var tmp90517 = inst_90374;
var inst_90373__$1 = tmp90515;
var inst_90374__$1 = tmp90517;
var inst_90375__$1 = tmp90516;
var inst_90376__$1 = inst_90383;
var state_90513__$1 = (function (){var statearr_90518 = state_90513;
(statearr_90518[(7)] = inst_90373__$1);

(statearr_90518[(11)] = inst_90382);

(statearr_90518[(8)] = inst_90375__$1);

(statearr_90518[(9)] = inst_90374__$1);

(statearr_90518[(10)] = inst_90376__$1);

return statearr_90518;
})();
var statearr_90519_90602 = state_90513__$1;
(statearr_90519_90602[(2)] = null);

(statearr_90519_90602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (20))){
var inst_90416 = (state_90513[(12)]);
var inst_90424 = figwheel.client.file_reloading.sort_files.call(null,inst_90416);
var state_90513__$1 = state_90513;
var statearr_90520_90603 = state_90513__$1;
(statearr_90520_90603[(2)] = inst_90424);

(statearr_90520_90603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (27))){
var state_90513__$1 = state_90513;
var statearr_90521_90604 = state_90513__$1;
(statearr_90521_90604[(2)] = null);

(statearr_90521_90604[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (1))){
var inst_90365 = (state_90513[(13)]);
var inst_90362 = before_jsload.call(null,files);
var inst_90363 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_90364 = (function (){return ((function (inst_90365,inst_90362,inst_90363,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90353_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__90353_SHARP_);
});
;})(inst_90365,inst_90362,inst_90363,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90365__$1 = cljs.core.filter.call(null,inst_90364,files);
var inst_90366 = cljs.core.not_empty.call(null,inst_90365__$1);
var state_90513__$1 = (function (){var statearr_90522 = state_90513;
(statearr_90522[(14)] = inst_90363);

(statearr_90522[(13)] = inst_90365__$1);

(statearr_90522[(15)] = inst_90362);

return statearr_90522;
})();
if(cljs.core.truth_(inst_90366)){
var statearr_90523_90605 = state_90513__$1;
(statearr_90523_90605[(1)] = (2));

} else {
var statearr_90524_90606 = state_90513__$1;
(statearr_90524_90606[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (24))){
var state_90513__$1 = state_90513;
var statearr_90525_90607 = state_90513__$1;
(statearr_90525_90607[(2)] = null);

(statearr_90525_90607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (39))){
var inst_90466 = (state_90513[(16)]);
var state_90513__$1 = state_90513;
var statearr_90526_90608 = state_90513__$1;
(statearr_90526_90608[(2)] = inst_90466);

(statearr_90526_90608[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (46))){
var inst_90508 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
var statearr_90527_90609 = state_90513__$1;
(statearr_90527_90609[(2)] = inst_90508);

(statearr_90527_90609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (4))){
var inst_90410 = (state_90513[(2)]);
var inst_90411 = cljs.core.List.EMPTY;
var inst_90412 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_90411);
var inst_90413 = (function (){return ((function (inst_90410,inst_90411,inst_90412,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90354_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__90354_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__90354_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__90354_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_90410,inst_90411,inst_90412,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90414 = cljs.core.filter.call(null,inst_90413,files);
var inst_90415 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_90416 = cljs.core.concat.call(null,inst_90414,inst_90415);
var state_90513__$1 = (function (){var statearr_90528 = state_90513;
(statearr_90528[(12)] = inst_90416);

(statearr_90528[(17)] = inst_90410);

(statearr_90528[(18)] = inst_90412);

return statearr_90528;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_90529_90610 = state_90513__$1;
(statearr_90529_90610[(1)] = (16));

} else {
var statearr_90530_90611 = state_90513__$1;
(statearr_90530_90611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (15))){
var inst_90400 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
var statearr_90531_90612 = state_90513__$1;
(statearr_90531_90612[(2)] = inst_90400);

(statearr_90531_90612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (21))){
var inst_90426 = (state_90513[(19)]);
var inst_90426__$1 = (state_90513[(2)]);
var inst_90427 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_90426__$1);
var state_90513__$1 = (function (){var statearr_90532 = state_90513;
(statearr_90532[(19)] = inst_90426__$1);

return statearr_90532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90513__$1,(22),inst_90427);
} else {
if((state_val_90514 === (31))){
var inst_90511 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90513__$1,inst_90511);
} else {
if((state_val_90514 === (32))){
var inst_90466 = (state_90513[(16)]);
var inst_90471 = inst_90466.cljs$lang$protocol_mask$partition0$;
var inst_90472 = (inst_90471 & (64));
var inst_90473 = inst_90466.cljs$core$ISeq$;
var inst_90474 = (cljs.core.PROTOCOL_SENTINEL === inst_90473);
var inst_90475 = ((inst_90472) || (inst_90474));
var state_90513__$1 = state_90513;
if(cljs.core.truth_(inst_90475)){
var statearr_90533_90613 = state_90513__$1;
(statearr_90533_90613[(1)] = (35));

} else {
var statearr_90534_90614 = state_90513__$1;
(statearr_90534_90614[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (40))){
var inst_90488 = (state_90513[(20)]);
var inst_90487 = (state_90513[(2)]);
var inst_90488__$1 = cljs.core.get.call(null,inst_90487,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_90489 = cljs.core.get.call(null,inst_90487,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_90490 = cljs.core.not_empty.call(null,inst_90488__$1);
var state_90513__$1 = (function (){var statearr_90535 = state_90513;
(statearr_90535[(21)] = inst_90489);

(statearr_90535[(20)] = inst_90488__$1);

return statearr_90535;
})();
if(cljs.core.truth_(inst_90490)){
var statearr_90536_90615 = state_90513__$1;
(statearr_90536_90615[(1)] = (41));

} else {
var statearr_90537_90616 = state_90513__$1;
(statearr_90537_90616[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (33))){
var state_90513__$1 = state_90513;
var statearr_90538_90617 = state_90513__$1;
(statearr_90538_90617[(2)] = false);

(statearr_90538_90617[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (13))){
var inst_90386 = (state_90513[(22)]);
var inst_90390 = cljs.core.chunk_first.call(null,inst_90386);
var inst_90391 = cljs.core.chunk_rest.call(null,inst_90386);
var inst_90392 = cljs.core.count.call(null,inst_90390);
var inst_90373 = inst_90391;
var inst_90374 = inst_90390;
var inst_90375 = inst_90392;
var inst_90376 = (0);
var state_90513__$1 = (function (){var statearr_90539 = state_90513;
(statearr_90539[(7)] = inst_90373);

(statearr_90539[(8)] = inst_90375);

(statearr_90539[(9)] = inst_90374);

(statearr_90539[(10)] = inst_90376);

return statearr_90539;
})();
var statearr_90540_90618 = state_90513__$1;
(statearr_90540_90618[(2)] = null);

(statearr_90540_90618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (22))){
var inst_90434 = (state_90513[(23)]);
var inst_90426 = (state_90513[(19)]);
var inst_90430 = (state_90513[(24)]);
var inst_90429 = (state_90513[(25)]);
var inst_90429__$1 = (state_90513[(2)]);
var inst_90430__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_90429__$1);
var inst_90431 = (function (){var all_files = inst_90426;
var res_SINGLEQUOTE_ = inst_90429__$1;
var res = inst_90430__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_90434,inst_90426,inst_90430,inst_90429,inst_90429__$1,inst_90430__$1,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90355_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__90355_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_90434,inst_90426,inst_90430,inst_90429,inst_90429__$1,inst_90430__$1,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90432 = cljs.core.filter.call(null,inst_90431,inst_90429__$1);
var inst_90433 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_90434__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_90433);
var inst_90435 = cljs.core.not_empty.call(null,inst_90434__$1);
var state_90513__$1 = (function (){var statearr_90541 = state_90513;
(statearr_90541[(26)] = inst_90432);

(statearr_90541[(23)] = inst_90434__$1);

(statearr_90541[(24)] = inst_90430__$1);

(statearr_90541[(25)] = inst_90429__$1);

return statearr_90541;
})();
if(cljs.core.truth_(inst_90435)){
var statearr_90542_90619 = state_90513__$1;
(statearr_90542_90619[(1)] = (23));

} else {
var statearr_90543_90620 = state_90513__$1;
(statearr_90543_90620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (36))){
var state_90513__$1 = state_90513;
var statearr_90544_90621 = state_90513__$1;
(statearr_90544_90621[(2)] = false);

(statearr_90544_90621[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (41))){
var inst_90488 = (state_90513[(20)]);
var inst_90492 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_90493 = cljs.core.map.call(null,inst_90492,inst_90488);
var inst_90494 = cljs.core.pr_str.call(null,inst_90493);
var inst_90495 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_90494)].join('');
var inst_90496 = figwheel.client.utils.log.call(null,inst_90495);
var state_90513__$1 = state_90513;
var statearr_90545_90622 = state_90513__$1;
(statearr_90545_90622[(2)] = inst_90496);

(statearr_90545_90622[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (43))){
var inst_90489 = (state_90513[(21)]);
var inst_90499 = (state_90513[(2)]);
var inst_90500 = cljs.core.not_empty.call(null,inst_90489);
var state_90513__$1 = (function (){var statearr_90546 = state_90513;
(statearr_90546[(27)] = inst_90499);

return statearr_90546;
})();
if(cljs.core.truth_(inst_90500)){
var statearr_90547_90623 = state_90513__$1;
(statearr_90547_90623[(1)] = (44));

} else {
var statearr_90548_90624 = state_90513__$1;
(statearr_90548_90624[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (29))){
var inst_90432 = (state_90513[(26)]);
var inst_90434 = (state_90513[(23)]);
var inst_90426 = (state_90513[(19)]);
var inst_90466 = (state_90513[(16)]);
var inst_90430 = (state_90513[(24)]);
var inst_90429 = (state_90513[(25)]);
var inst_90462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_90465 = (function (){var all_files = inst_90426;
var res_SINGLEQUOTE_ = inst_90429;
var res = inst_90430;
var files_not_loaded = inst_90432;
var dependencies_that_loaded = inst_90434;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90432,inst_90434,inst_90426,inst_90466,inst_90430,inst_90429,inst_90462,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__90464){
var map__90549 = p__90464;
var map__90549__$1 = ((((!((map__90549 == null)))?(((((map__90549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90549):map__90549);
var namespace = cljs.core.get.call(null,map__90549__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90432,inst_90434,inst_90426,inst_90466,inst_90430,inst_90429,inst_90462,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90466__$1 = cljs.core.group_by.call(null,inst_90465,inst_90432);
var inst_90468 = (inst_90466__$1 == null);
var inst_90469 = cljs.core.not.call(null,inst_90468);
var state_90513__$1 = (function (){var statearr_90551 = state_90513;
(statearr_90551[(16)] = inst_90466__$1);

(statearr_90551[(28)] = inst_90462);

return statearr_90551;
})();
if(inst_90469){
var statearr_90552_90625 = state_90513__$1;
(statearr_90552_90625[(1)] = (32));

} else {
var statearr_90553_90626 = state_90513__$1;
(statearr_90553_90626[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (44))){
var inst_90489 = (state_90513[(21)]);
var inst_90502 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_90489);
var inst_90503 = cljs.core.pr_str.call(null,inst_90502);
var inst_90504 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_90503)].join('');
var inst_90505 = figwheel.client.utils.log.call(null,inst_90504);
var state_90513__$1 = state_90513;
var statearr_90554_90627 = state_90513__$1;
(statearr_90554_90627[(2)] = inst_90505);

(statearr_90554_90627[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (6))){
var inst_90407 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
var statearr_90555_90628 = state_90513__$1;
(statearr_90555_90628[(2)] = inst_90407);

(statearr_90555_90628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (28))){
var inst_90432 = (state_90513[(26)]);
var inst_90459 = (state_90513[(2)]);
var inst_90460 = cljs.core.not_empty.call(null,inst_90432);
var state_90513__$1 = (function (){var statearr_90556 = state_90513;
(statearr_90556[(29)] = inst_90459);

return statearr_90556;
})();
if(cljs.core.truth_(inst_90460)){
var statearr_90557_90629 = state_90513__$1;
(statearr_90557_90629[(1)] = (29));

} else {
var statearr_90558_90630 = state_90513__$1;
(statearr_90558_90630[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (25))){
var inst_90430 = (state_90513[(24)]);
var inst_90446 = (state_90513[(2)]);
var inst_90447 = cljs.core.not_empty.call(null,inst_90430);
var state_90513__$1 = (function (){var statearr_90559 = state_90513;
(statearr_90559[(30)] = inst_90446);

return statearr_90559;
})();
if(cljs.core.truth_(inst_90447)){
var statearr_90560_90631 = state_90513__$1;
(statearr_90560_90631[(1)] = (26));

} else {
var statearr_90561_90632 = state_90513__$1;
(statearr_90561_90632[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (34))){
var inst_90482 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
if(cljs.core.truth_(inst_90482)){
var statearr_90562_90633 = state_90513__$1;
(statearr_90562_90633[(1)] = (38));

} else {
var statearr_90563_90634 = state_90513__$1;
(statearr_90563_90634[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (17))){
var state_90513__$1 = state_90513;
var statearr_90564_90635 = state_90513__$1;
(statearr_90564_90635[(2)] = recompile_dependents);

(statearr_90564_90635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (3))){
var state_90513__$1 = state_90513;
var statearr_90565_90636 = state_90513__$1;
(statearr_90565_90636[(2)] = null);

(statearr_90565_90636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (12))){
var inst_90403 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
var statearr_90566_90637 = state_90513__$1;
(statearr_90566_90637[(2)] = inst_90403);

(statearr_90566_90637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (2))){
var inst_90365 = (state_90513[(13)]);
var inst_90372 = cljs.core.seq.call(null,inst_90365);
var inst_90373 = inst_90372;
var inst_90374 = null;
var inst_90375 = (0);
var inst_90376 = (0);
var state_90513__$1 = (function (){var statearr_90567 = state_90513;
(statearr_90567[(7)] = inst_90373);

(statearr_90567[(8)] = inst_90375);

(statearr_90567[(9)] = inst_90374);

(statearr_90567[(10)] = inst_90376);

return statearr_90567;
})();
var statearr_90568_90638 = state_90513__$1;
(statearr_90568_90638[(2)] = null);

(statearr_90568_90638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (23))){
var inst_90432 = (state_90513[(26)]);
var inst_90434 = (state_90513[(23)]);
var inst_90426 = (state_90513[(19)]);
var inst_90430 = (state_90513[(24)]);
var inst_90429 = (state_90513[(25)]);
var inst_90437 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_90439 = (function (){var all_files = inst_90426;
var res_SINGLEQUOTE_ = inst_90429;
var res = inst_90430;
var files_not_loaded = inst_90432;
var dependencies_that_loaded = inst_90434;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90432,inst_90434,inst_90426,inst_90430,inst_90429,inst_90437,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__90438){
var map__90569 = p__90438;
var map__90569__$1 = ((((!((map__90569 == null)))?(((((map__90569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90569):map__90569);
var request_url = cljs.core.get.call(null,map__90569__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90432,inst_90434,inst_90426,inst_90430,inst_90429,inst_90437,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90440 = cljs.core.reverse.call(null,inst_90434);
var inst_90441 = cljs.core.map.call(null,inst_90439,inst_90440);
var inst_90442 = cljs.core.pr_str.call(null,inst_90441);
var inst_90443 = figwheel.client.utils.log.call(null,inst_90442);
var state_90513__$1 = (function (){var statearr_90571 = state_90513;
(statearr_90571[(31)] = inst_90437);

return statearr_90571;
})();
var statearr_90572_90639 = state_90513__$1;
(statearr_90572_90639[(2)] = inst_90443);

(statearr_90572_90639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (35))){
var state_90513__$1 = state_90513;
var statearr_90573_90640 = state_90513__$1;
(statearr_90573_90640[(2)] = true);

(statearr_90573_90640[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (19))){
var inst_90416 = (state_90513[(12)]);
var inst_90422 = figwheel.client.file_reloading.expand_files.call(null,inst_90416);
var state_90513__$1 = state_90513;
var statearr_90574_90641 = state_90513__$1;
(statearr_90574_90641[(2)] = inst_90422);

(statearr_90574_90641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (11))){
var state_90513__$1 = state_90513;
var statearr_90575_90642 = state_90513__$1;
(statearr_90575_90642[(2)] = null);

(statearr_90575_90642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (9))){
var inst_90405 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
var statearr_90576_90643 = state_90513__$1;
(statearr_90576_90643[(2)] = inst_90405);

(statearr_90576_90643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (5))){
var inst_90375 = (state_90513[(8)]);
var inst_90376 = (state_90513[(10)]);
var inst_90378 = (inst_90376 < inst_90375);
var inst_90379 = inst_90378;
var state_90513__$1 = state_90513;
if(cljs.core.truth_(inst_90379)){
var statearr_90577_90644 = state_90513__$1;
(statearr_90577_90644[(1)] = (7));

} else {
var statearr_90578_90645 = state_90513__$1;
(statearr_90578_90645[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (14))){
var inst_90386 = (state_90513[(22)]);
var inst_90395 = cljs.core.first.call(null,inst_90386);
var inst_90396 = figwheel.client.file_reloading.eval_body.call(null,inst_90395,opts);
var inst_90397 = cljs.core.next.call(null,inst_90386);
var inst_90373 = inst_90397;
var inst_90374 = null;
var inst_90375 = (0);
var inst_90376 = (0);
var state_90513__$1 = (function (){var statearr_90579 = state_90513;
(statearr_90579[(7)] = inst_90373);

(statearr_90579[(8)] = inst_90375);

(statearr_90579[(9)] = inst_90374);

(statearr_90579[(10)] = inst_90376);

(statearr_90579[(32)] = inst_90396);

return statearr_90579;
})();
var statearr_90580_90646 = state_90513__$1;
(statearr_90580_90646[(2)] = null);

(statearr_90580_90646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (45))){
var state_90513__$1 = state_90513;
var statearr_90581_90647 = state_90513__$1;
(statearr_90581_90647[(2)] = null);

(statearr_90581_90647[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (26))){
var inst_90432 = (state_90513[(26)]);
var inst_90434 = (state_90513[(23)]);
var inst_90426 = (state_90513[(19)]);
var inst_90430 = (state_90513[(24)]);
var inst_90429 = (state_90513[(25)]);
var inst_90449 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_90451 = (function (){var all_files = inst_90426;
var res_SINGLEQUOTE_ = inst_90429;
var res = inst_90430;
var files_not_loaded = inst_90432;
var dependencies_that_loaded = inst_90434;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90432,inst_90434,inst_90426,inst_90430,inst_90429,inst_90449,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__90450){
var map__90582 = p__90450;
var map__90582__$1 = ((((!((map__90582 == null)))?(((((map__90582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90582):map__90582);
var namespace = cljs.core.get.call(null,map__90582__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__90582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90432,inst_90434,inst_90426,inst_90430,inst_90429,inst_90449,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90452 = cljs.core.map.call(null,inst_90451,inst_90430);
var inst_90453 = cljs.core.pr_str.call(null,inst_90452);
var inst_90454 = figwheel.client.utils.log.call(null,inst_90453);
var inst_90455 = (function (){var all_files = inst_90426;
var res_SINGLEQUOTE_ = inst_90429;
var res = inst_90430;
var files_not_loaded = inst_90432;
var dependencies_that_loaded = inst_90434;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90432,inst_90434,inst_90426,inst_90430,inst_90429,inst_90449,inst_90451,inst_90452,inst_90453,inst_90454,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90432,inst_90434,inst_90426,inst_90430,inst_90429,inst_90449,inst_90451,inst_90452,inst_90453,inst_90454,state_val_90514,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90456 = setTimeout(inst_90455,(10));
var state_90513__$1 = (function (){var statearr_90584 = state_90513;
(statearr_90584[(33)] = inst_90449);

(statearr_90584[(34)] = inst_90454);

return statearr_90584;
})();
var statearr_90585_90648 = state_90513__$1;
(statearr_90585_90648[(2)] = inst_90456);

(statearr_90585_90648[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (16))){
var state_90513__$1 = state_90513;
var statearr_90586_90649 = state_90513__$1;
(statearr_90586_90649[(2)] = reload_dependents);

(statearr_90586_90649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (38))){
var inst_90466 = (state_90513[(16)]);
var inst_90484 = cljs.core.apply.call(null,cljs.core.hash_map,inst_90466);
var state_90513__$1 = state_90513;
var statearr_90587_90650 = state_90513__$1;
(statearr_90587_90650[(2)] = inst_90484);

(statearr_90587_90650[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (30))){
var state_90513__$1 = state_90513;
var statearr_90588_90651 = state_90513__$1;
(statearr_90588_90651[(2)] = null);

(statearr_90588_90651[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (10))){
var inst_90386 = (state_90513[(22)]);
var inst_90388 = cljs.core.chunked_seq_QMARK_.call(null,inst_90386);
var state_90513__$1 = state_90513;
if(inst_90388){
var statearr_90589_90652 = state_90513__$1;
(statearr_90589_90652[(1)] = (13));

} else {
var statearr_90590_90653 = state_90513__$1;
(statearr_90590_90653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (18))){
var inst_90420 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
if(cljs.core.truth_(inst_90420)){
var statearr_90591_90654 = state_90513__$1;
(statearr_90591_90654[(1)] = (19));

} else {
var statearr_90592_90655 = state_90513__$1;
(statearr_90592_90655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (42))){
var state_90513__$1 = state_90513;
var statearr_90593_90656 = state_90513__$1;
(statearr_90593_90656[(2)] = null);

(statearr_90593_90656[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (37))){
var inst_90479 = (state_90513[(2)]);
var state_90513__$1 = state_90513;
var statearr_90594_90657 = state_90513__$1;
(statearr_90594_90657[(2)] = inst_90479);

(statearr_90594_90657[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90514 === (8))){
var inst_90373 = (state_90513[(7)]);
var inst_90386 = (state_90513[(22)]);
var inst_90386__$1 = cljs.core.seq.call(null,inst_90373);
var state_90513__$1 = (function (){var statearr_90595 = state_90513;
(statearr_90595[(22)] = inst_90386__$1);

return statearr_90595;
})();
if(inst_90386__$1){
var statearr_90596_90658 = state_90513__$1;
(statearr_90596_90658[(1)] = (10));

} else {
var statearr_90597_90659 = state_90513__$1;
(statearr_90597_90659[(1)] = (11));

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
});})(c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50623__auto__,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto____0 = (function (){
var statearr_90598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90598[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto__);

(statearr_90598[(1)] = (1));

return statearr_90598;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto____1 = (function (state_90513){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_90513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e90599){if((e90599 instanceof Object)){
var ex__50627__auto__ = e90599;
var statearr_90600_90660 = state_90513;
(statearr_90600_90660[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90661 = state_90513;
state_90513 = G__90661;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto__ = function(state_90513){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto____1.call(this,state_90513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__62850__auto__ = (function (){var statearr_90601 = f__62849__auto__.call(null);
(statearr_90601[(6)] = c__62848__auto__);

return statearr_90601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__,map__90358,map__90358__$1,opts,before_jsload,on_jsload,reload_dependents,map__90359,map__90359__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__62848__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__90664,link){
var map__90665 = p__90664;
var map__90665__$1 = ((((!((map__90665 == null)))?(((((map__90665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90665):map__90665);
var file = cljs.core.get.call(null,map__90665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__90665,map__90665__$1,file){
return (function (p1__90662_SHARP_,p2__90663_SHARP_){
if(cljs.core._EQ_.call(null,p1__90662_SHARP_,p2__90663_SHARP_)){
return p1__90662_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__90665,map__90665__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__90668){
var map__90669 = p__90668;
var map__90669__$1 = ((((!((map__90669 == null)))?(((((map__90669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90669):map__90669);
var match_length = cljs.core.get.call(null,map__90669__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__90669__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__90667_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__90667_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__90671_SHARP_,p2__90672_SHARP_){
return cljs.core.assoc.call(null,p1__90671_SHARP_,cljs.core.get.call(null,p2__90672_SHARP_,key),p2__90672_SHARP_);
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
var loaded_f_datas_90673 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_90673);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_90673);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__90674,p__90675){
var map__90676 = p__90674;
var map__90676__$1 = ((((!((map__90676 == null)))?(((((map__90676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90676):map__90676);
var on_cssload = cljs.core.get.call(null,map__90676__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__90677 = p__90675;
var map__90677__$1 = ((((!((map__90677 == null)))?(((((map__90677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90677):map__90677);
var files_msg = map__90677__$1;
var files = cljs.core.get.call(null,map__90677__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1549004162893
