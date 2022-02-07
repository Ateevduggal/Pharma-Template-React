import React from "react";
import tablet_1 from "./Images/tablets-1.jpg";
import { product } from "./Data";
const Product = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5" id="product">
          <div className="col-6 pt-3" id="text_product">
            <h1 className="col-12 fw-bold fs-1">See Our Products</h1>
            <p className="card-text py-3">
              We have several product candidates in development that we believe
              have been significantly de-risked. been significantly de-risked.
              At vero eos et accusam justo duo dolores etea rebuitet clita kasd
              gubergren nosea takimata sanctus est. <br />
              <br />
              lorem ipsum dolor consetetur sadipscing elitr sed diam nonumy
              eirmod tempor invidunt ut labore magna aliquyam sedam voluptua at
              vero eos et accusam et justo duo dolores.
            </p>
            <button className="col-4 btn text-white fs-5">See More</button>
          </div>
          <div className="col-6 text-center pt-4" id="img_product">
            <img src={tablet_1} alt="tablets" className="w-75" />
          </div>
          <div className="w-100 col-12 py-5"></div>
          <div className="d-flex justify-content-evenly mb-3" id="card">
            {product.map((Val) => {
              const { image, heading, price, className } = Val;
              return (
                <>
                  <div className="col-2 bg-transparent card border border-0">
                    <div className="card-img-top">
                      <img
                        src={`${image}`}
                        alt={heading}
                        className={`${className}`}
                      />
                    </div>
                    <div className="card-body text-center">
                      <div className="card-title fs-5 fw-bold">{heading}</div>
                      <div className="card-text fs-5">{price}</div>
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

export default Product;
