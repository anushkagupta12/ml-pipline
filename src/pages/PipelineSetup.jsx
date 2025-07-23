import React, { useState } from "react";
import UploadDatasetStep from "../components/UploadDatasetStep";

const steps = [
  { label: "Upload Dataset", tooltip: "Upload CSV file" },
  { label: "Column Selection", tooltip: "Choose columns for processing" },
  { label: "Model Selection", tooltip: "Select model" },
  { label: "Config Selection", tooltip: "Select Configuration" },
  { label: "Enter Datapoints", tooltip: "10k-10 million" },
  { label: "Review & Run", tooltip: "Review & Run the pipeline" },
  { label: "Execution", tooltip: "Monitor pipeline execution" },
];

const PipelineSetup = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedPipeline, setSelectedPipeline] = useState("TDM (Tabular Data Manager)");
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 1 && !projectName.trim()) return;
    if (step < steps.length + 1) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pipeline Setup</h1>
          <p className="text-gray-600">Configure your ML pipeline step by step</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold">Pipeline Steps</h3>
              </div>
              <div className="p-6 pt-0 space-y-4">
                {steps.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border transition-colors ${
                      step === index + 2 ? "bg-blue-100 border-black" : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step === index + 2 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.tooltip}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-semibold">Project Setup</h3>
                    <p className="text-gray-600 mt-1">Create and configure project</p>
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-800">
                    Step {step} of {steps.length + 1}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200 mt-4 mb-4">
                  <div
                    className="h-4 bg-black rounded transition-all duration-300"
                    style={{ width: `${(step / (steps.length + 1)) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-6 pt-0">
                {/* Step 1: Project Setup */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Name</label>
                      <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Enter Project Name"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pipeline Type</label>
                      <select
                        value={selectedPipeline}
                        onChange={(e) => setSelectedPipeline(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                      >
                        <option>TDM (Tabular Data Manager)</option>
                        <option>Image Generation Pipeline</option>
                        <option>NLP Processing Pipeline</option>
                        <option>Custom Pipeline</option>
                      </select>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-medium text-blue-900 mb-2">Project Configuration</h3>
                      <p className="text-sm text-blue-700">
                        Configure your project settings and select the appropriate pipeline type for your machine learning workflow.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 2: Upload Dataset */}
                {/* {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Upload Dataset</h3>
                    <input type="file" className="mb-2" />
                    <p className="text-sm text-gray-600">Upload a CSV file to proceed.</p>
                  </div>
                )} */}
                {/* {step === 2 && <UploadDatasetStep />} */}


                {/* Step Placeholder */}
                {step > 2 && step <= steps.length + 1 && (
                  <div className="text-sm text-gray-500 mt-6">
                    Step {step} content goes here (e.g., dynamic form for “{steps[step - 2]?.label}”).
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    disabled={step === 1}
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border h-10 px-4 py-2 bg-white hover:bg-gray-100 disabled:opacity-50"
                  >
                    Previous Step
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={step === 1 && !projectName.trim()}
                    className={`h-10 px-4 py-2 text-white rounded-md text-sm font-medium transition-colors ${
                      step === 1 && !projectName.trim()
                        ? "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default PipelineSetup;
