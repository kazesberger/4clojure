// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54836){
var map__54837 = p__54836;
var map__54837__$1 = ((((!((map__54837 == null)))?(((((map__54837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54837):map__54837);
var m = map__54837__$1;
var n = cljs.core.get.call(null,map__54837__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__54837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54839_54861 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54840_54862 = null;
var count__54841_54863 = (0);
var i__54842_54864 = (0);
while(true){
if((i__54842_54864 < count__54841_54863)){
var f_54865 = cljs.core._nth.call(null,chunk__54840_54862,i__54842_54864);
cljs.core.println.call(null,"  ",f_54865);


var G__54866 = seq__54839_54861;
var G__54867 = chunk__54840_54862;
var G__54868 = count__54841_54863;
var G__54869 = (i__54842_54864 + (1));
seq__54839_54861 = G__54866;
chunk__54840_54862 = G__54867;
count__54841_54863 = G__54868;
i__54842_54864 = G__54869;
continue;
} else {
var temp__4657__auto___54870 = cljs.core.seq.call(null,seq__54839_54861);
if(temp__4657__auto___54870){
var seq__54839_54871__$1 = temp__4657__auto___54870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54839_54871__$1)){
var c__4319__auto___54872 = cljs.core.chunk_first.call(null,seq__54839_54871__$1);
var G__54873 = cljs.core.chunk_rest.call(null,seq__54839_54871__$1);
var G__54874 = c__4319__auto___54872;
var G__54875 = cljs.core.count.call(null,c__4319__auto___54872);
var G__54876 = (0);
seq__54839_54861 = G__54873;
chunk__54840_54862 = G__54874;
count__54841_54863 = G__54875;
i__54842_54864 = G__54876;
continue;
} else {
var f_54877 = cljs.core.first.call(null,seq__54839_54871__$1);
cljs.core.println.call(null,"  ",f_54877);


var G__54878 = cljs.core.next.call(null,seq__54839_54871__$1);
var G__54879 = null;
var G__54880 = (0);
var G__54881 = (0);
seq__54839_54861 = G__54878;
chunk__54840_54862 = G__54879;
count__54841_54863 = G__54880;
i__54842_54864 = G__54881;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54882 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_54882);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_54882)))?cljs.core.second.call(null,arglists_54882):arglists_54882));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54843_54883 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54844_54884 = null;
var count__54845_54885 = (0);
var i__54846_54886 = (0);
while(true){
if((i__54846_54886 < count__54845_54885)){
var vec__54847_54887 = cljs.core._nth.call(null,chunk__54844_54884,i__54846_54886);
var name_54888 = cljs.core.nth.call(null,vec__54847_54887,(0),null);
var map__54850_54889 = cljs.core.nth.call(null,vec__54847_54887,(1),null);
var map__54850_54890__$1 = ((((!((map__54850_54889 == null)))?(((((map__54850_54889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54850_54889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54850_54889):map__54850_54889);
var doc_54891 = cljs.core.get.call(null,map__54850_54890__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54892 = cljs.core.get.call(null,map__54850_54890__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54888);

cljs.core.println.call(null," ",arglists_54892);

if(cljs.core.truth_(doc_54891)){
cljs.core.println.call(null," ",doc_54891);
} else {
}


var G__54893 = seq__54843_54883;
var G__54894 = chunk__54844_54884;
var G__54895 = count__54845_54885;
var G__54896 = (i__54846_54886 + (1));
seq__54843_54883 = G__54893;
chunk__54844_54884 = G__54894;
count__54845_54885 = G__54895;
i__54846_54886 = G__54896;
continue;
} else {
var temp__4657__auto___54897 = cljs.core.seq.call(null,seq__54843_54883);
if(temp__4657__auto___54897){
var seq__54843_54898__$1 = temp__4657__auto___54897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54843_54898__$1)){
var c__4319__auto___54899 = cljs.core.chunk_first.call(null,seq__54843_54898__$1);
var G__54900 = cljs.core.chunk_rest.call(null,seq__54843_54898__$1);
var G__54901 = c__4319__auto___54899;
var G__54902 = cljs.core.count.call(null,c__4319__auto___54899);
var G__54903 = (0);
seq__54843_54883 = G__54900;
chunk__54844_54884 = G__54901;
count__54845_54885 = G__54902;
i__54846_54886 = G__54903;
continue;
} else {
var vec__54852_54904 = cljs.core.first.call(null,seq__54843_54898__$1);
var name_54905 = cljs.core.nth.call(null,vec__54852_54904,(0),null);
var map__54855_54906 = cljs.core.nth.call(null,vec__54852_54904,(1),null);
var map__54855_54907__$1 = ((((!((map__54855_54906 == null)))?(((((map__54855_54906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54855_54906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54855_54906):map__54855_54906);
var doc_54908 = cljs.core.get.call(null,map__54855_54907__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54909 = cljs.core.get.call(null,map__54855_54907__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54905);

cljs.core.println.call(null," ",arglists_54909);

if(cljs.core.truth_(doc_54908)){
cljs.core.println.call(null," ",doc_54908);
} else {
}


var G__54910 = cljs.core.next.call(null,seq__54843_54898__$1);
var G__54911 = null;
var G__54912 = (0);
var G__54913 = (0);
seq__54843_54883 = G__54910;
chunk__54844_54884 = G__54911;
count__54845_54885 = G__54912;
i__54846_54886 = G__54913;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__54857 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54858 = null;
var count__54859 = (0);
var i__54860 = (0);
while(true){
if((i__54860 < count__54859)){
var role = cljs.core._nth.call(null,chunk__54858,i__54860);
var temp__4657__auto___54914__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54914__$1)){
var spec_54915 = temp__4657__auto___54914__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_54915));
} else {
}


var G__54916 = seq__54857;
var G__54917 = chunk__54858;
var G__54918 = count__54859;
var G__54919 = (i__54860 + (1));
seq__54857 = G__54916;
chunk__54858 = G__54917;
count__54859 = G__54918;
i__54860 = G__54919;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__54857);
if(temp__4657__auto____$1){
var seq__54857__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54857__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54857__$1);
var G__54920 = cljs.core.chunk_rest.call(null,seq__54857__$1);
var G__54921 = c__4319__auto__;
var G__54922 = cljs.core.count.call(null,c__4319__auto__);
var G__54923 = (0);
seq__54857 = G__54920;
chunk__54858 = G__54921;
count__54859 = G__54922;
i__54860 = G__54923;
continue;
} else {
var role = cljs.core.first.call(null,seq__54857__$1);
var temp__4657__auto___54924__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54924__$2)){
var spec_54925 = temp__4657__auto___54924__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_54925));
} else {
}


var G__54926 = cljs.core.next.call(null,seq__54857__$1);
var G__54927 = null;
var G__54928 = (0);
var G__54929 = (0);
seq__54857 = G__54926;
chunk__54858 = G__54927;
count__54859 = G__54928;
i__54860 = G__54929;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1548888384228
