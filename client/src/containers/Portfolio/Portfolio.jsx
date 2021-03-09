import { useEffect } from "react";
import axios from "axios";
import p1 from "./img/p1.png";
import p2 from "./img/p2.png";
import p3 from "./img/p3.png";
import p4 from "./img/p4.png";
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
      <div className="container">
        <div className="row justify-content-end">
          <h6>Click Below To Preview Page</h6>
          <a href="https://retroluxe.herokuapp.com/">
            <h2>Retroluxe</h2>
          </a>
          <h6>Click Below To Preview Code</h6>
          <a href="https://github.com/dagreatcode/barbara-api.git">
            <h2>Github Link</h2>
          </a>
          <img src={p3} alt="Logo" />
          <h2>Project Details:</h2>
          <h2>Description:</h2>
          <p>
            In this project, I made a simple MySQL database, an express server,
            and deployed to Heroku. This database uses a JAWS database for an
            online service. The user can keep track of all of their items.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row justify-content-around">
          <h6>Click Below To Preview Page</h6>
          <a href="https://dagreatcode.github.io/goodAutoDash/">
            <h2>GoodAutoDash</h2>
          </a>
          <h6>Click Below To Preview Code</h6>
          <a href="https://github.com/dagreatcode/goodAutoDash">
            <h2>Github link</h2>
          </a>
          <img src={p4} alt="Logo" />
          <h2>Project Details:</h2>
          <h2>Description:</h2>
          <p>
            In this project, you can make API calls to find out all information
            about any car with just the VIN number. Also ODB codes and more.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row justify-content-between">
          <h6>Click Below To Preview Page</h6>
          <a href="https://dagreatcode.github.io/whats-for-dinner/">
            <h2>What's For Dinner</h2>
          </a>
          <h6>Click Below To Preview Code</h6>
          <a href="https://github.com/dagreatcode/project-1/">
            <h2>Github Link</h2>
          </a>
          <img src={p5} alt="Logo" />
          <h2>Project Details:</h2>
          <h2>Description:</h2>
          <p>
            Feeling Hungry? This Website is perfect for the job. This site was
            made with the work of three other student and I, to meet MVP and to
            also make an A+ on this group project.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row justify-content-evenly">
          <h6>Click Below To Preview Page</h6>
          <a href="http://www.positive-thoughts.org/">
            <h2>Positive Thoughts</h2>
          </a>
          <h6>Click Below To Preview Code</h6>
          <a href="https://github.com/dagreatcode/Positive-Thoughts.git">
            <h2>Github</h2>
          </a>
          <img src={p6} alt="Logo" />
          <h2>Project Details:</h2>
          <h2>Description:</h2>
          <p>
            A project where I worked with three other coders. Our top goal was
            to meet MVP and make sure that this site was worth coming to.
            Positive Thoughts was made to act as a buddy that send you text
            messages through out the day.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row justify-content-start">
          <h6>Click Below To Preview Page</h6>
          <a href="https://vince-books.herokuapp.com/">
            <h2>Book Save</h2>
          </a>
          <img src={p1} alt="Logo" />
          <h2>Project Details:</h2>
          <h2>Description:</h2>
          <p>This project was made with gh pages.</p>
        </div>
        <br />
        <br />
        <br />
        <div className="row justify-content-center">
          <h6>Click Below To Preview Page</h6>
          <a href="https://dagreatcode.github.io/shop/">
            <h2>Shop</h2>
          </a>
          <img src={p2} alt="Logo" />
          <h2>Project Details:</h2>
          <h2>Description:</h2>
          <p>This is a serverless website. Deployed with heroku.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
