import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
<<<<<<< HEAD
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
=======
import Datepicker from "react-tailwindcss-datepicker";
import { Link } from "react-router-dom";

const Home = () => {
  const { isLoggedIn, user, openLoginModal } = useContext(AuthContext);
  const [availability, setAvailability] = useState("All");
  const [customDates, setCustomDates] = useState({ startDate: null, endDate: null });

  const handleDateChange = (newValue) => setCustomDates(newValue);
>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135

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
<<<<<<< HEAD
              src={user?.image}
=======
              src={user?.image || "https://via.placeholder.com/40"}
>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
              alt="user avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-[#6a5acd]"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#2f3b90]">
<<<<<<< HEAD
                Hi, {user?.name} 👋
              </span>
              <Link
                to="/profile"
                className="mt-1 inline-block bg-[#6a5acd] hover:bg-[#5846c5] text-white text-sm px-5 py-2 rounded-full shadow transition font-medium"
              >
                👤 View My Profile
              </Link>
=======
                Hi, {user?.name || "User"} 👋
              </span>
              <Link
  to={`/user/${user?.id || 1}`}
  className="mt-1 inline-block bg-[#6a5acd] hover:bg-[#5846c5] text-white text-sm px-5 py-2 rounded-full shadow transition font-medium"
>
  👤 View Profile
</Link>

>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
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
<<<<<<< HEAD
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
=======
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option>All Days</option>
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
              <option value="Custom">Custom Date Range</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="🔍 Search skills..."
            className="border border-gray-300 bg-white px-3 py-2 rounded-lg w-full sm:w-64 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a5acd]"
          />
          <button className="bg-[#ff6b6b] hover:bg-[#e75b5b] text-white px-5 py-2.5 rounded-full shadow-md transition text-sm font-medium">
            Search
          </button>
        </div>

        {availability === "Custom" && (
          <div className="mt-5">
            <label className="text-[#6a5acd] font-medium block mb-2">
              Select Date Range:
            </label>
            <Datepicker
              primaryColor={"indigo"}
              value={customDates}
              onChange={handleDateChange}
              showShortcuts={true}
              inputClassName="w-full sm:w-64 bg-white border border-gray-300 text-sm px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a5acd]"
            />
          </div>
        )}
      </div>

      {/* User Cards (empty state) */}
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <p className="text-xl font-semibold text-[#6a5acd] mb-2">
          No skill swappers found 😅
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Start by adding your own profile or wait for new users to join the fun!
        </p>
        <button
          onClick={openLoginModal}
          className="bg-[#2f3b90] hover:bg-[#1f2a70] text-white px-6 py-2.5 rounded-full shadow-md transition text-sm font-medium"
        >
          ➕ Get Started
        </button>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center gap-3 text-sm font-medium text-gray-700">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            className={`w-10 h-10 rounded-full border text-center ${
              n === 1
                ? "bg-[#6a5acd] text-white border-[#6a5acd]"
                : "bg-white hover:bg-gray-100 border-gray-300"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
    </div>
  );
};

export default Home;
