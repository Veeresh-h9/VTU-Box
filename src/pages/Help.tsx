import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>('general');
  const [openFaqs, setOpenFaqs] = useState<{ [key: string]: boolean }>({
    'general-1': true
  });
  
  const toggleFaq = (id: string) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const categories = [
    { id: 'general', name: 'General' },
    { id: 'syllabus', name: 'Syllabus' },
    { id: 'calculator', name: 'CGPA Calculator' },
    { id: 'notes', name: 'Notes & Resources' },
    { id: 'account', name: 'Account' },
  ];
  
  // Mock FAQ data
  const faqs = [
    { 
      id: 'general-1', 
      question: 'What is VTU Developer?', 
      answer: 'VTU Developer is a comprehensive platform designed for VTU students to access academic resources like syllabus, calculate CGPA, download notes and connect with other students. Our goal is to simplify the academic journey for VTU students by providing easy access to all necessary resources in one place.',
      category: 'general'
    },
    { 
      id: 'general-2', 
      question: 'Is VTU Developer affiliated with the official VTU website?', 
      answer: 'No, VTU Developer is not officially affiliated with Visvesvaraya Technological University. We are an independent platform created by students for students to facilitate access to academic resources and information.',
      category: 'general'
    },
    { 
      id: 'general-3', 
      question: 'Is VTU Developer free to use?', 
      answer: 'Yes, VTU Developer is completely free to use for all VTU students. We believe in making quality education resources accessible to everyone without any cost barriers.',
      category: 'general'
    },
    { 
      id: 'syllabus-1', 
      question: 'Where can I find the latest syllabus for my branch?', 
      answer: 'You can find the latest syllabus for your branch in the Syllabus section. Select your branch, semester, and scheme (year) from the dropdown menus to find the specific syllabus you need.',
      category: 'syllabus'
    },
    { 
      id: 'syllabus-2', 
      question: 'Are all schemes (2015, 2018, 2021) available?', 
      answer: 'Yes, we provide syllabus for all major schemes including 2015, 2018, and 2021. If you need a specific scheme that is not available, please contact us and we will try to add it as soon as possible.',
      category: 'syllabus'
    },
    { 
      id: 'calculator-1', 
      question: 'How does the SGPA calculator work?', 
      answer: 'The SGPA calculator works by taking your subject credits and grades as input. It then calculates your SGPA based on the VTU grading system where S=10, A=9, B=8, C=7, D=6, E=4, and F=0. The formula used is: SGPA = Σ(Grade Points × Credits) / Σ(Credits).',
      category: 'calculator'
    },
    { 
      id: 'calculator-2', 
      question: 'How do I calculate my CGPA?', 
      answer: 'To calculate your CGPA, select the CGPA option in the calculator. Enter your previous semesters\' average SGPA and total credits, then enter your current semester subjects with their respective grades and credits. The system will calculate your CGPA using the formula: CGPA = Σ(SGPA × Credits for that semester) / Σ(Total Credits).',
      category: 'calculator'
    },
    { 
      id: 'notes-1', 
      question: 'How can I download notes and other resources?', 
      answer: 'You can download notes and resources from the Notes & Resources section. Filter by branch, semester, and resource type to find what you need, then click the Download button next to the resource you want to access.',
      category: 'notes'
    },
    { 
      id: 'notes-2', 
      question: 'Can I upload my own notes to share with others?', 
      answer: 'Currently, only administrators can upload resources to ensure quality and relevance. If you have valuable resources that you would like to share, please contact us and we will review them for potential inclusion.',
      category: 'notes'
    },
    { 
      id: 'account-1', 
      question: 'Do I need to create an account to use VTU Developer?', 
      answer: 'No, you don\'t need to create an account to access most features of VTU Developer. However, creating an account allows you to bookmark resources, track your CGPA calculations, and receive updates about new resources.',
      category: 'account'
    },
    { 
      id: 'account-2', 
      question: 'I forgot my password. How can I reset it?', 
      answer: 'If you forgot your password, you can click on the "Forgot Password" link on the login page. Enter your registered email address, and we will send you a password reset link.',
      category: 'account'
    },
  ];
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory ? faq.category === activeCategory : true;
    const matchesSearch = searchQuery 
      ? faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Help & Support</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Find answers to frequently asked questions and learn how to make the most of VTU Developer.
        </p>
      </div>
      
      {/* Search */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
          
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              View All
            </button>
          )}
        </div>
        
        {/* FAQs Accordion */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md divide-y divide-gray-200 dark:divide-gray-700">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div key={faq.id} className="px-6 py-4">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    {openFaqs[faq.id] ? 
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    }
                  </span>
                </button>
                
                {openFaqs[faq.id] && (
                  <div className="mt-3 text-gray-600 dark:text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="py-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">No FAQs found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('general');
                }}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
        
        {/* Contact Information */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 text-center">
          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300 mb-2">Couldn't find what you're looking for?</h3>
          <p className="text-blue-600 dark:text-blue-400 mb-4">
            Feel free to reach out to us directly with your questions or feedback.
          </p>
          <a 
            href="/community"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Us
          </a>
        </div>
        
        {/* Index / Guide Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Start Guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Finding Your Syllabus</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
                <li>Navigate to the <strong>Syllabus</strong> section</li>
                <li>Select your <strong>Branch</strong> from the dropdown</li>
                <li>Choose your <strong>Semester</strong></li>
                <li>Select the appropriate <strong>Scheme</strong> (year)</li>
                <li>Click on the syllabus you need to view or download it</li>
              </ol>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Calculating Your SGPA</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
                <li>Go to the <strong>Calculator</strong> section</li>
                <li>Select <strong>SGPA</strong> calculation type</li>
                <li>Choose your semester</li>
                <li>Enter your subjects or use the default ones</li>
                <li>Assign credits and grades to each subject</li>
                <li>Click <strong>Calculate SGPA</strong></li>
              </ol>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Downloading Notes</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
                <li>Navigate to the <strong>Notes & Resources</strong> section</li>
                <li>Use filters to narrow down by branch, semester, or resource type</li>
                <li>Use the search bar if you're looking for something specific</li>
                <li>Click the <strong>Download</strong> button next to the resource you want</li>
              </ol>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Joining the Community</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
                <li>Go to the <strong>Community</strong> section</li>
                <li>Choose your preferred platform (Telegram or WhatsApp)</li>
                <li>Click on the join link</li>
                <li>Follow the on-screen instructions to join the group</li>
                <li>Introduce yourself and connect with fellow students!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;