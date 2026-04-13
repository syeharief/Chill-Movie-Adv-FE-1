import "../assets/Style/hero.css";
import Suzume from "../img/poster/landscape/l14.png";

import { FaInfoCircle, FaVolumeMute } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${Suzume})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-container">

          <div className="hero-content">
            <h1>Suzume</h1>

            <p>
              Suzume Iwato adalah seorang gadis SMA berusia 17 tahun yang tinggal bersama bibinya di sebuah kota kecil di Miyazaki. Suatu hari dia melihat mimpi sewaktu dia masih kecil dan mencari ibunya. Setelah beberapa saat, dia terbangun.
            </p>

            <div className="hero-buttons">

              <button className="btn-primary">
                Mulai
              </button>

              <button className="btn-secondary">
                <FaInfoCircle />
                Selengkapnya
              </button>

              <span className="age">18+</span>

            </div>
          </div>

          <div className="hero-volume">
            <FaVolumeMute />
          </div>

        </div>
      </div>
    </section>
  );
}
