import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UsersList() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("https://mern-week8-backend.onrender.com/user-api/users");
        if (res.status === 200) {
          let resObj = await res.json();
          setUsers(resObj.payload);
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-red-400 text-2xl">⚠️ {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl text-gray-600 font-light tracking-tight">Users</h1>
        <span className="bg-lime-100 text-lime-700 text-sm font-semibold px-3 py-1 rounded-full">
          {users.length} {users.length === 1 ? "user" : "users"}
        </span>
      </div>

      {users.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
          <div className="text-6xl mb-4"></div>
          <p className="text-gray-400 text-xl mb-4">No users yet</p>
          <button
            onClick={() => navigate("/add-user")}
            className="bg-lime-400 hover:bg-lime-500 text-white px-6 py-3 rounded-xl transition-colors font-medium"
          >
            Add First User
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((userObj) => (
            <div
              key={userObj.email}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer border border-gray-100 hover:border-lime-300 transition-all duration-200 group"
              onClick={() => gotoUser(userObj)}
            >
              <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold text-xl mb-4 group-hover:bg-lime-400 group-hover:text-white transition-colors">
                {userObj.name?.charAt(0).toUpperCase()}
              </div>
              <p className="text-xl font-semibold text-gray-800 truncate">{userObj.name}</p>
              <p className="text-sm text-gray-400 truncate mt-1">{userObj.email}</p>
              <p className="text-xs text-lime-500 mt-3 font-medium group-hover:text-lime-600">
                View details →
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersList;