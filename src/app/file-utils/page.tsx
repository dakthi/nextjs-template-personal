'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';

interface FileResult {
  old_name: string;
  new_name: string;
  folder: string;
}

interface ApiResponse {
  success: boolean;
  results?: FileResult[];
  message?: string;
  error?: string;
}

export default function FileUtilsPage() {
  const [directoryPath, setDirectoryPath] = useState('');
  const [results, setResults] = useState<FileResult[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (operation: 'add-prefixes' | 'rename-sequential') => {
    if (!directoryPath.trim()) {
      setError('Please enter a directory path');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');
    setResults([]);

    try {
      const response = await fetch(`/api/file-utils/${operation}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ directoryPath: directoryPath.trim() }),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setResults(data.results || []);
        setMessage(data.message || 'Operation completed successfully');
      } else {
        setError(data.error || 'Operation failed');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          File Utilities
        </h1>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            ⚠️ <strong>Development Only:</strong> This tool is only available in development mode on localhost for security reasons.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Directory Path
          </h2>
          
          <div className="mb-4">
            <label htmlFor="directoryPath" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enter the full path to the directory you want to process:
            </label>
            <input
              type="text"
              id="directoryPath"
              value={directoryPath}
              onChange={(e) => setDirectoryPath(e.target.value)}
              placeholder="/Users/username/Documents/photos"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              disabled={loading}
            />
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => handleSubmit('add-prefixes')}
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              {loading ? 'Processing...' : 'Add Folder Prefixes'}
            </button>
            
            <button
              onClick={() => handleSubmit('rename-sequential')}
              disabled={loading}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              {loading ? 'Processing...' : 'Rename Sequential'}
            </button>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p><strong>Add Folder Prefixes:</strong> Adds the parent folder name as a prefix to all files within subfolders.</p>
            <p><strong>Rename Sequential:</strong> Renames all files in the directory with sequential numbers (1.jpg, 2.png, etc.).</p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
            <p className="text-red-800 dark:text-red-200">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        {message && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <p className="text-green-800 dark:text-green-200">
              <strong>Success:</strong> {message}
            </p>
          </div>
        )}

        {results.length > 0 && (
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Results ({results.length} files processed)
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Folder
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Old Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      New Name
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {results.map((result, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {result.folder}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {result.old_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        {result.new_name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}