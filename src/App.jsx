import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { site } from "@/lib/data";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Founder from "@/pages/Founder";
import Shop from "@/pages/Shop";
import Hampers from "@/pages/Hampers";
import Customize from "@/pages/Customize";
import Gallery from "@/pages/Gallery";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const titles = {
  "/": `${site.name} — Premium Gifts & Hampers in Abuja`,
  "/about": `About · ${site.name}`,
  "/founder": `Meet the Founder · ${site.name}`,
  "/shop": `Shop · ${site.name}`,
  "/hampers": `Hampers & Sets · ${site.name}`,
  "/customize": `Customized Gifts · ${site.name}`,
  "/gallery": `Gallery · ${site.name}`,
  "/testimonials": `Reviews · ${site.name}`,
  "/contact": `Contact & Order · ${site.name}`,
};

// Scroll to top + update document title on route change
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    document.title = titles[pathname] || `${site.name}`;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/hampers" element={<Hampers />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
