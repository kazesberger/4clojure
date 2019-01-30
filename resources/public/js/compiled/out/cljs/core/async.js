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
var G__58198 = arguments.length;
switch (G__58198) {
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
if(typeof cljs.core.async.t_cljs$core$async58199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58199 = (function (f,blockable,meta58200){
this.f = f;
this.blockable = blockable;
this.meta58200 = meta58200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58201,meta58200__$1){
var self__ = this;
var _58201__$1 = this;
return (new cljs.core.async.t_cljs$core$async58199(self__.f,self__.blockable,meta58200__$1));
});

cljs.core.async.t_cljs$core$async58199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58201){
var self__ = this;
var _58201__$1 = this;
return self__.meta58200;
});

cljs.core.async.t_cljs$core$async58199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async58199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async58199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58200","meta58200",1045225474,null)], null);
});

cljs.core.async.t_cljs$core$async58199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58199";

cljs.core.async.t_cljs$core$async58199.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58199");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58199.
 */
cljs.core.async.__GT_t_cljs$core$async58199 = (function cljs$core$async$__GT_t_cljs$core$async58199(f__$1,blockable__$1,meta58200){
return (new cljs.core.async.t_cljs$core$async58199(f__$1,blockable__$1,meta58200));
});

}

return (new cljs.core.async.t_cljs$core$async58199(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58205 = arguments.length;
switch (G__58205) {
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
var G__58208 = arguments.length;
switch (G__58208) {
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
var G__58211 = arguments.length;
switch (G__58211) {
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
var val_58213 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_58213);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_58213,ret){
return (function (){
return fn1.call(null,val_58213);
});})(val_58213,ret))
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
var G__58215 = arguments.length;
switch (G__58215) {
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
var n__4376__auto___58217 = n;
var x_58218 = (0);
while(true){
if((x_58218 < n__4376__auto___58217)){
(a[x_58218] = (0));

var G__58219 = (x_58218 + (1));
x_58218 = G__58219;
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

var G__58220 = (i + (1));
i = G__58220;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async58221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58221 = (function (flag,meta58222){
this.flag = flag;
this.meta58222 = meta58222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_58223,meta58222__$1){
var self__ = this;
var _58223__$1 = this;
return (new cljs.core.async.t_cljs$core$async58221(self__.flag,meta58222__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async58221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_58223){
var self__ = this;
var _58223__$1 = this;
return self__.meta58222;
});})(flag))
;

cljs.core.async.t_cljs$core$async58221.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async58221.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58221.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58222","meta58222",-993434890,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async58221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58221";

cljs.core.async.t_cljs$core$async58221.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58221");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58221.
 */
cljs.core.async.__GT_t_cljs$core$async58221 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58221(flag__$1,meta58222){
return (new cljs.core.async.t_cljs$core$async58221(flag__$1,meta58222));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async58221(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async58224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58224 = (function (flag,cb,meta58225){
this.flag = flag;
this.cb = cb;
this.meta58225 = meta58225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58226,meta58225__$1){
var self__ = this;
var _58226__$1 = this;
return (new cljs.core.async.t_cljs$core$async58224(self__.flag,self__.cb,meta58225__$1));
});

cljs.core.async.t_cljs$core$async58224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58226){
var self__ = this;
var _58226__$1 = this;
return self__.meta58225;
});

cljs.core.async.t_cljs$core$async58224.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async58224.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async58224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58225","meta58225",99541492,null)], null);
});

cljs.core.async.t_cljs$core$async58224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58224";

cljs.core.async.t_cljs$core$async58224.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58224");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58224.
 */
cljs.core.async.__GT_t_cljs$core$async58224 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58224(flag__$1,cb__$1,meta58225){
return (new cljs.core.async.t_cljs$core$async58224(flag__$1,cb__$1,meta58225));
});

}

return (new cljs.core.async.t_cljs$core$async58224(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58227_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58227_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58228_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58228_SHARP_,port], null));
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
var G__58229 = (i + (1));
i = G__58229;
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
var len__4499__auto___58235 = arguments.length;
var i__4500__auto___58236 = (0);
while(true){
if((i__4500__auto___58236 < len__4499__auto___58235)){
args__4502__auto__.push((arguments[i__4500__auto___58236]));

var G__58237 = (i__4500__auto___58236 + (1));
i__4500__auto___58236 = G__58237;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58232){
var map__58233 = p__58232;
var map__58233__$1 = ((((!((map__58233 == null)))?(((((map__58233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58233):map__58233);
var opts = map__58233__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58230){
var G__58231 = cljs.core.first.call(null,seq58230);
var seq58230__$1 = cljs.core.next.call(null,seq58230);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58231,seq58230__$1);
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
var G__58239 = arguments.length;
switch (G__58239) {
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
var c__58152__auto___58285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___58285){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___58285){
return (function (state_58263){
var state_val_58264 = (state_58263[(1)]);
if((state_val_58264 === (7))){
var inst_58259 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58265_58286 = state_58263__$1;
(statearr_58265_58286[(2)] = inst_58259);

(statearr_58265_58286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (1))){
var state_58263__$1 = state_58263;
var statearr_58266_58287 = state_58263__$1;
(statearr_58266_58287[(2)] = null);

(statearr_58266_58287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (4))){
var inst_58242 = (state_58263[(7)]);
var inst_58242__$1 = (state_58263[(2)]);
var inst_58243 = (inst_58242__$1 == null);
var state_58263__$1 = (function (){var statearr_58267 = state_58263;
(statearr_58267[(7)] = inst_58242__$1);

return statearr_58267;
})();
if(cljs.core.truth_(inst_58243)){
var statearr_58268_58288 = state_58263__$1;
(statearr_58268_58288[(1)] = (5));

} else {
var statearr_58269_58289 = state_58263__$1;
(statearr_58269_58289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (13))){
var state_58263__$1 = state_58263;
var statearr_58270_58290 = state_58263__$1;
(statearr_58270_58290[(2)] = null);

(statearr_58270_58290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (6))){
var inst_58242 = (state_58263[(7)]);
var state_58263__$1 = state_58263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58263__$1,(11),to,inst_58242);
} else {
if((state_val_58264 === (3))){
var inst_58261 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58263__$1,inst_58261);
} else {
if((state_val_58264 === (12))){
var state_58263__$1 = state_58263;
var statearr_58271_58291 = state_58263__$1;
(statearr_58271_58291[(2)] = null);

(statearr_58271_58291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (2))){
var state_58263__$1 = state_58263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58263__$1,(4),from);
} else {
if((state_val_58264 === (11))){
var inst_58252 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
if(cljs.core.truth_(inst_58252)){
var statearr_58272_58292 = state_58263__$1;
(statearr_58272_58292[(1)] = (12));

} else {
var statearr_58273_58293 = state_58263__$1;
(statearr_58273_58293[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (9))){
var state_58263__$1 = state_58263;
var statearr_58274_58294 = state_58263__$1;
(statearr_58274_58294[(2)] = null);

(statearr_58274_58294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (5))){
var state_58263__$1 = state_58263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58275_58295 = state_58263__$1;
(statearr_58275_58295[(1)] = (8));

} else {
var statearr_58276_58296 = state_58263__$1;
(statearr_58276_58296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (14))){
var inst_58257 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58277_58297 = state_58263__$1;
(statearr_58277_58297[(2)] = inst_58257);

(statearr_58277_58297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (10))){
var inst_58249 = (state_58263[(2)]);
var state_58263__$1 = state_58263;
var statearr_58278_58298 = state_58263__$1;
(statearr_58278_58298[(2)] = inst_58249);

(statearr_58278_58298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58264 === (8))){
var inst_58246 = cljs.core.async.close_BANG_.call(null,to);
var state_58263__$1 = state_58263;
var statearr_58279_58299 = state_58263__$1;
(statearr_58279_58299[(2)] = inst_58246);

(statearr_58279_58299[(1)] = (10));


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
});})(c__58152__auto___58285))
;
return ((function (switch__50568__auto__,c__58152__auto___58285){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_58280 = [null,null,null,null,null,null,null,null];
(statearr_58280[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_58280[(1)] = (1));

return statearr_58280;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_58263){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58281){if((e58281 instanceof Object)){
var ex__50572__auto__ = e58281;
var statearr_58282_58300 = state_58263;
(statearr_58282_58300[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58301 = state_58263;
state_58263 = G__58301;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_58263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_58263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___58285))
})();
var state__58154__auto__ = (function (){var statearr_58283 = f__58153__auto__.call(null);
(statearr_58283[(6)] = c__58152__auto___58285);

return statearr_58283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___58285))
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
return (function (p__58302){
var vec__58303 = p__58302;
var v = cljs.core.nth.call(null,vec__58303,(0),null);
var p = cljs.core.nth.call(null,vec__58303,(1),null);
var job = vec__58303;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__58152__auto___58474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___58474,res,vec__58303,v,p,job,jobs,results){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___58474,res,vec__58303,v,p,job,jobs,results){
return (function (state_58310){
var state_val_58311 = (state_58310[(1)]);
if((state_val_58311 === (1))){
var state_58310__$1 = state_58310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58310__$1,(2),res,v);
} else {
if((state_val_58311 === (2))){
var inst_58307 = (state_58310[(2)]);
var inst_58308 = cljs.core.async.close_BANG_.call(null,res);
var state_58310__$1 = (function (){var statearr_58312 = state_58310;
(statearr_58312[(7)] = inst_58307);

return statearr_58312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58310__$1,inst_58308);
} else {
return null;
}
}
});})(c__58152__auto___58474,res,vec__58303,v,p,job,jobs,results))
;
return ((function (switch__50568__auto__,c__58152__auto___58474,res,vec__58303,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0 = (function (){
var statearr_58313 = [null,null,null,null,null,null,null,null];
(statearr_58313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__);

(statearr_58313[(1)] = (1));

return statearr_58313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1 = (function (state_58310){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58314){if((e58314 instanceof Object)){
var ex__50572__auto__ = e58314;
var statearr_58315_58475 = state_58310;
(statearr_58315_58475[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58476 = state_58310;
state_58310 = G__58476;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = function(state_58310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1.call(this,state_58310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___58474,res,vec__58303,v,p,job,jobs,results))
})();
var state__58154__auto__ = (function (){var statearr_58316 = f__58153__auto__.call(null);
(statearr_58316[(6)] = c__58152__auto___58474);

return statearr_58316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___58474,res,vec__58303,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__58317){
var vec__58318 = p__58317;
var v = cljs.core.nth.call(null,vec__58318,(0),null);
var p = cljs.core.nth.call(null,vec__58318,(1),null);
var job = vec__58318;
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
var n__4376__auto___58477 = n;
var __58478 = (0);
while(true){
if((__58478 < n__4376__auto___58477)){
var G__58321_58479 = type;
var G__58321_58480__$1 = (((G__58321_58479 instanceof cljs.core.Keyword))?G__58321_58479.fqn:null);
switch (G__58321_58480__$1) {
case "compute":
var c__58152__auto___58482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58478,c__58152__auto___58482,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (__58478,c__58152__auto___58482,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async){
return (function (state_58334){
var state_val_58335 = (state_58334[(1)]);
if((state_val_58335 === (1))){
var state_58334__$1 = state_58334;
var statearr_58336_58483 = state_58334__$1;
(statearr_58336_58483[(2)] = null);

(statearr_58336_58483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58335 === (2))){
var state_58334__$1 = state_58334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58334__$1,(4),jobs);
} else {
if((state_val_58335 === (3))){
var inst_58332 = (state_58334[(2)]);
var state_58334__$1 = state_58334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58334__$1,inst_58332);
} else {
if((state_val_58335 === (4))){
var inst_58324 = (state_58334[(2)]);
var inst_58325 = process.call(null,inst_58324);
var state_58334__$1 = state_58334;
if(cljs.core.truth_(inst_58325)){
var statearr_58337_58484 = state_58334__$1;
(statearr_58337_58484[(1)] = (5));

} else {
var statearr_58338_58485 = state_58334__$1;
(statearr_58338_58485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58335 === (5))){
var state_58334__$1 = state_58334;
var statearr_58339_58486 = state_58334__$1;
(statearr_58339_58486[(2)] = null);

(statearr_58339_58486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58335 === (6))){
var state_58334__$1 = state_58334;
var statearr_58340_58487 = state_58334__$1;
(statearr_58340_58487[(2)] = null);

(statearr_58340_58487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58335 === (7))){
var inst_58330 = (state_58334[(2)]);
var state_58334__$1 = state_58334;
var statearr_58341_58488 = state_58334__$1;
(statearr_58341_58488[(2)] = inst_58330);

(statearr_58341_58488[(1)] = (3));


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
});})(__58478,c__58152__auto___58482,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async))
;
return ((function (__58478,switch__50568__auto__,c__58152__auto___58482,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0 = (function (){
var statearr_58342 = [null,null,null,null,null,null,null];
(statearr_58342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__);

(statearr_58342[(1)] = (1));

return statearr_58342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1 = (function (state_58334){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58343){if((e58343 instanceof Object)){
var ex__50572__auto__ = e58343;
var statearr_58344_58489 = state_58334;
(statearr_58344_58489[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58490 = state_58334;
state_58334 = G__58490;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = function(state_58334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1.call(this,state_58334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__;
})()
;})(__58478,switch__50568__auto__,c__58152__auto___58482,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async))
})();
var state__58154__auto__ = (function (){var statearr_58345 = f__58153__auto__.call(null);
(statearr_58345[(6)] = c__58152__auto___58482);

return statearr_58345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(__58478,c__58152__auto___58482,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async))
);


break;
case "async":
var c__58152__auto___58491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58478,c__58152__auto___58491,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (__58478,c__58152__auto___58491,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async){
return (function (state_58358){
var state_val_58359 = (state_58358[(1)]);
if((state_val_58359 === (1))){
var state_58358__$1 = state_58358;
var statearr_58360_58492 = state_58358__$1;
(statearr_58360_58492[(2)] = null);

(statearr_58360_58492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58359 === (2))){
var state_58358__$1 = state_58358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58358__$1,(4),jobs);
} else {
if((state_val_58359 === (3))){
var inst_58356 = (state_58358[(2)]);
var state_58358__$1 = state_58358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58358__$1,inst_58356);
} else {
if((state_val_58359 === (4))){
var inst_58348 = (state_58358[(2)]);
var inst_58349 = async.call(null,inst_58348);
var state_58358__$1 = state_58358;
if(cljs.core.truth_(inst_58349)){
var statearr_58361_58493 = state_58358__$1;
(statearr_58361_58493[(1)] = (5));

} else {
var statearr_58362_58494 = state_58358__$1;
(statearr_58362_58494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58359 === (5))){
var state_58358__$1 = state_58358;
var statearr_58363_58495 = state_58358__$1;
(statearr_58363_58495[(2)] = null);

(statearr_58363_58495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58359 === (6))){
var state_58358__$1 = state_58358;
var statearr_58364_58496 = state_58358__$1;
(statearr_58364_58496[(2)] = null);

(statearr_58364_58496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58359 === (7))){
var inst_58354 = (state_58358[(2)]);
var state_58358__$1 = state_58358;
var statearr_58365_58497 = state_58358__$1;
(statearr_58365_58497[(2)] = inst_58354);

(statearr_58365_58497[(1)] = (3));


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
});})(__58478,c__58152__auto___58491,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async))
;
return ((function (__58478,switch__50568__auto__,c__58152__auto___58491,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0 = (function (){
var statearr_58366 = [null,null,null,null,null,null,null];
(statearr_58366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__);

(statearr_58366[(1)] = (1));

return statearr_58366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1 = (function (state_58358){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58367){if((e58367 instanceof Object)){
var ex__50572__auto__ = e58367;
var statearr_58368_58498 = state_58358;
(statearr_58368_58498[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58499 = state_58358;
state_58358 = G__58499;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = function(state_58358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1.call(this,state_58358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__;
})()
;})(__58478,switch__50568__auto__,c__58152__auto___58491,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async))
})();
var state__58154__auto__ = (function (){var statearr_58369 = f__58153__auto__.call(null);
(statearr_58369[(6)] = c__58152__auto___58491);

return statearr_58369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(__58478,c__58152__auto___58491,G__58321_58479,G__58321_58480__$1,n__4376__auto___58477,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58321_58480__$1)].join('')));

}

var G__58500 = (__58478 + (1));
__58478 = G__58500;
continue;
} else {
}
break;
}

var c__58152__auto___58501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___58501,jobs,results,process,async){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___58501,jobs,results,process,async){
return (function (state_58391){
var state_val_58392 = (state_58391[(1)]);
if((state_val_58392 === (1))){
var state_58391__$1 = state_58391;
var statearr_58393_58502 = state_58391__$1;
(statearr_58393_58502[(2)] = null);

(statearr_58393_58502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58392 === (2))){
var state_58391__$1 = state_58391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58391__$1,(4),from);
} else {
if((state_val_58392 === (3))){
var inst_58389 = (state_58391[(2)]);
var state_58391__$1 = state_58391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58391__$1,inst_58389);
} else {
if((state_val_58392 === (4))){
var inst_58372 = (state_58391[(7)]);
var inst_58372__$1 = (state_58391[(2)]);
var inst_58373 = (inst_58372__$1 == null);
var state_58391__$1 = (function (){var statearr_58394 = state_58391;
(statearr_58394[(7)] = inst_58372__$1);

return statearr_58394;
})();
if(cljs.core.truth_(inst_58373)){
var statearr_58395_58503 = state_58391__$1;
(statearr_58395_58503[(1)] = (5));

} else {
var statearr_58396_58504 = state_58391__$1;
(statearr_58396_58504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58392 === (5))){
var inst_58375 = cljs.core.async.close_BANG_.call(null,jobs);
var state_58391__$1 = state_58391;
var statearr_58397_58505 = state_58391__$1;
(statearr_58397_58505[(2)] = inst_58375);

(statearr_58397_58505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58392 === (6))){
var inst_58372 = (state_58391[(7)]);
var inst_58377 = (state_58391[(8)]);
var inst_58377__$1 = cljs.core.async.chan.call(null,(1));
var inst_58378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58379 = [inst_58372,inst_58377__$1];
var inst_58380 = (new cljs.core.PersistentVector(null,2,(5),inst_58378,inst_58379,null));
var state_58391__$1 = (function (){var statearr_58398 = state_58391;
(statearr_58398[(8)] = inst_58377__$1);

return statearr_58398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58391__$1,(8),jobs,inst_58380);
} else {
if((state_val_58392 === (7))){
var inst_58387 = (state_58391[(2)]);
var state_58391__$1 = state_58391;
var statearr_58399_58506 = state_58391__$1;
(statearr_58399_58506[(2)] = inst_58387);

(statearr_58399_58506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58392 === (8))){
var inst_58377 = (state_58391[(8)]);
var inst_58382 = (state_58391[(2)]);
var state_58391__$1 = (function (){var statearr_58400 = state_58391;
(statearr_58400[(9)] = inst_58382);

return statearr_58400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58391__$1,(9),results,inst_58377);
} else {
if((state_val_58392 === (9))){
var inst_58384 = (state_58391[(2)]);
var state_58391__$1 = (function (){var statearr_58401 = state_58391;
(statearr_58401[(10)] = inst_58384);

return statearr_58401;
})();
var statearr_58402_58507 = state_58391__$1;
(statearr_58402_58507[(2)] = null);

(statearr_58402_58507[(1)] = (2));


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
});})(c__58152__auto___58501,jobs,results,process,async))
;
return ((function (switch__50568__auto__,c__58152__auto___58501,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0 = (function (){
var statearr_58403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__);

(statearr_58403[(1)] = (1));

return statearr_58403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1 = (function (state_58391){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58404){if((e58404 instanceof Object)){
var ex__50572__auto__ = e58404;
var statearr_58405_58508 = state_58391;
(statearr_58405_58508[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58509 = state_58391;
state_58391 = G__58509;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = function(state_58391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1.call(this,state_58391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___58501,jobs,results,process,async))
})();
var state__58154__auto__ = (function (){var statearr_58406 = f__58153__auto__.call(null);
(statearr_58406[(6)] = c__58152__auto___58501);

return statearr_58406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___58501,jobs,results,process,async))
);


var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__,jobs,results,process,async){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__,jobs,results,process,async){
return (function (state_58444){
var state_val_58445 = (state_58444[(1)]);
if((state_val_58445 === (7))){
var inst_58440 = (state_58444[(2)]);
var state_58444__$1 = state_58444;
var statearr_58446_58510 = state_58444__$1;
(statearr_58446_58510[(2)] = inst_58440);

(statearr_58446_58510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (20))){
var state_58444__$1 = state_58444;
var statearr_58447_58511 = state_58444__$1;
(statearr_58447_58511[(2)] = null);

(statearr_58447_58511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (1))){
var state_58444__$1 = state_58444;
var statearr_58448_58512 = state_58444__$1;
(statearr_58448_58512[(2)] = null);

(statearr_58448_58512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (4))){
var inst_58409 = (state_58444[(7)]);
var inst_58409__$1 = (state_58444[(2)]);
var inst_58410 = (inst_58409__$1 == null);
var state_58444__$1 = (function (){var statearr_58449 = state_58444;
(statearr_58449[(7)] = inst_58409__$1);

return statearr_58449;
})();
if(cljs.core.truth_(inst_58410)){
var statearr_58450_58513 = state_58444__$1;
(statearr_58450_58513[(1)] = (5));

} else {
var statearr_58451_58514 = state_58444__$1;
(statearr_58451_58514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (15))){
var inst_58422 = (state_58444[(8)]);
var state_58444__$1 = state_58444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58444__$1,(18),to,inst_58422);
} else {
if((state_val_58445 === (21))){
var inst_58435 = (state_58444[(2)]);
var state_58444__$1 = state_58444;
var statearr_58452_58515 = state_58444__$1;
(statearr_58452_58515[(2)] = inst_58435);

(statearr_58452_58515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (13))){
var inst_58437 = (state_58444[(2)]);
var state_58444__$1 = (function (){var statearr_58453 = state_58444;
(statearr_58453[(9)] = inst_58437);

return statearr_58453;
})();
var statearr_58454_58516 = state_58444__$1;
(statearr_58454_58516[(2)] = null);

(statearr_58454_58516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (6))){
var inst_58409 = (state_58444[(7)]);
var state_58444__$1 = state_58444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58444__$1,(11),inst_58409);
} else {
if((state_val_58445 === (17))){
var inst_58430 = (state_58444[(2)]);
var state_58444__$1 = state_58444;
if(cljs.core.truth_(inst_58430)){
var statearr_58455_58517 = state_58444__$1;
(statearr_58455_58517[(1)] = (19));

} else {
var statearr_58456_58518 = state_58444__$1;
(statearr_58456_58518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (3))){
var inst_58442 = (state_58444[(2)]);
var state_58444__$1 = state_58444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58444__$1,inst_58442);
} else {
if((state_val_58445 === (12))){
var inst_58419 = (state_58444[(10)]);
var state_58444__$1 = state_58444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58444__$1,(14),inst_58419);
} else {
if((state_val_58445 === (2))){
var state_58444__$1 = state_58444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58444__$1,(4),results);
} else {
if((state_val_58445 === (19))){
var state_58444__$1 = state_58444;
var statearr_58457_58519 = state_58444__$1;
(statearr_58457_58519[(2)] = null);

(statearr_58457_58519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (11))){
var inst_58419 = (state_58444[(2)]);
var state_58444__$1 = (function (){var statearr_58458 = state_58444;
(statearr_58458[(10)] = inst_58419);

return statearr_58458;
})();
var statearr_58459_58520 = state_58444__$1;
(statearr_58459_58520[(2)] = null);

(statearr_58459_58520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (9))){
var state_58444__$1 = state_58444;
var statearr_58460_58521 = state_58444__$1;
(statearr_58460_58521[(2)] = null);

(statearr_58460_58521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (5))){
var state_58444__$1 = state_58444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58461_58522 = state_58444__$1;
(statearr_58461_58522[(1)] = (8));

} else {
var statearr_58462_58523 = state_58444__$1;
(statearr_58462_58523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (14))){
var inst_58424 = (state_58444[(11)]);
var inst_58422 = (state_58444[(8)]);
var inst_58422__$1 = (state_58444[(2)]);
var inst_58423 = (inst_58422__$1 == null);
var inst_58424__$1 = cljs.core.not.call(null,inst_58423);
var state_58444__$1 = (function (){var statearr_58463 = state_58444;
(statearr_58463[(11)] = inst_58424__$1);

(statearr_58463[(8)] = inst_58422__$1);

return statearr_58463;
})();
if(inst_58424__$1){
var statearr_58464_58524 = state_58444__$1;
(statearr_58464_58524[(1)] = (15));

} else {
var statearr_58465_58525 = state_58444__$1;
(statearr_58465_58525[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (16))){
var inst_58424 = (state_58444[(11)]);
var state_58444__$1 = state_58444;
var statearr_58466_58526 = state_58444__$1;
(statearr_58466_58526[(2)] = inst_58424);

(statearr_58466_58526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (10))){
var inst_58416 = (state_58444[(2)]);
var state_58444__$1 = state_58444;
var statearr_58467_58527 = state_58444__$1;
(statearr_58467_58527[(2)] = inst_58416);

(statearr_58467_58527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (18))){
var inst_58427 = (state_58444[(2)]);
var state_58444__$1 = state_58444;
var statearr_58468_58528 = state_58444__$1;
(statearr_58468_58528[(2)] = inst_58427);

(statearr_58468_58528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58445 === (8))){
var inst_58413 = cljs.core.async.close_BANG_.call(null,to);
var state_58444__$1 = state_58444;
var statearr_58469_58529 = state_58444__$1;
(statearr_58469_58529[(2)] = inst_58413);

(statearr_58469_58529[(1)] = (10));


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
});})(c__58152__auto__,jobs,results,process,async))
;
return ((function (switch__50568__auto__,c__58152__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0 = (function (){
var statearr_58470 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__);

(statearr_58470[(1)] = (1));

return statearr_58470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1 = (function (state_58444){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58471){if((e58471 instanceof Object)){
var ex__50572__auto__ = e58471;
var statearr_58472_58530 = state_58444;
(statearr_58472_58530[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58531 = state_58444;
state_58444 = G__58531;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__ = function(state_58444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1.call(this,state_58444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50569__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__,jobs,results,process,async))
})();
var state__58154__auto__ = (function (){var statearr_58473 = f__58153__auto__.call(null);
(statearr_58473[(6)] = c__58152__auto__);

return statearr_58473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__,jobs,results,process,async))
);

return c__58152__auto__;
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
var G__58533 = arguments.length;
switch (G__58533) {
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
var G__58536 = arguments.length;
switch (G__58536) {
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
var G__58539 = arguments.length;
switch (G__58539) {
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
var c__58152__auto___58588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___58588,tc,fc){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___58588,tc,fc){
return (function (state_58565){
var state_val_58566 = (state_58565[(1)]);
if((state_val_58566 === (7))){
var inst_58561 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
var statearr_58567_58589 = state_58565__$1;
(statearr_58567_58589[(2)] = inst_58561);

(statearr_58567_58589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (1))){
var state_58565__$1 = state_58565;
var statearr_58568_58590 = state_58565__$1;
(statearr_58568_58590[(2)] = null);

(statearr_58568_58590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (4))){
var inst_58542 = (state_58565[(7)]);
var inst_58542__$1 = (state_58565[(2)]);
var inst_58543 = (inst_58542__$1 == null);
var state_58565__$1 = (function (){var statearr_58569 = state_58565;
(statearr_58569[(7)] = inst_58542__$1);

return statearr_58569;
})();
if(cljs.core.truth_(inst_58543)){
var statearr_58570_58591 = state_58565__$1;
(statearr_58570_58591[(1)] = (5));

} else {
var statearr_58571_58592 = state_58565__$1;
(statearr_58571_58592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (13))){
var state_58565__$1 = state_58565;
var statearr_58572_58593 = state_58565__$1;
(statearr_58572_58593[(2)] = null);

(statearr_58572_58593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (6))){
var inst_58542 = (state_58565[(7)]);
var inst_58548 = p.call(null,inst_58542);
var state_58565__$1 = state_58565;
if(cljs.core.truth_(inst_58548)){
var statearr_58573_58594 = state_58565__$1;
(statearr_58573_58594[(1)] = (9));

} else {
var statearr_58574_58595 = state_58565__$1;
(statearr_58574_58595[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (3))){
var inst_58563 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58565__$1,inst_58563);
} else {
if((state_val_58566 === (12))){
var state_58565__$1 = state_58565;
var statearr_58575_58596 = state_58565__$1;
(statearr_58575_58596[(2)] = null);

(statearr_58575_58596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (2))){
var state_58565__$1 = state_58565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58565__$1,(4),ch);
} else {
if((state_val_58566 === (11))){
var inst_58542 = (state_58565[(7)]);
var inst_58552 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58565__$1,(8),inst_58552,inst_58542);
} else {
if((state_val_58566 === (9))){
var state_58565__$1 = state_58565;
var statearr_58576_58597 = state_58565__$1;
(statearr_58576_58597[(2)] = tc);

(statearr_58576_58597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (5))){
var inst_58545 = cljs.core.async.close_BANG_.call(null,tc);
var inst_58546 = cljs.core.async.close_BANG_.call(null,fc);
var state_58565__$1 = (function (){var statearr_58577 = state_58565;
(statearr_58577[(8)] = inst_58545);

return statearr_58577;
})();
var statearr_58578_58598 = state_58565__$1;
(statearr_58578_58598[(2)] = inst_58546);

(statearr_58578_58598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (14))){
var inst_58559 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
var statearr_58579_58599 = state_58565__$1;
(statearr_58579_58599[(2)] = inst_58559);

(statearr_58579_58599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (10))){
var state_58565__$1 = state_58565;
var statearr_58580_58600 = state_58565__$1;
(statearr_58580_58600[(2)] = fc);

(statearr_58580_58600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (8))){
var inst_58554 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
if(cljs.core.truth_(inst_58554)){
var statearr_58581_58601 = state_58565__$1;
(statearr_58581_58601[(1)] = (12));

} else {
var statearr_58582_58602 = state_58565__$1;
(statearr_58582_58602[(1)] = (13));

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
});})(c__58152__auto___58588,tc,fc))
;
return ((function (switch__50568__auto__,c__58152__auto___58588,tc,fc){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_58583 = [null,null,null,null,null,null,null,null,null];
(statearr_58583[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_58583[(1)] = (1));

return statearr_58583;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_58565){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58584){if((e58584 instanceof Object)){
var ex__50572__auto__ = e58584;
var statearr_58585_58603 = state_58565;
(statearr_58585_58603[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58604 = state_58565;
state_58565 = G__58604;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_58565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_58565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___58588,tc,fc))
})();
var state__58154__auto__ = (function (){var statearr_58586 = f__58153__auto__.call(null);
(statearr_58586[(6)] = c__58152__auto___58588);

return statearr_58586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___58588,tc,fc))
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
var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__){
return (function (state_58625){
var state_val_58626 = (state_58625[(1)]);
if((state_val_58626 === (7))){
var inst_58621 = (state_58625[(2)]);
var state_58625__$1 = state_58625;
var statearr_58627_58645 = state_58625__$1;
(statearr_58627_58645[(2)] = inst_58621);

(statearr_58627_58645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58626 === (1))){
var inst_58605 = init;
var state_58625__$1 = (function (){var statearr_58628 = state_58625;
(statearr_58628[(7)] = inst_58605);

return statearr_58628;
})();
var statearr_58629_58646 = state_58625__$1;
(statearr_58629_58646[(2)] = null);

(statearr_58629_58646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58626 === (4))){
var inst_58608 = (state_58625[(8)]);
var inst_58608__$1 = (state_58625[(2)]);
var inst_58609 = (inst_58608__$1 == null);
var state_58625__$1 = (function (){var statearr_58630 = state_58625;
(statearr_58630[(8)] = inst_58608__$1);

return statearr_58630;
})();
if(cljs.core.truth_(inst_58609)){
var statearr_58631_58647 = state_58625__$1;
(statearr_58631_58647[(1)] = (5));

} else {
var statearr_58632_58648 = state_58625__$1;
(statearr_58632_58648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58626 === (6))){
var inst_58608 = (state_58625[(8)]);
var inst_58605 = (state_58625[(7)]);
var inst_58612 = (state_58625[(9)]);
var inst_58612__$1 = f.call(null,inst_58605,inst_58608);
var inst_58613 = cljs.core.reduced_QMARK_.call(null,inst_58612__$1);
var state_58625__$1 = (function (){var statearr_58633 = state_58625;
(statearr_58633[(9)] = inst_58612__$1);

return statearr_58633;
})();
if(inst_58613){
var statearr_58634_58649 = state_58625__$1;
(statearr_58634_58649[(1)] = (8));

} else {
var statearr_58635_58650 = state_58625__$1;
(statearr_58635_58650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58626 === (3))){
var inst_58623 = (state_58625[(2)]);
var state_58625__$1 = state_58625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58625__$1,inst_58623);
} else {
if((state_val_58626 === (2))){
var state_58625__$1 = state_58625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58625__$1,(4),ch);
} else {
if((state_val_58626 === (9))){
var inst_58612 = (state_58625[(9)]);
var inst_58605 = inst_58612;
var state_58625__$1 = (function (){var statearr_58636 = state_58625;
(statearr_58636[(7)] = inst_58605);

return statearr_58636;
})();
var statearr_58637_58651 = state_58625__$1;
(statearr_58637_58651[(2)] = null);

(statearr_58637_58651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58626 === (5))){
var inst_58605 = (state_58625[(7)]);
var state_58625__$1 = state_58625;
var statearr_58638_58652 = state_58625__$1;
(statearr_58638_58652[(2)] = inst_58605);

(statearr_58638_58652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58626 === (10))){
var inst_58619 = (state_58625[(2)]);
var state_58625__$1 = state_58625;
var statearr_58639_58653 = state_58625__$1;
(statearr_58639_58653[(2)] = inst_58619);

(statearr_58639_58653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58626 === (8))){
var inst_58612 = (state_58625[(9)]);
var inst_58615 = cljs.core.deref.call(null,inst_58612);
var state_58625__$1 = state_58625;
var statearr_58640_58654 = state_58625__$1;
(statearr_58640_58654[(2)] = inst_58615);

(statearr_58640_58654[(1)] = (10));


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
});})(c__58152__auto__))
;
return ((function (switch__50568__auto__,c__58152__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50569__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50569__auto____0 = (function (){
var statearr_58641 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58641[(0)] = cljs$core$async$reduce_$_state_machine__50569__auto__);

(statearr_58641[(1)] = (1));

return statearr_58641;
});
var cljs$core$async$reduce_$_state_machine__50569__auto____1 = (function (state_58625){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58642){if((e58642 instanceof Object)){
var ex__50572__auto__ = e58642;
var statearr_58643_58655 = state_58625;
(statearr_58643_58655[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58656 = state_58625;
state_58625 = G__58656;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50569__auto__ = function(state_58625){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50569__auto____1.call(this,state_58625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50569__auto____0;
cljs$core$async$reduce_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50569__auto____1;
return cljs$core$async$reduce_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__))
})();
var state__58154__auto__ = (function (){var statearr_58644 = f__58153__auto__.call(null);
(statearr_58644[(6)] = c__58152__auto__);

return statearr_58644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__))
);

return c__58152__auto__;
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
var G__58658 = arguments.length;
switch (G__58658) {
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
var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__){
return (function (state_58683){
var state_val_58684 = (state_58683[(1)]);
if((state_val_58684 === (7))){
var inst_58665 = (state_58683[(2)]);
var state_58683__$1 = state_58683;
var statearr_58685_58706 = state_58683__$1;
(statearr_58685_58706[(2)] = inst_58665);

(statearr_58685_58706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (1))){
var inst_58659 = cljs.core.seq.call(null,coll);
var inst_58660 = inst_58659;
var state_58683__$1 = (function (){var statearr_58686 = state_58683;
(statearr_58686[(7)] = inst_58660);

return statearr_58686;
})();
var statearr_58687_58707 = state_58683__$1;
(statearr_58687_58707[(2)] = null);

(statearr_58687_58707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (4))){
var inst_58660 = (state_58683[(7)]);
var inst_58663 = cljs.core.first.call(null,inst_58660);
var state_58683__$1 = state_58683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58683__$1,(7),ch,inst_58663);
} else {
if((state_val_58684 === (13))){
var inst_58677 = (state_58683[(2)]);
var state_58683__$1 = state_58683;
var statearr_58688_58708 = state_58683__$1;
(statearr_58688_58708[(2)] = inst_58677);

(statearr_58688_58708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (6))){
var inst_58668 = (state_58683[(2)]);
var state_58683__$1 = state_58683;
if(cljs.core.truth_(inst_58668)){
var statearr_58689_58709 = state_58683__$1;
(statearr_58689_58709[(1)] = (8));

} else {
var statearr_58690_58710 = state_58683__$1;
(statearr_58690_58710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (3))){
var inst_58681 = (state_58683[(2)]);
var state_58683__$1 = state_58683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58683__$1,inst_58681);
} else {
if((state_val_58684 === (12))){
var state_58683__$1 = state_58683;
var statearr_58691_58711 = state_58683__$1;
(statearr_58691_58711[(2)] = null);

(statearr_58691_58711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (2))){
var inst_58660 = (state_58683[(7)]);
var state_58683__$1 = state_58683;
if(cljs.core.truth_(inst_58660)){
var statearr_58692_58712 = state_58683__$1;
(statearr_58692_58712[(1)] = (4));

} else {
var statearr_58693_58713 = state_58683__$1;
(statearr_58693_58713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (11))){
var inst_58674 = cljs.core.async.close_BANG_.call(null,ch);
var state_58683__$1 = state_58683;
var statearr_58694_58714 = state_58683__$1;
(statearr_58694_58714[(2)] = inst_58674);

(statearr_58694_58714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (9))){
var state_58683__$1 = state_58683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58695_58715 = state_58683__$1;
(statearr_58695_58715[(1)] = (11));

} else {
var statearr_58696_58716 = state_58683__$1;
(statearr_58696_58716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (5))){
var inst_58660 = (state_58683[(7)]);
var state_58683__$1 = state_58683;
var statearr_58697_58717 = state_58683__$1;
(statearr_58697_58717[(2)] = inst_58660);

(statearr_58697_58717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (10))){
var inst_58679 = (state_58683[(2)]);
var state_58683__$1 = state_58683;
var statearr_58698_58718 = state_58683__$1;
(statearr_58698_58718[(2)] = inst_58679);

(statearr_58698_58718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58684 === (8))){
var inst_58660 = (state_58683[(7)]);
var inst_58670 = cljs.core.next.call(null,inst_58660);
var inst_58660__$1 = inst_58670;
var state_58683__$1 = (function (){var statearr_58699 = state_58683;
(statearr_58699[(7)] = inst_58660__$1);

return statearr_58699;
})();
var statearr_58700_58719 = state_58683__$1;
(statearr_58700_58719[(2)] = null);

(statearr_58700_58719[(1)] = (2));


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
});})(c__58152__auto__))
;
return ((function (switch__50568__auto__,c__58152__auto__){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_58701 = [null,null,null,null,null,null,null,null];
(statearr_58701[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_58701[(1)] = (1));

return statearr_58701;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_58683){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58702){if((e58702 instanceof Object)){
var ex__50572__auto__ = e58702;
var statearr_58703_58720 = state_58683;
(statearr_58703_58720[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58721 = state_58683;
state_58683 = G__58721;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_58683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_58683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__))
})();
var state__58154__auto__ = (function (){var statearr_58704 = f__58153__auto__.call(null);
(statearr_58704[(6)] = c__58152__auto__);

return statearr_58704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__))
);

return c__58152__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async58722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58722 = (function (ch,cs,meta58723){
this.ch = ch;
this.cs = cs;
this.meta58723 = meta58723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_58724,meta58723__$1){
var self__ = this;
var _58724__$1 = this;
return (new cljs.core.async.t_cljs$core$async58722(self__.ch,self__.cs,meta58723__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async58722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_58724){
var self__ = this;
var _58724__$1 = this;
return self__.meta58723;
});})(cs))
;

cljs.core.async.t_cljs$core$async58722.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async58722.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58722.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58722.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58722.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58722.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58723","meta58723",-753600226,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async58722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58722";

cljs.core.async.t_cljs$core$async58722.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58722");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58722.
 */
cljs.core.async.__GT_t_cljs$core$async58722 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async58722(ch__$1,cs__$1,meta58723){
return (new cljs.core.async.t_cljs$core$async58722(ch__$1,cs__$1,meta58723));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async58722(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__58152__auto___58944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___58944,cs,m,dchan,dctr,done){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___58944,cs,m,dchan,dctr,done){
return (function (state_58859){
var state_val_58860 = (state_58859[(1)]);
if((state_val_58860 === (7))){
var inst_58855 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58861_58945 = state_58859__$1;
(statearr_58861_58945[(2)] = inst_58855);

(statearr_58861_58945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (20))){
var inst_58758 = (state_58859[(7)]);
var inst_58770 = cljs.core.first.call(null,inst_58758);
var inst_58771 = cljs.core.nth.call(null,inst_58770,(0),null);
var inst_58772 = cljs.core.nth.call(null,inst_58770,(1),null);
var state_58859__$1 = (function (){var statearr_58862 = state_58859;
(statearr_58862[(8)] = inst_58771);

return statearr_58862;
})();
if(cljs.core.truth_(inst_58772)){
var statearr_58863_58946 = state_58859__$1;
(statearr_58863_58946[(1)] = (22));

} else {
var statearr_58864_58947 = state_58859__$1;
(statearr_58864_58947[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (27))){
var inst_58802 = (state_58859[(9)]);
var inst_58800 = (state_58859[(10)]);
var inst_58727 = (state_58859[(11)]);
var inst_58807 = (state_58859[(12)]);
var inst_58807__$1 = cljs.core._nth.call(null,inst_58800,inst_58802);
var inst_58808 = cljs.core.async.put_BANG_.call(null,inst_58807__$1,inst_58727,done);
var state_58859__$1 = (function (){var statearr_58865 = state_58859;
(statearr_58865[(12)] = inst_58807__$1);

return statearr_58865;
})();
if(cljs.core.truth_(inst_58808)){
var statearr_58866_58948 = state_58859__$1;
(statearr_58866_58948[(1)] = (30));

} else {
var statearr_58867_58949 = state_58859__$1;
(statearr_58867_58949[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (1))){
var state_58859__$1 = state_58859;
var statearr_58868_58950 = state_58859__$1;
(statearr_58868_58950[(2)] = null);

(statearr_58868_58950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (24))){
var inst_58758 = (state_58859[(7)]);
var inst_58777 = (state_58859[(2)]);
var inst_58778 = cljs.core.next.call(null,inst_58758);
var inst_58736 = inst_58778;
var inst_58737 = null;
var inst_58738 = (0);
var inst_58739 = (0);
var state_58859__$1 = (function (){var statearr_58869 = state_58859;
(statearr_58869[(13)] = inst_58777);

(statearr_58869[(14)] = inst_58736);

(statearr_58869[(15)] = inst_58739);

(statearr_58869[(16)] = inst_58737);

(statearr_58869[(17)] = inst_58738);

return statearr_58869;
})();
var statearr_58870_58951 = state_58859__$1;
(statearr_58870_58951[(2)] = null);

(statearr_58870_58951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (39))){
var state_58859__$1 = state_58859;
var statearr_58874_58952 = state_58859__$1;
(statearr_58874_58952[(2)] = null);

(statearr_58874_58952[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (4))){
var inst_58727 = (state_58859[(11)]);
var inst_58727__$1 = (state_58859[(2)]);
var inst_58728 = (inst_58727__$1 == null);
var state_58859__$1 = (function (){var statearr_58875 = state_58859;
(statearr_58875[(11)] = inst_58727__$1);

return statearr_58875;
})();
if(cljs.core.truth_(inst_58728)){
var statearr_58876_58953 = state_58859__$1;
(statearr_58876_58953[(1)] = (5));

} else {
var statearr_58877_58954 = state_58859__$1;
(statearr_58877_58954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (15))){
var inst_58736 = (state_58859[(14)]);
var inst_58739 = (state_58859[(15)]);
var inst_58737 = (state_58859[(16)]);
var inst_58738 = (state_58859[(17)]);
var inst_58754 = (state_58859[(2)]);
var inst_58755 = (inst_58739 + (1));
var tmp58871 = inst_58736;
var tmp58872 = inst_58737;
var tmp58873 = inst_58738;
var inst_58736__$1 = tmp58871;
var inst_58737__$1 = tmp58872;
var inst_58738__$1 = tmp58873;
var inst_58739__$1 = inst_58755;
var state_58859__$1 = (function (){var statearr_58878 = state_58859;
(statearr_58878[(14)] = inst_58736__$1);

(statearr_58878[(15)] = inst_58739__$1);

(statearr_58878[(16)] = inst_58737__$1);

(statearr_58878[(18)] = inst_58754);

(statearr_58878[(17)] = inst_58738__$1);

return statearr_58878;
})();
var statearr_58879_58955 = state_58859__$1;
(statearr_58879_58955[(2)] = null);

(statearr_58879_58955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (21))){
var inst_58781 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58883_58956 = state_58859__$1;
(statearr_58883_58956[(2)] = inst_58781);

(statearr_58883_58956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (31))){
var inst_58807 = (state_58859[(12)]);
var inst_58811 = done.call(null,null);
var inst_58812 = cljs.core.async.untap_STAR_.call(null,m,inst_58807);
var state_58859__$1 = (function (){var statearr_58884 = state_58859;
(statearr_58884[(19)] = inst_58811);

return statearr_58884;
})();
var statearr_58885_58957 = state_58859__$1;
(statearr_58885_58957[(2)] = inst_58812);

(statearr_58885_58957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (32))){
var inst_58799 = (state_58859[(20)]);
var inst_58802 = (state_58859[(9)]);
var inst_58800 = (state_58859[(10)]);
var inst_58801 = (state_58859[(21)]);
var inst_58814 = (state_58859[(2)]);
var inst_58815 = (inst_58802 + (1));
var tmp58880 = inst_58799;
var tmp58881 = inst_58800;
var tmp58882 = inst_58801;
var inst_58799__$1 = tmp58880;
var inst_58800__$1 = tmp58881;
var inst_58801__$1 = tmp58882;
var inst_58802__$1 = inst_58815;
var state_58859__$1 = (function (){var statearr_58886 = state_58859;
(statearr_58886[(20)] = inst_58799__$1);

(statearr_58886[(9)] = inst_58802__$1);

(statearr_58886[(10)] = inst_58800__$1);

(statearr_58886[(21)] = inst_58801__$1);

(statearr_58886[(22)] = inst_58814);

return statearr_58886;
})();
var statearr_58887_58958 = state_58859__$1;
(statearr_58887_58958[(2)] = null);

(statearr_58887_58958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (40))){
var inst_58827 = (state_58859[(23)]);
var inst_58831 = done.call(null,null);
var inst_58832 = cljs.core.async.untap_STAR_.call(null,m,inst_58827);
var state_58859__$1 = (function (){var statearr_58888 = state_58859;
(statearr_58888[(24)] = inst_58831);

return statearr_58888;
})();
var statearr_58889_58959 = state_58859__$1;
(statearr_58889_58959[(2)] = inst_58832);

(statearr_58889_58959[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (33))){
var inst_58818 = (state_58859[(25)]);
var inst_58820 = cljs.core.chunked_seq_QMARK_.call(null,inst_58818);
var state_58859__$1 = state_58859;
if(inst_58820){
var statearr_58890_58960 = state_58859__$1;
(statearr_58890_58960[(1)] = (36));

} else {
var statearr_58891_58961 = state_58859__$1;
(statearr_58891_58961[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (13))){
var inst_58748 = (state_58859[(26)]);
var inst_58751 = cljs.core.async.close_BANG_.call(null,inst_58748);
var state_58859__$1 = state_58859;
var statearr_58892_58962 = state_58859__$1;
(statearr_58892_58962[(2)] = inst_58751);

(statearr_58892_58962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (22))){
var inst_58771 = (state_58859[(8)]);
var inst_58774 = cljs.core.async.close_BANG_.call(null,inst_58771);
var state_58859__$1 = state_58859;
var statearr_58893_58963 = state_58859__$1;
(statearr_58893_58963[(2)] = inst_58774);

(statearr_58893_58963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (36))){
var inst_58818 = (state_58859[(25)]);
var inst_58822 = cljs.core.chunk_first.call(null,inst_58818);
var inst_58823 = cljs.core.chunk_rest.call(null,inst_58818);
var inst_58824 = cljs.core.count.call(null,inst_58822);
var inst_58799 = inst_58823;
var inst_58800 = inst_58822;
var inst_58801 = inst_58824;
var inst_58802 = (0);
var state_58859__$1 = (function (){var statearr_58894 = state_58859;
(statearr_58894[(20)] = inst_58799);

(statearr_58894[(9)] = inst_58802);

(statearr_58894[(10)] = inst_58800);

(statearr_58894[(21)] = inst_58801);

return statearr_58894;
})();
var statearr_58895_58964 = state_58859__$1;
(statearr_58895_58964[(2)] = null);

(statearr_58895_58964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (41))){
var inst_58818 = (state_58859[(25)]);
var inst_58834 = (state_58859[(2)]);
var inst_58835 = cljs.core.next.call(null,inst_58818);
var inst_58799 = inst_58835;
var inst_58800 = null;
var inst_58801 = (0);
var inst_58802 = (0);
var state_58859__$1 = (function (){var statearr_58896 = state_58859;
(statearr_58896[(20)] = inst_58799);

(statearr_58896[(9)] = inst_58802);

(statearr_58896[(10)] = inst_58800);

(statearr_58896[(21)] = inst_58801);

(statearr_58896[(27)] = inst_58834);

return statearr_58896;
})();
var statearr_58897_58965 = state_58859__$1;
(statearr_58897_58965[(2)] = null);

(statearr_58897_58965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (43))){
var state_58859__$1 = state_58859;
var statearr_58898_58966 = state_58859__$1;
(statearr_58898_58966[(2)] = null);

(statearr_58898_58966[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (29))){
var inst_58843 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58899_58967 = state_58859__$1;
(statearr_58899_58967[(2)] = inst_58843);

(statearr_58899_58967[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (44))){
var inst_58852 = (state_58859[(2)]);
var state_58859__$1 = (function (){var statearr_58900 = state_58859;
(statearr_58900[(28)] = inst_58852);

return statearr_58900;
})();
var statearr_58901_58968 = state_58859__$1;
(statearr_58901_58968[(2)] = null);

(statearr_58901_58968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (6))){
var inst_58791 = (state_58859[(29)]);
var inst_58790 = cljs.core.deref.call(null,cs);
var inst_58791__$1 = cljs.core.keys.call(null,inst_58790);
var inst_58792 = cljs.core.count.call(null,inst_58791__$1);
var inst_58793 = cljs.core.reset_BANG_.call(null,dctr,inst_58792);
var inst_58798 = cljs.core.seq.call(null,inst_58791__$1);
var inst_58799 = inst_58798;
var inst_58800 = null;
var inst_58801 = (0);
var inst_58802 = (0);
var state_58859__$1 = (function (){var statearr_58902 = state_58859;
(statearr_58902[(20)] = inst_58799);

(statearr_58902[(9)] = inst_58802);

(statearr_58902[(10)] = inst_58800);

(statearr_58902[(30)] = inst_58793);

(statearr_58902[(29)] = inst_58791__$1);

(statearr_58902[(21)] = inst_58801);

return statearr_58902;
})();
var statearr_58903_58969 = state_58859__$1;
(statearr_58903_58969[(2)] = null);

(statearr_58903_58969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (28))){
var inst_58799 = (state_58859[(20)]);
var inst_58818 = (state_58859[(25)]);
var inst_58818__$1 = cljs.core.seq.call(null,inst_58799);
var state_58859__$1 = (function (){var statearr_58904 = state_58859;
(statearr_58904[(25)] = inst_58818__$1);

return statearr_58904;
})();
if(inst_58818__$1){
var statearr_58905_58970 = state_58859__$1;
(statearr_58905_58970[(1)] = (33));

} else {
var statearr_58906_58971 = state_58859__$1;
(statearr_58906_58971[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (25))){
var inst_58802 = (state_58859[(9)]);
var inst_58801 = (state_58859[(21)]);
var inst_58804 = (inst_58802 < inst_58801);
var inst_58805 = inst_58804;
var state_58859__$1 = state_58859;
if(cljs.core.truth_(inst_58805)){
var statearr_58907_58972 = state_58859__$1;
(statearr_58907_58972[(1)] = (27));

} else {
var statearr_58908_58973 = state_58859__$1;
(statearr_58908_58973[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (34))){
var state_58859__$1 = state_58859;
var statearr_58909_58974 = state_58859__$1;
(statearr_58909_58974[(2)] = null);

(statearr_58909_58974[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (17))){
var state_58859__$1 = state_58859;
var statearr_58910_58975 = state_58859__$1;
(statearr_58910_58975[(2)] = null);

(statearr_58910_58975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (3))){
var inst_58857 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58859__$1,inst_58857);
} else {
if((state_val_58860 === (12))){
var inst_58786 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58911_58976 = state_58859__$1;
(statearr_58911_58976[(2)] = inst_58786);

(statearr_58911_58976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (2))){
var state_58859__$1 = state_58859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58859__$1,(4),ch);
} else {
if((state_val_58860 === (23))){
var state_58859__$1 = state_58859;
var statearr_58912_58977 = state_58859__$1;
(statearr_58912_58977[(2)] = null);

(statearr_58912_58977[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (35))){
var inst_58841 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58913_58978 = state_58859__$1;
(statearr_58913_58978[(2)] = inst_58841);

(statearr_58913_58978[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (19))){
var inst_58758 = (state_58859[(7)]);
var inst_58762 = cljs.core.chunk_first.call(null,inst_58758);
var inst_58763 = cljs.core.chunk_rest.call(null,inst_58758);
var inst_58764 = cljs.core.count.call(null,inst_58762);
var inst_58736 = inst_58763;
var inst_58737 = inst_58762;
var inst_58738 = inst_58764;
var inst_58739 = (0);
var state_58859__$1 = (function (){var statearr_58914 = state_58859;
(statearr_58914[(14)] = inst_58736);

(statearr_58914[(15)] = inst_58739);

(statearr_58914[(16)] = inst_58737);

(statearr_58914[(17)] = inst_58738);

return statearr_58914;
})();
var statearr_58915_58979 = state_58859__$1;
(statearr_58915_58979[(2)] = null);

(statearr_58915_58979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (11))){
var inst_58736 = (state_58859[(14)]);
var inst_58758 = (state_58859[(7)]);
var inst_58758__$1 = cljs.core.seq.call(null,inst_58736);
var state_58859__$1 = (function (){var statearr_58916 = state_58859;
(statearr_58916[(7)] = inst_58758__$1);

return statearr_58916;
})();
if(inst_58758__$1){
var statearr_58917_58980 = state_58859__$1;
(statearr_58917_58980[(1)] = (16));

} else {
var statearr_58918_58981 = state_58859__$1;
(statearr_58918_58981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (9))){
var inst_58788 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58919_58982 = state_58859__$1;
(statearr_58919_58982[(2)] = inst_58788);

(statearr_58919_58982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (5))){
var inst_58734 = cljs.core.deref.call(null,cs);
var inst_58735 = cljs.core.seq.call(null,inst_58734);
var inst_58736 = inst_58735;
var inst_58737 = null;
var inst_58738 = (0);
var inst_58739 = (0);
var state_58859__$1 = (function (){var statearr_58920 = state_58859;
(statearr_58920[(14)] = inst_58736);

(statearr_58920[(15)] = inst_58739);

(statearr_58920[(16)] = inst_58737);

(statearr_58920[(17)] = inst_58738);

return statearr_58920;
})();
var statearr_58921_58983 = state_58859__$1;
(statearr_58921_58983[(2)] = null);

(statearr_58921_58983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (14))){
var state_58859__$1 = state_58859;
var statearr_58922_58984 = state_58859__$1;
(statearr_58922_58984[(2)] = null);

(statearr_58922_58984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (45))){
var inst_58849 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58923_58985 = state_58859__$1;
(statearr_58923_58985[(2)] = inst_58849);

(statearr_58923_58985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (26))){
var inst_58791 = (state_58859[(29)]);
var inst_58845 = (state_58859[(2)]);
var inst_58846 = cljs.core.seq.call(null,inst_58791);
var state_58859__$1 = (function (){var statearr_58924 = state_58859;
(statearr_58924[(31)] = inst_58845);

return statearr_58924;
})();
if(inst_58846){
var statearr_58925_58986 = state_58859__$1;
(statearr_58925_58986[(1)] = (42));

} else {
var statearr_58926_58987 = state_58859__$1;
(statearr_58926_58987[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (16))){
var inst_58758 = (state_58859[(7)]);
var inst_58760 = cljs.core.chunked_seq_QMARK_.call(null,inst_58758);
var state_58859__$1 = state_58859;
if(inst_58760){
var statearr_58927_58988 = state_58859__$1;
(statearr_58927_58988[(1)] = (19));

} else {
var statearr_58928_58989 = state_58859__$1;
(statearr_58928_58989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (38))){
var inst_58838 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58929_58990 = state_58859__$1;
(statearr_58929_58990[(2)] = inst_58838);

(statearr_58929_58990[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (30))){
var state_58859__$1 = state_58859;
var statearr_58930_58991 = state_58859__$1;
(statearr_58930_58991[(2)] = null);

(statearr_58930_58991[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (10))){
var inst_58739 = (state_58859[(15)]);
var inst_58737 = (state_58859[(16)]);
var inst_58747 = cljs.core._nth.call(null,inst_58737,inst_58739);
var inst_58748 = cljs.core.nth.call(null,inst_58747,(0),null);
var inst_58749 = cljs.core.nth.call(null,inst_58747,(1),null);
var state_58859__$1 = (function (){var statearr_58931 = state_58859;
(statearr_58931[(26)] = inst_58748);

return statearr_58931;
})();
if(cljs.core.truth_(inst_58749)){
var statearr_58932_58992 = state_58859__$1;
(statearr_58932_58992[(1)] = (13));

} else {
var statearr_58933_58993 = state_58859__$1;
(statearr_58933_58993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (18))){
var inst_58784 = (state_58859[(2)]);
var state_58859__$1 = state_58859;
var statearr_58934_58994 = state_58859__$1;
(statearr_58934_58994[(2)] = inst_58784);

(statearr_58934_58994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (42))){
var state_58859__$1 = state_58859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58859__$1,(45),dchan);
} else {
if((state_val_58860 === (37))){
var inst_58727 = (state_58859[(11)]);
var inst_58818 = (state_58859[(25)]);
var inst_58827 = (state_58859[(23)]);
var inst_58827__$1 = cljs.core.first.call(null,inst_58818);
var inst_58828 = cljs.core.async.put_BANG_.call(null,inst_58827__$1,inst_58727,done);
var state_58859__$1 = (function (){var statearr_58935 = state_58859;
(statearr_58935[(23)] = inst_58827__$1);

return statearr_58935;
})();
if(cljs.core.truth_(inst_58828)){
var statearr_58936_58995 = state_58859__$1;
(statearr_58936_58995[(1)] = (39));

} else {
var statearr_58937_58996 = state_58859__$1;
(statearr_58937_58996[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58860 === (8))){
var inst_58739 = (state_58859[(15)]);
var inst_58738 = (state_58859[(17)]);
var inst_58741 = (inst_58739 < inst_58738);
var inst_58742 = inst_58741;
var state_58859__$1 = state_58859;
if(cljs.core.truth_(inst_58742)){
var statearr_58938_58997 = state_58859__$1;
(statearr_58938_58997[(1)] = (10));

} else {
var statearr_58939_58998 = state_58859__$1;
(statearr_58939_58998[(1)] = (11));

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
});})(c__58152__auto___58944,cs,m,dchan,dctr,done))
;
return ((function (switch__50568__auto__,c__58152__auto___58944,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50569__auto__ = null;
var cljs$core$async$mult_$_state_machine__50569__auto____0 = (function (){
var statearr_58940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58940[(0)] = cljs$core$async$mult_$_state_machine__50569__auto__);

(statearr_58940[(1)] = (1));

return statearr_58940;
});
var cljs$core$async$mult_$_state_machine__50569__auto____1 = (function (state_58859){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_58859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e58941){if((e58941 instanceof Object)){
var ex__50572__auto__ = e58941;
var statearr_58942_58999 = state_58859;
(statearr_58942_58999[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59000 = state_58859;
state_58859 = G__59000;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50569__auto__ = function(state_58859){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50569__auto____1.call(this,state_58859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50569__auto____0;
cljs$core$async$mult_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50569__auto____1;
return cljs$core$async$mult_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___58944,cs,m,dchan,dctr,done))
})();
var state__58154__auto__ = (function (){var statearr_58943 = f__58153__auto__.call(null);
(statearr_58943[(6)] = c__58152__auto___58944);

return statearr_58943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___58944,cs,m,dchan,dctr,done))
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
var G__59002 = arguments.length;
switch (G__59002) {
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
var len__4499__auto___59014 = arguments.length;
var i__4500__auto___59015 = (0);
while(true){
if((i__4500__auto___59015 < len__4499__auto___59014)){
args__4502__auto__.push((arguments[i__4500__auto___59015]));

var G__59016 = (i__4500__auto___59015 + (1));
i__4500__auto___59015 = G__59016;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59008){
var map__59009 = p__59008;
var map__59009__$1 = ((((!((map__59009 == null)))?(((((map__59009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59009):map__59009);
var opts = map__59009__$1;
var statearr_59011_59017 = state;
(statearr_59011_59017[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__59009,map__59009__$1,opts){
return (function (val){
var statearr_59012_59018 = state;
(statearr_59012_59018[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__59009,map__59009__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_59013_59019 = state;
(statearr_59013_59019[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59004){
var G__59005 = cljs.core.first.call(null,seq59004);
var seq59004__$1 = cljs.core.next.call(null,seq59004);
var G__59006 = cljs.core.first.call(null,seq59004__$1);
var seq59004__$2 = cljs.core.next.call(null,seq59004__$1);
var G__59007 = cljs.core.first.call(null,seq59004__$2);
var seq59004__$3 = cljs.core.next.call(null,seq59004__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59005,G__59006,G__59007,seq59004__$3);
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
if(typeof cljs.core.async.t_cljs$core$async59020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59020 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta59021){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta59021 = meta59021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59022,meta59021__$1){
var self__ = this;
var _59022__$1 = this;
return (new cljs.core.async.t_cljs$core$async59020(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta59021__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59022){
var self__ = this;
var _59022__$1 = this;
return self__.meta59021;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59020.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async59020.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta59021","meta59021",-1185340809,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59020";

cljs.core.async.t_cljs$core$async59020.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59020");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59020.
 */
cljs.core.async.__GT_t_cljs$core$async59020 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async59020(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta59021){
return (new cljs.core.async.t_cljs$core$async59020(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta59021));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async59020(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58152__auto___59184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___59184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___59184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_59124){
var state_val_59125 = (state_59124[(1)]);
if((state_val_59125 === (7))){
var inst_59039 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
var statearr_59126_59185 = state_59124__$1;
(statearr_59126_59185[(2)] = inst_59039);

(statearr_59126_59185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (20))){
var inst_59051 = (state_59124[(7)]);
var state_59124__$1 = state_59124;
var statearr_59127_59186 = state_59124__$1;
(statearr_59127_59186[(2)] = inst_59051);

(statearr_59127_59186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (27))){
var state_59124__$1 = state_59124;
var statearr_59128_59187 = state_59124__$1;
(statearr_59128_59187[(2)] = null);

(statearr_59128_59187[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (1))){
var inst_59026 = (state_59124[(8)]);
var inst_59026__$1 = calc_state.call(null);
var inst_59028 = (inst_59026__$1 == null);
var inst_59029 = cljs.core.not.call(null,inst_59028);
var state_59124__$1 = (function (){var statearr_59129 = state_59124;
(statearr_59129[(8)] = inst_59026__$1);

return statearr_59129;
})();
if(inst_59029){
var statearr_59130_59188 = state_59124__$1;
(statearr_59130_59188[(1)] = (2));

} else {
var statearr_59131_59189 = state_59124__$1;
(statearr_59131_59189[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (24))){
var inst_59098 = (state_59124[(9)]);
var inst_59075 = (state_59124[(10)]);
var inst_59084 = (state_59124[(11)]);
var inst_59098__$1 = inst_59075.call(null,inst_59084);
var state_59124__$1 = (function (){var statearr_59132 = state_59124;
(statearr_59132[(9)] = inst_59098__$1);

return statearr_59132;
})();
if(cljs.core.truth_(inst_59098__$1)){
var statearr_59133_59190 = state_59124__$1;
(statearr_59133_59190[(1)] = (29));

} else {
var statearr_59134_59191 = state_59124__$1;
(statearr_59134_59191[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (4))){
var inst_59042 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
if(cljs.core.truth_(inst_59042)){
var statearr_59135_59192 = state_59124__$1;
(statearr_59135_59192[(1)] = (8));

} else {
var statearr_59136_59193 = state_59124__$1;
(statearr_59136_59193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (15))){
var inst_59069 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
if(cljs.core.truth_(inst_59069)){
var statearr_59137_59194 = state_59124__$1;
(statearr_59137_59194[(1)] = (19));

} else {
var statearr_59138_59195 = state_59124__$1;
(statearr_59138_59195[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (21))){
var inst_59074 = (state_59124[(12)]);
var inst_59074__$1 = (state_59124[(2)]);
var inst_59075 = cljs.core.get.call(null,inst_59074__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59076 = cljs.core.get.call(null,inst_59074__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59077 = cljs.core.get.call(null,inst_59074__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59124__$1 = (function (){var statearr_59139 = state_59124;
(statearr_59139[(13)] = inst_59076);

(statearr_59139[(12)] = inst_59074__$1);

(statearr_59139[(10)] = inst_59075);

return statearr_59139;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_59124__$1,(22),inst_59077);
} else {
if((state_val_59125 === (31))){
var inst_59106 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
if(cljs.core.truth_(inst_59106)){
var statearr_59140_59196 = state_59124__$1;
(statearr_59140_59196[(1)] = (32));

} else {
var statearr_59141_59197 = state_59124__$1;
(statearr_59141_59197[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (32))){
var inst_59083 = (state_59124[(14)]);
var state_59124__$1 = state_59124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59124__$1,(35),out,inst_59083);
} else {
if((state_val_59125 === (33))){
var inst_59074 = (state_59124[(12)]);
var inst_59051 = inst_59074;
var state_59124__$1 = (function (){var statearr_59142 = state_59124;
(statearr_59142[(7)] = inst_59051);

return statearr_59142;
})();
var statearr_59143_59198 = state_59124__$1;
(statearr_59143_59198[(2)] = null);

(statearr_59143_59198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (13))){
var inst_59051 = (state_59124[(7)]);
var inst_59058 = inst_59051.cljs$lang$protocol_mask$partition0$;
var inst_59059 = (inst_59058 & (64));
var inst_59060 = inst_59051.cljs$core$ISeq$;
var inst_59061 = (cljs.core.PROTOCOL_SENTINEL === inst_59060);
var inst_59062 = ((inst_59059) || (inst_59061));
var state_59124__$1 = state_59124;
if(cljs.core.truth_(inst_59062)){
var statearr_59144_59199 = state_59124__$1;
(statearr_59144_59199[(1)] = (16));

} else {
var statearr_59145_59200 = state_59124__$1;
(statearr_59145_59200[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (22))){
var inst_59083 = (state_59124[(14)]);
var inst_59084 = (state_59124[(11)]);
var inst_59082 = (state_59124[(2)]);
var inst_59083__$1 = cljs.core.nth.call(null,inst_59082,(0),null);
var inst_59084__$1 = cljs.core.nth.call(null,inst_59082,(1),null);
var inst_59085 = (inst_59083__$1 == null);
var inst_59086 = cljs.core._EQ_.call(null,inst_59084__$1,change);
var inst_59087 = ((inst_59085) || (inst_59086));
var state_59124__$1 = (function (){var statearr_59146 = state_59124;
(statearr_59146[(14)] = inst_59083__$1);

(statearr_59146[(11)] = inst_59084__$1);

return statearr_59146;
})();
if(cljs.core.truth_(inst_59087)){
var statearr_59147_59201 = state_59124__$1;
(statearr_59147_59201[(1)] = (23));

} else {
var statearr_59148_59202 = state_59124__$1;
(statearr_59148_59202[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (36))){
var inst_59074 = (state_59124[(12)]);
var inst_59051 = inst_59074;
var state_59124__$1 = (function (){var statearr_59149 = state_59124;
(statearr_59149[(7)] = inst_59051);

return statearr_59149;
})();
var statearr_59150_59203 = state_59124__$1;
(statearr_59150_59203[(2)] = null);

(statearr_59150_59203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (29))){
var inst_59098 = (state_59124[(9)]);
var state_59124__$1 = state_59124;
var statearr_59151_59204 = state_59124__$1;
(statearr_59151_59204[(2)] = inst_59098);

(statearr_59151_59204[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (6))){
var state_59124__$1 = state_59124;
var statearr_59152_59205 = state_59124__$1;
(statearr_59152_59205[(2)] = false);

(statearr_59152_59205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (28))){
var inst_59094 = (state_59124[(2)]);
var inst_59095 = calc_state.call(null);
var inst_59051 = inst_59095;
var state_59124__$1 = (function (){var statearr_59153 = state_59124;
(statearr_59153[(15)] = inst_59094);

(statearr_59153[(7)] = inst_59051);

return statearr_59153;
})();
var statearr_59154_59206 = state_59124__$1;
(statearr_59154_59206[(2)] = null);

(statearr_59154_59206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (25))){
var inst_59120 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
var statearr_59155_59207 = state_59124__$1;
(statearr_59155_59207[(2)] = inst_59120);

(statearr_59155_59207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (34))){
var inst_59118 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
var statearr_59156_59208 = state_59124__$1;
(statearr_59156_59208[(2)] = inst_59118);

(statearr_59156_59208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (17))){
var state_59124__$1 = state_59124;
var statearr_59157_59209 = state_59124__$1;
(statearr_59157_59209[(2)] = false);

(statearr_59157_59209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (3))){
var state_59124__$1 = state_59124;
var statearr_59158_59210 = state_59124__$1;
(statearr_59158_59210[(2)] = false);

(statearr_59158_59210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (12))){
var inst_59122 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59124__$1,inst_59122);
} else {
if((state_val_59125 === (2))){
var inst_59026 = (state_59124[(8)]);
var inst_59031 = inst_59026.cljs$lang$protocol_mask$partition0$;
var inst_59032 = (inst_59031 & (64));
var inst_59033 = inst_59026.cljs$core$ISeq$;
var inst_59034 = (cljs.core.PROTOCOL_SENTINEL === inst_59033);
var inst_59035 = ((inst_59032) || (inst_59034));
var state_59124__$1 = state_59124;
if(cljs.core.truth_(inst_59035)){
var statearr_59159_59211 = state_59124__$1;
(statearr_59159_59211[(1)] = (5));

} else {
var statearr_59160_59212 = state_59124__$1;
(statearr_59160_59212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (23))){
var inst_59083 = (state_59124[(14)]);
var inst_59089 = (inst_59083 == null);
var state_59124__$1 = state_59124;
if(cljs.core.truth_(inst_59089)){
var statearr_59161_59213 = state_59124__$1;
(statearr_59161_59213[(1)] = (26));

} else {
var statearr_59162_59214 = state_59124__$1;
(statearr_59162_59214[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (35))){
var inst_59109 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
if(cljs.core.truth_(inst_59109)){
var statearr_59163_59215 = state_59124__$1;
(statearr_59163_59215[(1)] = (36));

} else {
var statearr_59164_59216 = state_59124__$1;
(statearr_59164_59216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (19))){
var inst_59051 = (state_59124[(7)]);
var inst_59071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59051);
var state_59124__$1 = state_59124;
var statearr_59165_59217 = state_59124__$1;
(statearr_59165_59217[(2)] = inst_59071);

(statearr_59165_59217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (11))){
var inst_59051 = (state_59124[(7)]);
var inst_59055 = (inst_59051 == null);
var inst_59056 = cljs.core.not.call(null,inst_59055);
var state_59124__$1 = state_59124;
if(inst_59056){
var statearr_59166_59218 = state_59124__$1;
(statearr_59166_59218[(1)] = (13));

} else {
var statearr_59167_59219 = state_59124__$1;
(statearr_59167_59219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (9))){
var inst_59026 = (state_59124[(8)]);
var state_59124__$1 = state_59124;
var statearr_59168_59220 = state_59124__$1;
(statearr_59168_59220[(2)] = inst_59026);

(statearr_59168_59220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (5))){
var state_59124__$1 = state_59124;
var statearr_59169_59221 = state_59124__$1;
(statearr_59169_59221[(2)] = true);

(statearr_59169_59221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (14))){
var state_59124__$1 = state_59124;
var statearr_59170_59222 = state_59124__$1;
(statearr_59170_59222[(2)] = false);

(statearr_59170_59222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (26))){
var inst_59084 = (state_59124[(11)]);
var inst_59091 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59084);
var state_59124__$1 = state_59124;
var statearr_59171_59223 = state_59124__$1;
(statearr_59171_59223[(2)] = inst_59091);

(statearr_59171_59223[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (16))){
var state_59124__$1 = state_59124;
var statearr_59172_59224 = state_59124__$1;
(statearr_59172_59224[(2)] = true);

(statearr_59172_59224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (38))){
var inst_59114 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
var statearr_59173_59225 = state_59124__$1;
(statearr_59173_59225[(2)] = inst_59114);

(statearr_59173_59225[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (30))){
var inst_59076 = (state_59124[(13)]);
var inst_59075 = (state_59124[(10)]);
var inst_59084 = (state_59124[(11)]);
var inst_59101 = cljs.core.empty_QMARK_.call(null,inst_59075);
var inst_59102 = inst_59076.call(null,inst_59084);
var inst_59103 = cljs.core.not.call(null,inst_59102);
var inst_59104 = ((inst_59101) && (inst_59103));
var state_59124__$1 = state_59124;
var statearr_59174_59226 = state_59124__$1;
(statearr_59174_59226[(2)] = inst_59104);

(statearr_59174_59226[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (10))){
var inst_59026 = (state_59124[(8)]);
var inst_59047 = (state_59124[(2)]);
var inst_59048 = cljs.core.get.call(null,inst_59047,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59049 = cljs.core.get.call(null,inst_59047,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59050 = cljs.core.get.call(null,inst_59047,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59051 = inst_59026;
var state_59124__$1 = (function (){var statearr_59175 = state_59124;
(statearr_59175[(16)] = inst_59049);

(statearr_59175[(7)] = inst_59051);

(statearr_59175[(17)] = inst_59050);

(statearr_59175[(18)] = inst_59048);

return statearr_59175;
})();
var statearr_59176_59227 = state_59124__$1;
(statearr_59176_59227[(2)] = null);

(statearr_59176_59227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (18))){
var inst_59066 = (state_59124[(2)]);
var state_59124__$1 = state_59124;
var statearr_59177_59228 = state_59124__$1;
(statearr_59177_59228[(2)] = inst_59066);

(statearr_59177_59228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (37))){
var state_59124__$1 = state_59124;
var statearr_59178_59229 = state_59124__$1;
(statearr_59178_59229[(2)] = null);

(statearr_59178_59229[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59125 === (8))){
var inst_59026 = (state_59124[(8)]);
var inst_59044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59026);
var state_59124__$1 = state_59124;
var statearr_59179_59230 = state_59124__$1;
(statearr_59179_59230[(2)] = inst_59044);

(statearr_59179_59230[(1)] = (10));


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
});})(c__58152__auto___59184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50568__auto__,c__58152__auto___59184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50569__auto__ = null;
var cljs$core$async$mix_$_state_machine__50569__auto____0 = (function (){
var statearr_59180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59180[(0)] = cljs$core$async$mix_$_state_machine__50569__auto__);

(statearr_59180[(1)] = (1));

return statearr_59180;
});
var cljs$core$async$mix_$_state_machine__50569__auto____1 = (function (state_59124){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59181){if((e59181 instanceof Object)){
var ex__50572__auto__ = e59181;
var statearr_59182_59231 = state_59124;
(statearr_59182_59231[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59232 = state_59124;
state_59124 = G__59232;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50569__auto__ = function(state_59124){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50569__auto____1.call(this,state_59124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50569__auto____0;
cljs$core$async$mix_$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50569__auto____1;
return cljs$core$async$mix_$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___59184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__58154__auto__ = (function (){var statearr_59183 = f__58153__auto__.call(null);
(statearr_59183[(6)] = c__58152__auto___59184);

return statearr_59183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___59184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__59234 = arguments.length;
switch (G__59234) {
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
var G__59238 = arguments.length;
switch (G__59238) {
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
return (function (p1__59236_SHARP_){
if(cljs.core.truth_(p1__59236_SHARP_.call(null,topic))){
return p1__59236_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__59236_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async59239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59239 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59240){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59240 = meta59240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_59241,meta59240__$1){
var self__ = this;
var _59241__$1 = this;
return (new cljs.core.async.t_cljs$core$async59239(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59240__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_59241){
var self__ = this;
var _59241__$1 = this;
return self__.meta59240;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59239.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59240","meta59240",-1722681676,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59239";

cljs.core.async.t_cljs$core$async59239.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59239");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59239.
 */
cljs.core.async.__GT_t_cljs$core$async59239 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async59239(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59240){
return (new cljs.core.async.t_cljs$core$async59239(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59240));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async59239(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58152__auto___59359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___59359,mults,ensure_mult,p){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___59359,mults,ensure_mult,p){
return (function (state_59313){
var state_val_59314 = (state_59313[(1)]);
if((state_val_59314 === (7))){
var inst_59309 = (state_59313[(2)]);
var state_59313__$1 = state_59313;
var statearr_59315_59360 = state_59313__$1;
(statearr_59315_59360[(2)] = inst_59309);

(statearr_59315_59360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (20))){
var state_59313__$1 = state_59313;
var statearr_59316_59361 = state_59313__$1;
(statearr_59316_59361[(2)] = null);

(statearr_59316_59361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (1))){
var state_59313__$1 = state_59313;
var statearr_59317_59362 = state_59313__$1;
(statearr_59317_59362[(2)] = null);

(statearr_59317_59362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (24))){
var inst_59292 = (state_59313[(7)]);
var inst_59301 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_59292);
var state_59313__$1 = state_59313;
var statearr_59318_59363 = state_59313__$1;
(statearr_59318_59363[(2)] = inst_59301);

(statearr_59318_59363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (4))){
var inst_59244 = (state_59313[(8)]);
var inst_59244__$1 = (state_59313[(2)]);
var inst_59245 = (inst_59244__$1 == null);
var state_59313__$1 = (function (){var statearr_59319 = state_59313;
(statearr_59319[(8)] = inst_59244__$1);

return statearr_59319;
})();
if(cljs.core.truth_(inst_59245)){
var statearr_59320_59364 = state_59313__$1;
(statearr_59320_59364[(1)] = (5));

} else {
var statearr_59321_59365 = state_59313__$1;
(statearr_59321_59365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (15))){
var inst_59286 = (state_59313[(2)]);
var state_59313__$1 = state_59313;
var statearr_59322_59366 = state_59313__$1;
(statearr_59322_59366[(2)] = inst_59286);

(statearr_59322_59366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (21))){
var inst_59306 = (state_59313[(2)]);
var state_59313__$1 = (function (){var statearr_59323 = state_59313;
(statearr_59323[(9)] = inst_59306);

return statearr_59323;
})();
var statearr_59324_59367 = state_59313__$1;
(statearr_59324_59367[(2)] = null);

(statearr_59324_59367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (13))){
var inst_59268 = (state_59313[(10)]);
var inst_59270 = cljs.core.chunked_seq_QMARK_.call(null,inst_59268);
var state_59313__$1 = state_59313;
if(inst_59270){
var statearr_59325_59368 = state_59313__$1;
(statearr_59325_59368[(1)] = (16));

} else {
var statearr_59326_59369 = state_59313__$1;
(statearr_59326_59369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (22))){
var inst_59298 = (state_59313[(2)]);
var state_59313__$1 = state_59313;
if(cljs.core.truth_(inst_59298)){
var statearr_59327_59370 = state_59313__$1;
(statearr_59327_59370[(1)] = (23));

} else {
var statearr_59328_59371 = state_59313__$1;
(statearr_59328_59371[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (6))){
var inst_59292 = (state_59313[(7)]);
var inst_59244 = (state_59313[(8)]);
var inst_59294 = (state_59313[(11)]);
var inst_59292__$1 = topic_fn.call(null,inst_59244);
var inst_59293 = cljs.core.deref.call(null,mults);
var inst_59294__$1 = cljs.core.get.call(null,inst_59293,inst_59292__$1);
var state_59313__$1 = (function (){var statearr_59329 = state_59313;
(statearr_59329[(7)] = inst_59292__$1);

(statearr_59329[(11)] = inst_59294__$1);

return statearr_59329;
})();
if(cljs.core.truth_(inst_59294__$1)){
var statearr_59330_59372 = state_59313__$1;
(statearr_59330_59372[(1)] = (19));

} else {
var statearr_59331_59373 = state_59313__$1;
(statearr_59331_59373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (25))){
var inst_59303 = (state_59313[(2)]);
var state_59313__$1 = state_59313;
var statearr_59332_59374 = state_59313__$1;
(statearr_59332_59374[(2)] = inst_59303);

(statearr_59332_59374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (17))){
var inst_59268 = (state_59313[(10)]);
var inst_59277 = cljs.core.first.call(null,inst_59268);
var inst_59278 = cljs.core.async.muxch_STAR_.call(null,inst_59277);
var inst_59279 = cljs.core.async.close_BANG_.call(null,inst_59278);
var inst_59280 = cljs.core.next.call(null,inst_59268);
var inst_59254 = inst_59280;
var inst_59255 = null;
var inst_59256 = (0);
var inst_59257 = (0);
var state_59313__$1 = (function (){var statearr_59333 = state_59313;
(statearr_59333[(12)] = inst_59279);

(statearr_59333[(13)] = inst_59257);

(statearr_59333[(14)] = inst_59254);

(statearr_59333[(15)] = inst_59255);

(statearr_59333[(16)] = inst_59256);

return statearr_59333;
})();
var statearr_59334_59375 = state_59313__$1;
(statearr_59334_59375[(2)] = null);

(statearr_59334_59375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (3))){
var inst_59311 = (state_59313[(2)]);
var state_59313__$1 = state_59313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59313__$1,inst_59311);
} else {
if((state_val_59314 === (12))){
var inst_59288 = (state_59313[(2)]);
var state_59313__$1 = state_59313;
var statearr_59335_59376 = state_59313__$1;
(statearr_59335_59376[(2)] = inst_59288);

(statearr_59335_59376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (2))){
var state_59313__$1 = state_59313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59313__$1,(4),ch);
} else {
if((state_val_59314 === (23))){
var state_59313__$1 = state_59313;
var statearr_59336_59377 = state_59313__$1;
(statearr_59336_59377[(2)] = null);

(statearr_59336_59377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (19))){
var inst_59244 = (state_59313[(8)]);
var inst_59294 = (state_59313[(11)]);
var inst_59296 = cljs.core.async.muxch_STAR_.call(null,inst_59294);
var state_59313__$1 = state_59313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59313__$1,(22),inst_59296,inst_59244);
} else {
if((state_val_59314 === (11))){
var inst_59268 = (state_59313[(10)]);
var inst_59254 = (state_59313[(14)]);
var inst_59268__$1 = cljs.core.seq.call(null,inst_59254);
var state_59313__$1 = (function (){var statearr_59337 = state_59313;
(statearr_59337[(10)] = inst_59268__$1);

return statearr_59337;
})();
if(inst_59268__$1){
var statearr_59338_59378 = state_59313__$1;
(statearr_59338_59378[(1)] = (13));

} else {
var statearr_59339_59379 = state_59313__$1;
(statearr_59339_59379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (9))){
var inst_59290 = (state_59313[(2)]);
var state_59313__$1 = state_59313;
var statearr_59340_59380 = state_59313__$1;
(statearr_59340_59380[(2)] = inst_59290);

(statearr_59340_59380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (5))){
var inst_59251 = cljs.core.deref.call(null,mults);
var inst_59252 = cljs.core.vals.call(null,inst_59251);
var inst_59253 = cljs.core.seq.call(null,inst_59252);
var inst_59254 = inst_59253;
var inst_59255 = null;
var inst_59256 = (0);
var inst_59257 = (0);
var state_59313__$1 = (function (){var statearr_59341 = state_59313;
(statearr_59341[(13)] = inst_59257);

(statearr_59341[(14)] = inst_59254);

(statearr_59341[(15)] = inst_59255);

(statearr_59341[(16)] = inst_59256);

return statearr_59341;
})();
var statearr_59342_59381 = state_59313__$1;
(statearr_59342_59381[(2)] = null);

(statearr_59342_59381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (14))){
var state_59313__$1 = state_59313;
var statearr_59346_59382 = state_59313__$1;
(statearr_59346_59382[(2)] = null);

(statearr_59346_59382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (16))){
var inst_59268 = (state_59313[(10)]);
var inst_59272 = cljs.core.chunk_first.call(null,inst_59268);
var inst_59273 = cljs.core.chunk_rest.call(null,inst_59268);
var inst_59274 = cljs.core.count.call(null,inst_59272);
var inst_59254 = inst_59273;
var inst_59255 = inst_59272;
var inst_59256 = inst_59274;
var inst_59257 = (0);
var state_59313__$1 = (function (){var statearr_59347 = state_59313;
(statearr_59347[(13)] = inst_59257);

(statearr_59347[(14)] = inst_59254);

(statearr_59347[(15)] = inst_59255);

(statearr_59347[(16)] = inst_59256);

return statearr_59347;
})();
var statearr_59348_59383 = state_59313__$1;
(statearr_59348_59383[(2)] = null);

(statearr_59348_59383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (10))){
var inst_59257 = (state_59313[(13)]);
var inst_59254 = (state_59313[(14)]);
var inst_59255 = (state_59313[(15)]);
var inst_59256 = (state_59313[(16)]);
var inst_59262 = cljs.core._nth.call(null,inst_59255,inst_59257);
var inst_59263 = cljs.core.async.muxch_STAR_.call(null,inst_59262);
var inst_59264 = cljs.core.async.close_BANG_.call(null,inst_59263);
var inst_59265 = (inst_59257 + (1));
var tmp59343 = inst_59254;
var tmp59344 = inst_59255;
var tmp59345 = inst_59256;
var inst_59254__$1 = tmp59343;
var inst_59255__$1 = tmp59344;
var inst_59256__$1 = tmp59345;
var inst_59257__$1 = inst_59265;
var state_59313__$1 = (function (){var statearr_59349 = state_59313;
(statearr_59349[(17)] = inst_59264);

(statearr_59349[(13)] = inst_59257__$1);

(statearr_59349[(14)] = inst_59254__$1);

(statearr_59349[(15)] = inst_59255__$1);

(statearr_59349[(16)] = inst_59256__$1);

return statearr_59349;
})();
var statearr_59350_59384 = state_59313__$1;
(statearr_59350_59384[(2)] = null);

(statearr_59350_59384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (18))){
var inst_59283 = (state_59313[(2)]);
var state_59313__$1 = state_59313;
var statearr_59351_59385 = state_59313__$1;
(statearr_59351_59385[(2)] = inst_59283);

(statearr_59351_59385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59314 === (8))){
var inst_59257 = (state_59313[(13)]);
var inst_59256 = (state_59313[(16)]);
var inst_59259 = (inst_59257 < inst_59256);
var inst_59260 = inst_59259;
var state_59313__$1 = state_59313;
if(cljs.core.truth_(inst_59260)){
var statearr_59352_59386 = state_59313__$1;
(statearr_59352_59386[(1)] = (10));

} else {
var statearr_59353_59387 = state_59313__$1;
(statearr_59353_59387[(1)] = (11));

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
});})(c__58152__auto___59359,mults,ensure_mult,p))
;
return ((function (switch__50568__auto__,c__58152__auto___59359,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_59354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59354[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_59354[(1)] = (1));

return statearr_59354;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_59313){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59355){if((e59355 instanceof Object)){
var ex__50572__auto__ = e59355;
var statearr_59356_59388 = state_59313;
(statearr_59356_59388[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59389 = state_59313;
state_59313 = G__59389;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_59313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_59313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___59359,mults,ensure_mult,p))
})();
var state__58154__auto__ = (function (){var statearr_59357 = f__58153__auto__.call(null);
(statearr_59357[(6)] = c__58152__auto___59359);

return statearr_59357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___59359,mults,ensure_mult,p))
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
var G__59391 = arguments.length;
switch (G__59391) {
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
var G__59394 = arguments.length;
switch (G__59394) {
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
var G__59397 = arguments.length;
switch (G__59397) {
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
var c__58152__auto___59464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___59464,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___59464,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_59436){
var state_val_59437 = (state_59436[(1)]);
if((state_val_59437 === (7))){
var state_59436__$1 = state_59436;
var statearr_59438_59465 = state_59436__$1;
(statearr_59438_59465[(2)] = null);

(statearr_59438_59465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (1))){
var state_59436__$1 = state_59436;
var statearr_59439_59466 = state_59436__$1;
(statearr_59439_59466[(2)] = null);

(statearr_59439_59466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (4))){
var inst_59400 = (state_59436[(7)]);
var inst_59402 = (inst_59400 < cnt);
var state_59436__$1 = state_59436;
if(cljs.core.truth_(inst_59402)){
var statearr_59440_59467 = state_59436__$1;
(statearr_59440_59467[(1)] = (6));

} else {
var statearr_59441_59468 = state_59436__$1;
(statearr_59441_59468[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (15))){
var inst_59432 = (state_59436[(2)]);
var state_59436__$1 = state_59436;
var statearr_59442_59469 = state_59436__$1;
(statearr_59442_59469[(2)] = inst_59432);

(statearr_59442_59469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (13))){
var inst_59425 = cljs.core.async.close_BANG_.call(null,out);
var state_59436__$1 = state_59436;
var statearr_59443_59470 = state_59436__$1;
(statearr_59443_59470[(2)] = inst_59425);

(statearr_59443_59470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (6))){
var state_59436__$1 = state_59436;
var statearr_59444_59471 = state_59436__$1;
(statearr_59444_59471[(2)] = null);

(statearr_59444_59471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (3))){
var inst_59434 = (state_59436[(2)]);
var state_59436__$1 = state_59436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59436__$1,inst_59434);
} else {
if((state_val_59437 === (12))){
var inst_59422 = (state_59436[(8)]);
var inst_59422__$1 = (state_59436[(2)]);
var inst_59423 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_59422__$1);
var state_59436__$1 = (function (){var statearr_59445 = state_59436;
(statearr_59445[(8)] = inst_59422__$1);

return statearr_59445;
})();
if(cljs.core.truth_(inst_59423)){
var statearr_59446_59472 = state_59436__$1;
(statearr_59446_59472[(1)] = (13));

} else {
var statearr_59447_59473 = state_59436__$1;
(statearr_59447_59473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (2))){
var inst_59399 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_59400 = (0);
var state_59436__$1 = (function (){var statearr_59448 = state_59436;
(statearr_59448[(7)] = inst_59400);

(statearr_59448[(9)] = inst_59399);

return statearr_59448;
})();
var statearr_59449_59474 = state_59436__$1;
(statearr_59449_59474[(2)] = null);

(statearr_59449_59474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (11))){
var inst_59400 = (state_59436[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59436,(10),Object,null,(9));
var inst_59409 = chs__$1.call(null,inst_59400);
var inst_59410 = done.call(null,inst_59400);
var inst_59411 = cljs.core.async.take_BANG_.call(null,inst_59409,inst_59410);
var state_59436__$1 = state_59436;
var statearr_59450_59475 = state_59436__$1;
(statearr_59450_59475[(2)] = inst_59411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (9))){
var inst_59400 = (state_59436[(7)]);
var inst_59413 = (state_59436[(2)]);
var inst_59414 = (inst_59400 + (1));
var inst_59400__$1 = inst_59414;
var state_59436__$1 = (function (){var statearr_59451 = state_59436;
(statearr_59451[(7)] = inst_59400__$1);

(statearr_59451[(10)] = inst_59413);

return statearr_59451;
})();
var statearr_59452_59476 = state_59436__$1;
(statearr_59452_59476[(2)] = null);

(statearr_59452_59476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (5))){
var inst_59420 = (state_59436[(2)]);
var state_59436__$1 = (function (){var statearr_59453 = state_59436;
(statearr_59453[(11)] = inst_59420);

return statearr_59453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59436__$1,(12),dchan);
} else {
if((state_val_59437 === (14))){
var inst_59422 = (state_59436[(8)]);
var inst_59427 = cljs.core.apply.call(null,f,inst_59422);
var state_59436__$1 = state_59436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59436__$1,(16),out,inst_59427);
} else {
if((state_val_59437 === (16))){
var inst_59429 = (state_59436[(2)]);
var state_59436__$1 = (function (){var statearr_59454 = state_59436;
(statearr_59454[(12)] = inst_59429);

return statearr_59454;
})();
var statearr_59455_59477 = state_59436__$1;
(statearr_59455_59477[(2)] = null);

(statearr_59455_59477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (10))){
var inst_59404 = (state_59436[(2)]);
var inst_59405 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_59436__$1 = (function (){var statearr_59456 = state_59436;
(statearr_59456[(13)] = inst_59404);

return statearr_59456;
})();
var statearr_59457_59478 = state_59436__$1;
(statearr_59457_59478[(2)] = inst_59405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (8))){
var inst_59418 = (state_59436[(2)]);
var state_59436__$1 = state_59436;
var statearr_59458_59479 = state_59436__$1;
(statearr_59458_59479[(2)] = inst_59418);

(statearr_59458_59479[(1)] = (5));


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
});})(c__58152__auto___59464,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50568__auto__,c__58152__auto___59464,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_59459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59459[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_59459[(1)] = (1));

return statearr_59459;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_59436){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59460){if((e59460 instanceof Object)){
var ex__50572__auto__ = e59460;
var statearr_59461_59480 = state_59436;
(statearr_59461_59480[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59481 = state_59436;
state_59436 = G__59481;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_59436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_59436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___59464,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__58154__auto__ = (function (){var statearr_59462 = f__58153__auto__.call(null);
(statearr_59462[(6)] = c__58152__auto___59464);

return statearr_59462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___59464,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__59484 = arguments.length;
switch (G__59484) {
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
var c__58152__auto___59538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___59538,out){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___59538,out){
return (function (state_59516){
var state_val_59517 = (state_59516[(1)]);
if((state_val_59517 === (7))){
var inst_59496 = (state_59516[(7)]);
var inst_59495 = (state_59516[(8)]);
var inst_59495__$1 = (state_59516[(2)]);
var inst_59496__$1 = cljs.core.nth.call(null,inst_59495__$1,(0),null);
var inst_59497 = cljs.core.nth.call(null,inst_59495__$1,(1),null);
var inst_59498 = (inst_59496__$1 == null);
var state_59516__$1 = (function (){var statearr_59518 = state_59516;
(statearr_59518[(9)] = inst_59497);

(statearr_59518[(7)] = inst_59496__$1);

(statearr_59518[(8)] = inst_59495__$1);

return statearr_59518;
})();
if(cljs.core.truth_(inst_59498)){
var statearr_59519_59539 = state_59516__$1;
(statearr_59519_59539[(1)] = (8));

} else {
var statearr_59520_59540 = state_59516__$1;
(statearr_59520_59540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59517 === (1))){
var inst_59485 = cljs.core.vec.call(null,chs);
var inst_59486 = inst_59485;
var state_59516__$1 = (function (){var statearr_59521 = state_59516;
(statearr_59521[(10)] = inst_59486);

return statearr_59521;
})();
var statearr_59522_59541 = state_59516__$1;
(statearr_59522_59541[(2)] = null);

(statearr_59522_59541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59517 === (4))){
var inst_59486 = (state_59516[(10)]);
var state_59516__$1 = state_59516;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59516__$1,(7),inst_59486);
} else {
if((state_val_59517 === (6))){
var inst_59512 = (state_59516[(2)]);
var state_59516__$1 = state_59516;
var statearr_59523_59542 = state_59516__$1;
(statearr_59523_59542[(2)] = inst_59512);

(statearr_59523_59542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59517 === (3))){
var inst_59514 = (state_59516[(2)]);
var state_59516__$1 = state_59516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59516__$1,inst_59514);
} else {
if((state_val_59517 === (2))){
var inst_59486 = (state_59516[(10)]);
var inst_59488 = cljs.core.count.call(null,inst_59486);
var inst_59489 = (inst_59488 > (0));
var state_59516__$1 = state_59516;
if(cljs.core.truth_(inst_59489)){
var statearr_59525_59543 = state_59516__$1;
(statearr_59525_59543[(1)] = (4));

} else {
var statearr_59526_59544 = state_59516__$1;
(statearr_59526_59544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59517 === (11))){
var inst_59486 = (state_59516[(10)]);
var inst_59505 = (state_59516[(2)]);
var tmp59524 = inst_59486;
var inst_59486__$1 = tmp59524;
var state_59516__$1 = (function (){var statearr_59527 = state_59516;
(statearr_59527[(11)] = inst_59505);

(statearr_59527[(10)] = inst_59486__$1);

return statearr_59527;
})();
var statearr_59528_59545 = state_59516__$1;
(statearr_59528_59545[(2)] = null);

(statearr_59528_59545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59517 === (9))){
var inst_59496 = (state_59516[(7)]);
var state_59516__$1 = state_59516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59516__$1,(11),out,inst_59496);
} else {
if((state_val_59517 === (5))){
var inst_59510 = cljs.core.async.close_BANG_.call(null,out);
var state_59516__$1 = state_59516;
var statearr_59529_59546 = state_59516__$1;
(statearr_59529_59546[(2)] = inst_59510);

(statearr_59529_59546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59517 === (10))){
var inst_59508 = (state_59516[(2)]);
var state_59516__$1 = state_59516;
var statearr_59530_59547 = state_59516__$1;
(statearr_59530_59547[(2)] = inst_59508);

(statearr_59530_59547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59517 === (8))){
var inst_59486 = (state_59516[(10)]);
var inst_59497 = (state_59516[(9)]);
var inst_59496 = (state_59516[(7)]);
var inst_59495 = (state_59516[(8)]);
var inst_59500 = (function (){var cs = inst_59486;
var vec__59491 = inst_59495;
var v = inst_59496;
var c = inst_59497;
return ((function (cs,vec__59491,v,c,inst_59486,inst_59497,inst_59496,inst_59495,state_val_59517,c__58152__auto___59538,out){
return (function (p1__59482_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__59482_SHARP_);
});
;})(cs,vec__59491,v,c,inst_59486,inst_59497,inst_59496,inst_59495,state_val_59517,c__58152__auto___59538,out))
})();
var inst_59501 = cljs.core.filterv.call(null,inst_59500,inst_59486);
var inst_59486__$1 = inst_59501;
var state_59516__$1 = (function (){var statearr_59531 = state_59516;
(statearr_59531[(10)] = inst_59486__$1);

return statearr_59531;
})();
var statearr_59532_59548 = state_59516__$1;
(statearr_59532_59548[(2)] = null);

(statearr_59532_59548[(1)] = (2));


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
});})(c__58152__auto___59538,out))
;
return ((function (switch__50568__auto__,c__58152__auto___59538,out){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_59533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59533[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_59533[(1)] = (1));

return statearr_59533;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_59516){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59534){if((e59534 instanceof Object)){
var ex__50572__auto__ = e59534;
var statearr_59535_59549 = state_59516;
(statearr_59535_59549[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59550 = state_59516;
state_59516 = G__59550;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_59516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_59516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___59538,out))
})();
var state__58154__auto__ = (function (){var statearr_59536 = f__58153__auto__.call(null);
(statearr_59536[(6)] = c__58152__auto___59538);

return statearr_59536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___59538,out))
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
var G__59552 = arguments.length;
switch (G__59552) {
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
var c__58152__auto___59597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___59597,out){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___59597,out){
return (function (state_59576){
var state_val_59577 = (state_59576[(1)]);
if((state_val_59577 === (7))){
var inst_59558 = (state_59576[(7)]);
var inst_59558__$1 = (state_59576[(2)]);
var inst_59559 = (inst_59558__$1 == null);
var inst_59560 = cljs.core.not.call(null,inst_59559);
var state_59576__$1 = (function (){var statearr_59578 = state_59576;
(statearr_59578[(7)] = inst_59558__$1);

return statearr_59578;
})();
if(inst_59560){
var statearr_59579_59598 = state_59576__$1;
(statearr_59579_59598[(1)] = (8));

} else {
var statearr_59580_59599 = state_59576__$1;
(statearr_59580_59599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59577 === (1))){
var inst_59553 = (0);
var state_59576__$1 = (function (){var statearr_59581 = state_59576;
(statearr_59581[(8)] = inst_59553);

return statearr_59581;
})();
var statearr_59582_59600 = state_59576__$1;
(statearr_59582_59600[(2)] = null);

(statearr_59582_59600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59577 === (4))){
var state_59576__$1 = state_59576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59576__$1,(7),ch);
} else {
if((state_val_59577 === (6))){
var inst_59571 = (state_59576[(2)]);
var state_59576__$1 = state_59576;
var statearr_59583_59601 = state_59576__$1;
(statearr_59583_59601[(2)] = inst_59571);

(statearr_59583_59601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59577 === (3))){
var inst_59573 = (state_59576[(2)]);
var inst_59574 = cljs.core.async.close_BANG_.call(null,out);
var state_59576__$1 = (function (){var statearr_59584 = state_59576;
(statearr_59584[(9)] = inst_59573);

return statearr_59584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59576__$1,inst_59574);
} else {
if((state_val_59577 === (2))){
var inst_59553 = (state_59576[(8)]);
var inst_59555 = (inst_59553 < n);
var state_59576__$1 = state_59576;
if(cljs.core.truth_(inst_59555)){
var statearr_59585_59602 = state_59576__$1;
(statearr_59585_59602[(1)] = (4));

} else {
var statearr_59586_59603 = state_59576__$1;
(statearr_59586_59603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59577 === (11))){
var inst_59553 = (state_59576[(8)]);
var inst_59563 = (state_59576[(2)]);
var inst_59564 = (inst_59553 + (1));
var inst_59553__$1 = inst_59564;
var state_59576__$1 = (function (){var statearr_59587 = state_59576;
(statearr_59587[(8)] = inst_59553__$1);

(statearr_59587[(10)] = inst_59563);

return statearr_59587;
})();
var statearr_59588_59604 = state_59576__$1;
(statearr_59588_59604[(2)] = null);

(statearr_59588_59604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59577 === (9))){
var state_59576__$1 = state_59576;
var statearr_59589_59605 = state_59576__$1;
(statearr_59589_59605[(2)] = null);

(statearr_59589_59605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59577 === (5))){
var state_59576__$1 = state_59576;
var statearr_59590_59606 = state_59576__$1;
(statearr_59590_59606[(2)] = null);

(statearr_59590_59606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59577 === (10))){
var inst_59568 = (state_59576[(2)]);
var state_59576__$1 = state_59576;
var statearr_59591_59607 = state_59576__$1;
(statearr_59591_59607[(2)] = inst_59568);

(statearr_59591_59607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59577 === (8))){
var inst_59558 = (state_59576[(7)]);
var state_59576__$1 = state_59576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59576__$1,(11),out,inst_59558);
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
});})(c__58152__auto___59597,out))
;
return ((function (switch__50568__auto__,c__58152__auto___59597,out){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_59592 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59592[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_59592[(1)] = (1));

return statearr_59592;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_59576){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59593){if((e59593 instanceof Object)){
var ex__50572__auto__ = e59593;
var statearr_59594_59608 = state_59576;
(statearr_59594_59608[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59609 = state_59576;
state_59576 = G__59609;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_59576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_59576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___59597,out))
})();
var state__58154__auto__ = (function (){var statearr_59595 = f__58153__auto__.call(null);
(statearr_59595[(6)] = c__58152__auto___59597);

return statearr_59595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___59597,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59611 = (function (f,ch,meta59612){
this.f = f;
this.ch = ch;
this.meta59612 = meta59612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59613,meta59612__$1){
var self__ = this;
var _59613__$1 = this;
return (new cljs.core.async.t_cljs$core$async59611(self__.f,self__.ch,meta59612__$1));
});

cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59613){
var self__ = this;
var _59613__$1 = this;
return self__.meta59612;
});

cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async59614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59614 = (function (f,ch,meta59612,_,fn1,meta59615){
this.f = f;
this.ch = ch;
this.meta59612 = meta59612;
this._ = _;
this.fn1 = fn1;
this.meta59615 = meta59615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_59616,meta59615__$1){
var self__ = this;
var _59616__$1 = this;
return (new cljs.core.async.t_cljs$core$async59614(self__.f,self__.ch,self__.meta59612,self__._,self__.fn1,meta59615__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async59614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_59616){
var self__ = this;
var _59616__$1 = this;
return self__.meta59615;
});})(___$1))
;

cljs.core.async.t_cljs$core$async59614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async59614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async59614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__59610_SHARP_){
return f1.call(null,(((p1__59610_SHARP_ == null))?null:self__.f.call(null,p1__59610_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async59614.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59612","meta59612",-1409969422,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59611","cljs.core.async/t_cljs$core$async59611",1749732936,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59615","meta59615",1459428608,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async59614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59614";

cljs.core.async.t_cljs$core$async59614.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59614");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59614.
 */
cljs.core.async.__GT_t_cljs$core$async59614 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59614(f__$1,ch__$1,meta59612__$1,___$2,fn1__$1,meta59615){
return (new cljs.core.async.t_cljs$core$async59614(f__$1,ch__$1,meta59612__$1,___$2,fn1__$1,meta59615));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async59614(self__.f,self__.ch,self__.meta59612,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async59611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59612","meta59612",-1409969422,null)], null);
});

cljs.core.async.t_cljs$core$async59611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59611";

cljs.core.async.t_cljs$core$async59611.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59611");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59611.
 */
cljs.core.async.__GT_t_cljs$core$async59611 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59611(f__$1,ch__$1,meta59612){
return (new cljs.core.async.t_cljs$core$async59611(f__$1,ch__$1,meta59612));
});

}

return (new cljs.core.async.t_cljs$core$async59611(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59617 = (function (f,ch,meta59618){
this.f = f;
this.ch = ch;
this.meta59618 = meta59618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59619,meta59618__$1){
var self__ = this;
var _59619__$1 = this;
return (new cljs.core.async.t_cljs$core$async59617(self__.f,self__.ch,meta59618__$1));
});

cljs.core.async.t_cljs$core$async59617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59619){
var self__ = this;
var _59619__$1 = this;
return self__.meta59618;
});

cljs.core.async.t_cljs$core$async59617.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59617.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59617.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async59617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59618","meta59618",1774410969,null)], null);
});

cljs.core.async.t_cljs$core$async59617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59617";

cljs.core.async.t_cljs$core$async59617.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59617");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59617.
 */
cljs.core.async.__GT_t_cljs$core$async59617 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59617(f__$1,ch__$1,meta59618){
return (new cljs.core.async.t_cljs$core$async59617(f__$1,ch__$1,meta59618));
});

}

return (new cljs.core.async.t_cljs$core$async59617(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async59620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59620 = (function (p,ch,meta59621){
this.p = p;
this.ch = ch;
this.meta59621 = meta59621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59622,meta59621__$1){
var self__ = this;
var _59622__$1 = this;
return (new cljs.core.async.t_cljs$core$async59620(self__.p,self__.ch,meta59621__$1));
});

cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59622){
var self__ = this;
var _59622__$1 = this;
return self__.meta59621;
});

cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async59620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59621","meta59621",-747517903,null)], null);
});

cljs.core.async.t_cljs$core$async59620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59620";

cljs.core.async.t_cljs$core$async59620.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59620");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59620.
 */
cljs.core.async.__GT_t_cljs$core$async59620 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59620(p__$1,ch__$1,meta59621){
return (new cljs.core.async.t_cljs$core$async59620(p__$1,ch__$1,meta59621));
});

}

return (new cljs.core.async.t_cljs$core$async59620(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__59624 = arguments.length;
switch (G__59624) {
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
var c__58152__auto___59664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___59664,out){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___59664,out){
return (function (state_59645){
var state_val_59646 = (state_59645[(1)]);
if((state_val_59646 === (7))){
var inst_59641 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
var statearr_59647_59665 = state_59645__$1;
(statearr_59647_59665[(2)] = inst_59641);

(statearr_59647_59665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (1))){
var state_59645__$1 = state_59645;
var statearr_59648_59666 = state_59645__$1;
(statearr_59648_59666[(2)] = null);

(statearr_59648_59666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (4))){
var inst_59627 = (state_59645[(7)]);
var inst_59627__$1 = (state_59645[(2)]);
var inst_59628 = (inst_59627__$1 == null);
var state_59645__$1 = (function (){var statearr_59649 = state_59645;
(statearr_59649[(7)] = inst_59627__$1);

return statearr_59649;
})();
if(cljs.core.truth_(inst_59628)){
var statearr_59650_59667 = state_59645__$1;
(statearr_59650_59667[(1)] = (5));

} else {
var statearr_59651_59668 = state_59645__$1;
(statearr_59651_59668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (6))){
var inst_59627 = (state_59645[(7)]);
var inst_59632 = p.call(null,inst_59627);
var state_59645__$1 = state_59645;
if(cljs.core.truth_(inst_59632)){
var statearr_59652_59669 = state_59645__$1;
(statearr_59652_59669[(1)] = (8));

} else {
var statearr_59653_59670 = state_59645__$1;
(statearr_59653_59670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (3))){
var inst_59643 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59645__$1,inst_59643);
} else {
if((state_val_59646 === (2))){
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59645__$1,(4),ch);
} else {
if((state_val_59646 === (11))){
var inst_59635 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
var statearr_59654_59671 = state_59645__$1;
(statearr_59654_59671[(2)] = inst_59635);

(statearr_59654_59671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (9))){
var state_59645__$1 = state_59645;
var statearr_59655_59672 = state_59645__$1;
(statearr_59655_59672[(2)] = null);

(statearr_59655_59672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (5))){
var inst_59630 = cljs.core.async.close_BANG_.call(null,out);
var state_59645__$1 = state_59645;
var statearr_59656_59673 = state_59645__$1;
(statearr_59656_59673[(2)] = inst_59630);

(statearr_59656_59673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (10))){
var inst_59638 = (state_59645[(2)]);
var state_59645__$1 = (function (){var statearr_59657 = state_59645;
(statearr_59657[(8)] = inst_59638);

return statearr_59657;
})();
var statearr_59658_59674 = state_59645__$1;
(statearr_59658_59674[(2)] = null);

(statearr_59658_59674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (8))){
var inst_59627 = (state_59645[(7)]);
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59645__$1,(11),out,inst_59627);
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
});})(c__58152__auto___59664,out))
;
return ((function (switch__50568__auto__,c__58152__auto___59664,out){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_59659 = [null,null,null,null,null,null,null,null,null];
(statearr_59659[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_59659[(1)] = (1));

return statearr_59659;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_59645){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59660){if((e59660 instanceof Object)){
var ex__50572__auto__ = e59660;
var statearr_59661_59675 = state_59645;
(statearr_59661_59675[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59676 = state_59645;
state_59645 = G__59676;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_59645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_59645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___59664,out))
})();
var state__58154__auto__ = (function (){var statearr_59662 = f__58153__auto__.call(null);
(statearr_59662[(6)] = c__58152__auto___59664);

return statearr_59662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___59664,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59678 = arguments.length;
switch (G__59678) {
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
var c__58152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto__){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto__){
return (function (state_59741){
var state_val_59742 = (state_59741[(1)]);
if((state_val_59742 === (7))){
var inst_59737 = (state_59741[(2)]);
var state_59741__$1 = state_59741;
var statearr_59743_59781 = state_59741__$1;
(statearr_59743_59781[(2)] = inst_59737);

(statearr_59743_59781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (20))){
var inst_59707 = (state_59741[(7)]);
var inst_59718 = (state_59741[(2)]);
var inst_59719 = cljs.core.next.call(null,inst_59707);
var inst_59693 = inst_59719;
var inst_59694 = null;
var inst_59695 = (0);
var inst_59696 = (0);
var state_59741__$1 = (function (){var statearr_59744 = state_59741;
(statearr_59744[(8)] = inst_59693);

(statearr_59744[(9)] = inst_59718);

(statearr_59744[(10)] = inst_59696);

(statearr_59744[(11)] = inst_59694);

(statearr_59744[(12)] = inst_59695);

return statearr_59744;
})();
var statearr_59745_59782 = state_59741__$1;
(statearr_59745_59782[(2)] = null);

(statearr_59745_59782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (1))){
var state_59741__$1 = state_59741;
var statearr_59746_59783 = state_59741__$1;
(statearr_59746_59783[(2)] = null);

(statearr_59746_59783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (4))){
var inst_59682 = (state_59741[(13)]);
var inst_59682__$1 = (state_59741[(2)]);
var inst_59683 = (inst_59682__$1 == null);
var state_59741__$1 = (function (){var statearr_59747 = state_59741;
(statearr_59747[(13)] = inst_59682__$1);

return statearr_59747;
})();
if(cljs.core.truth_(inst_59683)){
var statearr_59748_59784 = state_59741__$1;
(statearr_59748_59784[(1)] = (5));

} else {
var statearr_59749_59785 = state_59741__$1;
(statearr_59749_59785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (15))){
var state_59741__$1 = state_59741;
var statearr_59753_59786 = state_59741__$1;
(statearr_59753_59786[(2)] = null);

(statearr_59753_59786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (21))){
var state_59741__$1 = state_59741;
var statearr_59754_59787 = state_59741__$1;
(statearr_59754_59787[(2)] = null);

(statearr_59754_59787[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (13))){
var inst_59693 = (state_59741[(8)]);
var inst_59696 = (state_59741[(10)]);
var inst_59694 = (state_59741[(11)]);
var inst_59695 = (state_59741[(12)]);
var inst_59703 = (state_59741[(2)]);
var inst_59704 = (inst_59696 + (1));
var tmp59750 = inst_59693;
var tmp59751 = inst_59694;
var tmp59752 = inst_59695;
var inst_59693__$1 = tmp59750;
var inst_59694__$1 = tmp59751;
var inst_59695__$1 = tmp59752;
var inst_59696__$1 = inst_59704;
var state_59741__$1 = (function (){var statearr_59755 = state_59741;
(statearr_59755[(14)] = inst_59703);

(statearr_59755[(8)] = inst_59693__$1);

(statearr_59755[(10)] = inst_59696__$1);

(statearr_59755[(11)] = inst_59694__$1);

(statearr_59755[(12)] = inst_59695__$1);

return statearr_59755;
})();
var statearr_59756_59788 = state_59741__$1;
(statearr_59756_59788[(2)] = null);

(statearr_59756_59788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (22))){
var state_59741__$1 = state_59741;
var statearr_59757_59789 = state_59741__$1;
(statearr_59757_59789[(2)] = null);

(statearr_59757_59789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (6))){
var inst_59682 = (state_59741[(13)]);
var inst_59691 = f.call(null,inst_59682);
var inst_59692 = cljs.core.seq.call(null,inst_59691);
var inst_59693 = inst_59692;
var inst_59694 = null;
var inst_59695 = (0);
var inst_59696 = (0);
var state_59741__$1 = (function (){var statearr_59758 = state_59741;
(statearr_59758[(8)] = inst_59693);

(statearr_59758[(10)] = inst_59696);

(statearr_59758[(11)] = inst_59694);

(statearr_59758[(12)] = inst_59695);

return statearr_59758;
})();
var statearr_59759_59790 = state_59741__$1;
(statearr_59759_59790[(2)] = null);

(statearr_59759_59790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (17))){
var inst_59707 = (state_59741[(7)]);
var inst_59711 = cljs.core.chunk_first.call(null,inst_59707);
var inst_59712 = cljs.core.chunk_rest.call(null,inst_59707);
var inst_59713 = cljs.core.count.call(null,inst_59711);
var inst_59693 = inst_59712;
var inst_59694 = inst_59711;
var inst_59695 = inst_59713;
var inst_59696 = (0);
var state_59741__$1 = (function (){var statearr_59760 = state_59741;
(statearr_59760[(8)] = inst_59693);

(statearr_59760[(10)] = inst_59696);

(statearr_59760[(11)] = inst_59694);

(statearr_59760[(12)] = inst_59695);

return statearr_59760;
})();
var statearr_59761_59791 = state_59741__$1;
(statearr_59761_59791[(2)] = null);

(statearr_59761_59791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (3))){
var inst_59739 = (state_59741[(2)]);
var state_59741__$1 = state_59741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59741__$1,inst_59739);
} else {
if((state_val_59742 === (12))){
var inst_59727 = (state_59741[(2)]);
var state_59741__$1 = state_59741;
var statearr_59762_59792 = state_59741__$1;
(statearr_59762_59792[(2)] = inst_59727);

(statearr_59762_59792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (2))){
var state_59741__$1 = state_59741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59741__$1,(4),in$);
} else {
if((state_val_59742 === (23))){
var inst_59735 = (state_59741[(2)]);
var state_59741__$1 = state_59741;
var statearr_59763_59793 = state_59741__$1;
(statearr_59763_59793[(2)] = inst_59735);

(statearr_59763_59793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (19))){
var inst_59722 = (state_59741[(2)]);
var state_59741__$1 = state_59741;
var statearr_59764_59794 = state_59741__$1;
(statearr_59764_59794[(2)] = inst_59722);

(statearr_59764_59794[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (11))){
var inst_59693 = (state_59741[(8)]);
var inst_59707 = (state_59741[(7)]);
var inst_59707__$1 = cljs.core.seq.call(null,inst_59693);
var state_59741__$1 = (function (){var statearr_59765 = state_59741;
(statearr_59765[(7)] = inst_59707__$1);

return statearr_59765;
})();
if(inst_59707__$1){
var statearr_59766_59795 = state_59741__$1;
(statearr_59766_59795[(1)] = (14));

} else {
var statearr_59767_59796 = state_59741__$1;
(statearr_59767_59796[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (9))){
var inst_59729 = (state_59741[(2)]);
var inst_59730 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_59741__$1 = (function (){var statearr_59768 = state_59741;
(statearr_59768[(15)] = inst_59729);

return statearr_59768;
})();
if(cljs.core.truth_(inst_59730)){
var statearr_59769_59797 = state_59741__$1;
(statearr_59769_59797[(1)] = (21));

} else {
var statearr_59770_59798 = state_59741__$1;
(statearr_59770_59798[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (5))){
var inst_59685 = cljs.core.async.close_BANG_.call(null,out);
var state_59741__$1 = state_59741;
var statearr_59771_59799 = state_59741__$1;
(statearr_59771_59799[(2)] = inst_59685);

(statearr_59771_59799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (14))){
var inst_59707 = (state_59741[(7)]);
var inst_59709 = cljs.core.chunked_seq_QMARK_.call(null,inst_59707);
var state_59741__$1 = state_59741;
if(inst_59709){
var statearr_59772_59800 = state_59741__$1;
(statearr_59772_59800[(1)] = (17));

} else {
var statearr_59773_59801 = state_59741__$1;
(statearr_59773_59801[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (16))){
var inst_59725 = (state_59741[(2)]);
var state_59741__$1 = state_59741;
var statearr_59774_59802 = state_59741__$1;
(statearr_59774_59802[(2)] = inst_59725);

(statearr_59774_59802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59742 === (10))){
var inst_59696 = (state_59741[(10)]);
var inst_59694 = (state_59741[(11)]);
var inst_59701 = cljs.core._nth.call(null,inst_59694,inst_59696);
var state_59741__$1 = state_59741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59741__$1,(13),out,inst_59701);
} else {
if((state_val_59742 === (18))){
var inst_59707 = (state_59741[(7)]);
var inst_59716 = cljs.core.first.call(null,inst_59707);
var state_59741__$1 = state_59741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59741__$1,(20),out,inst_59716);
} else {
if((state_val_59742 === (8))){
var inst_59696 = (state_59741[(10)]);
var inst_59695 = (state_59741[(12)]);
var inst_59698 = (inst_59696 < inst_59695);
var inst_59699 = inst_59698;
var state_59741__$1 = state_59741;
if(cljs.core.truth_(inst_59699)){
var statearr_59775_59803 = state_59741__$1;
(statearr_59775_59803[(1)] = (10));

} else {
var statearr_59776_59804 = state_59741__$1;
(statearr_59776_59804[(1)] = (11));

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
});})(c__58152__auto__))
;
return ((function (switch__50568__auto__,c__58152__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50569__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50569__auto____0 = (function (){
var statearr_59777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59777[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50569__auto__);

(statearr_59777[(1)] = (1));

return statearr_59777;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50569__auto____1 = (function (state_59741){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59778){if((e59778 instanceof Object)){
var ex__50572__auto__ = e59778;
var statearr_59779_59805 = state_59741;
(statearr_59779_59805[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59806 = state_59741;
state_59741 = G__59806;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50569__auto__ = function(state_59741){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50569__auto____1.call(this,state_59741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50569__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50569__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto__))
})();
var state__58154__auto__ = (function (){var statearr_59780 = f__58153__auto__.call(null);
(statearr_59780[(6)] = c__58152__auto__);

return statearr_59780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto__))
);

return c__58152__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59808 = arguments.length;
switch (G__59808) {
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
var G__59811 = arguments.length;
switch (G__59811) {
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
var G__59814 = arguments.length;
switch (G__59814) {
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
var c__58152__auto___59861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___59861,out){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___59861,out){
return (function (state_59838){
var state_val_59839 = (state_59838[(1)]);
if((state_val_59839 === (7))){
var inst_59833 = (state_59838[(2)]);
var state_59838__$1 = state_59838;
var statearr_59840_59862 = state_59838__$1;
(statearr_59840_59862[(2)] = inst_59833);

(statearr_59840_59862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (1))){
var inst_59815 = null;
var state_59838__$1 = (function (){var statearr_59841 = state_59838;
(statearr_59841[(7)] = inst_59815);

return statearr_59841;
})();
var statearr_59842_59863 = state_59838__$1;
(statearr_59842_59863[(2)] = null);

(statearr_59842_59863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (4))){
var inst_59818 = (state_59838[(8)]);
var inst_59818__$1 = (state_59838[(2)]);
var inst_59819 = (inst_59818__$1 == null);
var inst_59820 = cljs.core.not.call(null,inst_59819);
var state_59838__$1 = (function (){var statearr_59843 = state_59838;
(statearr_59843[(8)] = inst_59818__$1);

return statearr_59843;
})();
if(inst_59820){
var statearr_59844_59864 = state_59838__$1;
(statearr_59844_59864[(1)] = (5));

} else {
var statearr_59845_59865 = state_59838__$1;
(statearr_59845_59865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (6))){
var state_59838__$1 = state_59838;
var statearr_59846_59866 = state_59838__$1;
(statearr_59846_59866[(2)] = null);

(statearr_59846_59866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (3))){
var inst_59835 = (state_59838[(2)]);
var inst_59836 = cljs.core.async.close_BANG_.call(null,out);
var state_59838__$1 = (function (){var statearr_59847 = state_59838;
(statearr_59847[(9)] = inst_59835);

return statearr_59847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59838__$1,inst_59836);
} else {
if((state_val_59839 === (2))){
var state_59838__$1 = state_59838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59838__$1,(4),ch);
} else {
if((state_val_59839 === (11))){
var inst_59818 = (state_59838[(8)]);
var inst_59827 = (state_59838[(2)]);
var inst_59815 = inst_59818;
var state_59838__$1 = (function (){var statearr_59848 = state_59838;
(statearr_59848[(7)] = inst_59815);

(statearr_59848[(10)] = inst_59827);

return statearr_59848;
})();
var statearr_59849_59867 = state_59838__$1;
(statearr_59849_59867[(2)] = null);

(statearr_59849_59867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (9))){
var inst_59818 = (state_59838[(8)]);
var state_59838__$1 = state_59838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59838__$1,(11),out,inst_59818);
} else {
if((state_val_59839 === (5))){
var inst_59815 = (state_59838[(7)]);
var inst_59818 = (state_59838[(8)]);
var inst_59822 = cljs.core._EQ_.call(null,inst_59818,inst_59815);
var state_59838__$1 = state_59838;
if(inst_59822){
var statearr_59851_59868 = state_59838__$1;
(statearr_59851_59868[(1)] = (8));

} else {
var statearr_59852_59869 = state_59838__$1;
(statearr_59852_59869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (10))){
var inst_59830 = (state_59838[(2)]);
var state_59838__$1 = state_59838;
var statearr_59853_59870 = state_59838__$1;
(statearr_59853_59870[(2)] = inst_59830);

(statearr_59853_59870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (8))){
var inst_59815 = (state_59838[(7)]);
var tmp59850 = inst_59815;
var inst_59815__$1 = tmp59850;
var state_59838__$1 = (function (){var statearr_59854 = state_59838;
(statearr_59854[(7)] = inst_59815__$1);

return statearr_59854;
})();
var statearr_59855_59871 = state_59838__$1;
(statearr_59855_59871[(2)] = null);

(statearr_59855_59871[(1)] = (2));


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
});})(c__58152__auto___59861,out))
;
return ((function (switch__50568__auto__,c__58152__auto___59861,out){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_59856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59856[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_59856[(1)] = (1));

return statearr_59856;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_59838){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59857){if((e59857 instanceof Object)){
var ex__50572__auto__ = e59857;
var statearr_59858_59872 = state_59838;
(statearr_59858_59872[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59873 = state_59838;
state_59838 = G__59873;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_59838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_59838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___59861,out))
})();
var state__58154__auto__ = (function (){var statearr_59859 = f__58153__auto__.call(null);
(statearr_59859[(6)] = c__58152__auto___59861);

return statearr_59859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___59861,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59875 = arguments.length;
switch (G__59875) {
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
var c__58152__auto___59941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___59941,out){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___59941,out){
return (function (state_59913){
var state_val_59914 = (state_59913[(1)]);
if((state_val_59914 === (7))){
var inst_59909 = (state_59913[(2)]);
var state_59913__$1 = state_59913;
var statearr_59915_59942 = state_59913__$1;
(statearr_59915_59942[(2)] = inst_59909);

(statearr_59915_59942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (1))){
var inst_59876 = (new Array(n));
var inst_59877 = inst_59876;
var inst_59878 = (0);
var state_59913__$1 = (function (){var statearr_59916 = state_59913;
(statearr_59916[(7)] = inst_59877);

(statearr_59916[(8)] = inst_59878);

return statearr_59916;
})();
var statearr_59917_59943 = state_59913__$1;
(statearr_59917_59943[(2)] = null);

(statearr_59917_59943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (4))){
var inst_59881 = (state_59913[(9)]);
var inst_59881__$1 = (state_59913[(2)]);
var inst_59882 = (inst_59881__$1 == null);
var inst_59883 = cljs.core.not.call(null,inst_59882);
var state_59913__$1 = (function (){var statearr_59918 = state_59913;
(statearr_59918[(9)] = inst_59881__$1);

return statearr_59918;
})();
if(inst_59883){
var statearr_59919_59944 = state_59913__$1;
(statearr_59919_59944[(1)] = (5));

} else {
var statearr_59920_59945 = state_59913__$1;
(statearr_59920_59945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (15))){
var inst_59903 = (state_59913[(2)]);
var state_59913__$1 = state_59913;
var statearr_59921_59946 = state_59913__$1;
(statearr_59921_59946[(2)] = inst_59903);

(statearr_59921_59946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (13))){
var state_59913__$1 = state_59913;
var statearr_59922_59947 = state_59913__$1;
(statearr_59922_59947[(2)] = null);

(statearr_59922_59947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (6))){
var inst_59878 = (state_59913[(8)]);
var inst_59899 = (inst_59878 > (0));
var state_59913__$1 = state_59913;
if(cljs.core.truth_(inst_59899)){
var statearr_59923_59948 = state_59913__$1;
(statearr_59923_59948[(1)] = (12));

} else {
var statearr_59924_59949 = state_59913__$1;
(statearr_59924_59949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (3))){
var inst_59911 = (state_59913[(2)]);
var state_59913__$1 = state_59913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59913__$1,inst_59911);
} else {
if((state_val_59914 === (12))){
var inst_59877 = (state_59913[(7)]);
var inst_59901 = cljs.core.vec.call(null,inst_59877);
var state_59913__$1 = state_59913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59913__$1,(15),out,inst_59901);
} else {
if((state_val_59914 === (2))){
var state_59913__$1 = state_59913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59913__$1,(4),ch);
} else {
if((state_val_59914 === (11))){
var inst_59893 = (state_59913[(2)]);
var inst_59894 = (new Array(n));
var inst_59877 = inst_59894;
var inst_59878 = (0);
var state_59913__$1 = (function (){var statearr_59925 = state_59913;
(statearr_59925[(7)] = inst_59877);

(statearr_59925[(10)] = inst_59893);

(statearr_59925[(8)] = inst_59878);

return statearr_59925;
})();
var statearr_59926_59950 = state_59913__$1;
(statearr_59926_59950[(2)] = null);

(statearr_59926_59950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (9))){
var inst_59877 = (state_59913[(7)]);
var inst_59891 = cljs.core.vec.call(null,inst_59877);
var state_59913__$1 = state_59913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59913__$1,(11),out,inst_59891);
} else {
if((state_val_59914 === (5))){
var inst_59877 = (state_59913[(7)]);
var inst_59878 = (state_59913[(8)]);
var inst_59881 = (state_59913[(9)]);
var inst_59886 = (state_59913[(11)]);
var inst_59885 = (inst_59877[inst_59878] = inst_59881);
var inst_59886__$1 = (inst_59878 + (1));
var inst_59887 = (inst_59886__$1 < n);
var state_59913__$1 = (function (){var statearr_59927 = state_59913;
(statearr_59927[(12)] = inst_59885);

(statearr_59927[(11)] = inst_59886__$1);

return statearr_59927;
})();
if(cljs.core.truth_(inst_59887)){
var statearr_59928_59951 = state_59913__$1;
(statearr_59928_59951[(1)] = (8));

} else {
var statearr_59929_59952 = state_59913__$1;
(statearr_59929_59952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (14))){
var inst_59906 = (state_59913[(2)]);
var inst_59907 = cljs.core.async.close_BANG_.call(null,out);
var state_59913__$1 = (function (){var statearr_59931 = state_59913;
(statearr_59931[(13)] = inst_59906);

return statearr_59931;
})();
var statearr_59932_59953 = state_59913__$1;
(statearr_59932_59953[(2)] = inst_59907);

(statearr_59932_59953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (10))){
var inst_59897 = (state_59913[(2)]);
var state_59913__$1 = state_59913;
var statearr_59933_59954 = state_59913__$1;
(statearr_59933_59954[(2)] = inst_59897);

(statearr_59933_59954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59914 === (8))){
var inst_59877 = (state_59913[(7)]);
var inst_59886 = (state_59913[(11)]);
var tmp59930 = inst_59877;
var inst_59877__$1 = tmp59930;
var inst_59878 = inst_59886;
var state_59913__$1 = (function (){var statearr_59934 = state_59913;
(statearr_59934[(7)] = inst_59877__$1);

(statearr_59934[(8)] = inst_59878);

return statearr_59934;
})();
var statearr_59935_59955 = state_59913__$1;
(statearr_59935_59955[(2)] = null);

(statearr_59935_59955[(1)] = (2));


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
});})(c__58152__auto___59941,out))
;
return ((function (switch__50568__auto__,c__58152__auto___59941,out){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_59936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59936[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_59936[(1)] = (1));

return statearr_59936;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_59913){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_59913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e59937){if((e59937 instanceof Object)){
var ex__50572__auto__ = e59937;
var statearr_59938_59956 = state_59913;
(statearr_59938_59956[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59957 = state_59913;
state_59913 = G__59957;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_59913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_59913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___59941,out))
})();
var state__58154__auto__ = (function (){var statearr_59939 = f__58153__auto__.call(null);
(statearr_59939[(6)] = c__58152__auto___59941);

return statearr_59939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___59941,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59959 = arguments.length;
switch (G__59959) {
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
var c__58152__auto___60029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58152__auto___60029,out){
return (function (){
var f__58153__auto__ = (function (){var switch__50568__auto__ = ((function (c__58152__auto___60029,out){
return (function (state_60001){
var state_val_60002 = (state_60001[(1)]);
if((state_val_60002 === (7))){
var inst_59997 = (state_60001[(2)]);
var state_60001__$1 = state_60001;
var statearr_60003_60030 = state_60001__$1;
(statearr_60003_60030[(2)] = inst_59997);

(statearr_60003_60030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (1))){
var inst_59960 = [];
var inst_59961 = inst_59960;
var inst_59962 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60001__$1 = (function (){var statearr_60004 = state_60001;
(statearr_60004[(7)] = inst_59961);

(statearr_60004[(8)] = inst_59962);

return statearr_60004;
})();
var statearr_60005_60031 = state_60001__$1;
(statearr_60005_60031[(2)] = null);

(statearr_60005_60031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (4))){
var inst_59965 = (state_60001[(9)]);
var inst_59965__$1 = (state_60001[(2)]);
var inst_59966 = (inst_59965__$1 == null);
var inst_59967 = cljs.core.not.call(null,inst_59966);
var state_60001__$1 = (function (){var statearr_60006 = state_60001;
(statearr_60006[(9)] = inst_59965__$1);

return statearr_60006;
})();
if(inst_59967){
var statearr_60007_60032 = state_60001__$1;
(statearr_60007_60032[(1)] = (5));

} else {
var statearr_60008_60033 = state_60001__$1;
(statearr_60008_60033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (15))){
var inst_59991 = (state_60001[(2)]);
var state_60001__$1 = state_60001;
var statearr_60009_60034 = state_60001__$1;
(statearr_60009_60034[(2)] = inst_59991);

(statearr_60009_60034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (13))){
var state_60001__$1 = state_60001;
var statearr_60010_60035 = state_60001__$1;
(statearr_60010_60035[(2)] = null);

(statearr_60010_60035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (6))){
var inst_59961 = (state_60001[(7)]);
var inst_59986 = inst_59961.length;
var inst_59987 = (inst_59986 > (0));
var state_60001__$1 = state_60001;
if(cljs.core.truth_(inst_59987)){
var statearr_60011_60036 = state_60001__$1;
(statearr_60011_60036[(1)] = (12));

} else {
var statearr_60012_60037 = state_60001__$1;
(statearr_60012_60037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (3))){
var inst_59999 = (state_60001[(2)]);
var state_60001__$1 = state_60001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60001__$1,inst_59999);
} else {
if((state_val_60002 === (12))){
var inst_59961 = (state_60001[(7)]);
var inst_59989 = cljs.core.vec.call(null,inst_59961);
var state_60001__$1 = state_60001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60001__$1,(15),out,inst_59989);
} else {
if((state_val_60002 === (2))){
var state_60001__$1 = state_60001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60001__$1,(4),ch);
} else {
if((state_val_60002 === (11))){
var inst_59969 = (state_60001[(10)]);
var inst_59965 = (state_60001[(9)]);
var inst_59979 = (state_60001[(2)]);
var inst_59980 = [];
var inst_59981 = inst_59980.push(inst_59965);
var inst_59961 = inst_59980;
var inst_59962 = inst_59969;
var state_60001__$1 = (function (){var statearr_60013 = state_60001;
(statearr_60013[(7)] = inst_59961);

(statearr_60013[(8)] = inst_59962);

(statearr_60013[(11)] = inst_59981);

(statearr_60013[(12)] = inst_59979);

return statearr_60013;
})();
var statearr_60014_60038 = state_60001__$1;
(statearr_60014_60038[(2)] = null);

(statearr_60014_60038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (9))){
var inst_59961 = (state_60001[(7)]);
var inst_59977 = cljs.core.vec.call(null,inst_59961);
var state_60001__$1 = state_60001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60001__$1,(11),out,inst_59977);
} else {
if((state_val_60002 === (5))){
var inst_59969 = (state_60001[(10)]);
var inst_59962 = (state_60001[(8)]);
var inst_59965 = (state_60001[(9)]);
var inst_59969__$1 = f.call(null,inst_59965);
var inst_59970 = cljs.core._EQ_.call(null,inst_59969__$1,inst_59962);
var inst_59971 = cljs.core.keyword_identical_QMARK_.call(null,inst_59962,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59972 = ((inst_59970) || (inst_59971));
var state_60001__$1 = (function (){var statearr_60015 = state_60001;
(statearr_60015[(10)] = inst_59969__$1);

return statearr_60015;
})();
if(cljs.core.truth_(inst_59972)){
var statearr_60016_60039 = state_60001__$1;
(statearr_60016_60039[(1)] = (8));

} else {
var statearr_60017_60040 = state_60001__$1;
(statearr_60017_60040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (14))){
var inst_59994 = (state_60001[(2)]);
var inst_59995 = cljs.core.async.close_BANG_.call(null,out);
var state_60001__$1 = (function (){var statearr_60019 = state_60001;
(statearr_60019[(13)] = inst_59994);

return statearr_60019;
})();
var statearr_60020_60041 = state_60001__$1;
(statearr_60020_60041[(2)] = inst_59995);

(statearr_60020_60041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (10))){
var inst_59984 = (state_60001[(2)]);
var state_60001__$1 = state_60001;
var statearr_60021_60042 = state_60001__$1;
(statearr_60021_60042[(2)] = inst_59984);

(statearr_60021_60042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60002 === (8))){
var inst_59969 = (state_60001[(10)]);
var inst_59961 = (state_60001[(7)]);
var inst_59965 = (state_60001[(9)]);
var inst_59974 = inst_59961.push(inst_59965);
var tmp60018 = inst_59961;
var inst_59961__$1 = tmp60018;
var inst_59962 = inst_59969;
var state_60001__$1 = (function (){var statearr_60022 = state_60001;
(statearr_60022[(7)] = inst_59961__$1);

(statearr_60022[(14)] = inst_59974);

(statearr_60022[(8)] = inst_59962);

return statearr_60022;
})();
var statearr_60023_60043 = state_60001__$1;
(statearr_60023_60043[(2)] = null);

(statearr_60023_60043[(1)] = (2));


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
});})(c__58152__auto___60029,out))
;
return ((function (switch__50568__auto__,c__58152__auto___60029,out){
return (function() {
var cljs$core$async$state_machine__50569__auto__ = null;
var cljs$core$async$state_machine__50569__auto____0 = (function (){
var statearr_60024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60024[(0)] = cljs$core$async$state_machine__50569__auto__);

(statearr_60024[(1)] = (1));

return statearr_60024;
});
var cljs$core$async$state_machine__50569__auto____1 = (function (state_60001){
while(true){
var ret_value__50570__auto__ = (function (){try{while(true){
var result__50571__auto__ = switch__50568__auto__.call(null,state_60001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50571__auto__;
}
break;
}
}catch (e60025){if((e60025 instanceof Object)){
var ex__50572__auto__ = e60025;
var statearr_60026_60044 = state_60001;
(statearr_60026_60044[(5)] = ex__50572__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50570__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60045 = state_60001;
state_60001 = G__60045;
continue;
} else {
return ret_value__50570__auto__;
}
break;
}
});
cljs$core$async$state_machine__50569__auto__ = function(state_60001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50569__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50569__auto____1.call(this,state_60001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50569__auto____0;
cljs$core$async$state_machine__50569__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50569__auto____1;
return cljs$core$async$state_machine__50569__auto__;
})()
;})(switch__50568__auto__,c__58152__auto___60029,out))
})();
var state__58154__auto__ = (function (){var statearr_60027 = f__58153__auto__.call(null);
(statearr_60027[(6)] = c__58152__auto___60029);

return statearr_60027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58154__auto__);
});})(c__58152__auto___60029,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1548888388522
