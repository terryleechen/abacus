import './App.css';
import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard.js";
import Analytics from "./components/Analytics";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
