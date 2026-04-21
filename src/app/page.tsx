import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import StatsCounter from "@/components/StatsCounter";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import RippleGrid from "@/components/RippleGrid";

export default function Home() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden w-full">
          {/* Shared Floating background blobs */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-container/10 via-surface to-surface" />
          <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full animate-float z-0 pointer-events-none will-change-transform" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-primary-container/10 blur-[100px] rounded-full animate-float-delayed z-0 pointer-events-none will-change-transform" />
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-secondary-container/10 blur-[100px] rounded-full animate-float-slow z-0 pointer-events-none will-change-transform" />

          {/* Shared Interactive Ripple Grid Background (Dark Mode only) */}
          <div className="show-in-dark-only absolute inset-0 z-0">
            <RippleGrid
              enableRainbow={false}
              gridColor="#a855f7" 
              rippleIntensity={0.03}
              gridSize={12}
              gridThickness={15}
              mouseInteraction={true}
              mouseInteractionRadius={1.0}
              opacity={0.3}
              vignetteStrength={2.0}
              glowIntensity={0.15}
            />
          </div>

          <div className="relative z-10">
            <HeroSection />
          </div>
        </section>
        <ExpertiseSection />
        <StatsCounter />
        <FeaturedProjectSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
