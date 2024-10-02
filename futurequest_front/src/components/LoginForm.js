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
    <div className="w-full h-[90vh] flex justify-center items-center bg-[#121212]">
      <div className="max-w-[350px] w-full p-8 shadow-lg rounded-lg bg-[#1e1e1e] transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl">
        <h2 className="text-center text-[#bb86fc] mb-5 text-2xl">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {isLoading && <p className="text-center text-white">Loading ...</p>}
          {error && <p className="text-center text-red-500 mb-2">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-2.5 p-3 text-base bg-[#2c2c2c] border border-[#3d3d3d] rounded-md text-white transition-all duration-300 ease-in-out focus:outline-none focus:border-[#bb86fc] focus:ring-2 focus:ring-[#bb86fc]/30"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-2.5 p-3 text-base bg-[#2c2c2c] border border-[#3d3d3d] rounded-md text-white transition-all duration-300 ease-in-out focus:outline-none focus:border-[#bb86fc] focus:ring-2 focus:ring-[#bb86fc]/30"
            required
          />
          <button
            type="submit"
            className="mt-5 mb-2.5 p-3 text-base bg-[#bb86fc] text-[#121212] rounded-md cursor-pointer transition-all duration-300 ease-in-out font-bold uppercase tracking-wide hover:bg-[#a366e0] hover:-translate-y-0.5 hover:shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-5 text-sm text-white">
          Need an account?{" "}
          <Link
            to="/register"
            className="text-[#03dac6] font-medium cursor-pointer transition-all duration-300 ease-in-out hover:text-[#00fff1]"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
