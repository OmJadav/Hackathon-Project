// import React from "react";

// const WhyJoin = () => {
//   return (
//     <section id="why-join" className="py-20">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center">
//           Why Join [Your Club Name]?
//         </h2>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="text-center">
//             <div className="text-blue-500 text-4xl">🤝</div>
//             <h3 className="mt-4 text-xl font-semibold">
//               Networking Opportunities
//             </h3>
//             <p className="mt-2 text-gray-600">
//               Connect with like-minded individuals and industry professionals.
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="text-blue-500 text-4xl">📚</div>
//             <h3 className="mt-4 text-xl font-semibold">Skill Development</h3>
//             <p className="mt-2 text-gray-600">
//               Enhance your skills through workshops and seminars.
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="text-blue-500 text-4xl">🚀</div>
//             <h3 className="mt-4 text-xl font-semibold">
//               Leadership Experience
//             </h3>
//             <p className="mt-2 text-gray-600">
//               Take on leadership roles and manage projects.
//             </p>
//           </div>
//           <div className="text-center">
//             <div className="text-blue-500 text-4xl">🌍</div>
//             <h3 className="mt-4 text-xl font-semibold">
//               Community Involvement
//             </h3>
//             <p className="mt-2 text-gray-600">
//               Participate in community service and outreach activities.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Using React Icons for checkmark icon
import { Button } from "flowbite-react"; // Assuming you're using Flowbite for buttons
import { Link } from "react-router-dom";

const WhyJoin = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Why Join NW Freedom?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Become a part of NW Freedom and contribute to a mission dedicated to
          empowering individuals with mental disabilities to achieve
          self-reliance and social participation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <FaCheckCircle className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Empowerment Through Education
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Support our mission to provide comprehensive educational and
              vocational training, tailored to individual talents and abilities,
              ensuring every participant has the opportunity to become
              economically self-reliant.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center  transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <FaCheckCircle className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Foster Social Participation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Help create an inclusive community where individuals with mental
              disabilities can actively participate in social activities and
              contribute to society, breaking down barriers to full community
              engagement.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900  rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <FaCheckCircle className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Promote Individual Self-Reliance
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Join us in our efforts to develop programs that enhance personal
              self-care and independence, ensuring that every individual can
              lead a fulfilling and self-sufficient life.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900  rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <FaCheckCircle className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Champion Welfare and Rehabilitation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Support our comprehensive approach to welfare and rehabilitation,
              providing necessary services that enhance the quality of life and
              promote the well-being of individuals with mental disabilities.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900  rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <FaCheckCircle className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Create Lasting Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Be a part of a movement that not only provides immediate support
              but also works towards long-term solutions and sustainable change
              for individuals with mental disabilities.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900  rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ">
            <FaCheckCircle className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Join a Dedicated Community
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with a passionate community of volunteers, advocates, and
              supporters all working towards the shared goal of empowering and
              uplifting individuals with mental disabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
