import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full ">
      <nav className="flex items-center justify-between w-full pt-3 mb-10">
        <img src={logo} alt="sumz_logo" className="object-contain w-28" />

        <button
          type="button"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=vpvtZZi5ZWk")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize & Translate Articles with
        <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with sumz, an open-source article summerizer that
        transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
