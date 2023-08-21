import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('https://source.unsplash.com/random')` }}
    >
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Hero Title</h1>
        <p className="text-2xl">Hero Subtitle</p>
      </div>
    </div>
  );
};

export default HeroBanner;
