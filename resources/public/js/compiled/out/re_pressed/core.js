// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),(function (_,p__61827){
var vec__61828 = p__61827;
var ___$1 = cljs.core.nth.call(null,vec__61828,(0),null);
var event_type = cljs.core.nth.call(null,vec__61828,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-pressed.core","keyboard-event","re-pressed.core/keyboard-event",-1923839752),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),(function (p__61831,p__61832){
var map__61833 = p__61831;
var map__61833__$1 = ((((!((map__61833 == null)))?(((((map__61833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61833):map__61833);
var db = cljs.core.get.call(null,map__61833__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61834 = p__61832;
var _ = cljs.core.nth.call(null,vec__61834,(0),null);
var map__61837 = cljs.core.nth.call(null,vec__61834,(1),null);
var map__61837__$1 = ((((!((map__61837 == null)))?(((((map__61837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61837):map__61837);
var opts = map__61837__$1;
var event_keys = cljs.core.get.call(null,map__61837__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.call(null,map__61837__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.call(null,map__61837__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
var prevent_default_keys = cljs.core.get.call(null,map__61837__$1,new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),(function (p__61840,p__61841){
var map__61842 = p__61840;
var map__61842__$1 = ((((!((map__61842 == null)))?(((((map__61842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61842):map__61842);
var db = cljs.core.get.call(null,map__61842__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61843 = p__61841;
var _ = cljs.core.nth.call(null,vec__61843,(0),null);
var map__61846 = cljs.core.nth.call(null,vec__61843,(1),null);
var map__61846__$1 = ((((!((map__61846 == null)))?(((((map__61846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61846):map__61846);
var opts = map__61846__$1;
var event_keys = cljs.core.get.call(null,map__61846__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.call(null,map__61846__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.call(null,map__61846__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("re-pressed.core","set-keyup-rules","re-pressed.core/set-keyup-rules",519284589),(function (p__61849,p__61850){
var map__61851 = p__61849;
var map__61851__$1 = ((((!((map__61851 == null)))?(((((map__61851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61851):map__61851);
var db = cljs.core.get.call(null,map__61851__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__61852 = p__61850;
var _ = cljs.core.nth.call(null,vec__61852,(0),null);
var map__61855 = cljs.core.nth.call(null,vec__61852,(1),null);
var map__61855__$1 = ((((!((map__61855 == null)))?(((((map__61855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61855):map__61855);
var opts = map__61855__$1;
var event_keys = cljs.core.get.call(null,map__61855__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.call(null,map__61855__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.call(null,map__61855__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));

//# sourceMappingURL=core.js.map?rel=1549004107006
