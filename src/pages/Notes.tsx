import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FolderOpen, FileText, Search, Filter, Download, BookOpen, Beaker, Clock } from 'lucide-react';

const Notes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get params from URL or use defaults
  const branch = searchParams.get('branch') || '';
  const semester = searchParams.get('semester') || '';
  const type = searchParams.get('type') || '';
  
  const branches = [
    { id: 'cse', name: 'Computer Science Engineering' },
    { id: 'ise', name: 'Information Science Engineering' },
    { id: 'ece', name: 'Electronics & Communication Engineering' },
    { id: 'eee', name: 'Electrical & Electronics Engineering' },
    { id: 'civil', name: 'Civil Engineering' },
    { id: 'mech', name: 'Mechanical Engineering' },
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
  
  const resourceTypes = [
    { id: 'notes', name: 'Notes', icon: <FileText className="w-4 h-4" /> },
    { id: 'lab', name: 'Lab Manuals', icon: <Beaker className="w-4 h-4" /> },
    { id: 'pyq', name: 'Previous Year Questions', icon: <Clock className="w-4 h-4" /> },
    { id: 'textbook', name: 'Textbooks', icon: <BookOpen className="w-4 h-4" /> },
  ];
  
  // Mock notes data
  const notesData = [
    { 
      id: 1, 
      title: 'Data Structures and Algorithms', 
      type: 'notes',
      branch: 'cse',
      semester: '3',
      uploadedBy: 'Admin',
      uploadDate: '2023-06-15',
      size: '2.4 MB',
      downloads: 420,
      url: '#'
    },
    { 
      id: 2, 
      title: 'Operating Systems Notes', 
      type: 'notes',
      branch: 'cse',
      semester: '5',
      uploadedBy: 'Admin',
      uploadDate: '2023-05-20',
      size: '3.7 MB',
      downloads: 380,
      url: '#'
    },
    { 
      id: 3, 
      title: 'DBMS Lab Manual', 
      type: 'lab',
      branch: 'cse',
      semester: '5',
      uploadedBy: 'Admin',
      uploadDate: '2023-07-02',
      size: '1.8 MB',
      downloads: 290,
      url: '#'
    },
    { 
      id: 4, 
      title: 'Computer Networks Previous Year Questions', 
      type: 'pyq',
      branch: 'cse',
      semester: '6',
      uploadedBy: 'Admin',
      uploadDate: '2023-08-10',
      size: '1.2 MB',
      downloads: 540,
      url: '#'
    },
    { 
      id: 5, 
      title: 'Introduction to Algorithms Textbook', 
      type: 'textbook',
      branch: 'cse',
      semester: '4',
      uploadedBy: 'Admin',
      uploadDate: '2023-04-05',
      size: '8.5 MB',
      downloads: 210,
      url: '#'
    },
    { 
      id: 6, 
      title: 'Digital Signal Processing Notes', 
      type: 'notes',
      branch: 'ece',
      semester: '5',
      uploadedBy: 'Admin',
      uploadDate: '2023-06-22',
      size: '4.1 MB',
      downloads: 190,
      url: '#'
    },
  ];
  
  const filteredNotes = notesData.filter(note => {
    return (
      (branch === '' || note.branch === branch) &&
      (semester === '' || note.semester === semester) &&
      (type === '' || note.type === type) &&
      (searchQuery === '' || 
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });
  
  const handleFilterChange = (filterType: string, value: string) => {
    searchParams.set(filterType, value);
    setSearchParams(searchParams);
  };
  
  const handleClearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };
  
  const getResourceTypeIcon = (resourceType: string) => {
    const type = resourceTypes.find(t => t.id === resourceType);
    return type ? type.icon : <FileText className="w-4 h-4" />;
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Notes & Resources</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Access study materials, lab manuals, previous year questions and more. Filter by branch, semester and resource type.
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
                placeholder="Search for notes, textbooks, etc..."
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
          
          {/* Resource Type Filter */}
          <div className="w-full md:w-48">
            <select
              className="block w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">All Resources</option>
              {resourceTypes.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Filter Indicators */}
        {(branch || semester || type || searchQuery) && (
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
            
            {type && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {resourceTypes.find(t => t.id === type)?.name}
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
            {filteredNotes.length} {filteredNotes.length === 1 ? 'Resource' : 'Resources'} Found
          </h2>
        </div>
        
        {filteredNotes.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredNotes.map((note) => (
              <div key={note.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className={`rounded-md p-2 ${
                        note.type === 'notes' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400' :
                        note.type === 'lab' ? 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400' :
                        note.type === 'pyq' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400' :
                        'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400'
                      }`}>
                        {getResourceTypeIcon(note.type)}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{note.title}</h3>
                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                          <span>{branches.find(b => b.id === note.branch)?.name}</span>
                          <span>{semesters.find(s => s.id === note.semester)?.name}</span>
                          <span>Uploaded: {note.uploadDate}</span>
                          <span>{note.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-auto">
                    <a 
                      href={note.url}
                      download
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download ({note.size})
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <FolderOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No resources found</h3>
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
      
      {/* Admin Login CTA */}
      <div className="mt-12 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 text-center">
        <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300 mb-2">Are you an administrator?</h3>
        <p className="text-blue-600 dark:text-blue-400 mb-4">
          Log in to upload new resources and manage existing content.
        </p>
        <a 
          href="/admin/login"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Admin Login
        </a>
      </div>
    </div>
  );
};

export default Notes;