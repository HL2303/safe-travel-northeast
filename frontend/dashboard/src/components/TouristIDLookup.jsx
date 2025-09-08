

import React, { useState } from "react";
// import { getTouristById } from "../services/api";
import axios from "axios";

const TouristLookup = () => {
  const [touristId, setTouristId] = useState("");
  const [touristData, setTouristData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock tourist records (for demo)
  const mockTourists = {
    "NE001": {
      id: "NE001",
      name: "Ananya Sharma",
      state: "Meghalaya",
      itinerary: "Shillong → Cherrapunji → Dawki",
      emergencyContact: "+91-9876543210",
      safetyScore: 85,
    },
    "NE002": {
      id: "NE002",
      name: "Rohit Das",
      state: "Assam",
      itinerary: "Guwahati → Kaziranga → Majuli",
      emergencyContact: "+91-9123456780",
      safetyScore: 72,
    },
    "NE008": {
      id: "NE008",
      name: "Nikhil Verma",
      state: "Sikkim",
      itinerary: "Gangtok → Nathula → Tsomgo Lake",
      emergencyContact: "+91-9812345678",
      safetyScore: 90,
    },
  };

  const handleLookup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTouristData(null);

    try {
      // 🔹 Step 1 (for demo) → use mock data
      if (mockTourists[touristId]) {
        setTouristData(mockTourists[touristId]);
      } else {
        setTouristData({ error: "No record found." });
      }

      // 🔹 Step 2 (backend later) → uncomment this
      /*
      const res = await axios.get(`http://localhost:5000/api/tourists/${touristId}`);
      setTouristData(res.data);
      */
    } catch (err) {
      console.error("Error fetching tourist data:", err);
      setTouristData({ error: "Server error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Tourist ID Lookup 🧳</h3>
      <form onSubmit={handleLookup} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Tourist ID (e.g., NE001)"
          value={touristId}
          onChange={(e) => setTouristId(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 flex-grow"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Looking up tourist...</p>}

      {touristData && (
        <div className="p-4 border rounded-lg bg-gray-50 shadow-sm">
          {touristData.error ? (
            <p className="text-red-500">{touristData.error}</p>
          ) : (
            <>
              <p><strong>Name:</strong> {touristData.name}</p>
              <p><strong>ID:</strong> {touristData.id}</p>
              <p><strong>State:</strong> {touristData.state}</p>
              <p><strong>Itinerary:</strong> {touristData.itinerary}</p>
              <p><strong>Emergency Contact:</strong> {touristData.emergencyContact}</p>
              <p>
                <strong>Safety Score:</strong>{" "}
                <span
                  className={`font-bold ${
                    touristData.safetyScore < 60
                      ? "text-red-600"
                      : touristData.safetyScore < 80
                      ? "text-orange-600"
                      : "text-green-600"
                  }`}
                >
                  {touristData.safetyScore}
                </span>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TouristLookup;
