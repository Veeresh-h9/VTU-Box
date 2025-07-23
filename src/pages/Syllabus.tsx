import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Download, Search, Filter, FileText } from 'lucide-react';

const Syllabus = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get params from URL or use defaults
  const branch = searchParams.get('branch') || '';
  const semester = searchParams.get('semester') || '';
  const scheme = searchParams.get('scheme') || '';
  
  const branches = [
    { id: 'cse', name: 'Computer Science Engineering' },
    { id: 'ise', name: 'Information Science Engineering' },
    { id: 'ece', name: 'Electronics & Communication Engineering' },
    { id: 'eee', name: 'Electrical & Electronics Engineering' },
    { id: 'civil', name: 'Civil Engineering' },
    { id: 'mech', name: 'Mechanical Engineering' },
    { id: 'aiml', name: 'AI & Machine Learning' },
    { id: 'ds', name: 'Data Science' },
  ];
  
  const semesters = [
    { id: '1', name: '1st Semester' },
    { id: '2', name: '2nd Semester' },
    { id: '3', name: '3rd Semester' },
    { id: '4', name: '4th Semester' },
    { id: '5', name: '5th Semester' },
    { id: '6', name: '6th Semester' },
    { id: '7', name: '7th Semester' },
    { id: '8', name: '8th Semester' },
  ];
  
  const schemes = [
    { id: '2021', name: '2021 Scheme' },
    { id: '2018', name: '2018 Scheme' },
    { id: '2015', name: '2015 Scheme' },
  ];
  
  // Mock syllabus data
  const syllabusData = [
    { 
      id: 1, 
      title: 'Programming in C', 
      code: '18CS35', 
      branch: 'cse',
      scheme: '2018',
      semester: '3',
      credits: 4,
      url: '#'
    },
    { 
      id: 2, 
      title: 'Data Structures using C', 
      code: '18CS32', 
      branch: 'cse',
      scheme: '2018',
      semester: '3',
      credits: 4,
      url: '#'
    },
    { 
      id: 3, 
      title: 'Computer Networks', 
      code: '18CS56', 
      branch: 'cse',
      scheme: '2018',
      semester: '5',
      credits: 4,
      url: '#'
    },
    { 
      id: 4, 
      title: 'Machine Learning', 
      code: '18CS53', 
      branch: 'cse',
      scheme: '2018',
      semester: '5',
      credits: 4,
      url: '#'
    },
    { 
      id: 5, 
      title: 'Database Management System', 
      code: '21CS54', 
      branch: 'cse',
      scheme: '2021',
      semester: '5',
      credits: 4,
      url: '#'
    },
    { 
      id: 6, 
      title: 'Object Oriented Programming with Java', 
      code: '21CS36', 
      branch: 'cse',
      scheme: '2021',
      semester: '3',
      credits: 4,
      url: '#'
    },
  ];
  
  const filteredSyllabus = syllabusData.filter(syllabus => {
    return (
      (branch === '' || syllabus.branch === branch) &&
      (semester === '' || syllabus.semester === semester) &&
      (scheme === '' || syllabus.scheme === scheme) &&
      (searchQuery === '' || 
        syllabus.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        syllabus.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });
  
  const handleFilterChange = (type: string, value: string) => {
    searchParams.set(type, value);
    setSearchParams(searchParams);
  };
  
  const handleClearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">VTU Syllabus</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Access the complete syllabus for all branches, semesters, and schemes. Select your filters below to find the specific syllabus you need.
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by subject name or code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Branch Filter */}
          <div className="w-full md:w-64">
            <select
              className="block w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={branch}
              onChange={(e) => handleFilterChange('branch', e.target.value)}
            >
              <option value="">All Branches</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>
          
          {/* Semester Filter */}
          <div className="w-full md:w-48">
            <select
              className="block w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={semester}
              onChange={(e) => handleFilterChange('semester', e.target.value)}
            >
              <option value="">All Semesters</option>
              {semesters.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          
          {/* Scheme Filter */}
          <div className="w-full md:w-48">
            <select
              className="block w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={scheme}
              onChange={(e) => handleFilterChange('scheme', e.target.value)}
            >
              <option value="">All Schemes</option>
              {schemes.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Filter Indicators */}
        {(branch || semester || scheme || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <Filter className="w-4 h-4 mr-1" /> Filters:
            </div>
            
            {branch && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                {branches.find(b => b.id === branch)?.name}
              </span>
            )}
            
            {semester && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                {semesters.find(s => s.id === semester)?.name}
              </span>
            )}
            
            {scheme && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {schemes.find(s => s.id === scheme)?.name}
              </span>
            )}
            
            {searchQuery && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                "{searchQuery}"
              </span>
            )}
            
            <button
              onClick={handleClearFilters}
              className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 ml-2"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
      
      {/* Results */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/80">
          <h2 className="font-medium text-gray-700 dark:text-gray-300">
            {filteredSyllabus.length} {filteredSyllabus.length === 1 ? 'Result' : 'Results'} Found
          </h2>
        </div>
        
        {filteredSyllabus.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredSyllabus.map((syllabus) => (
              <div key={syllabus.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-start md:items-center flex-col md:flex-row md:gap-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{syllabus.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {syllabus.code}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{schemes.find(s => s.id === syllabus.scheme)?.name}</span>
                    <span>•</span>
                    <span>{branches.find(b => b.id === syllabus.branch)?.name}</span>
                    <span>•</span>
                    <span>{semesters.find(s => s.id === syllabus.semester)?.name}</span>
                    <span>•</span>
                    <span>{syllabus.credits} Credits</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={syllabus.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FileText className="mr-2 h-4 w-4" /> View
                  </a>
                  <a 
                    href={syllabus.url}
                    download
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No syllabus found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Try adjusting your filters or search query to find what you're looking for.
            </p>
            <button 
              onClick={handleClearFilters}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Syllabus;