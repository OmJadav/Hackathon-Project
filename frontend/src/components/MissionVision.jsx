import React from "react";
import { Link } from "react-router-dom";

const MissionVision = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Vision */}
      <div className="w-1/2 lg:w-1/2 bg-gray-600 text-white p-10">
        <h2 className="text-2xl font-bold mb-4">Vision</h2>
        <p className="mb-6">
          Mentally retarded people to become economically self-dependant,
          socially participative, and individually self-reliant.
        </p>
        <Link to={"/about"}>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-primary-light transition">
            Read More
          </button>
        </Link>
      </div>

      {/* Mission */}
      <div className="w-full lg:w-1/2 bg-gray-700 text-white p-10">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          To Promote Welfare, Self-Care, Education & Rehabilitation for the
          Mentally Handicapped. To provide for Pre-Vocational/vocational
          Training according to Personal Talent Ability & Make them Self-Reliant
          (Age 15 years & above).
        </p>
        <Link to={"/about"}>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-primary-light transition">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MissionVision;
