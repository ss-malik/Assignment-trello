import React, { useState } from "react";
import "./LoginandSignup.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginandSignup = () => {
  const [action, setAction] = useState("Registration");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <div>
                <FaUser />
              </div>
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <div>
              <MdEmail />
            </div>
            <input type="email" placeholder="Email id" />
          </div>
          <div className="input">
            <div>
              <RiLockPasswordFill />
            </div>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Registration")}
          >
            Registration
          </div>
          <div
            className={action === "Registration" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginandSignup;
