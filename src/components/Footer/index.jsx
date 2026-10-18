import { NavLink } from "react-router-dom";
import { Wave } from "../Wave";
import "./styles.css";

const links = [
  { to: "/destinos", rotulo: "Destinos" },
  { to: "/ofertas", rotulo: "Ofertas" },
  { to: "/contato", rotulo: "Contato" },
];

// Rodapé com os três links de navegação do protótipo.
export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav" aria-label="Navegação principal">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "footer-link ativo" : "footer-link")}
          >
            {link.rotulo}
          </NavLink>
        ))}
      </nav>
      <Wave />
    </footer>
  );
}
