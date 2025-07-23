import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  interface SearchResult {
    title: string;
    description: string;
    link: string;
    type: 'syllabus' | 'notes' | 'calculator' | 'help' | 'page';
  }

  const mockSearchResults: SearchResult[] = [
    { title: 'CSE Syllabus', description: '2021 Scheme', link: '/syllabus?branch=cse&scheme=2021', type: 'syllabus' },
    { title: 'CGPA Calculator', description: 'Calculate your CGPA/SGPA', link: '/calculator', type: 'calculator' },
    { title: 'Data Structures Notes', description: '3rd Semester', link: '/notes?subject=ds', type: 'notes' },
    { title: 'How to Calculate SGPA', description: 'Step-by-step guide', link: '/help/calculate-sgpa', type: 'help' },
    { title: 'Community', description: 'Join VTU student groups', link: '/community', type: 'page' },
  ];

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim().length > 1) {
      // Filter mock results based on query
      const filteredResults = mockSearchResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (link: string) => {
    navigate(link);
    onClose();
  };

  // Prevent clicks inside modal from closing it
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-in"
        onClick={handleModalClick}
      >
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
          <input
            ref={searchInputRef}
            className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
            placeholder="Search for syllabus, notes, help..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map((result, index) => (
                <div 
                  key={index}
                  onClick={() => handleResultClick(result.link)}
                  className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="flex items-center">
                    <span 
                      className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        result.type === 'syllabus' ? 'bg-blue-500' :
                        result.type === 'notes' ? 'bg-green-500' :
                        result.type === 'calculator' ? 'bg-purple-500' :
                        result.type === 'help' ? 'bg-orange-500' :
                        'bg-gray-500'
                      }`}
                    />
                    <div>
                      <h4 className="text-gray-900 dark:text-gray-100 font-medium">{result.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{result.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            searchQuery.trim().length > 0 && (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                No results found for "{searchQuery}"
              </div>
            )
          )}
          
          {searchQuery.trim().length === 0 && (
            <div className="py-8 px-4 text-center text-gray-500 dark:text-gray-400">
              <p>Start typing to search</p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto">
                <button 
                  onClick={() => handleResultClick('/syllabus')}
                  className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  Syllabus
                </button>
                <button 
                  onClick={() => handleResultClick('/calculator')}
                  className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  Calculator
                </button>
                <button 
                  onClick={() => handleResultClick('/notes')}
                  className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  Notes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;