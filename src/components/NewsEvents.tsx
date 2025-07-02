
import { Calendar, ArrowRight } from 'lucide-react';

const NewsEvents = () => {
  const newsItems = [
    {
      title: "Hamline Students Win National Competition",
      excerpt: "Our debate team takes first place at the National Collegiate Debate Championship.",
      date: "March 15, 2024",
      category: "Academics"
    },
    {
      title: "New Sustainability Initiative Launched",
      excerpt: "Campus-wide program aims to achieve carbon neutrality by 2030.",
      date: "March 12, 2024",
      category: "Campus Life"
    },
    {
      title: "Spring Concert Series Begins",
      excerpt: "Join us for an evening of music featuring student and faculty performances.",
      date: "March 10, 2024",
      category: "Arts"
    }
  ];

  const events = [
    {
      title: "Admitted Student Day",
      date: "April 15, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Anderson Center"
    },
    {
      title: "Faculty Research Symposium",
      date: "April 18, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Science Center"
    },
    {
      title: "Spring Commencement",
      date: "May 12, 2024",
      time: "10:00 AM",
      location: "Klas Center"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
              <a href="#" className="text-red-800 hover:text-red-900 font-medium flex items-center">
                View All <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <article key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-red-800 transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
              <a href="#" className="text-red-800 hover:text-red-900 font-medium flex items-center">
                View Calendar <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-red-800 text-white p-3 rounded-lg mr-4 flex-shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {event.title}
                      </h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium mr-2">Date:</span>
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">Time:</span>
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">Location:</span>
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
