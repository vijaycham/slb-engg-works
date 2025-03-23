"use client";

import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-3xl md:text-5xl font-bold">
        Sri Lakshmi Baalaji Engineering Works
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Precision Engineering & Plastic Moulding Experts
      </p>
      <Link
        to="contact"
        smooth={true}
        duration={300}
        className="mt-10 px-6 py-3 bg-blue-400 text-white rounded-lg cursor-pointer hover:bg-blue-500 transition"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default Home;
