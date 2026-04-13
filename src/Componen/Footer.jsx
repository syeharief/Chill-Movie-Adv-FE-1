import "../assets/Style/footer.css";
import logo from "../img/logo/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="CHILL" />
            <span>CHILL</span>
          </div>

          <p>©2023 Chill All Rights Reserved.</p>
        </div>


        {/* GENRE */}
        <div className="footer-genre">

          <h4 className="footer-title">Genre</h4>

          <div className="genre-grid">

            <div className="genre-column">
              <Link to="/genre/aksi">Aksi</Link>
              <Link to="/genre/anak">Anak-anak</Link>
              <Link to="/genre/anime">Anime</Link>
              <Link to="/genre/britania">Britania</Link>
            </div>

            <div className="genre-column">
              <Link to="/genre/drama">Drama</Link>
              <Link to="/genre/fantasi">Fantasi Ilmiah & Fantasi</Link>
              <Link to="/genre/kejahatan">Kejahatan</Link>
              <Link to="/genre/kdrama">KDrama</Link>
            </div>

            <div className="genre-column">
              <Link to="/genre/komedi">Komedi</Link>
              <Link to="/genre/petualangan">Petualangan</Link>
              <Link to="/genre/perang">Perang</Link>
              <Link to="/genre/romantis">Romantis</Link>
            </div>

            <div className="genre-column">
              <Link to="/genre/sains">Sains & Alam</Link>
              <Link to="/genre/thriller">Thriller</Link>
            </div>

          </div>

        </div>


        {/* BANTUAN */}
        <div className="footer-help">

          <h4 className="footer-title">Bantuan</h4>

          <Link to="/faq">FAQ</Link>
          <Link to="/kontak">Kontak Kami</Link>
          <Link to="/privasi">Privasi</Link>
          <Link to="/syarat">Syarat & Ketentuan</Link>

        </div>


      </div>

    </footer>
  );
}
