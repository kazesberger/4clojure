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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__60122){
var map__60123 = p__60122;
var map__60123__$1 = ((((!((map__60123 == null)))?(((((map__60123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60123):map__60123);
var args = map__60123__$1;
var on_change = cljs.core.get.call(null,map__60123__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__60123__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60123__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__60123__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__60123__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__60123__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__60123__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__60125 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__3922__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__60125,external_model_value);
} else {
return G__60125;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__60126,event){
var map__60127 = p__60126;
var map__60127__$1 = ((((!((map__60127 == null)))?(((((map__60127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60127):map__60127);
var state = map__60127__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60127__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__60127__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__60129 = event;
var G__60129__$1 = (((G__60129 instanceof cljs.core.Keyword))?G__60129.fqn:null);
switch (G__60129__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60129__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__60131,event){
var map__60132 = p__60131;
var map__60132__$1 = ((((!((map__60132 == null)))?(((((map__60132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60132):map__60132);
var state = map__60132__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60132__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__60134 = event;
var G__60134__$1 = (((G__60134 instanceof cljs.core.Keyword))?G__60134.fqn:null);
switch (G__60134__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__60136,new_value){
var map__60137 = p__60136;
var map__60137__$1 = ((((!((map__60137 == null)))?(((((map__60137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60137):map__60137);
var state = map__60137__$1;
var on_change = cljs.core.get.call(null,map__60137__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__60139,suggestion){
var map__60140 = p__60139;
var map__60140__$1 = ((((!((map__60140 == null)))?(((((map__60140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60140):map__60140);
var state = map__60140__$1;
var suggestion_to_string = cljs.core.get.call(null,map__60140__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__60142 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__60142,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__60142;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__60143,index){
var map__60144 = p__60143;
var map__60144__$1 = ((((!((map__60144 == null)))?(((((map__60144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60144):map__60144);
var state = map__60144__$1;
var suggestions = cljs.core.get.call(null,map__60144__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__60146 = state;
var G__60146__$1 = cljs.core.assoc.call(null,G__60146,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__60146__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__60146__$1,suggestion):G__60146__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__60146__$2,suggestion);
} else {
return G__60146__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__60147,index){
var map__60148 = p__60147;
var map__60148__$1 = ((((!((map__60148 == null)))?(((((map__60148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60148):map__60148);
var state = map__60148__$1;
var suggestions = cljs.core.get.call(null,map__60148__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__60150){
var map__60151 = p__60150;
var map__60151__$1 = ((((!((map__60151 == null)))?(((((map__60151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60151):map__60151);
var state = map__60151__$1;
var suggestion_active_index = cljs.core.get.call(null,map__60151__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60153 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__60153,suggestion_active_index);
} else {
return G__60153;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__60154){
var map__60155 = p__60154;
var map__60155__$1 = ((((!((map__60155 == null)))?(((((map__60155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60155):map__60155);
var state = map__60155__$1;
var suggestions = cljs.core.get.call(null,map__60155__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__60155__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60157 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__60157,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__60157;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__60158){
var map__60159 = p__60158;
var map__60159__$1 = ((((!((map__60159 == null)))?(((((map__60159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60159):map__60159);
var state = map__60159__$1;
var suggestions = cljs.core.get.call(null,map__60159__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__60159__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60161 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__60161,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__60161;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__60162 = state;
var G__60162__$1 = re_com.typeahead.clear_suggestions.call(null,G__60162)
;
var G__60162__$2 = cljs.core.assoc.call(null,G__60162__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__60162__$2,null);
} else {
return G__60162__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__60163){
var map__60164 = p__60163;
var map__60164__$1 = ((((!((map__60164 == null)))?(((((map__60164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60164):map__60164);
var state = map__60164__$1;
var input_text = cljs.core.get.call(null,map__60164__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__60164__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__60166 = state;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__3911__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__3911__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__60166,input_text);
} else {
return G__60166;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__60167_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__60167_SHARP_);
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
var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__){
return (function (state_60184){
var state_val_60185 = (state_60184[(1)]);
if((state_val_60185 === (1))){
var state_60184__$1 = state_60184;
var statearr_60186_60198 = state_60184__$1;
(statearr_60186_60198[(2)] = null);

(statearr_60186_60198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60185 === (2))){
var state_60184__$1 = state_60184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60184__$1,(4),c_search);
} else {
if((state_val_60185 === (3))){
var inst_60182 = (state_60184[(2)]);
var state_60184__$1 = state_60184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60184__$1,inst_60182);
} else {
if((state_val_60185 === (4))){
var inst_60170 = (state_60184[(7)]);
var inst_60170__$1 = (state_60184[(2)]);
var inst_60171 = cljs.core.deref.call(null,state_atom);
var inst_60172 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_60171);
var inst_60173 = cljs.core._EQ_.call(null,"",inst_60170__$1);
var state_60184__$1 = (function (){var statearr_60187 = state_60184;
(statearr_60187[(7)] = inst_60170__$1);

(statearr_60187[(8)] = inst_60172);

return statearr_60187;
})();
if(inst_60173){
var statearr_60188_60199 = state_60184__$1;
(statearr_60188_60199[(1)] = (5));

} else {
var statearr_60189_60200 = state_60184__$1;
(statearr_60189_60200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60185 === (5))){
var inst_60175 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_60184__$1 = state_60184;
var statearr_60190_60201 = state_60184__$1;
(statearr_60190_60201[(2)] = inst_60175);

(statearr_60190_60201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60185 === (6))){
var inst_60170 = (state_60184[(7)]);
var inst_60172 = (state_60184[(8)]);
var inst_60177 = re_com.typeahead.search_data_source_BANG_.call(null,inst_60172,state_atom,inst_60170);
var state_60184__$1 = state_60184;
var statearr_60191_60202 = state_60184__$1;
(statearr_60191_60202[(2)] = inst_60177);

(statearr_60191_60202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60185 === (7))){
var inst_60179 = (state_60184[(2)]);
var state_60184__$1 = (function (){var statearr_60192 = state_60184;
(statearr_60192[(9)] = inst_60179);

return statearr_60192;
})();
var statearr_60193_60203 = state_60184__$1;
(statearr_60193_60203[(2)] = null);

(statearr_60193_60203[(1)] = (2));


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
});})(c__58152__auto__))
;
return ((function (switch__50568__auto__,c__58152__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto____0 = (function (){
var statearr_60194 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60194[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto__);

(statearr_60194[(1)] = (1));

return statearr_60194;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto____1 = (function (state_60184){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_60184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e60195){if((e60195 instanceof Object)){
var ex__50572__auto__ = e60195;
var statearr_60196_60204 = state_60184;
(statearr_60196_60204[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60205 = state_60184;
state_60184 = G__60205;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto__ = function(state_60184){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto____1.call(this,state_60184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__))
})();
var state__58154__auto__ = (function (){var statearr_60197 = f__58153__auto__.call(null);
(statearr_60197[(6)] = c__58152__auto__);

return statearr_60197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__))
);

return c__58152__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__60207 = cljs.core.deref.call(null,state_atom);
var map__60207__$1 = ((((!((map__60207 == null)))?(((((map__60207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60207):map__60207);
var state = map__60207__$1;
var input_text = cljs.core.get.call(null,map__60207__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__60207__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__60207,map__60207__$1,state,input_text,c_input){
return (function (p1__60206_SHARP_){
var G__60209 = p1__60206_SHARP_;
var G__60209__$1 = cljs.core.assoc.call(null,G__60209,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__60209__$1,new_text);
} else {
return G__60209__$1;
}
});})(map__60207,map__60207__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__60210 = cljs.core._EQ_;
var expr__60211 = event.which;
if(cljs.core.truth_(pred__60210.call(null,goog.events.KeyCodes.UP,expr__60211))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__60210.call(null,goog.events.KeyCodes.DOWN,expr__60211))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__60210.call(null,goog.events.KeyCodes.ENTER,expr__60211))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__60210.call(null,goog.events.KeyCodes.ESC,expr__60211))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__60210.call(null,goog.events.KeyCodes.TAB,expr__60211))){
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
var len__4499__auto___60235 = arguments.length;
var i__4500__auto___60236 = (0);
while(true){
if((i__4500__auto___60236 < len__4499__auto___60235)){
args__4502__auto__.push((arguments[i__4500__auto___60236]));

var G__60237 = (i__4500__auto___60236 + (1));
i__4500__auto___60236 = G__60237;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__60215){
var map__60216 = p__60215;
var map__60216__$1 = ((((!((map__60216 == null)))?(((((map__60216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60216):map__60216);
var args = map__60216__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__60218 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__60218__$1 = ((((!((map__60218 == null)))?(((((map__60218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60218):map__60218);
var state = map__60218__$1;
var c_search = cljs.core.get.call(null,map__60218__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__60218__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args){
return (function() { 
var G__60238__delegate = function (p__60220){
var map__60221 = p__60220;
var map__60221__$1 = ((((!((map__60221 == null)))?(((((map__60221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60221):map__60221);
var args__$1 = map__60221__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__60221__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__60223 = cljs.core.deref.call(null,state_atom);
var map__60223__$1 = ((((!((map__60223 == null)))?(((((map__60223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60223):map__60223);
var state__$1 = map__60223__$1;
var suggestions = cljs.core.get.call(null,map__60223__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__60223__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__60223__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__60223__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4292__auto__ = ((function (map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args){
return (function re_com$typeahead$iter__60225(s__60226){
return (new cljs.core.LazySeq(null,((function (map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args){
return (function (){
var s__60226__$1 = s__60226;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__60226__$1);
if(temp__4657__auto__){
var s__60226__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60226__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__60226__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__60228 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__60227 = (0);
while(true){
if((i__60227 < size__4291__auto__)){
var vec__60229 = cljs.core._nth.call(null,c__4290__auto__,i__60227);
var i = cljs.core.nth.call(null,vec__60229,(0),null);
var s = cljs.core.nth.call(null,vec__60229,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__60228,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__60227,selected_QMARK_,vec__60229,i,s,c__4290__auto__,size__4291__auto__,b__60228,s__60226__$2,temp__4657__auto__,map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__60227,selected_QMARK_,vec__60229,i,s,c__4290__auto__,size__4291__auto__,b__60228,s__60226__$2,temp__4657__auto__,map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__60227,selected_QMARK_,vec__60229,i,s,c__4290__auto__,size__4291__auto__,b__60228,s__60226__$2,temp__4657__auto__,map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args){
return (function (p1__60213_SHARP_){
p1__60213_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__60227,selected_QMARK_,vec__60229,i,s,c__4290__auto__,size__4291__auto__,b__60228,s__60226__$2,temp__4657__auto__,map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__60239 = (i__60227 + (1));
i__60227 = G__60239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60228),re_com$typeahead$iter__60225.call(null,cljs.core.chunk_rest.call(null,s__60226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60228),null);
}
} else {
var vec__60232 = cljs.core.first.call(null,s__60226__$2);
var i = cljs.core.nth.call(null,vec__60232,(0),null);
var s = cljs.core.nth.call(null,vec__60232,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__60232,i,s,s__60226__$2,temp__4657__auto__,map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__60232,i,s,s__60226__$2,temp__4657__auto__,map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__60232,i,s,s__60226__$2,temp__4657__auto__,map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args){
return (function (p1__60213_SHARP_){
p1__60213_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__60232,i,s,s__60226__$2,temp__4657__auto__,map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__60225.call(null,cljs.core.rest.call(null,s__60226__$2)));
}
} else {
return null;
}
break;
}
});})(map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args))
,null,null));
});})(map__60223,map__60223__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60221,map__60221__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args))
;
return iter__4292__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__60238 = function (var_args){
var p__60220 = null;
if (arguments.length > 0) {
var G__60240__i = 0, G__60240__a = new Array(arguments.length -  0);
while (G__60240__i < G__60240__a.length) {G__60240__a[G__60240__i] = arguments[G__60240__i + 0]; ++G__60240__i;}
  p__60220 = new cljs.core.IndexedSeq(G__60240__a,0,null);
} 
return G__60238__delegate.call(this,p__60220);};
G__60238.cljs$lang$maxFixedArity = 0;
G__60238.cljs$lang$applyTo = (function (arglist__60241){
var p__60220 = cljs.core.seq(arglist__60241);
return G__60238__delegate(p__60220);
});
G__60238.cljs$core$IFn$_invoke$arity$variadic = G__60238__delegate;
return G__60238;
})()
;
;})(map__60218,map__60218__$1,state,c_search,c_input,state_atom,input_text_model,map__60216,map__60216__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq60214){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60214));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__58152__auto___60322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___60322,out){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___60322,out){
return (function (state_60292){
var state_val_60293 = (state_60292[(1)]);
if((state_val_60293 === (7))){
var inst_60247 = (state_60292[(2)]);
var state_60292__$1 = state_60292;
var statearr_60294_60323 = state_60292__$1;
(statearr_60294_60323[(2)] = inst_60247);

(statearr_60294_60323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (1))){
var inst_60242 = null;
var state_60292__$1 = (function (){var statearr_60295 = state_60292;
(statearr_60295[(7)] = inst_60242);

return statearr_60295;
})();
var statearr_60296_60324 = state_60292__$1;
(statearr_60296_60324[(2)] = null);

(statearr_60296_60324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (4))){
var state_60292__$1 = state_60292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60292__$1,(7),in$);
} else {
if((state_val_60293 === (15))){
var inst_60277 = (state_60292[(2)]);
var state_60292__$1 = (function (){var statearr_60297 = state_60292;
(statearr_60297[(8)] = inst_60277);

return statearr_60297;
})();
var statearr_60298_60325 = state_60292__$1;
(statearr_60298_60325[(2)] = null);

(statearr_60298_60325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (13))){
var inst_60265 = (state_60292[(9)]);
var inst_60279 = cljs.core._EQ_.call(null,inst_60265,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_60292__$1 = state_60292;
if(inst_60279){
var statearr_60299_60326 = state_60292__$1;
(statearr_60299_60326[(1)] = (16));

} else {
var statearr_60300_60327 = state_60292__$1;
(statearr_60300_60327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (6))){
var inst_60251 = (state_60292[(10)]);
var inst_60250 = (state_60292[(2)]);
var inst_60251__$1 = cljs.core.async.timeout.call(null,ms);
var inst_60259 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60260 = [in$,inst_60251__$1];
var inst_60261 = (new cljs.core.PersistentVector(null,2,(5),inst_60259,inst_60260,null));
var state_60292__$1 = (function (){var statearr_60301 = state_60292;
(statearr_60301[(10)] = inst_60251__$1);

(statearr_60301[(11)] = inst_60250);

return statearr_60301;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_60292__$1,(8),inst_60261);
} else {
if((state_val_60293 === (17))){
var state_60292__$1 = state_60292;
var statearr_60302_60328 = state_60292__$1;
(statearr_60302_60328[(2)] = null);

(statearr_60302_60328[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (3))){
var inst_60290 = (state_60292[(2)]);
var state_60292__$1 = state_60292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60292__$1,inst_60290);
} else {
if((state_val_60293 === (12))){
var inst_60250 = (state_60292[(11)]);
var state_60292__$1 = state_60292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60292__$1,(15),out,inst_60250);
} else {
if((state_val_60293 === (2))){
var inst_60242 = (state_60292[(7)]);
var inst_60244 = (inst_60242 == null);
var state_60292__$1 = state_60292;
if(cljs.core.truth_(inst_60244)){
var statearr_60303_60329 = state_60292__$1;
(statearr_60303_60329[(1)] = (4));

} else {
var statearr_60304_60330 = state_60292__$1;
(statearr_60304_60330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (11))){
var inst_60287 = (state_60292[(2)]);
var inst_60242 = inst_60287;
var state_60292__$1 = (function (){var statearr_60305 = state_60292;
(statearr_60305[(7)] = inst_60242);

return statearr_60305;
})();
var statearr_60306_60331 = state_60292__$1;
(statearr_60306_60331[(2)] = null);

(statearr_60306_60331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (9))){
var inst_60263 = (state_60292[(12)]);
var inst_60271 = cljs.core.nth.call(null,inst_60263,(0),null);
var inst_60272 = cljs.core.nth.call(null,inst_60263,(1),null);
var state_60292__$1 = (function (){var statearr_60307 = state_60292;
(statearr_60307[(13)] = inst_60272);

return statearr_60307;
})();
var statearr_60308_60332 = state_60292__$1;
(statearr_60308_60332[(2)] = inst_60271);

(statearr_60308_60332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (5))){
var inst_60242 = (state_60292[(7)]);
var state_60292__$1 = state_60292;
var statearr_60309_60333 = state_60292__$1;
(statearr_60309_60333[(2)] = inst_60242);

(statearr_60309_60333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (14))){
var inst_60285 = (state_60292[(2)]);
var state_60292__$1 = state_60292;
var statearr_60310_60334 = state_60292__$1;
(statearr_60310_60334[(2)] = inst_60285);

(statearr_60310_60334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (16))){
var inst_60264 = (state_60292[(14)]);
var state_60292__$1 = state_60292;
var statearr_60311_60335 = state_60292__$1;
(statearr_60311_60335[(2)] = inst_60264);

(statearr_60311_60335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (10))){
var inst_60251 = (state_60292[(10)]);
var inst_60265 = (state_60292[(9)]);
var inst_60274 = cljs.core._EQ_.call(null,inst_60265,inst_60251);
var state_60292__$1 = state_60292;
if(inst_60274){
var statearr_60312_60336 = state_60292__$1;
(statearr_60312_60336[(1)] = (12));

} else {
var statearr_60313_60337 = state_60292__$1;
(statearr_60313_60337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (18))){
var inst_60283 = (state_60292[(2)]);
var state_60292__$1 = state_60292;
var statearr_60314_60338 = state_60292__$1;
(statearr_60314_60338[(2)] = inst_60283);

(statearr_60314_60338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60293 === (8))){
var inst_60265 = (state_60292[(9)]);
var inst_60263 = (state_60292[(12)]);
var inst_60263__$1 = (state_60292[(2)]);
var inst_60264 = cljs.core.nth.call(null,inst_60263__$1,(0),null);
var inst_60265__$1 = cljs.core.nth.call(null,inst_60263__$1,(1),null);
var inst_60266 = cljs.core._EQ_.call(null,inst_60265__$1,in$);
var state_60292__$1 = (function (){var statearr_60315 = state_60292;
(statearr_60315[(9)] = inst_60265__$1);

(statearr_60315[(12)] = inst_60263__$1);

(statearr_60315[(14)] = inst_60264);

return statearr_60315;
})();
if(inst_60266){
var statearr_60316_60339 = state_60292__$1;
(statearr_60316_60339[(1)] = (9));

} else {
var statearr_60317_60340 = state_60292__$1;
(statearr_60317_60340[(1)] = (10));

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
});})(c__58152__auto___60322,out))
;
return ((function (switch__50568__auto__,c__58152__auto___60322,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__50569__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__50569__auto____0 = (function (){
var statearr_60318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60318[(0)] = re_com$typeahead$debounce_$_state_machine__50569__auto__);

(statearr_60318[(1)] = (1));

return statearr_60318;
});
var re_com$typeahead$debounce_$_state_machine__50569__auto____1 = (function (state_60292){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_60292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e60319){if((e60319 instanceof Object)){
var ex__50572__auto__ = e60319;
var statearr_60320_60341 = state_60292;
(statearr_60320_60341[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60342 = state_60292;
state_60292 = G__60342;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__50569__auto__ = function(state_60292){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__50569__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__50569__auto____1.call(this,state_60292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__50569__auto____0;
re_com$typeahead$debounce_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__50569__auto____1;
return re_com$typeahead$debounce_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___60322,out))
})();
var state__58154__auto__ = (function (){var statearr_60321 = f__58153__auto__.call(null);
(statearr_60321[(6)] = c__58152__auto___60322);

return statearr_60321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___60322,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1548888389077
