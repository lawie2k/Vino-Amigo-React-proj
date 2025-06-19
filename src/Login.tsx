import React, { useState } from "react";

const Login: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div className="loginBG" id="login">
        {showLogin ? (
          <div className="login">
            <div className="loginBox">
              <div className="login-signup-switch">
                <button onClick={() => setShowLogin(true)}>Login</button>
                <button onClick={() => setShowLogin(false)}>Signup</button>
              </div>
              <div className="loginInput">
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <button>Login</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="signup">
            <div className="signupBox">
              <div className="login-signup-switch">
                <button onClick={() => setShowLogin(true)}>Login</button>
                <button onClick={() => setShowLogin(false)}>Signup</button>
              </div>
              <div className="signupInput">
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <button>Create Account</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
