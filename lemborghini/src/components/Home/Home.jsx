import React from "react";
import lembo from "../../assets/Lembo-1.jpg";

const Home = () => {
  return (
    <section className="h-screen bg-cover bg-center relative">
      <div className="max-w-full h-screen absolute top-0 left-0 right-0 bottom-0 ">
        <img
          src={lembo}
          alt=""
          className="object-cover w-full h-full blur-xs opacity-50"
        />
      </div>

      <h1 className="text-4xl font-bold text-center mt-20 text-white py-32 z-10 relative">
        Lamborghini
      </h1>
    </section>
  );
};

export default Home;
