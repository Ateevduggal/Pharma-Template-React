import React from "react";
import { about } from "./Data";
const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5" id="about">
          <div className="col-12 text-center fs-1 fw-bold mt-3">
            Welcome to OUR Site
          </div>
          <div className="col-12 text-center my-2">
            <p className="fs-5" id="text_about">
              We are a biopharmaceutical company focused on the discovery,
              development and commercialization of innovative therapies intended
              to improve outcomes in patients sufferings
            </p>
          </div>
          <div className="d-flex justify-content-evenly my-5" id="card">
            {about.map((Val, id) => {
              const { icon, heading, text } = Val;
              return (
                <>
                  <div
                    className="col-3 card py-4 px-2 bg-transparent text-center"
                    key={id}
                  >
                    <div className="card-img-top">
                      <i className={`${icon}`} id="icon"></i>
                    </div>
                    <div className="card-body">
                      <div className="card-title fs-2">{heading}</div>
                      <div className="card-text fs-5">{text}</div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn px-4 text-white fw-bold fs-5 mt-3">
                        Know More
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
