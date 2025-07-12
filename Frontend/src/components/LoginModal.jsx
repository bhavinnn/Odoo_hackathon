import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginModal = () => {
  const { showLogin, closeLoginModal, login, openLoginModal } = useContext(AuthContext);

  useEffect(() => {
    const handleOpen = () => openLoginModal();
    window.addEventListener("openLogin", handleOpen);
    return () => window.removeEventListener("openLogin", handleOpen);
  }, [openLoginModal]);

  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-80 p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border p-2 rounded mb-4"
        />
        <button
          onClick={login}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={closeLoginModal}
          className="w-full mt-2 text-sm text-blue-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
