import '../css/rodaPe.css'
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <p className="footer-rights">
          © 2025 EyeTech — Todos os direitos reservados.
        </p>

        <div className="footer-social">
          <a 
            href="https://chat.whatsapp.com/BxwBvtUaI7ZLBrHSP5SkHv" 
            className="social-icon wpp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a 
            href="#" 
            className="social-icon insta"
          >
            <FaInstagram />
          </a>

          <a 
            href="https://www.youtube.com/@ReabilitandoSuaIdentidade"
            className="social-icon yt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
