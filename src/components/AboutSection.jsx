import SectionLabel from "./ui/SectionLabel";
import SkillGroups from "./SkillGroups";
import EducationList from "./EducationList";
import "./AboutSection.css";

function AboutSection({ about }) {
  const { heading, paragraphs, skillGroups, education } = about;

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <SectionLabel index="01" id="about-title">
        About
      </SectionLabel>
      <div className="about-section__columns">
        <div className="about-section__intro">
          <p className="about-section__heading">{heading}</p>
          {paragraphs.map((paragraph) => (
            <p className="about-section__paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="about-section__details">
          <SkillGroups groups={skillGroups} />
          <EducationList entries={education} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
