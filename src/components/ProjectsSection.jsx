import SectionLabel from "./ui/SectionLabel";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

function ProjectsSection({ projects }) {
  return (
    <section className="projects-section" id="work" aria-labelledby="work-title">
      <SectionLabel index="02" id="work-title">
        Recent projects
      </SectionLabel>
      <ul className="projects-section__list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
