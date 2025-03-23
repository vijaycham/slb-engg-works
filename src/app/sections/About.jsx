import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="h-screen pt-16 flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">About Us</h2>
        <p className="text-gray-700 text-center">
          We are Sri Lakshmi Baalaji Engineering Works, specializing in
          **Production, Maintenance, R&D, and Injection Moulding**. Located in
          **Chengalpattu, Tamil Nadu**, we ensure **precision and quality** in
          all our services.
        </p>
      </div>
    </section>
  );
}

export default About