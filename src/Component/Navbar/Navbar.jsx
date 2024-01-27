import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`myHeader ${scrolling ? "scrolling" : ""}`}>
      <div className="container">
        <Link to="/" className="link">
          <img src="/logo.png" alt="LGOG" />
        </Link>
        <Link to="/book">
          <button>Get your Copy Today</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
