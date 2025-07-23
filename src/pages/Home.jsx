import React from 'react'
import SummaryCard from '../components/SummaryCard';
import PipelineTable from '../components/PipelineTable';

function Home() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-1 py-5">
        <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">ML Pipeline Dashboard</h1>
        <p className="text-gray-600">
          Manage your machine learning pipelines and synthetic data generation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <SummaryCard title="Total Pipelines" value={4} color="text-blue-600" />
        <SummaryCard title="Completed" value={2} color="text-green-600" />
        <SummaryCard title="Failed" value={1} color="text-red-600" />
        </div>
      
      
      <PipelineTable />

      

      </div>
    </div>
    </>
  )
}

export default Home
