import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { isLoggedIn, user, openLoginModal } = useContext(AuthContext);
  const [availability, setAvailability] = useState("Available");
  const navigate = useNavigate();

  const dummyUser = {
    id: 2,
    name: "Priya Mehta",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "Mumbai",
    skillsOffered: ["Design", "Figma"],
    skillsWanted: ["React", "Public Speaking"],
    availability: "Weekends"
  };

  const showDummyCard = availability === "Available";

  return (
    <div className="min-h-screen px-4 sm:px-10 py-8 bg-[#f5f8ff] text-[#2e2e2e] font-[Inter,sans-serif]">
      {/* Topbar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#2f3b90]">
          👥 Skill Swap Community
        </h1>

        {!isLoggedIn ? (
          <button
            onClick={openLoginModal}
            className="bg-[#6a5acd] hover:bg-[#5a4ccf] px-6 py-2.5 rounded-full text-white font-medium shadow-md transition"
          >
            Login / Signup
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <img
              src={user?.image}
              alt="user avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-[#6a5acd]"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#2f3b90]">
                Hi, {user?.name} 👋
              </span>
              <Link
                to="/profile"
                className="mt-1 inline-block bg-[#6a5acd] hover:bg-[#5846c5] text-white text-sm px-5 py-2 rounded-full shadow transition font-medium"
              >
                👤 View My Profile
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className="text-[#6a5acd] font-medium">Availability:</label>
            <select
              className="border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a5acd]"
              value={availability}
              onChange={(e) => {
                const val = e.target.value;
                setAvailability(val);
                if (val === "Pending") navigate("/swap-requests");
              }}
            >
              <option value="Available">Available</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dummy user card */}
      {showDummyCard && (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto">
          <div className="flex items-center gap-5">
            <img
              src={dummyUser.image}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#6a5acd]"
            />
            <div>
              <h3 className="text-lg font-bold text-[#2f3b90]">{dummyUser.name}</h3>
              <p className="text-sm text-gray-600">{dummyUser.location}</p>
              <p className="text-sm">
                <strong>Offers:</strong> {dummyUser.skillsOffered.join(", ")}
              </p>
              <p className="text-sm">
                <strong>Wants:</strong> {dummyUser.skillsWanted.join(", ")}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3 justify-center sm:justify-end">
            <Link to={`/user-details`} state={{ user: dummyUser }}>
              <button className="bg-[#6a5acd] hover:bg-[#5a4ccf] text-white px-4 py-2 rounded-full text-xs font-medium shadow">
                👤 View Profile
              </button>
            </Link>

            {isLoggedIn && (
              <button
                onClick={() => navigate("/request", { state: { targetUser: dummyUser } })}
                className="bg-[#2f3b90] hover:bg-[#1f2a70] text-white px-4 py-2 rounded-full text-xs font-medium shadow"
              >
                🔁 Send Request
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
