"use client";
import { useState } from "react";
import { loginUser } from "../../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const res = await loginUser(form);
    localStorage.setItem("token", res.token);
    alert("Login successful");
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <input
        placeholder="Email"
        className="border p-2 mb-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-2"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
    </div>
  );
}