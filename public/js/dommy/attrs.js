// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3522__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3522__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3522__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__8271 = (i + class$.length);
start_from = G__8271;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___8296 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___8296))
{var class_list_8297 = temp__4124__auto___8296;var seq__8284_8298 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8285_8299 = null;var count__8286_8300 = (0);var i__8287_8301 = (0);while(true){
if((i__8287_8301 < count__8286_8300))
{var class_8302 = cljs.core._nth.call(null,chunk__8285_8299,i__8287_8301);class_list_8297.add(class_8302);
{
var G__8303 = seq__8284_8298;
var G__8304 = chunk__8285_8299;
var G__8305 = count__8286_8300;
var G__8306 = (i__8287_8301 + (1));
seq__8284_8298 = G__8303;
chunk__8285_8299 = G__8304;
count__8286_8300 = G__8305;
i__8287_8301 = G__8306;
continue;
}
} else
{var temp__4126__auto___8307 = cljs.core.seq.call(null,seq__8284_8298);if(temp__4126__auto___8307)
{var seq__8284_8308__$1 = temp__4126__auto___8307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8284_8308__$1))
{var c__4290__auto___8309 = cljs.core.chunk_first.call(null,seq__8284_8308__$1);{
var G__8310 = cljs.core.chunk_rest.call(null,seq__8284_8308__$1);
var G__8311 = c__4290__auto___8309;
var G__8312 = cljs.core.count.call(null,c__4290__auto___8309);
var G__8313 = (0);
seq__8284_8298 = G__8310;
chunk__8285_8299 = G__8311;
count__8286_8300 = G__8312;
i__8287_8301 = G__8313;
continue;
}
} else
{var class_8314 = cljs.core.first.call(null,seq__8284_8308__$1);class_list_8297.add(class_8314);
{
var G__8315 = cljs.core.next.call(null,seq__8284_8308__$1);
var G__8316 = null;
var G__8317 = (0);
var G__8318 = (0);
seq__8284_8298 = G__8315;
chunk__8285_8299 = G__8316;
count__8286_8300 = G__8317;
i__8287_8301 = G__8318;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_8319 = elem__$1.className;var seq__8288_8320 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__8289_8321 = null;var count__8290_8322 = (0);var i__8291_8323 = (0);while(true){
if((i__8291_8323 < count__8290_8322))
{var class_8324 = cljs.core._nth.call(null,chunk__8289_8321,i__8291_8323);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8319,class_8324)))
{} else
{elem__$1.className = (((class_name_8319 === ""))?class_8324:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_8319)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_8324)));
}
{
var G__8325 = seq__8288_8320;
var G__8326 = chunk__8289_8321;
var G__8327 = count__8290_8322;
var G__8328 = (i__8291_8323 + (1));
seq__8288_8320 = G__8325;
chunk__8289_8321 = G__8326;
count__8290_8322 = G__8327;
i__8291_8323 = G__8328;
continue;
}
} else
{var temp__4126__auto___8329 = cljs.core.seq.call(null,seq__8288_8320);if(temp__4126__auto___8329)
{var seq__8288_8330__$1 = temp__4126__auto___8329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8288_8330__$1))
{var c__4290__auto___8331 = cljs.core.chunk_first.call(null,seq__8288_8330__$1);{
var G__8332 = cljs.core.chunk_rest.call(null,seq__8288_8330__$1);
var G__8333 = c__4290__auto___8331;
var G__8334 = cljs.core.count.call(null,c__4290__auto___8331);
var G__8335 = (0);
seq__8288_8320 = G__8332;
chunk__8289_8321 = G__8333;
count__8290_8322 = G__8334;
i__8291_8323 = G__8335;
continue;
}
} else
{var class_8336 = cljs.core.first.call(null,seq__8288_8330__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_8319,class_8336)))
{} else
{elem__$1.className = (((class_name_8319 === ""))?class_8336:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_8319)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_8336)));
}
{
var G__8337 = cljs.core.next.call(null,seq__8288_8330__$1);
var G__8338 = null;
var G__8339 = (0);
var G__8340 = (0);
seq__8288_8320 = G__8337;
chunk__8289_8321 = G__8338;
count__8290_8322 = G__8339;
i__8291_8323 = G__8340;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__8341__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8292_8342 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8293_8343 = null;var count__8294_8344 = (0);var i__8295_8345 = (0);while(true){
if((i__8295_8345 < count__8294_8344))
{var c_8346 = cljs.core._nth.call(null,chunk__8293_8343,i__8295_8345);add_class_BANG_.call(null,elem__$1,c_8346);
{
var G__8347 = seq__8292_8342;
var G__8348 = chunk__8293_8343;
var G__8349 = count__8294_8344;
var G__8350 = (i__8295_8345 + (1));
seq__8292_8342 = G__8347;
chunk__8293_8343 = G__8348;
count__8294_8344 = G__8349;
i__8295_8345 = G__8350;
continue;
}
} else
{var temp__4126__auto___8351 = cljs.core.seq.call(null,seq__8292_8342);if(temp__4126__auto___8351)
{var seq__8292_8352__$1 = temp__4126__auto___8351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8292_8352__$1))
{var c__4290__auto___8353 = cljs.core.chunk_first.call(null,seq__8292_8352__$1);{
var G__8354 = cljs.core.chunk_rest.call(null,seq__8292_8352__$1);
var G__8355 = c__4290__auto___8353;
var G__8356 = cljs.core.count.call(null,c__4290__auto___8353);
var G__8357 = (0);
seq__8292_8342 = G__8354;
chunk__8293_8343 = G__8355;
count__8294_8344 = G__8356;
i__8295_8345 = G__8357;
continue;
}
} else
{var c_8358 = cljs.core.first.call(null,seq__8292_8352__$1);add_class_BANG_.call(null,elem__$1,c_8358);
{
var G__8359 = cljs.core.next.call(null,seq__8292_8352__$1);
var G__8360 = null;
var G__8361 = (0);
var G__8362 = (0);
seq__8292_8342 = G__8359;
chunk__8293_8343 = G__8360;
count__8294_8344 = G__8361;
i__8295_8345 = G__8362;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__8341 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8341__delegate.call(this,elem,classes,more_classes);};
G__8341.cljs$lang$maxFixedArity = 2;
G__8341.cljs$lang$applyTo = (function (arglist__8363){
var elem = cljs.core.first(arglist__8363);
arglist__8363 = cljs.core.next(arglist__8363);
var classes = cljs.core.first(arglist__8363);
var more_classes = cljs.core.rest(arglist__8363);
return G__8341__delegate(elem,classes,more_classes);
});
G__8341.cljs$core$IFn$_invoke$arity$variadic = G__8341__delegate;
return G__8341;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__8364 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__8364;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___8373 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___8373))
{var class_list_8374 = temp__4124__auto___8373;class_list_8374.remove(class$__$1);
} else
{var class_name_8375 = elem__$1.className;var new_class_name_8376 = dommy.attrs.remove_class_str.call(null,class_name_8375,class$__$1);if((class_name_8375 === new_class_name_8376))
{} else
{elem__$1.className = new_class_name_8376;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__8377__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8369 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8370 = null;var count__8371 = (0);var i__8372 = (0);while(true){
if((i__8372 < count__8371))
{var c = cljs.core._nth.call(null,chunk__8370,i__8372);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8378 = seq__8369;
var G__8379 = chunk__8370;
var G__8380 = count__8371;
var G__8381 = (i__8372 + (1));
seq__8369 = G__8378;
chunk__8370 = G__8379;
count__8371 = G__8380;
i__8372 = G__8381;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8369);if(temp__4126__auto__)
{var seq__8369__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8369__$1))
{var c__4290__auto__ = cljs.core.chunk_first.call(null,seq__8369__$1);{
var G__8382 = cljs.core.chunk_rest.call(null,seq__8369__$1);
var G__8383 = c__4290__auto__;
var G__8384 = cljs.core.count.call(null,c__4290__auto__);
var G__8385 = (0);
seq__8369 = G__8382;
chunk__8370 = G__8383;
count__8371 = G__8384;
i__8372 = G__8385;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8369__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__8386 = cljs.core.next.call(null,seq__8369__$1);
var G__8387 = null;
var G__8388 = (0);
var G__8389 = (0);
seq__8369 = G__8386;
chunk__8370 = G__8387;
count__8371 = G__8388;
i__8372 = G__8389;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__8377 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8377__delegate.call(this,elem,class$,classes);};
G__8377.cljs$lang$maxFixedArity = 2;
G__8377.cljs$lang$applyTo = (function (arglist__8390){
var elem = cljs.core.first(arglist__8390);
arglist__8390 = cljs.core.next(arglist__8390);
var class$ = cljs.core.first(arglist__8390);
var classes = cljs.core.rest(arglist__8390);
return G__8377__delegate(elem,class$,classes);
});
G__8377.cljs$core$IFn$_invoke$arity$variadic = G__8377__delegate;
return G__8377;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___8391 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___8391))
{var class_list_8392 = temp__4124__auto___8391;class_list_8392.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__8395){var vec__8396 = p__8395;var k = cljs.core.nth.call(null,vec__8396,(0),null);var v = cljs.core.nth.call(null,vec__8396,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__8403_8409 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__8404_8410 = null;var count__8405_8411 = (0);var i__8406_8412 = (0);while(true){
if((i__8406_8412 < count__8405_8411))
{var vec__8407_8413 = cljs.core._nth.call(null,chunk__8404_8410,i__8406_8412);var k_8414 = cljs.core.nth.call(null,vec__8407_8413,(0),null);var v_8415 = cljs.core.nth.call(null,vec__8407_8413,(1),null);(style[cljs.core.name.call(null,k_8414)] = v_8415);
{
var G__8416 = seq__8403_8409;
var G__8417 = chunk__8404_8410;
var G__8418 = count__8405_8411;
var G__8419 = (i__8406_8412 + (1));
seq__8403_8409 = G__8416;
chunk__8404_8410 = G__8417;
count__8405_8411 = G__8418;
i__8406_8412 = G__8419;
continue;
}
} else
{var temp__4126__auto___8420 = cljs.core.seq.call(null,seq__8403_8409);if(temp__4126__auto___8420)
{var seq__8403_8421__$1 = temp__4126__auto___8420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8403_8421__$1))
{var c__4290__auto___8422 = cljs.core.chunk_first.call(null,seq__8403_8421__$1);{
var G__8423 = cljs.core.chunk_rest.call(null,seq__8403_8421__$1);
var G__8424 = c__4290__auto___8422;
var G__8425 = cljs.core.count.call(null,c__4290__auto___8422);
var G__8426 = (0);
seq__8403_8409 = G__8423;
chunk__8404_8410 = G__8424;
count__8405_8411 = G__8425;
i__8406_8412 = G__8426;
continue;
}
} else
{var vec__8408_8427 = cljs.core.first.call(null,seq__8403_8421__$1);var k_8428 = cljs.core.nth.call(null,vec__8408_8427,(0),null);var v_8429 = cljs.core.nth.call(null,vec__8408_8427,(1),null);(style[cljs.core.name.call(null,k_8428)] = v_8429);
{
var G__8430 = cljs.core.next.call(null,seq__8403_8421__$1);
var G__8431 = null;
var G__8432 = (0);
var G__8433 = (0);
seq__8403_8409 = G__8430;
chunk__8404_8410 = G__8431;
count__8405_8411 = G__8432;
i__8406_8412 = G__8433;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8434){
var elem = cljs.core.first(arglist__8434);
var kvs = cljs.core.rest(arglist__8434);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8441_8447 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__8442_8448 = null;var count__8443_8449 = (0);var i__8444_8450 = (0);while(true){
if((i__8444_8450 < count__8443_8449))
{var vec__8445_8451 = cljs.core._nth.call(null,chunk__8442_8448,i__8444_8450);var k_8452 = cljs.core.nth.call(null,vec__8445_8451,(0),null);var v_8453 = cljs.core.nth.call(null,vec__8445_8451,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8452,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_8453)+"px"));
{
var G__8454 = seq__8441_8447;
var G__8455 = chunk__8442_8448;
var G__8456 = count__8443_8449;
var G__8457 = (i__8444_8450 + (1));
seq__8441_8447 = G__8454;
chunk__8442_8448 = G__8455;
count__8443_8449 = G__8456;
i__8444_8450 = G__8457;
continue;
}
} else
{var temp__4126__auto___8458 = cljs.core.seq.call(null,seq__8441_8447);if(temp__4126__auto___8458)
{var seq__8441_8459__$1 = temp__4126__auto___8458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8441_8459__$1))
{var c__4290__auto___8460 = cljs.core.chunk_first.call(null,seq__8441_8459__$1);{
var G__8461 = cljs.core.chunk_rest.call(null,seq__8441_8459__$1);
var G__8462 = c__4290__auto___8460;
var G__8463 = cljs.core.count.call(null,c__4290__auto___8460);
var G__8464 = (0);
seq__8441_8447 = G__8461;
chunk__8442_8448 = G__8462;
count__8443_8449 = G__8463;
i__8444_8450 = G__8464;
continue;
}
} else
{var vec__8446_8465 = cljs.core.first.call(null,seq__8441_8459__$1);var k_8466 = cljs.core.nth.call(null,vec__8446_8465,(0),null);var v_8467 = cljs.core.nth.call(null,vec__8446_8465,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_8466,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_8467)+"px"));
{
var G__8468 = cljs.core.next.call(null,seq__8441_8459__$1);
var G__8469 = null;
var G__8470 = (0);
var G__8471 = (0);
seq__8441_8447 = G__8468;
chunk__8442_8448 = G__8469;
count__8443_8449 = G__8470;
i__8444_8450 = G__8471;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8472){
var elem = cljs.core.first(arglist__8472);
var kvs = cljs.core.rest(arglist__8472);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__8481 = dommy.template.__GT_node_like.call(null,elem);(G__8481[cljs.core.name.call(null,k)] = v);
return G__8481;
} else
{var G__8482 = dommy.template.__GT_node_like.call(null,elem);G__8482.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__8482;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8489__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8483_8490 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__8484_8491 = null;var count__8485_8492 = (0);var i__8486_8493 = (0);while(true){
if((i__8486_8493 < count__8485_8492))
{var vec__8487_8494 = cljs.core._nth.call(null,chunk__8484_8491,i__8486_8493);var k_8495__$1 = cljs.core.nth.call(null,vec__8487_8494,(0),null);var v_8496__$1 = cljs.core.nth.call(null,vec__8487_8494,(1),null);set_attr_BANG_.call(null,elem__$1,k_8495__$1,v_8496__$1);
{
var G__8497 = seq__8483_8490;
var G__8498 = chunk__8484_8491;
var G__8499 = count__8485_8492;
var G__8500 = (i__8486_8493 + (1));
seq__8483_8490 = G__8497;
chunk__8484_8491 = G__8498;
count__8485_8492 = G__8499;
i__8486_8493 = G__8500;
continue;
}
} else
{var temp__4126__auto___8501 = cljs.core.seq.call(null,seq__8483_8490);if(temp__4126__auto___8501)
{var seq__8483_8502__$1 = temp__4126__auto___8501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8483_8502__$1))
{var c__4290__auto___8503 = cljs.core.chunk_first.call(null,seq__8483_8502__$1);{
var G__8504 = cljs.core.chunk_rest.call(null,seq__8483_8502__$1);
var G__8505 = c__4290__auto___8503;
var G__8506 = cljs.core.count.call(null,c__4290__auto___8503);
var G__8507 = (0);
seq__8483_8490 = G__8504;
chunk__8484_8491 = G__8505;
count__8485_8492 = G__8506;
i__8486_8493 = G__8507;
continue;
}
} else
{var vec__8488_8508 = cljs.core.first.call(null,seq__8483_8502__$1);var k_8509__$1 = cljs.core.nth.call(null,vec__8488_8508,(0),null);var v_8510__$1 = cljs.core.nth.call(null,vec__8488_8508,(1),null);set_attr_BANG_.call(null,elem__$1,k_8509__$1,v_8510__$1);
{
var G__8511 = cljs.core.next.call(null,seq__8483_8502__$1);
var G__8512 = null;
var G__8513 = (0);
var G__8514 = (0);
seq__8483_8490 = G__8511;
chunk__8484_8491 = G__8512;
count__8485_8492 = G__8513;
i__8486_8493 = G__8514;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__8489 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8489__delegate.call(this,elem,k,v,kvs);};
G__8489.cljs$lang$maxFixedArity = 3;
G__8489.cljs$lang$applyTo = (function (arglist__8515){
var elem = cljs.core.first(arglist__8515);
arglist__8515 = cljs.core.next(arglist__8515);
var k = cljs.core.first(arglist__8515);
arglist__8515 = cljs.core.next(arglist__8515);
var v = cljs.core.first(arglist__8515);
var kvs = cljs.core.rest(arglist__8515);
return G__8489__delegate(elem,k,v,kvs);
});
G__8489.cljs$core$IFn$_invoke$arity$variadic = G__8489__delegate;
return G__8489;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__8524__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__8520_8525 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8521_8526 = null;var count__8522_8527 = (0);var i__8523_8528 = (0);while(true){
if((i__8523_8528 < count__8522_8527))
{var k_8529__$1 = cljs.core._nth.call(null,chunk__8521_8526,i__8523_8528);remove_attr_BANG_.call(null,elem__$1,k_8529__$1);
{
var G__8530 = seq__8520_8525;
var G__8531 = chunk__8521_8526;
var G__8532 = count__8522_8527;
var G__8533 = (i__8523_8528 + (1));
seq__8520_8525 = G__8530;
chunk__8521_8526 = G__8531;
count__8522_8527 = G__8532;
i__8523_8528 = G__8533;
continue;
}
} else
{var temp__4126__auto___8534 = cljs.core.seq.call(null,seq__8520_8525);if(temp__4126__auto___8534)
{var seq__8520_8535__$1 = temp__4126__auto___8534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8520_8535__$1))
{var c__4290__auto___8536 = cljs.core.chunk_first.call(null,seq__8520_8535__$1);{
var G__8537 = cljs.core.chunk_rest.call(null,seq__8520_8535__$1);
var G__8538 = c__4290__auto___8536;
var G__8539 = cljs.core.count.call(null,c__4290__auto___8536);
var G__8540 = (0);
seq__8520_8525 = G__8537;
chunk__8521_8526 = G__8538;
count__8522_8527 = G__8539;
i__8523_8528 = G__8540;
continue;
}
} else
{var k_8541__$1 = cljs.core.first.call(null,seq__8520_8535__$1);remove_attr_BANG_.call(null,elem__$1,k_8541__$1);
{
var G__8542 = cljs.core.next.call(null,seq__8520_8535__$1);
var G__8543 = null;
var G__8544 = (0);
var G__8545 = (0);
seq__8520_8525 = G__8542;
chunk__8521_8526 = G__8543;
count__8522_8527 = G__8544;
i__8523_8528 = G__8545;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__8524 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8524__delegate.call(this,elem,k,ks);};
G__8524.cljs$lang$maxFixedArity = 2;
G__8524.cljs$lang$applyTo = (function (arglist__8546){
var elem = cljs.core.first(arglist__8546);
arglist__8546 = cljs.core.next(arglist__8546);
var k = cljs.core.first(arglist__8546);
var ks = cljs.core.rest(arglist__8546);
return G__8524__delegate(elem,k,ks);
});
G__8524.cljs$core$IFn$_invoke$arity$variadic = G__8524__delegate;
return G__8524;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__8548 = dommy.template.__GT_node_like.call(null,elem);G__8548.style.display = ((show_QMARK_)?"":"none");
return G__8548;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__8550 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8550,false);
return G__8550;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__8552 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__8552,true);
return G__8552;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__8554 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__8554["constructor"] = Object);
return G__8554;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map