import "./EducationList.css";

function EducationList({ entries }) {
  return (
    <ul className="education-list">
      {entries.map((entry) => (
        <li className="education-list__item" key={entry.id}>
          <p>
            <span className="education-list__degree">{entry.degree}</span>,{" "}
            <span className="education-list__institution">
              {entry.institution}
            </span>
          </p>
          <span className="education-list__years">{entry.years}</span>
        </li>
      ))}
    </ul>
  );
}

export default EducationList;
