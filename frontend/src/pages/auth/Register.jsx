import { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      await registerUser(form);
      alert("Account created successfully");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="h-screen flex">
      {/* LEFT SECTION */}
      <div className="w-1/2 bg-[#eef3f1] flex flex-col justify-between p-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-green-700 text-white p-2 rounded-md font-bold">
            📈
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            Exp<span className="text-green-700">Tracker</span>
          </h1>
        </div>

        {/* Main Text */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Take Control of <br />
            <span className="text-green-700">Your Finances</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Create your account and start your journey
            <br />
            towards better financial management.
          </p>
        </div>

        {/* Bottom Features */}
        <div className="flex gap-10 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Track Income</p>
            <p className="text-gray-500">Keep track of all your earnings.</p>
          </div>

          <div>
            <p className="font-semibold">Manage Expenses</p>
            <p className="text-gray-500">
              Categorize and manage your expenses.
            </p>
          </div>

          <div>
            <p className="font-semibold">Smart Insights</p>
            <p className="text-gray-500">
              Get insights and make better financial decisions.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/2 flex flex-col justify-center px-20">
        {/* Top link */}
        <div className="absolute top-8 right-16 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-green-700 font-medium">
            Sign in
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mt-10">
            Create Your Account
          </h2>
          <p className="text-gray-500 mt-2">
            Join ExpTracker and take charge of your finances.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-medium transition"
            >
              Create Account
            </button>

            


          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
