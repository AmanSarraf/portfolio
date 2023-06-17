// import React, { useState } from "react";
// import Button from "../button/Button";

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Form submission logic
//     // Access form data from the state (formData) and perform desired actions
//     console.log(formData);
//     // Reset the form after submission
//     setFormData({
//       name: "",
//       email: "",
//       message: ""
//     });
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   return (
//     <form
//       className="contact-form"
//       action="https://formspree.io/f/mknadzae" // Set the form action to the desired URL
//       method="POST"
//       onSubmit={handleSubmit}
//     >
//       <input
//         type="text"
//         name="name"
//         placeholder="Your Full Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Your Email Address"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="message"
//         placeholder="Your Message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//       ></textarea>
//       <Button type="submit" text="Submit" className="submit-button" />
//     </form>
//   );
// };

// export default MyForm;
