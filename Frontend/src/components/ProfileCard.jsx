import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={user.profilePic}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.location}</p>
        </div>
      </div>
      <div className="mt-4">
        <p><strong>Skills Offered:</strong> {user.skillsOffered.join(", ")}</p>
        <p><strong>Skills Wanted:</strong> {user.skillsWanted.join(", ")}</p>
        <p><strong>Availability:</strong> {user.availability}</p>
      </div>
      <Link to={`/user/${user.id}`}>
        <button
  onClick={() => window.dispatchEvent(new CustomEvent("openLogin"))}
  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
  Request Swap
</button>

      </Link>
    </div>
  );
};

<<<<<<< HEAD
export default ProfileCard;
=======
export default ProfileCard;
>>>>>>> cfa939d75c4537d2ac58a2383d13704a51ed5135
