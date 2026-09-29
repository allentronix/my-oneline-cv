import "./SectionLabel.css";

// Small monospace label used to introduce a page section, e.g. "(01) Selected work".
function SectionLabel({ index, children, as: Tag = "h2", id }) {
  return (
    <Tag className="section-label" id={id}>
      {index && <span className="section-label__index">({index})</span>}
      {children}
    </Tag>
  );
}

export default SectionLabel;
