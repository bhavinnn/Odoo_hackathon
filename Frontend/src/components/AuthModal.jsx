import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthModal = () => {
  const { showLogin, closeLoginModal, login } = useContext(AuthContext);
  const [tab, setTab] = useState("login");
  const [signupStep, setSignupStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    const open = () => setTab("login");
    const openSignup = () => {
      setTab("signup");
      setSignupStep(1);
    };
    window.addEventListener("openLogin", open);
    window.addEventListener("openSignup", openSignup);
    return () => {
      window.removeEventListener("openLogin", open);
      window.removeEventListener("openSignup", openSignup);
    };
  }, []);

  if (!showLogin) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    if (formData.email && formData.password) {
      login();
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleSignupNext = () => {
    if (!formData.email) return alert("Enter your email.");
    setSignupStep(2);
  };

  const handleSignupSubmit = () => {
    if (formData.username && formData.password) {
      login(); // simulate success
    } else {
      alert("Complete all fields.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4 font-[Inter,sans-serif]">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-xl transition-all p-6 sm:p-8">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2f3b90]">
            {tab === "login" ? "Welcome Back 👋" : "Let's Get Started"}
          </h2>
          <button
            onClick={closeLoginModal}
            className="text-gray-400 hover:text-red-500 text-2xl font-light"
          >
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 rounded-full bg-gray-100 overflow-hidden">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 py-2 text-sm font-semibold transition ${
              tab === "login"
                ? "bg-[#6a5acd] text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setTab("signup");
              setSignupStep(1);
            }}
            className={`flex-1 py-2 text-sm font-semibold transition ${
              tab === "signup"
                ? "bg-[#6a5acd] text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {tab === "login" && (
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="📧 Email address"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2.5 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6a5acd] text-sm"
            />
            <input
              type="password"
              name="password"
              placeholder="🔒 Password"
              onChange={handleChange}
              value={formData.password}
              className="w-full px-4 py-2.5 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6a5acd] text-sm"
            />
            <div className="text-right text-xs">
              <button className="text-[#6a5acd] hover:underline">Forgot password?</button>
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-[#ff6b6b] hover:bg-[#e75b5b] text-white py-2.5 rounded-full shadow transition font-medium"
            >
              Login
            </button>
          </div>
        )}

        {/* Sign Up Form */}
        {tab === "signup" && (
          <div className="space-y-4">
            {signupStep === 1 && (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="📧 Enter your email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full px-4 py-2.5 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6a5acd] text-sm"
                />
                <button
                  onClick={handleSignupNext}
                  className="w-full bg-[#6a5acd] hover:bg-[#5a4ccf] text-white py-2.5 rounded-full shadow transition font-medium"
                >
                  Continue
                </button>
              </>
            )}

            {signupStep === 2 && (
              <>
                {/* <input
                  type="text"
                  name="username"
                  placeholder="🙋 Choose a username"
                  onChange={handleChange}
                  value={formData.username}
                  className="w-full px-4 py-2.5 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6a5acd] text-sm"
                /> */}
                <input
                  type="password"
                  name="password"
                  placeholder="🔐 Create a password"
                  onChange={handleChange}
                  value={formData.password}
                  className="w-full px-4 py-2.5 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6a5acd] text-sm"
                />
                <button
                  onClick={handleSignupSubmit}
                  className="w-full bg-[#6a5acd] hover:bg-[#5a4ccf] text-white py-2.5 rounded-full shadow transition font-medium"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AuthModal;
=======
export default AuthModal;
>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
