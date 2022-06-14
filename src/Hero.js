import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="hero">
          <div
            className="col-12 display-5 py-2 px-4 text-white"
            style={{ backgroundColor: "rgb(8, 44, 87)" }}
          >
            Pharma +
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-fade p-0"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  id="item-1"
                >
                  <h2 className="fs-1 fw-bold text-center">
                    Developing New Innovation Theropies
                  </h2>
                  <p className="fs-4 text-center mt-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    Quasi magni voluptate est officia.
                  </p>
                  <button className="btn mt-2 text-center text-white fw-bold fs-5">
                    Read More
                  </button>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  id="item-2"
                >
                  <h2 className="fs-1 fw-bold text-center">
                    Working for a Better Tomorrow
                  </h2>
                  <p className="fs-4 text-center mt-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    <br />. Quasi magni voluptate est officia.
                  </p>
                  <button className="btn mt-2 text-center text-white fw-bold fs-5">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
