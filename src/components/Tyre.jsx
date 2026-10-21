import { STATUS } from "../data/projects";

// Project status drawn like a tyre-compound marker: a coloured ring with a letter.
export default function Tyre({ status, withLabel = false }) {
  const s = STATUS[status];
  return (
    <span className={`inline-flex items-center gap-2 ${s.color}`}>
      <span className="grid place-items-center w-6 h-6 rounded-full border-[3px] border-current text-[11px] font-black leading-none" aria-hidden="true">
        <span className="text-chalk">{s.letter}</span>
      </span>
      <span className={withLabel ? "label !text-current" : "sr-only"}>{s.label}</span>
    </span>
  );
}
