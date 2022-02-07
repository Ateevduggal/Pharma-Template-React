import React from "react";
import CountUp from "react-countup";
const Count = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5" id="count">
          <div className="d-flex justify-content-evenly atems-center" id="card_count">
            <div className="text-center text-white fs-4 fw-bold count">
              <CountUp end={30} className="fs-1 fw-bold" />
              <br />
              Years of Experience
            </div>
            <div className="text-center text-white fs-4 fw-bold count">
              <CountUp end={893} className="fs-1 fw-bold" />
              <br />
              Medicine Invented
            </div>
            <div className="text-center text-white fs-4 fw-bold count">
              <CountUp end={80} className="fs-1 fw-bold" />
              <br />
              Awards Winned
            </div>
            <div className="text-center text-white fs-4 fw-bold count">
              <CountUp end={673} suffix=" k" className="fs-1 fw-bold" />
              <br />
              Happy Clients
            </div>
            <div className="text-center text-white fs-4 fw-bold count">
              <CountUp end={500} className="fs-1 fw-bold" />
              <br />
              Pharma Partners
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
