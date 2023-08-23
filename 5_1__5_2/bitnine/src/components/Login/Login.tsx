import { useState } from "react"
import Header from "../global/Header/Header"
import Footer from "../global/Footer"

function Login(props: {setToken: React.Dispatch<React.SetStateAction<string>>}) {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  type LoginRequest = {
    email: string
    password: string
  }

  async function login() {
    if (email && password) {
      const loginRequest: LoginRequest = {
        email,
        password,
      }
      const response = await fetch("http://localhost:5173/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        },
        body: JSON.stringify(loginRequest),
      })
      const data = await response.json();
      props.setToken(data.token);
    }
  }

  return (
    <div id="login-container">
        <Header />
        <div id="login-form">
        <h1>Login</h1>
        <form action="#">
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={login} style={{ marginTop: "10px" }}>
                Login
            </button>
        </form>
        </div>
        <div className="footer" style={{'bottom': 0, "position": "absolute", "width": "100%"}}>
          <Footer />
        </div>
    </div>
  )
}

export default Login;