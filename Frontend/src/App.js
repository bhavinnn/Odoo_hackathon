import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Profile from "./pages/Profile"; // own profile
import UserDetails from "./pages/UserDetails"; // other user's profile
import RequestSwap from "./pages/RequestSwap";
import SwapRequests from "./pages/SwapRequests"; // NEW
import { AuthProvider } from "./context/AuthContext";
=======
import UserProfile from "./pages/UserProfile"; // ✅ renamed component
        // ✅ editable profile page
import AuthModal from "./components/AuthModal";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";


>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/profile" element={<Profile />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/request" element={<RequestSwap />} />
          <Route path="/swap-requests" element={<SwapRequests />} />
        </Routes>
=======
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <AuthModal />
>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
      </Router>
    </AuthProvider>
  );
}

export default App;
