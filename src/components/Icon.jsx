// Small authored line icons, one stroke weight.
const paths = {
  out: "M7 17 17 7M9 7h8v8",
  right: "M5 12h14M13 6l6 6-6 6",
  left: "M19 12H5M11 6l-6 6 6 6",
  copy: "M9 9h10v10H9zM5 15V5h10",
  check: "M5 12.5 10 17 19 7",
};

export default function Icon({ name, className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
