import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const HowToJoin = () => {
  return (
    <section className="bg-secondary-light dark:bg-secondary-dark py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-8">
          Contact Details
        </h2>
        <div className="flex flex-col gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <h3 className="text-xl font-semibold text-primary-light dark:text-primary-dark mb-2">
              Bhavin Parmar
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <FaGraduationCap className="inline-block mr-2" /> B.A./M.A.
              Psychology, D.Ed.Se.(MR), Master Trainer Sp.Olypics, Bharat
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <FaLocationDot className="inline-block mr-2" /> S.3-4, Neelakamal
              Shopping Centre, Opposite Samved Hospital, Kalikund, Dholka
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <a
                href="tel:+919974088802"
                className="text-accent-cyan hover:underline"
              >
                (997) 408-8802
              </a>
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary-light dark:text-primary-dark mb-2">
              Arpita Parmar
            </h3>
            <p className="text-gray-700  dark:text-gray-300 mb-2">
              <FaGraduationCap className="inline-block mr-2" /> D.Ed.Se.(MR),
              B.Com.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <FaLocationDot className="inline-block mr-2" /> S.3-4, Neelakamal
              Shopping Centre, Opposite Samved Hospital, Kalikund, Dholka
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <a
                href="tel:+918780752326"
                className="text-accent-cyan hover:underline"
              >
                (878) 075-2326
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
