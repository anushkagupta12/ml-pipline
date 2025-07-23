import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewProjectModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [selectedPipeline, setSelectedPipeline] = useState("TDM (Tabular Data Manager)");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;
    console.log("Project Created:", { projectName, selectedPipeline });
    setProjectName("");
    setSelectedPipeline("TDM (Tabular Data Manager)");
    onClose();

  
    navigate("/pipeline-setup");
  };

  useEffect(() => {
    if (!isOpen) {
      setProjectName("");
      setSelectedPipeline("TDM (Tabular Data Manager)");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create New Project</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter Project Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-grey-700 focus:ring-2 focus:ring-black-700"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Pipeline</label>
            <select
              value={selectedPipeline}
              onChange={(e) => setSelectedPipeline(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-1 focus:ring-2 focus:ring-grey-500"
            >
              <option>TDM (Tabular Data Manager)</option>
              <option>Image Generation Pipeline</option>
              <option>NLP Processing Pipeline</option>
              <option>Custom Pipeline</option>
            </select>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!projectName.trim()}
              className={`px-4 py-2 text-sm text-white rounded ${
                projectName.trim()
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-blue-300 cursor-not-allowed"
              }`}
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProjectModal;
