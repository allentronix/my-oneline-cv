import "./SkillGroups.css";

function SkillGroups({ groups }) {
  return (
    <dl className="skill-groups">
      {groups.map((group) => (
        <div className="skill-groups__row" key={group.label}>
          <dt className="skill-groups__label">{group.label}</dt>
          <dd className="skill-groups__items">{group.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
}

export default SkillGroups;
