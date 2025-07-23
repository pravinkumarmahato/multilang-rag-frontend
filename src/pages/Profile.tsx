import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Profile = () => {
  const auth = useContext(AuthContext);

  if (!auth) return null;

  // If you have user info in auth.user, use it; else fallback
  const username = auth.user?.username || "User";
  const email = auth.user?.email || "Not available";

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 text-white mb-6">Profile</h2>
      <div className="space-y-3 text-white">
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        <button
          onClick={auth.logout}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
