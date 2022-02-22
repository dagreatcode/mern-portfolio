import React, { Component } from "react";
import emailjs from "emailjs-com";
import img from "./linkedin.png";
import img2 from "./github.png";
import img3 from "./georgia2.gif";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    // event.preventDefault();
    emailjs
      .sendForm(
        "service_a6y7bdk",
        "template_103v8es",
        event.target,
        "user_bh2MCT6segeJzTFqE9s7P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert(
      "Thank You: " +
        this.state.value +
        ", I will be contacting you as soon as possible."
    );
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
        <a href="tel:404-337-1206">
          <h2>Click to call me 404-337-1206</h2>
        </a>
        <br />
        <a href="mailto:dagreatcode@gmail.com?subject = Feedback&body = Message">
          <h2>Click to email me(dagreatcode@gmail.com)</h2>
        </a>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
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
            <label htmlFor="exampleFormControlInput1" className="form-label">
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
        <a
          href="https://github.com/dagreatcode"
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <img src={img2} alt="Github" />
          Github
        </a>
        <a
          href="https://docs.google.com/document/d/1Ptx5x2S5qKHgHC2DALhAK5AOjyW5RFyhRwSoGi3RDbM/edit?usp=sharing/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={img3} alt="Resume" />
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/vincent-kendrick/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={img} alt="LinkedIn" />
          LinkedIn
        </a>
      </div>
    );
  }
}

export default Contact;
