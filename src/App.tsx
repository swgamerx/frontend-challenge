import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskStats from "./components/TaskStats";
import { fetchTasks, addTask, toggleTask } from "./lib/fakeApi";
import type { Task } from "./types";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // infinitly fetchs tasks
  useEffect(() => {
    console.log("Fetching data...");
    fetchTasks()
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load tasks");
        setLoading(false);
      });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // this never updates
      console.log("Task count:", tasks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleAdd = async (text: string) => {
    const newTask = await addTask(text);
    setTasks([newTask]);
  };

  const handleRemove = async (id: string) => {
    console.log("id: ", id);
  };

  const handleToggle = (id: string) => {
    toggleTask(id).then((toggledTask) => {
      setTasks((currentTasks) =>
        currentTasks.map((t) => (t.id === toggledTask.id ? toggledTask : t)),
      );
    });
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <main className="max-w-xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Syndica Todo App</h1>

      <TaskInput onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} />
      <TaskStats tasks={tasks} />
    </main>
  );
};

export default App;
