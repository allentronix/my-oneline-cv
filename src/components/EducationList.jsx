import SectionLabel from "./ui/SectionLabel";
import "./EducationList.css";

function EducationList({ entries }) {
  return (
    <div className="education">
      <SectionLabel as="h3">Education</SectionLabel>
      <ul className="education-list">
        {entries.map((entry) => (
          <li className="education-list__item" key={entry.id}>
            <div className="education-list__text">
              <p className="education-list__degree">
                {entry.degree}
                {entry.grade && (
                  <span className="education-list__grade">{entry.grade}</span>
                )}
              </p>
              <p className="education-list__institution">{entry.institution}</p>
            </div>
            <span className="education-list__years">{entry.years}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationList;
