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
  Logined,
  Logouted,
  Passworded,
} from "./components/page";
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/theginuwa" element={<Ginuwa />} />
        <Route path="/warritraditionalcouncil" element={<Warri />} />
        <Route path="/royalcourtnotices" element={<Royal />} />
        <Route path="/event" element={<Event />} />
        <Route
          path="/press"
          element={
            <RequireAuth>
              <Press />
            </RequireAuth>
          }
        />
        <Route path="/account" element={<Account />} />
        <Route
          path="/speech"
          element={
            <RequireAuth>
              <Speech />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signed />} />
        <Route path="/login" element={<Logined />} />
        <Route
          path="/logout"
          element={
            <RequireAuth>
              <Logouted />
            </RequireAuth>
          }
        />
        <Route
          path="/changepassword"
          element={
            <RequireAuth>
              <Passworded />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
