// frontend/src/components/Upload.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../Api/Api';
import Navbar from '../Components/Navbar';

export const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null); // State to store URL for display
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Effect to revoke the object URL when the component unmounts or fileUrl changes
  useEffect(() => {
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]); // Re-run effect if fileUrl changes

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (fileUrl) { // Revoke previous URL if a new file is selected
      URL.revokeObjectURL(fileUrl);
      setFileUrl(null);
    }

    if (selectedFile) {
      const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError(null);
        // Create an object URL for the selected file to display later
        setFileUrl(URL.createObjectURL(selectedFile));
      } else {
        setFile(null);
        setError("Invalid file type. Please upload a PDF (.pdf) or DOCX (.docx) file.");
        e.target.value = ''; // Clear the input field visually
      }
    } else {
      setFile(null);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await API.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // On successful analysis, navigate to the feedback page
      // Pass analysis, fileUrl, fileName, and fileType to the feedback page
      navigate('/feedback', {
        state: {
          analysis: res.data.analysis,
          fileUrl: fileUrl,
          fileName: file.name,
          fileType: file.type
        }
      });
    } catch (err) {
      console.error("Upload error:", err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Failed to analyze file. Please ensure the backend server is running and try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-gray-800 shadow-2xl rounded-xl p-8 my-8 border border-gray-700">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-400">
            Resume AI Analyzer
          </h2>

          <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-700 rounded-lg shadow-inner border border-gray-600">
            <label htmlFor="resume-file" className="block text-xl font-medium text-gray-200 mb-4">
              Upload Your Resume (PDF or DOCX)
            </label>
            <input
              id="resume-file"
              type="file"
              accept=".pdf,.docx"
              onChange={handleChange}
              className="block w-full text-base text-gray-300
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-600 file:text-white
                        hover:file:bg-blue-700
                        cursor-pointer
                        border border-gray-600 rounded-lg bg-gray-600
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-700"
            />
            <button
              type="submit"
              className="mt-6 w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500
                        focus:ring-offset-2 focus:ring-offset-gray-800
                        transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed
                        text-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                'Upload & Get Instant Feedback'
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-800 border border-red-600 text-red-100 rounded-lg text-center shadow-md">
              <p className="font-medium">{error}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};