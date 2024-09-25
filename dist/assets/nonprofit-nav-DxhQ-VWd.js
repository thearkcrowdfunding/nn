import{j as e,D as j,a as w,B as x,b as N,c as y}from"./ui-BcK3PHEv.js";import{r as i,L as d}from"./vendor-EbjP5vkK.js";import{L as b}from"./index-CqNnLhS0.js";import"./stripe-KTjR3gaz.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h=(...t)=>t.filter((n,r,a)=>!!n&&a.indexOf(n)===r).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=i.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:l="",children:o,iconNode:c,...s},u)=>i.createElement("svg",{ref:u,...g,width:n,height:n,stroke:t,strokeWidth:a?Number(r)*24/Number(n):r,className:h("lucide",l),...s},[...c.map(([p,f])=>i.createElement(p,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,n)=>{const r=i.forwardRef(({className:a,...l},o)=>i.createElement(k,{ref:o,iconNode:n,className:h(`lucide-${v(t)}`,a),...l}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=m("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=m("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=m("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function $(){const[t,n]=i.useState(!1),[r,a]=i.useState("EN"),l=[{name:"How to Help",href:"/how-to-help"},{name:"Get Help",href:"/get-help"},{name:"About Us",href:"/about"},{name:"Reports",href:"/reports"}],o=["EN","UA","RU"],c=s=>{a(s),n(!1)};return e.jsxs("nav",{className:"bg-ukraine-yellow shadow-md w-full",children:[e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 w-full",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(d,{to:"/",className:"text-xl font-bold text-ukraine-blue",children:"UNIONTAC"})}),e.jsx("div",{className:"hidden md:flex items-center justify-center flex-1 space-x-8",children:l.map(s=>e.jsx(d,{to:s.href,className:"text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium",children:s.name},s.name))}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"hidden md:block",children:e.jsxs(j,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"ghost",size:"sm",className:"flex items-center space-x-1 text-white",children:[e.jsx("span",{children:r}),e.jsx(C,{className:"h-4 w-4"})]})}),e.jsx(N,{align:"end",children:o.filter(s=>s!==r).map(s=>e.jsx(y,{onSelect:()=>a(s),children:s},s))})]})}),e.jsx(b,{to:"donation-form",smooth:!0,duration:500,className:"bg-ukraine-blue hover:bg-blue-700 text-white text-center py-3 px-6 rounded-md cursor-pointer",children:"Donate"}),e.jsx("div",{className:"md:hidden",children:e.jsxs(x,{variant:"ghost",size:"icon",onClick:()=>n(!t),className:"text-white",children:[t?e.jsx(D,{className:"h-6 w-6"}):e.jsx(L,{className:"h-6 w-6"}),e.jsx("span",{className:"sr-only",children:"Open main menu"})]})})]})]})}),t&&e.jsxs("div",{className:"md:hidden",children:[e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:l.map(s=>e.jsx(d,{to:s.href,className:"text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium",onClick:()=>n(!1),children:s.name},s.name))}),e.jsx("div",{className:"px-2 py-3 border-t border-gray-200",children:e.jsx("div",{className:"flex justify-around",children:o.map(s=>e.jsx("button",{className:`px-3 py-2 rounded-md text-base font-medium ${r===s?"text-ukraine-blue":"text-white hover:text-gray-200"}`,onClick:()=>c(s),children:s},s))})})]})]})}export{$ as NonprofitNavComponent};
//# sourceMappingURL=nonprofit-nav-DxhQ-VWd.js.map
