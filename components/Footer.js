import { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((bootstrap) => {
        // Bootstrap loaded
      })
      .catch((err) => {
        console.error("Bootstrap JS failed to load:", err);
      });
  }, []);

  const socialMedia = [
    {
      href: "https://www.instagram.com/lernen.education?igsh=MWd5c3B1bWd2M2t0Yg==",
      target: "_blank",
      imgSrc: "/assets/social-media/instagram.svg",
      alt: "instagram-logo",
      width: 24,
      height: 24,
    },
    {
      href: "https://www.tiktok.com/@lernen.education?is_from_webapp=1&sender_device=pc",
      target: "_blank",
      imgSrc: "/assets/social-media/tiktok.svg",
      alt: "tiktok-logo",
      width: 24,
      height: 24,
    },
    {
      href: "https://wa.me/+6282337506356?text=Halo%20Lernen%20Indonesia!",
      target: "_blank",
      imgSrc: "/assets/social-media/whatsapp.svg",
      alt: "whatsapp-logo",
      width: 23,
      height: 23,
    },
  ];

  return (
    // Footer Section
    <section className="footer">
      <div className="container">
        <footer className="d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex justify-content-center justify-content-md-start align-items-center mb-3 mb-md-0 responsive-text">
            <Link href="/">
              <a className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img
                  src="/assets/logo-lernen.png"
                  alt="Company Logo"
                  width={48}
                  height={48}
                />
              </a>
            </Link>
          </div>

          <div className="col-md-4 col-sm-6 d-flex justify-content-center mb-3 mb-md-0 responsive-text text-center">
            <p className="footer-text text-muted">
              © Copyright 2025, All Rights Reserved by Lernen Indonesia
            </p>
          </div>

          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            <ul className="nav list-unstyled d-flex">
              {socialMedia.map((link, index) => (
                <li className="ms-3" key={index}>
                  <Link href={link.href}>
                    <a
                      className="text-muted"
                      target={link.target || undefined}
                      rel={link.target === "_blank" ? "noreferrer" : undefined}
                    >
                      <img
                        src={link.imgSrc}
                        alt={link.alt}
                        width={link.width}
                        height={link.height}
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
