import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
    >
      <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Join [Your Club Name] Today!
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Empower your journey with knowledge, networking, and new
            experiences.
          </p>
          <a
            href="#how-to-join"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Join Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
