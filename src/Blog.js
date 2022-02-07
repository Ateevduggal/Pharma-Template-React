import React from "react";
import { blog } from "./Data";
const Blog = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5" id="blog">
          <div className="col-12 text-center fw-bold fs-1 text-white">
            Our Recent Blogs
          </div>
          <div
            className="col-12 d-flex justify-content-evenly p-3 flex-wrap pt-5"
            id="card"
          >
            {blog.map((Val) => {
              const { image, heading, text } = Val;
              return (
                <>
                  <div
                    className="col-3 card-blog"
                    id="blog_1"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  >
                    <div
                      className="text-white fw-bold pb-2 blog_1"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {heading}
                    </div>
                    <p
                      className="text_about text-white"
                      style={{ fontSize: "0.91rem" }}
                    >
                      {text}
                    </p>
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

export default Blog;
