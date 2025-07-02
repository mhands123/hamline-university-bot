
import { GraduationCap, Users, Calendar, MapPin, BookOpen, Trophy } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    {
      icon: GraduationCap,
      title: "Academics",
      description: "Explore our programs and degrees",
      href: "#"
    },
    {
      icon: Users,
      title: "Admissions",
      description: "Start your Hamline journey",
      href: "#"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Campus events and activities",
      href: "#"
    },
    {
      icon: MapPin,
      title: "Visit Campus",
      description: "Schedule a campus tour",
      href: "#"
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "Access academic resources",
      href: "#"
    },
    {
      icon: Trophy,
      title: "Athletics",
      description: "Piper athletics and recreation",
      href: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <link.icon className="w-8 h-8 text-red-800 mr-3 group-hover:text-yellow-500 transition-colors" />
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-800 transition-colors">
                  {link.title}
                </h3>
              </div>
              <p className="text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
