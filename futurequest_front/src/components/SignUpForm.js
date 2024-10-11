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
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.detail || "Failed to register. Please try again."
      );
      console.error(err);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center dark:bg-[#121212] bg-gray-100">
      <div className="max-w-[350px] w-full p-8 shadow-lg rounded-lg dark:bg-[#1e1e1e] bg-gray-50 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl">
        <h2 className="text-center text-[#f7a224] mb-5 text-2xl">Sign Up</h2>
        {error && <p className="text-center text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-2.5 p-3 text-base dark:bg-[#2c2c2c] border dark:border-[#3d3d3d] 
            rounded-md dark:text-white transition-all duration-300 ease-in-out focus:outline-none
             dark:focus:border-orange-600 dark:focus:ring-2 dark:focus:ring-orange-400/10 
             focus:border-orange-600 focus:ring-2 focus:ring-orange-400/10"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-2.5 p-3 text-base dark:bg-[#2c2c2c] border dark:border-[#3d3d3d] 
            rounded-md dark:text-white transition-all duration-300 ease-in-out focus:outline-none
             dark:focus:border-orange-600 dark:focus:ring-2 dark:focus:ring-orange-400/10 
             focus:border-orange-600 focus:ring-2 focus:ring-orange-400/10"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-2.5 p-3 text-base dark:bg-[#2c2c2c] border dark:border-[#3d3d3d] 
            rounded-md dark:text-white transition-all duration-300 ease-in-out focus:outline-none
             dark:focus:border-orange-600 dark:focus:ring-2 dark:focus:ring-orange-400/10 
             focus:border-orange-600 focus:ring-2 focus:ring-orange-400/10"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confrmPasswd}
            onChange={(e) => setConfrmPasswd(e.target.value)}
            className="my-2.5 p-3 text-base dark:bg-[#2c2c2c] border dark:border-[#3d3d3d] 
            rounded-md dark:text-white transition-all duration-300 ease-in-out focus:outline-none
             dark:focus:border-orange-600 dark:focus:ring-2 dark:focus:ring-orange-400/10 
             focus:border-orange-600 focus:ring-2 focus:ring-orange-400/10"
            required
          />
          <button
            type="submit"
            className="mt-5 mb-2.5 p-3 text-base bg-[#ff941a] darK:text-[#121212] text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out font-bold uppercase tracking-wide hover:bg-[#ffb030] hover:-translate-y-0.5 hover:shadow-md"
          >
            Sign Up
          </button>
          <p className="text-center mt-5 text-sm dark:text-white">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#ff9c22] font-medium cursor-pointer transition-all duration-300 ease-in-out hover:text-[#ffd13b]"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
