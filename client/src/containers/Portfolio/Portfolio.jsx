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

        <div class="container">
          <div class="row justify-content-start">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
            <a href="https://vince-books.herokuapp.com/">
              <h1>Book Save</h1>
            </a>
            <img src={p1} alt="Logo" />;
            {/* <Link to = 'https://vince-books.herokuapp.com/'><button>GO GOOGLE</button></Link> */}
          </div>
          <div class="row justify-content-center">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
            <a href="https://dagreatcode.github.io/shop/">
              <h1>Shop</h1>
            </a>
            <img src={p2} alt="Logo" />;
            {/* <Link to = 'https://dagreatcode.github.io/shop/'><button>GO GOOGLE</button></Link> */}
          </div>
          <div class="row justify-content-end">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
            <a href="https://retroluxe.herokuapp.com/">
              <h1>retroluxe</h1>
            </a>
            <img src={p3} alt="Logo" />;
            {/* <Link to = 'https://retroluxe.herokuapp.com/'><button>GO GOOGLE</button></Link> */}
          </div>
          <div class="row justify-content-around">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
            <a href="https://dagreatcode.github.io/goodAutoDash/">
              <h1>GoodAutoDash</h1>
            </a>
            <img src={p4} alt="Logo" />;
            {/* <Link to = 'https://dagreatcode.github.io/goodAutoDash/'><button>GO GOOGLE</button></Link> */}
          </div>
          <div class="row justify-content-between">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
            <a href="https://dagreatcode.github.io/whats-for-dinner/">
              <h1>What's For Dinner</h1>
            </a>
            <img src={p5} alt="Logo" />;
            {/* <Link to = 'https://dagreatcode.github.io/whats-for-dinner/'><button>GO GOOGLE</button></Link> */}
          </div>
          <div class="row justify-content-evenly">
            <div class="col-4">One of two columns</div>
            <div class="col-4">One of two columns</div>
            <a href="http://www.positive-thoughts.org/">
              <h1>Positive Thoughts</h1>
            </a>
            <img src={p6} alt="Logo" />;
            {/* <Link to = 'http://www.positive-thoughts.org/'><button>GO GOOGLE</button></Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
