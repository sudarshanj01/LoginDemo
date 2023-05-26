import { useParams } from "react-router-dom";

function Dashboard() {
  const { username } = useParams();

  return (
    <div>
      <h1>
      Welcome, {username} 👻
      </h1>
    </div>
  );
}

export default Dashboard;
