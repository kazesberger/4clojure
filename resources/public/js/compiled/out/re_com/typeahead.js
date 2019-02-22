// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__66966){
var map__66967 = p__66966;
var map__66967__$1 = ((((!((map__66967 == null)))?(((((map__66967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66967):map__66967);
var args = map__66967__$1;
var on_change = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__66969 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__3922__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__66969,external_model_value);
} else {
return G__66969;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__66970,event){
var map__66971 = p__66970;
var map__66971__$1 = ((((!((map__66971 == null)))?(((((map__66971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66971):map__66971);
var state = map__66971__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__66971__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__66971__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__66973 = event;
var G__66973__$1 = (((G__66973 instanceof cljs.core.Keyword))?G__66973.fqn:null);
switch (G__66973__$1) {
case "input-text-blurred":
var and__3911__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__3911__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__3922__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66973__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__66975,event){
var map__66976 = p__66975;
var map__66976__$1 = ((((!((map__66976 == null)))?(((((map__66976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66976):map__66976);
var state = map__66976__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__66976__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__66978 = event;
var G__66978__$1 = (((G__66978 instanceof cljs.core.Keyword))?G__66978.fqn:null);
switch (G__66978__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__66980,new_value){
var map__66981 = p__66980;
var map__66981__$1 = ((((!((map__66981 == null)))?(((((map__66981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66981):map__66981);
var state = map__66981__$1;
var on_change = cljs.core.get.call(null,map__66981__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__66983,suggestion){
var map__66984 = p__66983;
var map__66984__$1 = ((((!((map__66984 == null)))?(((((map__66984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66984):map__66984);
var state = map__66984__$1;
var suggestion_to_string = cljs.core.get.call(null,map__66984__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__66986 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__66986,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__66986;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__66987,index){
var map__66988 = p__66987;
var map__66988__$1 = ((((!((map__66988 == null)))?(((((map__66988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66988):map__66988);
var state = map__66988__$1;
var suggestions = cljs.core.get.call(null,map__66988__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__66990 = state;
var G__66990__$1 = cljs.core.assoc.call(null,G__66990,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__66990__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__66990__$1,suggestion):G__66990__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__66990__$2,suggestion);
} else {
return G__66990__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__66991,index){
var map__66992 = p__66991;
var map__66992__$1 = ((((!((map__66992 == null)))?(((((map__66992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66992):map__66992);
var state = map__66992__$1;
var suggestions = cljs.core.get.call(null,map__66992__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__66994){
var map__66995 = p__66994;
var map__66995__$1 = ((((!((map__66995 == null)))?(((((map__66995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66995):map__66995);
var state = map__66995__$1;
var suggestion_active_index = cljs.core.get.call(null,map__66995__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__66997 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__66997,suggestion_active_index);
} else {
return G__66997;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__66998){
var map__66999 = p__66998;
var map__66999__$1 = ((((!((map__66999 == null)))?(((((map__66999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66999):map__66999);
var state = map__66999__$1;
var suggestions = cljs.core.get.call(null,map__66999__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__66999__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__67001 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__67001,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__67001;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__67002){
var map__67003 = p__67002;
var map__67003__$1 = ((((!((map__67003 == null)))?(((((map__67003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67003):map__67003);
var state = map__67003__$1;
var suggestions = cljs.core.get.call(null,map__67003__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__67003__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__67005 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__67005,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__67005;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__67006 = state;
var G__67006__$1 = re_com.typeahead.clear_suggestions.call(null,G__67006)
;
var G__67006__$2 = cljs.core.assoc.call(null,G__67006__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__67006__$2,null);
} else {
return G__67006__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__67007){
var map__67008 = p__67007;
var map__67008__$1 = ((((!((map__67008 == null)))?(((((map__67008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67008):map__67008);
var state = map__67008__$1;
var input_text = cljs.core.get.call(null,map__67008__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__67008__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__67010 = state;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__3911__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__3911__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__67010,input_text);
} else {
return G__67010;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__67011_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__67011_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__){
return (function (state_67028){
var state_val_67029 = (state_67028[(1)]);
if((state_val_67029 === (1))){
var state_67028__$1 = state_67028;
var statearr_67030_67042 = state_67028__$1;
(statearr_67030_67042[(2)] = null);

(statearr_67030_67042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67029 === (2))){
var state_67028__$1 = state_67028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67028__$1,(4),c_search);
} else {
if((state_val_67029 === (3))){
var inst_67026 = (state_67028[(2)]);
var state_67028__$1 = state_67028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67028__$1,inst_67026);
} else {
if((state_val_67029 === (4))){
var inst_67014 = (state_67028[(7)]);
var inst_67014__$1 = (state_67028[(2)]);
var inst_67015 = cljs.core.deref.call(null,state_atom);
var inst_67016 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_67015);
var inst_67017 = cljs.core._EQ_.call(null,"",inst_67014__$1);
var state_67028__$1 = (function (){var statearr_67031 = state_67028;
(statearr_67031[(8)] = inst_67016);

(statearr_67031[(7)] = inst_67014__$1);

return statearr_67031;
})();
if(inst_67017){
var statearr_67032_67043 = state_67028__$1;
(statearr_67032_67043[(1)] = (5));

} else {
var statearr_67033_67044 = state_67028__$1;
(statearr_67033_67044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67029 === (5))){
var inst_67019 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_67028__$1 = state_67028;
var statearr_67034_67045 = state_67028__$1;
(statearr_67034_67045[(2)] = inst_67019);

(statearr_67034_67045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67029 === (6))){
var inst_67016 = (state_67028[(8)]);
var inst_67014 = (state_67028[(7)]);
var inst_67021 = re_com.typeahead.search_data_source_BANG_.call(null,inst_67016,state_atom,inst_67014);
var state_67028__$1 = state_67028;
var statearr_67035_67046 = state_67028__$1;
(statearr_67035_67046[(2)] = inst_67021);

(statearr_67035_67046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67029 === (7))){
var inst_67023 = (state_67028[(2)]);
var state_67028__$1 = (function (){var statearr_67036 = state_67028;
(statearr_67036[(9)] = inst_67023);

return statearr_67036;
})();
var statearr_67037_67047 = state_67028__$1;
(statearr_67037_67047[(2)] = null);

(statearr_67037_67047[(1)] = (2));


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
});})(c__62848__auto__))
;
return ((function (switch__50623__auto__,c__62848__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto____0 = (function (){
var statearr_67038 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67038[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto__);

(statearr_67038[(1)] = (1));

return statearr_67038;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto____1 = (function (state_67028){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_67028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e67039){if((e67039 instanceof Object)){
var ex__50627__auto__ = e67039;
var statearr_67040_67048 = state_67028;
(statearr_67040_67048[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67049 = state_67028;
state_67028 = G__67049;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto__ = function(state_67028){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto____1.call(this,state_67028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__))
})();
var state__62850__auto__ = (function (){var statearr_67041 = f__62849__auto__.call(null);
(statearr_67041[(6)] = c__62848__auto__);

return statearr_67041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__))
);

return c__62848__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__67051 = cljs.core.deref.call(null,state_atom);
var map__67051__$1 = ((((!((map__67051 == null)))?(((((map__67051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67051):map__67051);
var state = map__67051__$1;
var input_text = cljs.core.get.call(null,map__67051__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__67051__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__67051,map__67051__$1,state,input_text,c_input){
return (function (p1__67050_SHARP_){
var G__67053 = p1__67050_SHARP_;
var G__67053__$1 = cljs.core.assoc.call(null,G__67053,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__67053__$1,new_text);
} else {
return G__67053__$1;
}
});})(map__67051,map__67051__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__67054 = cljs.core._EQ_;
var expr__67055 = event.which;
if(cljs.core.truth_(pred__67054.call(null,goog.events.KeyCodes.UP,expr__67055))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__67054.call(null,goog.events.KeyCodes.DOWN,expr__67055))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__67054.call(null,goog.events.KeyCodes.ENTER,expr__67055))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__67054.call(null,goog.events.KeyCodes.ESC,expr__67055))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__67054.call(null,goog.events.KeyCodes.TAB,expr__67055))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4502__auto__ = [];
var len__4499__auto___67079 = arguments.length;
var i__4500__auto___67080 = (0);
while(true){
if((i__4500__auto___67080 < len__4499__auto___67079)){
args__4502__auto__.push((arguments[i__4500__auto___67080]));

var G__67081 = (i__4500__auto___67080 + (1));
i__4500__auto___67080 = G__67081;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__67059){
var map__67060 = p__67059;
var map__67060__$1 = ((((!((map__67060 == null)))?(((((map__67060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67060):map__67060);
var args = map__67060__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__67062 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__67062__$1 = ((((!((map__67062 == null)))?(((((map__67062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67062):map__67062);
var state = map__67062__$1;
var c_search = cljs.core.get.call(null,map__67062__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__67062__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args){
return (function() { 
var G__67082__delegate = function (p__67064){
var map__67065 = p__67064;
var map__67065__$1 = ((((!((map__67065 == null)))?(((((map__67065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67065):map__67065);
var args__$1 = map__67065__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__67065__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__67067 = cljs.core.deref.call(null,state_atom);
var map__67067__$1 = ((((!((map__67067 == null)))?(((((map__67067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67067):map__67067);
var state__$1 = map__67067__$1;
var suggestions = cljs.core.get.call(null,map__67067__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__67067__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__67067__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__67067__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__3922__auto__ = width;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4292__auto__ = ((function (map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args){
return (function re_com$typeahead$iter__67069(s__67070){
return (new cljs.core.LazySeq(null,((function (map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args){
return (function (){
var s__67070__$1 = s__67070;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67070__$1);
if(temp__4657__auto__){
var s__67070__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67070__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__67070__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__67072 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__67071 = (0);
while(true){
if((i__67071 < size__4291__auto__)){
var vec__67073 = cljs.core._nth.call(null,c__4290__auto__,i__67071);
var i = cljs.core.nth.call(null,vec__67073,(0),null);
var s = cljs.core.nth.call(null,vec__67073,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__67072,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__67071,selected_QMARK_,vec__67073,i,s,c__4290__auto__,size__4291__auto__,b__67072,s__67070__$2,temp__4657__auto__,map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__67071,selected_QMARK_,vec__67073,i,s,c__4290__auto__,size__4291__auto__,b__67072,s__67070__$2,temp__4657__auto__,map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__67071,selected_QMARK_,vec__67073,i,s,c__4290__auto__,size__4291__auto__,b__67072,s__67070__$2,temp__4657__auto__,map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args){
return (function (p1__67057_SHARP_){
p1__67057_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__67071,selected_QMARK_,vec__67073,i,s,c__4290__auto__,size__4291__auto__,b__67072,s__67070__$2,temp__4657__auto__,map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__67083 = (i__67071 + (1));
i__67071 = G__67083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67072),re_com$typeahead$iter__67069.call(null,cljs.core.chunk_rest.call(null,s__67070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67072),null);
}
} else {
var vec__67076 = cljs.core.first.call(null,s__67070__$2);
var i = cljs.core.nth.call(null,vec__67076,(0),null);
var s = cljs.core.nth.call(null,vec__67076,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__67076,i,s,s__67070__$2,temp__4657__auto__,map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__67076,i,s,s__67070__$2,temp__4657__auto__,map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__67076,i,s,s__67070__$2,temp__4657__auto__,map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args){
return (function (p1__67057_SHARP_){
p1__67057_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__67076,i,s,s__67070__$2,temp__4657__auto__,map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__67069.call(null,cljs.core.rest.call(null,s__67070__$2)));
}
} else {
return null;
}
break;
}
});})(map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args))
,null,null));
});})(map__67067,map__67067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__67065,map__67065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args))
;
return iter__4292__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__67082 = function (var_args){
var p__67064 = null;
if (arguments.length > 0) {
var G__67084__i = 0, G__67084__a = new Array(arguments.length -  0);
while (G__67084__i < G__67084__a.length) {G__67084__a[G__67084__i] = arguments[G__67084__i + 0]; ++G__67084__i;}
  p__67064 = new cljs.core.IndexedSeq(G__67084__a,0,null);
} 
return G__67082__delegate.call(this,p__67064);};
G__67082.cljs$lang$maxFixedArity = 0;
G__67082.cljs$lang$applyTo = (function (arglist__67085){
var p__67064 = cljs.core.seq(arglist__67085);
return G__67082__delegate(p__67064);
});
G__67082.cljs$core$IFn$_invoke$arity$variadic = G__67082__delegate;
return G__67082;
})()
;
;})(map__67062,map__67062__$1,state,c_search,c_input,state_atom,input_text_model,map__67060,map__67060__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq67058){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67058));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__62848__auto___67166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___67166,out){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___67166,out){
return (function (state_67136){
var state_val_67137 = (state_67136[(1)]);
if((state_val_67137 === (7))){
var inst_67091 = (state_67136[(2)]);
var state_67136__$1 = state_67136;
var statearr_67138_67167 = state_67136__$1;
(statearr_67138_67167[(2)] = inst_67091);

(statearr_67138_67167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (1))){
var inst_67086 = null;
var state_67136__$1 = (function (){var statearr_67139 = state_67136;
(statearr_67139[(7)] = inst_67086);

return statearr_67139;
})();
var statearr_67140_67168 = state_67136__$1;
(statearr_67140_67168[(2)] = null);

(statearr_67140_67168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (4))){
var state_67136__$1 = state_67136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67136__$1,(7),in$);
} else {
if((state_val_67137 === (15))){
var inst_67121 = (state_67136[(2)]);
var state_67136__$1 = (function (){var statearr_67141 = state_67136;
(statearr_67141[(8)] = inst_67121);

return statearr_67141;
})();
var statearr_67142_67169 = state_67136__$1;
(statearr_67142_67169[(2)] = null);

(statearr_67142_67169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (13))){
var inst_67109 = (state_67136[(9)]);
var inst_67123 = cljs.core._EQ_.call(null,inst_67109,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_67136__$1 = state_67136;
if(inst_67123){
var statearr_67143_67170 = state_67136__$1;
(statearr_67143_67170[(1)] = (16));

} else {
var statearr_67144_67171 = state_67136__$1;
(statearr_67144_67171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (6))){
var inst_67095 = (state_67136[(10)]);
var inst_67094 = (state_67136[(2)]);
var inst_67095__$1 = cljs.core.async.timeout.call(null,ms);
var inst_67103 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67104 = [in$,inst_67095__$1];
var inst_67105 = (new cljs.core.PersistentVector(null,2,(5),inst_67103,inst_67104,null));
var state_67136__$1 = (function (){var statearr_67145 = state_67136;
(statearr_67145[(10)] = inst_67095__$1);

(statearr_67145[(11)] = inst_67094);

return statearr_67145;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_67136__$1,(8),inst_67105);
} else {
if((state_val_67137 === (17))){
var state_67136__$1 = state_67136;
var statearr_67146_67172 = state_67136__$1;
(statearr_67146_67172[(2)] = null);

(statearr_67146_67172[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (3))){
var inst_67134 = (state_67136[(2)]);
var state_67136__$1 = state_67136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67136__$1,inst_67134);
} else {
if((state_val_67137 === (12))){
var inst_67094 = (state_67136[(11)]);
var state_67136__$1 = state_67136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67136__$1,(15),out,inst_67094);
} else {
if((state_val_67137 === (2))){
var inst_67086 = (state_67136[(7)]);
var inst_67088 = (inst_67086 == null);
var state_67136__$1 = state_67136;
if(cljs.core.truth_(inst_67088)){
var statearr_67147_67173 = state_67136__$1;
(statearr_67147_67173[(1)] = (4));

} else {
var statearr_67148_67174 = state_67136__$1;
(statearr_67148_67174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (11))){
var inst_67131 = (state_67136[(2)]);
var inst_67086 = inst_67131;
var state_67136__$1 = (function (){var statearr_67149 = state_67136;
(statearr_67149[(7)] = inst_67086);

return statearr_67149;
})();
var statearr_67150_67175 = state_67136__$1;
(statearr_67150_67175[(2)] = null);

(statearr_67150_67175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (9))){
var inst_67107 = (state_67136[(12)]);
var inst_67115 = cljs.core.nth.call(null,inst_67107,(0),null);
var inst_67116 = cljs.core.nth.call(null,inst_67107,(1),null);
var state_67136__$1 = (function (){var statearr_67151 = state_67136;
(statearr_67151[(13)] = inst_67116);

return statearr_67151;
})();
var statearr_67152_67176 = state_67136__$1;
(statearr_67152_67176[(2)] = inst_67115);

(statearr_67152_67176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (5))){
var inst_67086 = (state_67136[(7)]);
var state_67136__$1 = state_67136;
var statearr_67153_67177 = state_67136__$1;
(statearr_67153_67177[(2)] = inst_67086);

(statearr_67153_67177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (14))){
var inst_67129 = (state_67136[(2)]);
var state_67136__$1 = state_67136;
var statearr_67154_67178 = state_67136__$1;
(statearr_67154_67178[(2)] = inst_67129);

(statearr_67154_67178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (16))){
var inst_67108 = (state_67136[(14)]);
var state_67136__$1 = state_67136;
var statearr_67155_67179 = state_67136__$1;
(statearr_67155_67179[(2)] = inst_67108);

(statearr_67155_67179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (10))){
var inst_67095 = (state_67136[(10)]);
var inst_67109 = (state_67136[(9)]);
var inst_67118 = cljs.core._EQ_.call(null,inst_67109,inst_67095);
var state_67136__$1 = state_67136;
if(inst_67118){
var statearr_67156_67180 = state_67136__$1;
(statearr_67156_67180[(1)] = (12));

} else {
var statearr_67157_67181 = state_67136__$1;
(statearr_67157_67181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (18))){
var inst_67127 = (state_67136[(2)]);
var state_67136__$1 = state_67136;
var statearr_67158_67182 = state_67136__$1;
(statearr_67158_67182[(2)] = inst_67127);

(statearr_67158_67182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67137 === (8))){
var inst_67107 = (state_67136[(12)]);
var inst_67109 = (state_67136[(9)]);
var inst_67107__$1 = (state_67136[(2)]);
var inst_67108 = cljs.core.nth.call(null,inst_67107__$1,(0),null);
var inst_67109__$1 = cljs.core.nth.call(null,inst_67107__$1,(1),null);
var inst_67110 = cljs.core._EQ_.call(null,inst_67109__$1,in$);
var state_67136__$1 = (function (){var statearr_67159 = state_67136;
(statearr_67159[(12)] = inst_67107__$1);

(statearr_67159[(14)] = inst_67108);

(statearr_67159[(9)] = inst_67109__$1);

return statearr_67159;
})();
if(inst_67110){
var statearr_67160_67183 = state_67136__$1;
(statearr_67160_67183[(1)] = (9));

} else {
var statearr_67161_67184 = state_67136__$1;
(statearr_67161_67184[(1)] = (10));

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
});})(c__62848__auto___67166,out))
;
return ((function (switch__50623__auto__,c__62848__auto___67166,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__50624__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__50624__auto____0 = (function (){
var statearr_67162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67162[(0)] = re_com$typeahead$debounce_$_state_machine__50624__auto__);

(statearr_67162[(1)] = (1));

return statearr_67162;
});
var re_com$typeahead$debounce_$_state_machine__50624__auto____1 = (function (state_67136){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_67136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e67163){if((e67163 instanceof Object)){
var ex__50627__auto__ = e67163;
var statearr_67164_67185 = state_67136;
(statearr_67164_67185[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67186 = state_67136;
state_67136 = G__67186;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__50624__auto__ = function(state_67136){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__50624__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__50624__auto____1.call(this,state_67136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__50624__auto____0;
re_com$typeahead$debounce_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__50624__auto____1;
return re_com$typeahead$debounce_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___67166,out))
})();
var state__62850__auto__ = (function (){var statearr_67165 = f__62849__auto__.call(null);
(statearr_67165[(6)] = c__62848__auto___67166);

return statearr_67165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___67166,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1549004113142
