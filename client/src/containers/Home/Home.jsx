// rcc
import React, { Component } from "react";
import img from "./new1.png";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <h1>About Me</h1>
        <div className="container">
          {/* <img align="left" alt="resume" width="22px" src=" https://docs.google.com/document/d/1Ptx5x2S5qKHgHC2DALhAK5AOjyW5RFyhRwSoGi3RDbM/edit?usp=sharing"/> */}
          {/* src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/googledrive.svg"  */}
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-5">
                <center className="container">
                  <a
                    href="https://www.linkedin.com/in/vincent-kendrick?trk=profile-badge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={img} alt="Resume" />
                  </a>
                </center>
                <h6>
                  <center>Click Image For LinkedIn</center>
                </h6>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">Hi There! 👋</h5>
                  <p className="card-text">
                    Welcome to my Portfolio. This application was made to show
                    the skills I’ve acquired on my journey. I started off as a
                    Musician and started working at Delta Airlines to support my
                    dreams. Later on, I started working with python and data on
                    my own. I felt that I was maybe learning things I didn’t
                    need to know. Covid came around and I volunteered to take a
                    leave they offer to the employees. They said it would help a
                    lot for a number of reasons. So I took the opportunity to
                    help out and leave into a new career. I chose Web
                    Development. Ended up Graduating from Georgia Tech and Have
                    more skills than I ever could dream of having, including
                    self-awareness. My passion for development and problem
                    solving, and solutions have made me a better coder. Working
                    with others makes any job better. With my work ethic, I will
                    work to make any project or job to be the best version it
                    can be.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <p></p>
            </div>
            <div className="row">
              <h1>Brand Statement</h1>
              <p>
                Recently earned a certificate in full-stack development from the
                University Coding, with newly developed skills in JavaScript,
                CSS, React.js, and responsive web design. Known as an innovative
                problem solver passionate about developing apps, with a focus on
                mobile-first design and development. With each project, my aim
                is to best engage my audience for an impactful user experience.
                I applied aspects of UX and agile development in a recent
                project. I worked on a team of four to develop a full-stack
                MERN app that helps local business owners track their sales,
                inventory, and attendance at special events. I’m excited to
                leverage my skills as part of a fast-paced, quality-driven team
                to build better experiences on the web.
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <p className="card-text">
                  <div className="card-text">
                    <div className="card-body">
                      <h5 className="card-title">
                        <center>My Skills and tools 🔭</center>
                      </h5>
                      <p className="card-text">
                        <h4>•Skills:</h4> Responsive Design, Google Developer
                        Tools, API Architect, Rest API
                        <h4> •Languages:</h4> HTML5, CSS3, Javascript ES6+,
                        Python, SQL, NoSQL
                        <h4> •Frameworks:</h4> React.JS, Node.JS, JQuery, Git,
                        Bootstrap, Express, MVC, PWA, NPM, Babel, Webpack, and
                        Handlebar.
                        <h4>•Applications:</h4> GitHub, MongoDB, MySQL, vs code,
                        MySQL workbench, Robo 3T, Mongo Atlas, and Postman,
                        <br />
                      </p>
                      <br />
                    </div>
                    <center>
                      <a href="/portfolio">My Projects</a>
                    </center>
                  </div>
                </p>
                <center>
                  <a href="tel:404-337-1206">CLICK TO CALL ME</a>
                </center>
                <a href="https://docs.google.com/document/d/1Ptx5x2S5qKHgHC2DALhAK5AOjyW5RFyhRwSoGi3RDbM/edit?usp=sharing">
                  <i className="fab fa-google-drive"></i>
                  <i className="fab fa-google-drive float-right"></i>
                  <center>Click Here To View Resume</center>
                  <i className="fab fa-google-drive"></i>
                  <i className="fab fa-google-drive float-right"></i>
                </a>
                <center>
                  <a href="mailto:dagreatcode@gmail.com?subject = Feedback&body = Message">
                    Email me at (dagreatcode@gmail.com)
                  </a>
                </center>
                <center>
                  <a href="https://github.com/dagreatcode/mern-portfolio">
                    Webpage Code. Github.com
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
