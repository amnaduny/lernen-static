import { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CTA() {
  return (
    <section className="cta container my-5 responsive-text">
        <div className="row align-items-center custom-bg py-3 px-5" data-aos="zoom-in">
            <div className="col">
                <h2>Konsultasikan dulu kebutuhanmu!!!</h2>
                <p>
                Jangan tunda lagi!
                <br /> 
                Hubungi Lernen sekarang dan konsultasikan masa depan Anda!
                </p>
                <Link href="https://wa.me/+6282337506356?text=Halo%20Lernen%20Indonesia!">
                  <a
                  target="_blank"
                  rel="noreferrer"
                  >
                    <button className="btn custom-btn">Konsultasi Dulu</button>
                  </a>
                </Link>
            </div>
            <div className="col-3 text-center" id="imageCTA">
                <img
                src="/assets/cta-section/cta-image.svg"
                alt="cta-img"
                className="img-fluid"
                style={{ maxWidth: "200px" }}
                />
            </div>
        </div>
    </section>
  );
}
