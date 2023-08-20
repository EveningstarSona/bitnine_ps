import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../global/Header/Header";

import "../../styles/RegisterLogin.css";

function Register () {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

//   type RegistrationRequest = {
//     email: string;
//     username: string;
//     password: string;
//   };
  
  async function registerUser() {

    /*
        Basic register function, not used.
        It would send a POST request with user data to /register.
    */

    // if (email && username && password) {
    //   const regRequest: RegistrationRequest = {
    //     email,
    //     username,
    //     password,
    //   };

    //   const response = await fetch("http://localhost:5173/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    //       },
    //     body: JSON.stringify(regRequest),
    //   });

    //   const data = await response.json();
    //   console.log(data);
    // }

    if (!email || !username || !password) return;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const registerForm = document.getElementById("register-form");
    const congratulations = document.getElementById("congratulations");

    console.log(registerForm);
    console.log(congratulations);

    if(registerForm)
        registerForm.style.display = "none";
    if(congratulations)
        congratulations.style.display = "flex";

    await sleep(2500);

    navigate("/login");
  };
    
  return (
    <div id="register-container">
        <Header />
        <div id="congratulations" style={{display: "none"}}>
            <h1>Success!</h1>
            <p>You are now being redirected to the login page!</p>
        </div>
        <div id="register-form">
            <h1>Register</h1>
            <form action="#">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="button"
                    onClick={registerUser}
                    style={{ marginTop: "10px" }}
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  );
};

export default Register;