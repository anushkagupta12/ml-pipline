import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PipelineTable from "./components/PipelineTable";
import SummaryCard from "./components/SummaryCard";
import { Routes, Route } from 'react-router-dom';

import './index.css'
// import { Home } from 'lucide-react';
import Home from './pages/Home';
import PipelineSetup from './pages/PipelineSetup';

function App() {

  return (
    <>
    {/* <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-1 py-5">
        <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">ML Pipeline Dashboard</h1>
        <p className="text-gray-600">
          Manage your machine learning pipelines and synthetic data generation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <SummaryCard title="Total Pipelines" value={5} color="text-blue-600" />
        <SummaryCard title="Completed" value={2} color="text-green-600" />
        <SummaryCard title="Failed" value={2} color="text-red-600" />
      </div>
      
      
      <PipelineTable />

      

      </div>
    </div> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pipeline-setup" element={<PipelineSetup />} />
      {/* <Route path="/upload-dataset" element */}
    </Routes>
    </>
  )
}

export default App
