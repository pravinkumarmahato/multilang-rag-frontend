import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (!auth) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await auth.signupUser(email, password);
      alert("Signup successful! Your username has been sent to the provided email address. You can use it to log in to your account.");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      setError("Signup failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="input-placeholder"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input-placeholder"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-placeholder"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-600 text-white">{error}</p>}
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Signup
        </button>
      </form>
    </div>
  );
};
