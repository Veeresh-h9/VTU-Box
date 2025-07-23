import { Link } from 'react-router-dom';
import { Send, MessageSquare, ExternalLink, Mail, Smartphone, Users, ArrowRight } from 'lucide-react';

const Community = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Join Our Community</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Connect with fellow VTU students, get help with assignments, share resources, and stay updated with the latest announcements.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        {/* Community Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl shadow-md overflow-hidden border border-blue-100 dark:border-blue-800">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Telegram Group</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Join our active Telegram group with over 5,000 VTU students. Get instant updates, share resources, and connect with peers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Quick responses to your queries
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                  File sharing for notes and resources
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                  Subject-specific discussion channels
                </li>
              </ul>
              <a 
                href="https://t.me/vtu_developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Join Telegram Group <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl shadow-md overflow-hidden border border-green-100 dark:border-green-800">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp Group</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with classmates in our branch-specific WhatsApp groups. Perfect for class announcements and assignment discussions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                  Branch-specific groups available
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                  Direct communication with classmates
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                  Semester-wise groups for focused discussions
                </li>
              </ul>
              <a 
                href="https://chat.whatsapp.com/vtu_developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Join WhatsApp Group <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have a question or feedback? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <form className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
        
        {/* Alternative Contact Methods */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center">
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Send us an email for any queries or feedback
            </p>
            <a 
              href="mailto:contact@vtudeveloper.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              contact@vtudeveloper.com
            </a>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Social Media</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Follow us on social media for updates
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://twitter.com/vtudeveloper" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Twitter
              </a>
              <a 
                href="https://instagram.com/vtudeveloper" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Instagram
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center">
            <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Support</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need help? Check out our support page
            </p>
            <Link 
              to="/help"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Visit Help Center <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;