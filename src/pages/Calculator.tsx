import { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, X, Info, Plus, Trash } from 'lucide-react';

const Calculator = () => {
  // VTU Grade points
  const gradePoints = {
    'S': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'E': 4,
    'F': 0
  };

  type Subject = {
    id: number;
    name: string;
    credits: number;
    grade: keyof typeof gradePoints | '';
  };

  const [semester, setSemester] = useState<number>(1);
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: 'Subject 1', credits: 4, grade: '' },
    { id: 2, name: 'Subject 2', credits: 4, grade: '' },
    { id: 3, name: 'Subject 3', credits: 3, grade: '' },
    { id: 4, name: 'Subject 4', credits: 3, grade: '' },
    { id: 5, name: 'Subject 5', credits: 3, grade: '' },
    { id: 6, name: 'Lab 1', credits: 2, grade: '' },
    { id: 7, name: 'Lab 2', credits: 2, grade: '' },
  ]);
  
  const [sgpa, setSgpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [previousSGPA, setPreviousSGPA] = useState<string>('');
  const [previousCredits, setPreviousCredits] = useState<string>('');
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [calculationType, setCalculationType] = useState<'sgpa' | 'cgpa'>('sgpa');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  
  // Update total credits when subjects change
  useEffect(() => {
    const total = subjects.reduce((sum, subject) => sum + subject.credits, 0);
    setTotalCredits(total);
  }, [subjects]);
  
  const handleSubjectChange = (id: number, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map(subject => 
      subject.id === id ? { ...subject, [field]: value } : subject
    ));
  };
  
  const handleAddSubject = () => {
    const nextId = Math.max(...subjects.map(s => s.id), 0) + 1;
    setSubjects([...subjects, { id: nextId, name: `Subject ${nextId}`, credits: 3, grade: '' }]);
  };
  
  const handleRemoveSubject = (id: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(subject => subject.id !== id));
    }
  };
  
  const calculateSGPA = () => {
    let totalGradePoints = 0;
    let validSubjects = 0;
    
    subjects.forEach(subject => {
      if (subject.grade) {
        totalGradePoints += subject.credits * gradePoints[subject.grade];
        validSubjects++;
      }
    });
    
    if (validSubjects === 0) {
      alert('Please assign grades to at least one subject.');
      return;
    }
    
    const calculatedSGPA = totalGradePoints / totalCredits;
    setSgpa(parseFloat(calculatedSGPA.toFixed(2)));
  };
  
  const calculateCGPA = () => {
    if (!previousSGPA || !previousCredits) {
      alert('Please enter previous SGPA and credits.');
      return;
    }
    
    const prevSGPA = parseFloat(previousSGPA);
    const prevCredits = parseFloat(previousCredits);
    
    if (isNaN(prevSGPA) || isNaN(prevCredits) || prevSGPA < 0 || prevSGPA > 10 || prevCredits <= 0) {
      alert('Please enter valid SGPA (0-10) and credits (>0).');
      return;
    }
    
    let currentSGPA = 0;
    let validSubjects = 0;
    
    subjects.forEach(subject => {
      if (subject.grade) {
        currentSGPA += subject.credits * gradePoints[subject.grade];
        validSubjects++;
      }
    });
    
    if (validSubjects === 0) {
      alert('Please assign grades to at least one subject for the current semester.');
      return;
    }
    
    currentSGPA = currentSGPA / totalCredits;
    
    const totalCreditsAll = prevCredits + totalCredits;
    const calculatedCGPA = ((prevSGPA * prevCredits) + (currentSGPA * totalCredits)) / totalCreditsAll;
    
    setCgpa(parseFloat(calculatedCGPA.toFixed(2)));
  };
  
  const handleCalculate = () => {
    if (calculationType === 'sgpa') {
      calculateSGPA();
    } else {
      calculateCGPA();
    }
  };
  
  const resetForm = () => {
    setSubjects(subjects.map(subject => ({ ...subject, grade: '' })));
    setSgpa(null);
    setCgpa(null);
    setPreviousSGPA('');
    setPreviousCredits('');
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">VTU SGPA/CGPA Calculator</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Calculate your Semester GPA (SGPA) or Cumulative GPA (CGPA) based on VTU's grading system. 
          Enter your subjects, credits, and grades below.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center">
              <CalculatorIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                GPA Calculator
              </h2>
              <button 
                onClick={() => setShowInfoModal(true)}
                className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Information about grading system"
              >
                <Info className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setCalculationType('sgpa')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  calculationType === 'sgpa' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                SGPA
              </button>
              <button
                onClick={() => setCalculationType('cgpa')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  calculationType === 'cgpa' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                CGPA
              </button>
            </div>
          </div>
          
          {/* Semester Selection */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Semester
            </label>
            <select
              value={semester}
              onChange={(e) => setSemester(parseInt(e.target.value))}
              className="w-full sm:w-48 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  {sem === 1 ? '1st' : sem === 2 ? '2nd' : sem === 3 ? '3rd' : `${sem}th`} Semester
                </option>
              ))}
            </select>
          </div>
          
          {/* Previous SGPA Section (for CGPA calculation) */}
          {calculationType === 'cgpa' && (
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Previous Semesters SGPA (Average)
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  value={previousSGPA}
                  onChange={(e) => setPreviousSGPA(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter previous SGPA (0-10)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Previous Semesters Total Credits
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={previousCredits}
                  onChange={(e) => setPreviousCredits(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter total credits"
                />
              </div>
            </div>
          )}
          
          {/* Subjects Table */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Current Semester Subjects
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Credits: {totalCredits}
              </p>
            </div>
            
            <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-24">
                      Credits
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-32">
                      Grade
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-20">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {subjects.map((subject) => (
                    <tr key={subject.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={subject.name}
                          onChange={(e) => handleSubjectChange(subject.id, 'name', e.target.value)}
                          className="w-full border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-900 dark:text-gray-100"
                          placeholder="Subject Name"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={subject.credits}
                          onChange={(e) => handleSubjectChange(subject.id, 'credits', parseInt(e.target.value))}
                          className="block w-20 border border-gray-300 dark:border-gray-600 rounded-md py-1 px-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          {[1, 2, 3, 4, 5].map((credit) => (
                            <option key={credit} value={credit}>{credit}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={subject.grade}
                          onChange={(e) => handleSubjectChange(subject.id, 'grade', e.target.value as keyof typeof gradePoints)}
                          className="block w-24 border border-gray-300 dark:border-gray-600 rounded-md py-1 px-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select</option>
                          {Object.keys(gradePoints).map((grade) => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => handleRemoveSubject(subject.id)}
                          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                          disabled={subjects.length <= 1}
                          aria-label="Remove subject"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button
              onClick={handleAddSubject}
              className="mt-4 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
            >
              <Plus className="h-4 w-4 mr-1" /> Add Subject
            </button>
          </div>
          
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={handleCalculate}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-3 font-medium"
            >
              Calculate {calculationType.toUpperCase()}
            </button>
            
            <button
              onClick={resetForm}
              className="w-full sm:w-auto bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md px-6 py-3 font-medium"
            >
              Reset
            </button>
          </div>
        </div>
        
        {/* Results Section */}
        {(sgpa !== null || cgpa !== null) && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md overflow-hidden text-white p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">
              Your {calculationType.toUpperCase()} is
            </h3>
            <div className="text-6xl font-bold mb-4">
              {calculationType === 'sgpa' ? sgpa : cgpa}
            </div>
            <p className="text-blue-100">
              {calculationType === 'sgpa' 
                ? `Semester ${semester} GPA based on ${totalCredits} credits`
                : `Cumulative GPA based on ${totalCredits + parseInt(previousCredits || '0')} total credits`
              }
            </p>
          </div>
        )}
      </div>
      
      {/* Grading Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full mx-auto p-6 animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">VTU Grading System</h3>
              <button 
                onClick={() => setShowInfoModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Grade
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">S</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">Outstanding</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">10</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">Excellent</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">9</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">B</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">Very Good</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">8</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">C</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">Good</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">7</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">D</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">Average</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">6</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">E</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">Poor</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">4</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">F</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">Fail</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2">To calculate SGPA:</p>
              <p className="bg-gray-100 dark:bg-gray-700 p-2 rounded">SGPA = Σ(Grade Points × Credits) / Σ(Credits)</p>
              
              <p className="mt-4 mb-2">To calculate CGPA:</p>
              <p className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                CGPA = Σ(SGPA × Credits for that semester) / Σ(Total Credits)
              </p>
            </div>
            
            <button
              onClick={() => setShowInfoModal(false)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 font-medium"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;