import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <span className="font-display-lg text-[120px] md:text-[180px] leading-none text-outline-variant/30 font-extrabold select-none">
        404
      </span>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4 -mt-4">
        PAGE_NOT_FOUND
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
        The requested route does not exist in the system registry. It may have been moved or decommissioned.
      </p>
      <Link
        to="/"
        className="font-label-pixel text-label-pixel text-tertiary hover:text-on-background transition-colors inline-flex items-center gap-2 group"
      >
        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
        RETURN_TO_HOME
      </Link>
    </div>
  );
}
