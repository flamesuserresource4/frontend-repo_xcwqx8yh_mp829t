import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BeforeAfter from "./components/BeforeAfter";
import BMICalculator from "./components/BMICalculator";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <BeforeAfter />
      <BMICalculator />
      <Contact />
      <footer className="py-10 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Врач-хирург. Вся информация носит ознакомительный характер.</footer>
    </div>
  );
}

export default App;