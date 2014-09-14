// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3534__auto__ = elem.textContent;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__8560 = dommy.template.__GT_node_like.call(null,parent);G__8560.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__8560;
});
var append_BANG___3 = (function() { 
var G__8565__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8561_8566 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8562_8567 = null;var count__8563_8568 = (0);var i__8564_8569 = (0);while(true){
if((i__8564_8569 < count__8563_8568))
{var c_8570 = cljs.core._nth.call(null,chunk__8562_8567,i__8564_8569);append_BANG_.call(null,parent__$1,c_8570);
{
var G__8571 = seq__8561_8566;
var G__8572 = chunk__8562_8567;
var G__8573 = count__8563_8568;
var G__8574 = (i__8564_8569 + (1));
seq__8561_8566 = G__8571;
chunk__8562_8567 = G__8572;
count__8563_8568 = G__8573;
i__8564_8569 = G__8574;
continue;
}
} else
{var temp__4126__auto___8575 = cljs.core.seq.call(null,seq__8561_8566);if(temp__4126__auto___8575)
{var seq__8561_8576__$1 = temp__4126__auto___8575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8561_8576__$1))
{var c__4290__auto___8577 = cljs.core.chunk_first.call(null,seq__8561_8576__$1);{
var G__8578 = cljs.core.chunk_rest.call(null,seq__8561_8576__$1);
var G__8579 = c__4290__auto___8577;
var G__8580 = cljs.core.count.call(null,c__4290__auto___8577);
var G__8581 = (0);
seq__8561_8566 = G__8578;
chunk__8562_8567 = G__8579;
count__8563_8568 = G__8580;
i__8564_8569 = G__8581;
continue;
}
} else
{var c_8582 = cljs.core.first.call(null,seq__8561_8576__$1);append_BANG_.call(null,parent__$1,c_8582);
{
var G__8583 = cljs.core.next.call(null,seq__8561_8576__$1);
var G__8584 = null;
var G__8585 = (0);
var G__8586 = (0);
seq__8561_8566 = G__8583;
chunk__8562_8567 = G__8584;
count__8563_8568 = G__8585;
i__8564_8569 = G__8586;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__8565 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8565__delegate.call(this,parent,child,more_children);};
G__8565.cljs$lang$maxFixedArity = 2;
G__8565.cljs$lang$applyTo = (function (arglist__8587){
var parent = cljs.core.first(arglist__8587);
arglist__8587 = cljs.core.next(arglist__8587);
var child = cljs.core.first(arglist__8587);
var more_children = cljs.core.rest(arglist__8587);
return G__8565__delegate(parent,child,more_children);
});
G__8565.cljs$core$IFn$_invoke$arity$variadic = G__8565__delegate;
return G__8565;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__8596__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__8592_8597 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8593_8598 = null;var count__8594_8599 = (0);var i__8595_8600 = (0);while(true){
if((i__8595_8600 < count__8594_8599))
{var c_8601 = cljs.core._nth.call(null,chunk__8593_8598,i__8595_8600);prepend_BANG_.call(null,parent__$1,c_8601);
{
var G__8602 = seq__8592_8597;
var G__8603 = chunk__8593_8598;
var G__8604 = count__8594_8599;
var G__8605 = (i__8595_8600 + (1));
seq__8592_8597 = G__8602;
chunk__8593_8598 = G__8603;
count__8594_8599 = G__8604;
i__8595_8600 = G__8605;
continue;
}
} else
{var temp__4126__auto___8606 = cljs.core.seq.call(null,seq__8592_8597);if(temp__4126__auto___8606)
{var seq__8592_8607__$1 = temp__4126__auto___8606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8592_8607__$1))
{var c__4290__auto___8608 = cljs.core.chunk_first.call(null,seq__8592_8607__$1);{
var G__8609 = cljs.core.chunk_rest.call(null,seq__8592_8607__$1);
var G__8610 = c__4290__auto___8608;
var G__8611 = cljs.core.count.call(null,c__4290__auto___8608);
var G__8612 = (0);
seq__8592_8597 = G__8609;
chunk__8593_8598 = G__8610;
count__8594_8599 = G__8611;
i__8595_8600 = G__8612;
continue;
}
} else
{var c_8613 = cljs.core.first.call(null,seq__8592_8607__$1);prepend_BANG_.call(null,parent__$1,c_8613);
{
var G__8614 = cljs.core.next.call(null,seq__8592_8607__$1);
var G__8615 = null;
var G__8616 = (0);
var G__8617 = (0);
seq__8592_8597 = G__8614;
chunk__8593_8598 = G__8615;
count__8594_8599 = G__8616;
i__8595_8600 = G__8617;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__8596 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8596__delegate.call(this,parent,child,more_children);};
G__8596.cljs$lang$maxFixedArity = 2;
G__8596.cljs$lang$applyTo = (function (arglist__8618){
var parent = cljs.core.first(arglist__8618);
arglist__8618 = cljs.core.next(arglist__8618);
var child = cljs.core.first(arglist__8618);
var more_children = cljs.core.rest(arglist__8618);
return G__8596__delegate(parent,child,more_children);
});
G__8596.cljs$core$IFn$_invoke$arity$variadic = G__8596__delegate;
return G__8596;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___8619 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___8619))
{var next_8620 = temp__4124__auto___8619;parent.insertBefore(actual_node,next_8620);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__8622 = dommy.template.__GT_node_like.call(null,parent);G__8622.innerHTML = "";
dommy.core.append_BANG_.call(null,G__8622,node_like);
return G__8622;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__8624 = elem__$1.parentNode;G__8624.removeChild(elem__$1);
return G__8624;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__8630){var vec__8631 = p__8630;var k = cljs.core.nth.call(null,vec__8631,(0),null);var v = cljs.core.nth.call(null,vec__8631,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t8632 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t8632 = (function (v,k,vec__8631,p__8630,container,key_selectors_map,template,selector_map,meta8633){
this.v = v;
this.k = k;
this.vec__8631 = vec__8631;
this.p__8630 = p__8630;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta8633 = meta8633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t8632.cljs$lang$type = true;
dommy.core.t8632.cljs$lang$ctorStr = "dommy.core/t8632";
dommy.core.t8632.cljs$lang$ctorPrWriter = ((function (vec__8631,k,v,container){
return (function (this__4101__auto__,writer__4102__auto__,opt__4103__auto__){return cljs.core._write.call(null,writer__4102__auto__,"dommy.core/t8632");
});})(vec__8631,k,v,container))
;
dommy.core.t8632.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__8631,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__8631,k,v,container))
;
dommy.core.t8632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__8631,k,v,container){
return (function (_8634){var self__ = this;
var _8634__$1 = this;return self__.meta8633;
});})(vec__8631,k,v,container))
;
dommy.core.t8632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__8631,k,v,container){
return (function (_8634,meta8633__$1){var self__ = this;
var _8634__$1 = this;return (new dommy.core.t8632(self__.v,self__.k,self__.vec__8631,self__.p__8630,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta8633__$1));
});})(vec__8631,k,v,container))
;
dommy.core.__GT_t8632 = ((function (vec__8631,k,v,container){
return (function __GT_t8632(v__$1,k__$1,vec__8631__$1,p__8630__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta8633){return (new dommy.core.t8632(v__$1,k__$1,vec__8631__$1,p__8630__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta8633));
});})(vec__8631,k,v,container))
;
}
return (new dommy.core.t8632(v,k,vec__8631,p__8630,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8635_SHARP_){return p1__8635_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__8636_SHARP_){return !((p1__8636_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8637){var vec__8638 = p__8637;var special_mouse_event = cljs.core.nth.call(null,vec__8638,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__8638,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__8638,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__8638,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3534__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3522__auto__ = related_target;if(cljs.core.truth_(and__3522__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3522__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__8638,special_mouse_event,real_mouse_event))
});})(vec__8638,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3522__auto__ = selected_target;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3522__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3534__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8639){
var elem = cljs.core.first(arglist__8639);
arglist__8639 = cljs.core.next(arglist__8639);
var f = cljs.core.first(arglist__8639);
var args = cljs.core.rest(arglist__8639);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__8640_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8640_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__8664_8687 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8688 = cljs.core.nth.call(null,vec__8664_8687,(0),null);var selector_8689 = cljs.core.nth.call(null,vec__8664_8687,(1),null);var seq__8665_8690 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8672_8691 = null;var count__8673_8692 = (0);var i__8674_8693 = (0);while(true){
if((i__8674_8693 < count__8673_8692))
{var vec__8681_8694 = cljs.core._nth.call(null,chunk__8672_8691,i__8674_8693);var orig_type_8695 = cljs.core.nth.call(null,vec__8681_8694,(0),null);var f_8696 = cljs.core.nth.call(null,vec__8681_8694,(1),null);var seq__8675_8697 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8695,new cljs.core.PersistentArrayMap.fromArray([orig_type_8695,cljs.core.identity], true, false)));var chunk__8677_8698 = null;var count__8678_8699 = (0);var i__8679_8700 = (0);while(true){
if((i__8679_8700 < count__8678_8699))
{var vec__8682_8701 = cljs.core._nth.call(null,chunk__8677_8698,i__8679_8700);var actual_type_8702 = cljs.core.nth.call(null,vec__8682_8701,(0),null);var factory_8703 = cljs.core.nth.call(null,vec__8682_8701,(1),null);var canonical_f_8704 = (cljs.core.truth_(selector_8689)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8688,selector_8689):cljs.core.identity).call(null,factory_8703.call(null,f_8696));dommy.core.update_event_listeners_BANG_.call(null,elem_8688,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8689,actual_type_8702,f_8696], null),canonical_f_8704);
if(cljs.core.truth_(elem_8688.addEventListener))
{elem_8688.addEventListener(cljs.core.name.call(null,actual_type_8702),canonical_f_8704);
} else
{elem_8688.attachEvent(cljs.core.name.call(null,actual_type_8702),canonical_f_8704);
}
{
var G__8705 = seq__8675_8697;
var G__8706 = chunk__8677_8698;
var G__8707 = count__8678_8699;
var G__8708 = (i__8679_8700 + (1));
seq__8675_8697 = G__8705;
chunk__8677_8698 = G__8706;
count__8678_8699 = G__8707;
i__8679_8700 = G__8708;
continue;
}
} else
{var temp__4126__auto___8709 = cljs.core.seq.call(null,seq__8675_8697);if(temp__4126__auto___8709)
{var seq__8675_8710__$1 = temp__4126__auto___8709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8675_8710__$1))
{var c__4290__auto___8711 = cljs.core.chunk_first.call(null,seq__8675_8710__$1);{
var G__8712 = cljs.core.chunk_rest.call(null,seq__8675_8710__$1);
var G__8713 = c__4290__auto___8711;
var G__8714 = cljs.core.count.call(null,c__4290__auto___8711);
var G__8715 = (0);
seq__8675_8697 = G__8712;
chunk__8677_8698 = G__8713;
count__8678_8699 = G__8714;
i__8679_8700 = G__8715;
continue;
}
} else
{var vec__8683_8716 = cljs.core.first.call(null,seq__8675_8710__$1);var actual_type_8717 = cljs.core.nth.call(null,vec__8683_8716,(0),null);var factory_8718 = cljs.core.nth.call(null,vec__8683_8716,(1),null);var canonical_f_8719 = (cljs.core.truth_(selector_8689)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8688,selector_8689):cljs.core.identity).call(null,factory_8718.call(null,f_8696));dommy.core.update_event_listeners_BANG_.call(null,elem_8688,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8689,actual_type_8717,f_8696], null),canonical_f_8719);
if(cljs.core.truth_(elem_8688.addEventListener))
{elem_8688.addEventListener(cljs.core.name.call(null,actual_type_8717),canonical_f_8719);
} else
{elem_8688.attachEvent(cljs.core.name.call(null,actual_type_8717),canonical_f_8719);
}
{
var G__8720 = cljs.core.next.call(null,seq__8675_8710__$1);
var G__8721 = null;
var G__8722 = (0);
var G__8723 = (0);
seq__8675_8697 = G__8720;
chunk__8677_8698 = G__8721;
count__8678_8699 = G__8722;
i__8679_8700 = G__8723;
continue;
}
}
} else
{}
}
break;
}
{
var G__8724 = seq__8665_8690;
var G__8725 = chunk__8672_8691;
var G__8726 = count__8673_8692;
var G__8727 = (i__8674_8693 + (1));
seq__8665_8690 = G__8724;
chunk__8672_8691 = G__8725;
count__8673_8692 = G__8726;
i__8674_8693 = G__8727;
continue;
}
} else
{var temp__4126__auto___8728 = cljs.core.seq.call(null,seq__8665_8690);if(temp__4126__auto___8728)
{var seq__8665_8729__$1 = temp__4126__auto___8728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8665_8729__$1))
{var c__4290__auto___8730 = cljs.core.chunk_first.call(null,seq__8665_8729__$1);{
var G__8731 = cljs.core.chunk_rest.call(null,seq__8665_8729__$1);
var G__8732 = c__4290__auto___8730;
var G__8733 = cljs.core.count.call(null,c__4290__auto___8730);
var G__8734 = (0);
seq__8665_8690 = G__8731;
chunk__8672_8691 = G__8732;
count__8673_8692 = G__8733;
i__8674_8693 = G__8734;
continue;
}
} else
{var vec__8684_8735 = cljs.core.first.call(null,seq__8665_8729__$1);var orig_type_8736 = cljs.core.nth.call(null,vec__8684_8735,(0),null);var f_8737 = cljs.core.nth.call(null,vec__8684_8735,(1),null);var seq__8666_8738 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8736,new cljs.core.PersistentArrayMap.fromArray([orig_type_8736,cljs.core.identity], true, false)));var chunk__8668_8739 = null;var count__8669_8740 = (0);var i__8670_8741 = (0);while(true){
if((i__8670_8741 < count__8669_8740))
{var vec__8685_8742 = cljs.core._nth.call(null,chunk__8668_8739,i__8670_8741);var actual_type_8743 = cljs.core.nth.call(null,vec__8685_8742,(0),null);var factory_8744 = cljs.core.nth.call(null,vec__8685_8742,(1),null);var canonical_f_8745 = (cljs.core.truth_(selector_8689)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8688,selector_8689):cljs.core.identity).call(null,factory_8744.call(null,f_8737));dommy.core.update_event_listeners_BANG_.call(null,elem_8688,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8689,actual_type_8743,f_8737], null),canonical_f_8745);
if(cljs.core.truth_(elem_8688.addEventListener))
{elem_8688.addEventListener(cljs.core.name.call(null,actual_type_8743),canonical_f_8745);
} else
{elem_8688.attachEvent(cljs.core.name.call(null,actual_type_8743),canonical_f_8745);
}
{
var G__8746 = seq__8666_8738;
var G__8747 = chunk__8668_8739;
var G__8748 = count__8669_8740;
var G__8749 = (i__8670_8741 + (1));
seq__8666_8738 = G__8746;
chunk__8668_8739 = G__8747;
count__8669_8740 = G__8748;
i__8670_8741 = G__8749;
continue;
}
} else
{var temp__4126__auto___8750__$1 = cljs.core.seq.call(null,seq__8666_8738);if(temp__4126__auto___8750__$1)
{var seq__8666_8751__$1 = temp__4126__auto___8750__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8666_8751__$1))
{var c__4290__auto___8752 = cljs.core.chunk_first.call(null,seq__8666_8751__$1);{
var G__8753 = cljs.core.chunk_rest.call(null,seq__8666_8751__$1);
var G__8754 = c__4290__auto___8752;
var G__8755 = cljs.core.count.call(null,c__4290__auto___8752);
var G__8756 = (0);
seq__8666_8738 = G__8753;
chunk__8668_8739 = G__8754;
count__8669_8740 = G__8755;
i__8670_8741 = G__8756;
continue;
}
} else
{var vec__8686_8757 = cljs.core.first.call(null,seq__8666_8751__$1);var actual_type_8758 = cljs.core.nth.call(null,vec__8686_8757,(0),null);var factory_8759 = cljs.core.nth.call(null,vec__8686_8757,(1),null);var canonical_f_8760 = (cljs.core.truth_(selector_8689)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8688,selector_8689):cljs.core.identity).call(null,factory_8759.call(null,f_8737));dommy.core.update_event_listeners_BANG_.call(null,elem_8688,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8689,actual_type_8758,f_8737], null),canonical_f_8760);
if(cljs.core.truth_(elem_8688.addEventListener))
{elem_8688.addEventListener(cljs.core.name.call(null,actual_type_8758),canonical_f_8760);
} else
{elem_8688.attachEvent(cljs.core.name.call(null,actual_type_8758),canonical_f_8760);
}
{
var G__8761 = cljs.core.next.call(null,seq__8666_8751__$1);
var G__8762 = null;
var G__8763 = (0);
var G__8764 = (0);
seq__8666_8738 = G__8761;
chunk__8668_8739 = G__8762;
count__8669_8740 = G__8763;
i__8670_8741 = G__8764;
continue;
}
}
} else
{}
}
break;
}
{
var G__8765 = cljs.core.next.call(null,seq__8665_8729__$1);
var G__8766 = null;
var G__8767 = (0);
var G__8768 = (0);
seq__8665_8690 = G__8765;
chunk__8672_8691 = G__8766;
count__8673_8692 = G__8767;
i__8674_8693 = G__8768;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__8769){
var elem_sel = cljs.core.first(arglist__8769);
var type_fs = cljs.core.rest(arglist__8769);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__8793_8816 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8817 = cljs.core.nth.call(null,vec__8793_8816,(0),null);var selector_8818 = cljs.core.nth.call(null,vec__8793_8816,(1),null);var seq__8794_8819 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8801_8820 = null;var count__8802_8821 = (0);var i__8803_8822 = (0);while(true){
if((i__8803_8822 < count__8802_8821))
{var vec__8810_8823 = cljs.core._nth.call(null,chunk__8801_8820,i__8803_8822);var orig_type_8824 = cljs.core.nth.call(null,vec__8810_8823,(0),null);var f_8825 = cljs.core.nth.call(null,vec__8810_8823,(1),null);var seq__8804_8826 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8824,new cljs.core.PersistentArrayMap.fromArray([orig_type_8824,cljs.core.identity], true, false)));var chunk__8806_8827 = null;var count__8807_8828 = (0);var i__8808_8829 = (0);while(true){
if((i__8808_8829 < count__8807_8828))
{var vec__8811_8830 = cljs.core._nth.call(null,chunk__8806_8827,i__8808_8829);var actual_type_8831 = cljs.core.nth.call(null,vec__8811_8830,(0),null);var __8832 = cljs.core.nth.call(null,vec__8811_8830,(1),null);var keys_8833 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8818,actual_type_8831,f_8825], null);var canonical_f_8834 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8817),keys_8833);dommy.core.update_event_listeners_BANG_.call(null,elem_8817,dommy.utils.dissoc_in,keys_8833);
if(cljs.core.truth_(elem_8817.removeEventListener))
{elem_8817.removeEventListener(cljs.core.name.call(null,actual_type_8831),canonical_f_8834);
} else
{elem_8817.detachEvent(cljs.core.name.call(null,actual_type_8831),canonical_f_8834);
}
{
var G__8835 = seq__8804_8826;
var G__8836 = chunk__8806_8827;
var G__8837 = count__8807_8828;
var G__8838 = (i__8808_8829 + (1));
seq__8804_8826 = G__8835;
chunk__8806_8827 = G__8836;
count__8807_8828 = G__8837;
i__8808_8829 = G__8838;
continue;
}
} else
{var temp__4126__auto___8839 = cljs.core.seq.call(null,seq__8804_8826);if(temp__4126__auto___8839)
{var seq__8804_8840__$1 = temp__4126__auto___8839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8804_8840__$1))
{var c__4290__auto___8841 = cljs.core.chunk_first.call(null,seq__8804_8840__$1);{
var G__8842 = cljs.core.chunk_rest.call(null,seq__8804_8840__$1);
var G__8843 = c__4290__auto___8841;
var G__8844 = cljs.core.count.call(null,c__4290__auto___8841);
var G__8845 = (0);
seq__8804_8826 = G__8842;
chunk__8806_8827 = G__8843;
count__8807_8828 = G__8844;
i__8808_8829 = G__8845;
continue;
}
} else
{var vec__8812_8846 = cljs.core.first.call(null,seq__8804_8840__$1);var actual_type_8847 = cljs.core.nth.call(null,vec__8812_8846,(0),null);var __8848 = cljs.core.nth.call(null,vec__8812_8846,(1),null);var keys_8849 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8818,actual_type_8847,f_8825], null);var canonical_f_8850 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8817),keys_8849);dommy.core.update_event_listeners_BANG_.call(null,elem_8817,dommy.utils.dissoc_in,keys_8849);
if(cljs.core.truth_(elem_8817.removeEventListener))
{elem_8817.removeEventListener(cljs.core.name.call(null,actual_type_8847),canonical_f_8850);
} else
{elem_8817.detachEvent(cljs.core.name.call(null,actual_type_8847),canonical_f_8850);
}
{
var G__8851 = cljs.core.next.call(null,seq__8804_8840__$1);
var G__8852 = null;
var G__8853 = (0);
var G__8854 = (0);
seq__8804_8826 = G__8851;
chunk__8806_8827 = G__8852;
count__8807_8828 = G__8853;
i__8808_8829 = G__8854;
continue;
}
}
} else
{}
}
break;
}
{
var G__8855 = seq__8794_8819;
var G__8856 = chunk__8801_8820;
var G__8857 = count__8802_8821;
var G__8858 = (i__8803_8822 + (1));
seq__8794_8819 = G__8855;
chunk__8801_8820 = G__8856;
count__8802_8821 = G__8857;
i__8803_8822 = G__8858;
continue;
}
} else
{var temp__4126__auto___8859 = cljs.core.seq.call(null,seq__8794_8819);if(temp__4126__auto___8859)
{var seq__8794_8860__$1 = temp__4126__auto___8859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8794_8860__$1))
{var c__4290__auto___8861 = cljs.core.chunk_first.call(null,seq__8794_8860__$1);{
var G__8862 = cljs.core.chunk_rest.call(null,seq__8794_8860__$1);
var G__8863 = c__4290__auto___8861;
var G__8864 = cljs.core.count.call(null,c__4290__auto___8861);
var G__8865 = (0);
seq__8794_8819 = G__8862;
chunk__8801_8820 = G__8863;
count__8802_8821 = G__8864;
i__8803_8822 = G__8865;
continue;
}
} else
{var vec__8813_8866 = cljs.core.first.call(null,seq__8794_8860__$1);var orig_type_8867 = cljs.core.nth.call(null,vec__8813_8866,(0),null);var f_8868 = cljs.core.nth.call(null,vec__8813_8866,(1),null);var seq__8795_8869 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8867,new cljs.core.PersistentArrayMap.fromArray([orig_type_8867,cljs.core.identity], true, false)));var chunk__8797_8870 = null;var count__8798_8871 = (0);var i__8799_8872 = (0);while(true){
if((i__8799_8872 < count__8798_8871))
{var vec__8814_8873 = cljs.core._nth.call(null,chunk__8797_8870,i__8799_8872);var actual_type_8874 = cljs.core.nth.call(null,vec__8814_8873,(0),null);var __8875 = cljs.core.nth.call(null,vec__8814_8873,(1),null);var keys_8876 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8818,actual_type_8874,f_8868], null);var canonical_f_8877 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8817),keys_8876);dommy.core.update_event_listeners_BANG_.call(null,elem_8817,dommy.utils.dissoc_in,keys_8876);
if(cljs.core.truth_(elem_8817.removeEventListener))
{elem_8817.removeEventListener(cljs.core.name.call(null,actual_type_8874),canonical_f_8877);
} else
{elem_8817.detachEvent(cljs.core.name.call(null,actual_type_8874),canonical_f_8877);
}
{
var G__8878 = seq__8795_8869;
var G__8879 = chunk__8797_8870;
var G__8880 = count__8798_8871;
var G__8881 = (i__8799_8872 + (1));
seq__8795_8869 = G__8878;
chunk__8797_8870 = G__8879;
count__8798_8871 = G__8880;
i__8799_8872 = G__8881;
continue;
}
} else
{var temp__4126__auto___8882__$1 = cljs.core.seq.call(null,seq__8795_8869);if(temp__4126__auto___8882__$1)
{var seq__8795_8883__$1 = temp__4126__auto___8882__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8795_8883__$1))
{var c__4290__auto___8884 = cljs.core.chunk_first.call(null,seq__8795_8883__$1);{
var G__8885 = cljs.core.chunk_rest.call(null,seq__8795_8883__$1);
var G__8886 = c__4290__auto___8884;
var G__8887 = cljs.core.count.call(null,c__4290__auto___8884);
var G__8888 = (0);
seq__8795_8869 = G__8885;
chunk__8797_8870 = G__8886;
count__8798_8871 = G__8887;
i__8799_8872 = G__8888;
continue;
}
} else
{var vec__8815_8889 = cljs.core.first.call(null,seq__8795_8883__$1);var actual_type_8890 = cljs.core.nth.call(null,vec__8815_8889,(0),null);var __8891 = cljs.core.nth.call(null,vec__8815_8889,(1),null);var keys_8892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8818,actual_type_8890,f_8868], null);var canonical_f_8893 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8817),keys_8892);dommy.core.update_event_listeners_BANG_.call(null,elem_8817,dommy.utils.dissoc_in,keys_8892);
if(cljs.core.truth_(elem_8817.removeEventListener))
{elem_8817.removeEventListener(cljs.core.name.call(null,actual_type_8890),canonical_f_8893);
} else
{elem_8817.detachEvent(cljs.core.name.call(null,actual_type_8890),canonical_f_8893);
}
{
var G__8894 = cljs.core.next.call(null,seq__8795_8883__$1);
var G__8895 = null;
var G__8896 = (0);
var G__8897 = (0);
seq__8795_8869 = G__8894;
chunk__8797_8870 = G__8895;
count__8798_8871 = G__8896;
i__8799_8872 = G__8897;
continue;
}
}
} else
{}
}
break;
}
{
var G__8898 = cljs.core.next.call(null,seq__8794_8860__$1);
var G__8899 = null;
var G__8900 = (0);
var G__8901 = (0);
seq__8794_8819 = G__8898;
chunk__8801_8820 = G__8899;
count__8802_8821 = G__8900;
i__8803_8822 = G__8901;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__8902){
var elem_sel = cljs.core.first(arglist__8902);
var type_fs = cljs.core.rest(arglist__8902);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__8910_8917 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8918 = cljs.core.nth.call(null,vec__8910_8917,(0),null);var selector_8919 = cljs.core.nth.call(null,vec__8910_8917,(1),null);var seq__8911_8920 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8912_8921 = null;var count__8913_8922 = (0);var i__8914_8923 = (0);while(true){
if((i__8914_8923 < count__8913_8922))
{var vec__8915_8924 = cljs.core._nth.call(null,chunk__8912_8921,i__8914_8923);var type_8925 = cljs.core.nth.call(null,vec__8915_8924,(0),null);var f_8926 = cljs.core.nth.call(null,vec__8915_8924,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_8925,((function (seq__8911_8920,chunk__8912_8921,count__8913_8922,i__8914_8923,vec__8915_8924,type_8925,f_8926,vec__8910_8917,elem_8918,selector_8919){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8925,this_fn);
return f_8926.call(null,e);
});})(seq__8911_8920,chunk__8912_8921,count__8913_8922,i__8914_8923,vec__8915_8924,type_8925,f_8926,vec__8910_8917,elem_8918,selector_8919))
);
{
var G__8927 = seq__8911_8920;
var G__8928 = chunk__8912_8921;
var G__8929 = count__8913_8922;
var G__8930 = (i__8914_8923 + (1));
seq__8911_8920 = G__8927;
chunk__8912_8921 = G__8928;
count__8913_8922 = G__8929;
i__8914_8923 = G__8930;
continue;
}
} else
{var temp__4126__auto___8931 = cljs.core.seq.call(null,seq__8911_8920);if(temp__4126__auto___8931)
{var seq__8911_8932__$1 = temp__4126__auto___8931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8911_8932__$1))
{var c__4290__auto___8933 = cljs.core.chunk_first.call(null,seq__8911_8932__$1);{
var G__8934 = cljs.core.chunk_rest.call(null,seq__8911_8932__$1);
var G__8935 = c__4290__auto___8933;
var G__8936 = cljs.core.count.call(null,c__4290__auto___8933);
var G__8937 = (0);
seq__8911_8920 = G__8934;
chunk__8912_8921 = G__8935;
count__8913_8922 = G__8936;
i__8914_8923 = G__8937;
continue;
}
} else
{var vec__8916_8938 = cljs.core.first.call(null,seq__8911_8932__$1);var type_8939 = cljs.core.nth.call(null,vec__8916_8938,(0),null);var f_8940 = cljs.core.nth.call(null,vec__8916_8938,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_8939,((function (seq__8911_8920,chunk__8912_8921,count__8913_8922,i__8914_8923,vec__8916_8938,type_8939,f_8940,seq__8911_8932__$1,temp__4126__auto___8931,vec__8910_8917,elem_8918,selector_8919){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_8939,this_fn);
return f_8940.call(null,e);
});})(seq__8911_8920,chunk__8912_8921,count__8913_8922,i__8914_8923,vec__8916_8938,type_8939,f_8940,seq__8911_8932__$1,temp__4126__auto___8931,vec__8910_8917,elem_8918,selector_8919))
);
{
var G__8941 = cljs.core.next.call(null,seq__8911_8932__$1);
var G__8942 = null;
var G__8943 = (0);
var G__8944 = (0);
seq__8911_8920 = G__8941;
chunk__8912_8921 = G__8942;
count__8913_8922 = G__8943;
i__8914_8923 = G__8944;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__8945){
var elem_sel = cljs.core.first(arglist__8945);
var type_fs = cljs.core.rest(arglist__8945);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__8946){var vec__8948 = p__8946;var update_event_BANG_ = cljs.core.nth.call(null,vec__8948,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3534__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__8946 = null;if (arguments.length > 2) {
  p__8946 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__8946);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__8949){
var node = cljs.core.first(arglist__8949);
arglist__8949 = cljs.core.next(arglist__8949);
var event_type = cljs.core.first(arglist__8949);
var p__8946 = cljs.core.rest(arglist__8949);
return fire_BANG___delegate(node,event_type,p__8946);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map