import{j as s,m as n}from"./index-GsJMJi6y.js";import{u,e as g,r as l}from"./react-CcRDz-_R.js";import{d as N,e as y,f as v,g as w,h as b,i as z,j as F}from"./index-BhZx81v5.js";function A(){var d,h,x;const t=u(),{id:o}=g(),[a,j]=l.useState(null),[p,r]=l.useState(!0),[c,m]=l.useState(null);return l.useEffect(()=>{fetch("/db.json").then(e=>{if(!e.ok)throw new Error("Failed to fetch room details");return e.json()}).then(e=>{const i=e.rooms.find(f=>f.id===o);i?j(i):m("Room not found"),r(!1)}).catch(e=>{m(e.message),r(!1)})},[o]),p?s.jsx("p",{className:"loading",children:"Loading room details..."}):c?s.jsxs("p",{className:"error",children:["Error: ",c]}):a?s.jsxs(n.div,{className:"room-detail-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsxs(n.div,{className:"back-button",onClick:()=>t("/rooms"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[s.jsx(N,{size:18}),s.jsx("span",{children:"Back to Rooms"})]}),s.jsxs(n.div,{className:"image-gallery",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.5},children:[s.jsx("img",{src:a.image,alt:a.title,className:"main-image"}),s.jsx("div",{className:"thumbnail-gallery",children:(d=a.images)==null?void 0:d.map((e,i)=>s.jsx(n.img,{src:e,alt:`Room ${i+1}`,className:"thumbnail",whileHover:{scale:1.1},whileTap:{scale:.9}},i))})]}),s.jsx(n.h1,{className:"room-title",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:a.title}),s.jsxs(n.p,{className:"room-description",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.5},children:["Welcome to the ",s.jsx("span",{className:"highlight",children:a.title}),", a luxurious and spacious retreat designed for comfort and relaxation. This room features ",s.jsxs("span",{className:"highlight",children:[a.size,"m²"]})," of elegantly furnished space, perfect for up to ",s.jsxs("span",{className:"highlight",children:[a.maxGuests," guests"]}),". Enjoy modern amenities such as ",s.jsx("span",{className:"highlight",children:"free Wi-Fi"}),", a ",s.jsx("span",{className:"highlight",children:"private bathroom"}),", a ",s.jsx("span",{className:"highlight",children:"kitchenette"}),", and a ",s.jsx("span",{className:"highlight",children:"smart TV"}),". Whether you're here for business or leisure, our room offers everything you need for a memorable stay."]}),s.jsxs(n.div,{className:"info-section",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.5},children:[s.jsx("h2",{children:"Room Information"}),s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Price:"}),s.jsxs("span",{className:"info-value",children:["$",a.price,"/night"]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Size:"}),s.jsxs("span",{className:"info-value",children:[a.size,"m²"]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Max Capacity:"}),s.jsxs("span",{className:"info-value",children:[a.maxGuests," guests"]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Pets Allowed:"}),s.jsx("span",{className:"info-value",children:a.petsAllowed?"Yes":"No"})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Free Breakfast:"}),s.jsx("span",{className:"info-value",children:a.freeBreakfast?"Yes":"No"})]})]})]}),s.jsxs(n.div,{className:"amenities-rating-container",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.5},children:[s.jsxs("div",{className:"extra-section",children:[s.jsx("h2",{children:"Amenities"}),s.jsx("ul",{className:"extra-list",children:(h=a.amenities)==null?void 0:h.map((e,i)=>s.jsxs(n.li,{className:"extra-item",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e==="Wi-Fi"&&s.jsx(y,{size:16}),e==="Coffee"&&s.jsx(v,{size:16}),e==="TV"&&s.jsx(w,{size:16}),e==="Shower"&&s.jsx(b,{size:16}),e==="Kitchenette"&&s.jsx(z,{size:16}),s.jsx("span",{children:e})]},i))})]}),s.jsxs("div",{className:"rating-section",children:[s.jsx("h2",{children:"Rating & Reviews"}),s.jsxs("div",{className:"rating",children:[Array.from({length:5},(e,i)=>s.jsx(F,{size:20,color:i<(a.rating||0)?"#FFD700":"#D3D3D3"},i)),s.jsxs("span",{children:[a.rating||0," (",((x=a.reviews)==null?void 0:x.length)||0," reviews)"]})]}),s.jsx("div",{className:"reviews",children:(a.reviews||[]).map((e,i)=>s.jsxs(n.div,{className:"review",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:i*.2,duration:.5},children:[s.jsx("h3",{children:e.name}),s.jsx("p",{children:e.comment})]},i))})]})]}),s.jsxs(n.div,{className:"map-section",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1.2,duration:.5},children:[s.jsx("h2",{children:"Location"}),s.jsx("div",{className:"map",children:s.jsx("iframe",{title:"Room Location",src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${a.location.lat}!2d${a.location.lng}!3d${a.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA3LjkiTiAxMTjCsDE0JzM3LjQiVw!5e0!3m2!1sen!2sus!4v1633023222534!5m2!1sen!2sus`,width:"100%",height:"300",style:{border:0},allowFullScreen:!0,loading:"lazy"})})]}),s.jsx(n.div,{className:"booking-section",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1.4,duration:.5},children:s.jsx("button",{className:"booking-button",onClick:()=>t(`/booking?roomId=${a.id}`),children:"Book Now"})})]}):s.jsx("p",{className:"error",children:"Room not found."})}export{A as RoomDetailPage};
