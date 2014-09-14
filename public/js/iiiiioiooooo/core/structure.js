// Compiled by ClojureScript 0.0-2322
goog.provide('iiiiioiooooo.core.structure');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
iiiiioiooooo.core.structure.maybe = (function maybe(f,x){if(cljs.core.truth_(x))
{return f.call(null,x);
} else
{return x;
}
});
iiiiioiooooo.core.structure.__ = (function() {
var __ = null;
var ____2 = (function (f,x){return cljs.core.partial.call(null,f,x);
});
var ____3 = (function (f,_,x){return (function (y){return f.call(null,y,x);
});
});
__ = function(f,_,x){
switch(arguments.length){
case 2:
return ____2.call(this,f,_);
case 3:
return ____3.call(this,f,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__.cljs$core$IFn$_invoke$arity$2 = ____2;
__.cljs$core$IFn$_invoke$arity$3 = ____3;
return __;
})()
;
iiiiioiooooo.core.structure.__PLUS_ = cljs.core.comp;
iiiiioiooooo.core.structure.__ = cljs.core.complement;
iiiiioiooooo.core.structure.peek_first = (function peek_first(p){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.call(null,clojure.zip.down.call(null,p),iiiiioiooooo.core.structure.maybe,clojure.zip.node)));
});
iiiiioiooooo.core.structure.zipper_QMARK_ = (function zipper_QMARK_(l){return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,l),new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862));
});
iiiiioiooooo.core.structure.type_str = (function type_str(b){if(cljs.core.list_QMARK_.call(null,b))
{return new cljs.core.Keyword(null,"list","list",765357683);
} else
{if(typeof b === 'number')
{return new cljs.core.Keyword(null,"number","number",1570378438);
} else
{if((b instanceof cljs.core.Symbol))
{return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else
{if(typeof b === 'string')
{return new cljs.core.Keyword(null,"string","string",-1989541586);
} else
{if(cljs.core.vector_QMARK_.call(null,b))
{return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else
{if(cljs.core.map_QMARK_.call(null,b))
{return new cljs.core.Keyword(null,"map","map",1371690461);
} else
{if(iiiiioiooooo.core.structure.zipper_QMARK_.call(null,b))
{return new cljs.core.Keyword(null,"zipper","zipper",1500694438);
} else
{return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
}
}
}
}
}
}
});
iiiiioiooooo.core.structure.translate = (function translate(maxx,maxy,f,p){return cljs.core.reduce.call(null,(function (r,c){if((maxy > (0)))
{return cljs.core.conj.call(null,r,(cljs.core.truth_((function (){var and__3522__auto__ = c;if(cljs.core.truth_(and__3522__auto__))
{return clojure.zip.branch_QMARK_.call(null,c);
} else
{return and__3522__auto__;
}
})())?(cljs.core.truth_((function (){var and__3522__auto__ = (function (){var or__3534__auto__ = (cljs.core.meta.call(null,clojure.zip.node.call(null,c)) == null);if(or__3534__auto__)
{return or__3534__auto__;
} else
{return new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,c)));
}
})();if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,c))));
} else
{return and__3522__auto__;
}
})())?f.call(null,iiiiioiooooo.core.structure.type_str.call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,c))),translate.call(null,maxx,(maxy - (1)),f,clojure.zip.down.call(null,c))):f.call(null,iiiiioiooooo.core.structure.type_str.call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,c))),null,null)):f.call(null,clojure.zip.node.call(null,c))));
} else
{return r;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,maxx,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.right,p))));
});
iiiiioiooooo.core.structure.zm = (function zm(p__8953){var vec__8957 = p__8953;var vec__8958 = cljs.core.nth.call(null,vec__8957,(0),null);var z1 = cljs.core.nth.call(null,vec__8958,(0),null);var m1 = cljs.core.nth.call(null,vec__8958,(1),null);var vec__8959 = cljs.core.nth.call(null,vec__8957,(1),null);var m2 = cljs.core.nth.call(null,vec__8959,(0),null);var z2 = cljs.core.nth.call(null,vec__8959,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,cljs.core.merge.call(null,m1,new cljs.core.Keyword(null,"*","*",-1294732318).cljs$core$IFn$_invoke$arity$1(m2))], null);
});
iiiiioiooooo.core.structure.nn = (function nn(l){if(cljs.core.truth_(new cljs.core.Keyword(null,"map?","map?",873867235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,l)))))
{return cljs.core.with_meta.call(null,cljs.core.reduce.call(null,(function (r,p__8962){var vec__8963 = p__8962;var k = cljs.core.nth.call(null,vec__8963,(0),null);var v = cljs.core.nth.call(null,vec__8963,(1),null);return cljs.core.assoc.call(null,r,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.zip.node.call(null,l)),cljs.core.meta.call(null,clojure.zip.node.call(null,l)));
} else
{return clojure.zip.node.call(null,l);
}
});
/**
* @param {...*} var_args
*/
iiiiioiooooo.core.structure.as = (function() {
var as = null;
var as__1 = (function (l){return as.call(null,l,new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
var as__3 = (function() { 
var G__8964__delegate = function (l,r,k){return cljs.core.with_meta.call(null,l,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,l),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),r], null),cljs.core.apply.call(null,(function (){var or__3534__auto__ = cljs.core.get_in.call(null,cljs.core.meta.call(null,l),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.first.call(null,k)], null));if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.identity;
}
})(),((cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,k)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null):cljs.core.map.call(null,iiiiioiooooo.core.structure.__.call(null,cljs.core.get_in,cljs.core.meta.call(null,l)),cljs.core.map.call(null,iiiiioiooooo.core.structure.__.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318)], null)),cljs.core.rest.call(null,k)))))));
};
var G__8964 = function (l,r,var_args){
var k = null;if (arguments.length > 2) {
  k = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8964__delegate.call(this,l,r,k);};
G__8964.cljs$lang$maxFixedArity = 2;
G__8964.cljs$lang$applyTo = (function (arglist__8965){
var l = cljs.core.first(arglist__8965);
arglist__8965 = cljs.core.next(arglist__8965);
var r = cljs.core.first(arglist__8965);
var k = cljs.core.rest(arglist__8965);
return G__8964__delegate(l,r,k);
});
G__8964.cljs$core$IFn$_invoke$arity$variadic = G__8964__delegate;
return G__8964;
})()
;
as = function(l,r,var_args){
var k = var_args;
switch(arguments.length){
case 1:
return as__1.call(this,l);
default:
return as__3.cljs$core$IFn$_invoke$arity$variadic(l,r, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as.cljs$lang$maxFixedArity = 2;
as.cljs$lang$applyTo = as__3.cljs$lang$applyTo;
as.cljs$core$IFn$_invoke$arity$1 = as__1;
as.cljs$core$IFn$_invoke$arity$variadic = as__3.cljs$core$IFn$_invoke$arity$variadic;
return as;
})()
;
/**
* @param {...*} var_args
*/
iiiiioiooooo.core.structure.az = (function() { 
var az__delegate = function (l,k){return cljs.core.apply.call(null,(function (){var or__3534__auto__ = cljs.core.get_in.call(null,cljs.core.meta.call(null,l),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.first.call(null,k)], null));if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.identity;
}
})(),cljs.core.cons.call(null,l,cljs.core.map.call(null,iiiiioiooooo.core.structure.__.call(null,cljs.core.get_in,cljs.core.meta.call(null,l)),cljs.core.map.call(null,iiiiioiooooo.core.structure.__.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318)], null)),cljs.core.rest.call(null,k)))));
};
var az = function (l,var_args){
var k = null;if (arguments.length > 1) {
  k = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return az__delegate.call(this,l,k);};
az.cljs$lang$maxFixedArity = 1;
az.cljs$lang$applyTo = (function (arglist__8966){
var l = cljs.core.first(arglist__8966);
var k = cljs.core.rest(arglist__8966);
return az__delegate(l,k);
});
az.cljs$core$IFn$_invoke$arity$variadic = az__delegate;
return az;
})()
;
iiiiioiooooo.core.structure.zpr = (function zpr(branch_QMARK_,children,make_node,root){return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"_+","_+",655499906),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"nn","nn",-984385559),new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"<","<",-646864291)],[(function (l){return clojure.zip.replace.call(null,clojure.zip.up.call(null,l),iiiiioiooooo.core.structure.nn.call(null,l));
}),clojure.zip.insert_right,(function (l){return clojure.zip.edit.call(null,l,cljs.core.inc);
}),clojure.zip.up,clojure.zip.next,cljs.core.map,(function (l){return clojure.zip.edit.call(null,l,cljs.core.dec);
}),iiiiioiooooo.core.structure.nn,(function (l){return clojure.zip.edit.call(null,l,cljs.core.inc);
}),clojure.zip.down,clojure.zip.prev]),new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591),make_node,new cljs.core.Keyword("zip","children","zip/children",-940194589),children,new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862),branch_QMARK_], null));
});
iiiiioiooooo.core.structure.put = (function() {
var put = null;
var put__1 = (function (loc){return put.call(null,loc,new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
var put__2 = (function (loc,k){return cljs.core.with_meta.call(null,loc,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,loc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),k], null),iiiiioiooooo.core.structure.nn.call(null,loc)));
});
put = function(loc,k){
switch(arguments.length){
case 1:
return put__1.call(this,loc);
case 2:
return put__2.call(this,loc,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put.cljs$core$IFn$_invoke$arity$1 = put__1;
put.cljs$core$IFn$_invoke$arity$2 = put__2;
return put;
})()
;
iiiiioiooooo.core.structure.smz = (function smz(x){return iiiiioiooooo.core.structure.zpr.call(null,(function branch_QMARK_(n){return (cljs.core.seq_QMARK_.call(null,n)) || (cljs.core.map_QMARK_.call(null,n)) || (cljs.core.set_QMARK_.call(null,n)) || (cljs.core.vector_QMARK_.call(null,n));
}),(function children(b){if((cljs.core.map_QMARK_.call(null,b)) || (cljs.core.set_QMARK_.call(null,b)))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,b),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map?","map?",873867235),true], null));
} else
{return b;
}
}),(function make_node(node,children){return cljs.core.with_meta.call(null,children,cljs.core.merge.call(null,(function (){var or__3534__auto__ = cljs.core.meta.call(null,node);if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"map?","map?",873867235),cljs.core.map_QMARK_.call(null,node),new cljs.core.Keyword(null,"set?","set?",-4516735),cljs.core.set_QMARK_.call(null,node)], null)));
}),x);
});
iiiiioiooooo.core.structure.top = (function() {
var top = null;
var top__1 = (function (z){return top.call(null,z,clojure.zip.up.call(null,z));
});
var top__2 = (function (z,up){if(cljs.core.truth_(up))
{return top.call(null,up);
} else
{return z;
}
});
top = function(z,up){
switch(arguments.length){
case 1:
return top__1.call(this,z);
case 2:
return top__2.call(this,z,up);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
top.cljs$core$IFn$_invoke$arity$1 = top__1;
top.cljs$core$IFn$_invoke$arity$2 = top__2;
return top;
})()
;
iiiiioiooooo.core.structure.path = (function() {
var path = null;
var path__1 = (function (t){return path.call(null,iiiiioiooooo.core.structure.top.call(null,t),t);
});
var path__2 = (function (c,t){return path.call(null,t,clojure.zip.up.call(null,t),clojure.zip.left.call(null,t),cljs.core.PersistentVector.EMPTY,c);
});
var path__3 = (function (t,p,c){return path.call(null,t,clojure.zip.up.call(null,t),clojure.zip.left.call(null,t),p,c);
});
var path__5 = (function (t,u,l,p,c){if(((u == null)) || (cljs.core._EQ_.call(null,clojure.zip.node.call(null,clojure.zip.next.call(null,t)),clojure.zip.node.call(null,clojure.zip.next.call(null,c)))))
{if(cljs.core.truth_((function (){var and__3522__auto__ = t;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core._EQ_.call(null,clojure.zip.node.call(null,clojure.zip.next.call(null,t)),clojure.zip.node.call(null,clojure.zip.next.call(null,c)));
} else
{return and__3522__auto__;
}
})()))
{return cljs.core.cons.call(null,new cljs.core.Keyword(null,"v","v",21465059),p);
} else
{return p;
}
} else
{return path.call(null,(cljs.core.truth_(l)?l:u),cljs.core.cons.call(null,(cljs.core.truth_(l)?new cljs.core.Keyword(null,">",">",-555517146):new cljs.core.Keyword(null,"v","v",21465059)),p),c);
}
});
path = function(t,u,l,p,c){
switch(arguments.length){
case 1:
return path__1.call(this,t);
case 2:
return path__2.call(this,t,u);
case 3:
return path__3.call(this,t,u,l);
case 5:
return path__5.call(this,t,u,l,p,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
path.cljs$core$IFn$_invoke$arity$1 = path__1;
path.cljs$core$IFn$_invoke$arity$2 = path__2;
path.cljs$core$IFn$_invoke$arity$3 = path__3;
path.cljs$core$IFn$_invoke$arity$5 = path__5;
return path;
})()
;
iiiiioiooooo.core.structure.nodes = (function nodes(n){return cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,n));
});
iiiiioiooooo.core.structure.ree = (function ree(l){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.take,(2)),cljs.core.take_while.call(null,cljs.core.comp.call(null,(function (n){return !(((n == null)) || (clojure.zip.end_QMARK_.call(null,n)));
}),cljs.core.last),cljs.core.iterate.call(null,(function (p__8969){var vec__8970 = p__8969;var l__$1 = cljs.core.nth.call(null,vec__8970,(0),null);var i = cljs.core.nth.call(null,vec__8970,(1),null);var d = cljs.core.nth.call(null,vec__8970,(2),null);var r = cljs.core.nth.call(null,vec__8970,(3),null);var n = cljs.core.nth.call(null,vec__8970,(4),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(cljs.core.truth_(d)?new cljs.core.Keyword(null,"v","v",21465059):(cljs.core.truth_(r)?new cljs.core.Keyword(null,">",">",-555517146):new cljs.core.Keyword(null,"A","A",-1688942394))),clojure.zip.down.call(null,n),clojure.zip.right.call(null,n),(cljs.core.truth_(d)?d:(cljs.core.truth_(r)?r:clojure.zip.next.call(null,l__$1)))], null);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,new cljs.core.Keyword(null,"_","_",1453416199),clojure.zip.down.call(null,l),clojure.zip.right.call(null,l),clojure.zip.next.call(null,l)], null))));
});
iiiiioiooooo.core.structure.r_STAR_ = (function r_STAR_(l,f){var l__$1 = l;var i = new cljs.core.Keyword(null,"_","_",1453416199);var d = clojure.zip.down.call(null,l__$1);var r = clojure.zip.right.call(null,l__$1);while(true){
var n = (cljs.core.truth_(d)?d:(cljs.core.truth_(r)?r:clojure.zip.next.call(null,l__$1)));f.call(null,l__$1,i);
if(((n == null)) || (clojure.zip.end_QMARK_.call(null,n)))
{return new cljs.core.Keyword(null,"end","end",-268185958);
} else
{{
var G__8971 = n;
var G__8972 = (cljs.core.truth_(d)?new cljs.core.Keyword(null,"v","v",21465059):(cljs.core.truth_(r)?new cljs.core.Keyword(null,">",">",-555517146):new cljs.core.Keyword(null,"A","A",-1688942394)));
var G__8973 = clojure.zip.down.call(null,n);
var G__8974 = clojure.zip.right.call(null,n);
l__$1 = G__8971;
i = G__8972;
d = G__8973;
r = G__8974;
continue;
}
}
break;
}
});
iiiiioiooooo.core.structure.climb = (function climb(p){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,p)))
{return cljs.core.map.call(null,climb,cljs.core.take_while.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,clojure.zip.right,clojure.zip.down.call(null,p))));
} else
{return clojure.zip.node.call(null,p);
}
});
iiiiioiooooo.core.structure.push_history = (function push_history(x,h){return iiiiioiooooo.core.structure.top.call(null,(cljs.core.truth_(x)?clojure.zip.append_child.call(null,h,cljs.core.with_meta.call(null,x,cljs.core.merge.call(null,cljs.core.meta.call(null,x),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"version","version",425292698),(cljs.core.count.call(null,h) + (1))], null)))):h));
});
iiiiioiooooo.core.structure.kop = (function kop(x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypath","keypath",1965534711)], null),(function (p){return cljs.core.subvec.call(null,p,(0),(cljs.core.count.call(null,p) - (1)));
}));
});
iiiiioiooooo.core.structure.safe = (function safe(s,x){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null));
});
iiiiioiooooo.core.structure.nop = (function nop(s,x){return x;
});
iiiiioiooooo.core.structure.descendents = (function descendents(loc){return cljs.core.mapcat.call(null,(function (r){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,r)))
{return descendents.call(null,r);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
}
}),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.right,(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))?clojure.zip.down.call(null,loc):loc))));
});
iiiiioiooooo.core.structure.maybe_open = (function() {
var maybe_open = null;
var maybe_open__1 = (function (loc){return maybe_open.call(null,loc,cljs.core.meta.call(null,clojure.zip.node.call(null,loc)));
});
var maybe_open__2 = (function (loc,meta){return clojure.zip.replace.call(null,loc,cljs.core.with_meta.call(null,clojure.zip.node.call(null,loc),cljs.core.update_in.call(null,(function (){var or__3534__auto__ = meta;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not)));
});
maybe_open = function(loc,meta){
switch(arguments.length){
case 1:
return maybe_open__1.call(this,loc);
case 2:
return maybe_open__2.call(this,loc,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
maybe_open.cljs$core$IFn$_invoke$arity$1 = maybe_open__1;
maybe_open.cljs$core$IFn$_invoke$arity$2 = maybe_open__2;
return maybe_open;
})()
;
iiiiioiooooo.core.structure.maybe_open_fn = (function maybe_open_fn(loc){if(cljs.core._EQ_.call(null,clojure.zip.node.call(null,clojure.zip.next.call(null,loc)),new cljs.core.Symbol(null,"defn","defn",-126010802,null)))
{return cljs.core.last.call(null,cljs.core.map.call(null,iiiiioiooooo.core.structure.maybe_open,cljs.core.take.call(null,(3),cljs.core.reverse.call(null,iiiiioiooooo.core.structure.descendents.call(null,loc)))));
} else
{return loc;
}
});
iiiiioiooooo.core.structure.carefull = (function carefull(f){return (function (x){var temp__4124__auto__ = f.call(null,x);if(cljs.core.truth_(temp__4124__auto__))
{var nx = temp__4124__auto__;return nx;
} else
{return x;
}
});
});
iiiiioiooooo.core.structure.stop_at_closed = (function stop_at_closed(f){return (function (x){if(cljs.core.truth_((function (){var or__3534__auto__ = (cljs.core.meta.call(null,clojure.zip.node.call(null,x)) == null);if(or__3534__auto__)
{return or__3534__auto__;
} else
{return new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,clojure.zip.node.call(null,x)));
}
})()))
{return f.call(null,x);
} else
{return x;
}
});
});
iiiiioiooooo.core.structure.forward_zipper = (function forward_zipper(f){return (function (loc){if(cljs.core.truth_((function (){var and__3522__auto__ = loc;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,loc)),new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862));
} else
{return and__3522__auto__;
}
})()))
{return f.call(null,clojure.zip.node.call(null,loc));
} else
{return f.call(null,loc);
}
});
});
iiiiioiooooo.core.structure.forward_to_zipper = (function forward_to_zipper(f){return (function (x){if(cljs.core.truth_((function (){var and__3522__auto__ = x;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,x)),new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862));
} else
{return and__3522__auto__;
}
})()))
{return f.call(null,clojure.zip.node.call(null,x));
} else
{return f.call(null,x);
}
});
});
iiiiioiooooo.core.structure.maybe_select = (function maybe_select(x,y){if(cljs.core._EQ_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(x))),cljs.core.meta.call(null,clojure.zip.node.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(y)))))
{return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"select","select",1147833503));
} else
{return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"modify","modify",-1261040869),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(x));
}
});
iiiiioiooooo.core.structure.selected = (function selected(s,f){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.forward_zipper.call(null,f))),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"select","select",1147833503));
});
iiiiioiooooo.core.structure.modified = (function() {
var modified = null;
var modified__2 = (function (s,f){return modified.call(null,s,f,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(s));
});
var modified__3 = (function (s,f,m){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.forward_zipper.call(null,f))),new cljs.core.Keyword(null,"modified","modified",-2134587826),m,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"modify","modify",-1261040869),new cljs.core.Keyword(null,"x","x",2099068185),((function (){var or__3534__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s);if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return (0);
}
})() + (1)));
});
modified = function(s,f,m){
switch(arguments.length){
case 2:
return modified__2.call(this,s,f);
case 3:
return modified__3.call(this,s,f,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modified.cljs$core$IFn$_invoke$arity$2 = modified__2;
modified.cljs$core$IFn$_invoke$arity$3 = modified__3;
return modified;
})()
;
iiiiioiooooo.core.structure.apply_selected = (function() {
var apply_selected = null;
var apply_selected__2 = (function (h,x){return apply_selected.call(null,h,x,clojure.zip.node.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(x))),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.map.call(null,clojure.zip.node,cljs.core.rest.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(x))))),clojure.zip.node.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(x))))),cljs.core.apply.call(null,cljs.core.get.call(null,x,clojure.zip.node.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(x)))),cljs.core.identity),cljs.core.map.call(null,clojure.zip.node,cljs.core.rest.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(x))))));
});
var apply_selected__5 = (function (h,x,fn,exp,result){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"modified","modified",-2134587826),result,new cljs.core.Keyword(null,"fn-applied","fn-applied",-251879537),fn);
});
apply_selected = function(h,x,fn,exp,result){
switch(arguments.length){
case 2:
return apply_selected__2.call(this,h,x);
case 5:
return apply_selected__5.call(this,h,x,fn,exp,result);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_selected.cljs$core$IFn$_invoke$arity$2 = apply_selected__2;
apply_selected.cljs$core$IFn$_invoke$arity$5 = apply_selected__5;
return apply_selected;
})()
;
iiiiioiooooo.core.structure.left = (function left(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.left);
});
iiiiioiooooo.core.structure.right = (function right(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.right);
});
iiiiioiooooo.core.structure.out = (function out(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.up);
});
iiiiioiooooo.core.structure.in$ = (function in$(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.stop_at_closed.call(null,clojure.zip.down));
});
iiiiioiooooo.core.structure.depth_first_next = (function depth_first_next(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.stop_at_closed.call(null,clojure.zip.next));
});
iiiiioiooooo.core.structure.depth_first_previous = (function depth_first_previous(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.prev);
});
iiiiioiooooo.core.structure.expand = (function expand(s,x){return iiiiioiooooo.core.structure.maybe_select.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),iiiiioiooooo.core.structure.carefull.call(null,iiiiioiooooo.core.structure.maybe_open)),x);
});
iiiiioiooooo.core.structure.delete$ = (function delete$(s,x){return iiiiioiooooo.core.structure.modified.call(null,x,clojure.zip.remove);
});
iiiiioiooooo.core.structure.insert_left = (function insert_left(s,x){return iiiiioiooooo.core.structure.modified.call(null,x,(function (c){return clojure.zip.insert_left.call(null,c,"+");
}));
});
iiiiioiooooo.core.structure.insert_right = (function insert_right(s,x){return iiiiioiooooo.core.structure.modified.call(null,x,(function (c){return clojure.zip.insert_right.call(null,c,"+");
}));
});
iiiiioiooooo.core.structure.rightmost = (function rightmost(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.rightmost);
});
iiiiioiooooo.core.structure.leftmost = (function leftmost(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,clojure.zip.leftmost);
});
iiiiioiooooo.core.structure.add_keybinding = (function add_keybinding(x,path,f){return cljs.core.assoc_in.call(null,x,cljs.core.cons.call(null,new cljs.core.Keyword(null,"keymap","keymap",-499605268),path),f);
});
iiiiioiooooo.core.structure.rotate_LT_ = (function rotate_LT_(s,x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null),(function (r){return (r + 0.1);
}));
});
iiiiioiooooo.core.structure.rotate_GT_ = (function rotate_GT_(s,x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null),(function (r){return (r - 0.1);
}));
});
iiiiioiooooo.core.structure.tx_ = (function tx_(s,x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translation","translation",-701621547),(0)], null),(function (r){return (r - (10));
}));
});
iiiiioiooooo.core.structure.tx_PLUS_ = (function tx_PLUS_(s,x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translation","translation",-701621547),(0)], null),(function (r){return (r + (10));
}));
});
iiiiioiooooo.core.structure.ty_ = (function ty_(s,x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translation","translation",-701621547),(1)], null),(function (r){return (r - (10));
}));
});
iiiiioiooooo.core.structure.ty_PLUS_ = (function ty_PLUS_(s,x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translation","translation",-701621547),(1)], null),(function (r){return (r + (10));
}));
});
iiiiioiooooo.core.structure.root = (function root(s,x){return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.top);
});
iiiiioiooooo.core.structure.replace_parent = (function replace_parent(s,x){return iiiiioiooooo.core.structure.modified.call(null,x,(function (l){return clojure.zip.replace.call(null,clojure.zip.up.call(null,l),clojure.zip.node.call(null,l));
}),clojure.zip.up.call(null,new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(x)));
});
iiiiioiooooo.core.structure.split_into_children = (function split_into_children(s,x){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),(function (n){return clojure.zip.replace.call(null,n,clojure.zip.make_node.call(null,n,clojure.zip.node.call(null,n),clojure.zip.children.call(null,clojure.zip.vector_zip.call(null,cljs.core.vec.call(null,cljs.core.name.call(null,clojure.zip.node.call(null,n)))))));
})),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"modify","modify",-1261040869));
});
iiiiioiooooo.core.structure.fuse_into_parent = (function fuse_into_parent(s,x){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),(function (n){return clojure.zip.replace.call(null,n,cljs.core.symbol.call(null,cljs.core.apply.call(null,cljs.core.str,clojure.zip.children.call(null,n))));
})),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"modify","modify",-1261040869));
});
iiiiioiooooo.core.structure.home = (function home(s,x){return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null),iiiiioiooooo.core.structure.top);
});
iiiiioiooooo.core.structure.hfn = (function hfn(s,x){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"focus","focus",234677911),s);
});
iiiiioiooooo.core.structure.next_at = (function next_at(i,c){return (function (loc){var or__3534__auto__ = loc;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return cljs.core.first.call(null,cljs.core.filter.call(null,((function (or__3534__auto__){
return (function (l){return cljs.core._EQ_.call(null,c,cljs.core.nth.call(null,clojure.zip.node.call(null,l),i));
});})(or__3534__auto__))
,cljs.core.iterate.call(null,clojure.zip.right,loc)));
}
});
});
iiiiioiooooo.core.structure.find_first = (function() {
var find_first = null;
var find_first__1 = (function (thing){return (function (s,x){return iiiiioiooooo.core.structure.selected.call(null,x,cljs.core.partial.call(null,find_first,thing));
});
});
var find_first__2 = (function (x,loc){return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x),clojure.zip.node),iiiiioiooooo.core.structure.nodes.call(null,loc)));
});
find_first = function(x,loc){
switch(arguments.length){
case 1:
return find_first__1.call(this,x);
case 2:
return find_first__2.call(this,x,loc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
find_first.cljs$core$IFn$_invoke$arity$1 = find_first__1;
find_first.cljs$core$IFn$_invoke$arity$2 = find_first__2;
return find_first;
})()
;
iiiiioiooooo.core.structure.next_starting_with = (function next_starting_with(c){return (function (s,x){return iiiiioiooooo.core.structure.selected.call(null,x,iiiiioiooooo.core.structure.next_at.call(null,(cljs.core.count.call(null,new cljs.core.Keyword(null,"keypath","keypath",1965534711).cljs$core$IFn$_invoke$arity$1(x)) - (1)),c));
});
});
iiiiioiooooo.core.structure.keyup = (function() {
var keyup = null;
var keyup__2 = (function (s,x){return keyup.call(null,s,x,cljs.core.get_in.call(null,x,cljs.core.conj.call(null,new cljs.core.Keyword(null,"keypath","keypath",1965534711).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),iiiiioiooooo.core.structure.nop));
});
var keyup__3 = (function (s,x,f){return iiiiioiooooo.core.structure.push_history.call(null,(function (){var or__3534__auto__ = f.call(null,s,cljs.core.assoc.call(null,iiiiioiooooo.core.structure.kop.call(null,x),new cljs.core.Keyword(null,"op","op",-1882987955),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f))));if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return s;
}
})(),s);
});
keyup = function(s,x,f){
switch(arguments.length){
case 2:
return keyup__2.call(this,s,x);
case 3:
return keyup__3.call(this,s,x,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyup.cljs$core$IFn$_invoke$arity$2 = keyup__2;
keyup.cljs$core$IFn$_invoke$arity$3 = keyup__3;
return keyup;
})()
;
iiiiioiooooo.core.structure.latest_state = (function latest_state(history){return clojure.zip.node.call(null,clojure.zip.rightmost.call(null,clojure.zip.down.call(null,iiiiioiooooo.core.structure.top.call(null,history))));
});
iiiiioiooooo.core.structure.focus_on_latest = (function focus_on_latest(h,x){return iiiiioiooooo.core.structure.selected.call(null,x,(function (loc){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,iiiiioiooooo.core.structure.top.call(null,h)));
}));
});
iiiiioiooooo.core.structure.default_keymap = (function default_keymap(){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shift","shift",997140064),iiiiioiooooo.core.structure.nop], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"q","q",689001697),iiiiioiooooo.core.structure.rotate_GT_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"down","down",1565245570),iiiiioiooooo.core.structure.in$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space","space",348133475),iiiiioiooooo.core.structure.expand], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),iiiiioiooooo.core.structure.left], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),iiiiioiooooo.core.structure.right], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up","up",-269712113),iiiiioiooooo.core.structure.replace_parent], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"down","down",1565245570),iiiiioiooooo.core.structure.split_into_children], null),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),(function (s,x){return iiiiioiooooo.core.structure.modified.call(null,x,cljs.core.identity);
})], null),new cljs.core.Keyword(null,"alt","alt",-3214426),iiiiioiooooo.core.structure.nop], null),iiiiioiooooo.core.structure.nop,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"w","w",354169001),iiiiioiooooo.core.structure.rotate_LT_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),iiiiioiooooo.core.structure.home], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),iiiiioiooooo.core.structure.ty_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),iiiiioiooooo.core.structure.insert_left], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),iiiiioiooooo.core.structure.insert_right], null),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),iiiiioiooooo.core.structure.rightmost], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),iiiiioiooooo.core.structure.leftmost], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up","up",-269712113),iiiiioiooooo.core.structure.root], null),new cljs.core.Keyword(null,"alt","alt",-3214426),iiiiioiooooo.core.structure.nop], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up","up",-269712113),iiiiioiooooo.core.structure.fuse_into_parent], null),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),iiiiioiooooo.core.structure.nop], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),iiiiioiooooo.core.structure.tx_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"up","up",-269712113),iiiiioiooooo.core.structure.out], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"g","g",1738089905),(function (h,s){return iiiiioiooooo.core.structure.modified.call(null,s,(function (l){return clojure.zip.edit.call(null,l,(function (n){return (n - (10));
}));
}));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"h","h",1109658740),iiiiioiooooo.core.structure.hfn], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),iiiiioiooooo.core.structure.depth_first_next,new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space","space",348133475),iiiiioiooooo.core.structure.depth_first_next], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),iiiiioiooooo.core.structure.ty_PLUS_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),iiiiioiooooo.core.structure.tx_PLUS_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backspace","backspace",-696007848),iiiiioiooooo.core.structure.delete$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),iiiiioiooooo.core.structure.hfn], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"i","i",-1386841315),(function (s,x){return iiiiioiooooo.core.structure.modified.call(null,x,cljs.core.comp.call(null,clojure.zip.prev,clojure.zip.next));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),iiiiioiooooo.core.structure.depth_first_previous], null)]);
});
iiiiioiooooo.core.structure.default_state = (function() {
var default_state = null;
var default_state__0 = (function (){return default_state.call(null,iiiiioiooooo.core.structure.smz.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"qwe","qwe",-1757586645),new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"test2","test2",1460100180),new cljs.core.Keyword(null,"translation","translation",-701621547),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"test3","test3",-562138791),new cljs.core.Keyword(null,"help","help",-439233446),new cljs.core.Keyword(null,"test1","test1",-1189462085),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clojure.core","clojure.core",-1829864152),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"cons","cons",-885083073),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"juxt","juxt",-969445923),new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"conj","conj",1527141827)], null)], null)], null),new cljs.core.Keyword(null,"inc","inc",-1316026094),cljs.core.inc,new cljs.core.Keyword(null,"dec","dec",1888433436),cljs.core.dec], null)], null),3.14,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(7),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function keydown(s,x){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypath","keypath",1965534711)], null),(function (kp){return cljs.core.conj.call(null,kp,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x));
})),s);
})], null),(0),iiiiioiooooo.core.structure.default_keymap.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"esc","esc",-1671924121),iiiiioiooooo.core.structure.safe,new cljs.core.Keyword(null,"default","default",-1987822328),iiiiioiooooo.core.structure.keyup], null),cljs.core.with_meta.call(null,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(7))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268)], null),"poi","hi",new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.with_meta.call(null,cljs.core.list(new cljs.core.Symbol(null,"with-meta","with-meta",73674707,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(7)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["iiiiioiooooo Clojure structure editor (barely functioning sketch of)","This is an experiment in making a functional code editor.","https://www.youtube.com/watch?v=2Op3QLzMgSY&feature=player_detailpage#t=2077s","Lecture 1A | MIT 6.001 Structure and Interpretation, 1986 - 35m25s","\n          The idea here is to manipulate code\n          at the expression level, not at the text level.\n          This is very primitive right now,\n          it doesn't do much yet, just testing ideas, everything will change, or it will be abandoned.\n          Works best in Chrome, keyboard-only! doesn't work on mobile browsers.\n          "], null),cljs.core.with_meta.call(null,cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quote",new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null)),cljs.core.with_meta.call(null,cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null))]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null))], null)));
});
var default_state__1 = (function (h){return default_state.call(null,iiiiioiooooo.core.structure.latest_state.call(null,h),h);
});
var default_state__2 = (function (s,h){return default_state.call(null,iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"context","context",-830191113),clojure.zip.up.call(null,iiiiioiooooo.core.structure.find_first.call(null,new cljs.core.Keyword(null,"test1","test1",-1189462085),h)),new cljs.core.Keyword(null,"focus","focus",234677911),clojure.zip.up.call(null,clojure.zip.rightmost.call(null,clojure.zip.down.call(null,h))),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(3),null], null), null),new cljs.core.Keyword(null,"qwe","qwe",-1757586645),(1),new cljs.core.Keyword(null,"poi","poi",923822222),"qwe"),h),iiiiioiooooo.core.structure.latest_state.call(null,h),null);
});
var default_state__3 = (function (h,latest,w){return iiiiioiooooo.core.structure.push_history.call(null,cljs.core.assoc.call(null,iiiiioiooooo.core.structure.latest_state.call(null,h),new cljs.core.Keyword(null,"focus","focus",234677911),clojure.zip.next.call(null,clojure.zip.next.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h)))),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentHashSet.fromArray([clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h)))))),clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h)))))))))),clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,clojure.zip.next.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h))))))),clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(iiiiioiooooo.core.structure.latest_state.call(null,h)))))))))], true),new cljs.core.Keyword(null,"qwe","qwe",-1757586645),(2),new cljs.core.Keyword(null,"wer","wer",-733233266),"arse"),h);
});
default_state = function(h,latest,w){
switch(arguments.length){
case 0:
return default_state__0.call(this);
case 1:
return default_state__1.call(this,h);
case 2:
return default_state__2.call(this,h,latest);
case 3:
return default_state__3.call(this,h,latest,w);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
default_state.cljs$core$IFn$_invoke$arity$0 = default_state__0;
default_state.cljs$core$IFn$_invoke$arity$1 = default_state__1;
default_state.cljs$core$IFn$_invoke$arity$2 = default_state__2;
default_state.cljs$core$IFn$_invoke$arity$3 = default_state__3;
return default_state;
})()
;
iiiiioiooooo.core.structure.fn_for_event = (function fn_for_event(s,e){if(cljs.core._EQ_.call(null,e,cljs.core.select_keys.call(null,s,cljs.core.keys.call(null,e))))
{return cljs.core.identity;
} else
{return cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(e)], null),cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.identity));
}
});
iiiiioiooooo.core.structure.update = (function() {
var update = null;
var update__2 = (function (s,e){return update.call(null,s,iiiiioiooooo.core.structure.latest_state.call(null,s),e);
});
var update__3 = (function (s,x,e){return update.call(null,s,cljs.core.merge.call(null,x,e),e,iiiiioiooooo.core.structure.fn_for_event.call(null,x,e));
});
var update__4 = (function (s,x,e,f){return f.call(null,s,x);
});
update = function(s,x,e,f){
switch(arguments.length){
case 2:
return update__2.call(this,s,x);
case 3:
return update__3.call(this,s,x,e);
case 4:
return update__4.call(this,s,x,e,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$core$IFn$_invoke$arity$2 = update__2;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
return update;
})()
;
iiiiioiooooo.core.structure.maybe = (function maybe(f,x){var or__3534__auto__ = f.call(null,x,iiiiioiooooo.core.structure.latest_state.call(null,x));if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return x;
}
});
iiiiioiooooo.core.structure.update_with = (function update_with(s,f){return iiiiioiooooo.core.structure.push_history.call(null,iiiiioiooooo.core.structure.maybe.call(null,f,s),s);
});
iiiiioiooooo.core.structure.update_BANG_ = (function update_BANG_(state,e){return cljs.core.swap_BANG_.call(null,state,(function (s){return iiiiioiooooo.core.structure.update.call(null,s,e);
}));
});

//# sourceMappingURL=structure.js.map