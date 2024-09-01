import React from "react";

const HowToJoin = () => {
  return (
    <section id="how-to-join" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Ready to Join Us?</h2>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Eligibility</h3>
          <p className="mt-2 text-gray-700">
            Open to [e.g., students, professionals, etc.] who share our passion
            for [field/interest].
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Membership Process</h3>
          <ol className="mt-4 list-decimal list-inside text-left max-w-xl mx-auto">
            <li>Fill out the online membership form.</li>
            <li>Attend an orientation session.</li>
            <li>Pay the annual membership fee of [$ Amount].</li>
            <li>Start participating in our events and activities!</li>
          </ol>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Need Help?</h3>
          <p className="mt-2 text-gray-700">
            Contact us at{" "}
            <a
              href="mailto:contact@yourclub.com"
              className="text-blue-500 hover:underline"
            >
              contact@yourclub.com
            </a>{" "}
            or call us at (123) 456-7890.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
