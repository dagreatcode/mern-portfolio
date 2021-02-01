// import React from 'react';
// import emailjs from 'emailjs-com';

// // import './ContactUs.css';

// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_a6y7bdk', 'template_103v8es', e.target, 'user_bh2MCT6segeJzTFqE9s7P')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }

// const axios = require("axios");
// const API_KEY = "d4129562ff0cdba47740fb9d83b7c936c94e2ac29afbe19dec952c3defa0c824";

// Send
// useEffect(()=>{
//   axios({
//     method: "POST",
//     url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
//     data: {
//       senderId: inbox1.id,
//   to: ["dagreatcode@gmail.com"],
//   subject: "Hello",
//   body: "Welcome",
//     },
//   });
// },[]);

// const options = {
//   to: ["dagreatcode@gmail.com"],
//   subject: "Hello",
//   body: "Welcome",
// };
// await mailslurp.sendEmail(inbox.id, options);
