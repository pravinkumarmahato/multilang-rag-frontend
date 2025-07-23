import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { AuthContext } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeProvider";


import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Upload } from "./pages/Upload";
import { Chat } from "./pages/Chat";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const auth = React.useContext(AuthContext);
  if (!auth || !auth.token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
