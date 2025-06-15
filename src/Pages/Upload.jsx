// frontend/src/components/Upload.jsx
import React, { useState } from 'react';
import API from '../Api/Api'; // Make sure this path is correct

export const Upload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading indicator
  const [error, setError] = useState(null);     // New state for error messages

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null); // Clear previous results when a new file is selected
    setError(null);  // Clear any previous errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true); // Start loading
    setError(null);   // Clear previous errors
    setResult(null);  // Clear previous results

    const formData = new FormData();
    formData.append("file", file); // 'file' here must match the key used in backend (req.files.file)

    try {
      const res = await API.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }, // Important for file uploads
      });
      setResult(res.data.analysis); // Set the analysis object from backend
    } catch (err) {
      console.error("Upload error:", err);
      // More user-friendly error message
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error); // Display error message from backend
      } else {
        setError("Failed to analyze file. Please ensure the backend server is running and try again.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-lg my-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Resume Scanner</h2>

      <form onSubmit={handleSubmit} className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
        <label htmlFor="resume-file" className="block text-lg font-medium text-gray-700 mb-2">
          Upload Your Resume (PDF or DOCX):
        </label>
        <input
          id="resume-file"
          type="file"
          accept=".pdf,.docx"
          onChange={handleChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-4 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Analyzing...' : 'Upload & Analyze Resume'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Gemini Analysis:</h3>

          {result.score !== undefined && (
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-700 mb-2">Resume Score:
                 <span className="ml-2 text-blue-600 text-3xl">{result.score}/100</span>
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${result.score}%` }}
                ></div>
              </div>
            </div>
          )}

          {result.summary && (
            <div className="mb-4">
              <h4 className="font-semibold text-lg text-gray-700 mb-1">Summary:</h4>
              <p className="text-gray-800 leading-relaxed">{result.summary}</p>
            </div>
          )}

          {result.strengths && result.strengths.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-lg text-gray-700 mb-1">Strengths:</h4>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                {result.strengths.map((strength, index) => (
                  <li key={`strength-${index}`}>{strength}</li>
                ))}
              </ul>
            </div>
          )}

          {result.weaknesses && result.weaknesses.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-lg text-gray-700 mb-1">Weaknesses:</h4>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                {result.weaknesses.map((weakness, index) => (
                  <li key={`weakness-${index}`}>{weakness}</li>
                ))}
              </ul>
            </div>
          )}

          {result.tips_for_improvement && result.tips_for_improvement.length > 0 && (
            <div>
              <h4 className="font-semibold text-lg text-gray-700 mb-1">Tips for Improvement:</h4>
              <ul className="list-disc list-inside text-purple-700 space-y-1">
                {result.tips_for_improvement.map((tip, index) => (
                  <li key={`tip-${index}`}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};