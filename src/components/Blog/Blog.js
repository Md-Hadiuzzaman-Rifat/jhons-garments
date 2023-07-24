import React from "react";
import Articles from "../Articles/Articles";

const Blog = () => {
  return (
    <div className="w-full my-32">
      <div className="width flex flex-col items-center gap-6">
        <span className="customText">BLOG</span>
        <h1>Blog & Articles</h1>
        <div className="w-[70%]">
          <p className="text-center">
            Nulla in nibh at leo faucibus molestie eget nec velit. Phasellus vel
            felis vel orci iaculis tempor tristique sagittis urna. Phasellus ac
            ante in lacus tempor egestas.
          </p>
        </div>
        <Articles></Articles>
      </div>
    </div>
  );
};

export default Blog;
