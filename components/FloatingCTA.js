export default function FloatingCTA() {
  return (
    <div className="floating-cta responsive-text" data-aos="zoom in">
      <p className="cta-text">Hi!👋<br />
        Kalau kamu butuh bantuan, Hubungi kami via WhatsApp ya !</p>
      <a
        href="https://wa.me/+6282337506356?text=Halo%20Lernen%20Indonesia!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/social-media/whatsapp2.svg"
          alt="WhatsApp"
          width={55}
          height={55}
        />
      </a>
    </div>
  );
} 