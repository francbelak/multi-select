!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).MultiSelect=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var c=function(t){return"object"==typeof t?null!==t:"function"==typeof t},s=function(t){if(!c(t))throw TypeError(t+" is not an object!");return t},a=function(t){try{return!!t()}catch(t){return!0}},f=!a(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});function l(t,e){return t(e={exports:{}},e.exports),e.exports}var p,h=l(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),v=h.document,d=c(v)&&c(v.createElement),y=function(t){return d?v.createElement(t):{}},g=!f&&!a(function(){return 7!=Object.defineProperty(y("div"),"a",{get:function(){return 7}}).a}),m=function(t,e){if(!c(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!c(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!c(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!c(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},_=Object.defineProperty,b={f:f?Object.defineProperty:function(t,e,n){if(s(t),e=m(e,!0),s(n),g)try{return _(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},E={}.hasOwnProperty,S=function(t,e){return E.call(t,e)},k={}.toString,w=function(t){return k.call(t).slice(8,-1)},x=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==w(t)?t.split(""):Object(t)},O=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},j=function(t){return x(O(t))},L=Math.ceil,T=Math.floor,A=function(t){return isNaN(t=+t)?0:(t>0?T:L)(t)},M=Math.min,I=function(t){return t>0?M(A(t),9007199254740991):0},P=Math.max,C=Math.min,R=l(function(t){var e=t.exports={version:"2.6.3"};"number"==typeof __e&&(__e=e)}),F=(R.version,l(function(t){var e=h["__core-js_shared__"]||(h["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:R.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),N=0,D=Math.random(),G=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++N+D).toString(36))},H=F("keys"),$=function(t){return H[t]||(H[t]=G(t))},V=(p=!1,function(t,e,n){var r,o=j(t),i=I(o.length),u=function(t,e){return(t=A(t))<0?P(t+e,0):C(t,e)}(n,i);if(p&&e!=e){for(;i>u;)if((r=o[u++])!=r)return!0}else for(;i>u;u++)if((p||u in o)&&o[u]===e)return p||u||0;return!p&&-1}),z=$("IE_PROTO"),K="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),W=Object.keys||function(t){return function(t,e){var n,r=j(t),o=0,i=[];for(n in r)n!=z&&S(r,n)&&i.push(n);for(;e.length>o;)S(r,n=e[o++])&&(~V(i,n)||i.push(n));return i}(t,K)},q=f?Object.defineProperties:function(t,e){s(t);for(var n,r=W(e),o=r.length,i=0;o>i;)b.f(t,n=r[i++],e[n]);return t},B=h.document,U=B&&B.documentElement,X=$("IE_PROTO"),Y=function(){},J=function(){var t,e=y("iframe"),n=K.length;for(e.style.display="none",U.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),J=t.F;n--;)delete J.prototype[K[n]];return J()},Q=Object.create||function(t,e){var n;return null!==t?(Y.prototype=s(t),n=new Y,Y.prototype=null,n[X]=t):n=J(),void 0===e?n:q(n,e)},Z=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},tt=f?function(t,e,n){return b.f(t,e,Z(1,n))}:function(t,e,n){return t[e]=n,t},et=l(function(t){var e=G("src"),n=Function.toString,r=(""+n).split("toString");R.inspectSource=function(t){return n.call(t)},(t.exports=function(t,n,o,i){var u="function"==typeof o;u&&(S(o,"name")||tt(o,"name",n)),t[n]!==o&&(u&&(S(o,e)||tt(o,e,t[n]?""+t[n]:r.join(String(n)))),t===h?t[n]=o:i?t[n]?t[n]=o:tt(t,n,o):(delete t[n],tt(t,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||n.call(this)})}),nt=function(t,e,n){for(var r in e)et(t,r,e[r],n);return t},rt=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},ot=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t},it=function(t,e,n,r){try{return r?e(s(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&s(o.call(t)),e}},ut={},ct=l(function(t){var e=F("wks"),n=h.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:G)("Symbol."+t))}).store=e}),st=ct("iterator"),at=Array.prototype,ft=function(t){return void 0!==t&&(ut.Array===t||at[st]===t)},lt=ct("toStringTag"),pt="Arguments"==w(function(){return arguments}()),ht=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),lt))?n:pt?w(e):"Object"==(r=w(e))&&"function"==typeof e.callee?"Arguments":r},vt=ct("iterator"),dt=R.getIteratorMethod=function(t){if(null!=t)return t[vt]||t["@@iterator"]||ut[ht(t)]},yt=l(function(t){var e={},n={},r=t.exports=function(t,r,o,i,u){var c,a,f,l,p=u?function(){return t}:dt(t),h=rt(o,i,r?2:1),v=0;if("function"!=typeof p)throw TypeError(t+" is not iterable!");if(ft(p)){for(c=I(t.length);c>v;v++)if((l=r?h(s(a=t[v])[0],a[1]):h(t[v]))===e||l===n)return l}else for(f=p.call(t);!(a=f.next()).done;)if((l=it(f,h,a.value,r))===e||l===n)return l};r.BREAK=e,r.RETURN=n}),gt=function(t,e,n){var r,o,i,u,c=t&gt.F,s=t&gt.G,a=t&gt.S,f=t&gt.P,l=t&gt.B,p=s?h:a?h[e]||(h[e]={}):(h[e]||{}).prototype,v=s?R:R[e]||(R[e]={}),d=v.prototype||(v.prototype={});for(r in s&&(n=e),n)i=((o=!c&&p&&void 0!==p[r])?p:n)[r],u=l&&o?rt(i,h):f&&"function"==typeof i?rt(Function.call,i):i,p&&et(p,r,i,t&gt.U),v[r]!=i&&tt(v,r,u),f&&d[r]!=i&&(d[r]=i)};h.core=R,gt.F=1,gt.G=2,gt.S=4,gt.P=8,gt.B=16,gt.W=32,gt.U=64,gt.R=128;var mt=gt,_t=b.f,bt=ct("toStringTag"),Et=function(t,e,n){t&&!S(t=n?t:t.prototype,bt)&&_t(t,bt,{configurable:!0,value:e})},St={};tt(St,ct("iterator"),function(){return this});var kt=function(t,e,n){t.prototype=Q(St,{next:Z(1,n)}),Et(t,e+" Iterator")},wt=function(t){return Object(O(t))},xt=$("IE_PROTO"),Ot=Object.prototype,jt=Object.getPrototypeOf||function(t){return t=wt(t),S(t,xt)?t[xt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Ot:null},Lt=ct("iterator"),Tt=!([].keys&&"next"in[].keys()),At=function(){return this},Mt=function(t,e,n,r,o,i,u){kt(n,e,r);var c,s,a,f=function(t){if(!Tt&&t in v)return v[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",p="values"==o,h=!1,v=t.prototype,d=v[Lt]||v["@@iterator"]||o&&v[o],y=d||f(o),g=o?p?f("entries"):y:void 0,m="Array"==e&&v.entries||d;if(m&&(a=jt(m.call(new t)))!==Object.prototype&&a.next&&(Et(a,l,!0),"function"!=typeof a[Lt]&&tt(a,Lt,At)),p&&d&&"values"!==d.name&&(h=!0,y=function(){return d.call(this)}),(Tt||h||!v[Lt])&&tt(v,Lt,y),ut[e]=y,ut[l]=At,o)if(c={values:p?y:f("values"),keys:i?y:f("keys"),entries:g},u)for(s in c)s in v||et(v,s,c[s]);else mt(mt.P+mt.F*(Tt||h),e,c);return c},It=function(t,e){return{value:e,done:!!t}},Pt=ct("species"),Ct=l(function(t){var e=G("meta"),n=b.f,r=0,o=Object.isExtensible||function(){return!0},i=!a(function(){return o(Object.preventExtensions({}))}),u=function(t){n(t,e,{value:{i:"O"+ ++r,w:{}}})},s=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!c(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!S(t,e)){if(!o(t))return"F";if(!n)return"E";u(t)}return t[e].i},getWeak:function(t,n){if(!S(t,e)){if(!o(t))return!0;if(!n)return!1;u(t)}return t[e].w},onFreeze:function(t){return i&&s.NEED&&o(t)&&!S(t,e)&&u(t),t}}}),Rt=(Ct.KEY,Ct.NEED,Ct.fastKey,Ct.getWeak,Ct.onFreeze,function(t,e){if(!c(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}),Ft=b.f,Nt=Ct.fastKey,Dt=f?"_s":"size",Gt=function(t,e){var n,r=Nt(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n},Ht={getConstructor:function(t,e,n,r){var o=t(function(t,i){ot(t,o,e,"_i"),t._t=e,t._i=Q(null),t._f=void 0,t._l=void 0,t[Dt]=0,null!=i&&yt(i,n,t[r],t)});return nt(o.prototype,{clear:function(){for(var t=Rt(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[Dt]=0},delete:function(t){var n=Rt(this,e),r=Gt(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[Dt]--}return!!r},forEach:function(t){Rt(this,e);for(var n,r=rt(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!Gt(Rt(this,e),t)}}),f&&Ft(o.prototype,"size",{get:function(){return Rt(this,e)[Dt]}}),o},def:function(t,e,n){var r,o,i=Gt(t,e);return i?i.v=n:(t._l=i={i:o=Nt(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[Dt]++,"F"!==o&&(t._i[o]=i)),t},getEntry:Gt,setStrong:function(t,e,n){Mt(t,e,function(t,n){this._t=Rt(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?It(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,It(1))},n?"entries":"values",!n,!0),function(t){var e=h[t];f&&e&&!e[Pt]&&b.f(e,Pt,{configurable:!0,get:function(){return this}})}(e)}},$t=ct("iterator"),Vt=!1;try{[7][$t]().return=function(){Vt=!0}}catch(t){}var zt,Kt,Wt=function(t,e){if(!e&&!Vt)return!1;var n=!1;try{var r=[7],o=r[$t]();o.next=function(){return{done:n=!0}},r[$t]=function(){return o},t(r)}catch(t){}return n},qt={f:{}.propertyIsEnumerable},Bt=Object.getOwnPropertyDescriptor,Ut={f:f?Bt:function(t,e){if(t=j(t),e=m(e,!0),g)try{return Bt(t,e)}catch(t){}if(S(t,e))return Z(!qt.f.call(t,e),t[e])}},Xt=function(t,e){if(s(t),!c(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},Yt={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=rt(Function.call,Ut.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return Xt(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:Xt}.set,Jt=(function(t,e,n,r,o,i){var u=h[t],s=u,f=o?"set":"add",l=s&&s.prototype,p={},v=function(t){var e=l[t];et(l,t,"delete"==t?function(t){return!(i&&!c(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(i&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return i&&!c(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof s&&(i||l.forEach&&!a(function(){(new s).entries().next()}))){var d=new s,y=d[f](i?{}:-0,1)!=d,g=a(function(){d.has(1)}),m=Wt(function(t){new s(t)}),_=!i&&a(function(){for(var t=new s,e=5;e--;)t[f](e,e);return!t.has(-0)});m||((s=e(function(e,n){ot(e,s,t);var r=function(t,e,n){var r,o=e.constructor;return o!==n&&"function"==typeof o&&(r=o.prototype)!==n.prototype&&c(r)&&Yt&&Yt(t,r),t}(new u,e,s);return null!=n&&yt(n,o,r[f],r),r})).prototype=l,l.constructor=s),(g||_)&&(v("delete"),v("has"),o&&v("get")),(_||y)&&v(f),i&&l.clear&&delete l.clear}else s=r.getConstructor(e,t,o,f),nt(s.prototype,n),Ct.NEED=!0;Et(s,t),p[t]=s,mt(mt.G+mt.W+mt.F*(s!=u),p),i||r.setStrong(s,t,o)}("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=Ht.getEntry(Rt(this,"Map"),t);return e&&e.v},set:function(t,e){return Ht.def(Rt(this,"Map"),0===t?0:t,e)}},Ht,!0),function(t){return function(e,n){var r,o,i=String(O(e)),u=A(n),c=i.length;return u<0||u>=c?t?"":void 0:(r=i.charCodeAt(u))<55296||r>56319||u+1===c||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):r:t?i.slice(u,u+2):o-56320+(r-55296<<10)+65536}}),Qt=Jt(!0),Zt=function(t,e,n){return e+(n?Qt(t,e).length:1)},te=RegExp.prototype.exec,ee=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==ht(t))throw new TypeError("RegExp#exec called on incompatible receiver");return te.call(t,e)},ne=RegExp.prototype.exec,re=String.prototype.replace,oe=ne,ie=(zt=/a/,Kt=/b*/g,ne.call(zt,"a"),ne.call(Kt,"a"),0!==zt.lastIndex||0!==Kt.lastIndex),ue=void 0!==/()??/.exec("")[1];(ie||ue)&&(oe=function(t){var e,n,r,o,i=this;return ue&&(n=new RegExp("^"+i.source+"$(?!\\s)",function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}.call(i))),ie&&(e=i.lastIndex),r=ne.call(i,t),ie&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),ue&&r&&r.length>1&&re.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});var ce=oe;mt({target:"RegExp",proto:!0,forced:ce!==/./.exec},{exec:ce});var se=ct("species"),ae=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),fe=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}(),le=Math.max,pe=Math.min,he=Math.floor,ve=/\$([$&`']|\d\d?|<[^>]*>)/g,de=/\$([$&`']|\d\d?)/g;!function(t,e,n){var r=ct(t),o=!a(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)}),i=o?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[se]=function(){return n}),n[r](""),!e}):void 0;if(!o||!i||"replace"===t&&!ae||"split"===t&&!fe){var u=/./[r],c=n(O,r,""[t],function(t,e,n,r,i){return e.exec===ce?o&&!i?{done:!0,value:u.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),s=c[0],f=c[1];et(String.prototype,t,s),tt(RegExp.prototype,r,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}}("replace",2,function(t,e,n,r){return[function(r,o){var i=t(this),u=null==r?void 0:r[e];return void 0!==u?u.call(r,i,o):n.call(String(i),r,o)},function(t,e){var i=r(n,t,this,e);if(i.done)return i.value;var u=s(t),c=String(this),a="function"==typeof e;a||(e=String(e));var f=u.global;if(f){var l=u.unicode;u.lastIndex=0}for(var p=[];;){var h=ee(u,c);if(null===h)break;if(p.push(h),!f)break;""===String(h[0])&&(u.lastIndex=Zt(c,I(u.lastIndex),l))}for(var v,d="",y=0,g=0;g<p.length;g++){h=p[g];for(var m=String(h[0]),_=le(pe(A(h.index),c.length),0),b=[],E=1;E<h.length;E++)b.push(void 0===(v=h[E])?v:String(v));var S=h.groups;if(a){var k=[m].concat(b,_,c);void 0!==S&&k.push(S);var w=String(e.apply(void 0,k))}else w=o(m,c,_,b,S,e);_>=y&&(d+=c.slice(y,_)+w,y=_+m.length)}return d+c.slice(y)}];function o(t,e,r,o,i,u){var c=r+t.length,s=o.length,a=de;return void 0!==i&&(i=wt(i),a=ve),n.call(u,a,function(n,u){var a;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":a=i[u.slice(1,-1)];break;default:var f=+u;if(0===f)return n;if(f>s){var l=he(f/10);return 0===l?n:l<=s?void 0===o[l-1]?u.charAt(1):o[l-1]+u.charAt(1):n}a=o[f-1]}return void 0===a?"":a})}});var ye=Array.isArray||function(t){return"Array"==w(t)},ge=ct("species"),me=function(t,e){return new(function(t){var e;return ye(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!ye(e.prototype)||(e=void 0),c(e)&&null===(e=e[ge])&&(e=void 0)),void 0===e?Array:e}(t))(e)},_e=ct("unscopables"),be=Array.prototype;null==be[_e]&&tt(be,_e,{});var Ee,Se,ke,we,xe,Oe,je,Le,Te,Ae=function(t){be[_e][t]=!0},Me=(ke=1==(Ee=5),we=2==Ee,xe=3==Ee,Oe=4==Ee,je=6==Ee,Le=5==Ee||je,Te=Se||me,function(t,e,n){for(var r,o,i=wt(t),u=x(i),c=rt(e,n,3),s=I(u.length),a=0,f=ke?Te(t,s):we?Te(t,0):void 0;s>a;a++)if((Le||a in u)&&(o=c(r=u[a],a,i),Ee))if(ke)f[a]=o;else if(o)switch(Ee){case 3:return!0;case 5:return r;case 6:return a;case 2:f.push(r)}else if(Oe)return!1;return je?-1:xe||Oe?Oe:f}),Ie=!0;"find"in[]&&Array(1).find(function(){Ie=!1}),mt(mt.P+mt.F*Ie,"Array",{find:function(t){return Me(this,t,arguments.length>1?arguments[1]:void 0)}}),Ae("find");var Pe=Mt(Array,"Array",function(t,e){this._t=j(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,It(1)):It(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");ut.Arguments=ut.Array,Ae("keys"),Ae("values"),Ae("entries");for(var Ce=ct("iterator"),Re=ct("toStringTag"),Fe=ut.Array,Ne={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},De=W(Ne),Ge=0;Ge<De.length;Ge++){var He,$e=De[Ge],Ve=Ne[$e],ze=h[$e],Ke=ze&&ze.prototype;if(Ke&&(Ke[Ce]||tt(Ke,Ce,Fe),Ke[Re]||tt(Ke,Re,$e),ut[$e]=Fe,Ve))for(He in Pe)Ke[He]||et(Ke,He,Pe[He],!0)}var We=Jt(!0);Mt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=We(e,n),this._i+=t.length,{value:t,done:!1})});var qe=function(t,e,n){e in t?b.f(t,e,Z(0,n)):t[e]=n};mt(mt.S+mt.F*!Wt(function(t){}),"Array",{from:function(t){var e,n,r,o,i=wt(t),u="function"==typeof this?this:Array,c=arguments.length,s=c>1?arguments[1]:void 0,a=void 0!==s,f=0,l=dt(i);if(a&&(s=rt(s,c>2?arguments[2]:void 0,2)),null==l||u==Array&&ft(l))for(n=new u(e=I(i.length));e>f;f++)qe(n,f,a?s(i[f],f):i[f]);else for(o=l.call(i),n=new u;!(r=o.next()).done;f++)qe(n,f,a?it(o,s,[r.value,f],!0):r.value);return n.length=f,n}});var Be=b.f,Ue=Function.prototype,Xe=/^\s*function ([^ (]*)/;"name"in Ue||f&&Be(Ue,"name",{configurable:!0,get:function(){try{return(""+this).match(Xe)[1]}catch(t){return""}}});var Ye={f:Object.getOwnPropertySymbols},Je=Object.assign,Qe=!Je||a(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=Je({},t)[n]||Object.keys(Je({},e)).join("")!=r})?function(t,e){for(var n=wt(t),r=arguments.length,o=1,i=Ye.f,u=qt.f;r>o;)for(var c,s=x(arguments[o++]),a=i?W(s).concat(i(s)):W(s),f=a.length,l=0;f>l;)u.call(s,c=a[l++])&&(n[c]=s[c]);return n}:Je;mt(mt.S+mt.F,"Object",{assign:Qe});var Ze=document,tn=function(){function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e(this,t),this.options=Object.assign({},o,r),this._events=[],this.dom={el:this._setElement(n)}}return r(t,[{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this.dom.el.classList;return void 0!==t?(e[t?"remove":"add"]("si-off"),this):(e.toggle("si-off"),this)}},{key:"on",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(n||this.dom.el).addEventListener(t,e=e.bind(this),!0),this._events.push({name:t,fn:e,el:n}),this}},{key:"getElement",value:function(){return this.dom.el}},{key:"remove",value:function(){var t=this;this._events=this._events.filter(function(e){return(e.el||t.dom.el).removeEventListener(e.name,e.fn,!0)}),this.dom.el.parentNode.removeChild(this.dom.el),this.dom=this.options=null}},{key:"_setElement",value:function(t){if(!t&&!t.nodeType&&"string"!=typeof t)throw new Error("Wrong element type provided!");return t.nodeType?t:(this.options.parent||Ze).querySelector(t)}},{key:"_trigger",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"function"==typeof CustomEvent?e=new CustomEvent(t,{detail:n,bubbles:!0,cancelable:!0}):(e=Ze.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),this.dom.el.dispatchEvent(e)}}]),t}(),en={items:[],display:"value",current:null,parent:null,maxHeight:0,sort:!0,order:"desc",placeholder:"Select items",more:"(+{X} more)"},nn=document;return function(n){function c(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(this,c),(n=u(this,o(c).call(this,t,r,en))).options.sort&&(n.options.items=n._sortItems(r.items)),n.options.items=r.items&&r.items.length?n._convertItems(r.items):[],r.current&&r.current.length&&(r.current=n._convertItems(r.current),n._setSelected(r.current)),n._renderInit(),n._setResultMessage(),n._bindEvents(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(c,tn),r(c,[{key:"_bindEvents",value:function(){var t=this;this.on("keyup",function(e){"Escape"!==e.key&&27!==e.keyCode||t.toggle(!1)},nn),this.on("click",function(e){return e.target.classList.contains("si-item")?t._setCurrent(e)._setResultMessage():t.dom.el.contains(e.target)?void t.toggle():t.toggle(!1)},nn)}},{key:"getItems",value:function(){return Array.from(this.options.items.values())}},{key:"getCurrent",value:function(){return this.getItems().filter(function(t){return t.selected})}},{key:"setCurrent",value:function(t){var e=this,n=this.options.items,r=this.options.display;t=Array.isArray(t)?t:[t],t=this._convertItems(t),console.log("setting currents",t),t.forEach(function(t){n.forEach(function(n,o){n[r]===t[r]&&(e.dom.el.querySelector('.si-item[data-key="'.concat(o,'"]')).classList.add("si-selected"),n.selected=!0)})}),this._setResultMessage()}},{key:"findItem",value:function(t){var e=this.options.display;return t=t.nodeName?t.dataset.value:t,this.options.items.find(function(n){return n[e]===t})}},{key:"_setCurrent",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.target,r=parseInt(n.dataset.key,10),o=this.options.items.get(r);return o.selected=n.classList.toggle("si-selected"),this.options.items.set(r,o),e&&this._trigger("change",o),this}},{key:"_setSelected",value:function(t){var e=this.options.items,n=this.options.display;t.forEach(function(t){e.forEach(function(e){e[n]===t[n]&&(e.selected=!0)})})}},{key:"_setResultMessage",value:function(){var t=this.getCurrent(),e=this.options.display,n=t.length,r="";switch(n){case 1:r=t[0][e];break;case 0:r=this.options.placeholder;break;default:r="".concat(t[0][e]," ").concat(this.options.more.replace("{X}",n-1))}this.dom.result.classList[n?"add":"remove"]("si-selection"),this.dom.result.innerHTML=r}},{key:"_convertItems",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=this.options.display,r=new Map,o=0;return e.forEach(function(e){"object"!==t(e)&&(e=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,e)),r.set(o++,e)}),r}},{key:"_renderInit",value:function(){var t=nn.createDocumentFragment();return this.dom.el.classList.add("si-off","si-wrap"),this.dom.result=t.appendChild(this._renderResultDiv()),t.appendChild(this._renderList()),this.dom.el.appendChild(t)}},{key:"_renderResultDiv",value:function(){var t=nn.createElement("div");return t.className="si-result",t}},{key:"_renderList",value:function(){var t=nn.createElement("div"),e=nn.createElement("ul"),n=this.options.maxHeight;return t.className="si-list",n&&(t.style.maxHeight=n+"px"),e.innerHTML=this._renderListItems(),t.appendChild(e),t}},{key:"_renderListItems",value:function(){var t,e=this.options.items,n=this.options.display,r="";return e.forEach(function(e,o){t=e.selected?" si-selected":"",r+='<li class="si-item'.concat(t,'" data-key="').concat(o,'">').concat(e[n],"</li>")}),r}},{key:"_sortItems",value:function(){var t="desc"===this.options.order?1:-1,e=this.options.display;this.options.items.sort(function(n,r){return n[e]<r[e]?-t:n[e]>r[e]?t:0})}}]),c}()});
//# sourceMappingURL=multi-select-umd.js.map
