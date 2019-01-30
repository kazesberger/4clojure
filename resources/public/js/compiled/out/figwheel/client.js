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
}catch (e68777){if((e68777 instanceof Error)){
var e = e68777;
return "Error: Unable to stringify";
} else {
throw e68777;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__68780 = arguments.length;
switch (G__68780) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__68778_SHARP_){
if(typeof p1__68778_SHARP_ === 'string'){
return p1__68778_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__68778_SHARP_);
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
var len__4499__auto___68783 = arguments.length;
var i__4500__auto___68784 = (0);
while(true){
if((i__4500__auto___68784 < len__4499__auto___68783)){
args__4502__auto__.push((arguments[i__4500__auto___68784]));

var G__68785 = (i__4500__auto___68784 + (1));
i__4500__auto___68784 = G__68785;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq68782){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68782));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___68787 = arguments.length;
var i__4500__auto___68788 = (0);
while(true){
if((i__4500__auto___68788 < len__4499__auto___68787)){
args__4502__auto__.push((arguments[i__4500__auto___68788]));

var G__68789 = (i__4500__auto___68788 + (1));
i__4500__auto___68788 = G__68789;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq68786){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68786));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__68790){
var map__68791 = p__68790;
var map__68791__$1 = ((((!((map__68791 == null)))?(((((map__68791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68791):map__68791);
var message = cljs.core.get.call(null,map__68791__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__68791__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__58152__auto___68870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___68870,ch){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___68870,ch){
return (function (state_68842){
var state_val_68843 = (state_68842[(1)]);
if((state_val_68843 === (7))){
var inst_68838 = (state_68842[(2)]);
var state_68842__$1 = state_68842;
var statearr_68844_68871 = state_68842__$1;
(statearr_68844_68871[(2)] = inst_68838);

(statearr_68844_68871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (1))){
var state_68842__$1 = state_68842;
var statearr_68845_68872 = state_68842__$1;
(statearr_68845_68872[(2)] = null);

(statearr_68845_68872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (4))){
var inst_68795 = (state_68842[(7)]);
var inst_68795__$1 = (state_68842[(2)]);
var state_68842__$1 = (function (){var statearr_68846 = state_68842;
(statearr_68846[(7)] = inst_68795__$1);

return statearr_68846;
})();
if(cljs.core.truth_(inst_68795__$1)){
var statearr_68847_68873 = state_68842__$1;
(statearr_68847_68873[(1)] = (5));

} else {
var statearr_68848_68874 = state_68842__$1;
(statearr_68848_68874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (15))){
var inst_68802 = (state_68842[(8)]);
var inst_68817 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_68802);
var inst_68818 = cljs.core.first.call(null,inst_68817);
var inst_68819 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_68818);
var inst_68820 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68819)].join('');
var inst_68821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_68820);
var state_68842__$1 = state_68842;
var statearr_68849_68875 = state_68842__$1;
(statearr_68849_68875[(2)] = inst_68821);

(statearr_68849_68875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (13))){
var inst_68826 = (state_68842[(2)]);
var state_68842__$1 = state_68842;
var statearr_68850_68876 = state_68842__$1;
(statearr_68850_68876[(2)] = inst_68826);

(statearr_68850_68876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (6))){
var state_68842__$1 = state_68842;
var statearr_68851_68877 = state_68842__$1;
(statearr_68851_68877[(2)] = null);

(statearr_68851_68877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (17))){
var inst_68824 = (state_68842[(2)]);
var state_68842__$1 = state_68842;
var statearr_68852_68878 = state_68842__$1;
(statearr_68852_68878[(2)] = inst_68824);

(statearr_68852_68878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (3))){
var inst_68840 = (state_68842[(2)]);
var state_68842__$1 = state_68842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68842__$1,inst_68840);
} else {
if((state_val_68843 === (12))){
var inst_68801 = (state_68842[(9)]);
var inst_68815 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_68801,opts);
var state_68842__$1 = state_68842;
if(cljs.core.truth_(inst_68815)){
var statearr_68853_68879 = state_68842__$1;
(statearr_68853_68879[(1)] = (15));

} else {
var statearr_68854_68880 = state_68842__$1;
(statearr_68854_68880[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (2))){
var state_68842__$1 = state_68842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68842__$1,(4),ch);
} else {
if((state_val_68843 === (11))){
var inst_68802 = (state_68842[(8)]);
var inst_68807 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68808 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_68802);
var inst_68809 = cljs.core.async.timeout.call(null,(1000));
var inst_68810 = [inst_68808,inst_68809];
var inst_68811 = (new cljs.core.PersistentVector(null,2,(5),inst_68807,inst_68810,null));
var state_68842__$1 = state_68842;
return cljs.core.async.ioc_alts_BANG_.call(null,state_68842__$1,(14),inst_68811);
} else {
if((state_val_68843 === (9))){
var inst_68802 = (state_68842[(8)]);
var inst_68828 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_68829 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_68802);
var inst_68830 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_68829);
var inst_68831 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68830)].join('');
var inst_68832 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_68831);
var state_68842__$1 = (function (){var statearr_68855 = state_68842;
(statearr_68855[(10)] = inst_68828);

return statearr_68855;
})();
var statearr_68856_68881 = state_68842__$1;
(statearr_68856_68881[(2)] = inst_68832);

(statearr_68856_68881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (5))){
var inst_68795 = (state_68842[(7)]);
var inst_68797 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_68798 = (new cljs.core.PersistentArrayMap(null,2,inst_68797,null));
var inst_68799 = (new cljs.core.PersistentHashSet(null,inst_68798,null));
var inst_68800 = figwheel.client.focus_msgs.call(null,inst_68799,inst_68795);
var inst_68801 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_68800);
var inst_68802 = cljs.core.first.call(null,inst_68800);
var inst_68803 = figwheel.client.autoload_QMARK_.call(null);
var state_68842__$1 = (function (){var statearr_68857 = state_68842;
(statearr_68857[(9)] = inst_68801);

(statearr_68857[(8)] = inst_68802);

return statearr_68857;
})();
if(cljs.core.truth_(inst_68803)){
var statearr_68858_68882 = state_68842__$1;
(statearr_68858_68882[(1)] = (8));

} else {
var statearr_68859_68883 = state_68842__$1;
(statearr_68859_68883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (14))){
var inst_68813 = (state_68842[(2)]);
var state_68842__$1 = state_68842;
var statearr_68860_68884 = state_68842__$1;
(statearr_68860_68884[(2)] = inst_68813);

(statearr_68860_68884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (16))){
var state_68842__$1 = state_68842;
var statearr_68861_68885 = state_68842__$1;
(statearr_68861_68885[(2)] = null);

(statearr_68861_68885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (10))){
var inst_68834 = (state_68842[(2)]);
var state_68842__$1 = (function (){var statearr_68862 = state_68842;
(statearr_68862[(11)] = inst_68834);

return statearr_68862;
})();
var statearr_68863_68886 = state_68842__$1;
(statearr_68863_68886[(2)] = null);

(statearr_68863_68886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68843 === (8))){
var inst_68801 = (state_68842[(9)]);
var inst_68805 = figwheel.client.reload_file_state_QMARK_.call(null,inst_68801,opts);
var state_68842__$1 = state_68842;
if(cljs.core.truth_(inst_68805)){
var statearr_68864_68887 = state_68842__$1;
(statearr_68864_68887[(1)] = (11));

} else {
var statearr_68865_68888 = state_68842__$1;
(statearr_68865_68888[(1)] = (12));

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
});})(c__58152__auto___68870,ch))
;
return ((function (switch__50568__auto__,c__58152__auto___68870,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50569__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50569__auto____0 = (function (){
var statearr_68866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68866[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50569__auto__);

(statearr_68866[(1)] = (1));

return statearr_68866;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50569__auto____1 = (function (state_68842){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_68842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e68867){if((e68867 instanceof Object)){
var ex__50572__auto__ = e68867;
var statearr_68868_68889 = state_68842;
(statearr_68868_68889[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68890 = state_68842;
state_68842 = G__68890;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50569__auto__ = function(state_68842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50569__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50569__auto____1.call(this,state_68842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50569__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50569__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___68870,ch))
})();
var state__58154__auto__ = (function (){var statearr_68869 = f__58153__auto__.call(null);
(statearr_68869[(6)] = c__58152__auto___68870);

return statearr_68869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___68870,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__68891_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__68891_SHARP_));
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
var base_path_68895 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_68895){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_68893 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_68894 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_68893,_STAR_print_fn_STAR_68894,sb,base_path_68895){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_68893,_STAR_print_fn_STAR_68894,sb,base_path_68895))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_68894;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_68893;
}}catch (e68892){if((e68892 instanceof Error)){
var e = e68892;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_68895], null));
} else {
var e = e68892;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_68895))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__68896){
var map__68897 = p__68896;
var map__68897__$1 = ((((!((map__68897 == null)))?(((((map__68897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68897):map__68897);
var opts = map__68897__$1;
var build_id = cljs.core.get.call(null,map__68897__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__68897,map__68897__$1,opts,build_id){
return (function (p__68899){
var vec__68900 = p__68899;
var seq__68901 = cljs.core.seq.call(null,vec__68900);
var first__68902 = cljs.core.first.call(null,seq__68901);
var seq__68901__$1 = cljs.core.next.call(null,seq__68901);
var map__68903 = first__68902;
var map__68903__$1 = ((((!((map__68903 == null)))?(((((map__68903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68903):map__68903);
var msg = map__68903__$1;
var msg_name = cljs.core.get.call(null,map__68903__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68901__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__68900,seq__68901,first__68902,seq__68901__$1,map__68903,map__68903__$1,msg,msg_name,_,map__68897,map__68897__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__68900,seq__68901,first__68902,seq__68901__$1,map__68903,map__68903__$1,msg,msg_name,_,map__68897,map__68897__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__68897,map__68897__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__68905){
var vec__68906 = p__68905;
var seq__68907 = cljs.core.seq.call(null,vec__68906);
var first__68908 = cljs.core.first.call(null,seq__68907);
var seq__68907__$1 = cljs.core.next.call(null,seq__68907);
var map__68909 = first__68908;
var map__68909__$1 = ((((!((map__68909 == null)))?(((((map__68909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68909):map__68909);
var msg = map__68909__$1;
var msg_name = cljs.core.get.call(null,map__68909__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68907__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__68911){
var map__68912 = p__68911;
var map__68912__$1 = ((((!((map__68912 == null)))?(((((map__68912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68912):map__68912);
var on_compile_warning = cljs.core.get.call(null,map__68912__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__68912__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__68912,map__68912__$1,on_compile_warning,on_compile_fail){
return (function (p__68914){
var vec__68915 = p__68914;
var seq__68916 = cljs.core.seq.call(null,vec__68915);
var first__68917 = cljs.core.first.call(null,seq__68916);
var seq__68916__$1 = cljs.core.next.call(null,seq__68916);
var map__68918 = first__68917;
var map__68918__$1 = ((((!((map__68918 == null)))?(((((map__68918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68918):map__68918);
var msg = map__68918__$1;
var msg_name = cljs.core.get.call(null,map__68918__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68916__$1;
var pred__68920 = cljs.core._EQ_;
var expr__68921 = msg_name;
if(cljs.core.truth_(pred__68920.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__68921))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__68920.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__68921))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__68912,map__68912__$1,on_compile_warning,on_compile_fail))
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
var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__,msg_hist,msg_names,msg){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__,msg_hist,msg_names,msg){
return (function (state_69010){
var state_val_69011 = (state_69010[(1)]);
if((state_val_69011 === (7))){
var inst_68930 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68930)){
var statearr_69012_69059 = state_69010__$1;
(statearr_69012_69059[(1)] = (8));

} else {
var statearr_69013_69060 = state_69010__$1;
(statearr_69013_69060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (20))){
var inst_69004 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69014_69061 = state_69010__$1;
(statearr_69014_69061[(2)] = inst_69004);

(statearr_69014_69061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (27))){
var inst_69000 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69015_69062 = state_69010__$1;
(statearr_69015_69062[(2)] = inst_69000);

(statearr_69015_69062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (1))){
var inst_68923 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68923)){
var statearr_69016_69063 = state_69010__$1;
(statearr_69016_69063[(1)] = (2));

} else {
var statearr_69017_69064 = state_69010__$1;
(statearr_69017_69064[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (24))){
var inst_69002 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69018_69065 = state_69010__$1;
(statearr_69018_69065[(2)] = inst_69002);

(statearr_69018_69065[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (4))){
var inst_69008 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69010__$1,inst_69008);
} else {
if((state_val_69011 === (15))){
var inst_69006 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69019_69066 = state_69010__$1;
(statearr_69019_69066[(2)] = inst_69006);

(statearr_69019_69066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (21))){
var inst_68959 = (state_69010[(2)]);
var inst_68960 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68961 = figwheel.client.auto_jump_to_error.call(null,opts,inst_68960);
var state_69010__$1 = (function (){var statearr_69020 = state_69010;
(statearr_69020[(7)] = inst_68959);

return statearr_69020;
})();
var statearr_69021_69067 = state_69010__$1;
(statearr_69021_69067[(2)] = inst_68961);

(statearr_69021_69067[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (31))){
var inst_68989 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68989)){
var statearr_69022_69068 = state_69010__$1;
(statearr_69022_69068[(1)] = (34));

} else {
var statearr_69023_69069 = state_69010__$1;
(statearr_69023_69069[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (32))){
var inst_68998 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69024_69070 = state_69010__$1;
(statearr_69024_69070[(2)] = inst_68998);

(statearr_69024_69070[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (33))){
var inst_68985 = (state_69010[(2)]);
var inst_68986 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68987 = figwheel.client.auto_jump_to_error.call(null,opts,inst_68986);
var state_69010__$1 = (function (){var statearr_69025 = state_69010;
(statearr_69025[(8)] = inst_68985);

return statearr_69025;
})();
var statearr_69026_69071 = state_69010__$1;
(statearr_69026_69071[(2)] = inst_68987);

(statearr_69026_69071[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (13))){
var inst_68944 = figwheel.client.heads_up.clear.call(null);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(16),inst_68944);
} else {
if((state_val_69011 === (22))){
var inst_68965 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68966 = figwheel.client.heads_up.append_warning_message.call(null,inst_68965);
var state_69010__$1 = state_69010;
var statearr_69027_69072 = state_69010__$1;
(statearr_69027_69072[(2)] = inst_68966);

(statearr_69027_69072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (36))){
var inst_68996 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69028_69073 = state_69010__$1;
(statearr_69028_69073[(2)] = inst_68996);

(statearr_69028_69073[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (29))){
var inst_68976 = (state_69010[(2)]);
var inst_68977 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68978 = figwheel.client.auto_jump_to_error.call(null,opts,inst_68977);
var state_69010__$1 = (function (){var statearr_69029 = state_69010;
(statearr_69029[(9)] = inst_68976);

return statearr_69029;
})();
var statearr_69030_69074 = state_69010__$1;
(statearr_69030_69074[(2)] = inst_68978);

(statearr_69030_69074[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (6))){
var inst_68925 = (state_69010[(10)]);
var state_69010__$1 = state_69010;
var statearr_69031_69075 = state_69010__$1;
(statearr_69031_69075[(2)] = inst_68925);

(statearr_69031_69075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (28))){
var inst_68972 = (state_69010[(2)]);
var inst_68973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68974 = figwheel.client.heads_up.display_warning.call(null,inst_68973);
var state_69010__$1 = (function (){var statearr_69032 = state_69010;
(statearr_69032[(11)] = inst_68972);

return statearr_69032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(29),inst_68974);
} else {
if((state_val_69011 === (25))){
var inst_68970 = figwheel.client.heads_up.clear.call(null);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(28),inst_68970);
} else {
if((state_val_69011 === (34))){
var inst_68991 = figwheel.client.heads_up.flash_loaded.call(null);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(37),inst_68991);
} else {
if((state_val_69011 === (17))){
var inst_68950 = (state_69010[(2)]);
var inst_68951 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68952 = figwheel.client.auto_jump_to_error.call(null,opts,inst_68951);
var state_69010__$1 = (function (){var statearr_69033 = state_69010;
(statearr_69033[(12)] = inst_68950);

return statearr_69033;
})();
var statearr_69034_69076 = state_69010__$1;
(statearr_69034_69076[(2)] = inst_68952);

(statearr_69034_69076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (3))){
var inst_68942 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68942)){
var statearr_69035_69077 = state_69010__$1;
(statearr_69035_69077[(1)] = (13));

} else {
var statearr_69036_69078 = state_69010__$1;
(statearr_69036_69078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (12))){
var inst_68938 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69037_69079 = state_69010__$1;
(statearr_69037_69079[(2)] = inst_68938);

(statearr_69037_69079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (2))){
var inst_68925 = (state_69010[(10)]);
var inst_68925__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_69010__$1 = (function (){var statearr_69038 = state_69010;
(statearr_69038[(10)] = inst_68925__$1);

return statearr_69038;
})();
if(cljs.core.truth_(inst_68925__$1)){
var statearr_69039_69080 = state_69010__$1;
(statearr_69039_69080[(1)] = (5));

} else {
var statearr_69040_69081 = state_69010__$1;
(statearr_69040_69081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (23))){
var inst_68968 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68968)){
var statearr_69041_69082 = state_69010__$1;
(statearr_69041_69082[(1)] = (25));

} else {
var statearr_69042_69083 = state_69010__$1;
(statearr_69042_69083[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (35))){
var state_69010__$1 = state_69010;
var statearr_69043_69084 = state_69010__$1;
(statearr_69043_69084[(2)] = null);

(statearr_69043_69084[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (19))){
var inst_68963 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68963)){
var statearr_69044_69085 = state_69010__$1;
(statearr_69044_69085[(1)] = (22));

} else {
var statearr_69045_69086 = state_69010__$1;
(statearr_69045_69086[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (11))){
var inst_68934 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69046_69087 = state_69010__$1;
(statearr_69046_69087[(2)] = inst_68934);

(statearr_69046_69087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (9))){
var inst_68936 = figwheel.client.heads_up.clear.call(null);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(12),inst_68936);
} else {
if((state_val_69011 === (5))){
var inst_68927 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_69010__$1 = state_69010;
var statearr_69047_69088 = state_69010__$1;
(statearr_69047_69088[(2)] = inst_68927);

(statearr_69047_69088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (14))){
var inst_68954 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68954)){
var statearr_69048_69089 = state_69010__$1;
(statearr_69048_69089[(1)] = (18));

} else {
var statearr_69049_69090 = state_69010__$1;
(statearr_69049_69090[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (26))){
var inst_68980 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_69010__$1 = state_69010;
if(cljs.core.truth_(inst_68980)){
var statearr_69050_69091 = state_69010__$1;
(statearr_69050_69091[(1)] = (30));

} else {
var statearr_69051_69092 = state_69010__$1;
(statearr_69051_69092[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (16))){
var inst_68946 = (state_69010[(2)]);
var inst_68947 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68948 = figwheel.client.heads_up.display_exception.call(null,inst_68947);
var state_69010__$1 = (function (){var statearr_69052 = state_69010;
(statearr_69052[(13)] = inst_68946);

return statearr_69052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(17),inst_68948);
} else {
if((state_val_69011 === (30))){
var inst_68982 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68983 = figwheel.client.heads_up.display_warning.call(null,inst_68982);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(33),inst_68983);
} else {
if((state_val_69011 === (10))){
var inst_68940 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69053_69093 = state_69010__$1;
(statearr_69053_69093[(2)] = inst_68940);

(statearr_69053_69093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (18))){
var inst_68956 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68957 = figwheel.client.heads_up.display_exception.call(null,inst_68956);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(21),inst_68957);
} else {
if((state_val_69011 === (37))){
var inst_68993 = (state_69010[(2)]);
var state_69010__$1 = state_69010;
var statearr_69054_69094 = state_69010__$1;
(statearr_69054_69094[(2)] = inst_68993);

(statearr_69054_69094[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69011 === (8))){
var inst_68932 = figwheel.client.heads_up.flash_loaded.call(null);
var state_69010__$1 = state_69010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69010__$1,(11),inst_68932);
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
});})(c__58152__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50568__auto__,c__58152__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto____0 = (function (){
var statearr_69055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69055[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto__);

(statearr_69055[(1)] = (1));

return statearr_69055;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto____1 = (function (state_69010){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_69010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e69056){if((e69056 instanceof Object)){
var ex__50572__auto__ = e69056;
var statearr_69057_69095 = state_69010;
(statearr_69057_69095[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69096 = state_69010;
state_69010 = G__69096;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto__ = function(state_69010){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto____1.call(this,state_69010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__,msg_hist,msg_names,msg))
})();
var state__58154__auto__ = (function (){var statearr_69058 = f__58153__auto__.call(null);
(statearr_69058[(6)] = c__58152__auto__);

return statearr_69058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__,msg_hist,msg_names,msg))
);

return c__58152__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__58152__auto___69125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___69125,ch){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___69125,ch){
return (function (state_69111){
var state_val_69112 = (state_69111[(1)]);
if((state_val_69112 === (1))){
var state_69111__$1 = state_69111;
var statearr_69113_69126 = state_69111__$1;
(statearr_69113_69126[(2)] = null);

(statearr_69113_69126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69112 === (2))){
var state_69111__$1 = state_69111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69111__$1,(4),ch);
} else {
if((state_val_69112 === (3))){
var inst_69109 = (state_69111[(2)]);
var state_69111__$1 = state_69111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69111__$1,inst_69109);
} else {
if((state_val_69112 === (4))){
var inst_69099 = (state_69111[(7)]);
var inst_69099__$1 = (state_69111[(2)]);
var state_69111__$1 = (function (){var statearr_69114 = state_69111;
(statearr_69114[(7)] = inst_69099__$1);

return statearr_69114;
})();
if(cljs.core.truth_(inst_69099__$1)){
var statearr_69115_69127 = state_69111__$1;
(statearr_69115_69127[(1)] = (5));

} else {
var statearr_69116_69128 = state_69111__$1;
(statearr_69116_69128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69112 === (5))){
var inst_69099 = (state_69111[(7)]);
var inst_69101 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_69099);
var state_69111__$1 = state_69111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69111__$1,(8),inst_69101);
} else {
if((state_val_69112 === (6))){
var state_69111__$1 = state_69111;
var statearr_69117_69129 = state_69111__$1;
(statearr_69117_69129[(2)] = null);

(statearr_69117_69129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69112 === (7))){
var inst_69107 = (state_69111[(2)]);
var state_69111__$1 = state_69111;
var statearr_69118_69130 = state_69111__$1;
(statearr_69118_69130[(2)] = inst_69107);

(statearr_69118_69130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69112 === (8))){
var inst_69103 = (state_69111[(2)]);
var state_69111__$1 = (function (){var statearr_69119 = state_69111;
(statearr_69119[(8)] = inst_69103);

return statearr_69119;
})();
var statearr_69120_69131 = state_69111__$1;
(statearr_69120_69131[(2)] = null);

(statearr_69120_69131[(1)] = (2));


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
});})(c__58152__auto___69125,ch))
;
return ((function (switch__50568__auto__,c__58152__auto___69125,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50569__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50569__auto____0 = (function (){
var statearr_69121 = [null,null,null,null,null,null,null,null,null];
(statearr_69121[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50569__auto__);

(statearr_69121[(1)] = (1));

return statearr_69121;
});
var figwheel$client$heads_up_plugin_$_state_machine__50569__auto____1 = (function (state_69111){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_69111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e69122){if((e69122 instanceof Object)){
var ex__50572__auto__ = e69122;
var statearr_69123_69132 = state_69111;
(statearr_69123_69132[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69133 = state_69111;
state_69111 = G__69133;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50569__auto__ = function(state_69111){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50569__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50569__auto____1.call(this,state_69111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50569__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50569__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___69125,ch))
})();
var state__58154__auto__ = (function (){var statearr_69124 = f__58153__auto__.call(null);
(statearr_69124[(6)] = c__58152__auto___69125);

return statearr_69124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___69125,ch))
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
var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__){
return (function (state_69139){
var state_val_69140 = (state_69139[(1)]);
if((state_val_69140 === (1))){
var inst_69134 = cljs.core.async.timeout.call(null,(3000));
var state_69139__$1 = state_69139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69139__$1,(2),inst_69134);
} else {
if((state_val_69140 === (2))){
var inst_69136 = (state_69139[(2)]);
var inst_69137 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_69139__$1 = (function (){var statearr_69141 = state_69139;
(statearr_69141[(7)] = inst_69136);

return statearr_69141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69139__$1,inst_69137);
} else {
return null;
}
}
});})(c__58152__auto__))
;
return ((function (switch__50568__auto__,c__58152__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50569__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50569__auto____0 = (function (){
var statearr_69142 = [null,null,null,null,null,null,null,null];
(statearr_69142[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50569__auto__);

(statearr_69142[(1)] = (1));

return statearr_69142;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50569__auto____1 = (function (state_69139){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_69139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e69143){if((e69143 instanceof Object)){
var ex__50572__auto__ = e69143;
var statearr_69144_69146 = state_69139;
(statearr_69144_69146[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69147 = state_69139;
state_69139 = G__69147;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50569__auto__ = function(state_69139){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50569__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50569__auto____1.call(this,state_69139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50569__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50569__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__))
})();
var state__58154__auto__ = (function (){var statearr_69145 = f__58153__auto__.call(null);
(statearr_69145[(6)] = c__58152__auto__);

return statearr_69145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__))
);

return c__58152__auto__;
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
var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__,figwheel_version,temp__4657__auto__){
return (function (state_69154){
var state_val_69155 = (state_69154[(1)]);
if((state_val_69155 === (1))){
var inst_69148 = cljs.core.async.timeout.call(null,(2000));
var state_69154__$1 = state_69154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69154__$1,(2),inst_69148);
} else {
if((state_val_69155 === (2))){
var inst_69150 = (state_69154[(2)]);
var inst_69151 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_69152 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_69151);
var state_69154__$1 = (function (){var statearr_69156 = state_69154;
(statearr_69156[(7)] = inst_69150);

return statearr_69156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69154__$1,inst_69152);
} else {
return null;
}
}
});})(c__58152__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__50568__auto__,c__58152__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto____0 = (function (){
var statearr_69157 = [null,null,null,null,null,null,null,null];
(statearr_69157[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto__);

(statearr_69157[(1)] = (1));

return statearr_69157;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto____1 = (function (state_69154){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_69154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e69158){if((e69158 instanceof Object)){
var ex__50572__auto__ = e69158;
var statearr_69159_69161 = state_69154;
(statearr_69159_69161[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69162 = state_69154;
state_69154 = G__69162;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto__ = function(state_69154){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto____1.call(this,state_69154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__,figwheel_version,temp__4657__auto__))
})();
var state__58154__auto__ = (function (){var statearr_69160 = f__58153__auto__.call(null);
(statearr_69160[(6)] = c__58152__auto__);

return statearr_69160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__,figwheel_version,temp__4657__auto__))
);

return c__58152__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__69163){
var map__69164 = p__69163;
var map__69164__$1 = ((((!((map__69164 == null)))?(((((map__69164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69164):map__69164);
var file = cljs.core.get.call(null,map__69164__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__69164__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__69164__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__69166 = "";
var G__69166__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69166),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__69166);
var G__69166__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69166__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__69166__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69166__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__69166__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__69167){
var map__69168 = p__69167;
var map__69168__$1 = ((((!((map__69168 == null)))?(((((map__69168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69168):map__69168);
var ed = map__69168__$1;
var formatted_exception = cljs.core.get.call(null,map__69168__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__69168__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__69168__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__69170_69174 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__69171_69175 = null;
var count__69172_69176 = (0);
var i__69173_69177 = (0);
while(true){
if((i__69173_69177 < count__69172_69176)){
var msg_69178 = cljs.core._nth.call(null,chunk__69171_69175,i__69173_69177);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_69178);


var G__69179 = seq__69170_69174;
var G__69180 = chunk__69171_69175;
var G__69181 = count__69172_69176;
var G__69182 = (i__69173_69177 + (1));
seq__69170_69174 = G__69179;
chunk__69171_69175 = G__69180;
count__69172_69176 = G__69181;
i__69173_69177 = G__69182;
continue;
} else {
var temp__4657__auto___69183 = cljs.core.seq.call(null,seq__69170_69174);
if(temp__4657__auto___69183){
var seq__69170_69184__$1 = temp__4657__auto___69183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69170_69184__$1)){
var c__4319__auto___69185 = cljs.core.chunk_first.call(null,seq__69170_69184__$1);
var G__69186 = cljs.core.chunk_rest.call(null,seq__69170_69184__$1);
var G__69187 = c__4319__auto___69185;
var G__69188 = cljs.core.count.call(null,c__4319__auto___69185);
var G__69189 = (0);
seq__69170_69174 = G__69186;
chunk__69171_69175 = G__69187;
count__69172_69176 = G__69188;
i__69173_69177 = G__69189;
continue;
} else {
var msg_69190 = cljs.core.first.call(null,seq__69170_69184__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_69190);


var G__69191 = cljs.core.next.call(null,seq__69170_69184__$1);
var G__69192 = null;
var G__69193 = (0);
var G__69194 = (0);
seq__69170_69174 = G__69191;
chunk__69171_69175 = G__69192;
count__69172_69176 = G__69193;
i__69173_69177 = G__69194;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__69195){
var map__69196 = p__69195;
var map__69196__$1 = ((((!((map__69196 == null)))?(((((map__69196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69196):map__69196);
var w = map__69196__$1;
var message = cljs.core.get.call(null,map__69196__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__69198 = cljs.core.seq.call(null,plugins);
var chunk__69199 = null;
var count__69200 = (0);
var i__69201 = (0);
while(true){
if((i__69201 < count__69200)){
var vec__69202 = cljs.core._nth.call(null,chunk__69199,i__69201);
var k = cljs.core.nth.call(null,vec__69202,(0),null);
var plugin = cljs.core.nth.call(null,vec__69202,(1),null);
if(cljs.core.truth_(plugin)){
var pl_69208 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__69198,chunk__69199,count__69200,i__69201,pl_69208,vec__69202,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_69208.call(null,msg_hist);
});})(seq__69198,chunk__69199,count__69200,i__69201,pl_69208,vec__69202,k,plugin))
);
} else {
}


var G__69209 = seq__69198;
var G__69210 = chunk__69199;
var G__69211 = count__69200;
var G__69212 = (i__69201 + (1));
seq__69198 = G__69209;
chunk__69199 = G__69210;
count__69200 = G__69211;
i__69201 = G__69212;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__69198);
if(temp__4657__auto__){
var seq__69198__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69198__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__69198__$1);
var G__69213 = cljs.core.chunk_rest.call(null,seq__69198__$1);
var G__69214 = c__4319__auto__;
var G__69215 = cljs.core.count.call(null,c__4319__auto__);
var G__69216 = (0);
seq__69198 = G__69213;
chunk__69199 = G__69214;
count__69200 = G__69215;
i__69201 = G__69216;
continue;
} else {
var vec__69205 = cljs.core.first.call(null,seq__69198__$1);
var k = cljs.core.nth.call(null,vec__69205,(0),null);
var plugin = cljs.core.nth.call(null,vec__69205,(1),null);
if(cljs.core.truth_(plugin)){
var pl_69217 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__69198,chunk__69199,count__69200,i__69201,pl_69217,vec__69205,k,plugin,seq__69198__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_69217.call(null,msg_hist);
});})(seq__69198,chunk__69199,count__69200,i__69201,pl_69217,vec__69205,k,plugin,seq__69198__$1,temp__4657__auto__))
);
} else {
}


var G__69218 = cljs.core.next.call(null,seq__69198__$1);
var G__69219 = null;
var G__69220 = (0);
var G__69221 = (0);
seq__69198 = G__69218;
chunk__69199 = G__69219;
count__69200 = G__69220;
i__69201 = G__69221;
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
var G__69223 = arguments.length;
switch (G__69223) {
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

var seq__69224_69229 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__69225_69230 = null;
var count__69226_69231 = (0);
var i__69227_69232 = (0);
while(true){
if((i__69227_69232 < count__69226_69231)){
var msg_69233 = cljs.core._nth.call(null,chunk__69225_69230,i__69227_69232);
figwheel.client.socket.handle_incoming_message.call(null,msg_69233);


var G__69234 = seq__69224_69229;
var G__69235 = chunk__69225_69230;
var G__69236 = count__69226_69231;
var G__69237 = (i__69227_69232 + (1));
seq__69224_69229 = G__69234;
chunk__69225_69230 = G__69235;
count__69226_69231 = G__69236;
i__69227_69232 = G__69237;
continue;
} else {
var temp__4657__auto___69238 = cljs.core.seq.call(null,seq__69224_69229);
if(temp__4657__auto___69238){
var seq__69224_69239__$1 = temp__4657__auto___69238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69224_69239__$1)){
var c__4319__auto___69240 = cljs.core.chunk_first.call(null,seq__69224_69239__$1);
var G__69241 = cljs.core.chunk_rest.call(null,seq__69224_69239__$1);
var G__69242 = c__4319__auto___69240;
var G__69243 = cljs.core.count.call(null,c__4319__auto___69240);
var G__69244 = (0);
seq__69224_69229 = G__69241;
chunk__69225_69230 = G__69242;
count__69226_69231 = G__69243;
i__69227_69232 = G__69244;
continue;
} else {
var msg_69245 = cljs.core.first.call(null,seq__69224_69239__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_69245);


var G__69246 = cljs.core.next.call(null,seq__69224_69239__$1);
var G__69247 = null;
var G__69248 = (0);
var G__69249 = (0);
seq__69224_69229 = G__69246;
chunk__69225_69230 = G__69247;
count__69226_69231 = G__69248;
i__69227_69232 = G__69249;
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
var len__4499__auto___69254 = arguments.length;
var i__4500__auto___69255 = (0);
while(true){
if((i__4500__auto___69255 < len__4499__auto___69254)){
args__4502__auto__.push((arguments[i__4500__auto___69255]));

var G__69256 = (i__4500__auto___69255 + (1));
i__4500__auto___69255 = G__69256;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__69251){
var map__69252 = p__69251;
var map__69252__$1 = ((((!((map__69252 == null)))?(((((map__69252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69252):map__69252);
var opts = map__69252__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq69250){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69250));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e69257){if((e69257 instanceof Error)){
var e = e69257;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e69257;

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
return (function (p__69258){
var map__69259 = p__69258;
var map__69259__$1 = ((((!((map__69259 == null)))?(((((map__69259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69259):map__69259);
var msg_name = cljs.core.get.call(null,map__69259__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1548888405845
