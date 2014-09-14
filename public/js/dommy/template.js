// Compiled by ClojureScript 0.0-2322
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
dommy.template.PElement = (function (){var obj8101 = {};return obj8101;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3522__auto__ = this$;if(and__3522__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3522__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4161__auto__ = (((this$ == null))?null:this$);return (function (){var or__3534__auto__ = (dommy.template._elem[goog.typeOf(x__4161__auto__)]);if(or__3534__auto__)
{return or__3534__auto__;
} else
{var or__3534__auto____$1 = (dommy.template._elem["_"]);if(or__3534__auto____$1)
{return or__3534__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_8104 = node_str.substring(base_idx);while(true){
var next_idx_8105 = dommy.template.next_css_index.call(null,str_8104,(1));var frag_8106 = (((next_idx_8105 >= (0)))?str_8104.substring((0),next_idx_8105):str_8104);var G__8103_8107 = frag_8106.charAt((0));switch (G__8103_8107) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_8106.substring((1)));

break;
case "#":
node.setAttribute("id",frag_8106.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_8106.charAt((0))))));

}
if((next_idx_8105 >= (0)))
{{
var G__8109 = str_8104.substring(next_idx_8105);
str_8104 = G__8109;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__8115 = data;if(G__8115)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__8115.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8115.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8115);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8115);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__8116_8120 = cljs.core.seq.call(null,data);var chunk__8117_8121 = null;var count__8118_8122 = (0);var i__8119_8123 = (0);while(true){
if((i__8119_8123 < count__8118_8122))
{var child_8124 = cljs.core._nth.call(null,chunk__8117_8121,i__8119_8123);__GT_document_fragment.call(null,result_frag,child_8124);
{
var G__8125 = seq__8116_8120;
var G__8126 = chunk__8117_8121;
var G__8127 = count__8118_8122;
var G__8128 = (i__8119_8123 + (1));
seq__8116_8120 = G__8125;
chunk__8117_8121 = G__8126;
count__8118_8122 = G__8127;
i__8119_8123 = G__8128;
continue;
}
} else
{var temp__4126__auto___8129 = cljs.core.seq.call(null,seq__8116_8120);if(temp__4126__auto___8129)
{var seq__8116_8130__$1 = temp__4126__auto___8129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8116_8130__$1))
{var c__4290__auto___8131 = cljs.core.chunk_first.call(null,seq__8116_8130__$1);{
var G__8132 = cljs.core.chunk_rest.call(null,seq__8116_8130__$1);
var G__8133 = c__4290__auto___8131;
var G__8134 = cljs.core.count.call(null,c__4290__auto___8131);
var G__8135 = (0);
seq__8116_8120 = G__8132;
chunk__8117_8121 = G__8133;
count__8118_8122 = G__8134;
i__8119_8123 = G__8135;
continue;
}
} else
{var child_8136 = cljs.core.first.call(null,seq__8116_8130__$1);__GT_document_fragment.call(null,result_frag,child_8136);
{
var G__8137 = cljs.core.next.call(null,seq__8116_8130__$1);
var G__8138 = null;
var G__8139 = (0);
var G__8140 = (0);
seq__8116_8120 = G__8137;
chunk__8117_8121 = G__8138;
count__8118_8122 = G__8139;
i__8119_8123 = G__8140;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);

}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__8142 = data;if(G__8142)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__8142.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8142.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8142);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8142);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__8143){var vec__8163 = p__8143;var tag_name = cljs.core.nth.call(null,vec__8163,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__8163,(1),null);var children = cljs.core.nthnext.call(null,vec__8163,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__8165 = maybe_attrs;if(G__8165)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__8165.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8165.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8165);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8165);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__8166_8182 = cljs.core.seq.call(null,attrs);var chunk__8167_8183 = null;var count__8168_8184 = (0);var i__8169_8185 = (0);while(true){
if((i__8169_8185 < count__8168_8184))
{var vec__8170_8186 = cljs.core._nth.call(null,chunk__8167_8183,i__8169_8185);var k_8187 = cljs.core.nth.call(null,vec__8170_8186,(0),null);var v_8188 = cljs.core.nth.call(null,vec__8170_8186,(1),null);var G__8171_8189 = (((k_8187 instanceof cljs.core.Keyword))?k_8187.fqn:null);switch (G__8171_8189) {
case "classes":
var seq__8172_8191 = cljs.core.seq.call(null,v_8188);var chunk__8173_8192 = null;var count__8174_8193 = (0);var i__8175_8194 = (0);while(true){
if((i__8175_8194 < count__8174_8193))
{var c_8195 = cljs.core._nth.call(null,chunk__8173_8192,i__8175_8194);dommy.attrs.add_class_BANG_.call(null,n,c_8195);
{
var G__8196 = seq__8172_8191;
var G__8197 = chunk__8173_8192;
var G__8198 = count__8174_8193;
var G__8199 = (i__8175_8194 + (1));
seq__8172_8191 = G__8196;
chunk__8173_8192 = G__8197;
count__8174_8193 = G__8198;
i__8175_8194 = G__8199;
continue;
}
} else
{var temp__4126__auto___8200 = cljs.core.seq.call(null,seq__8172_8191);if(temp__4126__auto___8200)
{var seq__8172_8201__$1 = temp__4126__auto___8200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8172_8201__$1))
{var c__4290__auto___8202 = cljs.core.chunk_first.call(null,seq__8172_8201__$1);{
var G__8203 = cljs.core.chunk_rest.call(null,seq__8172_8201__$1);
var G__8204 = c__4290__auto___8202;
var G__8205 = cljs.core.count.call(null,c__4290__auto___8202);
var G__8206 = (0);
seq__8172_8191 = G__8203;
chunk__8173_8192 = G__8204;
count__8174_8193 = G__8205;
i__8175_8194 = G__8206;
continue;
}
} else
{var c_8207 = cljs.core.first.call(null,seq__8172_8201__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8207);
{
var G__8208 = cljs.core.next.call(null,seq__8172_8201__$1);
var G__8209 = null;
var G__8210 = (0);
var G__8211 = (0);
seq__8172_8191 = G__8208;
chunk__8173_8192 = G__8209;
count__8174_8193 = G__8210;
i__8175_8194 = G__8211;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_8188);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_8187,v_8188);

}
{
var G__8212 = seq__8166_8182;
var G__8213 = chunk__8167_8183;
var G__8214 = count__8168_8184;
var G__8215 = (i__8169_8185 + (1));
seq__8166_8182 = G__8212;
chunk__8167_8183 = G__8213;
count__8168_8184 = G__8214;
i__8169_8185 = G__8215;
continue;
}
} else
{var temp__4126__auto___8216 = cljs.core.seq.call(null,seq__8166_8182);if(temp__4126__auto___8216)
{var seq__8166_8217__$1 = temp__4126__auto___8216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8166_8217__$1))
{var c__4290__auto___8218 = cljs.core.chunk_first.call(null,seq__8166_8217__$1);{
var G__8219 = cljs.core.chunk_rest.call(null,seq__8166_8217__$1);
var G__8220 = c__4290__auto___8218;
var G__8221 = cljs.core.count.call(null,c__4290__auto___8218);
var G__8222 = (0);
seq__8166_8182 = G__8219;
chunk__8167_8183 = G__8220;
count__8168_8184 = G__8221;
i__8169_8185 = G__8222;
continue;
}
} else
{var vec__8176_8223 = cljs.core.first.call(null,seq__8166_8217__$1);var k_8224 = cljs.core.nth.call(null,vec__8176_8223,(0),null);var v_8225 = cljs.core.nth.call(null,vec__8176_8223,(1),null);var G__8177_8226 = (((k_8224 instanceof cljs.core.Keyword))?k_8224.fqn:null);switch (G__8177_8226) {
case "classes":
var seq__8178_8228 = cljs.core.seq.call(null,v_8225);var chunk__8179_8229 = null;var count__8180_8230 = (0);var i__8181_8231 = (0);while(true){
if((i__8181_8231 < count__8180_8230))
{var c_8232 = cljs.core._nth.call(null,chunk__8179_8229,i__8181_8231);dommy.attrs.add_class_BANG_.call(null,n,c_8232);
{
var G__8233 = seq__8178_8228;
var G__8234 = chunk__8179_8229;
var G__8235 = count__8180_8230;
var G__8236 = (i__8181_8231 + (1));
seq__8178_8228 = G__8233;
chunk__8179_8229 = G__8234;
count__8180_8230 = G__8235;
i__8181_8231 = G__8236;
continue;
}
} else
{var temp__4126__auto___8237__$1 = cljs.core.seq.call(null,seq__8178_8228);if(temp__4126__auto___8237__$1)
{var seq__8178_8238__$1 = temp__4126__auto___8237__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8178_8238__$1))
{var c__4290__auto___8239 = cljs.core.chunk_first.call(null,seq__8178_8238__$1);{
var G__8240 = cljs.core.chunk_rest.call(null,seq__8178_8238__$1);
var G__8241 = c__4290__auto___8239;
var G__8242 = cljs.core.count.call(null,c__4290__auto___8239);
var G__8243 = (0);
seq__8178_8228 = G__8240;
chunk__8179_8229 = G__8241;
count__8180_8230 = G__8242;
i__8181_8231 = G__8243;
continue;
}
} else
{var c_8244 = cljs.core.first.call(null,seq__8178_8238__$1);dommy.attrs.add_class_BANG_.call(null,n,c_8244);
{
var G__8245 = cljs.core.next.call(null,seq__8178_8238__$1);
var G__8246 = null;
var G__8247 = (0);
var G__8248 = (0);
seq__8178_8228 = G__8245;
chunk__8179_8229 = G__8246;
count__8180_8230 = G__8247;
i__8181_8231 = G__8248;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_8225);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_8224,v_8225);

}
{
var G__8249 = cljs.core.next.call(null,seq__8166_8217__$1);
var G__8250 = null;
var G__8251 = (0);
var G__8252 = (0);
seq__8166_8182 = G__8249;
chunk__8167_8183 = G__8250;
count__8168_8184 = G__8251;
i__8169_8185 = G__8252;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e8253){if((e8253 instanceof ReferenceError))
{var __8254 = e8253;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{throw e8253;

}
}dommy.template.node = (function node(data){if((function (){var G__8256 = data;if(G__8256)
{var bit__4184__auto__ = null;if(cljs.core.truth_((function (){var or__3534__auto__ = bit__4184__auto__;if(cljs.core.truth_(or__3534__auto__))
{return or__3534__auto__;
} else
{return G__8256.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__8256.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8256);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__8256);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map