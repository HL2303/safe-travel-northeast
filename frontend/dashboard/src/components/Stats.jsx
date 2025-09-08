import React, { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState({
    totalTourists: 0,
    safeTourists: 0,
    alerts: 0,
  });

  useEffect(() => {
    // 🔹 Replace with backend API when ready
    // fetch("/api/stats")
    //   .then((res) => res.json())
    //   .then((data) => setStats(data));

    // Mock data for now
    setStats({
      totalTourists: 1245,
      safeTourists: 1210,
      alerts: 12,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-lg font-semibold text-gray-700">Total Tourists</h2>
        <p className="text-3xl font-bold text-gray-900 mt-2">
          {stats.totalTourists}
        </p>
        <p className="text-sm text-gray-500">Across all NE states</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500">
        <h2 className="text-lg font-semibold text-gray-700">Safe Tourists</h2>
        <p className="text-3xl font-bold text-gray-900 mt-2">
          {stats.safeTourists}
        </p>
        <p className="text-sm text-gray-500">Active & monitored</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-500">
        <h2 className="text-lg font-semibold text-gray-700">Alerts</h2>
        <p className="text-3xl font-bold text-gray-900 mt-2">{stats.alerts}</p>
        <p className="text-sm text-gray-500">Past 24 hours</p>
      </div>
    </div>
  );
};

export default Stats;
