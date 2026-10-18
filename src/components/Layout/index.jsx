import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import "./styles.css";

// Estrutura comum a todas as telas: conteúdo (Outlet) + rodapé com navegação.
export function Layout() {
  return (
    <div className="layout">
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
