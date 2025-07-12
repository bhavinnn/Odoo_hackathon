import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate API fetch (can be replaced with real one later)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (user?.id?.toString() === id) {
        setProfileData(user); // viewing your own profile
      } else {
        setProfileData(null); // not found or unauthorized
      }
      setLoading(false);
    }, 600);
  }, [id, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f8ff]">
        <p className="text-[#6a5acd] font-semibold animate-pulse">Loading your profile...</p>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f8ff]">
        <div className="text-center">
          <h2 className="text-xl text-gray-600 mb-2">⚠️ Profile not found</h2>
          <p className="text-gray-500 text-sm">Check your login or ID.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-10 py-8 bg-[#f5f8ff] text-[#2e2e2e] font-[Inter,sans-serif]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-6 mb-6">
          <img
            src={profileData.image}
            alt={profileData.name}
            className="w-24 h-24 rounded-full border-4 border-[#6a5acd] object-cover"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2f3b90]">{profileData.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{profileData.location || "No location set"}</p>
            <span
              className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                profileData.isPublic
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {profileData.isPublic ? "Public Profile" : "Private Profile"}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[#6a5acd] mb-2">✅ Skills Offered</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skillsOffered?.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#6a5acd] mb-2">🎯 Skills Wanted</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skillsWanted?.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#6a5acd] mb-2">⏰ Availability</h3>
            <p className="text-gray-700 text-sm">{profileData.availability || "Not specified"}</p>
          </div>
        </div>

        {/* Optional Future Button */}
        <div className="mt-6 text-right">
  <Link
    to="/profile"
    className="bg-[#6a5acd] hover:bg-[#5846c5] text-white px-6 py-2 rounded-full shadow-md text-sm font-medium"
  >
    ✏️ Edit My Profile
  </Link>
</div>

      </div>
    </div>
  );
};

export default UserProfile;
