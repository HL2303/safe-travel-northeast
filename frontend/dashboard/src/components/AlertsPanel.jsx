import React, { useEffect, useState } from "react";
import axios from "axios";
// import { getAlerts } from "../services/api,js";

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock function for demo
  const fetchMockAlerts = async () => {
    return [
      {
        _id: "a1",
        type: "Geo-Fence",
        message: "Tourist entered Kaziranga Protected Area",
        touristName: "Rohit (NE002, Assam)"
      },
      {
        _id: "a2",
        type: "Panic",
        message: "Tourist pressed SOS in Elephant Falls, Shillong",
        touristName: "Ananya (NE001, Meghalaya)"
      },
      {
        _id: "a3",
        type: "Border Zone",
        message: "Tourist crossed near Indo-Myanmar border (Moreh)",
        touristName: "Sanya (NE006, Manipur)"
      },
      {
        _id: "a4",
        type: "Anomaly",
        message: "Tourist inactive for 2+ hours in Nathula Pass area",
        touristName: "Nikhil (NE008, Sikkim)"
      }
    ];
  };

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        // 🔹 Step 1 (for demo) → Use mock data
        const data = await fetchMockAlerts();
        setAlerts(data);

        // 🔹 Step 2 (for backend later) → Uncomment below
        /*
        const res = await axios.get("http://localhost:5000/api/alerts");
        setAlerts(res.data);
        */
      } catch (err) {
        console.error("Error fetching alerts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();

    // ⏱️ Auto-refresh every 10s (for real-time effect)
    const interval = setInterval(fetchAlerts, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-gray-500">Loading alerts...</p>;

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Active Alerts 🚨</h3>
      {alerts.length === 0 ? (
        <p className="text-gray-500">No alerts right now.</p>
      ) : (
        <ul className="space-y-3">
          {alerts.map((a) => (
            <li
              key={a._id}
              className={`p-3 rounded-lg border-l-4 shadow-sm ${
                a.type === "Panic"
                  ? "bg-red-50 border-red-500"
                  : a.type === "Geo-Fence"
                  ? "bg-orange-50 border-orange-500"
                  : a.type === "Border Zone"
                  ? "bg-purple-50 border-purple-500"
                  : "bg-blue-50 border-blue-500"
              }`}
            >
              <p className="font-bold">{a.type} Alert ⚠️</p>
              <p className="text-gray-700">{a.message}</p>
              <p className="text-sm text-gray-500">Tourist: {a.touristName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertsPanel;
