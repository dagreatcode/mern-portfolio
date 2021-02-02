import React, { Component } from "react";
import emailjs from "emailjs-com";
import img from "./linkedin.png";
import img2 from "./github.png";
import img3 from "./georgia2.gif";
const user_name = "";
const user_email = "";
const message = "";

// function sendEmail(e) {
//   emailjs
//     .sendForm(
//       "service_a6y7bdk",
//       "template_103v8es",
//       e.target,
//       "user_bh2MCT6segeJzTFqE9s7P"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//         if(result){
//           return "/"
//         }
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
// }

// function sendEmail(e) {
  // e.preventDefault();

  // emailjs.sendForm(     
  //   "service_a6y7bdk",
  //        "template_103v8es",
  //        e.target,
  //        "user_bh2MCT6segeJzTFqE9s7P")
  //   .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
// function handleFormSubmit(event) {
//   event.preventDefault();
//   function sendEmail(e) {
//     emailjs
//       .sendForm(
//         "service_a6y7bdk",
//         "template_103v8es",
//         e.target,
//         "user_bh2MCT6segeJzTFqE9s7P"
//         //      ,e.preventDefault
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   }
  // .catch(err => console.log(err));
// }



class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    emailjs.sendForm(     
      "service_a6y7bdk",
           "template_103v8es",
           event.target,
           "user_bh2MCT6segeJzTFqE9s7P")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert('Thank You:' + this.state.value + ', I will be contacting you as soon as possible.');
    event.preventDefault();
  }

//   state = {
//     user_name: user_name,
//     user_email: user_email,
//     message: message
// }

// handleInputChange = event => {
//   const {name, value} = event.target;
//   this.setState({
//     [name]: value
//   })
// }

// handleFormSubmit = event => {
//   emailjs.sendForm(     
//     "service_a6y7bdk",
//          "template_103v8es",
//          event.target,
//          "user_bh2MCT6segeJzTFqE9s7P")
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     }); 
// }
  render() {
    return (
      <div className="container">
        <h1>Contact Me @ 404-337-1206</h1>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={this.state.value} 
              onChange={this.handleChange}
              name="user_name"
              className="form-control"
              id="subject"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              What Would You Like?
            </label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <h2>E-mail Me @ dagreatcode@gmail.com</h2>
        <a href="https://www.linkedin.com/in/vincent-kendrick-baab171b2/">
          <img src={img} alt="Linked In" />
          LinkedIn
        </a>
        <a href="https://github.com/dagreatcode">
          <img src={img2} alt="Github" />
          Github
        </a>
        <a href="https://docs.google.com/document/d/1Ptx5x2S5qKHgHC2DALhAK5AOjyW5RFyhRwSoGi3RDbM/edit?usp=sharing/">
          <img src={img3} alt="Resume" />
          Resume
        </a>
      </div>
    );
  }
}

export default Contact;
