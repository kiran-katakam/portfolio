import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const [pageKey, setPageKey] = useState(location.pathname);

  useEffect(() => {
    setPageKey(location.pathname);
  }, [location.pathname]);

  return (
    <div className="dark min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div key={pageKey} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
