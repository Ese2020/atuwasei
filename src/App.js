import "./App.css";
import { Home, History, Ginuwa, Warri, Royal } from "./components/page";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/theginuwa" element={<Ginuwa />} />
        <Route path="/warritraditionalcouncil" element={<Warri />} />
        <Route path="/royalcourtnotices" element={<Royal />} />
      </Routes>
    </div>
  );
}

export default App;
