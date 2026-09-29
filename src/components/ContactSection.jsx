import SectionLabel from "./ui/SectionLabel";
import ContactForm from "./ContactForm";
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
      <ContactForm />
      <SocialLinks linkedinUrl={linkedinUrl} githubUrl={githubUrl} />
    </section>
  );
}

export default ContactSection;
