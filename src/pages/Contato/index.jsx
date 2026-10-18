import { PageHeader } from "../../components/PageHeader";
import { ContatoForm } from "../../components/ContatoForm";

export function Contato() {
  return (
    <>
      <PageHeader
        titulo="Fale com a"
        destaque="ConnectFlight"
        subtitulo="Envie sua dúvida e nossa equipe retorna em até 24 horas."
      />
      <ContatoForm />
    </>
  );
}
