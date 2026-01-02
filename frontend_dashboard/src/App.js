import { useEffect, useState } from "react";

function App() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/dashboard")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>WasteFood Dashboard</h1>
      <p>Total Users: {stats.totalUsers}</p>
      <p>Total Offers: {stats.totalOffers}</p>
      <p>Total Orders: {stats.totalOrders}</p>
    </div>
  );
}

export default App;
