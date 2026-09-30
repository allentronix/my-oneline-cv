import SocialLinks from "./SocialLinks";
import HighlightedText from "./ui/HighlightedText";
import "./Hero.css";

function Hero({ headline, intro, linkedinUrl, githubUrl }) {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <h1 className="hero__headline">{headline}</h1>
        <p className="hero__intro">
          <HighlightedText text={intro} />
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
