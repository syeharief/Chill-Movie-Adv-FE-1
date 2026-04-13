import "../assets/Style/register.css";
import logo from "../img/logo/logo.png";
import bg from "../img/bg/bgRegister.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password tidak sama!");
      return;
    }

    if (!isValidPassword(password)) {
      alert("Password minimal 8 karakter, ada huruf besar & angka!");
      return;
    }

    // SIMPAN KE LOCAL STORAGE
    localStorage.setItem(
      "user",
      JSON.stringify({ username, password })
    );

    alert("Registrasi berhasil!");
    navigate("/login");
  };

  return (
    <div
      className="register-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="register-overlay">
        <div className="register-card">

          <div className="register-header">
            <img src={logo} alt="CHILL Logo" className="register-logo" />
            <h2 className="register-title">Daftar</h2>
            <p className="subtitle">Selamat datang!</p>
          </div>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Masukkan username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Kata Sandi</label>
            <input
              type="password"
              placeholder="Masukkan kata sandi"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Konfirmasi Kata Sandi</label>
            <input
              type="password"
              placeholder="Masukkan kata sandi"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="login-link">
            Sudah punya akun? <Link to="/login">Masuk</Link>
          </div>

          <button className="btn-daftar" onClick={handleRegister}>
            Daftar
          </button>

          <div className="divider">Atau</div>

          <button className="btn-google">
            <FcGoogle size={20} />
            Daftar dengan Google
          </button>

        </div>
      </div>
    </div>
  );
}