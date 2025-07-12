import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile"; // own profile
import UserDetails from "./pages/UserDetails"; // other user's profile
import RequestSwap from "./pages/RequestSwap";
import SwapRequests from "./pages/SwapRequests"; // NEW
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/request" element={<RequestSwap />} />
          <Route path="/swap-requests" element={<SwapRequests />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
