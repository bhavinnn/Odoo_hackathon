import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestSwap = () => {
  const navigate = useNavigate();

  const yourSkills = ["React", "Canva", "Python"]; // You can fetch from context/backend
  const theirSkills = ["Public Speaking", "Excel", "UI Design"]; // Fetch based on user

  const [selectedOffered, setSelectedOffered] = useState("");
  const [selectedWanted, setSelectedWanted] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      offered: selectedOffered,
      wanted: selectedWanted,
      message,
    };

    console.log("Swap Request Sent:", payload);

    // 🔗 You'll replace this with API call later
    alert("Swap request sent!");
    navigate("/"); // go to home or back to user page
  };

  return (
    <div className="min-h-screen bg-[#f5f8ff] px-4 sm:px-10 py-10 font-[Inter,sans-serif]">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#6a5acd] hover:bg-[#5a4ccf] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition"
        >
          ⬅️ Back to Profile
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-[#2f3b90] mb-6">🔁 Create Swap Request</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Offered Skill */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Offered Skill
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a5acd]"
              value={selectedOffered}
              onChange={(e) => setSelectedOffered(e.target.value)}
              required
            >
              <option value="">-- Select a skill --</option>
              {yourSkills.map((skill, idx) => (
                <option key={idx} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          {/* Wanted Skill */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skill You Want
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a5acd]"
              value={selectedWanted}
              onChange={(e) => setSelectedWanted(e.target.value)}
              required
            >
              <option value="">-- Select a skill --</option>
              {theirSkills.map((skill, idx) => (
                <option key={idx} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Optional Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a5acd]"
              rows="4"
              placeholder="Write a short message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#2f3b90] hover:bg-[#1f2a70] text-white py-2.5 rounded-full shadow-md transition text-sm font-medium"
          >
            🚀 Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestSwap;
