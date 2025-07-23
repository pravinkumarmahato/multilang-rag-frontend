import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
  const theme = useContext(ThemeContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!theme || !auth) return null;

  const logout = () => {
    auth.logout();   // use logout method instead of directly setting token
    navigate("/login");
  };

  const isLoggedIn = !!auth.token;

  return (
    // <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
    //   <Link to="/" className="font-bold text-xl text-gray-900 dark:text-white">
    //     MultiLang RAG
    //   </Link>

    //   <div className="flex items-center space-x-4">
    //     <button
    //       type="button"
    //       onClick={theme.toggle}
    //       aria-label="Toggle Theme"
    //       className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded"
    //     >
    //       {theme.dark ? "Light Mode" : "Dark Mode"}
    //     </button>

    //     {isLoggedIn ? (
    //       <>
    //         <Link to="/upload" className="text-gray-900 dark:text-white hover:underline">
    //           Upload
    //         </Link>
    //         <Link to="/chat" className="text-gray-900 dark:text-white hover:underline">
    //           Chat
    //         </Link>
    //         <Link to="/profile" className="text-gray-900 dark:text-white hover:underline">
    //           Profile
    //         </Link>
    //         <button
    //           onClick={logout}
    //           className="text-red-600 dark:text-red-400"
    //           type="button"
    //         >
    //           Logout
    //         </button>
    //       </>
    //     ) : (
    //       <>
    //         <Link to="/login" className="text-gray-900 dark:text-white hover:underline">
    //           Login
    //         </Link>
    //         <Link to="/signup" className="text-gray-900 dark:text-white hover:underline">
    //           Signup
    //         </Link>
    //       </>
    //     )}
    //   </div>
    // </nav>
      <nav className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-4 shadow-md rounded-b-xl">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">MultiLang RAG</Link>
      <div className="flex items-center gap-4">
        <button
          onClick={theme.toggle}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
        >
          {theme.dark ? "🌞" : "🌙"}
        </button>
        {isLoggedIn ? (
          <>
            <NavLink to="/upload" className="nav-link">Upload</NavLink>
            <NavLink to="/chat" className="nav-link">Chat</NavLink>
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
            <button onClick={logout} className="text-red-500 hover:underline">Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <NavLink to="/signup" className="nav-link">Signup</NavLink>
          </>
        )}
      </div>
    </div>
  </nav>

  );
};
