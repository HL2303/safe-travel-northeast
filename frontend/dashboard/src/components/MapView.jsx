import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";
// import { getTourists } from "../services/api";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const [tourists, setTourists] = useState([]);

  useEffect(() => {
    const mockTourists = [
      { _id: "1", name: "Ananya", touristID: "NE001", lat: 25.5788, lon: 91.8933, city: "Shillong, Meghalaya" },
      { _id: "2", name: "Rohit", touristID: "NE002", lat: 26.5775, lon: 93.1711, city: "Kaziranga, Assam" },
      { _id: "3", name: "Meera", touristID: "NE003", lat: 27.0844, lon: 93.6053, city: "Itanagar, Arunachal Pradesh" },
      { _id: "4", name: "Karan", touristID: "NE004", lat: 25.6751, lon: 94.1086, city: "Kohima, Nagaland" },
      { _id: "5", name: "Priya", touristID: "NE005", lat: 23.7271, lon: 92.7176, city: "Aizawl, Mizoram" },
      { _id: "6", name: "Sanya", touristID: "NE006", lat: 24.8170, lon: 93.9368, city: "Imphal, Manipur" },
      { _id: "7", name: "Dev", touristID: "NE007", lat: 23.8315, lon: 91.2868, city: "Agartala, Tripura" },
      { _id: "8", name: "Nikhil", touristID: "NE008", lat: 27.3389, lon: 88.6065, city: "Gangtok, Sikkim" }
    ];
    setTourists(mockTourists);

    /*
    const fetchTourists = async () => {
      try {
        const { data } = await getTourists();
        setTourists(data);
      } catch (error) {
        console.error("Error fetching tourists", error);
      }
    };
    fetchTourists();


    const interval = setInterval(fetchTourists, 5000);
    return () => clearInterval(interval);
    */
  }, []);

  const restrictedZones = [
    { id: "rz1", name: "Indo-Myanmar Border (Moreh, Manipur)", lat: 24.3016, lon: 94.3560, radius: 8000, color: "red" },
    { id: "rz2", name: "Kaziranga National Park (Protected Area)", lat: 26.5775, lon: 93.1711, radius: 15000, color: "orange" },
    { id: "rz3", name: "Nathula Pass (Indo-China Border, Sikkim)", lat: 27.3869, lon: 88.8307, radius: 6000, color: "purple" },
    { id: "rz4", name: "Dzukou Valley (Nagaland-Manipur Border)", lat: 25.6167, lon: 94.0833, radius: 7000, color: "blue" }
  ];

return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Tourist Map 🗺️</h3>
      <MapContainer
        center={[26.2, 93.0]}
        zoom={6}
        className="rounded-xl shadow-md"
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Tourist markers */}
        {tourists.map((t) => (
          <Marker key={t._id} position={[t.lat, t.lon]}>
            <Popup>
              <b>{t.name}</b> <br />
              ID: {t.touristID} <br />
              City: {t.city}
            </Popup>
          </Marker>
        ))}

        {/* Restricted zones */}
        {restrictedZones.map((zone) => (
          <Circle
            key={zone.id}
            center={[zone.lat, zone.lon]}
            radius={zone.radius}
            color={zone.color}
            fillOpacity={0.3}
          >
            <Popup>
              <b>{zone.name}</b> <br />
              Restricted / Sensitive Area ⚠️
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;