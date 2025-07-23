import { createContext } from "react";

export interface User {
  username?: string;
  email?: string;
}

export interface AuthContextType {
  token: string | null;
  user: User | null;  
  loginUser: (username: string, password: string) => Promise<void>;
  signupUser: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
