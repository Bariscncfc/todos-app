import React from "react";
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
            <motion.img src="https://cdn-icons.flaticon.com/png/512/2387/premium/2387757.png?token=exp=1656409483~hmac=f2a40d1cfbaf695760c86944e04607b5" className="w-32" drag="x"
        dragConstraints={{ left: 0, right: 0 }} />
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Todos</span>
            <span className="block text-indigo-600 xl:inline">App</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            add task and no missing work
          </p>
        </div>
      </main>
    </div>
  );
};

export default Hero;
