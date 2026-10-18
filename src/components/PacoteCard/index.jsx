import "./styles.css";

const formatarPreco = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Card reutilizado em Destinos e Ofertas. Recebe os dados por props.
export function PacoteCard({ nome, pais, dias, preco, precoAntigo, emoji, descricao }) {
  return (
    <article className="pacote">
      <div className="pacote-icone" aria-hidden="true">{emoji}</div>
      <h3>{nome}</h3>
      <span className="pacote-local">{pais} · {dias} dias</span>
      <p>{descricao}</p>
      <div className="pacote-preco">
        {precoAntigo && <s>{formatarPreco(precoAntigo)}</s>}
        <strong>{formatarPreco(preco)}</strong>
      </div>
    </article>
  );
}
