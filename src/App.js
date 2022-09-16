import "./App.css";
import {
  Home,
  History,
  Ginuwa,
  Warri,
  Royal,
  Event,
  Speech,
  Press,
  Account,
  Signed,
} from "./components/page";
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
        <Route path="/event" element={<Event />} />
        <Route path="/press" element={<Press />} />
        <Route path="/account" element={<Account />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/signup" element={<Signed />} />
      </Routes>
    </div>
  );
}

export default App;
