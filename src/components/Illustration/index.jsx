import "./styles.css";

// Ilustração própria em SVG: globo com marcadores de localização e uma viajante.
export function Illustration() {
  return (
    <svg className="illustration" viewBox="0 0 420 260" role="img" aria-label="Globo com marcadores de destinos e uma viajante">
      <ellipse cx="195" cy="212" rx="150" ry="14" fill="none" stroke="#c93de0" strokeWidth="2" />
      <circle cx="195" cy="140" r="82" fill="#3f3d56" />
      <path d="M140 110c18-14 34-6 44 6s-4 24-20 24-34-14-24-30zM205 150c16-8 34 2 36 18s-14 28-26 20-20-30-10-38z" fill="#6c6a85" />
      <g fill="#c93de0">
        <path d="M120 40a22 22 0 0 1 22 22c0 18-22 40-22 40S98 80 98 62a22 22 0 0 1 22-22z" />
        <path d="M185 22a24 24 0 0 1 24 24c0 20-24 44-24 44S161 66 161 46a24 24 0 0 1 24-24z" />
        <path d="M255 60a17 17 0 0 1 17 17c0 14-17 31-17 31s-17-17-17-31a17 17 0 0 1 17-17z" />
      </g>
      <g fill="#fff">
        <circle cx="120" cy="62" r="8" />
        <circle cx="185" cy="46" r="9" />
        <circle cx="255" cy="77" r="6" />
      </g>
      <g>
        <circle cx="300" cy="82" r="13" fill="#f2c9a5" />
        <path d="M287 80c4-14 24-14 28 0-6-6-20-6-28 0z" fill="#3f3d56" />
        <rect x="288" y="95" width="24" height="62" rx="10" fill="#e9e7f2" />
        <rect x="289" y="155" width="10" height="56" rx="4" fill="#3f3d56" />
        <rect x="301" y="155" width="10" height="56" rx="4" fill="#3f3d56" />
        <rect x="266" y="108" width="26" height="8" rx="4" fill="#e9e7f2" transform="rotate(-20 266 108)" />
      </g>
    </svg>
  );
}
