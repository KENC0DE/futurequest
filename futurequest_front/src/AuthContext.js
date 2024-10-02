// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import * as api from "./api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log("Token on page load:", token);
    if (token) {
      api
        .validateToken(token)
        .then((isValid) => {
          console.log("Token is valid:", isValid);
          if (isValid) {
            api
              .getUserProfile()
              .then((response) => {
                console.log("User profile fetched:", response.data);
                setUser({
                  user_id: response.data.id,
                  email: response.data.email,
                });
                setIsLoading(false);
              })
              .catch((err) => {
                console.error("Error fetching user profile:", err);
                setIsLoading(false);
              });
          } else {
            logout();
          }
        })
        .catch((err) => {
          console.error("Token validation failed:", err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.login(credentials);
      if (response.data && response.data.access) {
        localStorage.setItem("access_token", response.data.access);
        if (response.data.refresh) {
          localStorage.setItem("refresh_token", response.data.refresh);
        }
        setUser({
          user_id: response.data.user_id,
          email: response.data.email,
        });
      } else {
        throw new Error("Login response did not contain access token");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
