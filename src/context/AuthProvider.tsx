import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { AuthContextType, User } from "./AuthContext";
import { AuthContext } from "./AuthContext";
import { login, signup } from "../api/api";
import { getProfile } from "../api/api";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await getProfile();
        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch user profile", error);
        setToken(null); // logout if invalid token
      }
    };

    if (token) {
      localStorage.setItem("token", token);
      fetchUserProfile();
    } else {
      localStorage.removeItem("token");
      setUser(null);
    }
  }, [token]);

  const loginUser = async (username: string, password: string) => {
    const res = await login(username, password);
    setToken(res.data.access_token);
    // You can fetch and set user here as well if you have an API for that
  };

  const signupUser = async (email: string, password: string) => {
    await signup(email, password);
  };

  const logout = () => {
    setToken(null);
  };

  const value: AuthContextType = {
    token,
    user,
    loginUser,
    signupUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
