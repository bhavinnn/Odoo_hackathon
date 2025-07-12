import React from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();

  // Static data for now — you’ll replace with props/context/backend later
  const user = {
    name: "Bhavin",
    location: "Mumbai",
    profileImage: "https://i.pravatar.cc/150?img=15",
    skillsOffered: ["Figma", "React", "Node.js"],
    skillsWanted: ["Design Thinking", "Project Management"],
    rating: 4.5,
    feedbacks: [
      "Great collaborator and communicator!",
      "Very punctual and skilled in front-end work.",
    ],
  };

  return (
    <div className="min-h-screen bg-[#f5f8ff] px-4 sm:px-10 py-8 font-[Inter,sans-serif]">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-[#6a5acd] hover:bg-[#5a4ccf] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition"
        >
          ⬅️ Back to Home
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-3xl mx-auto">
        {/* User Top Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={user.profileImage}
            alt="User"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#6a5acd] shadow-md object-cover"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-[#2f3b90]">{user.name}</h2>
            <p className="text-gray-600 text-sm">{user.location}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-[#6a5acd] mb-1">✅ Skills Offered</h3>
            <div className="flex flex-wrap gap-2">
              {user.skillsOffered.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#e8e6fd] text-[#2f3b90] px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#6a5acd] mb-1">🎯 Skills Wanted</h3>
            <div className="flex flex-wrap gap-2">
              {user.skillsWanted.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#fef2f2] text-[#ff6b6b] px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Rating & Feedback */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[#6a5acd] mb-2">⭐ Rating</h3>
          <p className="text-sm text-gray-800 mb-2">Rating: {user.rating}/5</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            {user.feedbacks.map((fb, idx) => (
              <li key={idx}>{fb}</li>
            ))}
          </ul>
        </div>

        {/* Request Swap Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/request")}
            className="bg-[#2f3b90] hover:bg-[#1f2a70] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transition"
          >
            🔁 Send Swap Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
