import { PageHeader } from "../../components/PageHeader";
import { PacoteCard } from "../../components/PacoteCard";
import { destinos } from "../../data/pacotes";
import "./styles.css";

export function Destinos() {
  return (
    <>
      <PageHeader
        titulo="Nossos"
        destaque="destinos"
        subtitulo="Pacotes nacionais e internacionais com passagem, hotel e café da manhã."
      />
      <div className="grade-pacotes">
        {destinos.map((item) => (
          <PacoteCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
