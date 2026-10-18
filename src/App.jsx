import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Destinos } from "./pages/Destinos";
import { Ofertas } from "./pages/Ofertas";
import { Contato } from "./pages/Contato";

// Define as rotas da aplicação. O Layout (rodapé com os links) envolve todas as páginas.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
