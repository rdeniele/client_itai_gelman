import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import VideoSection from "@/components/VideoSection";
import QuestionSection from "@/components/QuestionSection";
import Ecosystem from "@/components/Ecosystem";
import Belief from "@/components/Belief";
import Resources from "@/components/Resources";
import FinalThought from "@/components/FinalThought";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <VideoSection />
        <QuestionSection />
        <Ecosystem />
        <Belief />
        <Resources />
        <FinalThought />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
