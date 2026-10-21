import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function NotFound() {
  return (
    <section className="wrap pt-16 lg:pt-24 min-h-[60vh]">
      <title>Page not found · Kiran Katakam</title>
      <div className="inline-flex items-stretch">
        <span className="bg-chalk text-void font-black italic [font-stretch:62%] text-[34px] leading-none px-4 py-2">DNF</span>
        <span className="border border-l-0 border-rule px-4 flex items-center label">Error 404</span>
      </div>
      <h1 className="display text-[clamp(72px,13vw,184px)] mt-6">Off the track</h1>
      <p className="mt-5 text-dim text-[17px] max-w-[52ch]">This page does not exist. It may have moved, or the link has a typo.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="inline-flex items-center gap-2 bg-chalk text-void px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:bg-green transition-colors">
          <Icon name="left" /> Back to the grid
        </Link>
        <Link to="/projects" className="inline-flex items-center gap-2 border border-rule px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:border-chalk transition-colors">
          All projects
        </Link>
      </div>
    </section>
  );
}
