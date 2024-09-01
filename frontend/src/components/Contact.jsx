import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <div className="mt-10 max-w-lg mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              Twitter
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              Instagram
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
