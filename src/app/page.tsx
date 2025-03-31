import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DietSection from "../components/DietSection";
import ExerciseSection from "../components/ExerciseSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <DietSection />
      <ExerciseSection />
      <Footer />
    </div>
  );
}
