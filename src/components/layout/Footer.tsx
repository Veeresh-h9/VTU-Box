import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                VB
              </div>
              <span className="font-semibold text-xl text-blue-800 dark:text-blue-400">VTU Box</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Your complete companion for VTU academics, resources, and community.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:contact@vtubox.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/syllabus" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  VTU Syllabus
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  CGPA Calculator
                </Link>
              </li>
              <li>
                <Link to="/notes" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Notes & Resources
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Help & Guide
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://vtu.ac.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center gap-1">
                  VTU Official Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://results.vtu.ac.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center gap-1">
                  VTU Results
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://vtu.ac.in/en/academic-calendar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center gap-1">
                  Academic Calendar
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://vtu.ac.in/en/examination" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm flex items-center gap-1">
                  Examination Portal
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Community */}
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/community" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Join Telegram Group
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Join WhatsApp Group
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} VTU Box. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;