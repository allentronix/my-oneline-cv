import SocialLinks from "./SocialLinks";
import "./Hero.css";

function Hero({ headline, linkedinUrl, githubUrl }) {
  return (
    <section className="hero" id="top">
      <h1 className="hero__headline">{headline}</h1>
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
