import React from "react";
import Hero from "./Hero";
import About from "./About";
import Product from "./Product";
import Why from "./Why";
import Count from "./Count";
import Blog from "./Blog";
const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Product />
      <Why />
      <Count />
      <Blog />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-dark fs-4 fw-bold text-center py-4 text-white copyright">
            Copyright &copy; Tekolio 2022
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
