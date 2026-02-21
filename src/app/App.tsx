import Navbar from "./navbar/Navbar";
import Experience from "./experience/Experience";
import Hero from "./hero/Hero";
import ClickSpark from "../components/layout/ClickSpark";
import Tech from "./tech/Tech";
import ContactUs from "./ContactUs/ContactUs";

function App() {
  return (
    <div className="w-full min-h-screen relative  text-foreground">
      {/* NAVBAR FIJO ENCIMA DE TODO */}
      <ClickSpark
        sparkColor="#4F46E5"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="fixed top-0 left-0 right-0 z-50 w-full">
          <Navbar />
        </div>

        {/* SECCIONES CON SCROLL */}
        <div className="w-full">
          <Hero />
          <Tech />
          <Experience />
          <ContactUs />
        </div>
      </ClickSpark>
    </div>
  );
}

export default App;
