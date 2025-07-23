import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, Calculator, FileText, HelpCircle, Users, ChevronRight, ArrowRight, Bell } from 'lucide-react';

const Home = () => {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  
  const announcements = [
    "VTU announces 2023 exam schedule - Check the dates now",
    "New resources added for CSE 5th semester - Data Science notes available",
    "Maintenance on Results portal scheduled for this weekend",
    "VTU Developer now supports 2022 scheme syllabus",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [announcements.length]);
  
  const features = [
    {
      title: "VTU Syllabus",
      description: "Access the complete syllabus for all branches and schemes",
      icon: <Book className="w-6 h-6" />,
      link: "/syllabus",
      color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    },
    {
      title: "CGPA Calculator",
      description: "Calculate your SGPA and CGPA with ease",
      icon: <Calculator className="w-6 h-6" />,
      link: "/calculator",
      color: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
    },
    {
      title: "Notes & Resources",
      description: "Download notes, previous papers and more",
      icon: <FileText className="w-6 h-6" />,
      link: "/notes",
      color: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    },
    {
      title: "Help & Guide",
      description: "Get answers to all your questions",
      icon: <HelpCircle className="w-6 h-6" />,
      link: "/help",
      color: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
    },
    {
      title: "Community",
      description: "Connect with other VTU students",
      icon: <Users className="w-6 h-6" />,
      link: "/community",
      color: "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400",
    },
  ];
  
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Complete Companion for VTU Academics</h1>
            <p className="text-xl text-blue-100 mb-8">Access syllabus, calculate CGPA, download notes, and connect with other students - all in one place</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/syllabus" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
              >
                Browse Syllabus <ChevronRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/calculator" 
                className="bg-blue-600 text-white hover:bg-blue-500 border border-blue-500 px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
              >
                Calculate CGPA <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Announcements */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-y border-yellow-200 dark:border-yellow-900/30 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Bell className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0" />
            <div className="overflow-hidden relative h-6">
              {announcements.map((announcement, index) => (
                <p
                  key={index}
                  className={`absolute transition-transform duration-500 w-full text-yellow-800 dark:text-yellow-300 ${
                    index === currentAnnouncementIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  {announcement}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link}
                className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-xl dark:hover:border-transparent transition-all duration-300 relative overflow-hidden"
              >
                <div className={`rounded-lg p-3 inline-block mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50 dark:to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fast access section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Access</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link to="/syllabus?branch=cse&scheme=2021" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="font-medium text-gray-900 dark:text-gray-100">CSE 2021</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Syllabus</p>
            </Link>
            <Link to="/syllabus?branch=ise&scheme=2021" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="font-medium text-gray-900 dark:text-gray-100">ISE 2021</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Syllabus</p>
            </Link>
            <Link to="/syllabus?branch=ece&scheme=2021" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="font-medium text-gray-900 dark:text-gray-100">ECE 2021</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Syllabus</p>
            </Link>
            <Link to="/syllabus?branch=eee&scheme=2021" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="font-medium text-gray-900 dark:text-gray-100">EEE 2021</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Syllabus</p>
            </Link>
            <Link to="/syllabus?branch=civil&scheme=2021" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="font-medium text-gray-900 dark:text-gray-100">Civil 2021</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Syllabus</p>
            </Link>
            <Link to="/syllabus?branch=mech&scheme=2021" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <p className="font-medium text-gray-900 dark:text-gray-100">Mech 2021</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Syllabus</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Student Community</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Connect with fellow VTU students, get help with assignments, share resources, and stay updated with the latest announcements</p>
            <Link 
              to="/community" 
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-colors duration-300"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;