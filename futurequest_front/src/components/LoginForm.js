import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login({ username, password });
      navigate("/");
    } catch (err) {
      setPassword("");
      setError("Failed to log in: Check username or password");
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {isLoading && <p className="loading">Loading ...</p>}
          {error && <p className="error-message">{error}</p>}
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p>
          Need an account?
          <span className="toggle-text">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
