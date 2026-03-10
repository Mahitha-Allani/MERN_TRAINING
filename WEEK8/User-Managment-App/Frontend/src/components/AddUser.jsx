import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let navigate = useNavigate();

  const onUserCreate = async (newUser) => {
  setLoading(true);
  setError(null); // clear previous error
  try {
    let res = await fetch("http://localhost:4000/user-api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const data = await res.json(); // always parse response

    if (res.status === 201) {
      navigate("/users-list");
    } else {
      // Use the message from backend directly
      throw new Error(data.message || "Failed to create user.");
    }
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
};

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-orange-400 text-2xl font-medium">Adding user...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center max-w-sm">
          <p className="text-red-500 text-2xl mb-4">⚠️ {error.message}</p>
          <button
            onClick={() => setError(null)}
            className="bg-lime-400 text-white px-6 py-2 rounded-xl hover:bg-lime-500 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
        <h1 className="text-4xl text-gray-600 font-light text-center mb-8 tracking-tight">
          Add New User
        </h1>
        <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-4">

          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`border-2 w-full text-xl px-4 py-3 rounded-xl outline-none focus:border-lime-400 transition-colors ${
                errors.name ? "border-red-300" : "border-gray-200"
              }`}
              placeholder="Name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1 ml-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`border-2 w-full text-xl px-4 py-3 rounded-xl outline-none focus:border-lime-400 transition-colors ${
                errors.email ? "border-red-300" : "border-gray-200"
              }`}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1 ml-1">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="date"
              {...register("dateOfBirth", { required: "Date of birth is required" })}
              className={`border-2 w-full text-xl px-4 py-3 rounded-xl outline-none focus:border-lime-400 transition-colors ${
                errors.dateOfBirth ? "border-red-300" : "border-gray-200"
              }`}
            />
            {errors.dateOfBirth && <p className="text-red-400 text-sm mt-1 ml-1">{errors.dateOfBirth.message}</p>}
          </div>

          <div>
            <input
              type="number"
              {...register("mobileNumber", { required: "Mobile number is required" })}
              className={`border-2 w-full text-xl px-4 py-3 rounded-xl outline-none focus:border-lime-400 transition-colors ${
                errors.mobileNumber ? "border-red-300" : "border-gray-200"
              }`}
              placeholder="Mobile number"
            />
            {errors.mobileNumber && <p className="text-red-400 text-sm mt-1 ml-1">{errors.mobileNumber.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-2 text-xl bg-lime-400 hover:bg-lime-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-md hover:shadow-lg"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;