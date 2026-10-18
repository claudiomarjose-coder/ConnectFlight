import "./styles.css";

// Onda decorativa que aparece na base do rodapé.
export function Wave() {
  return (
    <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,120 L0,70 C180,10 360,0 560,30 C800,66 980,110 1180,80 C1300,62 1380,40 1440,20 L1440,120 Z"
        fill="#3f3d56"
      />
    </svg>
  );
}
