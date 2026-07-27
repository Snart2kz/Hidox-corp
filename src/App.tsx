import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import Stack from "./components/Stack";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <Stack />
        <Services />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/mentions-legales" element={<Legal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
