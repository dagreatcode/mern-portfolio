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
                    <img src={img} alt="LinkedIn" />
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
                    can be. I know I have chosen the right field, because I wake up every morning running 
                    to the computer to code. Some code I will push to github, and 
                    some code will be on my computer, like WordPress, and Shopify. But 
                    for future information, I will save code to github. I will work with Wix also, 
                    but I am a professional Javascript Full-Stack developer, so I try to stick with that. 
                    I am always learning, because that is what this field comes with. I learning new thing, but that is 
                    kinda my down fall, because being a master of one thing, you have to make it second nature. 
                    That is what I am. A Full-Stack Software Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <a href="https://docs.google.com/document/d/1vAPGMsudCXwj68sDNdse5ZleDsl94IKi/edit?usp=sharing&ouid=113004008649332235652&rtpof=true&sd=true">
                <i className="fab fa-google-drive"></i>
                <i className="fab fa-google-drive float-right"></i>
                <center>Click Here To View Resume</center>
                <i className="fab fa-google-drive"></i>
                <i className="fab fa-google-drive float-right"></i>
              </a>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Brand Statement</h1>
                  <p>
                    Full-Stack Web Developer leveraging with a good ethic of
                    hardworking background to build a more intuitive user
                    experience on the web. Recently earned a certificate in
                    full-stack development from the Georgia Institute of
                    Technology, with newly developed skills in HTML, JavaScript,
                    CSS, React.js, Express.js, SQL, NoSQL, Node.js, and
                    responsive web design. Known as an innovative problem solver
                    passionate about developing apps, with a focus on
                    mobile-first design and development. With each project, my
                    aim is to best engage my audience for an impactful user
                    experience. I applied aspects of UX and agile development in
                    a recent project. I worked on a team of four to develop a
                    MERN app that helps people through these tough times with an
                    app that sends you positive thoughts every day, and
                    uplifting quotes. I’m excited to leverage my skills as part
                    of a fast-paced, quality-driven team to build better
                    experiences on the web.
                  </p>
                </div>
              </div>
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
                        <h4>•Skills:</h4>
                        Responsive Design, Google Chrome Developer Tools, API
                        Architect, Rest API
                        <h4> •Languages:</h4> HTML5, CSS3, Javascript, ES6+, Typescript, C#, 
                        Python, SQL, NoSQL
                        <h4> •Frameworks:</h4> React.JS, Node.JS, JQuery, AngularJS, Git, ASP.NET Framework, 
                        Bootstrap, Express, MVC, PWA, NPM, Babel, Webpack, and
                        Handlebar.
                        <h4>•Applications:</h4> GitHub, MongoDB, MySQL, MS Visual Studio, VS code,
                        MySQL workbench, SQL Server, Robo 3T, Mongo Atlas, and Postman, MS Visio
                        <br />
                      </p>
                    </div>
                    <br />
                  </div>
                </p>
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
