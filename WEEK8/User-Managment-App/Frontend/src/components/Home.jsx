import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="w-24 h-24 rounded-full bg-lime-100 flex items-center justify-center text-5xl mb-6 shadow">
        👥
      </div>
      <h1 className="text-5xl font-light text-gray-600 mb-4 tracking-tight">
        User Management
      </h1>
      <p className="text-gray-400 text-xl mb-10 max-w-md">
        Add, view and manage your users in one place.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/add-user")}
          className="bg-lime-400 hover:bg-lime-500 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow transition-colors"
        >
          + Add User
        </button>
        <button
          onClick={() => navigate("/users-list")}
          className="border-2 border-lime-400 text-lime-600 hover:bg-lime-50 text-lg font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          View Users
        </button>
      </div>
    </div>
  );
}

export default Home;