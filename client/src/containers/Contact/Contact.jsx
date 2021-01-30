import React, { Component } from "react";
import img from "./linkedin.png";
import img2 from "./github.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Me @ 404-337-1206</h1>
        <h2>E-mail Me @ dagreatcode@gmail.com</h2>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            What Would You Like?
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <a href="https://www.linkedin.com/in/vincent-kendrick-baab171b2/">
            <img src={img} alt="Linked In"/>
          </a>
      
          <a href="https://github.com/dagreatcode">
            <img src={img2} alt="" />
          </a>

      
          <a href="https://docs.google.com/document/d/1Ptx5x2S5qKHgHC2DALhAK5AOjyW5RFyhRwSoGi3RDbM/edit?usp=sharing/">
            <img src="./assets/Images/stackover2.png" alt="" />
          </a>
      
      </div>
    );
  }
}

export default Contact;
