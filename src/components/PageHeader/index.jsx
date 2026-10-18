import "./styles.css";

// Cabeçalho reutilizável das telas internas (título + subtítulo).
// Props: titulo (texto), destaque (palavra colorida) e subtitulo.
export function PageHeader({ titulo, destaque, subtitulo }) {
  return (
    <header className="page-header">
      <h1>
        {titulo} <strong>{destaque}</strong>
      </h1>
      {subtitulo && <p>{subtitulo}</p>}
    </header>
  );
}
