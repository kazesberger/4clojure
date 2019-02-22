// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__87403 = arguments.length;
switch (G__87403) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async87404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async87404 = (function (f,blockable,meta87405){
this.f = f;
this.blockable = blockable;
this.meta87405 = meta87405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async87404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87406,meta87405__$1){
var self__ = this;
var _87406__$1 = this;
return (new cljs.core.async.t_cljs$core$async87404(self__.f,self__.blockable,meta87405__$1));
});

cljs.core.async.t_cljs$core$async87404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87406){
var self__ = this;
var _87406__$1 = this;
return self__.meta87405;
});

cljs.core.async.t_cljs$core$async87404.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async87404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async87404.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async87404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async87404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta87405","meta87405",831027062,null)], null);
});

cljs.core.async.t_cljs$core$async87404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async87404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async87404";

cljs.core.async.t_cljs$core$async87404.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async87404");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async87404.
 */
cljs.core.async.__GT_t_cljs$core$async87404 = (function cljs$core$async$__GT_t_cljs$core$async87404(f__$1,blockable__$1,meta87405){
return (new cljs.core.async.t_cljs$core$async87404(f__$1,blockable__$1,meta87405));
});

}

return (new cljs.core.async.t_cljs$core$async87404(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__87410 = arguments.length;
switch (G__87410) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__87413 = arguments.length;
switch (G__87413) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__87416 = arguments.length;
switch (G__87416) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_87418 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_87418);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_87418,ret){
return (function (){
return fn1.call(null,val_87418);
});})(val_87418,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__87420 = arguments.length;
switch (G__87420) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___87422 = n;
var x_87423 = (0);
while(true){
if((x_87423 < n__4376__auto___87422)){
(a[x_87423] = (0));

var G__87424 = (x_87423 + (1));
x_87423 = G__87424;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__87425 = (i + (1));
i = G__87425;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async87426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async87426 = (function (flag,meta87427){
this.flag = flag;
this.meta87427 = meta87427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async87426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_87428,meta87427__$1){
var self__ = this;
var _87428__$1 = this;
return (new cljs.core.async.t_cljs$core$async87426(self__.flag,meta87427__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async87426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_87428){
var self__ = this;
var _87428__$1 = this;
return self__.meta87427;
});})(flag))
;

cljs.core.async.t_cljs$core$async87426.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async87426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async87426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async87426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async87426.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta87427","meta87427",1694616060,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async87426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async87426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async87426";

cljs.core.async.t_cljs$core$async87426.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async87426");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async87426.
 */
cljs.core.async.__GT_t_cljs$core$async87426 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async87426(flag__$1,meta87427){
return (new cljs.core.async.t_cljs$core$async87426(flag__$1,meta87427));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async87426(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async87429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async87429 = (function (flag,cb,meta87430){
this.flag = flag;
this.cb = cb;
this.meta87430 = meta87430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async87429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87431,meta87430__$1){
var self__ = this;
var _87431__$1 = this;
return (new cljs.core.async.t_cljs$core$async87429(self__.flag,self__.cb,meta87430__$1));
});

cljs.core.async.t_cljs$core$async87429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87431){
var self__ = this;
var _87431__$1 = this;
return self__.meta87430;
});

cljs.core.async.t_cljs$core$async87429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async87429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async87429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async87429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async87429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta87430","meta87430",-16510533,null)], null);
});

cljs.core.async.t_cljs$core$async87429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async87429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async87429";

cljs.core.async.t_cljs$core$async87429.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async87429");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async87429.
 */
cljs.core.async.__GT_t_cljs$core$async87429 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async87429(flag__$1,cb__$1,meta87430){
return (new cljs.core.async.t_cljs$core$async87429(flag__$1,cb__$1,meta87430));
});

}

return (new cljs.core.async.t_cljs$core$async87429(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__87432_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87432_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__87433_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87433_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__87434 = (i + (1));
i = G__87434;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___87440 = arguments.length;
var i__4500__auto___87441 = (0);
while(true){
if((i__4500__auto___87441 < len__4499__auto___87440)){
args__4502__auto__.push((arguments[i__4500__auto___87441]));

var G__87442 = (i__4500__auto___87441 + (1));
i__4500__auto___87441 = G__87442;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__87437){
var map__87438 = p__87437;
var map__87438__$1 = ((((!((map__87438 == null)))?(((((map__87438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87438):map__87438);
var opts = map__87438__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq87435){
var G__87436 = cljs.core.first.call(null,seq87435);
var seq87435__$1 = cljs.core.next.call(null,seq87435);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87436,seq87435__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__87444 = arguments.length;
switch (G__87444) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__62848__auto___87490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___87490){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___87490){
return (function (state_87468){
var state_val_87469 = (state_87468[(1)]);
if((state_val_87469 === (7))){
var inst_87464 = (state_87468[(2)]);
var state_87468__$1 = state_87468;
var statearr_87470_87491 = state_87468__$1;
(statearr_87470_87491[(2)] = inst_87464);

(statearr_87470_87491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (1))){
var state_87468__$1 = state_87468;
var statearr_87471_87492 = state_87468__$1;
(statearr_87471_87492[(2)] = null);

(statearr_87471_87492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (4))){
var inst_87447 = (state_87468[(7)]);
var inst_87447__$1 = (state_87468[(2)]);
var inst_87448 = (inst_87447__$1 == null);
var state_87468__$1 = (function (){var statearr_87472 = state_87468;
(statearr_87472[(7)] = inst_87447__$1);

return statearr_87472;
})();
if(cljs.core.truth_(inst_87448)){
var statearr_87473_87493 = state_87468__$1;
(statearr_87473_87493[(1)] = (5));

} else {
var statearr_87474_87494 = state_87468__$1;
(statearr_87474_87494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (13))){
var state_87468__$1 = state_87468;
var statearr_87475_87495 = state_87468__$1;
(statearr_87475_87495[(2)] = null);

(statearr_87475_87495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (6))){
var inst_87447 = (state_87468[(7)]);
var state_87468__$1 = state_87468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87468__$1,(11),to,inst_87447);
} else {
if((state_val_87469 === (3))){
var inst_87466 = (state_87468[(2)]);
var state_87468__$1 = state_87468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87468__$1,inst_87466);
} else {
if((state_val_87469 === (12))){
var state_87468__$1 = state_87468;
var statearr_87476_87496 = state_87468__$1;
(statearr_87476_87496[(2)] = null);

(statearr_87476_87496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (2))){
var state_87468__$1 = state_87468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87468__$1,(4),from);
} else {
if((state_val_87469 === (11))){
var inst_87457 = (state_87468[(2)]);
var state_87468__$1 = state_87468;
if(cljs.core.truth_(inst_87457)){
var statearr_87477_87497 = state_87468__$1;
(statearr_87477_87497[(1)] = (12));

} else {
var statearr_87478_87498 = state_87468__$1;
(statearr_87478_87498[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (9))){
var state_87468__$1 = state_87468;
var statearr_87479_87499 = state_87468__$1;
(statearr_87479_87499[(2)] = null);

(statearr_87479_87499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (5))){
var state_87468__$1 = state_87468;
if(cljs.core.truth_(close_QMARK_)){
var statearr_87480_87500 = state_87468__$1;
(statearr_87480_87500[(1)] = (8));

} else {
var statearr_87481_87501 = state_87468__$1;
(statearr_87481_87501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (14))){
var inst_87462 = (state_87468[(2)]);
var state_87468__$1 = state_87468;
var statearr_87482_87502 = state_87468__$1;
(statearr_87482_87502[(2)] = inst_87462);

(statearr_87482_87502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (10))){
var inst_87454 = (state_87468[(2)]);
var state_87468__$1 = state_87468;
var statearr_87483_87503 = state_87468__$1;
(statearr_87483_87503[(2)] = inst_87454);

(statearr_87483_87503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87469 === (8))){
var inst_87451 = cljs.core.async.close_BANG_.call(null,to);
var state_87468__$1 = state_87468;
var statearr_87484_87504 = state_87468__$1;
(statearr_87484_87504[(2)] = inst_87451);

(statearr_87484_87504[(1)] = (10));


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
});})(c__62848__auto___87490))
;
return ((function (switch__50623__auto__,c__62848__auto___87490){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_87485 = [null,null,null,null,null,null,null,null];
(statearr_87485[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_87485[(1)] = (1));

return statearr_87485;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_87468){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87486){if((e87486 instanceof Object)){
var ex__50627__auto__ = e87486;
var statearr_87487_87505 = state_87468;
(statearr_87487_87505[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87506 = state_87468;
state_87468 = G__87506;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_87468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_87468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___87490))
})();
var state__62850__auto__ = (function (){var statearr_87488 = f__62849__auto__.call(null);
(statearr_87488[(6)] = c__62848__auto___87490);

return statearr_87488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___87490))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__87507){
var vec__87508 = p__87507;
var v = cljs.core.nth.call(null,vec__87508,(0),null);
var p = cljs.core.nth.call(null,vec__87508,(1),null);
var job = vec__87508;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__62848__auto___87679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___87679,res,vec__87508,v,p,job,jobs,results){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___87679,res,vec__87508,v,p,job,jobs,results){
return (function (state_87515){
var state_val_87516 = (state_87515[(1)]);
if((state_val_87516 === (1))){
var state_87515__$1 = state_87515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87515__$1,(2),res,v);
} else {
if((state_val_87516 === (2))){
var inst_87512 = (state_87515[(2)]);
var inst_87513 = cljs.core.async.close_BANG_.call(null,res);
var state_87515__$1 = (function (){var statearr_87517 = state_87515;
(statearr_87517[(7)] = inst_87512);

return statearr_87517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87515__$1,inst_87513);
} else {
return null;
}
}
});})(c__62848__auto___87679,res,vec__87508,v,p,job,jobs,results))
;
return ((function (switch__50623__auto__,c__62848__auto___87679,res,vec__87508,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0 = (function (){
var statearr_87518 = [null,null,null,null,null,null,null,null];
(statearr_87518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__);

(statearr_87518[(1)] = (1));

return statearr_87518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1 = (function (state_87515){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87519){if((e87519 instanceof Object)){
var ex__50627__auto__ = e87519;
var statearr_87520_87680 = state_87515;
(statearr_87520_87680[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87681 = state_87515;
state_87515 = G__87681;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = function(state_87515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1.call(this,state_87515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___87679,res,vec__87508,v,p,job,jobs,results))
})();
var state__62850__auto__ = (function (){var statearr_87521 = f__62849__auto__.call(null);
(statearr_87521[(6)] = c__62848__auto___87679);

return statearr_87521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___87679,res,vec__87508,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__87522){
var vec__87523 = p__87522;
var v = cljs.core.nth.call(null,vec__87523,(0),null);
var p = cljs.core.nth.call(null,vec__87523,(1),null);
var job = vec__87523;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___87682 = n;
var __87683 = (0);
while(true){
if((__87683 < n__4376__auto___87682)){
var G__87526_87684 = type;
var G__87526_87685__$1 = (((G__87526_87684 instanceof cljs.core.Keyword))?G__87526_87684.fqn:null);
switch (G__87526_87685__$1) {
case "compute":
var c__62848__auto___87687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__87683,c__62848__auto___87687,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (__87683,c__62848__auto___87687,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async){
return (function (state_87539){
var state_val_87540 = (state_87539[(1)]);
if((state_val_87540 === (1))){
var state_87539__$1 = state_87539;
var statearr_87541_87688 = state_87539__$1;
(statearr_87541_87688[(2)] = null);

(statearr_87541_87688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87540 === (2))){
var state_87539__$1 = state_87539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87539__$1,(4),jobs);
} else {
if((state_val_87540 === (3))){
var inst_87537 = (state_87539[(2)]);
var state_87539__$1 = state_87539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87539__$1,inst_87537);
} else {
if((state_val_87540 === (4))){
var inst_87529 = (state_87539[(2)]);
var inst_87530 = process.call(null,inst_87529);
var state_87539__$1 = state_87539;
if(cljs.core.truth_(inst_87530)){
var statearr_87542_87689 = state_87539__$1;
(statearr_87542_87689[(1)] = (5));

} else {
var statearr_87543_87690 = state_87539__$1;
(statearr_87543_87690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87540 === (5))){
var state_87539__$1 = state_87539;
var statearr_87544_87691 = state_87539__$1;
(statearr_87544_87691[(2)] = null);

(statearr_87544_87691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87540 === (6))){
var state_87539__$1 = state_87539;
var statearr_87545_87692 = state_87539__$1;
(statearr_87545_87692[(2)] = null);

(statearr_87545_87692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87540 === (7))){
var inst_87535 = (state_87539[(2)]);
var state_87539__$1 = state_87539;
var statearr_87546_87693 = state_87539__$1;
(statearr_87546_87693[(2)] = inst_87535);

(statearr_87546_87693[(1)] = (3));


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
});})(__87683,c__62848__auto___87687,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async))
;
return ((function (__87683,switch__50623__auto__,c__62848__auto___87687,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0 = (function (){
var statearr_87547 = [null,null,null,null,null,null,null];
(statearr_87547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__);

(statearr_87547[(1)] = (1));

return statearr_87547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1 = (function (state_87539){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87548){if((e87548 instanceof Object)){
var ex__50627__auto__ = e87548;
var statearr_87549_87694 = state_87539;
(statearr_87549_87694[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87695 = state_87539;
state_87539 = G__87695;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = function(state_87539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1.call(this,state_87539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__;
})()
;})(__87683,switch__50623__auto__,c__62848__auto___87687,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async))
})();
var state__62850__auto__ = (function (){var statearr_87550 = f__62849__auto__.call(null);
(statearr_87550[(6)] = c__62848__auto___87687);

return statearr_87550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(__87683,c__62848__auto___87687,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async))
);


break;
case "async":
var c__62848__auto___87696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__87683,c__62848__auto___87696,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (__87683,c__62848__auto___87696,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async){
return (function (state_87563){
var state_val_87564 = (state_87563[(1)]);
if((state_val_87564 === (1))){
var state_87563__$1 = state_87563;
var statearr_87565_87697 = state_87563__$1;
(statearr_87565_87697[(2)] = null);

(statearr_87565_87697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87564 === (2))){
var state_87563__$1 = state_87563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87563__$1,(4),jobs);
} else {
if((state_val_87564 === (3))){
var inst_87561 = (state_87563[(2)]);
var state_87563__$1 = state_87563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87563__$1,inst_87561);
} else {
if((state_val_87564 === (4))){
var inst_87553 = (state_87563[(2)]);
var inst_87554 = async.call(null,inst_87553);
var state_87563__$1 = state_87563;
if(cljs.core.truth_(inst_87554)){
var statearr_87566_87698 = state_87563__$1;
(statearr_87566_87698[(1)] = (5));

} else {
var statearr_87567_87699 = state_87563__$1;
(statearr_87567_87699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87564 === (5))){
var state_87563__$1 = state_87563;
var statearr_87568_87700 = state_87563__$1;
(statearr_87568_87700[(2)] = null);

(statearr_87568_87700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87564 === (6))){
var state_87563__$1 = state_87563;
var statearr_87569_87701 = state_87563__$1;
(statearr_87569_87701[(2)] = null);

(statearr_87569_87701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87564 === (7))){
var inst_87559 = (state_87563[(2)]);
var state_87563__$1 = state_87563;
var statearr_87570_87702 = state_87563__$1;
(statearr_87570_87702[(2)] = inst_87559);

(statearr_87570_87702[(1)] = (3));


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
});})(__87683,c__62848__auto___87696,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async))
;
return ((function (__87683,switch__50623__auto__,c__62848__auto___87696,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0 = (function (){
var statearr_87571 = [null,null,null,null,null,null,null];
(statearr_87571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__);

(statearr_87571[(1)] = (1));

return statearr_87571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1 = (function (state_87563){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87572){if((e87572 instanceof Object)){
var ex__50627__auto__ = e87572;
var statearr_87573_87703 = state_87563;
(statearr_87573_87703[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87704 = state_87563;
state_87563 = G__87704;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = function(state_87563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1.call(this,state_87563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__;
})()
;})(__87683,switch__50623__auto__,c__62848__auto___87696,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async))
})();
var state__62850__auto__ = (function (){var statearr_87574 = f__62849__auto__.call(null);
(statearr_87574[(6)] = c__62848__auto___87696);

return statearr_87574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(__87683,c__62848__auto___87696,G__87526_87684,G__87526_87685__$1,n__4376__auto___87682,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87526_87685__$1)].join('')));

}

var G__87705 = (__87683 + (1));
__87683 = G__87705;
continue;
} else {
}
break;
}

var c__62848__auto___87706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___87706,jobs,results,process,async){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___87706,jobs,results,process,async){
return (function (state_87596){
var state_val_87597 = (state_87596[(1)]);
if((state_val_87597 === (1))){
var state_87596__$1 = state_87596;
var statearr_87598_87707 = state_87596__$1;
(statearr_87598_87707[(2)] = null);

(statearr_87598_87707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87597 === (2))){
var state_87596__$1 = state_87596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87596__$1,(4),from);
} else {
if((state_val_87597 === (3))){
var inst_87594 = (state_87596[(2)]);
var state_87596__$1 = state_87596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87596__$1,inst_87594);
} else {
if((state_val_87597 === (4))){
var inst_87577 = (state_87596[(7)]);
var inst_87577__$1 = (state_87596[(2)]);
var inst_87578 = (inst_87577__$1 == null);
var state_87596__$1 = (function (){var statearr_87599 = state_87596;
(statearr_87599[(7)] = inst_87577__$1);

return statearr_87599;
})();
if(cljs.core.truth_(inst_87578)){
var statearr_87600_87708 = state_87596__$1;
(statearr_87600_87708[(1)] = (5));

} else {
var statearr_87601_87709 = state_87596__$1;
(statearr_87601_87709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87597 === (5))){
var inst_87580 = cljs.core.async.close_BANG_.call(null,jobs);
var state_87596__$1 = state_87596;
var statearr_87602_87710 = state_87596__$1;
(statearr_87602_87710[(2)] = inst_87580);

(statearr_87602_87710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87597 === (6))){
var inst_87582 = (state_87596[(8)]);
var inst_87577 = (state_87596[(7)]);
var inst_87582__$1 = cljs.core.async.chan.call(null,(1));
var inst_87583 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_87584 = [inst_87577,inst_87582__$1];
var inst_87585 = (new cljs.core.PersistentVector(null,2,(5),inst_87583,inst_87584,null));
var state_87596__$1 = (function (){var statearr_87603 = state_87596;
(statearr_87603[(8)] = inst_87582__$1);

return statearr_87603;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87596__$1,(8),jobs,inst_87585);
} else {
if((state_val_87597 === (7))){
var inst_87592 = (state_87596[(2)]);
var state_87596__$1 = state_87596;
var statearr_87604_87711 = state_87596__$1;
(statearr_87604_87711[(2)] = inst_87592);

(statearr_87604_87711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87597 === (8))){
var inst_87582 = (state_87596[(8)]);
var inst_87587 = (state_87596[(2)]);
var state_87596__$1 = (function (){var statearr_87605 = state_87596;
(statearr_87605[(9)] = inst_87587);

return statearr_87605;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87596__$1,(9),results,inst_87582);
} else {
if((state_val_87597 === (9))){
var inst_87589 = (state_87596[(2)]);
var state_87596__$1 = (function (){var statearr_87606 = state_87596;
(statearr_87606[(10)] = inst_87589);

return statearr_87606;
})();
var statearr_87607_87712 = state_87596__$1;
(statearr_87607_87712[(2)] = null);

(statearr_87607_87712[(1)] = (2));


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
});})(c__62848__auto___87706,jobs,results,process,async))
;
return ((function (switch__50623__auto__,c__62848__auto___87706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0 = (function (){
var statearr_87608 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_87608[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__);

(statearr_87608[(1)] = (1));

return statearr_87608;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1 = (function (state_87596){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87609){if((e87609 instanceof Object)){
var ex__50627__auto__ = e87609;
var statearr_87610_87713 = state_87596;
(statearr_87610_87713[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87714 = state_87596;
state_87596 = G__87714;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = function(state_87596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1.call(this,state_87596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___87706,jobs,results,process,async))
})();
var state__62850__auto__ = (function (){var statearr_87611 = f__62849__auto__.call(null);
(statearr_87611[(6)] = c__62848__auto___87706);

return statearr_87611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___87706,jobs,results,process,async))
);


var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__,jobs,results,process,async){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__,jobs,results,process,async){
return (function (state_87649){
var state_val_87650 = (state_87649[(1)]);
if((state_val_87650 === (7))){
var inst_87645 = (state_87649[(2)]);
var state_87649__$1 = state_87649;
var statearr_87651_87715 = state_87649__$1;
(statearr_87651_87715[(2)] = inst_87645);

(statearr_87651_87715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (20))){
var state_87649__$1 = state_87649;
var statearr_87652_87716 = state_87649__$1;
(statearr_87652_87716[(2)] = null);

(statearr_87652_87716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (1))){
var state_87649__$1 = state_87649;
var statearr_87653_87717 = state_87649__$1;
(statearr_87653_87717[(2)] = null);

(statearr_87653_87717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (4))){
var inst_87614 = (state_87649[(7)]);
var inst_87614__$1 = (state_87649[(2)]);
var inst_87615 = (inst_87614__$1 == null);
var state_87649__$1 = (function (){var statearr_87654 = state_87649;
(statearr_87654[(7)] = inst_87614__$1);

return statearr_87654;
})();
if(cljs.core.truth_(inst_87615)){
var statearr_87655_87718 = state_87649__$1;
(statearr_87655_87718[(1)] = (5));

} else {
var statearr_87656_87719 = state_87649__$1;
(statearr_87656_87719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (15))){
var inst_87627 = (state_87649[(8)]);
var state_87649__$1 = state_87649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87649__$1,(18),to,inst_87627);
} else {
if((state_val_87650 === (21))){
var inst_87640 = (state_87649[(2)]);
var state_87649__$1 = state_87649;
var statearr_87657_87720 = state_87649__$1;
(statearr_87657_87720[(2)] = inst_87640);

(statearr_87657_87720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (13))){
var inst_87642 = (state_87649[(2)]);
var state_87649__$1 = (function (){var statearr_87658 = state_87649;
(statearr_87658[(9)] = inst_87642);

return statearr_87658;
})();
var statearr_87659_87721 = state_87649__$1;
(statearr_87659_87721[(2)] = null);

(statearr_87659_87721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (6))){
var inst_87614 = (state_87649[(7)]);
var state_87649__$1 = state_87649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87649__$1,(11),inst_87614);
} else {
if((state_val_87650 === (17))){
var inst_87635 = (state_87649[(2)]);
var state_87649__$1 = state_87649;
if(cljs.core.truth_(inst_87635)){
var statearr_87660_87722 = state_87649__$1;
(statearr_87660_87722[(1)] = (19));

} else {
var statearr_87661_87723 = state_87649__$1;
(statearr_87661_87723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (3))){
var inst_87647 = (state_87649[(2)]);
var state_87649__$1 = state_87649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87649__$1,inst_87647);
} else {
if((state_val_87650 === (12))){
var inst_87624 = (state_87649[(10)]);
var state_87649__$1 = state_87649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87649__$1,(14),inst_87624);
} else {
if((state_val_87650 === (2))){
var state_87649__$1 = state_87649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87649__$1,(4),results);
} else {
if((state_val_87650 === (19))){
var state_87649__$1 = state_87649;
var statearr_87662_87724 = state_87649__$1;
(statearr_87662_87724[(2)] = null);

(statearr_87662_87724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (11))){
var inst_87624 = (state_87649[(2)]);
var state_87649__$1 = (function (){var statearr_87663 = state_87649;
(statearr_87663[(10)] = inst_87624);

return statearr_87663;
})();
var statearr_87664_87725 = state_87649__$1;
(statearr_87664_87725[(2)] = null);

(statearr_87664_87725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (9))){
var state_87649__$1 = state_87649;
var statearr_87665_87726 = state_87649__$1;
(statearr_87665_87726[(2)] = null);

(statearr_87665_87726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (5))){
var state_87649__$1 = state_87649;
if(cljs.core.truth_(close_QMARK_)){
var statearr_87666_87727 = state_87649__$1;
(statearr_87666_87727[(1)] = (8));

} else {
var statearr_87667_87728 = state_87649__$1;
(statearr_87667_87728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (14))){
var inst_87629 = (state_87649[(11)]);
var inst_87627 = (state_87649[(8)]);
var inst_87627__$1 = (state_87649[(2)]);
var inst_87628 = (inst_87627__$1 == null);
var inst_87629__$1 = cljs.core.not.call(null,inst_87628);
var state_87649__$1 = (function (){var statearr_87668 = state_87649;
(statearr_87668[(11)] = inst_87629__$1);

(statearr_87668[(8)] = inst_87627__$1);

return statearr_87668;
})();
if(inst_87629__$1){
var statearr_87669_87729 = state_87649__$1;
(statearr_87669_87729[(1)] = (15));

} else {
var statearr_87670_87730 = state_87649__$1;
(statearr_87670_87730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (16))){
var inst_87629 = (state_87649[(11)]);
var state_87649__$1 = state_87649;
var statearr_87671_87731 = state_87649__$1;
(statearr_87671_87731[(2)] = inst_87629);

(statearr_87671_87731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (10))){
var inst_87621 = (state_87649[(2)]);
var state_87649__$1 = state_87649;
var statearr_87672_87732 = state_87649__$1;
(statearr_87672_87732[(2)] = inst_87621);

(statearr_87672_87732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (18))){
var inst_87632 = (state_87649[(2)]);
var state_87649__$1 = state_87649;
var statearr_87673_87733 = state_87649__$1;
(statearr_87673_87733[(2)] = inst_87632);

(statearr_87673_87733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87650 === (8))){
var inst_87618 = cljs.core.async.close_BANG_.call(null,to);
var state_87649__$1 = state_87649;
var statearr_87674_87734 = state_87649__$1;
(statearr_87674_87734[(2)] = inst_87618);

(statearr_87674_87734[(1)] = (10));


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
});})(c__62848__auto__,jobs,results,process,async))
;
return ((function (switch__50623__auto__,c__62848__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0 = (function (){
var statearr_87675 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__);

(statearr_87675[(1)] = (1));

return statearr_87675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1 = (function (state_87649){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87676){if((e87676 instanceof Object)){
var ex__50627__auto__ = e87676;
var statearr_87677_87735 = state_87649;
(statearr_87677_87735[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87736 = state_87649;
state_87649 = G__87736;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__ = function(state_87649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1.call(this,state_87649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__,jobs,results,process,async))
})();
var state__62850__auto__ = (function (){var statearr_87678 = f__62849__auto__.call(null);
(statearr_87678[(6)] = c__62848__auto__);

return statearr_87678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__,jobs,results,process,async))
);

return c__62848__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__87738 = arguments.length;
switch (G__87738) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__87741 = arguments.length;
switch (G__87741) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__87744 = arguments.length;
switch (G__87744) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__62848__auto___87793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___87793,tc,fc){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___87793,tc,fc){
return (function (state_87770){
var state_val_87771 = (state_87770[(1)]);
if((state_val_87771 === (7))){
var inst_87766 = (state_87770[(2)]);
var state_87770__$1 = state_87770;
var statearr_87772_87794 = state_87770__$1;
(statearr_87772_87794[(2)] = inst_87766);

(statearr_87772_87794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (1))){
var state_87770__$1 = state_87770;
var statearr_87773_87795 = state_87770__$1;
(statearr_87773_87795[(2)] = null);

(statearr_87773_87795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (4))){
var inst_87747 = (state_87770[(7)]);
var inst_87747__$1 = (state_87770[(2)]);
var inst_87748 = (inst_87747__$1 == null);
var state_87770__$1 = (function (){var statearr_87774 = state_87770;
(statearr_87774[(7)] = inst_87747__$1);

return statearr_87774;
})();
if(cljs.core.truth_(inst_87748)){
var statearr_87775_87796 = state_87770__$1;
(statearr_87775_87796[(1)] = (5));

} else {
var statearr_87776_87797 = state_87770__$1;
(statearr_87776_87797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (13))){
var state_87770__$1 = state_87770;
var statearr_87777_87798 = state_87770__$1;
(statearr_87777_87798[(2)] = null);

(statearr_87777_87798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (6))){
var inst_87747 = (state_87770[(7)]);
var inst_87753 = p.call(null,inst_87747);
var state_87770__$1 = state_87770;
if(cljs.core.truth_(inst_87753)){
var statearr_87778_87799 = state_87770__$1;
(statearr_87778_87799[(1)] = (9));

} else {
var statearr_87779_87800 = state_87770__$1;
(statearr_87779_87800[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (3))){
var inst_87768 = (state_87770[(2)]);
var state_87770__$1 = state_87770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87770__$1,inst_87768);
} else {
if((state_val_87771 === (12))){
var state_87770__$1 = state_87770;
var statearr_87780_87801 = state_87770__$1;
(statearr_87780_87801[(2)] = null);

(statearr_87780_87801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (2))){
var state_87770__$1 = state_87770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87770__$1,(4),ch);
} else {
if((state_val_87771 === (11))){
var inst_87747 = (state_87770[(7)]);
var inst_87757 = (state_87770[(2)]);
var state_87770__$1 = state_87770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87770__$1,(8),inst_87757,inst_87747);
} else {
if((state_val_87771 === (9))){
var state_87770__$1 = state_87770;
var statearr_87781_87802 = state_87770__$1;
(statearr_87781_87802[(2)] = tc);

(statearr_87781_87802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (5))){
var inst_87750 = cljs.core.async.close_BANG_.call(null,tc);
var inst_87751 = cljs.core.async.close_BANG_.call(null,fc);
var state_87770__$1 = (function (){var statearr_87782 = state_87770;
(statearr_87782[(8)] = inst_87750);

return statearr_87782;
})();
var statearr_87783_87803 = state_87770__$1;
(statearr_87783_87803[(2)] = inst_87751);

(statearr_87783_87803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (14))){
var inst_87764 = (state_87770[(2)]);
var state_87770__$1 = state_87770;
var statearr_87784_87804 = state_87770__$1;
(statearr_87784_87804[(2)] = inst_87764);

(statearr_87784_87804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (10))){
var state_87770__$1 = state_87770;
var statearr_87785_87805 = state_87770__$1;
(statearr_87785_87805[(2)] = fc);

(statearr_87785_87805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87771 === (8))){
var inst_87759 = (state_87770[(2)]);
var state_87770__$1 = state_87770;
if(cljs.core.truth_(inst_87759)){
var statearr_87786_87806 = state_87770__$1;
(statearr_87786_87806[(1)] = (12));

} else {
var statearr_87787_87807 = state_87770__$1;
(statearr_87787_87807[(1)] = (13));

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
});})(c__62848__auto___87793,tc,fc))
;
return ((function (switch__50623__auto__,c__62848__auto___87793,tc,fc){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_87788 = [null,null,null,null,null,null,null,null,null];
(statearr_87788[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_87788[(1)] = (1));

return statearr_87788;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_87770){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87789){if((e87789 instanceof Object)){
var ex__50627__auto__ = e87789;
var statearr_87790_87808 = state_87770;
(statearr_87790_87808[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87809 = state_87770;
state_87770 = G__87809;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_87770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_87770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___87793,tc,fc))
})();
var state__62850__auto__ = (function (){var statearr_87791 = f__62849__auto__.call(null);
(statearr_87791[(6)] = c__62848__auto___87793);

return statearr_87791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___87793,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__){
return (function (state_87830){
var state_val_87831 = (state_87830[(1)]);
if((state_val_87831 === (7))){
var inst_87826 = (state_87830[(2)]);
var state_87830__$1 = state_87830;
var statearr_87832_87850 = state_87830__$1;
(statearr_87832_87850[(2)] = inst_87826);

(statearr_87832_87850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87831 === (1))){
var inst_87810 = init;
var state_87830__$1 = (function (){var statearr_87833 = state_87830;
(statearr_87833[(7)] = inst_87810);

return statearr_87833;
})();
var statearr_87834_87851 = state_87830__$1;
(statearr_87834_87851[(2)] = null);

(statearr_87834_87851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87831 === (4))){
var inst_87813 = (state_87830[(8)]);
var inst_87813__$1 = (state_87830[(2)]);
var inst_87814 = (inst_87813__$1 == null);
var state_87830__$1 = (function (){var statearr_87835 = state_87830;
(statearr_87835[(8)] = inst_87813__$1);

return statearr_87835;
})();
if(cljs.core.truth_(inst_87814)){
var statearr_87836_87852 = state_87830__$1;
(statearr_87836_87852[(1)] = (5));

} else {
var statearr_87837_87853 = state_87830__$1;
(statearr_87837_87853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87831 === (6))){
var inst_87810 = (state_87830[(7)]);
var inst_87813 = (state_87830[(8)]);
var inst_87817 = (state_87830[(9)]);
var inst_87817__$1 = f.call(null,inst_87810,inst_87813);
var inst_87818 = cljs.core.reduced_QMARK_.call(null,inst_87817__$1);
var state_87830__$1 = (function (){var statearr_87838 = state_87830;
(statearr_87838[(9)] = inst_87817__$1);

return statearr_87838;
})();
if(inst_87818){
var statearr_87839_87854 = state_87830__$1;
(statearr_87839_87854[(1)] = (8));

} else {
var statearr_87840_87855 = state_87830__$1;
(statearr_87840_87855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87831 === (3))){
var inst_87828 = (state_87830[(2)]);
var state_87830__$1 = state_87830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87830__$1,inst_87828);
} else {
if((state_val_87831 === (2))){
var state_87830__$1 = state_87830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87830__$1,(4),ch);
} else {
if((state_val_87831 === (9))){
var inst_87817 = (state_87830[(9)]);
var inst_87810 = inst_87817;
var state_87830__$1 = (function (){var statearr_87841 = state_87830;
(statearr_87841[(7)] = inst_87810);

return statearr_87841;
})();
var statearr_87842_87856 = state_87830__$1;
(statearr_87842_87856[(2)] = null);

(statearr_87842_87856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87831 === (5))){
var inst_87810 = (state_87830[(7)]);
var state_87830__$1 = state_87830;
var statearr_87843_87857 = state_87830__$1;
(statearr_87843_87857[(2)] = inst_87810);

(statearr_87843_87857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87831 === (10))){
var inst_87824 = (state_87830[(2)]);
var state_87830__$1 = state_87830;
var statearr_87844_87858 = state_87830__$1;
(statearr_87844_87858[(2)] = inst_87824);

(statearr_87844_87858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87831 === (8))){
var inst_87817 = (state_87830[(9)]);
var inst_87820 = cljs.core.deref.call(null,inst_87817);
var state_87830__$1 = state_87830;
var statearr_87845_87859 = state_87830__$1;
(statearr_87845_87859[(2)] = inst_87820);

(statearr_87845_87859[(1)] = (10));


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
});})(c__62848__auto__))
;
return ((function (switch__50623__auto__,c__62848__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50624__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50624__auto____0 = (function (){
var statearr_87846 = [null,null,null,null,null,null,null,null,null,null];
(statearr_87846[(0)] = cljs$core$async$reduce_$_state_machine__50624__auto__);

(statearr_87846[(1)] = (1));

return statearr_87846;
});
var cljs$core$async$reduce_$_state_machine__50624__auto____1 = (function (state_87830){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87847){if((e87847 instanceof Object)){
var ex__50627__auto__ = e87847;
var statearr_87848_87860 = state_87830;
(statearr_87848_87860[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87861 = state_87830;
state_87830 = G__87861;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50624__auto__ = function(state_87830){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50624__auto____1.call(this,state_87830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50624__auto____0;
cljs$core$async$reduce_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50624__auto____1;
return cljs$core$async$reduce_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__))
})();
var state__62850__auto__ = (function (){var statearr_87849 = f__62849__auto__.call(null);
(statearr_87849[(6)] = c__62848__auto__);

return statearr_87849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__))
);

return c__62848__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__87863 = arguments.length;
switch (G__87863) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__){
return (function (state_87888){
var state_val_87889 = (state_87888[(1)]);
if((state_val_87889 === (7))){
var inst_87870 = (state_87888[(2)]);
var state_87888__$1 = state_87888;
var statearr_87890_87911 = state_87888__$1;
(statearr_87890_87911[(2)] = inst_87870);

(statearr_87890_87911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (1))){
var inst_87864 = cljs.core.seq.call(null,coll);
var inst_87865 = inst_87864;
var state_87888__$1 = (function (){var statearr_87891 = state_87888;
(statearr_87891[(7)] = inst_87865);

return statearr_87891;
})();
var statearr_87892_87912 = state_87888__$1;
(statearr_87892_87912[(2)] = null);

(statearr_87892_87912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (4))){
var inst_87865 = (state_87888[(7)]);
var inst_87868 = cljs.core.first.call(null,inst_87865);
var state_87888__$1 = state_87888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87888__$1,(7),ch,inst_87868);
} else {
if((state_val_87889 === (13))){
var inst_87882 = (state_87888[(2)]);
var state_87888__$1 = state_87888;
var statearr_87893_87913 = state_87888__$1;
(statearr_87893_87913[(2)] = inst_87882);

(statearr_87893_87913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (6))){
var inst_87873 = (state_87888[(2)]);
var state_87888__$1 = state_87888;
if(cljs.core.truth_(inst_87873)){
var statearr_87894_87914 = state_87888__$1;
(statearr_87894_87914[(1)] = (8));

} else {
var statearr_87895_87915 = state_87888__$1;
(statearr_87895_87915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (3))){
var inst_87886 = (state_87888[(2)]);
var state_87888__$1 = state_87888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87888__$1,inst_87886);
} else {
if((state_val_87889 === (12))){
var state_87888__$1 = state_87888;
var statearr_87896_87916 = state_87888__$1;
(statearr_87896_87916[(2)] = null);

(statearr_87896_87916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (2))){
var inst_87865 = (state_87888[(7)]);
var state_87888__$1 = state_87888;
if(cljs.core.truth_(inst_87865)){
var statearr_87897_87917 = state_87888__$1;
(statearr_87897_87917[(1)] = (4));

} else {
var statearr_87898_87918 = state_87888__$1;
(statearr_87898_87918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (11))){
var inst_87879 = cljs.core.async.close_BANG_.call(null,ch);
var state_87888__$1 = state_87888;
var statearr_87899_87919 = state_87888__$1;
(statearr_87899_87919[(2)] = inst_87879);

(statearr_87899_87919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (9))){
var state_87888__$1 = state_87888;
if(cljs.core.truth_(close_QMARK_)){
var statearr_87900_87920 = state_87888__$1;
(statearr_87900_87920[(1)] = (11));

} else {
var statearr_87901_87921 = state_87888__$1;
(statearr_87901_87921[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (5))){
var inst_87865 = (state_87888[(7)]);
var state_87888__$1 = state_87888;
var statearr_87902_87922 = state_87888__$1;
(statearr_87902_87922[(2)] = inst_87865);

(statearr_87902_87922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (10))){
var inst_87884 = (state_87888[(2)]);
var state_87888__$1 = state_87888;
var statearr_87903_87923 = state_87888__$1;
(statearr_87903_87923[(2)] = inst_87884);

(statearr_87903_87923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87889 === (8))){
var inst_87865 = (state_87888[(7)]);
var inst_87875 = cljs.core.next.call(null,inst_87865);
var inst_87865__$1 = inst_87875;
var state_87888__$1 = (function (){var statearr_87904 = state_87888;
(statearr_87904[(7)] = inst_87865__$1);

return statearr_87904;
})();
var statearr_87905_87924 = state_87888__$1;
(statearr_87905_87924[(2)] = null);

(statearr_87905_87924[(1)] = (2));


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
});})(c__62848__auto__))
;
return ((function (switch__50623__auto__,c__62848__auto__){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_87906 = [null,null,null,null,null,null,null,null];
(statearr_87906[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_87906[(1)] = (1));

return statearr_87906;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_87888){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_87888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e87907){if((e87907 instanceof Object)){
var ex__50627__auto__ = e87907;
var statearr_87908_87925 = state_87888;
(statearr_87908_87925[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87926 = state_87888;
state_87888 = G__87926;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_87888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_87888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__))
})();
var state__62850__auto__ = (function (){var statearr_87909 = f__62849__auto__.call(null);
(statearr_87909[(6)] = c__62848__auto__);

return statearr_87909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__))
);

return c__62848__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async87927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async87927 = (function (ch,cs,meta87928){
this.ch = ch;
this.cs = cs;
this.meta87928 = meta87928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async87927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_87929,meta87928__$1){
var self__ = this;
var _87929__$1 = this;
return (new cljs.core.async.t_cljs$core$async87927(self__.ch,self__.cs,meta87928__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async87927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_87929){
var self__ = this;
var _87929__$1 = this;
return self__.meta87928;
});})(cs))
;

cljs.core.async.t_cljs$core$async87927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async87927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async87927.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async87927.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async87927.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async87927.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async87927.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta87928","meta87928",1716015865,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async87927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async87927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async87927";

cljs.core.async.t_cljs$core$async87927.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async87927");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async87927.
 */
cljs.core.async.__GT_t_cljs$core$async87927 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async87927(ch__$1,cs__$1,meta87928){
return (new cljs.core.async.t_cljs$core$async87927(ch__$1,cs__$1,meta87928));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async87927(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__62848__auto___88149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___88149,cs,m,dchan,dctr,done){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___88149,cs,m,dchan,dctr,done){
return (function (state_88064){
var state_val_88065 = (state_88064[(1)]);
if((state_val_88065 === (7))){
var inst_88060 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88066_88150 = state_88064__$1;
(statearr_88066_88150[(2)] = inst_88060);

(statearr_88066_88150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (20))){
var inst_87963 = (state_88064[(7)]);
var inst_87975 = cljs.core.first.call(null,inst_87963);
var inst_87976 = cljs.core.nth.call(null,inst_87975,(0),null);
var inst_87977 = cljs.core.nth.call(null,inst_87975,(1),null);
var state_88064__$1 = (function (){var statearr_88067 = state_88064;
(statearr_88067[(8)] = inst_87976);

return statearr_88067;
})();
if(cljs.core.truth_(inst_87977)){
var statearr_88068_88151 = state_88064__$1;
(statearr_88068_88151[(1)] = (22));

} else {
var statearr_88069_88152 = state_88064__$1;
(statearr_88069_88152[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (27))){
var inst_87932 = (state_88064[(9)]);
var inst_88007 = (state_88064[(10)]);
var inst_88005 = (state_88064[(11)]);
var inst_88012 = (state_88064[(12)]);
var inst_88012__$1 = cljs.core._nth.call(null,inst_88005,inst_88007);
var inst_88013 = cljs.core.async.put_BANG_.call(null,inst_88012__$1,inst_87932,done);
var state_88064__$1 = (function (){var statearr_88070 = state_88064;
(statearr_88070[(12)] = inst_88012__$1);

return statearr_88070;
})();
if(cljs.core.truth_(inst_88013)){
var statearr_88071_88153 = state_88064__$1;
(statearr_88071_88153[(1)] = (30));

} else {
var statearr_88072_88154 = state_88064__$1;
(statearr_88072_88154[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (1))){
var state_88064__$1 = state_88064;
var statearr_88073_88155 = state_88064__$1;
(statearr_88073_88155[(2)] = null);

(statearr_88073_88155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (24))){
var inst_87963 = (state_88064[(7)]);
var inst_87982 = (state_88064[(2)]);
var inst_87983 = cljs.core.next.call(null,inst_87963);
var inst_87941 = inst_87983;
var inst_87942 = null;
var inst_87943 = (0);
var inst_87944 = (0);
var state_88064__$1 = (function (){var statearr_88074 = state_88064;
(statearr_88074[(13)] = inst_87943);

(statearr_88074[(14)] = inst_87942);

(statearr_88074[(15)] = inst_87941);

(statearr_88074[(16)] = inst_87944);

(statearr_88074[(17)] = inst_87982);

return statearr_88074;
})();
var statearr_88075_88156 = state_88064__$1;
(statearr_88075_88156[(2)] = null);

(statearr_88075_88156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (39))){
var state_88064__$1 = state_88064;
var statearr_88079_88157 = state_88064__$1;
(statearr_88079_88157[(2)] = null);

(statearr_88079_88157[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (4))){
var inst_87932 = (state_88064[(9)]);
var inst_87932__$1 = (state_88064[(2)]);
var inst_87933 = (inst_87932__$1 == null);
var state_88064__$1 = (function (){var statearr_88080 = state_88064;
(statearr_88080[(9)] = inst_87932__$1);

return statearr_88080;
})();
if(cljs.core.truth_(inst_87933)){
var statearr_88081_88158 = state_88064__$1;
(statearr_88081_88158[(1)] = (5));

} else {
var statearr_88082_88159 = state_88064__$1;
(statearr_88082_88159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (15))){
var inst_87943 = (state_88064[(13)]);
var inst_87942 = (state_88064[(14)]);
var inst_87941 = (state_88064[(15)]);
var inst_87944 = (state_88064[(16)]);
var inst_87959 = (state_88064[(2)]);
var inst_87960 = (inst_87944 + (1));
var tmp88076 = inst_87943;
var tmp88077 = inst_87942;
var tmp88078 = inst_87941;
var inst_87941__$1 = tmp88078;
var inst_87942__$1 = tmp88077;
var inst_87943__$1 = tmp88076;
var inst_87944__$1 = inst_87960;
var state_88064__$1 = (function (){var statearr_88083 = state_88064;
(statearr_88083[(18)] = inst_87959);

(statearr_88083[(13)] = inst_87943__$1);

(statearr_88083[(14)] = inst_87942__$1);

(statearr_88083[(15)] = inst_87941__$1);

(statearr_88083[(16)] = inst_87944__$1);

return statearr_88083;
})();
var statearr_88084_88160 = state_88064__$1;
(statearr_88084_88160[(2)] = null);

(statearr_88084_88160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (21))){
var inst_87986 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88088_88161 = state_88064__$1;
(statearr_88088_88161[(2)] = inst_87986);

(statearr_88088_88161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (31))){
var inst_88012 = (state_88064[(12)]);
var inst_88016 = done.call(null,null);
var inst_88017 = cljs.core.async.untap_STAR_.call(null,m,inst_88012);
var state_88064__$1 = (function (){var statearr_88089 = state_88064;
(statearr_88089[(19)] = inst_88016);

return statearr_88089;
})();
var statearr_88090_88162 = state_88064__$1;
(statearr_88090_88162[(2)] = inst_88017);

(statearr_88090_88162[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (32))){
var inst_88006 = (state_88064[(20)]);
var inst_88004 = (state_88064[(21)]);
var inst_88007 = (state_88064[(10)]);
var inst_88005 = (state_88064[(11)]);
var inst_88019 = (state_88064[(2)]);
var inst_88020 = (inst_88007 + (1));
var tmp88085 = inst_88006;
var tmp88086 = inst_88004;
var tmp88087 = inst_88005;
var inst_88004__$1 = tmp88086;
var inst_88005__$1 = tmp88087;
var inst_88006__$1 = tmp88085;
var inst_88007__$1 = inst_88020;
var state_88064__$1 = (function (){var statearr_88091 = state_88064;
(statearr_88091[(20)] = inst_88006__$1);

(statearr_88091[(21)] = inst_88004__$1);

(statearr_88091[(22)] = inst_88019);

(statearr_88091[(10)] = inst_88007__$1);

(statearr_88091[(11)] = inst_88005__$1);

return statearr_88091;
})();
var statearr_88092_88163 = state_88064__$1;
(statearr_88092_88163[(2)] = null);

(statearr_88092_88163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (40))){
var inst_88032 = (state_88064[(23)]);
var inst_88036 = done.call(null,null);
var inst_88037 = cljs.core.async.untap_STAR_.call(null,m,inst_88032);
var state_88064__$1 = (function (){var statearr_88093 = state_88064;
(statearr_88093[(24)] = inst_88036);

return statearr_88093;
})();
var statearr_88094_88164 = state_88064__$1;
(statearr_88094_88164[(2)] = inst_88037);

(statearr_88094_88164[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (33))){
var inst_88023 = (state_88064[(25)]);
var inst_88025 = cljs.core.chunked_seq_QMARK_.call(null,inst_88023);
var state_88064__$1 = state_88064;
if(inst_88025){
var statearr_88095_88165 = state_88064__$1;
(statearr_88095_88165[(1)] = (36));

} else {
var statearr_88096_88166 = state_88064__$1;
(statearr_88096_88166[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (13))){
var inst_87953 = (state_88064[(26)]);
var inst_87956 = cljs.core.async.close_BANG_.call(null,inst_87953);
var state_88064__$1 = state_88064;
var statearr_88097_88167 = state_88064__$1;
(statearr_88097_88167[(2)] = inst_87956);

(statearr_88097_88167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (22))){
var inst_87976 = (state_88064[(8)]);
var inst_87979 = cljs.core.async.close_BANG_.call(null,inst_87976);
var state_88064__$1 = state_88064;
var statearr_88098_88168 = state_88064__$1;
(statearr_88098_88168[(2)] = inst_87979);

(statearr_88098_88168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (36))){
var inst_88023 = (state_88064[(25)]);
var inst_88027 = cljs.core.chunk_first.call(null,inst_88023);
var inst_88028 = cljs.core.chunk_rest.call(null,inst_88023);
var inst_88029 = cljs.core.count.call(null,inst_88027);
var inst_88004 = inst_88028;
var inst_88005 = inst_88027;
var inst_88006 = inst_88029;
var inst_88007 = (0);
var state_88064__$1 = (function (){var statearr_88099 = state_88064;
(statearr_88099[(20)] = inst_88006);

(statearr_88099[(21)] = inst_88004);

(statearr_88099[(10)] = inst_88007);

(statearr_88099[(11)] = inst_88005);

return statearr_88099;
})();
var statearr_88100_88169 = state_88064__$1;
(statearr_88100_88169[(2)] = null);

(statearr_88100_88169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (41))){
var inst_88023 = (state_88064[(25)]);
var inst_88039 = (state_88064[(2)]);
var inst_88040 = cljs.core.next.call(null,inst_88023);
var inst_88004 = inst_88040;
var inst_88005 = null;
var inst_88006 = (0);
var inst_88007 = (0);
var state_88064__$1 = (function (){var statearr_88101 = state_88064;
(statearr_88101[(20)] = inst_88006);

(statearr_88101[(21)] = inst_88004);

(statearr_88101[(27)] = inst_88039);

(statearr_88101[(10)] = inst_88007);

(statearr_88101[(11)] = inst_88005);

return statearr_88101;
})();
var statearr_88102_88170 = state_88064__$1;
(statearr_88102_88170[(2)] = null);

(statearr_88102_88170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (43))){
var state_88064__$1 = state_88064;
var statearr_88103_88171 = state_88064__$1;
(statearr_88103_88171[(2)] = null);

(statearr_88103_88171[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (29))){
var inst_88048 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88104_88172 = state_88064__$1;
(statearr_88104_88172[(2)] = inst_88048);

(statearr_88104_88172[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (44))){
var inst_88057 = (state_88064[(2)]);
var state_88064__$1 = (function (){var statearr_88105 = state_88064;
(statearr_88105[(28)] = inst_88057);

return statearr_88105;
})();
var statearr_88106_88173 = state_88064__$1;
(statearr_88106_88173[(2)] = null);

(statearr_88106_88173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (6))){
var inst_87996 = (state_88064[(29)]);
var inst_87995 = cljs.core.deref.call(null,cs);
var inst_87996__$1 = cljs.core.keys.call(null,inst_87995);
var inst_87997 = cljs.core.count.call(null,inst_87996__$1);
var inst_87998 = cljs.core.reset_BANG_.call(null,dctr,inst_87997);
var inst_88003 = cljs.core.seq.call(null,inst_87996__$1);
var inst_88004 = inst_88003;
var inst_88005 = null;
var inst_88006 = (0);
var inst_88007 = (0);
var state_88064__$1 = (function (){var statearr_88107 = state_88064;
(statearr_88107[(20)] = inst_88006);

(statearr_88107[(21)] = inst_88004);

(statearr_88107[(30)] = inst_87998);

(statearr_88107[(29)] = inst_87996__$1);

(statearr_88107[(10)] = inst_88007);

(statearr_88107[(11)] = inst_88005);

return statearr_88107;
})();
var statearr_88108_88174 = state_88064__$1;
(statearr_88108_88174[(2)] = null);

(statearr_88108_88174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (28))){
var inst_88004 = (state_88064[(21)]);
var inst_88023 = (state_88064[(25)]);
var inst_88023__$1 = cljs.core.seq.call(null,inst_88004);
var state_88064__$1 = (function (){var statearr_88109 = state_88064;
(statearr_88109[(25)] = inst_88023__$1);

return statearr_88109;
})();
if(inst_88023__$1){
var statearr_88110_88175 = state_88064__$1;
(statearr_88110_88175[(1)] = (33));

} else {
var statearr_88111_88176 = state_88064__$1;
(statearr_88111_88176[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (25))){
var inst_88006 = (state_88064[(20)]);
var inst_88007 = (state_88064[(10)]);
var inst_88009 = (inst_88007 < inst_88006);
var inst_88010 = inst_88009;
var state_88064__$1 = state_88064;
if(cljs.core.truth_(inst_88010)){
var statearr_88112_88177 = state_88064__$1;
(statearr_88112_88177[(1)] = (27));

} else {
var statearr_88113_88178 = state_88064__$1;
(statearr_88113_88178[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (34))){
var state_88064__$1 = state_88064;
var statearr_88114_88179 = state_88064__$1;
(statearr_88114_88179[(2)] = null);

(statearr_88114_88179[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (17))){
var state_88064__$1 = state_88064;
var statearr_88115_88180 = state_88064__$1;
(statearr_88115_88180[(2)] = null);

(statearr_88115_88180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (3))){
var inst_88062 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88064__$1,inst_88062);
} else {
if((state_val_88065 === (12))){
var inst_87991 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88116_88181 = state_88064__$1;
(statearr_88116_88181[(2)] = inst_87991);

(statearr_88116_88181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (2))){
var state_88064__$1 = state_88064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88064__$1,(4),ch);
} else {
if((state_val_88065 === (23))){
var state_88064__$1 = state_88064;
var statearr_88117_88182 = state_88064__$1;
(statearr_88117_88182[(2)] = null);

(statearr_88117_88182[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (35))){
var inst_88046 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88118_88183 = state_88064__$1;
(statearr_88118_88183[(2)] = inst_88046);

(statearr_88118_88183[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (19))){
var inst_87963 = (state_88064[(7)]);
var inst_87967 = cljs.core.chunk_first.call(null,inst_87963);
var inst_87968 = cljs.core.chunk_rest.call(null,inst_87963);
var inst_87969 = cljs.core.count.call(null,inst_87967);
var inst_87941 = inst_87968;
var inst_87942 = inst_87967;
var inst_87943 = inst_87969;
var inst_87944 = (0);
var state_88064__$1 = (function (){var statearr_88119 = state_88064;
(statearr_88119[(13)] = inst_87943);

(statearr_88119[(14)] = inst_87942);

(statearr_88119[(15)] = inst_87941);

(statearr_88119[(16)] = inst_87944);

return statearr_88119;
})();
var statearr_88120_88184 = state_88064__$1;
(statearr_88120_88184[(2)] = null);

(statearr_88120_88184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (11))){
var inst_87963 = (state_88064[(7)]);
var inst_87941 = (state_88064[(15)]);
var inst_87963__$1 = cljs.core.seq.call(null,inst_87941);
var state_88064__$1 = (function (){var statearr_88121 = state_88064;
(statearr_88121[(7)] = inst_87963__$1);

return statearr_88121;
})();
if(inst_87963__$1){
var statearr_88122_88185 = state_88064__$1;
(statearr_88122_88185[(1)] = (16));

} else {
var statearr_88123_88186 = state_88064__$1;
(statearr_88123_88186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (9))){
var inst_87993 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88124_88187 = state_88064__$1;
(statearr_88124_88187[(2)] = inst_87993);

(statearr_88124_88187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (5))){
var inst_87939 = cljs.core.deref.call(null,cs);
var inst_87940 = cljs.core.seq.call(null,inst_87939);
var inst_87941 = inst_87940;
var inst_87942 = null;
var inst_87943 = (0);
var inst_87944 = (0);
var state_88064__$1 = (function (){var statearr_88125 = state_88064;
(statearr_88125[(13)] = inst_87943);

(statearr_88125[(14)] = inst_87942);

(statearr_88125[(15)] = inst_87941);

(statearr_88125[(16)] = inst_87944);

return statearr_88125;
})();
var statearr_88126_88188 = state_88064__$1;
(statearr_88126_88188[(2)] = null);

(statearr_88126_88188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (14))){
var state_88064__$1 = state_88064;
var statearr_88127_88189 = state_88064__$1;
(statearr_88127_88189[(2)] = null);

(statearr_88127_88189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (45))){
var inst_88054 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88128_88190 = state_88064__$1;
(statearr_88128_88190[(2)] = inst_88054);

(statearr_88128_88190[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (26))){
var inst_87996 = (state_88064[(29)]);
var inst_88050 = (state_88064[(2)]);
var inst_88051 = cljs.core.seq.call(null,inst_87996);
var state_88064__$1 = (function (){var statearr_88129 = state_88064;
(statearr_88129[(31)] = inst_88050);

return statearr_88129;
})();
if(inst_88051){
var statearr_88130_88191 = state_88064__$1;
(statearr_88130_88191[(1)] = (42));

} else {
var statearr_88131_88192 = state_88064__$1;
(statearr_88131_88192[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (16))){
var inst_87963 = (state_88064[(7)]);
var inst_87965 = cljs.core.chunked_seq_QMARK_.call(null,inst_87963);
var state_88064__$1 = state_88064;
if(inst_87965){
var statearr_88132_88193 = state_88064__$1;
(statearr_88132_88193[(1)] = (19));

} else {
var statearr_88133_88194 = state_88064__$1;
(statearr_88133_88194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (38))){
var inst_88043 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88134_88195 = state_88064__$1;
(statearr_88134_88195[(2)] = inst_88043);

(statearr_88134_88195[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (30))){
var state_88064__$1 = state_88064;
var statearr_88135_88196 = state_88064__$1;
(statearr_88135_88196[(2)] = null);

(statearr_88135_88196[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (10))){
var inst_87942 = (state_88064[(14)]);
var inst_87944 = (state_88064[(16)]);
var inst_87952 = cljs.core._nth.call(null,inst_87942,inst_87944);
var inst_87953 = cljs.core.nth.call(null,inst_87952,(0),null);
var inst_87954 = cljs.core.nth.call(null,inst_87952,(1),null);
var state_88064__$1 = (function (){var statearr_88136 = state_88064;
(statearr_88136[(26)] = inst_87953);

return statearr_88136;
})();
if(cljs.core.truth_(inst_87954)){
var statearr_88137_88197 = state_88064__$1;
(statearr_88137_88197[(1)] = (13));

} else {
var statearr_88138_88198 = state_88064__$1;
(statearr_88138_88198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (18))){
var inst_87989 = (state_88064[(2)]);
var state_88064__$1 = state_88064;
var statearr_88139_88199 = state_88064__$1;
(statearr_88139_88199[(2)] = inst_87989);

(statearr_88139_88199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (42))){
var state_88064__$1 = state_88064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88064__$1,(45),dchan);
} else {
if((state_val_88065 === (37))){
var inst_88032 = (state_88064[(23)]);
var inst_87932 = (state_88064[(9)]);
var inst_88023 = (state_88064[(25)]);
var inst_88032__$1 = cljs.core.first.call(null,inst_88023);
var inst_88033 = cljs.core.async.put_BANG_.call(null,inst_88032__$1,inst_87932,done);
var state_88064__$1 = (function (){var statearr_88140 = state_88064;
(statearr_88140[(23)] = inst_88032__$1);

return statearr_88140;
})();
if(cljs.core.truth_(inst_88033)){
var statearr_88141_88200 = state_88064__$1;
(statearr_88141_88200[(1)] = (39));

} else {
var statearr_88142_88201 = state_88064__$1;
(statearr_88142_88201[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88065 === (8))){
var inst_87943 = (state_88064[(13)]);
var inst_87944 = (state_88064[(16)]);
var inst_87946 = (inst_87944 < inst_87943);
var inst_87947 = inst_87946;
var state_88064__$1 = state_88064;
if(cljs.core.truth_(inst_87947)){
var statearr_88143_88202 = state_88064__$1;
(statearr_88143_88202[(1)] = (10));

} else {
var statearr_88144_88203 = state_88064__$1;
(statearr_88144_88203[(1)] = (11));

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
});})(c__62848__auto___88149,cs,m,dchan,dctr,done))
;
return ((function (switch__50623__auto__,c__62848__auto___88149,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50624__auto__ = null;
var cljs$core$async$mult_$_state_machine__50624__auto____0 = (function (){
var statearr_88145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88145[(0)] = cljs$core$async$mult_$_state_machine__50624__auto__);

(statearr_88145[(1)] = (1));

return statearr_88145;
});
var cljs$core$async$mult_$_state_machine__50624__auto____1 = (function (state_88064){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_88064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e88146){if((e88146 instanceof Object)){
var ex__50627__auto__ = e88146;
var statearr_88147_88204 = state_88064;
(statearr_88147_88204[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88205 = state_88064;
state_88064 = G__88205;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50624__auto__ = function(state_88064){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50624__auto____1.call(this,state_88064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50624__auto____0;
cljs$core$async$mult_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50624__auto____1;
return cljs$core$async$mult_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___88149,cs,m,dchan,dctr,done))
})();
var state__62850__auto__ = (function (){var statearr_88148 = f__62849__auto__.call(null);
(statearr_88148[(6)] = c__62848__auto___88149);

return statearr_88148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___88149,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__88207 = arguments.length;
switch (G__88207) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___88219 = arguments.length;
var i__4500__auto___88220 = (0);
while(true){
if((i__4500__auto___88220 < len__4499__auto___88219)){
args__4502__auto__.push((arguments[i__4500__auto___88220]));

var G__88221 = (i__4500__auto___88220 + (1));
i__4500__auto___88220 = G__88221;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__88213){
var map__88214 = p__88213;
var map__88214__$1 = ((((!((map__88214 == null)))?(((((map__88214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88214):map__88214);
var opts = map__88214__$1;
var statearr_88216_88222 = state;
(statearr_88216_88222[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__88214,map__88214__$1,opts){
return (function (val){
var statearr_88217_88223 = state;
(statearr_88217_88223[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__88214,map__88214__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_88218_88224 = state;
(statearr_88218_88224[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq88209){
var G__88210 = cljs.core.first.call(null,seq88209);
var seq88209__$1 = cljs.core.next.call(null,seq88209);
var G__88211 = cljs.core.first.call(null,seq88209__$1);
var seq88209__$2 = cljs.core.next.call(null,seq88209__$1);
var G__88212 = cljs.core.first.call(null,seq88209__$2);
var seq88209__$3 = cljs.core.next.call(null,seq88209__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88210,G__88211,G__88212,seq88209__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async88225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88225 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta88226){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta88226 = meta88226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_88227,meta88226__$1){
var self__ = this;
var _88227__$1 = this;
return (new cljs.core.async.t_cljs$core$async88225(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta88226__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_88227){
var self__ = this;
var _88227__$1 = this;
return self__.meta88226;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta88226","meta88226",278170063,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async88225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88225";

cljs.core.async.t_cljs$core$async88225.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async88225");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async88225.
 */
cljs.core.async.__GT_t_cljs$core$async88225 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async88225(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta88226){
return (new cljs.core.async.t_cljs$core$async88225(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta88226));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async88225(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62848__auto___88389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___88389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___88389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_88329){
var state_val_88330 = (state_88329[(1)]);
if((state_val_88330 === (7))){
var inst_88244 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
var statearr_88331_88390 = state_88329__$1;
(statearr_88331_88390[(2)] = inst_88244);

(statearr_88331_88390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (20))){
var inst_88256 = (state_88329[(7)]);
var state_88329__$1 = state_88329;
var statearr_88332_88391 = state_88329__$1;
(statearr_88332_88391[(2)] = inst_88256);

(statearr_88332_88391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (27))){
var state_88329__$1 = state_88329;
var statearr_88333_88392 = state_88329__$1;
(statearr_88333_88392[(2)] = null);

(statearr_88333_88392[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (1))){
var inst_88231 = (state_88329[(8)]);
var inst_88231__$1 = calc_state.call(null);
var inst_88233 = (inst_88231__$1 == null);
var inst_88234 = cljs.core.not.call(null,inst_88233);
var state_88329__$1 = (function (){var statearr_88334 = state_88329;
(statearr_88334[(8)] = inst_88231__$1);

return statearr_88334;
})();
if(inst_88234){
var statearr_88335_88393 = state_88329__$1;
(statearr_88335_88393[(1)] = (2));

} else {
var statearr_88336_88394 = state_88329__$1;
(statearr_88336_88394[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (24))){
var inst_88303 = (state_88329[(9)]);
var inst_88280 = (state_88329[(10)]);
var inst_88289 = (state_88329[(11)]);
var inst_88303__$1 = inst_88280.call(null,inst_88289);
var state_88329__$1 = (function (){var statearr_88337 = state_88329;
(statearr_88337[(9)] = inst_88303__$1);

return statearr_88337;
})();
if(cljs.core.truth_(inst_88303__$1)){
var statearr_88338_88395 = state_88329__$1;
(statearr_88338_88395[(1)] = (29));

} else {
var statearr_88339_88396 = state_88329__$1;
(statearr_88339_88396[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (4))){
var inst_88247 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88247)){
var statearr_88340_88397 = state_88329__$1;
(statearr_88340_88397[(1)] = (8));

} else {
var statearr_88341_88398 = state_88329__$1;
(statearr_88341_88398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (15))){
var inst_88274 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88274)){
var statearr_88342_88399 = state_88329__$1;
(statearr_88342_88399[(1)] = (19));

} else {
var statearr_88343_88400 = state_88329__$1;
(statearr_88343_88400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (21))){
var inst_88279 = (state_88329[(12)]);
var inst_88279__$1 = (state_88329[(2)]);
var inst_88280 = cljs.core.get.call(null,inst_88279__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_88281 = cljs.core.get.call(null,inst_88279__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_88282 = cljs.core.get.call(null,inst_88279__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_88329__$1 = (function (){var statearr_88344 = state_88329;
(statearr_88344[(10)] = inst_88280);

(statearr_88344[(13)] = inst_88281);

(statearr_88344[(12)] = inst_88279__$1);

return statearr_88344;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_88329__$1,(22),inst_88282);
} else {
if((state_val_88330 === (31))){
var inst_88311 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88311)){
var statearr_88345_88401 = state_88329__$1;
(statearr_88345_88401[(1)] = (32));

} else {
var statearr_88346_88402 = state_88329__$1;
(statearr_88346_88402[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (32))){
var inst_88288 = (state_88329[(14)]);
var state_88329__$1 = state_88329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88329__$1,(35),out,inst_88288);
} else {
if((state_val_88330 === (33))){
var inst_88279 = (state_88329[(12)]);
var inst_88256 = inst_88279;
var state_88329__$1 = (function (){var statearr_88347 = state_88329;
(statearr_88347[(7)] = inst_88256);

return statearr_88347;
})();
var statearr_88348_88403 = state_88329__$1;
(statearr_88348_88403[(2)] = null);

(statearr_88348_88403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (13))){
var inst_88256 = (state_88329[(7)]);
var inst_88263 = inst_88256.cljs$lang$protocol_mask$partition0$;
var inst_88264 = (inst_88263 & (64));
var inst_88265 = inst_88256.cljs$core$ISeq$;
var inst_88266 = (cljs.core.PROTOCOL_SENTINEL === inst_88265);
var inst_88267 = ((inst_88264) || (inst_88266));
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88267)){
var statearr_88349_88404 = state_88329__$1;
(statearr_88349_88404[(1)] = (16));

} else {
var statearr_88350_88405 = state_88329__$1;
(statearr_88350_88405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (22))){
var inst_88288 = (state_88329[(14)]);
var inst_88289 = (state_88329[(11)]);
var inst_88287 = (state_88329[(2)]);
var inst_88288__$1 = cljs.core.nth.call(null,inst_88287,(0),null);
var inst_88289__$1 = cljs.core.nth.call(null,inst_88287,(1),null);
var inst_88290 = (inst_88288__$1 == null);
var inst_88291 = cljs.core._EQ_.call(null,inst_88289__$1,change);
var inst_88292 = ((inst_88290) || (inst_88291));
var state_88329__$1 = (function (){var statearr_88351 = state_88329;
(statearr_88351[(14)] = inst_88288__$1);

(statearr_88351[(11)] = inst_88289__$1);

return statearr_88351;
})();
if(cljs.core.truth_(inst_88292)){
var statearr_88352_88406 = state_88329__$1;
(statearr_88352_88406[(1)] = (23));

} else {
var statearr_88353_88407 = state_88329__$1;
(statearr_88353_88407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (36))){
var inst_88279 = (state_88329[(12)]);
var inst_88256 = inst_88279;
var state_88329__$1 = (function (){var statearr_88354 = state_88329;
(statearr_88354[(7)] = inst_88256);

return statearr_88354;
})();
var statearr_88355_88408 = state_88329__$1;
(statearr_88355_88408[(2)] = null);

(statearr_88355_88408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (29))){
var inst_88303 = (state_88329[(9)]);
var state_88329__$1 = state_88329;
var statearr_88356_88409 = state_88329__$1;
(statearr_88356_88409[(2)] = inst_88303);

(statearr_88356_88409[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (6))){
var state_88329__$1 = state_88329;
var statearr_88357_88410 = state_88329__$1;
(statearr_88357_88410[(2)] = false);

(statearr_88357_88410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (28))){
var inst_88299 = (state_88329[(2)]);
var inst_88300 = calc_state.call(null);
var inst_88256 = inst_88300;
var state_88329__$1 = (function (){var statearr_88358 = state_88329;
(statearr_88358[(7)] = inst_88256);

(statearr_88358[(15)] = inst_88299);

return statearr_88358;
})();
var statearr_88359_88411 = state_88329__$1;
(statearr_88359_88411[(2)] = null);

(statearr_88359_88411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (25))){
var inst_88325 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
var statearr_88360_88412 = state_88329__$1;
(statearr_88360_88412[(2)] = inst_88325);

(statearr_88360_88412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (34))){
var inst_88323 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
var statearr_88361_88413 = state_88329__$1;
(statearr_88361_88413[(2)] = inst_88323);

(statearr_88361_88413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (17))){
var state_88329__$1 = state_88329;
var statearr_88362_88414 = state_88329__$1;
(statearr_88362_88414[(2)] = false);

(statearr_88362_88414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (3))){
var state_88329__$1 = state_88329;
var statearr_88363_88415 = state_88329__$1;
(statearr_88363_88415[(2)] = false);

(statearr_88363_88415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (12))){
var inst_88327 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88329__$1,inst_88327);
} else {
if((state_val_88330 === (2))){
var inst_88231 = (state_88329[(8)]);
var inst_88236 = inst_88231.cljs$lang$protocol_mask$partition0$;
var inst_88237 = (inst_88236 & (64));
var inst_88238 = inst_88231.cljs$core$ISeq$;
var inst_88239 = (cljs.core.PROTOCOL_SENTINEL === inst_88238);
var inst_88240 = ((inst_88237) || (inst_88239));
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88240)){
var statearr_88364_88416 = state_88329__$1;
(statearr_88364_88416[(1)] = (5));

} else {
var statearr_88365_88417 = state_88329__$1;
(statearr_88365_88417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (23))){
var inst_88288 = (state_88329[(14)]);
var inst_88294 = (inst_88288 == null);
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88294)){
var statearr_88366_88418 = state_88329__$1;
(statearr_88366_88418[(1)] = (26));

} else {
var statearr_88367_88419 = state_88329__$1;
(statearr_88367_88419[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (35))){
var inst_88314 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88314)){
var statearr_88368_88420 = state_88329__$1;
(statearr_88368_88420[(1)] = (36));

} else {
var statearr_88369_88421 = state_88329__$1;
(statearr_88369_88421[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (19))){
var inst_88256 = (state_88329[(7)]);
var inst_88276 = cljs.core.apply.call(null,cljs.core.hash_map,inst_88256);
var state_88329__$1 = state_88329;
var statearr_88370_88422 = state_88329__$1;
(statearr_88370_88422[(2)] = inst_88276);

(statearr_88370_88422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (11))){
var inst_88256 = (state_88329[(7)]);
var inst_88260 = (inst_88256 == null);
var inst_88261 = cljs.core.not.call(null,inst_88260);
var state_88329__$1 = state_88329;
if(inst_88261){
var statearr_88371_88423 = state_88329__$1;
(statearr_88371_88423[(1)] = (13));

} else {
var statearr_88372_88424 = state_88329__$1;
(statearr_88372_88424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (9))){
var inst_88231 = (state_88329[(8)]);
var state_88329__$1 = state_88329;
var statearr_88373_88425 = state_88329__$1;
(statearr_88373_88425[(2)] = inst_88231);

(statearr_88373_88425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (5))){
var state_88329__$1 = state_88329;
var statearr_88374_88426 = state_88329__$1;
(statearr_88374_88426[(2)] = true);

(statearr_88374_88426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (14))){
var state_88329__$1 = state_88329;
var statearr_88375_88427 = state_88329__$1;
(statearr_88375_88427[(2)] = false);

(statearr_88375_88427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (26))){
var inst_88289 = (state_88329[(11)]);
var inst_88296 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_88289);
var state_88329__$1 = state_88329;
var statearr_88376_88428 = state_88329__$1;
(statearr_88376_88428[(2)] = inst_88296);

(statearr_88376_88428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (16))){
var state_88329__$1 = state_88329;
var statearr_88377_88429 = state_88329__$1;
(statearr_88377_88429[(2)] = true);

(statearr_88377_88429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (38))){
var inst_88319 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
var statearr_88378_88430 = state_88329__$1;
(statearr_88378_88430[(2)] = inst_88319);

(statearr_88378_88430[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (30))){
var inst_88280 = (state_88329[(10)]);
var inst_88289 = (state_88329[(11)]);
var inst_88281 = (state_88329[(13)]);
var inst_88306 = cljs.core.empty_QMARK_.call(null,inst_88280);
var inst_88307 = inst_88281.call(null,inst_88289);
var inst_88308 = cljs.core.not.call(null,inst_88307);
var inst_88309 = ((inst_88306) && (inst_88308));
var state_88329__$1 = state_88329;
var statearr_88379_88431 = state_88329__$1;
(statearr_88379_88431[(2)] = inst_88309);

(statearr_88379_88431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (10))){
var inst_88231 = (state_88329[(8)]);
var inst_88252 = (state_88329[(2)]);
var inst_88253 = cljs.core.get.call(null,inst_88252,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_88254 = cljs.core.get.call(null,inst_88252,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_88255 = cljs.core.get.call(null,inst_88252,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_88256 = inst_88231;
var state_88329__$1 = (function (){var statearr_88380 = state_88329;
(statearr_88380[(16)] = inst_88254);

(statearr_88380[(17)] = inst_88253);

(statearr_88380[(7)] = inst_88256);

(statearr_88380[(18)] = inst_88255);

return statearr_88380;
})();
var statearr_88381_88432 = state_88329__$1;
(statearr_88381_88432[(2)] = null);

(statearr_88381_88432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (18))){
var inst_88271 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
var statearr_88382_88433 = state_88329__$1;
(statearr_88382_88433[(2)] = inst_88271);

(statearr_88382_88433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (37))){
var state_88329__$1 = state_88329;
var statearr_88383_88434 = state_88329__$1;
(statearr_88383_88434[(2)] = null);

(statearr_88383_88434[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (8))){
var inst_88231 = (state_88329[(8)]);
var inst_88249 = cljs.core.apply.call(null,cljs.core.hash_map,inst_88231);
var state_88329__$1 = state_88329;
var statearr_88384_88435 = state_88329__$1;
(statearr_88384_88435[(2)] = inst_88249);

(statearr_88384_88435[(1)] = (10));


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
});})(c__62848__auto___88389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50623__auto__,c__62848__auto___88389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50624__auto__ = null;
var cljs$core$async$mix_$_state_machine__50624__auto____0 = (function (){
var statearr_88385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88385[(0)] = cljs$core$async$mix_$_state_machine__50624__auto__);

(statearr_88385[(1)] = (1));

return statearr_88385;
});
var cljs$core$async$mix_$_state_machine__50624__auto____1 = (function (state_88329){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_88329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e88386){if((e88386 instanceof Object)){
var ex__50627__auto__ = e88386;
var statearr_88387_88436 = state_88329;
(statearr_88387_88436[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88437 = state_88329;
state_88329 = G__88437;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50624__auto__ = function(state_88329){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50624__auto____1.call(this,state_88329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50624__auto____0;
cljs$core$async$mix_$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50624__auto____1;
return cljs$core$async$mix_$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___88389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__62850__auto__ = (function (){var statearr_88388 = f__62849__auto__.call(null);
(statearr_88388[(6)] = c__62848__auto___88389);

return statearr_88388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___88389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__88439 = arguments.length;
switch (G__88439) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__88443 = arguments.length;
switch (G__88443) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__88441_SHARP_){
if(cljs.core.truth_(p1__88441_SHARP_.call(null,topic))){
return p1__88441_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__88441_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async88444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88444 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta88445){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta88445 = meta88445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_88446,meta88445__$1){
var self__ = this;
var _88446__$1 = this;
return (new cljs.core.async.t_cljs$core$async88444(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta88445__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_88446){
var self__ = this;
var _88446__$1 = this;
return self__.meta88445;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async88444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async88444.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta88445","meta88445",-1527109737,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async88444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88444";

cljs.core.async.t_cljs$core$async88444.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async88444");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async88444.
 */
cljs.core.async.__GT_t_cljs$core$async88444 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async88444(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta88445){
return (new cljs.core.async.t_cljs$core$async88444(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta88445));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async88444(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62848__auto___88564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___88564,mults,ensure_mult,p){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___88564,mults,ensure_mult,p){
return (function (state_88518){
var state_val_88519 = (state_88518[(1)]);
if((state_val_88519 === (7))){
var inst_88514 = (state_88518[(2)]);
var state_88518__$1 = state_88518;
var statearr_88520_88565 = state_88518__$1;
(statearr_88520_88565[(2)] = inst_88514);

(statearr_88520_88565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (20))){
var state_88518__$1 = state_88518;
var statearr_88521_88566 = state_88518__$1;
(statearr_88521_88566[(2)] = null);

(statearr_88521_88566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (1))){
var state_88518__$1 = state_88518;
var statearr_88522_88567 = state_88518__$1;
(statearr_88522_88567[(2)] = null);

(statearr_88522_88567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (24))){
var inst_88497 = (state_88518[(7)]);
var inst_88506 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_88497);
var state_88518__$1 = state_88518;
var statearr_88523_88568 = state_88518__$1;
(statearr_88523_88568[(2)] = inst_88506);

(statearr_88523_88568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (4))){
var inst_88449 = (state_88518[(8)]);
var inst_88449__$1 = (state_88518[(2)]);
var inst_88450 = (inst_88449__$1 == null);
var state_88518__$1 = (function (){var statearr_88524 = state_88518;
(statearr_88524[(8)] = inst_88449__$1);

return statearr_88524;
})();
if(cljs.core.truth_(inst_88450)){
var statearr_88525_88569 = state_88518__$1;
(statearr_88525_88569[(1)] = (5));

} else {
var statearr_88526_88570 = state_88518__$1;
(statearr_88526_88570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (15))){
var inst_88491 = (state_88518[(2)]);
var state_88518__$1 = state_88518;
var statearr_88527_88571 = state_88518__$1;
(statearr_88527_88571[(2)] = inst_88491);

(statearr_88527_88571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (21))){
var inst_88511 = (state_88518[(2)]);
var state_88518__$1 = (function (){var statearr_88528 = state_88518;
(statearr_88528[(9)] = inst_88511);

return statearr_88528;
})();
var statearr_88529_88572 = state_88518__$1;
(statearr_88529_88572[(2)] = null);

(statearr_88529_88572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (13))){
var inst_88473 = (state_88518[(10)]);
var inst_88475 = cljs.core.chunked_seq_QMARK_.call(null,inst_88473);
var state_88518__$1 = state_88518;
if(inst_88475){
var statearr_88530_88573 = state_88518__$1;
(statearr_88530_88573[(1)] = (16));

} else {
var statearr_88531_88574 = state_88518__$1;
(statearr_88531_88574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (22))){
var inst_88503 = (state_88518[(2)]);
var state_88518__$1 = state_88518;
if(cljs.core.truth_(inst_88503)){
var statearr_88532_88575 = state_88518__$1;
(statearr_88532_88575[(1)] = (23));

} else {
var statearr_88533_88576 = state_88518__$1;
(statearr_88533_88576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (6))){
var inst_88449 = (state_88518[(8)]);
var inst_88497 = (state_88518[(7)]);
var inst_88499 = (state_88518[(11)]);
var inst_88497__$1 = topic_fn.call(null,inst_88449);
var inst_88498 = cljs.core.deref.call(null,mults);
var inst_88499__$1 = cljs.core.get.call(null,inst_88498,inst_88497__$1);
var state_88518__$1 = (function (){var statearr_88534 = state_88518;
(statearr_88534[(7)] = inst_88497__$1);

(statearr_88534[(11)] = inst_88499__$1);

return statearr_88534;
})();
if(cljs.core.truth_(inst_88499__$1)){
var statearr_88535_88577 = state_88518__$1;
(statearr_88535_88577[(1)] = (19));

} else {
var statearr_88536_88578 = state_88518__$1;
(statearr_88536_88578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (25))){
var inst_88508 = (state_88518[(2)]);
var state_88518__$1 = state_88518;
var statearr_88537_88579 = state_88518__$1;
(statearr_88537_88579[(2)] = inst_88508);

(statearr_88537_88579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (17))){
var inst_88473 = (state_88518[(10)]);
var inst_88482 = cljs.core.first.call(null,inst_88473);
var inst_88483 = cljs.core.async.muxch_STAR_.call(null,inst_88482);
var inst_88484 = cljs.core.async.close_BANG_.call(null,inst_88483);
var inst_88485 = cljs.core.next.call(null,inst_88473);
var inst_88459 = inst_88485;
var inst_88460 = null;
var inst_88461 = (0);
var inst_88462 = (0);
var state_88518__$1 = (function (){var statearr_88538 = state_88518;
(statearr_88538[(12)] = inst_88461);

(statearr_88538[(13)] = inst_88462);

(statearr_88538[(14)] = inst_88484);

(statearr_88538[(15)] = inst_88459);

(statearr_88538[(16)] = inst_88460);

return statearr_88538;
})();
var statearr_88539_88580 = state_88518__$1;
(statearr_88539_88580[(2)] = null);

(statearr_88539_88580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (3))){
var inst_88516 = (state_88518[(2)]);
var state_88518__$1 = state_88518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88518__$1,inst_88516);
} else {
if((state_val_88519 === (12))){
var inst_88493 = (state_88518[(2)]);
var state_88518__$1 = state_88518;
var statearr_88540_88581 = state_88518__$1;
(statearr_88540_88581[(2)] = inst_88493);

(statearr_88540_88581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (2))){
var state_88518__$1 = state_88518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88518__$1,(4),ch);
} else {
if((state_val_88519 === (23))){
var state_88518__$1 = state_88518;
var statearr_88541_88582 = state_88518__$1;
(statearr_88541_88582[(2)] = null);

(statearr_88541_88582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (19))){
var inst_88449 = (state_88518[(8)]);
var inst_88499 = (state_88518[(11)]);
var inst_88501 = cljs.core.async.muxch_STAR_.call(null,inst_88499);
var state_88518__$1 = state_88518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88518__$1,(22),inst_88501,inst_88449);
} else {
if((state_val_88519 === (11))){
var inst_88473 = (state_88518[(10)]);
var inst_88459 = (state_88518[(15)]);
var inst_88473__$1 = cljs.core.seq.call(null,inst_88459);
var state_88518__$1 = (function (){var statearr_88542 = state_88518;
(statearr_88542[(10)] = inst_88473__$1);

return statearr_88542;
})();
if(inst_88473__$1){
var statearr_88543_88583 = state_88518__$1;
(statearr_88543_88583[(1)] = (13));

} else {
var statearr_88544_88584 = state_88518__$1;
(statearr_88544_88584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (9))){
var inst_88495 = (state_88518[(2)]);
var state_88518__$1 = state_88518;
var statearr_88545_88585 = state_88518__$1;
(statearr_88545_88585[(2)] = inst_88495);

(statearr_88545_88585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (5))){
var inst_88456 = cljs.core.deref.call(null,mults);
var inst_88457 = cljs.core.vals.call(null,inst_88456);
var inst_88458 = cljs.core.seq.call(null,inst_88457);
var inst_88459 = inst_88458;
var inst_88460 = null;
var inst_88461 = (0);
var inst_88462 = (0);
var state_88518__$1 = (function (){var statearr_88546 = state_88518;
(statearr_88546[(12)] = inst_88461);

(statearr_88546[(13)] = inst_88462);

(statearr_88546[(15)] = inst_88459);

(statearr_88546[(16)] = inst_88460);

return statearr_88546;
})();
var statearr_88547_88586 = state_88518__$1;
(statearr_88547_88586[(2)] = null);

(statearr_88547_88586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (14))){
var state_88518__$1 = state_88518;
var statearr_88551_88587 = state_88518__$1;
(statearr_88551_88587[(2)] = null);

(statearr_88551_88587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (16))){
var inst_88473 = (state_88518[(10)]);
var inst_88477 = cljs.core.chunk_first.call(null,inst_88473);
var inst_88478 = cljs.core.chunk_rest.call(null,inst_88473);
var inst_88479 = cljs.core.count.call(null,inst_88477);
var inst_88459 = inst_88478;
var inst_88460 = inst_88477;
var inst_88461 = inst_88479;
var inst_88462 = (0);
var state_88518__$1 = (function (){var statearr_88552 = state_88518;
(statearr_88552[(12)] = inst_88461);

(statearr_88552[(13)] = inst_88462);

(statearr_88552[(15)] = inst_88459);

(statearr_88552[(16)] = inst_88460);

return statearr_88552;
})();
var statearr_88553_88588 = state_88518__$1;
(statearr_88553_88588[(2)] = null);

(statearr_88553_88588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (10))){
var inst_88461 = (state_88518[(12)]);
var inst_88462 = (state_88518[(13)]);
var inst_88459 = (state_88518[(15)]);
var inst_88460 = (state_88518[(16)]);
var inst_88467 = cljs.core._nth.call(null,inst_88460,inst_88462);
var inst_88468 = cljs.core.async.muxch_STAR_.call(null,inst_88467);
var inst_88469 = cljs.core.async.close_BANG_.call(null,inst_88468);
var inst_88470 = (inst_88462 + (1));
var tmp88548 = inst_88461;
var tmp88549 = inst_88459;
var tmp88550 = inst_88460;
var inst_88459__$1 = tmp88549;
var inst_88460__$1 = tmp88550;
var inst_88461__$1 = tmp88548;
var inst_88462__$1 = inst_88470;
var state_88518__$1 = (function (){var statearr_88554 = state_88518;
(statearr_88554[(12)] = inst_88461__$1);

(statearr_88554[(13)] = inst_88462__$1);

(statearr_88554[(15)] = inst_88459__$1);

(statearr_88554[(17)] = inst_88469);

(statearr_88554[(16)] = inst_88460__$1);

return statearr_88554;
})();
var statearr_88555_88589 = state_88518__$1;
(statearr_88555_88589[(2)] = null);

(statearr_88555_88589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (18))){
var inst_88488 = (state_88518[(2)]);
var state_88518__$1 = state_88518;
var statearr_88556_88590 = state_88518__$1;
(statearr_88556_88590[(2)] = inst_88488);

(statearr_88556_88590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88519 === (8))){
var inst_88461 = (state_88518[(12)]);
var inst_88462 = (state_88518[(13)]);
var inst_88464 = (inst_88462 < inst_88461);
var inst_88465 = inst_88464;
var state_88518__$1 = state_88518;
if(cljs.core.truth_(inst_88465)){
var statearr_88557_88591 = state_88518__$1;
(statearr_88557_88591[(1)] = (10));

} else {
var statearr_88558_88592 = state_88518__$1;
(statearr_88558_88592[(1)] = (11));

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
});})(c__62848__auto___88564,mults,ensure_mult,p))
;
return ((function (switch__50623__auto__,c__62848__auto___88564,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_88559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88559[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_88559[(1)] = (1));

return statearr_88559;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_88518){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_88518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e88560){if((e88560 instanceof Object)){
var ex__50627__auto__ = e88560;
var statearr_88561_88593 = state_88518;
(statearr_88561_88593[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88594 = state_88518;
state_88518 = G__88594;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_88518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_88518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___88564,mults,ensure_mult,p))
})();
var state__62850__auto__ = (function (){var statearr_88562 = f__62849__auto__.call(null);
(statearr_88562[(6)] = c__62848__auto___88564);

return statearr_88562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___88564,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__88596 = arguments.length;
switch (G__88596) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__88599 = arguments.length;
switch (G__88599) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__88602 = arguments.length;
switch (G__88602) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__62848__auto___88669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___88669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___88669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_88641){
var state_val_88642 = (state_88641[(1)]);
if((state_val_88642 === (7))){
var state_88641__$1 = state_88641;
var statearr_88643_88670 = state_88641__$1;
(statearr_88643_88670[(2)] = null);

(statearr_88643_88670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (1))){
var state_88641__$1 = state_88641;
var statearr_88644_88671 = state_88641__$1;
(statearr_88644_88671[(2)] = null);

(statearr_88644_88671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (4))){
var inst_88605 = (state_88641[(7)]);
var inst_88607 = (inst_88605 < cnt);
var state_88641__$1 = state_88641;
if(cljs.core.truth_(inst_88607)){
var statearr_88645_88672 = state_88641__$1;
(statearr_88645_88672[(1)] = (6));

} else {
var statearr_88646_88673 = state_88641__$1;
(statearr_88646_88673[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (15))){
var inst_88637 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
var statearr_88647_88674 = state_88641__$1;
(statearr_88647_88674[(2)] = inst_88637);

(statearr_88647_88674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (13))){
var inst_88630 = cljs.core.async.close_BANG_.call(null,out);
var state_88641__$1 = state_88641;
var statearr_88648_88675 = state_88641__$1;
(statearr_88648_88675[(2)] = inst_88630);

(statearr_88648_88675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (6))){
var state_88641__$1 = state_88641;
var statearr_88649_88676 = state_88641__$1;
(statearr_88649_88676[(2)] = null);

(statearr_88649_88676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (3))){
var inst_88639 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88641__$1,inst_88639);
} else {
if((state_val_88642 === (12))){
var inst_88627 = (state_88641[(8)]);
var inst_88627__$1 = (state_88641[(2)]);
var inst_88628 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_88627__$1);
var state_88641__$1 = (function (){var statearr_88650 = state_88641;
(statearr_88650[(8)] = inst_88627__$1);

return statearr_88650;
})();
if(cljs.core.truth_(inst_88628)){
var statearr_88651_88677 = state_88641__$1;
(statearr_88651_88677[(1)] = (13));

} else {
var statearr_88652_88678 = state_88641__$1;
(statearr_88652_88678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (2))){
var inst_88604 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_88605 = (0);
var state_88641__$1 = (function (){var statearr_88653 = state_88641;
(statearr_88653[(9)] = inst_88604);

(statearr_88653[(7)] = inst_88605);

return statearr_88653;
})();
var statearr_88654_88679 = state_88641__$1;
(statearr_88654_88679[(2)] = null);

(statearr_88654_88679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (11))){
var inst_88605 = (state_88641[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_88641,(10),Object,null,(9));
var inst_88614 = chs__$1.call(null,inst_88605);
var inst_88615 = done.call(null,inst_88605);
var inst_88616 = cljs.core.async.take_BANG_.call(null,inst_88614,inst_88615);
var state_88641__$1 = state_88641;
var statearr_88655_88680 = state_88641__$1;
(statearr_88655_88680[(2)] = inst_88616);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88641__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (9))){
var inst_88605 = (state_88641[(7)]);
var inst_88618 = (state_88641[(2)]);
var inst_88619 = (inst_88605 + (1));
var inst_88605__$1 = inst_88619;
var state_88641__$1 = (function (){var statearr_88656 = state_88641;
(statearr_88656[(10)] = inst_88618);

(statearr_88656[(7)] = inst_88605__$1);

return statearr_88656;
})();
var statearr_88657_88681 = state_88641__$1;
(statearr_88657_88681[(2)] = null);

(statearr_88657_88681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (5))){
var inst_88625 = (state_88641[(2)]);
var state_88641__$1 = (function (){var statearr_88658 = state_88641;
(statearr_88658[(11)] = inst_88625);

return statearr_88658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88641__$1,(12),dchan);
} else {
if((state_val_88642 === (14))){
var inst_88627 = (state_88641[(8)]);
var inst_88632 = cljs.core.apply.call(null,f,inst_88627);
var state_88641__$1 = state_88641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88641__$1,(16),out,inst_88632);
} else {
if((state_val_88642 === (16))){
var inst_88634 = (state_88641[(2)]);
var state_88641__$1 = (function (){var statearr_88659 = state_88641;
(statearr_88659[(12)] = inst_88634);

return statearr_88659;
})();
var statearr_88660_88682 = state_88641__$1;
(statearr_88660_88682[(2)] = null);

(statearr_88660_88682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (10))){
var inst_88609 = (state_88641[(2)]);
var inst_88610 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_88641__$1 = (function (){var statearr_88661 = state_88641;
(statearr_88661[(13)] = inst_88609);

return statearr_88661;
})();
var statearr_88662_88683 = state_88641__$1;
(statearr_88662_88683[(2)] = inst_88610);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88641__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88642 === (8))){
var inst_88623 = (state_88641[(2)]);
var state_88641__$1 = state_88641;
var statearr_88663_88684 = state_88641__$1;
(statearr_88663_88684[(2)] = inst_88623);

(statearr_88663_88684[(1)] = (5));


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
});})(c__62848__auto___88669,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50623__auto__,c__62848__auto___88669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_88664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88664[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_88664[(1)] = (1));

return statearr_88664;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_88641){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_88641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e88665){if((e88665 instanceof Object)){
var ex__50627__auto__ = e88665;
var statearr_88666_88685 = state_88641;
(statearr_88666_88685[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88686 = state_88641;
state_88641 = G__88686;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_88641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_88641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___88669,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__62850__auto__ = (function (){var statearr_88667 = f__62849__auto__.call(null);
(statearr_88667[(6)] = c__62848__auto___88669);

return statearr_88667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___88669,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__88689 = arguments.length;
switch (G__88689) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__62848__auto___88743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___88743,out){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___88743,out){
return (function (state_88721){
var state_val_88722 = (state_88721[(1)]);
if((state_val_88722 === (7))){
var inst_88700 = (state_88721[(7)]);
var inst_88701 = (state_88721[(8)]);
var inst_88700__$1 = (state_88721[(2)]);
var inst_88701__$1 = cljs.core.nth.call(null,inst_88700__$1,(0),null);
var inst_88702 = cljs.core.nth.call(null,inst_88700__$1,(1),null);
var inst_88703 = (inst_88701__$1 == null);
var state_88721__$1 = (function (){var statearr_88723 = state_88721;
(statearr_88723[(7)] = inst_88700__$1);

(statearr_88723[(8)] = inst_88701__$1);

(statearr_88723[(9)] = inst_88702);

return statearr_88723;
})();
if(cljs.core.truth_(inst_88703)){
var statearr_88724_88744 = state_88721__$1;
(statearr_88724_88744[(1)] = (8));

} else {
var statearr_88725_88745 = state_88721__$1;
(statearr_88725_88745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88722 === (1))){
var inst_88690 = cljs.core.vec.call(null,chs);
var inst_88691 = inst_88690;
var state_88721__$1 = (function (){var statearr_88726 = state_88721;
(statearr_88726[(10)] = inst_88691);

return statearr_88726;
})();
var statearr_88727_88746 = state_88721__$1;
(statearr_88727_88746[(2)] = null);

(statearr_88727_88746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88722 === (4))){
var inst_88691 = (state_88721[(10)]);
var state_88721__$1 = state_88721;
return cljs.core.async.ioc_alts_BANG_.call(null,state_88721__$1,(7),inst_88691);
} else {
if((state_val_88722 === (6))){
var inst_88717 = (state_88721[(2)]);
var state_88721__$1 = state_88721;
var statearr_88728_88747 = state_88721__$1;
(statearr_88728_88747[(2)] = inst_88717);

(statearr_88728_88747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88722 === (3))){
var inst_88719 = (state_88721[(2)]);
var state_88721__$1 = state_88721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88721__$1,inst_88719);
} else {
if((state_val_88722 === (2))){
var inst_88691 = (state_88721[(10)]);
var inst_88693 = cljs.core.count.call(null,inst_88691);
var inst_88694 = (inst_88693 > (0));
var state_88721__$1 = state_88721;
if(cljs.core.truth_(inst_88694)){
var statearr_88730_88748 = state_88721__$1;
(statearr_88730_88748[(1)] = (4));

} else {
var statearr_88731_88749 = state_88721__$1;
(statearr_88731_88749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88722 === (11))){
var inst_88691 = (state_88721[(10)]);
var inst_88710 = (state_88721[(2)]);
var tmp88729 = inst_88691;
var inst_88691__$1 = tmp88729;
var state_88721__$1 = (function (){var statearr_88732 = state_88721;
(statearr_88732[(10)] = inst_88691__$1);

(statearr_88732[(11)] = inst_88710);

return statearr_88732;
})();
var statearr_88733_88750 = state_88721__$1;
(statearr_88733_88750[(2)] = null);

(statearr_88733_88750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88722 === (9))){
var inst_88701 = (state_88721[(8)]);
var state_88721__$1 = state_88721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88721__$1,(11),out,inst_88701);
} else {
if((state_val_88722 === (5))){
var inst_88715 = cljs.core.async.close_BANG_.call(null,out);
var state_88721__$1 = state_88721;
var statearr_88734_88751 = state_88721__$1;
(statearr_88734_88751[(2)] = inst_88715);

(statearr_88734_88751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88722 === (10))){
var inst_88713 = (state_88721[(2)]);
var state_88721__$1 = state_88721;
var statearr_88735_88752 = state_88721__$1;
(statearr_88735_88752[(2)] = inst_88713);

(statearr_88735_88752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88722 === (8))){
var inst_88700 = (state_88721[(7)]);
var inst_88691 = (state_88721[(10)]);
var inst_88701 = (state_88721[(8)]);
var inst_88702 = (state_88721[(9)]);
var inst_88705 = (function (){var cs = inst_88691;
var vec__88696 = inst_88700;
var v = inst_88701;
var c = inst_88702;
return ((function (cs,vec__88696,v,c,inst_88700,inst_88691,inst_88701,inst_88702,state_val_88722,c__62848__auto___88743,out){
return (function (p1__88687_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__88687_SHARP_);
});
;})(cs,vec__88696,v,c,inst_88700,inst_88691,inst_88701,inst_88702,state_val_88722,c__62848__auto___88743,out))
})();
var inst_88706 = cljs.core.filterv.call(null,inst_88705,inst_88691);
var inst_88691__$1 = inst_88706;
var state_88721__$1 = (function (){var statearr_88736 = state_88721;
(statearr_88736[(10)] = inst_88691__$1);

return statearr_88736;
})();
var statearr_88737_88753 = state_88721__$1;
(statearr_88737_88753[(2)] = null);

(statearr_88737_88753[(1)] = (2));


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
});})(c__62848__auto___88743,out))
;
return ((function (switch__50623__auto__,c__62848__auto___88743,out){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_88738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88738[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_88738[(1)] = (1));

return statearr_88738;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_88721){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_88721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e88739){if((e88739 instanceof Object)){
var ex__50627__auto__ = e88739;
var statearr_88740_88754 = state_88721;
(statearr_88740_88754[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88755 = state_88721;
state_88721 = G__88755;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_88721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_88721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___88743,out))
})();
var state__62850__auto__ = (function (){var statearr_88741 = f__62849__auto__.call(null);
(statearr_88741[(6)] = c__62848__auto___88743);

return statearr_88741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___88743,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__88757 = arguments.length;
switch (G__88757) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__62848__auto___88802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___88802,out){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___88802,out){
return (function (state_88781){
var state_val_88782 = (state_88781[(1)]);
if((state_val_88782 === (7))){
var inst_88763 = (state_88781[(7)]);
var inst_88763__$1 = (state_88781[(2)]);
var inst_88764 = (inst_88763__$1 == null);
var inst_88765 = cljs.core.not.call(null,inst_88764);
var state_88781__$1 = (function (){var statearr_88783 = state_88781;
(statearr_88783[(7)] = inst_88763__$1);

return statearr_88783;
})();
if(inst_88765){
var statearr_88784_88803 = state_88781__$1;
(statearr_88784_88803[(1)] = (8));

} else {
var statearr_88785_88804 = state_88781__$1;
(statearr_88785_88804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88782 === (1))){
var inst_88758 = (0);
var state_88781__$1 = (function (){var statearr_88786 = state_88781;
(statearr_88786[(8)] = inst_88758);

return statearr_88786;
})();
var statearr_88787_88805 = state_88781__$1;
(statearr_88787_88805[(2)] = null);

(statearr_88787_88805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88782 === (4))){
var state_88781__$1 = state_88781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88781__$1,(7),ch);
} else {
if((state_val_88782 === (6))){
var inst_88776 = (state_88781[(2)]);
var state_88781__$1 = state_88781;
var statearr_88788_88806 = state_88781__$1;
(statearr_88788_88806[(2)] = inst_88776);

(statearr_88788_88806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88782 === (3))){
var inst_88778 = (state_88781[(2)]);
var inst_88779 = cljs.core.async.close_BANG_.call(null,out);
var state_88781__$1 = (function (){var statearr_88789 = state_88781;
(statearr_88789[(9)] = inst_88778);

return statearr_88789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88781__$1,inst_88779);
} else {
if((state_val_88782 === (2))){
var inst_88758 = (state_88781[(8)]);
var inst_88760 = (inst_88758 < n);
var state_88781__$1 = state_88781;
if(cljs.core.truth_(inst_88760)){
var statearr_88790_88807 = state_88781__$1;
(statearr_88790_88807[(1)] = (4));

} else {
var statearr_88791_88808 = state_88781__$1;
(statearr_88791_88808[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88782 === (11))){
var inst_88758 = (state_88781[(8)]);
var inst_88768 = (state_88781[(2)]);
var inst_88769 = (inst_88758 + (1));
var inst_88758__$1 = inst_88769;
var state_88781__$1 = (function (){var statearr_88792 = state_88781;
(statearr_88792[(8)] = inst_88758__$1);

(statearr_88792[(10)] = inst_88768);

return statearr_88792;
})();
var statearr_88793_88809 = state_88781__$1;
(statearr_88793_88809[(2)] = null);

(statearr_88793_88809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88782 === (9))){
var state_88781__$1 = state_88781;
var statearr_88794_88810 = state_88781__$1;
(statearr_88794_88810[(2)] = null);

(statearr_88794_88810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88782 === (5))){
var state_88781__$1 = state_88781;
var statearr_88795_88811 = state_88781__$1;
(statearr_88795_88811[(2)] = null);

(statearr_88795_88811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88782 === (10))){
var inst_88773 = (state_88781[(2)]);
var state_88781__$1 = state_88781;
var statearr_88796_88812 = state_88781__$1;
(statearr_88796_88812[(2)] = inst_88773);

(statearr_88796_88812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88782 === (8))){
var inst_88763 = (state_88781[(7)]);
var state_88781__$1 = state_88781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88781__$1,(11),out,inst_88763);
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
});})(c__62848__auto___88802,out))
;
return ((function (switch__50623__auto__,c__62848__auto___88802,out){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_88797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88797[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_88797[(1)] = (1));

return statearr_88797;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_88781){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_88781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e88798){if((e88798 instanceof Object)){
var ex__50627__auto__ = e88798;
var statearr_88799_88813 = state_88781;
(statearr_88799_88813[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88814 = state_88781;
state_88781 = G__88814;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_88781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_88781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___88802,out))
})();
var state__62850__auto__ = (function (){var statearr_88800 = f__62849__auto__.call(null);
(statearr_88800[(6)] = c__62848__auto___88802);

return statearr_88800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___88802,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async88816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88816 = (function (f,ch,meta88817){
this.f = f;
this.ch = ch;
this.meta88817 = meta88817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88818,meta88817__$1){
var self__ = this;
var _88818__$1 = this;
return (new cljs.core.async.t_cljs$core$async88816(self__.f,self__.ch,meta88817__$1));
});

cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88818){
var self__ = this;
var _88818__$1 = this;
return self__.meta88817;
});

cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async88819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88819 = (function (f,ch,meta88817,_,fn1,meta88820){
this.f = f;
this.ch = ch;
this.meta88817 = meta88817;
this._ = _;
this.fn1 = fn1;
this.meta88820 = meta88820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_88821,meta88820__$1){
var self__ = this;
var _88821__$1 = this;
return (new cljs.core.async.t_cljs$core$async88819(self__.f,self__.ch,self__.meta88817,self__._,self__.fn1,meta88820__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async88819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_88821){
var self__ = this;
var _88821__$1 = this;
return self__.meta88820;
});})(___$1))
;

cljs.core.async.t_cljs$core$async88819.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async88819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async88819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__88815_SHARP_){
return f1.call(null,(((p1__88815_SHARP_ == null))?null:self__.f.call(null,p1__88815_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async88819.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta88817","meta88817",1723914985,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async88816","cljs.core.async/t_cljs$core$async88816",-722248011,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta88820","meta88820",-530468339,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async88819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88819";

cljs.core.async.t_cljs$core$async88819.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async88819");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async88819.
 */
cljs.core.async.__GT_t_cljs$core$async88819 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async88819(f__$1,ch__$1,meta88817__$1,___$2,fn1__$1,meta88820){
return (new cljs.core.async.t_cljs$core$async88819(f__$1,ch__$1,meta88817__$1,___$2,fn1__$1,meta88820));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async88819(self__.f,self__.ch,self__.meta88817,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async88816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta88817","meta88817",1723914985,null)], null);
});

cljs.core.async.t_cljs$core$async88816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88816";

cljs.core.async.t_cljs$core$async88816.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async88816");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async88816.
 */
cljs.core.async.__GT_t_cljs$core$async88816 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async88816(f__$1,ch__$1,meta88817){
return (new cljs.core.async.t_cljs$core$async88816(f__$1,ch__$1,meta88817));
});

}

return (new cljs.core.async.t_cljs$core$async88816(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async88822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88822 = (function (f,ch,meta88823){
this.f = f;
this.ch = ch;
this.meta88823 = meta88823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88824,meta88823__$1){
var self__ = this;
var _88824__$1 = this;
return (new cljs.core.async.t_cljs$core$async88822(self__.f,self__.ch,meta88823__$1));
});

cljs.core.async.t_cljs$core$async88822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88824){
var self__ = this;
var _88824__$1 = this;
return self__.meta88823;
});

cljs.core.async.t_cljs$core$async88822.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async88822.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async88822.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async88822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta88823","meta88823",1858592891,null)], null);
});

cljs.core.async.t_cljs$core$async88822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88822";

cljs.core.async.t_cljs$core$async88822.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async88822");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async88822.
 */
cljs.core.async.__GT_t_cljs$core$async88822 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async88822(f__$1,ch__$1,meta88823){
return (new cljs.core.async.t_cljs$core$async88822(f__$1,ch__$1,meta88823));
});

}

return (new cljs.core.async.t_cljs$core$async88822(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async88825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88825 = (function (p,ch,meta88826){
this.p = p;
this.ch = ch;
this.meta88826 = meta88826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88827,meta88826__$1){
var self__ = this;
var _88827__$1 = this;
return (new cljs.core.async.t_cljs$core$async88825(self__.p,self__.ch,meta88826__$1));
});

cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88827){
var self__ = this;
var _88827__$1 = this;
return self__.meta88826;
});

cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async88825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async88825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta88826","meta88826",-1248535589,null)], null);
});

cljs.core.async.t_cljs$core$async88825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88825";

cljs.core.async.t_cljs$core$async88825.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async88825");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async88825.
 */
cljs.core.async.__GT_t_cljs$core$async88825 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async88825(p__$1,ch__$1,meta88826){
return (new cljs.core.async.t_cljs$core$async88825(p__$1,ch__$1,meta88826));
});

}

return (new cljs.core.async.t_cljs$core$async88825(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__88829 = arguments.length;
switch (G__88829) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__62848__auto___88869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___88869,out){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___88869,out){
return (function (state_88850){
var state_val_88851 = (state_88850[(1)]);
if((state_val_88851 === (7))){
var inst_88846 = (state_88850[(2)]);
var state_88850__$1 = state_88850;
var statearr_88852_88870 = state_88850__$1;
(statearr_88852_88870[(2)] = inst_88846);

(statearr_88852_88870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88851 === (1))){
var state_88850__$1 = state_88850;
var statearr_88853_88871 = state_88850__$1;
(statearr_88853_88871[(2)] = null);

(statearr_88853_88871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88851 === (4))){
var inst_88832 = (state_88850[(7)]);
var inst_88832__$1 = (state_88850[(2)]);
var inst_88833 = (inst_88832__$1 == null);
var state_88850__$1 = (function (){var statearr_88854 = state_88850;
(statearr_88854[(7)] = inst_88832__$1);

return statearr_88854;
})();
if(cljs.core.truth_(inst_88833)){
var statearr_88855_88872 = state_88850__$1;
(statearr_88855_88872[(1)] = (5));

} else {
var statearr_88856_88873 = state_88850__$1;
(statearr_88856_88873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88851 === (6))){
var inst_88832 = (state_88850[(7)]);
var inst_88837 = p.call(null,inst_88832);
var state_88850__$1 = state_88850;
if(cljs.core.truth_(inst_88837)){
var statearr_88857_88874 = state_88850__$1;
(statearr_88857_88874[(1)] = (8));

} else {
var statearr_88858_88875 = state_88850__$1;
(statearr_88858_88875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88851 === (3))){
var inst_88848 = (state_88850[(2)]);
var state_88850__$1 = state_88850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88850__$1,inst_88848);
} else {
if((state_val_88851 === (2))){
var state_88850__$1 = state_88850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88850__$1,(4),ch);
} else {
if((state_val_88851 === (11))){
var inst_88840 = (state_88850[(2)]);
var state_88850__$1 = state_88850;
var statearr_88859_88876 = state_88850__$1;
(statearr_88859_88876[(2)] = inst_88840);

(statearr_88859_88876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88851 === (9))){
var state_88850__$1 = state_88850;
var statearr_88860_88877 = state_88850__$1;
(statearr_88860_88877[(2)] = null);

(statearr_88860_88877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88851 === (5))){
var inst_88835 = cljs.core.async.close_BANG_.call(null,out);
var state_88850__$1 = state_88850;
var statearr_88861_88878 = state_88850__$1;
(statearr_88861_88878[(2)] = inst_88835);

(statearr_88861_88878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88851 === (10))){
var inst_88843 = (state_88850[(2)]);
var state_88850__$1 = (function (){var statearr_88862 = state_88850;
(statearr_88862[(8)] = inst_88843);

return statearr_88862;
})();
var statearr_88863_88879 = state_88850__$1;
(statearr_88863_88879[(2)] = null);

(statearr_88863_88879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88851 === (8))){
var inst_88832 = (state_88850[(7)]);
var state_88850__$1 = state_88850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88850__$1,(11),out,inst_88832);
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
});})(c__62848__auto___88869,out))
;
return ((function (switch__50623__auto__,c__62848__auto___88869,out){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_88864 = [null,null,null,null,null,null,null,null,null];
(statearr_88864[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_88864[(1)] = (1));

return statearr_88864;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_88850){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_88850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e88865){if((e88865 instanceof Object)){
var ex__50627__auto__ = e88865;
var statearr_88866_88880 = state_88850;
(statearr_88866_88880[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88881 = state_88850;
state_88850 = G__88881;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_88850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_88850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___88869,out))
})();
var state__62850__auto__ = (function (){var statearr_88867 = f__62849__auto__.call(null);
(statearr_88867[(6)] = c__62848__auto___88869);

return statearr_88867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___88869,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__88883 = arguments.length;
switch (G__88883) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__62848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto__){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto__){
return (function (state_88946){
var state_val_88947 = (state_88946[(1)]);
if((state_val_88947 === (7))){
var inst_88942 = (state_88946[(2)]);
var state_88946__$1 = state_88946;
var statearr_88948_88986 = state_88946__$1;
(statearr_88948_88986[(2)] = inst_88942);

(statearr_88948_88986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (20))){
var inst_88912 = (state_88946[(7)]);
var inst_88923 = (state_88946[(2)]);
var inst_88924 = cljs.core.next.call(null,inst_88912);
var inst_88898 = inst_88924;
var inst_88899 = null;
var inst_88900 = (0);
var inst_88901 = (0);
var state_88946__$1 = (function (){var statearr_88949 = state_88946;
(statearr_88949[(8)] = inst_88901);

(statearr_88949[(9)] = inst_88900);

(statearr_88949[(10)] = inst_88898);

(statearr_88949[(11)] = inst_88899);

(statearr_88949[(12)] = inst_88923);

return statearr_88949;
})();
var statearr_88950_88987 = state_88946__$1;
(statearr_88950_88987[(2)] = null);

(statearr_88950_88987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (1))){
var state_88946__$1 = state_88946;
var statearr_88951_88988 = state_88946__$1;
(statearr_88951_88988[(2)] = null);

(statearr_88951_88988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (4))){
var inst_88887 = (state_88946[(13)]);
var inst_88887__$1 = (state_88946[(2)]);
var inst_88888 = (inst_88887__$1 == null);
var state_88946__$1 = (function (){var statearr_88952 = state_88946;
(statearr_88952[(13)] = inst_88887__$1);

return statearr_88952;
})();
if(cljs.core.truth_(inst_88888)){
var statearr_88953_88989 = state_88946__$1;
(statearr_88953_88989[(1)] = (5));

} else {
var statearr_88954_88990 = state_88946__$1;
(statearr_88954_88990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (15))){
var state_88946__$1 = state_88946;
var statearr_88958_88991 = state_88946__$1;
(statearr_88958_88991[(2)] = null);

(statearr_88958_88991[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (21))){
var state_88946__$1 = state_88946;
var statearr_88959_88992 = state_88946__$1;
(statearr_88959_88992[(2)] = null);

(statearr_88959_88992[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (13))){
var inst_88901 = (state_88946[(8)]);
var inst_88900 = (state_88946[(9)]);
var inst_88898 = (state_88946[(10)]);
var inst_88899 = (state_88946[(11)]);
var inst_88908 = (state_88946[(2)]);
var inst_88909 = (inst_88901 + (1));
var tmp88955 = inst_88900;
var tmp88956 = inst_88898;
var tmp88957 = inst_88899;
var inst_88898__$1 = tmp88956;
var inst_88899__$1 = tmp88957;
var inst_88900__$1 = tmp88955;
var inst_88901__$1 = inst_88909;
var state_88946__$1 = (function (){var statearr_88960 = state_88946;
(statearr_88960[(8)] = inst_88901__$1);

(statearr_88960[(14)] = inst_88908);

(statearr_88960[(9)] = inst_88900__$1);

(statearr_88960[(10)] = inst_88898__$1);

(statearr_88960[(11)] = inst_88899__$1);

return statearr_88960;
})();
var statearr_88961_88993 = state_88946__$1;
(statearr_88961_88993[(2)] = null);

(statearr_88961_88993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (22))){
var state_88946__$1 = state_88946;
var statearr_88962_88994 = state_88946__$1;
(statearr_88962_88994[(2)] = null);

(statearr_88962_88994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (6))){
var inst_88887 = (state_88946[(13)]);
var inst_88896 = f.call(null,inst_88887);
var inst_88897 = cljs.core.seq.call(null,inst_88896);
var inst_88898 = inst_88897;
var inst_88899 = null;
var inst_88900 = (0);
var inst_88901 = (0);
var state_88946__$1 = (function (){var statearr_88963 = state_88946;
(statearr_88963[(8)] = inst_88901);

(statearr_88963[(9)] = inst_88900);

(statearr_88963[(10)] = inst_88898);

(statearr_88963[(11)] = inst_88899);

return statearr_88963;
})();
var statearr_88964_88995 = state_88946__$1;
(statearr_88964_88995[(2)] = null);

(statearr_88964_88995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (17))){
var inst_88912 = (state_88946[(7)]);
var inst_88916 = cljs.core.chunk_first.call(null,inst_88912);
var inst_88917 = cljs.core.chunk_rest.call(null,inst_88912);
var inst_88918 = cljs.core.count.call(null,inst_88916);
var inst_88898 = inst_88917;
var inst_88899 = inst_88916;
var inst_88900 = inst_88918;
var inst_88901 = (0);
var state_88946__$1 = (function (){var statearr_88965 = state_88946;
(statearr_88965[(8)] = inst_88901);

(statearr_88965[(9)] = inst_88900);

(statearr_88965[(10)] = inst_88898);

(statearr_88965[(11)] = inst_88899);

return statearr_88965;
})();
var statearr_88966_88996 = state_88946__$1;
(statearr_88966_88996[(2)] = null);

(statearr_88966_88996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (3))){
var inst_88944 = (state_88946[(2)]);
var state_88946__$1 = state_88946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88946__$1,inst_88944);
} else {
if((state_val_88947 === (12))){
var inst_88932 = (state_88946[(2)]);
var state_88946__$1 = state_88946;
var statearr_88967_88997 = state_88946__$1;
(statearr_88967_88997[(2)] = inst_88932);

(statearr_88967_88997[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (2))){
var state_88946__$1 = state_88946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88946__$1,(4),in$);
} else {
if((state_val_88947 === (23))){
var inst_88940 = (state_88946[(2)]);
var state_88946__$1 = state_88946;
var statearr_88968_88998 = state_88946__$1;
(statearr_88968_88998[(2)] = inst_88940);

(statearr_88968_88998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (19))){
var inst_88927 = (state_88946[(2)]);
var state_88946__$1 = state_88946;
var statearr_88969_88999 = state_88946__$1;
(statearr_88969_88999[(2)] = inst_88927);

(statearr_88969_88999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (11))){
var inst_88898 = (state_88946[(10)]);
var inst_88912 = (state_88946[(7)]);
var inst_88912__$1 = cljs.core.seq.call(null,inst_88898);
var state_88946__$1 = (function (){var statearr_88970 = state_88946;
(statearr_88970[(7)] = inst_88912__$1);

return statearr_88970;
})();
if(inst_88912__$1){
var statearr_88971_89000 = state_88946__$1;
(statearr_88971_89000[(1)] = (14));

} else {
var statearr_88972_89001 = state_88946__$1;
(statearr_88972_89001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (9))){
var inst_88934 = (state_88946[(2)]);
var inst_88935 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_88946__$1 = (function (){var statearr_88973 = state_88946;
(statearr_88973[(15)] = inst_88934);

return statearr_88973;
})();
if(cljs.core.truth_(inst_88935)){
var statearr_88974_89002 = state_88946__$1;
(statearr_88974_89002[(1)] = (21));

} else {
var statearr_88975_89003 = state_88946__$1;
(statearr_88975_89003[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (5))){
var inst_88890 = cljs.core.async.close_BANG_.call(null,out);
var state_88946__$1 = state_88946;
var statearr_88976_89004 = state_88946__$1;
(statearr_88976_89004[(2)] = inst_88890);

(statearr_88976_89004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (14))){
var inst_88912 = (state_88946[(7)]);
var inst_88914 = cljs.core.chunked_seq_QMARK_.call(null,inst_88912);
var state_88946__$1 = state_88946;
if(inst_88914){
var statearr_88977_89005 = state_88946__$1;
(statearr_88977_89005[(1)] = (17));

} else {
var statearr_88978_89006 = state_88946__$1;
(statearr_88978_89006[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (16))){
var inst_88930 = (state_88946[(2)]);
var state_88946__$1 = state_88946;
var statearr_88979_89007 = state_88946__$1;
(statearr_88979_89007[(2)] = inst_88930);

(statearr_88979_89007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88947 === (10))){
var inst_88901 = (state_88946[(8)]);
var inst_88899 = (state_88946[(11)]);
var inst_88906 = cljs.core._nth.call(null,inst_88899,inst_88901);
var state_88946__$1 = state_88946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88946__$1,(13),out,inst_88906);
} else {
if((state_val_88947 === (18))){
var inst_88912 = (state_88946[(7)]);
var inst_88921 = cljs.core.first.call(null,inst_88912);
var state_88946__$1 = state_88946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88946__$1,(20),out,inst_88921);
} else {
if((state_val_88947 === (8))){
var inst_88901 = (state_88946[(8)]);
var inst_88900 = (state_88946[(9)]);
var inst_88903 = (inst_88901 < inst_88900);
var inst_88904 = inst_88903;
var state_88946__$1 = state_88946;
if(cljs.core.truth_(inst_88904)){
var statearr_88980_89008 = state_88946__$1;
(statearr_88980_89008[(1)] = (10));

} else {
var statearr_88981_89009 = state_88946__$1;
(statearr_88981_89009[(1)] = (11));

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
});})(c__62848__auto__))
;
return ((function (switch__50623__auto__,c__62848__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50624__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50624__auto____0 = (function (){
var statearr_88982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88982[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50624__auto__);

(statearr_88982[(1)] = (1));

return statearr_88982;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50624__auto____1 = (function (state_88946){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_88946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e88983){if((e88983 instanceof Object)){
var ex__50627__auto__ = e88983;
var statearr_88984_89010 = state_88946;
(statearr_88984_89010[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89011 = state_88946;
state_88946 = G__89011;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50624__auto__ = function(state_88946){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50624__auto____1.call(this,state_88946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50624__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50624__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto__))
})();
var state__62850__auto__ = (function (){var statearr_88985 = f__62849__auto__.call(null);
(statearr_88985[(6)] = c__62848__auto__);

return statearr_88985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto__))
);

return c__62848__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__89013 = arguments.length;
switch (G__89013) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__89016 = arguments.length;
switch (G__89016) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__89019 = arguments.length;
switch (G__89019) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__62848__auto___89066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___89066,out){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___89066,out){
return (function (state_89043){
var state_val_89044 = (state_89043[(1)]);
if((state_val_89044 === (7))){
var inst_89038 = (state_89043[(2)]);
var state_89043__$1 = state_89043;
var statearr_89045_89067 = state_89043__$1;
(statearr_89045_89067[(2)] = inst_89038);

(statearr_89045_89067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89044 === (1))){
var inst_89020 = null;
var state_89043__$1 = (function (){var statearr_89046 = state_89043;
(statearr_89046[(7)] = inst_89020);

return statearr_89046;
})();
var statearr_89047_89068 = state_89043__$1;
(statearr_89047_89068[(2)] = null);

(statearr_89047_89068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89044 === (4))){
var inst_89023 = (state_89043[(8)]);
var inst_89023__$1 = (state_89043[(2)]);
var inst_89024 = (inst_89023__$1 == null);
var inst_89025 = cljs.core.not.call(null,inst_89024);
var state_89043__$1 = (function (){var statearr_89048 = state_89043;
(statearr_89048[(8)] = inst_89023__$1);

return statearr_89048;
})();
if(inst_89025){
var statearr_89049_89069 = state_89043__$1;
(statearr_89049_89069[(1)] = (5));

} else {
var statearr_89050_89070 = state_89043__$1;
(statearr_89050_89070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89044 === (6))){
var state_89043__$1 = state_89043;
var statearr_89051_89071 = state_89043__$1;
(statearr_89051_89071[(2)] = null);

(statearr_89051_89071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89044 === (3))){
var inst_89040 = (state_89043[(2)]);
var inst_89041 = cljs.core.async.close_BANG_.call(null,out);
var state_89043__$1 = (function (){var statearr_89052 = state_89043;
(statearr_89052[(9)] = inst_89040);

return statearr_89052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89043__$1,inst_89041);
} else {
if((state_val_89044 === (2))){
var state_89043__$1 = state_89043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89043__$1,(4),ch);
} else {
if((state_val_89044 === (11))){
var inst_89023 = (state_89043[(8)]);
var inst_89032 = (state_89043[(2)]);
var inst_89020 = inst_89023;
var state_89043__$1 = (function (){var statearr_89053 = state_89043;
(statearr_89053[(7)] = inst_89020);

(statearr_89053[(10)] = inst_89032);

return statearr_89053;
})();
var statearr_89054_89072 = state_89043__$1;
(statearr_89054_89072[(2)] = null);

(statearr_89054_89072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89044 === (9))){
var inst_89023 = (state_89043[(8)]);
var state_89043__$1 = state_89043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89043__$1,(11),out,inst_89023);
} else {
if((state_val_89044 === (5))){
var inst_89023 = (state_89043[(8)]);
var inst_89020 = (state_89043[(7)]);
var inst_89027 = cljs.core._EQ_.call(null,inst_89023,inst_89020);
var state_89043__$1 = state_89043;
if(inst_89027){
var statearr_89056_89073 = state_89043__$1;
(statearr_89056_89073[(1)] = (8));

} else {
var statearr_89057_89074 = state_89043__$1;
(statearr_89057_89074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89044 === (10))){
var inst_89035 = (state_89043[(2)]);
var state_89043__$1 = state_89043;
var statearr_89058_89075 = state_89043__$1;
(statearr_89058_89075[(2)] = inst_89035);

(statearr_89058_89075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89044 === (8))){
var inst_89020 = (state_89043[(7)]);
var tmp89055 = inst_89020;
var inst_89020__$1 = tmp89055;
var state_89043__$1 = (function (){var statearr_89059 = state_89043;
(statearr_89059[(7)] = inst_89020__$1);

return statearr_89059;
})();
var statearr_89060_89076 = state_89043__$1;
(statearr_89060_89076[(2)] = null);

(statearr_89060_89076[(1)] = (2));


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
});})(c__62848__auto___89066,out))
;
return ((function (switch__50623__auto__,c__62848__auto___89066,out){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_89061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_89061[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_89061[(1)] = (1));

return statearr_89061;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_89043){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_89043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e89062){if((e89062 instanceof Object)){
var ex__50627__auto__ = e89062;
var statearr_89063_89077 = state_89043;
(statearr_89063_89077[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89078 = state_89043;
state_89043 = G__89078;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_89043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_89043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___89066,out))
})();
var state__62850__auto__ = (function (){var statearr_89064 = f__62849__auto__.call(null);
(statearr_89064[(6)] = c__62848__auto___89066);

return statearr_89064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___89066,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__89080 = arguments.length;
switch (G__89080) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__62848__auto___89146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___89146,out){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___89146,out){
return (function (state_89118){
var state_val_89119 = (state_89118[(1)]);
if((state_val_89119 === (7))){
var inst_89114 = (state_89118[(2)]);
var state_89118__$1 = state_89118;
var statearr_89120_89147 = state_89118__$1;
(statearr_89120_89147[(2)] = inst_89114);

(statearr_89120_89147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (1))){
var inst_89081 = (new Array(n));
var inst_89082 = inst_89081;
var inst_89083 = (0);
var state_89118__$1 = (function (){var statearr_89121 = state_89118;
(statearr_89121[(7)] = inst_89083);

(statearr_89121[(8)] = inst_89082);

return statearr_89121;
})();
var statearr_89122_89148 = state_89118__$1;
(statearr_89122_89148[(2)] = null);

(statearr_89122_89148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (4))){
var inst_89086 = (state_89118[(9)]);
var inst_89086__$1 = (state_89118[(2)]);
var inst_89087 = (inst_89086__$1 == null);
var inst_89088 = cljs.core.not.call(null,inst_89087);
var state_89118__$1 = (function (){var statearr_89123 = state_89118;
(statearr_89123[(9)] = inst_89086__$1);

return statearr_89123;
})();
if(inst_89088){
var statearr_89124_89149 = state_89118__$1;
(statearr_89124_89149[(1)] = (5));

} else {
var statearr_89125_89150 = state_89118__$1;
(statearr_89125_89150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (15))){
var inst_89108 = (state_89118[(2)]);
var state_89118__$1 = state_89118;
var statearr_89126_89151 = state_89118__$1;
(statearr_89126_89151[(2)] = inst_89108);

(statearr_89126_89151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (13))){
var state_89118__$1 = state_89118;
var statearr_89127_89152 = state_89118__$1;
(statearr_89127_89152[(2)] = null);

(statearr_89127_89152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (6))){
var inst_89083 = (state_89118[(7)]);
var inst_89104 = (inst_89083 > (0));
var state_89118__$1 = state_89118;
if(cljs.core.truth_(inst_89104)){
var statearr_89128_89153 = state_89118__$1;
(statearr_89128_89153[(1)] = (12));

} else {
var statearr_89129_89154 = state_89118__$1;
(statearr_89129_89154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (3))){
var inst_89116 = (state_89118[(2)]);
var state_89118__$1 = state_89118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89118__$1,inst_89116);
} else {
if((state_val_89119 === (12))){
var inst_89082 = (state_89118[(8)]);
var inst_89106 = cljs.core.vec.call(null,inst_89082);
var state_89118__$1 = state_89118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89118__$1,(15),out,inst_89106);
} else {
if((state_val_89119 === (2))){
var state_89118__$1 = state_89118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89118__$1,(4),ch);
} else {
if((state_val_89119 === (11))){
var inst_89098 = (state_89118[(2)]);
var inst_89099 = (new Array(n));
var inst_89082 = inst_89099;
var inst_89083 = (0);
var state_89118__$1 = (function (){var statearr_89130 = state_89118;
(statearr_89130[(7)] = inst_89083);

(statearr_89130[(8)] = inst_89082);

(statearr_89130[(10)] = inst_89098);

return statearr_89130;
})();
var statearr_89131_89155 = state_89118__$1;
(statearr_89131_89155[(2)] = null);

(statearr_89131_89155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (9))){
var inst_89082 = (state_89118[(8)]);
var inst_89096 = cljs.core.vec.call(null,inst_89082);
var state_89118__$1 = state_89118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89118__$1,(11),out,inst_89096);
} else {
if((state_val_89119 === (5))){
var inst_89086 = (state_89118[(9)]);
var inst_89091 = (state_89118[(11)]);
var inst_89083 = (state_89118[(7)]);
var inst_89082 = (state_89118[(8)]);
var inst_89090 = (inst_89082[inst_89083] = inst_89086);
var inst_89091__$1 = (inst_89083 + (1));
var inst_89092 = (inst_89091__$1 < n);
var state_89118__$1 = (function (){var statearr_89132 = state_89118;
(statearr_89132[(11)] = inst_89091__$1);

(statearr_89132[(12)] = inst_89090);

return statearr_89132;
})();
if(cljs.core.truth_(inst_89092)){
var statearr_89133_89156 = state_89118__$1;
(statearr_89133_89156[(1)] = (8));

} else {
var statearr_89134_89157 = state_89118__$1;
(statearr_89134_89157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (14))){
var inst_89111 = (state_89118[(2)]);
var inst_89112 = cljs.core.async.close_BANG_.call(null,out);
var state_89118__$1 = (function (){var statearr_89136 = state_89118;
(statearr_89136[(13)] = inst_89111);

return statearr_89136;
})();
var statearr_89137_89158 = state_89118__$1;
(statearr_89137_89158[(2)] = inst_89112);

(statearr_89137_89158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (10))){
var inst_89102 = (state_89118[(2)]);
var state_89118__$1 = state_89118;
var statearr_89138_89159 = state_89118__$1;
(statearr_89138_89159[(2)] = inst_89102);

(statearr_89138_89159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89119 === (8))){
var inst_89091 = (state_89118[(11)]);
var inst_89082 = (state_89118[(8)]);
var tmp89135 = inst_89082;
var inst_89082__$1 = tmp89135;
var inst_89083 = inst_89091;
var state_89118__$1 = (function (){var statearr_89139 = state_89118;
(statearr_89139[(7)] = inst_89083);

(statearr_89139[(8)] = inst_89082__$1);

return statearr_89139;
})();
var statearr_89140_89160 = state_89118__$1;
(statearr_89140_89160[(2)] = null);

(statearr_89140_89160[(1)] = (2));


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
});})(c__62848__auto___89146,out))
;
return ((function (switch__50623__auto__,c__62848__auto___89146,out){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_89141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89141[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_89141[(1)] = (1));

return statearr_89141;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_89118){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_89118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e89142){if((e89142 instanceof Object)){
var ex__50627__auto__ = e89142;
var statearr_89143_89161 = state_89118;
(statearr_89143_89161[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89162 = state_89118;
state_89118 = G__89162;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_89118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_89118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___89146,out))
})();
var state__62850__auto__ = (function (){var statearr_89144 = f__62849__auto__.call(null);
(statearr_89144[(6)] = c__62848__auto___89146);

return statearr_89144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___89146,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__89164 = arguments.length;
switch (G__89164) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__62848__auto___89234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__62848__auto___89234,out){
return (function (){
var f__62849__auto__ = (function (){var switch__50623__auto__ = ((function (c__62848__auto___89234,out){
return (function (state_89206){
var state_val_89207 = (state_89206[(1)]);
if((state_val_89207 === (7))){
var inst_89202 = (state_89206[(2)]);
var state_89206__$1 = state_89206;
var statearr_89208_89235 = state_89206__$1;
(statearr_89208_89235[(2)] = inst_89202);

(statearr_89208_89235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (1))){
var inst_89165 = [];
var inst_89166 = inst_89165;
var inst_89167 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_89206__$1 = (function (){var statearr_89209 = state_89206;
(statearr_89209[(7)] = inst_89167);

(statearr_89209[(8)] = inst_89166);

return statearr_89209;
})();
var statearr_89210_89236 = state_89206__$1;
(statearr_89210_89236[(2)] = null);

(statearr_89210_89236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (4))){
var inst_89170 = (state_89206[(9)]);
var inst_89170__$1 = (state_89206[(2)]);
var inst_89171 = (inst_89170__$1 == null);
var inst_89172 = cljs.core.not.call(null,inst_89171);
var state_89206__$1 = (function (){var statearr_89211 = state_89206;
(statearr_89211[(9)] = inst_89170__$1);

return statearr_89211;
})();
if(inst_89172){
var statearr_89212_89237 = state_89206__$1;
(statearr_89212_89237[(1)] = (5));

} else {
var statearr_89213_89238 = state_89206__$1;
(statearr_89213_89238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (15))){
var inst_89196 = (state_89206[(2)]);
var state_89206__$1 = state_89206;
var statearr_89214_89239 = state_89206__$1;
(statearr_89214_89239[(2)] = inst_89196);

(statearr_89214_89239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (13))){
var state_89206__$1 = state_89206;
var statearr_89215_89240 = state_89206__$1;
(statearr_89215_89240[(2)] = null);

(statearr_89215_89240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (6))){
var inst_89166 = (state_89206[(8)]);
var inst_89191 = inst_89166.length;
var inst_89192 = (inst_89191 > (0));
var state_89206__$1 = state_89206;
if(cljs.core.truth_(inst_89192)){
var statearr_89216_89241 = state_89206__$1;
(statearr_89216_89241[(1)] = (12));

} else {
var statearr_89217_89242 = state_89206__$1;
(statearr_89217_89242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (3))){
var inst_89204 = (state_89206[(2)]);
var state_89206__$1 = state_89206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89206__$1,inst_89204);
} else {
if((state_val_89207 === (12))){
var inst_89166 = (state_89206[(8)]);
var inst_89194 = cljs.core.vec.call(null,inst_89166);
var state_89206__$1 = state_89206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89206__$1,(15),out,inst_89194);
} else {
if((state_val_89207 === (2))){
var state_89206__$1 = state_89206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89206__$1,(4),ch);
} else {
if((state_val_89207 === (11))){
var inst_89174 = (state_89206[(10)]);
var inst_89170 = (state_89206[(9)]);
var inst_89184 = (state_89206[(2)]);
var inst_89185 = [];
var inst_89186 = inst_89185.push(inst_89170);
var inst_89166 = inst_89185;
var inst_89167 = inst_89174;
var state_89206__$1 = (function (){var statearr_89218 = state_89206;
(statearr_89218[(11)] = inst_89186);

(statearr_89218[(7)] = inst_89167);

(statearr_89218[(8)] = inst_89166);

(statearr_89218[(12)] = inst_89184);

return statearr_89218;
})();
var statearr_89219_89243 = state_89206__$1;
(statearr_89219_89243[(2)] = null);

(statearr_89219_89243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (9))){
var inst_89166 = (state_89206[(8)]);
var inst_89182 = cljs.core.vec.call(null,inst_89166);
var state_89206__$1 = state_89206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89206__$1,(11),out,inst_89182);
} else {
if((state_val_89207 === (5))){
var inst_89167 = (state_89206[(7)]);
var inst_89174 = (state_89206[(10)]);
var inst_89170 = (state_89206[(9)]);
var inst_89174__$1 = f.call(null,inst_89170);
var inst_89175 = cljs.core._EQ_.call(null,inst_89174__$1,inst_89167);
var inst_89176 = cljs.core.keyword_identical_QMARK_.call(null,inst_89167,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_89177 = ((inst_89175) || (inst_89176));
var state_89206__$1 = (function (){var statearr_89220 = state_89206;
(statearr_89220[(10)] = inst_89174__$1);

return statearr_89220;
})();
if(cljs.core.truth_(inst_89177)){
var statearr_89221_89244 = state_89206__$1;
(statearr_89221_89244[(1)] = (8));

} else {
var statearr_89222_89245 = state_89206__$1;
(statearr_89222_89245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (14))){
var inst_89199 = (state_89206[(2)]);
var inst_89200 = cljs.core.async.close_BANG_.call(null,out);
var state_89206__$1 = (function (){var statearr_89224 = state_89206;
(statearr_89224[(13)] = inst_89199);

return statearr_89224;
})();
var statearr_89225_89246 = state_89206__$1;
(statearr_89225_89246[(2)] = inst_89200);

(statearr_89225_89246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (10))){
var inst_89189 = (state_89206[(2)]);
var state_89206__$1 = state_89206;
var statearr_89226_89247 = state_89206__$1;
(statearr_89226_89247[(2)] = inst_89189);

(statearr_89226_89247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89207 === (8))){
var inst_89174 = (state_89206[(10)]);
var inst_89166 = (state_89206[(8)]);
var inst_89170 = (state_89206[(9)]);
var inst_89179 = inst_89166.push(inst_89170);
var tmp89223 = inst_89166;
var inst_89166__$1 = tmp89223;
var inst_89167 = inst_89174;
var state_89206__$1 = (function (){var statearr_89227 = state_89206;
(statearr_89227[(7)] = inst_89167);

(statearr_89227[(8)] = inst_89166__$1);

(statearr_89227[(14)] = inst_89179);

return statearr_89227;
})();
var statearr_89228_89248 = state_89206__$1;
(statearr_89228_89248[(2)] = null);

(statearr_89228_89248[(1)] = (2));


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
});})(c__62848__auto___89234,out))
;
return ((function (switch__50623__auto__,c__62848__auto___89234,out){
return (function() {
var cljs$core$async$state_machine__50624__auto__ = null;
var cljs$core$async$state_machine__50624__auto____0 = (function (){
var statearr_89229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89229[(0)] = cljs$core$async$state_machine__50624__auto__);

(statearr_89229[(1)] = (1));

return statearr_89229;
});
var cljs$core$async$state_machine__50624__auto____1 = (function (state_89206){
while(true){
var ret_value__50625__auto__ = (function (){try{while(true){
var result__50626__auto__ = switch__50623__auto__.call(null,state_89206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50626__auto__;
}
break;
}
}catch (e89230){if((e89230 instanceof Object)){
var ex__50627__auto__ = e89230;
var statearr_89231_89249 = state_89206;
(statearr_89231_89249[(5)] = ex__50627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89250 = state_89206;
state_89206 = G__89250;
continue;
} else {
return ret_value__50625__auto__;
}
break;
}
});
cljs$core$async$state_machine__50624__auto__ = function(state_89206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50624__auto____1.call(this,state_89206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50624__auto____0;
cljs$core$async$state_machine__50624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50624__auto____1;
return cljs$core$async$state_machine__50624__auto__;
})()
;})(switch__50623__auto__,c__62848__auto___89234,out))
})();
var state__62850__auto__ = (function (){var statearr_89232 = f__62849__auto__.call(null);
(statearr_89232[(6)] = c__62848__auto___89234);

return statearr_89232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__62850__auto__);
});})(c__62848__auto___89234,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1549004161434
