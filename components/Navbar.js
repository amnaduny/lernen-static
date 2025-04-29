import { useEffect } from "react";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((bootstrap) => {
        // Bootstrap loaded
      })
      .catch((err) => {
        console.error("Bootstrap JS failed to load:", err);
      });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light custom-bg responsive-text sticky-top"
      id="navbar-section"
    >
      <div className="container">
        {/* Logo */}
        <Link href="/">
          <a className="navbar-brand">
            <img
              className="logo"
              src="/assets/logo-lernen.png"
              alt="Lernen Indonesia Logo"
            />
          </a>
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/#hero">
                <a className="nav-link">Beranda</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#program-section">
                <a className="nav-link">Program</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#mentor-section" className="nav-link">
                <a className="nav-link">Mentor</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                <a className="nav-link">Tentang</a>
              </Link>
            </li>
          </ul>

          {/* Mobile Contact Button */}
          <div className="d-flex d-lg-none justify-content-center mt-3 mb-2">
            <Link href="https://wa.me/+6282337506356?text=Halo%20Lernen%20Indonesia!">
              <a
                className="btn custom-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi Admin
              </a>
            </Link>
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="d-flex-none d-lg-block navbar-signup mx-5">
          <Link href="https://wa.me/+6282337506356?text=Halo%20Lernen%20Indonesia!">
            <a
              
              className="btn custom-btn d-lg-block mx-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Admin
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
