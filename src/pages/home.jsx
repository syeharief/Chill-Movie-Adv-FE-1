import React from "react";
import MovieRow from "../componen/MovieRow";
import "../assets/Style/home.css";
import Navbar from "../Componen/Navbar";
import Hero from "../Componen/hero";
import Footer from "../Componen/Footer";
import Rilis from "../Componen/rilis";
/* IMPORT IMAGES */
import bighero from "../img/poster/landscape/l12.png";
import shazam from "../img/poster/landscape/l2.png";
import otto from "../img/poster/landscape/l10.png";
import megan from "../img/poster/landscape/l15.png";
import world from "../img/poster/landscape/l20.png";
import avatar from "../img/poster/portrait/p3.png";
import batman from "../img/poster/portrait/p8.png";
import megan1 from "../img/poster/portrait/p15.png";
import korea from "../img/poster/portrait/p1.png";
import Fast from "../img/poster/portrait/p4.png";
import blue from "../img/poster/portrait/p5.png";
import litte from "../img/poster/portrait/p6.png";
import black from "../img/poster/portrait/p7.png";
import big from "../img/poster/portrait/p12.png";
import suzume from "../img/poster/portrait/p14.png";
import ant from "../img/poster/portrait/p16.png";
import doctor from "../img/poster/portrait/p17.png";
import bay from "../img/poster/portrait/portrait18.png";
/* DATA */
const continueWatching = [
  { title: "Big Hero 6", image: bighero },
  { title: "Shazam", image: shazam },
  { title: "Otto", image: otto },
  { title: "Megan", image: megan },
  { title: "Jurassic World", image: world },
];

const topRating = [
  { title: "Avatar", image: avatar },
  { title: "Megan", image: megan1 },
  { title: "Korea", image: korea },
  { title: "Fast X", image: Fast },
  { title: "Bluek Lock", image: blue },
  { title: "Litte Mermaid", image: litte },
  { title: "Black Adam", image: black },
];

const trending = [
  { title: "Batman", image: batman },
  { title: "Litte Mermaid", image: litte },
  { title: "Fast X", image: Fast },
  { title: "Black Adam", image: black },
  { title: "Big Hero 6", image: big },
  { title: "Suzume", image: suzume },
  { title: "Avatar", image: avatar },
];

const newRelease = [
  { title: "Batman", image: batman },
  { title: "Avatar", image: avatar },
  { title: "Suzume", image: suzume },
  { title: "Fast X", image: Fast },
  { title: "Ant-Man Quantumania", image: ant },
  { title: "Doctor Stranger", image: doctor },
  { title: "Baymax", image: bay },
];

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <Hero />

      <MovieRow
        title="Melanjutkan Tonton Film"
        movies={continueWatching}
        variant="landscape"
      />

      <MovieRow
        title="Top Rating Film dan Series Hari Ini"
        movies={topRating}
        variant="portrait"
      />

      <MovieRow
        title="Film Trending"
        movies={trending}
        variant="portrait"
      />

      <Rilis 
      variant="portrait"
      />
      <Footer />
    </div>
  );
};

export default Home;