// import React from "react";

// const HowToJoin = () => {
//   return (
//     <section id="how-to-join" className="py-20 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold">Ready to Join Us?</h2>
//         <div className="mt-10">
//           <h3 className="text-2xl font-semibold">Eligibility</h3>
//           <p className="mt-2 text-gray-700">
//             Open to [e.g., students, professionals, etc.] who share our passion
//             for [field/interest].
//           </p>
//         </div>

//         <div className="mt-10">
//           <h3 className="text-2xl font-semibold">Membership Process</h3>
//           <ol className="mt-4 list-decimal list-inside text-left max-w-xl mx-auto">
//             <li>Fill out the online membership form.</li>
//             <li>Attend an orientation session.</li>
//             <li>Pay the annual membership fee of [$ Amount].</li>
//             <li>Start participating in our events and activities!</li>
//           </ol>
//         </div>

//         <div className="mt-10">
//           <h3 className="text-2xl font-semibold">Need Help?</h3>
//           <p className="mt-2 text-gray-700">
//             Contact us at{" "}
//             <a
//               href="mailto:contact@yourclub.com"
//               className="text-blue-500 hover:underline"
//             >
//               contact@yourclub.com
//             </a>{" "}
//             or call us at (123) 456-7890.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowToJoin;
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
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
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
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
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
