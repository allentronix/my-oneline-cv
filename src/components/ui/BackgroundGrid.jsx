import "./BackgroundGrid.css";

// Decorative vertical column lines drawn behind the whole page.
function BackgroundGrid({ columns = 4 }) {
  return (
    <div className="background-grid" aria-hidden="true">
      {Array.from({ length: columns }, (_, index) => (
        <span key={index} className="background-grid__column" />
      ))}
    </div>
  );
}

export default BackgroundGrid;
