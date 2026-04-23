const Topbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4">
      {/* LEFT */}
      <h2 className="text-lg font-semibold text-gray-700">
        Welcome, {user?.name?.toUpperCase() || "User"}
      </h2>

      {/* RIGHT */}
      <div className="flex justify-center items-center">
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
        <button onClick={handleLogout} className="text-sm text-red-500 ml-4">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
