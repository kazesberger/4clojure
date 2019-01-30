// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.view.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('mranderson048.reagent.v0v7v0.reagent.core');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
goog.require('cljsjs.react_highlight');
goog.require('cljsjs.highlight.langs.clojure');
day8.re_frame_10x.view.components.search_input = (function day8$re_frame_10x$view$components$search_input(p__66998){
var map__66999 = p__66998;
var map__66999__$1 = ((((!((map__66999 == null)))?(((((map__66999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66999):map__66999);
var title = cljs.core.get.call(null,map__66999__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.call(null,map__66999__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.call(null,map__66999__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.call(null,map__66999__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.call(null,map__66999__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,title);
var save = ((function (val,map__66999,map__66999__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''));
if((cljs.core.count.call(null,v) > (0))){
return on_save.call(null,v);
} else {
return null;
}
});})(val,map__66999,map__66999__$1,title,placeholder,on_save,on_change,on_stop))
;
return ((function (val,save,map__66999,map__66999__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))))?(25):cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save,map__66999,map__66999__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__66996_SHARP_){
cljs.core.reset_BANG_.call(null,val,p1__66996_SHARP_.target.value);

return on_change.call(null,p1__66996_SHARP_);
});})(val,save,map__66999,map__66999__$1,title,placeholder,on_save,on_change,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save,map__66999,map__66999__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__66997_SHARP_){
var G__67001 = p1__66997_SHARP_.which;
switch (G__67001) {
case (13):
save.call(null);

return cljs.core.reset_BANG_.call(null,val,"");

break;
default:
return null;

}
});})(val,save,map__66999,map__66999__$1,title,placeholder,on_save,on_change,on_stop))
], null)], null);
});
;})(val,save,map__66999,map__66999__$1,title,placeholder,on_save,on_change,on_stop))
});
day8.re_frame_10x.view.components.scroll_BANG_ = (function day8$re_frame_10x$view$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js.call(null,start),cljs.core.clj__GT_js.call(null,end),time)).play();
});
day8.re_frame_10x.view.components.scrolled_to_end_QMARK_ = (function day8$re_frame_10x$view$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame_10x.view.components.autoscroll_list = (function day8$re_frame_10x$view$components$autoscroll_list(p__67003,child){
var map__67004 = p__67003;
var map__67004__$1 = ((((!((map__67004 == null)))?(((((map__67004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67004):map__67004);
var class$ = cljs.core.get.call(null,map__67004__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scroll_QMARK_ = cljs.core.get.call(null,map__67004__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));

var node = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,null);
var should_scroll = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,true);
return mranderson048.reagent.v0v7v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"autoscroll-list",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_){
return (function (_){
return day8.re_frame_10x.view.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(0));
});})(node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_){
return (function (_){
return cljs.core.reset_BANG_.call(null,should_scroll,day8.re_frame_10x.view.components.scrolled_to_end_QMARK_.call(null,cljs.core.deref.call(null,node),(100)));
});})(node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_){
return (function (_){
if(cljs.core.truth_((function (){var and__3911__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,should_scroll);
} else {
return and__3911__auto__;
}
})())){
return day8.re_frame_10x.view.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(500));
} else {
return null;
}
});})(node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_){
return (function (p__67006,child__$1){
var map__67007 = p__67006;
var map__67007__$1 = ((((!((map__67007 == null)))?(((((map__67007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67007):map__67007);
var class$__$1 = cljs.core.get.call(null,map__67007__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__67007,map__67007__$1,class$__$1,node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_){
return (function (dom_node){
return cljs.core.reset_BANG_.call(null,node,dom_node);
});})(map__67007,map__67007__$1,class$__$1,node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_))
], null),child__$1], null);
});})(node,should_scroll,map__67004,map__67004__$1,class$,scroll_QMARK_))
], null));
});
day8.re_frame_10x.view.components.string__GT_css = (function day8$re_frame_10x$view$components$string__GT_css(css_string){

return cljs.core.reduce.call(null,(function (acc,p__67010){
var vec__67011 = p__67010;
var property = cljs.core.nth.call(null,vec__67011,(0),null);
var value = cljs.core.nth.call(null,vec__67011,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__67009_SHARP_){
return clojure.string.split.call(null,p1__67009_SHARP_,/:/);
}),clojure.string.split.call(null,css_string,/;/)));
});
day8.re_frame_10x.view.components.default_cljs_devtools_prefs = cljs.core.deref.call(null,devtools.prefs.default_config);
day8.re_frame_10x.view.components.reset_wrapping = (function day8$re_frame_10x$view$components$reset_wrapping(css_string){
return clojure.string.replace.call(null,css_string,/white-space:nowrap;/,"");
});
day8.re_frame_10x.view.components.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),(3),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame_10x.view.components.effective_cljs_devtools_prefs = cljs.core.merge.call(null,day8.re_frame_10x.view.components.default_cljs_devtools_prefs,day8.re_frame_10x.view.components.customized_cljs_devtools_prefs);
day8.re_frame_10x.view.components.make_devtools_api_call = (function day8$re_frame_10x$view$components$make_devtools_api_call(var_args){
var args__4502__auto__ = [];
var len__4499__auto___67016 = arguments.length;
var i__4500__auto___67017 = (0);
while(true){
if((i__4500__auto___67017 < len__4499__auto___67016)){
args__4502__auto__.push((arguments[i__4500__auto___67017]));

var G__67018 = (i__4500__auto___67017 + (1));
i__4500__auto___67017 = G__67018;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__66987__auto__ = devtools.prefs.get_prefs.call(null);
var prefs__66988__auto__ = day8.re_frame_10x.view.components.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_.call(null,prefs__66988__auto__);

return cljs.core.apply.call(null,api_fn,args);
}finally {if(cljs.core._EQ_.call(null,devtools.prefs.get_prefs.call(null),prefs__66988__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__66988__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_.call(null,previous_config__66987__auto__);
}});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$applyTo = (function (seq67014){
var G__67015 = cljs.core.first.call(null,seq67014);
var seq67014__$1 = cljs.core.next.call(null,seq67014);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67015,seq67014__$1);
});

day8.re_frame_10x.view.components.cljs_devtools_header = (function day8$re_frame_10x$view$components$cljs_devtools_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___67020 = arguments.length;
var i__4500__auto___67021 = (0);
while(true){
if((i__4500__auto___67021 < len__4499__auto___67020)){
args__4502__auto__.push((arguments[i__4500__auto___67021]));

var G__67022 = (i__4500__auto___67021 + (1));
i__4500__auto___67021 = G__67022;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$applyTo = (function (seq67019){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67019));
});

day8.re_frame_10x.view.components.cljs_devtools_body = (function day8$re_frame_10x$view$components$cljs_devtools_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___67024 = arguments.length;
var i__4500__auto___67025 = (0);
while(true){
if((i__4500__auto___67025 < len__4499__auto___67024)){
args__4502__auto__.push((arguments[i__4500__auto___67025]));

var G__67026 = (i__4500__auto___67025 + (1));
i__4500__auto___67025 = G__67026;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$applyTo = (function (seq67023){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67023));
});

day8.re_frame_10x.view.components.cljs_devtools_has_body = (function day8$re_frame_10x$view$components$cljs_devtools_has_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___67028 = arguments.length;
var i__4500__auto___67029 = (0);
while(true){
if((i__4500__auto___67029 < len__4499__auto___67028)){
args__4502__auto__.push((arguments[i__4500__auto___67029]));

var G__67030 = (i__4500__auto___67029 + (1));
i__4500__auto___67029 = G__67030;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq67027){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67027));
});

day8.re_frame_10x.view.components.get_object = (function day8$re_frame_10x$view$components$get_object(jsonml){
return cljs.core.get.call(null,jsonml,(1)).object;
});
day8.re_frame_10x.view.components.get_config = (function day8$re_frame_10x$view$components$get_config(jsonml){
return cljs.core.get.call(null,jsonml,(1)).config;
});
day8.re_frame_10x.view.components.data_structure = (function day8$re_frame_10x$view$components$data_structure(jsonml,path){
var expanded_QMARK_ = mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-10x--object",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?" expanded":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return day8.re_frame_10x.view.components.cljs_devtools_has_body.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1));
} else {
return and__3911__auto__;
}
})())?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_body.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"body","body",-2049205669))):day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"header","header",119441134))))], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.view.components.jsonml__GT_hiccup = (function day8$re_frame_10x$view$components$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__67031 = jsonml;
var seq__67032 = cljs.core.seq.call(null,vec__67031);
var first__67033 = cljs.core.first.call(null,seq__67032);
var seq__67032__$1 = cljs.core.next.call(null,seq__67032);
var tag_name = first__67033;
var first__67033__$1 = cljs.core.first.call(null,seq__67032__$1);
var seq__67032__$2 = cljs.core.next.call(null,seq__67032__$1);
var attributes = first__67033__$1;
var children = seq__67032__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_.call(null,tagnames,tag_name)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.view.components.string__GT_css.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,attributes),"style"))], null)], null),cljs.core.map_indexed.call(null,((function (vec__67031,seq__67032,first__67033,seq__67032__$1,tag_name,first__67033__$1,seq__67032__$2,attributes,children,tagnames){
return (function (i,child){
return day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,child,cljs.core.conj.call(null,path,i));
});})(vec__67031,seq__67032,first__67033,seq__67032__$1,tag_name,first__67033__$1,seq__67032__$2,attributes,children,tagnames))
),children);
} else {
if(cljs.core._EQ_.call(null,tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame_10x.view.components.subtree = (function day8$re_frame_10x$view$components$subtree(data,title,path){
var expanded_QMARK_ = mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__3922__auto__ = title;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "data";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null)], null)], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.subscription_render = (function day8$re_frame_10x$view$components$subscription_render(data,title,path){
var expanded_QMARK_ = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null))], null),(function (){var or__3922__auto__ = title;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.simple_render = (function day8$re_frame_10x$view$components$simple_render(var_args){
var args__4502__auto__ = [];
var len__4499__auto___67041 = arguments.length;
var i__4500__auto___67042 = (0);
while(true){
if((i__4500__auto___67042 < len__4499__auto___67041)){
args__4502__auto__.push((arguments[i__4500__auto___67042]));

var G__67043 = (i__4500__auto___67042 + (1));
i__4500__auto___67042 = G__67043;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__67037){
var vec__67038 = p__67037;
var class$ = cljs.core.nth.call(null,vec__67038,(0),null);
var expanded_QMARK_ = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_,vec__67038,class$){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null),class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return ((typeof data__$1 === 'string') || ((data__$1 instanceof RegExp)) || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_,vec__67038,class$))
});

day8.re_frame_10x.view.components.simple_render.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.view.components.simple_render.cljs$lang$applyTo = (function (seq67034){
var G__67035 = cljs.core.first.call(null,seq67034);
var seq67034__$1 = cljs.core.next.call(null,seq67034);
var G__67036 = cljs.core.first.call(null,seq67034__$1);
var seq67034__$2 = cljs.core.next.call(null,seq67034__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67035,G__67036,seq67034__$2);
});

day8.re_frame_10x.view.components.tag = (function day8$re_frame_10x$view$components$tag(class$,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),["rft-tag noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),label], null)], null);
});
day8.re_frame_10x.view.components.highlight = mranderson048.reagent.v0v7v0.reagent.core.adapt_react_class.call(null,Highlight);

//# sourceMappingURL=components.js.map?rel=1548888402351
