import{j as s}from"./index-GsJMJi6y.js";import{r as a,u as E}from"./react-CcRDz-_R.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k=(...n)=>n.filter((r,o,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===o).join(" ").trim();/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=a.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:d="",children:t,iconNode:h,...m},g)=>a.createElement("svg",{ref:g,...$,width:r,height:r,stroke:n,strokeWidth:c?Number(o)*24/Number(r):o,className:k("lucide",d),...m},[...h.map(([x,p])=>a.createElement(x,p)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(n,r)=>{const o=a.forwardRef(({className:c,...d},t)=>a.createElement(T,{ref:t,iconNode:r,className:k(`lucide-${M(n)}`,c),...d}));return o.displayName=`${n}`,o};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],A=v("Maximize2",z);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],q=v("Search",I);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],O=v("Users",F);function H(){const n=E(),[r,o]=a.useState(""),[c,d]=a.useState("all"),[t,h]=a.useState([0,2e3]),[m,g]=a.useState([]),[x,p]=a.useState(!0),[j,w]=a.useState(null),[i,f]=a.useState(1),[l]=a.useState(6);a.useEffect(()=>{fetch("/db.json").then(e=>{if(!e.ok)throw new Error("Failed to fetch rooms");return e.json()}).then(e=>{g(e.rooms||[]),p(!1)}).catch(e=>{w(e.message),p(!1)})},[]);const u=m.filter(e=>{const R=e.title.toLowerCase().includes(r.toLowerCase())||e.description.toLowerCase().includes(r.toLowerCase()),P=c==="all"||e.type===c,L=e.price>=t[0]&&e.price<=t[1];return R&&P&&L}),y=i*l,b=y-l,N=u.slice(b,y),C=()=>{i<Math.ceil(u.length/l)&&f(i+1)},_=()=>{i>1&&f(i-1)},S=[...new Set(m.map(e=>e.type))];return x?s.jsx("div",{className:"loading",children:"Loading rooms..."}):j?s.jsxs("div",{className:"error",children:["Error: ",j]}):s.jsxs("div",{className:"rooms-page",children:[s.jsx("div",{className:"hero-section",style:{backgroundImage:"url('https://iun.www.vaxvacationaccess.com/globalassets/suppliers/iun/images/showcase_images/23-uor-2933861_ous23_uor_banner_re-designs_vax_updates_vax_site_cyovp_guestroom_674x318.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"100vh",width:"100%"}}),s.jsxs("div",{className:"filters-section",children:[s.jsx("h2",{children:"Find Your Perfect Room"}),s.jsxs("div",{className:"filter-group",children:[s.jsxs("div",{className:"filter-input",children:[s.jsx(q,{size:18,className:"filter-icon"}),s.jsx("input",{type:"text",placeholder:"Search rooms...",value:r,onChange:e=>o(e.target.value)})]}),s.jsxs("div",{className:"filter-input",children:[s.jsx(O,{size:18,className:"filter-icon"}),s.jsxs("select",{value:c,onChange:e=>d(e.target.value),children:[s.jsx("option",{value:"all",children:"All Room Types"}),S.map(e=>s.jsx("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))]})]}),s.jsxs("div",{className:"filter-input price-range",children:[s.jsx(A,{size:18,className:"filter-icon"}),s.jsxs("label",{children:["Price Range: $",t[0]," - $",t[1]]}),s.jsxs("div",{className:"range-inputs",children:[s.jsx("input",{type:"range",min:"0",max:"2000",step:"100",value:t[0],onChange:e=>h([parseInt(e.target.value),t[1]])}),s.jsx("input",{type:"range",min:"0",max:"2000",step:"100",value:t[1],onChange:e=>h([t[0],parseInt(e.target.value)])})]})]})]})]}),s.jsx("div",{className:"room-grid",children:N.length>0?N.map(e=>s.jsxs("div",{className:"room-card",onClick:()=>n(`/rooms/${e.id}`),children:[s.jsx("img",{src:e.image,alt:e.title}),s.jsxs("div",{className:"room-card-content",children:[s.jsx("h3",{children:e.title}),s.jsx("p",{children:e.description}),s.jsx("button",{children:"View Details"})]})]},e.id)):s.jsx("p",{className:"no-results",children:"No rooms match your filters."})}),s.jsxs("div",{className:"pagination",children:[s.jsx("button",{onClick:_,disabled:i===1,className:i===1?"disabled":"",children:"Previous"}),s.jsxs("span",{children:["Page ",i," of ",Math.ceil(u.length/l)]}),s.jsx("button",{onClick:C,disabled:i===Math.ceil(u.length/l),className:i===Math.ceil(u.length/l)?"disabled":"",children:"Next"})]})]})}export{H as RoomsPage};
