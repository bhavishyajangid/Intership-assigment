import { useState } from "react";
import axios from "axios";

export default function AddTask() {
  const [form, setForm] = useState({ title: "", description: "" });
  const token = localStorage.getItem("token");

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    window.location.href = "/tasks";
  };

  return (
    <div className="min-h-screen p-6 flex justify-center items-center bg-gray-100">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Add New Task</h2>

        <input
          className="w-full p-3 mb-4 bg-gray-100 rounded-lg"
          placeholder="Task Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="w-full p-3 mb-4 bg-gray-100 rounded-lg"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Add Task
        </button>

      </form>
    </div>
  );
}
