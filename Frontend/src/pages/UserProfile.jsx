<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const UserProfile = () => {
<<<<<<< HEAD
  const { user } = useContext(AuthContext);

  // Clean, no-dummy defaults
  const name = user?.name || "";
  const location = user?.location || "";
  const skillsOffered = Array.isArray(user?.skillsOffered) ? user.skillsOffered : [];
  const skillsWanted = Array.isArray(user?.skillsWanted) ? user.skillsWanted : [];
  const availability = user?.availability || "";
  const isPublic = user?.isPublic ?? false;
  const profileImage = user?.profileImage || "";

  // Optional loading fallback
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading profile...
=======
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
>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-[#f5f8ff] px-4 sm:px-10 py-10 text-[#2e2e2e] font-[Inter,sans-serif]">
      {/* Profile Card */}
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-3xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6">
          <img
            src={profileImage || "https://i.pravatar.cc/150?u=user"} // fallback pic
            alt="Profile"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#6a5acd] shadow-md object-cover"
          />
          <div className="mt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-[#2f3b90]">{name}</h2>
            <p className="text-gray-600 text-sm">{location}</p>
            <p className="mt-2 text-sm">
              {isPublic ? (
                <span className="text-green-600 font-medium">🌍 Public Profile</span>
              ) : (
                <span className="text-gray-400 font-medium">🔒 Private Profile</span>
              )}
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-8 grid gap-5">
          <div>
            <h3 className="text-lg font-semibold text-[#6a5acd] mb-1">✅ Skills Offered</h3>
            {skillsOffered.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {skillsOffered.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#e8e6fd] text-[#2f3b90] px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No skills offered yet.</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#6a5acd] mb-1">🎯 Skills Wanted</h3>
            {skillsWanted.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {skillsWanted.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#fef2f2] text-[#ff6b6b] px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No skills wanted yet.</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#6a5acd] mb-1">⏰ Availability</h3>
            <p className="text-sm text-gray-700">{availability || "Not specified"}</p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-10 text-center">
          <Link
            to="/profile"
            className="inline-block bg-[#6a5acd] hover:bg-[#5a4ccf] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg transition"
          >
            ✏️ Edit My Profile
          </Link>
        </div>
=======
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

>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
      </div>
    </div>
  );
};

export default UserProfile;
