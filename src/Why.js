import React from "react";
import { why } from "./Data";
const Why = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5" id="why">
          <div className="col-4 pt-5 heading">
            <div className="fs-1 fw-bold mb-3">Why Choose Us?</div>
            <button
              className="col-4 fs-5 fw-bold btn text-white mt-5 mx-3"
              id="btn"
            >
              Read More
            </button>
          </div>
          <div className="col-8 d-flex flex-wrap" id="card_why">
            {why.map((Val) => {
              const { icon, heading, text } = Val;
              return (
                <>
                  <div className="col-6 p-3 d-flex card_why" >
                    <div className="px-3 pt-2">
                      <i
                        className={`${icon} ic`}
                        style={{ color: "rgb(143, 175, 14)" }}
                      ></i>
                    </div>
                    <div className="">
                      <h4>{heading}</h4>
                      <p className="text_about">{text}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="xcol-12 text-center" id="btn-1">
            <button className="col-4 fs-5 fw-bold btn text-white mt-5 mx-3">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
