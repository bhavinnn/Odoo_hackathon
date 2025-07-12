import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const dummyUsers = [
  {
    id: 2,
    name: "Alice",
    profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
    skillsOffered: ["React", "CSS"],
    skillsWanted: ["Public Speaking", "Excel"],
  },
  {
    id: 3,
    name: "Bob",
    profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
    skillsOffered: ["Python", "Django"],
    skillsWanted: ["React", "UI Design"],
  },
];

const dummySentRequests = [
  { userId: 2, status: "Pending" },
  { userId: 3, status: "Accepted" },
];

const SwapRequests = () => {
  const { isLoggedIn, openLoginModal } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    openLoginModal();
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Please login to view your swap requests.
      </div>
    );
  }

  const requestsWithUser = dummySentRequests.map((req) => {
    const user = dummyUsers.find((u) => u.id === req.userId);
    return { ...user, status: req.status };
  });

  return (
    <div className="min-h-screen bg-[#f5f8ff] font-[Inter,sans-serif] p-8">
      <h1 className="text-3xl font-bold text-[#2f3b90] mb-8">Swap Requests Sent</h1>

      {requestsWithUser.length === 0 ? (
        <p className="text-gray-600">You have not sent any swap requests yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {requestsWithUser.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6"
            >
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-20 h-20 rounded-full border-4 border-[#6a5acd]"
              />
              <div>
                <h2 className="text-xl font-semibold text-[#2f3b90]">{user.name}</h2>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      user.status === "Accepted"
                        ? "text-green-600"
                        : user.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }
                  >
                    {user.status}
                  </span>
                </p>
                <button
                  onClick={() => navigate("/userprofile", { state: { user } })}
                  className="mt-2 px-4 py-1 rounded bg-[#6a5acd] text-white hover:bg-[#5a4ccf]"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwapRequests;
