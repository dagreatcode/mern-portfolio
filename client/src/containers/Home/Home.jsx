// rcc
import React, { Component } from "react";
// import img from "./img2.jpg";
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
              <div className="col-md-4">
                {/* <img src={img} alt="Vincent Kendrick" /> */}
                <center>
                  <div
                    className="LI-profile-badge"
                    data-version="v1"
                    data-size="large"
                    data-locale="en_US"
                    data-type="vertical"
                    data-theme="dark"
                    data-vanity="vincent-kendrick"
                  >
                    <a
                      className="LI-simple-link"
                      href="https://www.linkedin.com/in/vincent-kendrick?trk=profile-badge"
                    >
                      Vincent Kendrick
                    </a>
                  </div>
                </center>
                <a href="https://docs.google.com/document/d/1Ptx5x2S5qKHgHC2DALhAK5AOjyW5RFyhRwSoGi3RDbM/edit?usp=sharing">
                  <i className="fab fa-google-drive"></i>
                  <i className="fab fa-google-drive float-right"></i>
                  <center>Click Here To View Resume</center>
                  <i className="fab fa-google-drive"></i>
                  <i className="fab fa-google-drive float-right"></i>
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hi There! 👋</h5>
                  <p className="card-text">
                    Welcome to my Portfolio. This application was made to show
                    the skills I’ve acquired on my journey. I started off as a
                    Musician and started working at Delta Airlines to support my
                    dreams at the time. Later on, I started working with python
                    and data on my own. But I still was hungry for more. I felt
                    that I was maybe learning things I didn’t need to know or
                    learning things and missing things I may have needed from
                    looking at YouTube videos. Covid came around and I volunteer
                    took a leave they offer the company. They said it would help
                    a lot for a number of reasons. So I took the opportunity to
                    help out and leave into a new career. I chose Web
                    Development. Ended up Graduating from Georgia Tech and Have
                    more skills than I ever could dream of having, including
                    self-awareness.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      I have a son with autism. It’s a lot but I know God would
                      never put too much on me I can not handle. This project. I
                      have been on a long road to finding myself. I had to let a
                      lot of people go because they did not want anything, but I
                      wanted everything. I have never given up on anything no
                      matter how bad it gets, I still seem to want to do more.
                      It’s so easy to give up, and I never want anything easy.
                      This project was hard but I still put my all into it… I
                      stay up long nights trying to do it on my own. I have made
                      a lot of mistakes. But I am still pushing forwards.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
