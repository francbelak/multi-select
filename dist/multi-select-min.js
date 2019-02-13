const e=document;class t{constructor(e,t={},s={}){this.options=Object.assign({},s,t),this._events=[],this.dom={el:this._setElement(e)}}toggle(e){let t=this.dom.el.classList;return void 0!==e?(t[e?"remove":"add"]("si-off"),this):(t.toggle("si-off"),this)}on(e,t,s=null){return(s||this.dom.el).addEventListener(e,t=t.bind(this),!0),this._events.push({name:e,fn:t,el:s}),this}getElement(){return this.dom.el}remove(){this._events=this._events.filter(e=>(e.el||this.dom.el).removeEventListener(e.name,e.fn,!0)),this.dom.el.parentNode.removeChild(this.dom.el),this.dom=this.options=null}_setElement(t){if(!t&&!t.nodeType&&"string"!=typeof t)throw new Error("Wrong element type provided!");return t.nodeType?t:(this.options.parent||e).querySelector(t)}_trigger(t,s=null){let i;"function"==typeof CustomEvent?i=new CustomEvent(t,{detail:s}):(i=e.createEvent("Event")).initEvent(t,!0,!0),this.dom.el.dispatchEvent(i)}}var s={items:[],display:"value",current:null,parent:null,maxHeight:0,sort:!0,order:"desc",placeholder:"Select items",more:"(+{X} more)"};const i=document;export default class extends t{constructor(e,t={}){super(e,t,s),this.options.sort&&(this.options.items=this._sortItems(t.items)),this.options.items=this._convertItems(t.items,t.current||[]),this._renderInit(),this._setResultMessage(),this._bindEvents()}_bindEvents(){this.on("keyup",e=>{"Escape"!==e.key&&27!==e.keyCode||this.toggle(!1)},i),this.on("click",e=>e.target.classList.contains("si-item")?this._setCurrent(e)._setResultMessage():this.dom.el.contains(e.target)?void this.toggle():this.toggle(!1),i)}getItems(){return Array.from(this.options.items.values())}getCurrent(){return this.getItems().filter(e=>e.selected)}findItem(e){let t=this.options.display;return e=e.nodeName?e.dataset.value:e,this.options.items.find(s=>s[t]===e)}_setCurrent(e){let t=e.target,s=parseInt(t.dataset.key,10),i=this.options.items.get(s);return i.selected=t.classList.toggle("si-selected"),this.options.items.set(s,i),this._trigger("change",i),this}_setResultMessage(){let e=this.getCurrent(),t=this.options.display,s=e.length,i="";switch(s){case 1:i=e[0][t];break;case 0:i=this.options.placeholder;break;default:i=`${e[0][t]} ${this.options.more.replace("{X}",s-1)}`}this.dom.result.classList[s?"add":"remove"]("si-selection"),this.dom.result.innerHTML=i}_convertItems(e=[],t=null){let s=this.options.display,i=new Map,n=0;return e.forEach(e=>{"object"!=typeof e&&(e={[s]:e}),e.selected=e[s]===t||t.indexOf(e[s])>-1,i.set(n++,e)}),i}_renderInit(){let e=i.createDocumentFragment();return this.dom.el.classList.add("si-off","si-wrap"),this.dom.result=e.appendChild(this._renderResultDiv()),e.appendChild(this._renderList()),this.dom.el.appendChild(e)}_renderResultDiv(){let e=i.createElement("div");return e.className="si-result",e}_renderList(){let e=i.createElement("div"),t=i.createElement("ul"),s=this.options.maxHeight;return e.className="si-list",s&&(e.style.maxHeight=s+"px"),t.innerHTML=this._renderListItems(),e.appendChild(t),e}_renderListItems(){let e,t=this.options.items,s=this.options.display,i="";return t.forEach((t,n)=>{e=t.selected?" si-selected":"",i+=`<li class="si-item${e}" data-key="${n}">${t[s]}</li>`}),i}_sortItems(){let e="desc"===this.options.order?1:-1,t=this.options.display;this.options.items.sort((s,i)=>s[t]<i[t]?-e:s[t]>i[t]?e:0)}}
//# sourceMappingURL=multi-select-min.js.map
