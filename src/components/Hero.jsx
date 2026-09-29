import SocialLinks from "./SocialLinks";
import { parseHighlights } from "../utils/parseHighlights";
import "./Hero.css";

function Hero({ headline, intro, linkedinUrl, githubUrl }) {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <h1 className="hero__headline">{headline}</h1>
        <p className="hero__intro">
          {parseHighlights(intro).map((segment, index) =>
            segment.isHighlighted ? (
              <strong key={index}>{segment.text}</strong>
            ) : (
              segment.text
            ),
          )}
        </p>
      </div>
      <div className="hero__footer">
        <a className="hero__scroll-cue" href="#about">
          Scroll ↓
        </a>
        <SocialLinks linkedinUrl={linkedinUrl} githubUrl={githubUrl} />
      </div>
    </section>
  );
}

export default Hero;
