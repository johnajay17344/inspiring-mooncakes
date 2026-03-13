import { useState } from "react"

function LoginForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="login-card">

      <h2>Sign in to Telstra webmail</h2>
      <p className="subtitle">Sign in with your Telstra email address</p>

      <form onSubmit={handleSubmit}>

        <label>Telstra email</label>
        <input
          type="email"
          placeholder="Example: john@bigpond.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

       <label>Password</label>

<div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
  />

  <span
    className="eye"
    onClick={()=>setShowPassword(!showPassword)}
  >
    👁
  </span>
</div>

        <a href="#" className="forgot-link">
          Forgot Telstra email
        </a>

        <div className="remember">
          <input type="checkbox"/>
          <span>Remember Telstra email</span>
        </div>

        <button type="submit" className="continue-btn">
          Continue
        </button>

      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <button type="button" className="secondary-btn">
        Sign in to MyTelstra
      </button>
    </div>
  )
}

export default LoginForm