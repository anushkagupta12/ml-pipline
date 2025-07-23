import StatusBadge from "./StatusBadge";
import { Eye, Edit, Trash2 } from "lucide-react";

const PipelineRow = ({ pipeline }) => {
  return (
    // <tr className="border-b">
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">{pipeline.id}</td>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">{pipeline.name}</td>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
        <StatusBadge status={pipeline.status} />
      </td>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">{pipeline.createdAt}</td>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">{pipeline.lastRun}</td>
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
        <div className="flex gap-2">
        <Eye size={32} className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors" />
        {pipeline.status !== "Running" && (
  <Edit
    size={28}
    className="p-1.5 border border-gray-300 rounded-md hover:bg-yellow-100 text-yellow-600 transition"
  />
)}
<Trash2 size={32} className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-red-500" />
        </div>
      </td>
    </tr>
  );
};

export default PipelineRow;
