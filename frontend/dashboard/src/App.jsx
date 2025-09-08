import React from "react";
import MapView from "./components/MapView";
import AlertsPanel from "./components/AlertsPanel";
import TouristIDLookup from "./components/TouristIDLookup";
import Stats from "./components/Stats";   

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Smart Tourist Safety Dashboard 🛰️
        </h1>
        <p className="text-gray-600">
          Monitor tourists, alerts & safety in real-time
        </p>
      </header>

      {/* Stats Section (from Stats.jsx) */}
      <Stats />

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left side (Map takes 2 columns) */}
        <section className="lg:col-span-2 bg-white shadow-lg rounded-2xl p-4">
          <MapView />
        </section>

        {/* Right side */}
        <div className="space-y-6">
           <section className="bg-white shadow-lg rounded-2xl p-4">
            <TouristIDLookup />
          </section>
          <section className="bg-white shadow-lg rounded-2xl p-4">
            <AlertsPanel />
          </section>
         
        </div>
      </main>
    </div>
  );
}

export default App;
