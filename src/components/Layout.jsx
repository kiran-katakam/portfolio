import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StartLights from "./StartLights";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <StartLights />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-chalk text-void px-3 py-2 font-bold">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-grow">
        <Suspense fallback={<div className="min-h-[70vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
