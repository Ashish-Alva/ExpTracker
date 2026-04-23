import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import { ArrowUpRight, ArrowDownRight, Wallet, DollarSign } from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 2000 },
  { name: "Mar", income: 5000, expense: 2800 },
  { name: "Apr", income: 4700, expense: 2600 },
  { name: "May", income: 6000, expense: 3500 },
];

const pieData = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 700 },
  { name: "Transport", value: 300 },
  { name: "Shopping", value: 200 },
];

const COLORS = ["#16a34a", "#22c55e", "#4ade80", "#86efac"];

const Dashboard = () => {
  return (
    <div>
      <Sidebar />

      <div className="ml-64 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6">
          {/* 🔥 CARDS */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card
              title="Income"
              value="$5,200"
              icon={<ArrowUpRight />}
              color="green"
            />
            <Card
              title="Expense"
              value="$2,900"
              icon={<ArrowDownRight />}
              color="red"
            />
            <Card
              title="Investment"
              value="$3,500"
              icon={<Wallet />}
              color="blue"
            />
            <Card
              title="Balance"
              value="$5,000"
              icon={<DollarSign />}
              color="purple"
            />
          </div>

          {/* 🔥 GRAPH + TRANSACTIONS */}
          <div className="grid grid-cols-3 gap-6">
            {/* LINE CHART */}
            <div className="col-span-2 bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Monthly Overview</h3>

              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="income" stroke="#16a34a" />
                  <Line type="monotone" dataKey="expense" stroke="#ef4444" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* TRANSACTIONS */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Recent Transactions</h3>

              <div className="space-y-4">
                <Transaction name="Rent" amount="-$1200" />
                <Transaction name="Groceries" amount="-$120" />
                <Transaction name="Gym" amount="-$30" />
                <Transaction name="Freelance" amount="+$800" />
              </div>
            </div>
          </div>

          {/* PIE CHART */}
          <div className="mt-6 bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Expense by Category</h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={100}>
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* 🔥 CARD COMPONENT */
const Card = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>

      <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>
        {icon}
      </div>
    </div>
  );
};

/* 🔥 TRANSACTION ITEM */
const Transaction = ({ name, amount }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{name}</span>
      <span
        className={`font-semibold ${amount.includes("-") ? "text-red-500" : "text-green-600"}`}
      >
        {amount}
      </span>
    </div>
  );
};
