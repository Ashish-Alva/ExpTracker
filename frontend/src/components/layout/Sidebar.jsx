import { Home, BarChart3, Wallet, CreditCard, Tags, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed w-64 h-screen bg-gradient-to-b from-green-600 to-green-800 text-white px-5 py-6 flex flex-col">

      {/* Logo */}
      <h1 className="text-xl font-semibold mb-8">💼 ExpTracker</h1>

      {/* Menu */}
      <nav className="space-y-2 text-sm">

        <div className="flex items-center gap-3 bg-white/10 p-2 rounded-lg cursor-pointer">
          <Home size={18} /> Dashboard
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
          <BarChart3 size={18} /> Analysis
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
          <Wallet size={18} /> Budget
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
          <CreditCard size={18} /> Account
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
          <Tags size={18} /> Category
        </div>

        <div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer">
          <Settings size={18} /> Settings
        </div>

      </nav>
    </div>
  );
};

export default Sidebar;