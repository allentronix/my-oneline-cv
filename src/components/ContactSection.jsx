import SectionLabel from "./ui/SectionLabel";
import SocialLinks from "./SocialLinks";
import "./ContactSection.css";

function ContactSection({ linkedinUrl, githubUrl }) {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <SectionLabel index="03" id="contact-title">
        Get in touch
      </SectionLabel>
      <p className="contact-section__heading">
        Have a project in mind or just want to say hello? Let’s talk.
      </p>
      <SocialLinks linkedinUrl={linkedinUrl} githubUrl={githubUrl} />
      {/* Contact form goes here — to be implemented later. */}
    </section>
  );
}

export default ContactSection;
