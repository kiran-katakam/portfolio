export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-surface-container-lowest border-t-2 border-dashed border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-margin-mobile md:px-margin-desktop gap-gutter max-w-layout mx-auto">
        {/* Copyright */}
        <div className="font-label-pixel text-label-pixel text-tertiary">
          © 2026 DEV_ENGINE_V1. BUILT ON FEDORA.
        </div>

        {/* Build Credits — terminal style */}
        <div className="flex items-center gap-3 font-code text-[11px] text-on-surface-variant/60 order-last md:order-none">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-tertiary/70 rounded-full"></span>
            designed
            <span className="text-tertiary/90">via</span>
            <a
              href="https://stitch.withgoogle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-tertiary transition-colors"
            >
              Stitch
            </a>
          </span>
          <span className="text-outline-variant/50">|</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-primary/70 rounded-full"></span>
            built
            <span className="text-tertiary/90">with</span>
            <span className="text-on-surface-variant">
              Opus 4.6
            </span>
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            className="font-label-pixel text-label-pixel text-on-surface-variant hover:text-secondary transition-colors hover:scale-105 transform flex items-center gap-1"
            href="https://github.com/kiran-katakam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">code</span>
            GitHub
          </a>
          <a
            className="font-label-pixel text-label-pixel text-on-surface-variant hover:text-secondary transition-colors hover:scale-105 transform flex items-center gap-1"
            href="https://www.linkedin.com/in/kirankatakam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">work</span>
            LinkedIn
          </a>
          <a
            className="font-label-pixel text-label-pixel text-on-surface-variant hover:text-secondary transition-colors hover:scale-105 transform flex items-center gap-1"
            href="https://www.instagram.com/kiran__katakam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">photo_camera</span>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
