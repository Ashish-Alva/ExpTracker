import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

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
            Track your income, manage expenses,
            <br />
            set budgets and achieve your financial goals.
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
          New here?{" "}
          <Link to="/register" className="text-green-700 font-medium">
            Create an account
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back!</h2>
          <p className="text-gray-500 mt-2">
            Sign in to continue to your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Password
                </label>
              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-medium transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
