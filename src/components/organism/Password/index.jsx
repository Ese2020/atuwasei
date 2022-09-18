import React, { useContext, useState } from "react";
import { NavLink } from "../../atom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import "./app.css";

export const Password = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //   const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handlePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sendPasswordResetEmail(auth, email)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        // navitage("/logout");
      })
      .catch((error) => {
        console.log("error");
      });
    setMessage("Check your inbox for further instructions");
    setLoading(false);
  };

  return (
    <>
      <div className="lg-fm">
        <form onSubmit={handlePassword}>
          <h1 className="lg-h1">Change Password</h1>
          <p className="lg-p">
            Your details are kept safe and with it you can always gain access!
          </p>
          {message && <span className="lg-fd-d">{message}</span>}
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button type="submit" disabled={loading} className="btn-lg-md">
            Change Password
          </button>
          <NavLink to="/login" className="backed-2">
            <button className="btn-md">Already Registered? Login</button>
          </NavLink>

          <NavLink to="/" className="backed-2 bw-2">
            <button className="btn-m-d">Continue Browing...</button>
          </NavLink>
        </form>
      </div>
    </>
  );
};
