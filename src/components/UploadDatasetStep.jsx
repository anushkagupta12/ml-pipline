import { Upload } from "lucide-react";

const UploadDatasetStep = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".csv")) {
      onFileSelect(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  return (
    <div className="border rounded-md p-6 space-y-4 text-center">
      <h2 className="text-xl font-semibold">Upload Dataset</h2>
      <p className="text-gray-500">Choose a single CSV file for processing.</p>

      <div className="border border-dashed border-gray-400 p-6 rounded-md">
        <Upload className="mx-auto h-8 w-8 text-gray-500" />
        <p className="mt-2 text-sm">Upload CSV File</p>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="mt-4"
        />
      </div>

      <div className="bg-yellow-100 text-yellow-800 p-3 rounded-md text-sm">
         Upload Required: Please upload a CSV file to continue.
      </div>
    </div>
  );
};

export default UploadDatasetStep;


// import { UploadCloud, Folder } from "lucide-react";

// const UploadDatasetStep = ({ file, setFile }) => {
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <h2 className="text-2xl font-semibold">Upload Dataset</h2>
//         <p className="text-gray-600">Upload your CSV file for processing (single file only)</p>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
//           <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
//         </div>
//       </div>

//       <div className="bg-white border border-gray-300 rounded-md p-6">
//         <h3 className="text-lg font-medium mb-4">CSV File Upload</h3>
//         <div className="border-2 border-dashed border-gray-300 rounded-md p-10 text-center">
//           <UploadCloud className="mx-auto h-10 w-10 text-gray-500 mb-3" />
//           <p className="text-sm font-medium mb-1">Upload CSV File</p>
//           <p className="text-xs text-gray-500 mb-4">
//             Choose a single CSV file for processing. Supported format: <code>.csv</code> only
//           </p>
//           <label className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md cursor-pointer hover:bg-blue-700">
//             <input type="file" accept=".csv" onChange={handleFileChange} className="hidden" />
//             Select CSV File
//           </label>
//         </div>
//       </div>

//       {!file && (
//         <div className="flex items-start gap-2 bg-orange-100 border-l-4 border-orange-400 text-orange-800 text-sm px-4 py-3 rounded-md">
//           <Folder className="mt-0.5 w-4 h-4" />
//           <p>
//             <span className="font-semibold">Upload Required</span> <br />
//             Please upload a CSV file to continue. This file will be used for column selection in the next step.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadDatasetStep;
