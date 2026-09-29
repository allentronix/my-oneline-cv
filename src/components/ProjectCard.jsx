import "./ProjectCard.css";

function ProjectCard({ project, index }) {
  const { title, description, stack, year, href } = project;

  return (
    <li className="project-card">
      <a
        className="project-card__link"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <span className="project-card__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="project-card__title">
          {title}
          <span className="project-card__arrow" aria-hidden="true">
            ↗
          </span>
        </h3>
        <div className="project-card__details">
          <p className="project-card__description">{description}</p>
          <p className="project-card__meta">
            {stack.join(" · ")} — {year}
          </p>
        </div>
      </a>
    </li>
  );
}

export default ProjectCard;
