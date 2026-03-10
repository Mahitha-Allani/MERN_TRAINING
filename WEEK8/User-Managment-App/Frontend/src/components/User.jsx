import { useLocation, useNavigate } from "react-router";

function User() {
  let { state } = useLocation();
  let navigate = useNavigate();

  if (!state?.user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <p className="text-gray-400 text-xl mb-4">No user data found.</p>
        <button
          onClick={() => navigate("/users-list")}
          className="bg-lime-400 hover:bg-lime-500 text-white px-6 py-3 rounded-xl transition-colors font-medium"
        >
          ← Back to Users
        </button>
      </div>
    );
  }

  const { name, email, dateOfBirth, mobileNumber } = state.user;

  const fields = [
    { label: "Full Name", value: name, icon: "👤" },
    { label: "Email", value: email, icon: "✉️" },
    { label: "Date of Birth", value: dateOfBirth ? new Date(dateOfBirth).toLocaleDateString() : null, icon: "🎂" },
    { label: "Mobile Number", value: mobileNumber, icon: "📱" },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate("/users-list")}
          className="text-gray-400 hover:text-lime-600 text-sm font-medium mb-6 flex items-center gap-1 transition-colors"
        >
          ← Back to Users
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-lime-400 px-8 pt-8 pb-14">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-lime-500 font-bold text-4xl shadow-md">
              {name?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-white text-3xl font-semibold mt-3">{name}</h2>
          </div>

          <div className="px-8 py-6 -mt-4 bg-white rounded-t-3xl relative flex flex-col gap-5">
            {fields.map((field) => (
              <div key={field.label} className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{field.icon}</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                    {field.label}
                  </p>
                  <p className="text-lg text-gray-700 font-medium mt-0.5">
                    {field.value || <span className="text-gray-300 italic">Not provided</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;