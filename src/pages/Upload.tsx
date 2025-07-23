import { useState } from "react";
import { uploadFile } from "../api/api";

export const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    setMessage(null);
    try {
      await uploadFile(file);
      setMessage("File uploaded successfully!");
    } catch(error) {
      console.error("Upload failed:", error);
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">Upload Document</h2>
      <div className="flex flex-col space-y-2">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          className="upload-input"
        />
        <button
          onClick={handleUpload}
          disabled={!file}
          className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:opacity-50"
        >
          Upload
        </button>
      </div>
      {message && <p className="mt-3 text-white">{message}</p>}
    </div>
  );
};
