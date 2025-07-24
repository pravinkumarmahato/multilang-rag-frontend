export const  About  = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 dark:text-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">About This Project</h2>
      <p className="mb-4">
        This project is a <strong>Multi-Language Retrieval-Augmented Generation (RAG) System</strong>
        built with <strong>React, FastAPI, and a local/vector database</strong> as backend.
        It supports:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Document upload by multiple users</li>
        <li>Secure login & authentication</li>
        <li>RAG-based contextual chat</li>
        <li>Language detection and translation</li>
        <li>Light/Dark mode UI</li>
      </ul>

      <p className="mt-4">
        Designed and developed by Pravin Kumar Mahato.
      </p>
    </div>
  );
};
