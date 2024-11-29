import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase"; // Import the auth object

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully");
    } catch (error) {
      console.log(error);
      alert("Error creating user: " + error.message);
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4'>
      {/* Header */}
      <h1 className='text-2xl font-bold mb-6'>Register into account</h1>

      {/* Form */}
      <form className='w-full max-w-sm space-y-4' onSubmit={handleCreateUser}>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-600'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            name='email'
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
            name='password'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor='confirmPassword'
            className='block text-sm font-medium text-gray-600'
          >
            Confirm Password
          </label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Confirm your password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary'
        >
          Register
        </button>
      </form>

      {/* Divider */}
      <div className='w-full max-w-sm my-6 flex items-center'>
        <div className='flex-grow h-px bg-gray-300'></div>
        <span className='px-4 text-sm text-gray-500'>Or Register with</span>
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
        <div className='w-full flex items-center justify-center space-x-3 py-2 border rounded-lg hover:bg-gray-100 transition'>
          <FcGoogle className='text-lg' />
          <span className='font-medium text-gray-600'>Log in with Google</span>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-8 text-sm text-gray-500'>
        Already have an account?{" "}
        <a href='/login' className='text-primary font-semibold'>
          Login
        </a>
      </div>
    </div>
  );
};

export default Register;
