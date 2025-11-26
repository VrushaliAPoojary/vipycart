import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // 1. Auto timer using setInterval + cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 2. Fake API call + cleanup
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <p>Timer: {count} seconds</p>

      <h2>Fetched Data:</h2>
      {data.map((item) => (
        <p key={item.id}>• {item.title}</p>
      ))}

      <button onClick={logout}>Logout</button>
    </div>
  );
}
