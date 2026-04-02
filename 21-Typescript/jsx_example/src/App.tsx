import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SumComponent from './components/SumComponent'; // Import the SumComponent



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 transition-colors duration-300">
      <div className="flex gap-8 mb-12">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo hover:opacity-80 transition-opacity" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react hover:opacity-80 transition-opacity" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-white mb-8">Vite + React</h1>
      <div className="bg-slate-800 rounded-xl p-8 shadow-2xl mb-8">
        <button onClick={() => setCount((count) => count + 1)} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 mb-4">
          count is {count}
        </button>
        <p className="text-gray-300">
          Edit <code className="text-purple-400">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400 mb-8">
        Click on the Vite and React logos to learn more
      </p>
      <div className="bg-slate-800 rounded-xl p-8 shadow-2xl">
        <SumComponent />
      </div>
    </div>
  )
}

export default App
