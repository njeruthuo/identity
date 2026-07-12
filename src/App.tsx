import { useState } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { Contact } from "./pages/Contact.tsx";
import { EMAIL } from "./data.ts";

export default function App() {
  const [page, setPage] = useState("Home");
  const go = (p: string) => {
    setPage(p === "Work" ? "Home" : p);
    window.scrollTo(0, 0);
  };
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar
        name="julius.njeru"
        active={page === "Home" ? "Work" : page}
        onNavigate={go}
      />
      <div style={{ flex: 1 }}>
        {page === "Home" && <Home onNavigate={go} />}
        {page === "About" && <About onNavigate={go} />}
        {page === "Contact" && <Contact />}
      </div>
      <Footer name="Julius Njeru" email={EMAIL} />
    </div>
  );
}
