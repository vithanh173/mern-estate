import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          id="username"
          type="text"
          placeholder="username"
          className="border p-3 rounded-xl"
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          className="border p-3 rounded-xl"
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          className="border p-3 rounded-xl"
        />
        <button className="bg-slate-700 text-white p-3 rounded-xl uppercase hover:opacity-90 disabled:opacity-50 transition-all duration-300 ease-in-out">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
