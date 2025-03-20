import{j as e}from"./index-GsJMJi6y.js";import"./react-CcRDz-_R.js";function t(){return e.jsxs("div",{className:"contact-page",children:[e.jsx("div",{className:"hero-section",style:{backgroundImage:"url('https://img.freepik.com/premium-photo/man-showing-contact-us-message-paper_220873-12105.jpg')",backgroundSize:"cover",height:"80vh",backgroundPosition:"center"}}),e.jsxs("div",{className:"contact-content",children:[e.jsxs("div",{className:"contact-form",children:[e.jsx("h2",{children:"Send Us a Message"}),e.jsxs("form",{children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"subject",children:"Subject:"}),e.jsx("input",{type:"text",id:"subject",name:"subject",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"message",children:"Message:"}),e.jsx("textarea",{id:"message",name:"message",rows:"5",required:!0})]}),e.jsx("button",{type:"submit",className:"submit-button",children:"Send Message"})]})]}),e.jsxs("div",{className:"contact-info",children:[e.jsx("h2",{children:"Contact Information"}),e.jsx("p",{children:"Feel free to reach out to us via email, phone, or visit our office."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Email:"})," info@example.com"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Phone:"})," +1 (123) 456-7890"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Address:"})," 123 Main St, City, Country"]})]})]})]}),e.jsxs("div",{className:"map-section",children:[e.jsx("h2",{children:"Our Location"}),e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f4f1c8e!2s123%20Main%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1633031234567!5m2!1sen!2sus",width:"100%",height:"400",style:{border:0},allowFullScreen:"",loading:"lazy"})]}),e.jsx("style",{children:`
          .contact-page {
            min-height: 100vh;
            background: #f9f9f9;
            font-family: 'Poppins', sans-serif;
          }

          /* Hero Section */
          .hero-section {
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
          }

          .hero-overlay {
            background: rgba(0, 0, 0, 0.5);
            padding: 2rem;
            border-radius: 1rem;
          }

          .hero-title {
            font-size: 3rem;
            font-weight: 800;
            color: white;
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            margin-top: 260px;
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.9);
          }

          /* Contact Content */
          .contact-content {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          /* Contact Form */
          .contact-form {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .contact-form h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-group label {
            display: block;
            font-size: 1rem;
            color: #64748b;
            margin-bottom: 0.5rem;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            font-size: 1rem;
            color: #1e293b;
            transition: border-color 0.3s ease;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            border-color: #4f46e5;
            outline: none;
          }

          .form-group textarea {
            resize: vertical;
          }

          .submit-button {
            display: inline-block;
            background: linear-gradient(to right, #4f46e5, #9333ea);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .submit-button:hover {
            background: linear-gradient(to right, #4338ca, #7c3aed);
          }

          /* Contact Information */
          .contact-info {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .contact-info h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }

          .contact-info p {
            font-size: 1rem;
            color: #64748b;
            margin-bottom: 1.5rem;
          }

          .contact-info ul {
            list-style: none;
            padding: 0;
          }

          .contact-info ul li {
            font-size: 1rem;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .contact-info ul li strong {
            color: #4f46e5;
          }

          /* Map Section */
          .map-section {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
          }

          .map-section h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }
        `})]})}export{t as ContactPage};
