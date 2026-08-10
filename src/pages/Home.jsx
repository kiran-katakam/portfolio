export default function Home() {
  return (
    <div className="w-full max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <div className="flex items-center gap-2 mb-8">
        <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
        <span className="font-label-pixel text-label-pixel text-tertiary tracking-widest">
          SYSTEM_ONLINE
        </span>
      </div>
      <h1 className="font-display-lg text-display-lg text-on-background">
        Home Page
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
        Phase 2 will build this page.
      </p>
    </div>
  );
}
