import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrmPasswd, setConfrmPasswd] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confrmPasswd) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await register({ username, email, password });
      setUsername("");
      setEmail("");
      setPassword("");
      setConfrmPasswd("");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(
          err.response.data.detail || "Failed to register. Please try again."
        );
      } else {
        setError("Failed to register. Please try again.");
      }
      console.error(err);
    }

    console.log("Signing up", { username, email, password });
  };

  return (
    <div className="app-container">
      <div className="auth-container">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confrmPasswd}
            onChange={(e) => setConfrmPasswd(e.target.value)}
            className="auth-input"
            required
          />
          <button type="submit" className="auth-button">
            Sign Up
          </button>
          <p>
            Already have an account?
            <span className="toggle-text">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
