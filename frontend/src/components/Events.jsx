import React from "react";

const Events = () => {
  const pastEvents = [
    {
      title: "Workshop on React",
      date: "2024-01-15",
      description: "Learn the basics of React.js.",
    },
    {
      title: "Networking Night",
      date: "2024-02-20",
      description: "Meet industry professionals and peers.",
    },
    // Add more events as needed
  ];

  const upcomingEvents = [
    {
      title: "Advanced TailwindCSS",
      date: "2024-05-10",
      description: "Deep dive into TailwindCSS.",
    },
    {
      title: "Hackathon Prep",
      date: "2024-06-05",
      description: "Prepare for the upcoming hackathon.",
    },
    // Add more events as needed
  ];

  return (
    <section id="events" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">What We Do</h2>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Past Events</h3>
          <ul className="mt-4 space-y-4">
            {pastEvents.map((event, index) => (
              <li key={index} className="bg-white p-4 rounded shadow">
                <h4 className="text-xl font-semibold">{event.title}</h4>
                <p className="text-gray-600">{event.date}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Upcoming Events</h3>
          <ul className="mt-4 space-y-4">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="bg-white p-4 rounded shadow">
                <h4 className="text-xl font-semibold">{event.title}</h4>
                <p className="text-gray-600">{event.date}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-blue-500 hover:underline"
                >
                  Register
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Events;
