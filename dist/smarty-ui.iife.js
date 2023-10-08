var SmartyUI=function(e,t){"use strict";const n={size:{type:String,default:"medium"},color:{type:String,default:"blue"},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},o=t.defineComponent({name:"VCButton",props:n,setup(e,{slots:n}){const o={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>t.createVNode("button",{class:`\n          py-${o[e.size].y}\n          px-${o[e.size].x}\n          ${e.round?"rounded-full":"rounded-lg"}\n          bg-${e.color}-${e.plain?"100":"500"}\n          hover:bg-${e.color}-400\n          border-${e.color}-${e.plain,"500"}\n          cursor-pointer\n          border-solid\n          text-${e.plain?e.color+"-500":"white"}\n          text-${o[e.size].text}\n          hover:text-white\n          transition duration-300 ease-in-out transform hover:scale-105\n          mx-1\n          `},[""!==e.icon?t.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",n.default?n.default():""])}}),l={type:{type:String,default:"default"},underline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:String,default:""},target:{type:String,default:"_self"}},r={primary:"blue",success:"green",warning:"yellow",danger:"red",info:"gray",default:"black"},a=t.defineComponent({name:"VCLink",props:l,setup(e,{slots:n,emit:o}){const l=t=>{e.disabled||o("click",t)};return()=>t.createVNode("a",{class:`\n            ${e.disabled?"cursor-not-allowed":"cursor-pointer"}\n            ${e.underline&&!e.disabled?"decoration":""}\n            text-${e.type?r[e.type]+"-500":"black"}\n            m-r-1\n            vc-link\n        `,href:e.disabled||!e.href?void 0:e.href,onClick:l.bind(this),target:e.target,rel:"noopener"},[t.createVNode("span",null,[""!==e.icon?t.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",n.default?n.default():""])])}}),i={install(e){e.component(o.name,o),e.component(a.name,a)}};return e.VCButton=o,e.VCLink=a,e.default=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),e}({},Vue);
//# sourceMappingURL=smarty-ui.iife.js.map
