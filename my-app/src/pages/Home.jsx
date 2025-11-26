import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page Working!</h1>
      <p>Welcome to our React App.</p>

      <Link to="/login" style={{ color: "lightblue" }}>
        Go to Login →
      </Link>
    </div>
  );
}
