// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e91744){if((e91744 instanceof Error)){
var e = e91744;
return "Error: Unable to stringify";
} else {
throw e91744;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__91747 = arguments.length;
switch (G__91747) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__91745_SHARP_){
if(typeof p1__91745_SHARP_ === 'string'){
return p1__91745_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__91745_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___91750 = arguments.length;
var i__4500__auto___91751 = (0);
while(true){
if((i__4500__auto___91751 < len__4499__auto___91750)){
args__4502__auto__.push((arguments[i__4500__auto___91751]));

var G__91752 = (i__4500__auto___91751 + (1));
i__4500__auto___91751 = G__91752;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq91749){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91749));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___91754 = arguments.length;
var i__4500__auto___91755 = (0);
while(true){
if((i__4500__auto___91755 < len__4499__auto___91754)){
args__4502__auto__.push((arguments[i__4500__auto___91755]));

var G__91756 = (i__4500__auto___91755 + (1));
i__4500__auto___91755 = G__91756;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq91753){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91753));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__91757){
var map__91758 = p__91757;
var map__91758__$1 = ((((!((map__91758 == null)))?(((((map__91758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91758):map__91758);
var message = cljs.core.get.call(null,map__91758__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__91758__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__62848__auto___91837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___91837,ch){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___91837,ch){
return (function (state_91809){
var state_val_91810 = (state_91809[(1)]);
if((state_val_91810 === (7))){
var inst_91805 = (state_91809[(2)]);
var state_91809__$1 = state_91809;
var statearr_91811_91838 = state_91809__$1;
(statearr_91811_91838[(2)] = inst_91805);

(statearr_91811_91838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (1))){
var state_91809__$1 = state_91809;
var statearr_91812_91839 = state_91809__$1;
(statearr_91812_91839[(2)] = null);

(statearr_91812_91839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (4))){
var inst_91762 = (state_91809[(7)]);
var inst_91762__$1 = (state_91809[(2)]);
var state_91809__$1 = (function (){var statearr_91813 = state_91809;
(statearr_91813[(7)] = inst_91762__$1);

return statearr_91813;
})();
if(cljs.core.truth_(inst_91762__$1)){
var statearr_91814_91840 = state_91809__$1;
(statearr_91814_91840[(1)] = (5));

} else {
var statearr_91815_91841 = state_91809__$1;
(statearr_91815_91841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (15))){
var inst_91769 = (state_91809[(8)]);
var inst_91784 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_91769);
var inst_91785 = cljs.core.first.call(null,inst_91784);
var inst_91786 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_91785);
var inst_91787 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91786)].join('');
var inst_91788 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_91787);
var state_91809__$1 = state_91809;
var statearr_91816_91842 = state_91809__$1;
(statearr_91816_91842[(2)] = inst_91788);

(statearr_91816_91842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (13))){
var inst_91793 = (state_91809[(2)]);
var state_91809__$1 = state_91809;
var statearr_91817_91843 = state_91809__$1;
(statearr_91817_91843[(2)] = inst_91793);

(statearr_91817_91843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (6))){
var state_91809__$1 = state_91809;
var statearr_91818_91844 = state_91809__$1;
(statearr_91818_91844[(2)] = null);

(statearr_91818_91844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (17))){
var inst_91791 = (state_91809[(2)]);
var state_91809__$1 = state_91809;
var statearr_91819_91845 = state_91809__$1;
(statearr_91819_91845[(2)] = inst_91791);

(statearr_91819_91845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (3))){
var inst_91807 = (state_91809[(2)]);
var state_91809__$1 = state_91809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91809__$1,inst_91807);
} else {
if((state_val_91810 === (12))){
var inst_91768 = (state_91809[(9)]);
var inst_91782 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_91768,opts);
var state_91809__$1 = state_91809;
if(cljs.core.truth_(inst_91782)){
var statearr_91820_91846 = state_91809__$1;
(statearr_91820_91846[(1)] = (15));

} else {
var statearr_91821_91847 = state_91809__$1;
(statearr_91821_91847[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (2))){
var state_91809__$1 = state_91809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91809__$1,(4),ch);
} else {
if((state_val_91810 === (11))){
var inst_91769 = (state_91809[(8)]);
var inst_91774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91775 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_91769);
var inst_91776 = cljs.core.async.timeout.call(null,(1000));
var inst_91777 = [inst_91775,inst_91776];
var inst_91778 = (new cljs.core.PersistentVector(null,2,(5),inst_91774,inst_91777,null));
var state_91809__$1 = state_91809;
return cljs.core.async.ioc_alts_BANG_.call(null,state_91809__$1,(14),inst_91778);
} else {
if((state_val_91810 === (9))){
var inst_91769 = (state_91809[(8)]);
var inst_91795 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_91796 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_91769);
var inst_91797 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_91796);
var inst_91798 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91797)].join('');
var inst_91799 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_91798);
var state_91809__$1 = (function (){var statearr_91822 = state_91809;
(statearr_91822[(10)] = inst_91795);

return statearr_91822;
})();
var statearr_91823_91848 = state_91809__$1;
(statearr_91823_91848[(2)] = inst_91799);

(statearr_91823_91848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (5))){
var inst_91762 = (state_91809[(7)]);
var inst_91764 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_91765 = (new cljs.core.PersistentArrayMap(null,2,inst_91764,null));
var inst_91766 = (new cljs.core.PersistentHashSet(null,inst_91765,null));
var inst_91767 = figwheel.client.focus_msgs.call(null,inst_91766,inst_91762);
var inst_91768 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_91767);
var inst_91769 = cljs.core.first.call(null,inst_91767);
var inst_91770 = figwheel.client.autoload_QMARK_.call(null);
var state_91809__$1 = (function (){var statearr_91824 = state_91809;
(statearr_91824[(8)] = inst_91769);

(statearr_91824[(9)] = inst_91768);

return statearr_91824;
})();
if(cljs.core.truth_(inst_91770)){
var statearr_91825_91849 = state_91809__$1;
(statearr_91825_91849[(1)] = (8));

} else {
var statearr_91826_91850 = state_91809__$1;
(statearr_91826_91850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (14))){
var inst_91780 = (state_91809[(2)]);
var state_91809__$1 = state_91809;
var statearr_91827_91851 = state_91809__$1;
(statearr_91827_91851[(2)] = inst_91780);

(statearr_91827_91851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (16))){
var state_91809__$1 = state_91809;
var statearr_91828_91852 = state_91809__$1;
(statearr_91828_91852[(2)] = null);

(statearr_91828_91852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (10))){
var inst_91801 = (state_91809[(2)]);
var state_91809__$1 = (function (){var statearr_91829 = state_91809;
(statearr_91829[(11)] = inst_91801);

return statearr_91829;
})();
var statearr_91830_91853 = state_91809__$1;
(statearr_91830_91853[(2)] = null);

(statearr_91830_91853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91810 === (8))){
var inst_91768 = (state_91809[(9)]);
var inst_91772 = figwheel.client.reload_file_state_QMARK_.call(null,inst_91768,opts);
var state_91809__$1 = state_91809;
if(cljs.core.truth_(inst_91772)){
var statearr_91831_91854 = state_91809__$1;
(statearr_91831_91854[(1)] = (11));

} else {
var statearr_91832_91855 = state_91809__$1;
(statearr_91832_91855[(1)] = (12));

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
});})(c__62848__auto___91837,ch))
;
return ((function (switch__50623__auto__,c__62848__auto___91837,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50624__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50624__auto____0 = (function (){
var statearr_91833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91833[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50624__auto__);

(statearr_91833[(1)] = (1));

return statearr_91833;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50624__auto____1 = (function (state_91809){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_91809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e91834){if((e91834 instanceof Object)){
var ex__50627__auto__ = e91834;
var statearr_91835_91856 = state_91809;
(statearr_91835_91856[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91857 = state_91809;
state_91809 = G__91857;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50624__auto__ = function(state_91809){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50624__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50624__auto____1.call(this,state_91809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50624__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50624__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___91837,ch))
})();
var state__62850__auto__ = (function (){var statearr_91836 = f__62849__auto__.call(null);
(statearr_91836[(6)] = c__62848__auto___91837);

return statearr_91836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___91837,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__91858_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__91858_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_91862 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_91862){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_91860 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_91861 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_91860,_STAR_print_fn_STAR_91861,sb,base_path_91862){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_91860,_STAR_print_fn_STAR_91861,sb,base_path_91862))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_91861;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_91860;
}}catch (e91859){if((e91859 instanceof Error)){
var e = e91859;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_91862], null));
} else {
var e = e91859;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_91862))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__91863){
var map__91864 = p__91863;
var map__91864__$1 = ((((!((map__91864 == null)))?(((((map__91864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91864):map__91864);
var opts = map__91864__$1;
var build_id = cljs.core.get.call(null,map__91864__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__91864,map__91864__$1,opts,build_id){
return (function (p__91866){
var vec__91867 = p__91866;
var seq__91868 = cljs.core.seq.call(null,vec__91867);
var first__91869 = cljs.core.first.call(null,seq__91868);
var seq__91868__$1 = cljs.core.next.call(null,seq__91868);
var map__91870 = first__91869;
var map__91870__$1 = ((((!((map__91870 == null)))?(((((map__91870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91870):map__91870);
var msg = map__91870__$1;
var msg_name = cljs.core.get.call(null,map__91870__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__91868__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__91867,seq__91868,first__91869,seq__91868__$1,map__91870,map__91870__$1,msg,msg_name,_,map__91864,map__91864__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__91867,seq__91868,first__91869,seq__91868__$1,map__91870,map__91870__$1,msg,msg_name,_,map__91864,map__91864__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__91864,map__91864__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__91872){
var vec__91873 = p__91872;
var seq__91874 = cljs.core.seq.call(null,vec__91873);
var first__91875 = cljs.core.first.call(null,seq__91874);
var seq__91874__$1 = cljs.core.next.call(null,seq__91874);
var map__91876 = first__91875;
var map__91876__$1 = ((((!((map__91876 == null)))?(((((map__91876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91876):map__91876);
var msg = map__91876__$1;
var msg_name = cljs.core.get.call(null,map__91876__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__91874__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__91878){
var map__91879 = p__91878;
var map__91879__$1 = ((((!((map__91879 == null)))?(((((map__91879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91879):map__91879);
var on_compile_warning = cljs.core.get.call(null,map__91879__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__91879__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__91879,map__91879__$1,on_compile_warning,on_compile_fail){
return (function (p__91881){
var vec__91882 = p__91881;
var seq__91883 = cljs.core.seq.call(null,vec__91882);
var first__91884 = cljs.core.first.call(null,seq__91883);
var seq__91883__$1 = cljs.core.next.call(null,seq__91883);
var map__91885 = first__91884;
var map__91885__$1 = ((((!((map__91885 == null)))?(((((map__91885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91885):map__91885);
var msg = map__91885__$1;
var msg_name = cljs.core.get.call(null,map__91885__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__91883__$1;
var pred__91887 = cljs.core._EQ_;
var expr__91888 = msg_name;
if(cljs.core.truth_(pred__91887.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__91888))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__91887.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__91888))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__91879,map__91879__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__,msg_hist,msg_names,msg){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__,msg_hist,msg_names,msg){
return (function (state_91977){
var state_val_91978 = (state_91977[(1)]);
if((state_val_91978 === (7))){
var inst_91897 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
if(cljs.core.truth_(inst_91897)){
var statearr_91979_92026 = state_91977__$1;
(statearr_91979_92026[(1)] = (8));

} else {
var statearr_91980_92027 = state_91977__$1;
(statearr_91980_92027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (20))){
var inst_91971 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_91981_92028 = state_91977__$1;
(statearr_91981_92028[(2)] = inst_91971);

(statearr_91981_92028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (27))){
var inst_91967 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_91982_92029 = state_91977__$1;
(statearr_91982_92029[(2)] = inst_91967);

(statearr_91982_92029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (1))){
var inst_91890 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_91977__$1 = state_91977;
if(cljs.core.truth_(inst_91890)){
var statearr_91983_92030 = state_91977__$1;
(statearr_91983_92030[(1)] = (2));

} else {
var statearr_91984_92031 = state_91977__$1;
(statearr_91984_92031[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (24))){
var inst_91969 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_91985_92032 = state_91977__$1;
(statearr_91985_92032[(2)] = inst_91969);

(statearr_91985_92032[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (4))){
var inst_91975 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91977__$1,inst_91975);
} else {
if((state_val_91978 === (15))){
var inst_91973 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_91986_92033 = state_91977__$1;
(statearr_91986_92033[(2)] = inst_91973);

(statearr_91986_92033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (21))){
var inst_91926 = (state_91977[(2)]);
var inst_91927 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91928 = figwheel.client.auto_jump_to_error.call(null,opts,inst_91927);
var state_91977__$1 = (function (){var statearr_91987 = state_91977;
(statearr_91987[(7)] = inst_91926);

return statearr_91987;
})();
var statearr_91988_92034 = state_91977__$1;
(statearr_91988_92034[(2)] = inst_91928);

(statearr_91988_92034[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (31))){
var inst_91956 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_91977__$1 = state_91977;
if(cljs.core.truth_(inst_91956)){
var statearr_91989_92035 = state_91977__$1;
(statearr_91989_92035[(1)] = (34));

} else {
var statearr_91990_92036 = state_91977__$1;
(statearr_91990_92036[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (32))){
var inst_91965 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_91991_92037 = state_91977__$1;
(statearr_91991_92037[(2)] = inst_91965);

(statearr_91991_92037[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (33))){
var inst_91952 = (state_91977[(2)]);
var inst_91953 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91954 = figwheel.client.auto_jump_to_error.call(null,opts,inst_91953);
var state_91977__$1 = (function (){var statearr_91992 = state_91977;
(statearr_91992[(8)] = inst_91952);

return statearr_91992;
})();
var statearr_91993_92038 = state_91977__$1;
(statearr_91993_92038[(2)] = inst_91954);

(statearr_91993_92038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (13))){
var inst_91911 = figwheel.client.heads_up.clear.call(null);
var state_91977__$1 = state_91977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(16),inst_91911);
} else {
if((state_val_91978 === (22))){
var inst_91932 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91933 = figwheel.client.heads_up.append_warning_message.call(null,inst_91932);
var state_91977__$1 = state_91977;
var statearr_91994_92039 = state_91977__$1;
(statearr_91994_92039[(2)] = inst_91933);

(statearr_91994_92039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (36))){
var inst_91963 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_91995_92040 = state_91977__$1;
(statearr_91995_92040[(2)] = inst_91963);

(statearr_91995_92040[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (29))){
var inst_91943 = (state_91977[(2)]);
var inst_91944 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91945 = figwheel.client.auto_jump_to_error.call(null,opts,inst_91944);
var state_91977__$1 = (function (){var statearr_91996 = state_91977;
(statearr_91996[(9)] = inst_91943);

return statearr_91996;
})();
var statearr_91997_92041 = state_91977__$1;
(statearr_91997_92041[(2)] = inst_91945);

(statearr_91997_92041[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (6))){
var inst_91892 = (state_91977[(10)]);
var state_91977__$1 = state_91977;
var statearr_91998_92042 = state_91977__$1;
(statearr_91998_92042[(2)] = inst_91892);

(statearr_91998_92042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (28))){
var inst_91939 = (state_91977[(2)]);
var inst_91940 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91941 = figwheel.client.heads_up.display_warning.call(null,inst_91940);
var state_91977__$1 = (function (){var statearr_91999 = state_91977;
(statearr_91999[(11)] = inst_91939);

return statearr_91999;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(29),inst_91941);
} else {
if((state_val_91978 === (25))){
var inst_91937 = figwheel.client.heads_up.clear.call(null);
var state_91977__$1 = state_91977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(28),inst_91937);
} else {
if((state_val_91978 === (34))){
var inst_91958 = figwheel.client.heads_up.flash_loaded.call(null);
var state_91977__$1 = state_91977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(37),inst_91958);
} else {
if((state_val_91978 === (17))){
var inst_91917 = (state_91977[(2)]);
var inst_91918 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91919 = figwheel.client.auto_jump_to_error.call(null,opts,inst_91918);
var state_91977__$1 = (function (){var statearr_92000 = state_91977;
(statearr_92000[(12)] = inst_91917);

return statearr_92000;
})();
var statearr_92001_92043 = state_91977__$1;
(statearr_92001_92043[(2)] = inst_91919);

(statearr_92001_92043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (3))){
var inst_91909 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_91977__$1 = state_91977;
if(cljs.core.truth_(inst_91909)){
var statearr_92002_92044 = state_91977__$1;
(statearr_92002_92044[(1)] = (13));

} else {
var statearr_92003_92045 = state_91977__$1;
(statearr_92003_92045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (12))){
var inst_91905 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_92004_92046 = state_91977__$1;
(statearr_92004_92046[(2)] = inst_91905);

(statearr_92004_92046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (2))){
var inst_91892 = (state_91977[(10)]);
var inst_91892__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_91977__$1 = (function (){var statearr_92005 = state_91977;
(statearr_92005[(10)] = inst_91892__$1);

return statearr_92005;
})();
if(cljs.core.truth_(inst_91892__$1)){
var statearr_92006_92047 = state_91977__$1;
(statearr_92006_92047[(1)] = (5));

} else {
var statearr_92007_92048 = state_91977__$1;
(statearr_92007_92048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (23))){
var inst_91935 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_91977__$1 = state_91977;
if(cljs.core.truth_(inst_91935)){
var statearr_92008_92049 = state_91977__$1;
(statearr_92008_92049[(1)] = (25));

} else {
var statearr_92009_92050 = state_91977__$1;
(statearr_92009_92050[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (35))){
var state_91977__$1 = state_91977;
var statearr_92010_92051 = state_91977__$1;
(statearr_92010_92051[(2)] = null);

(statearr_92010_92051[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (19))){
var inst_91930 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_91977__$1 = state_91977;
if(cljs.core.truth_(inst_91930)){
var statearr_92011_92052 = state_91977__$1;
(statearr_92011_92052[(1)] = (22));

} else {
var statearr_92012_92053 = state_91977__$1;
(statearr_92012_92053[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (11))){
var inst_91901 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_92013_92054 = state_91977__$1;
(statearr_92013_92054[(2)] = inst_91901);

(statearr_92013_92054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (9))){
var inst_91903 = figwheel.client.heads_up.clear.call(null);
var state_91977__$1 = state_91977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(12),inst_91903);
} else {
if((state_val_91978 === (5))){
var inst_91894 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_91977__$1 = state_91977;
var statearr_92014_92055 = state_91977__$1;
(statearr_92014_92055[(2)] = inst_91894);

(statearr_92014_92055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (14))){
var inst_91921 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_91977__$1 = state_91977;
if(cljs.core.truth_(inst_91921)){
var statearr_92015_92056 = state_91977__$1;
(statearr_92015_92056[(1)] = (18));

} else {
var statearr_92016_92057 = state_91977__$1;
(statearr_92016_92057[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (26))){
var inst_91947 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_91977__$1 = state_91977;
if(cljs.core.truth_(inst_91947)){
var statearr_92017_92058 = state_91977__$1;
(statearr_92017_92058[(1)] = (30));

} else {
var statearr_92018_92059 = state_91977__$1;
(statearr_92018_92059[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (16))){
var inst_91913 = (state_91977[(2)]);
var inst_91914 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91915 = figwheel.client.heads_up.display_exception.call(null,inst_91914);
var state_91977__$1 = (function (){var statearr_92019 = state_91977;
(statearr_92019[(13)] = inst_91913);

return statearr_92019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(17),inst_91915);
} else {
if((state_val_91978 === (30))){
var inst_91949 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91950 = figwheel.client.heads_up.display_warning.call(null,inst_91949);
var state_91977__$1 = state_91977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(33),inst_91950);
} else {
if((state_val_91978 === (10))){
var inst_91907 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_92020_92060 = state_91977__$1;
(statearr_92020_92060[(2)] = inst_91907);

(statearr_92020_92060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (18))){
var inst_91923 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91924 = figwheel.client.heads_up.display_exception.call(null,inst_91923);
var state_91977__$1 = state_91977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(21),inst_91924);
} else {
if((state_val_91978 === (37))){
var inst_91960 = (state_91977[(2)]);
var state_91977__$1 = state_91977;
var statearr_92021_92061 = state_91977__$1;
(statearr_92021_92061[(2)] = inst_91960);

(statearr_92021_92061[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91978 === (8))){
var inst_91899 = figwheel.client.heads_up.flash_loaded.call(null);
var state_91977__$1 = state_91977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91977__$1,(11),inst_91899);
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
});})(c__62848__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50623__auto__,c__62848__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto____0 = (function (){
var statearr_92022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92022[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto__);

(statearr_92022[(1)] = (1));

return statearr_92022;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto____1 = (function (state_91977){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_91977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e92023){if((e92023 instanceof Object)){
var ex__50627__auto__ = e92023;
var statearr_92024_92062 = state_91977;
(statearr_92024_92062[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92063 = state_91977;
state_91977 = G__92063;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto__ = function(state_91977){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto____1.call(this,state_91977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__,msg_hist,msg_names,msg))
})();
var state__62850__auto__ = (function (){var statearr_92025 = f__62849__auto__.call(null);
(statearr_92025[(6)] = c__62848__auto__);

return statearr_92025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__,msg_hist,msg_names,msg))
);

return c__62848__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__62848__auto___92092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___92092,ch){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___92092,ch){
return (function (state_92078){
var state_val_92079 = (state_92078[(1)]);
if((state_val_92079 === (1))){
var state_92078__$1 = state_92078;
var statearr_92080_92093 = state_92078__$1;
(statearr_92080_92093[(2)] = null);

(statearr_92080_92093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92079 === (2))){
var state_92078__$1 = state_92078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92078__$1,(4),ch);
} else {
if((state_val_92079 === (3))){
var inst_92076 = (state_92078[(2)]);
var state_92078__$1 = state_92078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92078__$1,inst_92076);
} else {
if((state_val_92079 === (4))){
var inst_92066 = (state_92078[(7)]);
var inst_92066__$1 = (state_92078[(2)]);
var state_92078__$1 = (function (){var statearr_92081 = state_92078;
(statearr_92081[(7)] = inst_92066__$1);

return statearr_92081;
})();
if(cljs.core.truth_(inst_92066__$1)){
var statearr_92082_92094 = state_92078__$1;
(statearr_92082_92094[(1)] = (5));

} else {
var statearr_92083_92095 = state_92078__$1;
(statearr_92083_92095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92079 === (5))){
var inst_92066 = (state_92078[(7)]);
var inst_92068 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_92066);
var state_92078__$1 = state_92078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92078__$1,(8),inst_92068);
} else {
if((state_val_92079 === (6))){
var state_92078__$1 = state_92078;
var statearr_92084_92096 = state_92078__$1;
(statearr_92084_92096[(2)] = null);

(statearr_92084_92096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92079 === (7))){
var inst_92074 = (state_92078[(2)]);
var state_92078__$1 = state_92078;
var statearr_92085_92097 = state_92078__$1;
(statearr_92085_92097[(2)] = inst_92074);

(statearr_92085_92097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92079 === (8))){
var inst_92070 = (state_92078[(2)]);
var state_92078__$1 = (function (){var statearr_92086 = state_92078;
(statearr_92086[(8)] = inst_92070);

return statearr_92086;
})();
var statearr_92087_92098 = state_92078__$1;
(statearr_92087_92098[(2)] = null);

(statearr_92087_92098[(1)] = (2));


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
});})(c__62848__auto___92092,ch))
;
return ((function (switch__50623__auto__,c__62848__auto___92092,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50624__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50624__auto____0 = (function (){
var statearr_92088 = [null,null,null,null,null,null,null,null,null];
(statearr_92088[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50624__auto__);

(statearr_92088[(1)] = (1));

return statearr_92088;
});
var figwheel$client$heads_up_plugin_$_state_machine__50624__auto____1 = (function (state_92078){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_92078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e92089){if((e92089 instanceof Object)){
var ex__50627__auto__ = e92089;
var statearr_92090_92099 = state_92078;
(statearr_92090_92099[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92100 = state_92078;
state_92078 = G__92100;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50624__auto__ = function(state_92078){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50624__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50624__auto____1.call(this,state_92078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50624__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50624__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___92092,ch))
})();
var state__62850__auto__ = (function (){var statearr_92091 = f__62849__auto__.call(null);
(statearr_92091[(6)] = c__62848__auto___92092);

return statearr_92091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___92092,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__){
return (function (state_92106){
var state_val_92107 = (state_92106[(1)]);
if((state_val_92107 === (1))){
var inst_92101 = cljs.core.async.timeout.call(null,(3000));
var state_92106__$1 = state_92106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92106__$1,(2),inst_92101);
} else {
if((state_val_92107 === (2))){
var inst_92103 = (state_92106[(2)]);
var inst_92104 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_92106__$1 = (function (){var statearr_92108 = state_92106;
(statearr_92108[(7)] = inst_92103);

return statearr_92108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92106__$1,inst_92104);
} else {
return null;
}
}
});})(c__62848__auto__))
;
return ((function (switch__50623__auto__,c__62848__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50624__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50624__auto____0 = (function (){
var statearr_92109 = [null,null,null,null,null,null,null,null];
(statearr_92109[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50624__auto__);

(statearr_92109[(1)] = (1));

return statearr_92109;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50624__auto____1 = (function (state_92106){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_92106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e92110){if((e92110 instanceof Object)){
var ex__50627__auto__ = e92110;
var statearr_92111_92113 = state_92106;
(statearr_92111_92113[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92114 = state_92106;
state_92106 = G__92114;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50624__auto__ = function(state_92106){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50624__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50624__auto____1.call(this,state_92106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50624__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50624__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__))
})();
var state__62850__auto__ = (function (){var statearr_92112 = f__62849__auto__.call(null);
(statearr_92112[(6)] = c__62848__auto__);

return statearr_92112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__))
);

return c__62848__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__,figwheel_version,temp__4657__auto__){
return (function (state_92121){
var state_val_92122 = (state_92121[(1)]);
if((state_val_92122 === (1))){
var inst_92115 = cljs.core.async.timeout.call(null,(2000));
var state_92121__$1 = state_92121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92121__$1,(2),inst_92115);
} else {
if((state_val_92122 === (2))){
var inst_92117 = (state_92121[(2)]);
var inst_92118 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_92119 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_92118);
var state_92121__$1 = (function (){var statearr_92123 = state_92121;
(statearr_92123[(7)] = inst_92117);

return statearr_92123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92121__$1,inst_92119);
} else {
return null;
}
}
});})(c__62848__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__50623__auto__,c__62848__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto____0 = (function (){
var statearr_92124 = [null,null,null,null,null,null,null,null];
(statearr_92124[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto__);

(statearr_92124[(1)] = (1));

return statearr_92124;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto____1 = (function (state_92121){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_92121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e92125){if((e92125 instanceof Object)){
var ex__50627__auto__ = e92125;
var statearr_92126_92128 = state_92121;
(statearr_92126_92128[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92129 = state_92121;
state_92121 = G__92129;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto__ = function(state_92121){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto____1.call(this,state_92121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__,figwheel_version,temp__4657__auto__))
})();
var state__62850__auto__ = (function (){var statearr_92127 = f__62849__auto__.call(null);
(statearr_92127[(6)] = c__62848__auto__);

return statearr_92127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__,figwheel_version,temp__4657__auto__))
);

return c__62848__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__92130){
var map__92131 = p__92130;
var map__92131__$1 = ((((!((map__92131 == null)))?(((((map__92131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92131):map__92131);
var file = cljs.core.get.call(null,map__92131__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__92131__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__92131__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__92133 = "";
var G__92133__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92133),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__92133);
var G__92133__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92133__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__92133__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92133__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__92133__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__92134){
var map__92135 = p__92134;
var map__92135__$1 = ((((!((map__92135 == null)))?(((((map__92135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92135):map__92135);
var ed = map__92135__$1;
var formatted_exception = cljs.core.get.call(null,map__92135__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__92135__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__92135__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__92137_92141 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__92138_92142 = null;
var count__92139_92143 = (0);
var i__92140_92144 = (0);
while(true){
if((i__92140_92144 < count__92139_92143)){
var msg_92145 = cljs.core._nth.call(null,chunk__92138_92142,i__92140_92144);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_92145);


var G__92146 = seq__92137_92141;
var G__92147 = chunk__92138_92142;
var G__92148 = count__92139_92143;
var G__92149 = (i__92140_92144 + (1));
seq__92137_92141 = G__92146;
chunk__92138_92142 = G__92147;
count__92139_92143 = G__92148;
i__92140_92144 = G__92149;
continue;
} else {
var temp__4657__auto___92150 = cljs.core.seq.call(null,seq__92137_92141);
if(temp__4657__auto___92150){
var seq__92137_92151__$1 = temp__4657__auto___92150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92137_92151__$1)){
var c__4319__auto___92152 = cljs.core.chunk_first.call(null,seq__92137_92151__$1);
var G__92153 = cljs.core.chunk_rest.call(null,seq__92137_92151__$1);
var G__92154 = c__4319__auto___92152;
var G__92155 = cljs.core.count.call(null,c__4319__auto___92152);
var G__92156 = (0);
seq__92137_92141 = G__92153;
chunk__92138_92142 = G__92154;
count__92139_92143 = G__92155;
i__92140_92144 = G__92156;
continue;
} else {
var msg_92157 = cljs.core.first.call(null,seq__92137_92151__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_92157);


var G__92158 = cljs.core.next.call(null,seq__92137_92151__$1);
var G__92159 = null;
var G__92160 = (0);
var G__92161 = (0);
seq__92137_92141 = G__92158;
chunk__92138_92142 = G__92159;
count__92139_92143 = G__92160;
i__92140_92144 = G__92161;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__92162){
var map__92163 = p__92162;
var map__92163__$1 = ((((!((map__92163 == null)))?(((((map__92163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92163):map__92163);
var w = map__92163__$1;
var message = cljs.core.get.call(null,map__92163__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__92165 = cljs.core.seq.call(null,plugins);
var chunk__92166 = null;
var count__92167 = (0);
var i__92168 = (0);
while(true){
if((i__92168 < count__92167)){
var vec__92169 = cljs.core._nth.call(null,chunk__92166,i__92168);
var k = cljs.core.nth.call(null,vec__92169,(0),null);
var plugin = cljs.core.nth.call(null,vec__92169,(1),null);
if(cljs.core.truth_(plugin)){
var pl_92175 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__92165,chunk__92166,count__92167,i__92168,pl_92175,vec__92169,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_92175.call(null,msg_hist);
});})(seq__92165,chunk__92166,count__92167,i__92168,pl_92175,vec__92169,k,plugin))
);
} else {
}


var G__92176 = seq__92165;
var G__92177 = chunk__92166;
var G__92178 = count__92167;
var G__92179 = (i__92168 + (1));
seq__92165 = G__92176;
chunk__92166 = G__92177;
count__92167 = G__92178;
i__92168 = G__92179;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__92165);
if(temp__4657__auto__){
var seq__92165__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92165__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__92165__$1);
var G__92180 = cljs.core.chunk_rest.call(null,seq__92165__$1);
var G__92181 = c__4319__auto__;
var G__92182 = cljs.core.count.call(null,c__4319__auto__);
var G__92183 = (0);
seq__92165 = G__92180;
chunk__92166 = G__92181;
count__92167 = G__92182;
i__92168 = G__92183;
continue;
} else {
var vec__92172 = cljs.core.first.call(null,seq__92165__$1);
var k = cljs.core.nth.call(null,vec__92172,(0),null);
var plugin = cljs.core.nth.call(null,vec__92172,(1),null);
if(cljs.core.truth_(plugin)){
var pl_92184 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__92165,chunk__92166,count__92167,i__92168,pl_92184,vec__92172,k,plugin,seq__92165__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_92184.call(null,msg_hist);
});})(seq__92165,chunk__92166,count__92167,i__92168,pl_92184,vec__92172,k,plugin,seq__92165__$1,temp__4657__auto__))
);
} else {
}


var G__92185 = cljs.core.next.call(null,seq__92165__$1);
var G__92186 = null;
var G__92187 = (0);
var G__92188 = (0);
seq__92165 = G__92185;
chunk__92166 = G__92186;
count__92167 = G__92187;
i__92168 = G__92188;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__92190 = arguments.length;
switch (G__92190) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__92191_92196 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__92192_92197 = null;
var count__92193_92198 = (0);
var i__92194_92199 = (0);
while(true){
if((i__92194_92199 < count__92193_92198)){
var msg_92200 = cljs.core._nth.call(null,chunk__92192_92197,i__92194_92199);
figwheel.client.socket.handle_incoming_message.call(null,msg_92200);


var G__92201 = seq__92191_92196;
var G__92202 = chunk__92192_92197;
var G__92203 = count__92193_92198;
var G__92204 = (i__92194_92199 + (1));
seq__92191_92196 = G__92201;
chunk__92192_92197 = G__92202;
count__92193_92198 = G__92203;
i__92194_92199 = G__92204;
continue;
} else {
var temp__4657__auto___92205 = cljs.core.seq.call(null,seq__92191_92196);
if(temp__4657__auto___92205){
var seq__92191_92206__$1 = temp__4657__auto___92205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92191_92206__$1)){
var c__4319__auto___92207 = cljs.core.chunk_first.call(null,seq__92191_92206__$1);
var G__92208 = cljs.core.chunk_rest.call(null,seq__92191_92206__$1);
var G__92209 = c__4319__auto___92207;
var G__92210 = cljs.core.count.call(null,c__4319__auto___92207);
var G__92211 = (0);
seq__92191_92196 = G__92208;
chunk__92192_92197 = G__92209;
count__92193_92198 = G__92210;
i__92194_92199 = G__92211;
continue;
} else {
var msg_92212 = cljs.core.first.call(null,seq__92191_92206__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_92212);


var G__92213 = cljs.core.next.call(null,seq__92191_92206__$1);
var G__92214 = null;
var G__92215 = (0);
var G__92216 = (0);
seq__92191_92196 = G__92213;
chunk__92192_92197 = G__92214;
count__92193_92198 = G__92215;
i__92194_92199 = G__92216;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___92221 = arguments.length;
var i__4500__auto___92222 = (0);
while(true){
if((i__4500__auto___92222 < len__4499__auto___92221)){
args__4502__auto__.push((arguments[i__4500__auto___92222]));

var G__92223 = (i__4500__auto___92222 + (1));
i__4500__auto___92222 = G__92223;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__92218){
var map__92219 = p__92218;
var map__92219__$1 = ((((!((map__92219 == null)))?(((((map__92219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92219):map__92219);
var opts = map__92219__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq92217){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92217));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e92224){if((e92224 instanceof Error)){
var e = e92224;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e92224;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__92225){
var map__92226 = p__92225;
var map__92226__$1 = ((((!((map__92226 == null)))?(((((map__92226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92226):map__92226);
var msg_name = cljs.core.get.call(null,map__92226__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1549004164709
