import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import PipelineRow from "./PipelineRow";
import { pipelines as sampleData } from "../data/samplePipelines";
import CustomSVGIcon from "./ui/CustomSVGIcon";
import NewProjectModal from "./NewProjectModal";

const PipelineTable = () => {
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = sampleData.filter((p) =>
    statusFilter === "All Status" ? true : p.status === statusFilter
  );

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      {/* Header */}
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Existing Pipelines
            </h3>
            <p className="text-sm text-muted-foreground">
              Manage and monitor your ML pipelines
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
          >
            + New Project
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-6 pt-0">
        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2">
            <CustomSVGIcon className="w-4 h-4" />
            <FilterDropdown selected={statusFilter} onChange={setStatusFilter} />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="border-b">
              <tr>
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Pipeline Name</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Created At</th>
                <th className="py-2 px-3">Last Run</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((pipeline) => (
                <PipelineRow key={pipeline.id} pipeline={pipeline} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <NewProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PipelineTable;
