import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Upload, 
  Users, 
  Settings, 
  LogOut, 
  Plus, 
  BookOpen,
  File,
  Trash, 
  Edit,
  Grid,
  List,
  Download
} from 'lucide-react';

const AdminDashboard = () => {
  const [resourceType, setResourceType] = useState<'notes' | 'syllabus' | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mock resources data
  const resources = [
    { 
      id: 1, 
      title: 'Data Structures and Algorithms', 
      type: 'notes',
      branch: 'CSE',
      semester: '3rd Semester',
      uploadDate: '2023-06-15',
      downloads: 420,
    },
    { 
      id: 2, 
      title: 'Operating Systems Notes', 
      type: 'notes',
      branch: 'CSE',
      semester: '5th Semester',
      uploadDate: '2023-05-20',
      downloads: 380,
    },
    { 
      id: 3, 
      title: 'CSE 2021 Scheme Syllabus', 
      type: 'syllabus',
      branch: 'CSE',
      scheme: '2021',
      uploadDate: '2023-02-10',
      downloads: 750,
    },
    { 
      id: 4, 
      title: 'ECE 2021 Scheme Syllabus', 
      type: 'syllabus',
      branch: 'ECE',
      scheme: '2021',
      uploadDate: '2023-02-11',
      downloads: 620,
    },
    { 
      id: 5, 
      title: 'Database Management System Notes', 
      type: 'notes',
      branch: 'CSE',
      semester: '5th Semester',
      uploadDate: '2023-07-05',
      downloads: 310,
    },
    { 
      id: 6, 
      title: 'Computer Networks', 
      type: 'notes',
      branch: 'CSE',
      semester: '6th Semester',
      uploadDate: '2023-08-12',
      downloads: 280,
    },
  ];
  
  const filteredResources = resourceType === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === resourceType);
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-md z-10 pt-16">
        <nav className="mt-6">
          <div className="px-4 py-2">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Main
            </p>
          </div>
          
          <Link
            to="/admin/dashboard"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Home className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            Dashboard
          </Link>
          
          <div className="px-4 py-2 mt-4">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Content Management
            </p>
          </div>
          
          <button
            onClick={() => setResourceType('notes')}
            className={`flex items-center px-4 py-3 w-full text-left ${
              resourceType === 'notes' 
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <FileText className={`w-5 h-5 mr-3 ${
              resourceType === 'notes' 
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }`} />
            Notes & Resources
          </button>
          
          <button
            onClick={() => setResourceType('syllabus')}
            className={`flex items-center px-4 py-3 w-full text-left ${
              resourceType === 'syllabus' 
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <BookOpen className={`w-5 h-5 mr-3 ${
              resourceType === 'syllabus' 
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }`} />
            Syllabus
          </button>
          
          <Link
            to="/admin/dashboard"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Upload className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            Upload Content
          </Link>
          
          <div className="px-4 py-2 mt-4">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Users
            </p>
          </div>
          
          <Link
            to="/admin/dashboard"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Users className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            Manage Users
          </Link>
          
          <div className="px-4 py-2 mt-4">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Settings
            </p>
          </div>
          
          <Link
            to="/admin/dashboard"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Settings className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            Account Settings
          </Link>
          
          <Link
            to="/"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 mt-8"
          >
            <LogOut className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            Logout
          </Link>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="ml-64 pt-16 px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your content and users
            </p>
          </div>
          
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="h-4 w-4 mr-2" />
            Add New Content
          </button>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 mr-4">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Total Resources</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">248</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 mr-4">
                <Download className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Total Downloads</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12,584</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 mr-4">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Registered Users</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,250</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Management */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 flex justify-between items-center">
            <h2 className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
              {resourceType === 'all' ? (
                <File className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
              ) : resourceType === 'notes' ? (
                <FileText className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              ) : (
                <BookOpen className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
              )}
              
              {resourceType === 'all' ? 'All Resources' : 
                resourceType === 'notes' ? 'Notes & Resources' : 'Syllabus'}
            </h2>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setResourceType('all')}
                className={`px-3 py-1 rounded-md text-xs font-medium ${
                  resourceType === 'all' 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1 rounded-md ${
                  viewMode === 'grid' 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1 rounded-md ${
                  viewMode === 'list' 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className={`h-2 ${
                    resource.type === 'notes' ? 'bg-blue-500' : 'bg-green-500'
                  }`}></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        {resource.title}
                      </h3>
                      <div className={`rounded-full w-2 h-2 ${
                        resource.type === 'notes' ? 'bg-blue-500' : 'bg-green-500'
                      }`}></div>
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <p>
                        {resource.type === 'notes' ? (
                          <>
                            {resource.branch} • {resource.semester}
                          </>
                        ) : (
                          <>
                            {resource.branch} • {resource.scheme} Scheme
                          </>
                        )}
                      </p>
                      <p>
                        Uploaded: {resource.uploadDate}
                      </p>
                      <p>
                        Downloads: {resource.downloads}
                      </p>
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <button className="p-1 rounded text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Details
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Uploads
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Downloads
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredResources.map((resource) => (
                    <tr key={resource.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {resource.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          resource.type === 'notes' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        }`}>
                          {resource.type === 'notes' ? 'Notes' : 'Syllabus'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {resource.type === 'notes' ? (
                          <>
                            {resource.branch} • {resource.semester}
                          </>
                        ) : (
                          <>
                            {resource.branch} • {resource.scheme} Scheme
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {resource.uploadDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {resource.downloads}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;