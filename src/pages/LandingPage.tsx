import MenuBar from "@/components/MenuBar";
import Header from "@/components/Header";
import ProjectCards from "@/components/Projects";
import AboutCard from "@/About";

export default function LandingPage() {
  return (
    // allow vertical scrolling
    <div className="relative min-h-screen overflow-y-auto text-white">
      
      {/* Full-screen header section */}
      <section className="h-screen flex flex-col">
        <MenuBar />

        {/* Center the header */}
        <div className="flex-1 flex items-center justify-center -mt-50">
          <Header />
        </div>
      </section>

      {/* Projects section */}
      <section id="projects">
        <ProjectCards />
      </section>

      {/* About section */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <AboutCard />
      </section>
    </div>
  );
}