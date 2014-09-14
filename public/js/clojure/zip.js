// Compiled by ClojureScript 0.0-2322
goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591),make_node,new cljs.core.Keyword("zip","children","zip/children",-940194589),children,new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862),branch_QMARK_], null));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",15833224)),(function (node,children){return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),(function (){var and__3522__auto__ = children;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3522__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){return loc.call(null,(0));
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){return new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return new cljs.core.Keyword("zip","children","zip/children",-940194589).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){return new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){return new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1(loc.call(null,(1)));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(loc.call(null,(1))));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(loc.call(null,(1)));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__8057 = loc;var node = cljs.core.nth.call(null,vec__8057,(0),null);var path = cljs.core.nth.call(null,vec__8057,(1),null);var vec__8058 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__8058,(0),null);var cnext = cljs.core.nthnext.call(null,vec__8058,(1));var cs = vec__8058;if(cljs.core.truth_(cs))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),(cljs.core.truth_(path)?cljs.core.conj.call(null,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),new cljs.core.Keyword(null,"ppath","ppath",-1758182784),path,new cljs.core.Keyword(null,"r","r",-471384190),cnext], null)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){var vec__8061 = loc;var node = cljs.core.nth.call(null,vec__8061,(0),null);var map__8062 = cljs.core.nth.call(null,vec__8061,(1),null);var map__8062__$1 = ((cljs.core.seq_QMARK_.call(null,map__8062))?cljs.core.apply.call(null,cljs.core.hash_map,map__8062):map__8062);var path = map__8062__$1;var l = cljs.core.get.call(null,map__8062__$1,new cljs.core.Keyword(null,"l","l",1395893423));var ppath = cljs.core.get.call(null,map__8062__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));var pnodes = cljs.core.get.call(null,map__8062__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));var r = cljs.core.get.call(null,map__8062__$1,new cljs.core.Keyword(null,"r","r",-471384190));var changed_QMARK_ = cljs.core.get.call(null,map__8062__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__3522__auto__ = ppath;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else
{return and__3522__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1))))
{return clojure.zip.node.call(null,loc);
} else
{var p = clojure.zip.up.call(null,loc);if(cljs.core.truth_(p))
{{
var G__8063 = p;
loc = G__8063;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){var vec__8067 = loc;var node = cljs.core.nth.call(null,vec__8067,(0),null);var map__8068 = cljs.core.nth.call(null,vec__8067,(1),null);var map__8068__$1 = ((cljs.core.seq_QMARK_.call(null,map__8068))?cljs.core.apply.call(null,cljs.core.hash_map,map__8068):map__8068);var path = map__8068__$1;var l = cljs.core.get.call(null,map__8068__$1,new cljs.core.Keyword(null,"l","l",1395893423));var vec__8069 = cljs.core.get.call(null,map__8068__$1,new cljs.core.Keyword(null,"r","r",-471384190));var r = cljs.core.nth.call(null,vec__8069,(0),null);var rnext = cljs.core.nthnext.call(null,vec__8069,(1));var rs = vec__8069;if(cljs.core.truth_((function (){var and__3522__auto__ = path;if(cljs.core.truth_(and__3522__auto__))
{return rs;
} else
{return and__3522__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.conj.call(null,l,node),new cljs.core.Keyword(null,"r","r",-471384190),rnext)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){var vec__8072 = loc;var node = cljs.core.nth.call(null,vec__8072,(0),null);var map__8073 = cljs.core.nth.call(null,vec__8072,(1),null);var map__8073__$1 = ((cljs.core.seq_QMARK_.call(null,map__8073))?cljs.core.apply.call(null,cljs.core.hash_map,map__8073):map__8073);var path = map__8073__$1;var l = cljs.core.get.call(null,map__8073__$1,new cljs.core.Keyword(null,"l","l",1395893423));var r = cljs.core.get.call(null,map__8073__$1,new cljs.core.Keyword(null,"r","r",-471384190));if(cljs.core.truth_((function (){var and__3522__auto__ = path;if(cljs.core.truth_(and__3522__auto__))
{return r;
} else
{return and__3522__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,r),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.apply.call(null,cljs.core.conj,l,node,cljs.core.butlast.call(null,r)),new cljs.core.Keyword(null,"r","r",-471384190),null)], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){var vec__8076 = loc;var node = cljs.core.nth.call(null,vec__8076,(0),null);var map__8077 = cljs.core.nth.call(null,vec__8076,(1),null);var map__8077__$1 = ((cljs.core.seq_QMARK_.call(null,map__8077))?cljs.core.apply.call(null,cljs.core.hash_map,map__8077):map__8077);var path = map__8077__$1;var l = cljs.core.get.call(null,map__8077__$1,new cljs.core.Keyword(null,"l","l",1395893423));var r = cljs.core.get.call(null,map__8077__$1,new cljs.core.Keyword(null,"r","r",-471384190));if(cljs.core.truth_((function (){var and__3522__auto__ = path;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__3522__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.cons.call(null,node,r))], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){var vec__8080 = loc;var node = cljs.core.nth.call(null,vec__8080,(0),null);var map__8081 = cljs.core.nth.call(null,vec__8080,(1),null);var map__8081__$1 = ((cljs.core.seq_QMARK_.call(null,map__8081))?cljs.core.apply.call(null,cljs.core.hash_map,map__8081):map__8081);var path = map__8081__$1;var l = cljs.core.get.call(null,map__8081__$1,new cljs.core.Keyword(null,"l","l",1395893423));var r = cljs.core.get.call(null,map__8081__$1,new cljs.core.Keyword(null,"r","r",-471384190));if(cljs.core.truth_((function (){var and__3522__auto__ = path;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__3522__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.concat.call(null,cljs.core.rest.call(null,l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),r))], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){var vec__8084 = loc;var node = cljs.core.nth.call(null,vec__8084,(0),null);var map__8085 = cljs.core.nth.call(null,vec__8084,(1),null);var map__8085__$1 = ((cljs.core.seq_QMARK_.call(null,map__8085))?cljs.core.apply.call(null,cljs.core.hash_map,map__8085):map__8085);var path = map__8085__$1;var l = cljs.core.get.call(null,map__8085__$1,new cljs.core.Keyword(null,"l","l",1395893423));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__8088 = loc;var node = cljs.core.nth.call(null,vec__8088,(0),null);var map__8089 = cljs.core.nth.call(null,vec__8088,(1),null);var map__8089__$1 = ((cljs.core.seq_QMARK_.call(null,map__8089))?cljs.core.apply.call(null,cljs.core.hash_map,map__8089):map__8089);var path = map__8089__$1;var r = cljs.core.get.call(null,map__8089__$1,new cljs.core.Keyword(null,"r","r",-471384190));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__8091 = loc;var _ = cljs.core.nth.call(null,vec__8091,(0),null);var path = cljs.core.nth.call(null,vec__8091,(1),null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return edit__delegate.call(this,loc,f,args);};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__8092){
var loc = cljs.core.first(arglist__8092);
arglist__8092 = cljs.core.next(arglist__8092);
var f = cljs.core.first(arglist__8092);
var args = cljs.core.rest(arglist__8092);
return edit__delegate(loc,f,args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1))))
{return loc;
} else
{var or__3534__auto__ = (function (){var and__3522__auto__ = clojure.zip.branch_QMARK_.call(null,loc);if(cljs.core.truth_(and__3522__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__3522__auto__;
}
})();if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{var or__3534__auto____$1 = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__3534__auto____$1))
{return or__3534__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__3534__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__3534__auto____$2))
{return or__3534__auto____$2;
} else
{{
var G__8093 = clojure.zip.up.call(null,p);
p = G__8093;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){var temp__4124__auto__ = clojure.zip.left.call(null,loc);if(cljs.core.truth_(temp__4124__auto__))
{var lloc = temp__4124__auto__;var loc__$1 = lloc;while(true){
var temp__4124__auto____$1 = (function (){var and__3522__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__3522__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__3522__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto____$1))
{var child = temp__4124__auto____$1;{
var G__8094 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8094;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1)));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){var vec__8097 = loc;var node = cljs.core.nth.call(null,vec__8097,(0),null);var map__8098 = cljs.core.nth.call(null,vec__8097,(1),null);var map__8098__$1 = ((cljs.core.seq_QMARK_.call(null,map__8098))?cljs.core.apply.call(null,cljs.core.hash_map,map__8098):map__8098);var path = map__8098__$1;var l = cljs.core.get.call(null,map__8098__$1,new cljs.core.Keyword(null,"l","l",1395893423));var ppath = cljs.core.get.call(null,map__8098__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));var pnodes = cljs.core.get.call(null,map__8098__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));var rs = cljs.core.get.call(null,map__8098__$1,new cljs.core.Keyword(null,"r","r",-471384190));if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > (0)))
{var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));while(true){
var temp__4124__auto__ = (function (){var and__3522__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__3522__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__3522__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var child = temp__4124__auto__;{
var G__8099 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__8099;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__3522__auto__ = ppath;if(cljs.core.truth_(and__3522__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else
{return and__3522__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});

//# sourceMappingURL=zip.js.map