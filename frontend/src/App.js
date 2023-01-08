import './App.css';
import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard.js";
import InOut from "./components/dashboard/InOut.js";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/InOut" element={<InOut />} />
      </Routes>
    </div>
  );
}

export default App;
