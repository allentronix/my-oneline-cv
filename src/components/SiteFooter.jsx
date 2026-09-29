import "./SiteFooter.css";

function SiteFooter({ name }) {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {name}
      </span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

export default SiteFooter;
