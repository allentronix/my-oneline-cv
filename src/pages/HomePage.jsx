import BackgroundGrid from "../components/ui/BackgroundGrid";
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import SiteFooter from "../components/SiteFooter";
import { profile } from "../data/profile";
import { about } from "../data/about";
import { projects } from "../data/projects";
import { navLinks } from "../data/navigation";

function HomePage() {
  return (
    <>
      <BackgroundGrid />
      <SiteHeader name={profile.name} links={navLinks} />
      <main>
        <Hero
          headline={profile.headline}
          linkedinUrl={profile.linkedinUrl}
          githubUrl={profile.githubUrl}
        />
        <AboutSection about={about} />
        <ProjectsSection projects={projects} />
        <ContactSection
          linkedinUrl={profile.linkedinUrl}
          githubUrl={profile.githubUrl}
        />
      </main>
      <SiteFooter name={profile.name} />
    </>
  );
}

export default HomePage;
