import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-blue-600 p-4 text-white text-center text-2xl font-bold">
        Tailwind CSS Test Header
      </header>

      <main className="flex-grow p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Tailwind CSS Testing!
        </h1>
        <p className="text-gray-600 mb-6">
          This is a simple setup to test Tailwind CSS in your React project.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Click Me
        </button>
      </main>

      <footer className="w-full bg-gray-800 text-white text-center p-3">
        © 2025 Tailwind CSS Test App
      </footer>
    </div>
  );
}

export default App;
