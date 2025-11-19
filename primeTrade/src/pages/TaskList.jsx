import { useEffect, useState } from "react";
import axios from "axios";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">Your Tasks</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {tasks.map((task) => (
          <div key={task._id} className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
            <p className="text-gray-600 mt-2">{task.description}</p>
          </div>
        ))}

      </div>

    </div>
  );
}
