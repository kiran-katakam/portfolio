import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <div className="w-full max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <h1 className="font-display-lg text-display-lg text-on-background">
        Project: {slug}
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
        Phase 5 will build this page.
      </p>
    </div>
  );
}
