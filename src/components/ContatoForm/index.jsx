import { useState } from "react";
import "./styles.css";

// Formulário de contato com campos controlados (useState).
export function ContatoForm() {
  const [dados, setDados] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function atualizar(evento) {
    const { name, value } = evento.target;
    setDados((anterior) => ({ ...anterior, [name]: value }));
  }

  function enviar(evento) {
    evento.preventDefault();
    setEnviado(true);
    setDados({ nome: "", email: "", mensagem: "" });
  }

  return (
    <form className="contato-form" onSubmit={enviar}>
      <label>
        Nome
        <input name="nome" value={dados.nome} onChange={atualizar} required />
      </label>
      <label>
        E-mail
        <input name="email" type="email" value={dados.email} onChange={atualizar} required />
      </label>
      <label>
        Mensagem
        <textarea name="mensagem" rows="4" value={dados.mensagem} onChange={atualizar} required />
      </label>
      <button type="submit">Enviar mensagem</button>
      {enviado && <p className="contato-ok">Obrigado! Entraremos em contato em breve.</p>}
    </form>
  );
}
