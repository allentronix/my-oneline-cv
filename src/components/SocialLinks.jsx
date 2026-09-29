import "./SocialLinks.css";

function SocialLinks({ linkedinUrl, githubUrl }) {
  return (
    <ul className="social-links">
      <li>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </li>
      <li>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
