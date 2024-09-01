import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      feedback:
        "Joining this club has significantly enhanced my networking skills and opened up new opportunities.",
    },
    {
      name: "Bob Smith",
      feedback:
        "The workshops are incredibly insightful and have helped me develop my technical skills.",
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Hear from Our Members</h2>
        <div className="mt-10 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow">
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <h4 className="mt-4 text-xl font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
