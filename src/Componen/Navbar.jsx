import { Link } from 'react-router';
import ChillLogo from '../img/logo/logo.png';
import Profile from '../Componen/Profile';
import '../assets/Style/navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar">
          <ul className="links">
            <Link to="/"><img className="logo" src={ChillLogo} width="100" alt="logo" /></Link>
            <li><Link to="/series">Series</Link></li>
            <li><Link to="/film">Film</Link></li>
            <li><Link to="/register">Daftar Saya</Link></li>
          </ul>
          <Profile />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;