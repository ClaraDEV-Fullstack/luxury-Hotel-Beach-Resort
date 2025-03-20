import{j as e,m as a}from"./index-GsJMJi6y.js";import{b as S,u as I,r as i}from"./react-CcRDz-_R.js";import{m as b,n as $,o as p,p as T}from"./index-BhZx81v5.js";function H(){var x,h;const j=S(),y=I(),s=(x=j.state)==null?void 0:x.booking,f=((h=s==null?void 0:s.guestName)==null?void 0:h.split(" ")[0])||"Guest",[n,g]=i.useState({cardNumber:"",expiryDate:"",cvv:""}),[N,d]=i.useState(!1),[v,m]=i.useState(!1),[w,u]=i.useState(!1);if(!s)return e.jsx("p",{className:"text-center text-red-500 text-lg font-medium",children:"Invalid booking details."});const l=t=>{const{name:o,value:c}=t.target;g({...n,[o]:c})},k=t=>{t.preventDefault(),m(!0),setTimeout(()=>{m(!1),d(!0)},2e3)},C=()=>{d(!1),y("/")},P=()=>{u(!0)},D=()=>{u(!1)};return e.jsxs("div",{className:"BookingConfirmationPage",children:[e.jsxs("section",{className:"hero-section",style:{backgroundImage:"url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"hero-overlay"}),e.jsxs(a.div,{className:"hero-content",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:1,ease:"easeOut"},children:[e.jsxs("h1",{className:"hero-title",children:["Welcome, ",f,"!"]}),e.jsx("p",{className:"hero-subtitle",children:"You've successfully reached the booking confirmation page. Here, you can review your booking details, complete your payment, and download your confirmation."})]})]}),e.jsxs("div",{className:"container pt-20",children:[e.jsx("h1",{className:"text-4xl font-bold mb-8 text-center",children:"Booking Confirmed!"}),e.jsxs(a.div,{className:"bg-white rounded-lg shadow-lg p-8",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"text-center",children:[e.jsx(b,{size:48,className:"text-green-500 mx-auto mb-4"}),e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Thank you for your booking!"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"Here are your booking details:"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Booking ID:"}),e.jsx("span",{children:s.bookingId})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Room:"}),e.jsx("span",{children:s.roomTitle})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Guest Name:"}),e.jsx("span",{children:s.guestName})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Email:"}),e.jsx("span",{children:s.email})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Phone:"}),e.jsx("span",{children:s.phone})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Check-In Date:"}),e.jsx("span",{children:s.checkIn})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Check-Out Date:"}),e.jsx("span",{children:s.checkOut})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Total Price:"}),e.jsxs("span",{children:["$",s.totalPrice.toFixed(2)]})]})]})]}),e.jsxs(a.div,{className:"mt-8",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.5},children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Complete Payment"}),e.jsxs("form",{onSubmit:k,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2",children:"Card Number"}),e.jsx("input",{type:"text",name:"cardNumber",placeholder:"1234 5678 9012 3456",value:n.cardNumber,onChange:l,required:!0,className:"w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2",children:"Expiry Date"}),e.jsx("input",{type:"month",name:"expiryDate",value:n.expiryDate,onChange:l,required:!0,className:"w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2",children:"CVV"}),e.jsx("input",{type:"text",name:"cvv",placeholder:"123",value:n.cvv,onChange:l,required:!0,className:"w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition",children:v?e.jsx("div",{className:"spinner"}):"Pay Now"})]})]}),e.jsx(a.div,{className:"mt-8 bg-blue-50 rounded-lg shadow-lg p-8 border border-blue-200",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:e.jsxs("div",{className:"text-center",children:[e.jsx($,{size:48,className:"text-blue-500 mx-auto mb-4"}),e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Need Help?"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"If you encounter any issues during the payment process or have questions about your booking, our support team is here to help."}),e.jsxs("button",{className:"w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition flex items-center justify-center",onClick:P,children:[e.jsx(p,{size:20,className:"mr-2"}),e.jsx("span",{children:"Contact Support"})]})]})}),e.jsxs(a.button,{className:"mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{const t=`
                Booking Confirmation
                ------------------------
                Booking ID: ${s.bookingId}
                Room: ${s.roomTitle}
                Guest Name: ${s.guestName}
                Email: ${s.email}
                Phone: ${s.phone}
                Check-In Date: ${s.checkIn}
                Check-Out Date: ${s.checkOut}
                Total Price: $${s.totalPrice.toFixed(2)}
              `,o=new Blob([t],{type:"text/plain"}),c=URL.createObjectURL(o),r=document.createElement("a");r.href=c,r.download=`booking_${s.bookingId}.txt`,r.click()},children:[e.jsx(T,{size:20,className:"inline-block mr-2"}),e.jsx("span",{children:"Download Confirmation"})]})]}),N&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsxs(a.div,{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3},children:[e.jsx(b,{size:48,className:"text-green-500 mx-auto mb-4"}),e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Payment Successful!"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Thank you for completing your booking. We are excited to welcome you and ensure you have an unforgettable experience."}),e.jsxs("p",{className:"text-gray-600 mb-6",children:["A confirmation email has been sent to"," ",e.jsx("span",{className:"highlight-email",children:s.email})," with all the details."]}),e.jsx("button",{onClick:C,className:"w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition",children:"Close"})]})}),w&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsxs(a.div,{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsx(p,{size:48,className:"text-blue-500 mx-auto mb-4"}),e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Message Received!"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"Thank you for reaching out. Our support team will get back to you as soon as possible."}),e.jsx("button",{onClick:D,className:"w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition",children:"Close"})]})})]})}export{H as BookingConfirmationPage};
