import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskStats from "./components/TaskStats";
import { fetchTasks, addTask, toggleTask, removeTask } from "./lib/fakeApi";
import type { Task } from "./types";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  },[]);

  // no clear purpose for user or debugging ( I would normally delete this in working code base)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Task count:", tasks.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [tasks.length]);

  const handleAdd = async (text: string) => {
    const newTask = await addTask(text);
    setTasks([...tasks, newTask]);
    console.log('task list', tasks);
  };

  const handleRemove = async (id: string) => {
    await removeTask(id);
    console.log("removing id: ", id);
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
      <div className="flex gap-4 items-center mb-8">
        <img
          src="../public/mark.svg"
          alt="Syndica Logo"
          className="w-8 h-auto"
        />
        <h1 className="text-2xl font-bold">Syndica Task Manager</h1>
      </div>

      <TaskInput onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} handleRemove={handleRemove} />
      <TaskStats tasks={tasks} />
    </main>
  );
};

export default App;
