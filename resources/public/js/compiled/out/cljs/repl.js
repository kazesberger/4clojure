// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__90778){
var map__90779 = p__90778;
var map__90779__$1 = ((((!((map__90779 == null)))?(((((map__90779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90779):map__90779);
var m = map__90779__$1;
var n = cljs.core.get.call(null,map__90779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__90779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__90781_90803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__90782_90804 = null;
var count__90783_90805 = (0);
var i__90784_90806 = (0);
while(true){
if((i__90784_90806 < count__90783_90805)){
var f_90807 = cljs.core._nth.call(null,chunk__90782_90804,i__90784_90806);
cljs.core.println.call(null,"  ",f_90807);


var G__90808 = seq__90781_90803;
var G__90809 = chunk__90782_90804;
var G__90810 = count__90783_90805;
var G__90811 = (i__90784_90806 + (1));
seq__90781_90803 = G__90808;
chunk__90782_90804 = G__90809;
count__90783_90805 = G__90810;
i__90784_90806 = G__90811;
continue;
} else {
var temp__4657__auto___90812 = cljs.core.seq.call(null,seq__90781_90803);
if(temp__4657__auto___90812){
var seq__90781_90813__$1 = temp__4657__auto___90812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90781_90813__$1)){
var c__4319__auto___90814 = cljs.core.chunk_first.call(null,seq__90781_90813__$1);
var G__90815 = cljs.core.chunk_rest.call(null,seq__90781_90813__$1);
var G__90816 = c__4319__auto___90814;
var G__90817 = cljs.core.count.call(null,c__4319__auto___90814);
var G__90818 = (0);
seq__90781_90803 = G__90815;
chunk__90782_90804 = G__90816;
count__90783_90805 = G__90817;
i__90784_90806 = G__90818;
continue;
} else {
var f_90819 = cljs.core.first.call(null,seq__90781_90813__$1);
cljs.core.println.call(null,"  ",f_90819);


var G__90820 = cljs.core.next.call(null,seq__90781_90813__$1);
var G__90821 = null;
var G__90822 = (0);
var G__90823 = (0);
seq__90781_90803 = G__90820;
chunk__90782_90804 = G__90821;
count__90783_90805 = G__90822;
i__90784_90806 = G__90823;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_90824 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_90824);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_90824)))?cljs.core.second.call(null,arglists_90824):arglists_90824));
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
var seq__90785_90825 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__90786_90826 = null;
var count__90787_90827 = (0);
var i__90788_90828 = (0);
while(true){
if((i__90788_90828 < count__90787_90827)){
var vec__90789_90829 = cljs.core._nth.call(null,chunk__90786_90826,i__90788_90828);
var name_90830 = cljs.core.nth.call(null,vec__90789_90829,(0),null);
var map__90792_90831 = cljs.core.nth.call(null,vec__90789_90829,(1),null);
var map__90792_90832__$1 = ((((!((map__90792_90831 == null)))?(((((map__90792_90831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90792_90831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90792_90831):map__90792_90831);
var doc_90833 = cljs.core.get.call(null,map__90792_90832__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_90834 = cljs.core.get.call(null,map__90792_90832__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_90830);

cljs.core.println.call(null," ",arglists_90834);

if(cljs.core.truth_(doc_90833)){
cljs.core.println.call(null," ",doc_90833);
} else {
}


var G__90835 = seq__90785_90825;
var G__90836 = chunk__90786_90826;
var G__90837 = count__90787_90827;
var G__90838 = (i__90788_90828 + (1));
seq__90785_90825 = G__90835;
chunk__90786_90826 = G__90836;
count__90787_90827 = G__90837;
i__90788_90828 = G__90838;
continue;
} else {
var temp__4657__auto___90839 = cljs.core.seq.call(null,seq__90785_90825);
if(temp__4657__auto___90839){
var seq__90785_90840__$1 = temp__4657__auto___90839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90785_90840__$1)){
var c__4319__auto___90841 = cljs.core.chunk_first.call(null,seq__90785_90840__$1);
var G__90842 = cljs.core.chunk_rest.call(null,seq__90785_90840__$1);
var G__90843 = c__4319__auto___90841;
var G__90844 = cljs.core.count.call(null,c__4319__auto___90841);
var G__90845 = (0);
seq__90785_90825 = G__90842;
chunk__90786_90826 = G__90843;
count__90787_90827 = G__90844;
i__90788_90828 = G__90845;
continue;
} else {
var vec__90794_90846 = cljs.core.first.call(null,seq__90785_90840__$1);
var name_90847 = cljs.core.nth.call(null,vec__90794_90846,(0),null);
var map__90797_90848 = cljs.core.nth.call(null,vec__90794_90846,(1),null);
var map__90797_90849__$1 = ((((!((map__90797_90848 == null)))?(((((map__90797_90848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90797_90848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90797_90848):map__90797_90848);
var doc_90850 = cljs.core.get.call(null,map__90797_90849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_90851 = cljs.core.get.call(null,map__90797_90849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_90847);

cljs.core.println.call(null," ",arglists_90851);

if(cljs.core.truth_(doc_90850)){
cljs.core.println.call(null," ",doc_90850);
} else {
}


var G__90852 = cljs.core.next.call(null,seq__90785_90840__$1);
var G__90853 = null;
var G__90854 = (0);
var G__90855 = (0);
seq__90785_90825 = G__90852;
chunk__90786_90826 = G__90853;
count__90787_90827 = G__90854;
i__90788_90828 = G__90855;
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

var seq__90799 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__90800 = null;
var count__90801 = (0);
var i__90802 = (0);
while(true){
if((i__90802 < count__90801)){
var role = cljs.core._nth.call(null,chunk__90800,i__90802);
var temp__4657__auto___90856__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___90856__$1)){
var spec_90857 = temp__4657__auto___90856__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_90857));
} else {
}


var G__90858 = seq__90799;
var G__90859 = chunk__90800;
var G__90860 = count__90801;
var G__90861 = (i__90802 + (1));
seq__90799 = G__90858;
chunk__90800 = G__90859;
count__90801 = G__90860;
i__90802 = G__90861;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__90799);
if(temp__4657__auto____$1){
var seq__90799__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90799__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__90799__$1);
var G__90862 = cljs.core.chunk_rest.call(null,seq__90799__$1);
var G__90863 = c__4319__auto__;
var G__90864 = cljs.core.count.call(null,c__4319__auto__);
var G__90865 = (0);
seq__90799 = G__90862;
chunk__90800 = G__90863;
count__90801 = G__90864;
i__90802 = G__90865;
continue;
} else {
var role = cljs.core.first.call(null,seq__90799__$1);
var temp__4657__auto___90866__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___90866__$2)){
var spec_90867 = temp__4657__auto___90866__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_90867));
} else {
}


var G__90868 = cljs.core.next.call(null,seq__90799__$1);
var G__90869 = null;
var G__90870 = (0);
var G__90871 = (0);
seq__90799 = G__90868;
chunk__90800 = G__90869;
count__90801 = G__90870;
i__90802 = G__90871;
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

//# sourceMappingURL=repl.js.map?rel=1549004163078
