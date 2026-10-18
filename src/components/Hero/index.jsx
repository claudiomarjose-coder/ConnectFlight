import { Illustration } from "../Illustration";
import "./styles.css";

// Bloco principal da página inicial, conforme o protótipo do Figma.
export function Hero() {
  return (
    <section className="hero">
      <Illustration />

      <h1 className="hero-titulo">
        O seu próximo <strong>destino</strong> pode estar aqui...
      </h1>

      <p className="hero-texto">
        Aqui você encontra uma seleção de <b>pacotes completos</b> para as suas férias!
      </p>

      <p className="hero-texto">
        No <b>ConnectFlight</b> você encontra pacotes de viagens nacionais e internacionais que
        incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com{" "}
        <b>preços arrasadores</b>!
      </p>

      <p className="hero-texto hero-texto-claro">
        Se você ainda não tem um destino definido, confira nossa seção de ofertas.
      </p>
    </section>
  );
}
