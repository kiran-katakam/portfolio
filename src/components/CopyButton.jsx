import { useState } from "react";
import Icon from "./Icon";

export default function CopyButton({ text, label, className = "" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked (http, old browser): let the visitor copy it by hand
      window.prompt("Copy this:", text);
    }
  };

  return (
    <button type="button" onClick={copy} className={`inline-flex items-center gap-2 px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] border border-rule hover:border-chalk transition-colors ${className}`}>
      <Icon name={copied ? "check" : "copy"} /> <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
}
