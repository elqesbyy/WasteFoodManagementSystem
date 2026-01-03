import { useEffect, useState } from "react";

const KpiCard = ({ title, value, gradient }) => (
  <div
    className={`rounded-2xl p-6 text-white shadow-lg transform transition hover:scale-105 ${gradient}`}
  >
    <p className="text-sm opacity-80">{title}</p>
    <h2 className="text-3xl font-bold mt-2">{value}</h2>
  </div>
);

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/dashboard")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        🍽 WasteFood Management Dashboard
      </h1>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Total Users" value={data.totalUsers} gradient="bg-gradient-to-r from-indigo-500 to-purple-600" />
        <KpiCard title="Active Users" value={data.activeUsers} gradient="bg-gradient-to-r from-green-400 to-emerald-600" />
        <KpiCard title="Donors" value={data.donors} gradient="bg-gradient-to-r from-yellow-400 to-orange-500" />
        <KpiCard title="Buyers" value={data.buyers} gradient="bg-gradient-to-r from-pink-500 to-rose-500" />

        <KpiCard title="Total Offers" value={data.totalOffers} gradient="bg-gradient-to-r from-blue-400 to-blue-600" />
        <KpiCard title="Available Offers" value={data.availableOffers} gradient="bg-gradient-to-r from-teal-400 to-cyan-600" />
        <KpiCard title="Claimed Offers" value={data.claimedOffers} gradient="bg-gradient-to-r from-green-500 to-lime-600" />
        <KpiCard title="Expired Offers" value={data.expiredOffers} gradient="bg-gradient-to-r from-red-500 to-red-700" />

        <KpiCard title="Total Orders" value={data.totalOrders} gradient="bg-gradient-to-r from-purple-500 to-indigo-600" />
        <KpiCard title="Orders Today" value={data.ordersToday} gradient="bg-gradient-to-r from-sky-400 to-blue-500" />
        <KpiCard title="Transactions Today" value={data.transactionsToday} gradient="bg-gradient-to-r from-amber-400 to-yellow-500" />
        <KpiCard title="Revenue (MAD)" value={data.totalRevenue} gradient="bg-gradient-to-r from-emerald-500 to-green-700" />
      </div>

      {/* CHART PLACEHOLDERS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-4">📊 Offers per Day</h3>
          <pre className="text-sm text-gray-600">
            {JSON.stringify(data.offersPerDay, null, 2)}
          </pre>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-4">💳 Transactions per Month</h3>
          <pre className="text-sm text-gray-600">
            {JSON.stringify(data.transactionsPerMonth, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
