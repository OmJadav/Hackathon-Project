import React from "react";

const WhyJoin = () => {
  return (
    <section id="why-join" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Why Join [Your Club Name]?
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-blue-500 text-4xl">🤝</div>
            <h3 className="mt-4 text-xl font-semibold">
              Networking Opportunities
            </h3>
            <p className="mt-2 text-gray-600">
              Connect with like-minded individuals and industry professionals.
            </p>
          </div>
          <div className="text-center">
            <div className="text-blue-500 text-4xl">📚</div>
            <h3 className="mt-4 text-xl font-semibold">Skill Development</h3>
            <p className="mt-2 text-gray-600">
              Enhance your skills through workshops and seminars.
            </p>
          </div>
          <div className="text-center">
            <div className="text-blue-500 text-4xl">🚀</div>
            <h3 className="mt-4 text-xl font-semibold">
              Leadership Experience
            </h3>
            <p className="mt-2 text-gray-600">
              Take on leadership roles and manage projects.
            </p>
          </div>
          <div className="text-center">
            <div className="text-blue-500 text-4xl">🌍</div>
            <h3 className="mt-4 text-xl font-semibold">
              Community Involvement
            </h3>
            <p className="mt-2 text-gray-600">
              Participate in community service and outreach activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
