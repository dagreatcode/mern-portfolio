import { useEffect } from "react";
import axios from "axios";
import p1 from "./img/p1.png";
// import p2 from "./img/p2.png";
import p3 from "./img/p7.png";
// import p4 from "./img/p4.png";
import p5 from "./img/p5.png";
import p6 from "./img/p6.png";
// import { Link } from "react-router-dom";

function Portfolio() {
  useEffect(() => {
    console.log("Portfolio API Call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <center>
        Click on the links below To view all web pages and github links.
      </center>
      <h1>
        <a href="/projects">My Projects API</a>
      </h1>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={p3} alt="Workout Tracker" />
          </div>
          <div className="col-md-4">
            <h2>Project Details:</h2>
            <p>Tools: Postman, Full CRUD, MongoDB, HTML and CSS. </p>
            <h2>Description:</h2>
            <p>
              View create and track daily workouts, also log multiple exercises
              in a workout on a given day. You can also track the name, type,
              weight, sets, reps, and duration of exercise.
            </p>
          </div>
          <div className="col-md-3">
            <h6>Click Below To Preview Page</h6>
            <a href="https://workoutwatcher.herokuapp.com/?id=605276ac8d961900173d80ad">
              <h2>Workout-Tracker</h2>
            </a>
            <h6>Click Below To Preview Code</h6>
            <a href="https://github.com/dagreatcode/Workout-Tracker">
              <h2>Github Link</h2>
            </a>
          </div>
        </div>
        <br />
        <br />
        <hr/>
        <br />
        <br />
        <div className="row">
          <div className="col-md-5">
            <img src={p5} alt="What's for dinner" />
          </div>
          <div className="col-md-4">
            <h2>Project Details:</h2>
            <p>Tools: Express, JavaScript, third-party APIs, HTML, CSS,</p>
            <h2>Description:</h2>
            <p>
              Feeling Hungry? This Website is perfect for the job. This site was
              made with the work of three other student and I, to meet MVP and
              to also make an A+ on this group project.
            </p>
          </div>
          <div className="col-md-3">
            <h6>Click Below To Preview Page</h6>
            <a href="https://dagreatcode.github.io/whats-for-dinner/">
              <h2>What's For Dinner</h2>
            </a>
            <h6>Click Below To Preview Code</h6>
            <a href="https://github.com/dagreatcode/project-1/">
              <h2>Github Link</h2>
            </a>
          </div>
        </div>
        <br />
        <br />
        <hr/>
        <br />
        <br />
        <div className="row">
          <div className="col-md-5">
            <img src={p6} alt="Positive Thoughts" />
          </div>
          <div className="col-md-4">
            <h2>Project Details:</h2>
            <p>
              Tools: React, HTML, CSS, JavaScript, Bootstrap, Twilio, Cron,
              Jason Web Token
            </p>
            <h2>Description:</h2>
            <p>
              A project where I worked with three other coders. Our top goal was
              to meet MVP and make sure that this site was worth coming to.
              Positive Thoughts was made to act as a buddy that send you text
              messages through out the day.
            </p>
          </div>
          <div className="col-md-3">
            <h6>Click Below To Preview Page</h6>
            <a href="http://www.positive-thoughts.org/">
              <h2>Positive Thoughts</h2>
            </a>
            <h6>Click Below To Preview Code</h6>
            <a href="https://github.com/dagreatcode/Positive-Thoughts.git">
              <h2>Github</h2>
            </a>
          </div>
        </div>
        <br />
        <br />
        <hr/>
        <br />
        <br />
        <div className="row">
          <div className="col-md-5">
            <img src={p1} alt="Save Books" />
          </div>
          <div className="col-md-4">
            <h2>Project Details:</h2>
            <p>
              Tools: React, HTML, CSS, JavaScript, Bootstrap, MangoDB, Express,
              and Node
            </p>
            <h2>Description:</h2>
            <p>This project was made with gh pages.</p>
          </div>
          <div className="col-md-3">
            <h6>Click Below To Preview Page</h6>
            <a href="https://vince-books.herokuapp.com/">
              <h2>Book Save</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
