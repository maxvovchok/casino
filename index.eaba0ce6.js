function t(t){return t&&t.__esModule?t.default:t}const e={slotItemAll:document.querySelectorAll(".slotItem"),startBtn:document.querySelector(".startBtn")};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i;return t};const{slotItemAll:o}=e;const s=new class{slot(t,e){const i=(e+2)*this.icons+Math.round(Math.random()*this.icons),o=getComputedStyle(t),s=parseFloat(o.backgroundPositionY);setTimeout((()=>{t.style.transition=`background-position-y ${(8+1*i)*this.time}ms cubic-bezier(.41,-0.01,.63,1.09)`,t.style.backgroundPositionY=`${s+i*this.height}px`}),150*e)}slotAll(){[...o].forEach(((t,e)=>{this.slot(t,e)}))}constructor(e,o,s,n){t(i)(this,"width",void 0),t(i)(this,"height",void 0),t(i)(this,"icons",void 0),t(i)(this,"time",void 0),this.width=e,this.height=o,this.icons=s,this.time=n}}(79,79,9,100),{startBtn:n}=e;n.addEventListener("click",(()=>{setTimeout(s.slotAll(s),0)}));
//# sourceMappingURL=index.eaba0ce6.js.map