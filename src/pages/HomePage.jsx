import { useState } from "react";
import Hero from "../components/Hero";
import ResourceSection from "../components/ResourceSection";
import { documentationLinks, socialLinks } from "../data/resources";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <Hero />
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks" />

      <section id="next-steps">
        <ResourceSection
          id="docs"
          icon="documentation-icon"
          title="Documentation"
          description="Your questions, answered"
          links={documentationLinks}
        />
        <ResourceSection
          id="social"
          icon="social-icon"
          title="Connect with us"
          description="Join the Vite community"
          links={socialLinks}
        />
      </section>

      <div className="ticks" />
      <section id="spacer" />
    </>
  );
}

export default HomePage;
