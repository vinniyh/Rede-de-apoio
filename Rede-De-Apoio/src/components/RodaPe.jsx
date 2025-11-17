import '../css/rodaPe.css'
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Nome da Empresa */}
        <p className="footer-rights">© 2025 EyeTech — Todos os direitos reservados.</p>

        {/* Ícones Sociais */}
        <div className="footer-social">
          <a href="#" className="social-icon">
            <FaWhatsapp />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon yt">
            <FaYoutube />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer