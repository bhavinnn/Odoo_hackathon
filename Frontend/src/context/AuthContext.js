import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null); // ✅ stores current user

  const login = () => {
    setIsLoggedIn(true);
    setUser({
      id: 1,
      name: "Tishya",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Pune",
      skillsOffered: "React, Canva",
      skillsWanted: "Public Speaking, Excel",
      availability: "Weekends",
      isPublic: true
    });
    setShowLogin(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowLogin(false);
  };

  const openLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        setUser, // ✅ now accessible in Profile.jsx
        login,
        logout,
        showLogin,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
