import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  
  const [name, setName] = useState(user?.name || "");
  const [location, setLocation] = useState(user?.location || "");
  const [skillsOffered, setSkillsOffered] = useState(user?.skillsOffered || "");
  const [skillsWanted, setSkillsWanted] = useState(user?.skillsWanted || "");
  const [availability, setAvailability] = useState(user?.availability || "Flexible");
  const [isPublic, setIsPublic] = useState(user?.isPublic ?? true);
  const [imagePreview, setImagePreview] = useState(user?.image || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      location,
      skillsOffered,
      skillsWanted,
      availability,
      isPublic,
      image: imagePreview,
    };
    setUser(updatedUser);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 py-10 bg-[#f5f8ff] text-[#2e2e2e] font-[Inter,sans-serif]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-[#2f3b90] mb-8">🛠️ Edit Profile</h2>

        <div className="flex flex-col sm:flex-row gap-6 mb-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src={imagePreview}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-[#6a5acd] object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 text-sm"
            />
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Skills Offered</label>
          <textarea
            rows="2"
            value={skillsOffered}
            onChange={(e) => setSkillsOffered(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="E.g. React, UI Design"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Skills Wanted</label>
          <textarea
            rows="2"
            value={skillsWanted}
            onChange={(e) => setSkillsWanted(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="E.g. Python, Communication"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Availability</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Evenings</option>
              <option>Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Profile Visibility</label>
            <button
              onClick={() => setIsPublic(!isPublic)}
              className={`px-4 py-2 w-full rounded-lg font-medium ${
                isPublic ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
              }`}
            >
              {isPublic ? "Public" : "Private"}
            </button>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            onClick={handleSave}
            className="bg-[#6a5acd] hover:bg-[#5846c5] text-white px-6 py-2.5 rounded-full shadow-md transition font-medium"
          >
            💾 Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;