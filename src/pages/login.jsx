import "../assets/Style/login.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../img/logo/logo.png";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // VALIDASI PASSWORD
  const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("Kamu harus daftar dulu!");
    return;
  }

  if (
    username !== storedUser.username ||
    password !== storedUser.password
  ) {
    alert("Username atau password salah!");
    return;
  }

  localStorage.setItem("isLogin", "true");
  navigate("/home");
};

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <img src={logo} alt="CHILL Logo" className="login-logo" />
          <h2 className="login-title">Masuk</h2>
          <p className="subtitle">Selamat datang kembali!</p>
        </div>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Kata Sandi</label>
          <input
            type="password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="row-links">
          <span>
            Belum punya akun? <Link to="/register">Daftar</Link>
          </span>
          <span>
            <Link to="/register">Lupa kata sandi?</Link>
          </span>
        </div>

        <button className="btn-login" onClick={handleLogin}>
          Masuk
        </button>

        <div className="divider">Atau</div>

        <button className="btn-google">
          <FcGoogle className="google-icon" />
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
}