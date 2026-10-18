import { PageHeader } from "../../components/PageHeader";
import { PacoteCard } from "../../components/PacoteCard";
import { ofertas } from "../../data/pacotes";
import "../Destinos/styles.css";

export function Ofertas() {
  return (
    <>
      <PageHeader
        titulo="Ofertas"
        destaque="arrasadoras"
        subtitulo="Preços especiais por tempo limitado. Garanta já o seu pacote!"
      />
      <div className="grade-pacotes">
        {ofertas.map((item) => (
          <PacoteCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
