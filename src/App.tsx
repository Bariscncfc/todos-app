import React, { useState } from "react";
import Clock from "./components/Clock";
import { addTodo, remove } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";
import { motion } from "framer-motion";
import Hero from "./components/Hero";

function App() {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(addTodo(title));
    setTitle("");
  };

  const onDelete = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <div className=" container mx-auto flex flex-col justify-center h-screen">
      <Hero />
      <Clock />
      <form className="flex items-center">
        <label className="sr-only">Add Todos</label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            id="simple-search"
            className="bg-gray-50 border border-gray-400 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Todos"
            required
          />
        </div>
        <button
          type="submit"
          onClick={onSave}
          className="p-2.5 ml-2 text-sm font-medium text-white bg-green-600 rounded-lg border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </form>
      <div className=" flex grid grid-cols-4 gap-4 my-6">
        {todos.map((todo) => (
          <motion.div
            className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            key={todo.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#">
              
                <div className="flex items-center mb-2 text-2xl font-bold tracking-tight text-indigo-600 dark:text-white tracking-tight">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>Task:
                </div>
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">
                {todo.title}
              </h5>
            </a>
            <button
              onClick={() => onDelete(todo.id)}
              className="inline-flex items-center rounded-full py-2 px-4 text-sm font-medium text-center text-white bg-red-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete Task
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
