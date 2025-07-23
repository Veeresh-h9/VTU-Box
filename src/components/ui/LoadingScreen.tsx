import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="w-24 h-24 mb-8 relative">
        <div className="w-full h-full rounded-md bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white font-bold text-3xl animate-pulse">
          VB
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-2">VTU Box</h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Your complete companion for VTU academics</p>
    </div>
  );
};

export default LoadingScreen;