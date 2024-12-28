import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("User logged in successfully");
      window.location.href = "/account";
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleGoogleLogin = async () => {
    window.location.href = "http://localhost:3000/auth/google/login";
  };

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const token = urlParams.get("token");

  //   if (token) {
  //     localStorage.setItem("jwtToken", token);

  //     window.location.href = "http://localhost:5173";
  //   }
  // });

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4'>
      {/* Header */}
      <h1 className='text-2xl font-bold mb-6'>Login into account</h1>

      {/* Form */}
      <form onSubmit={handleLogin} className='w-full max-w-sm space-y-4'>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-600'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-600'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition text-center'
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
      </form>

      {/* Forgot Password */}
      <div className='w-full max-w-sm flex justify-end mt-2'>
        <a href='/forgot-password' className='text-sm text-gray-500'>
          Forgot password?
        </a>
      </div>

      {/* Divider */}
      <div className='w-full max-w-sm my-6 flex items-center'>
        <div className='flex-grow h-px bg-gray-300'></div>
        <span className='px-4 text-sm text-gray-500'>Or Login with</span>
        <div className='flex-grow h-px bg-gray-300'></div>
      </div>

      {/* Social Buttons */}
      <div className='w-full max-w-sm space-y-4'>
        <div className='w-full flex items-center justify-center space-x-3 py-2 border rounded-lg hover:bg-gray-100 transition'>
          <FaFacebookF className='text-primary' />
          <span className='font-medium text-gray-600'>
            Log in with Facebook
          </span>
        </div>
        <div
          onClick={handleGoogleLogin}
          className='w-full flex items-center justify-center space-x-3 py-2 border rounded-lg hover:bg-gray-100 transition'
        >
          <FcGoogle className='text-lg' />
          <span className='font-medium text-gray-600'>Log in with Google</span>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-8 text-sm text-gray-500'>
        Don’t have an account?{" "}
        <a href='/register' className='text-primary font-semibold'>
          Create Account
        </a>
      </div>
    </div>
  );
};

export default Login;
