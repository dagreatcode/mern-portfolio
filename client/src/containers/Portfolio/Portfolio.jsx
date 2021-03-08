import React, { Component } from "react";
import p1 from "./img/p1.png";
import p2 from "./img/p2.png";
import p3 from "./img/p3.png";
import p4 from "./img/p4.png";
import p5 from "./img/p5.png";
import p6 from "./img/p6.png";
// import { Link } from "react-router-dom";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <h1>
          <a href="/api/projects">My Projects API</a>
        </h1>
        <div className="container">
          <div className="row justify-content-end">
            {/* <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div> */}
            <a href="https://retroluxe.herokuapp.com/">
              <h2>retroluxe</h2>
            </a>
            <a href="https://github.com/dagreatcode/barbara-api.git">
              <h2>Github Link</h2>
            </a>
            <img src={p3} alt="Logo" />;
            {/* <Link to = 'https://retroluxe.herokuapp.com/'><button>GO GOOGLE</button></Link> */}
          </div>
          <div className="row justify-content-around">
            {/* <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div> */}
            <a href="https://dagreatcode.github.io/goodAutoDash/">
              <h2>GoodAutoDash</h2>
            </a>
            <a href="https://github.com/dagreatcode/goodAutoDash">
              <h2>Githublink</h2>
            </a>
            <img src={p4} alt="Logo" />;
            {/* <Link to = 'https://dagreatcode.github.io/goodAutoDash/'><button>GO GOOGLE</button></Link> */}
          </div>
          <div className="row justify-content-between">
            {/* <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div> */}
            <a href="https://dagreatcode.github.io/whats-for-dinner/">
              <h2>What's For Dinner</h2>
            </a>
            <a href="https://github.com/dagreatcode/project-1/">
              <h2>Github Link</h2>
            </a>
            <img src={p5} alt="Logo" />;
            {/* <Link to = 'https://dagreatcode.github.io/whats-for-dinner/'><button>GO GOOGLE</button></Link> */}
          </div>
          <div className="row justify-content-evenly">
            {/* <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div> */}
            <a href="http://www.positive-thoughts.org/">
              <h2>Positive Thoughts</h2>
            </a>
            <a href="https://github.com/dagreatcode/Positive-Thoughts.git">
              <h2>Github</h2>
            </a>
            <img src={p6} alt="Logo" />;
            {/* <Link to = 'http://www.positive-thoughts.org/'><button>GO GOOGLE</button></Link> */}
            <div className="row justify-content-start">
              {/* <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div> */}
              <a href="https://vince-books.herokuapp.com/">
                <h2>Book Save</h2>
              </a>
              <img src={p1} alt="Logo" />;
              {/* <Link to = 'https://vince-books.herokuapp.com/'><button>GO GOOGLE</button></Link> */}
            </div>
            <div className="row justify-content-center">
              {/* <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div> */}
              <a href="https://dagreatcode.github.io/shop/">
                <h2>Shop</h2>
              </a>
              <img src={p2} alt="Logo" />;
              {/* <Link to = 'https://dagreatcode.github.io/shop/'><button>GO GOOGLE</button></Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
