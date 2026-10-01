import SectionLabel from "./ui/SectionLabel";
import "./CertificateList.css";

function CertificateList({ certificates }) {
  return (
    <div className="certificate-list">
      <SectionLabel as="h3">Certificates</SectionLabel>
      <ul className="certificate-list__items">
        {certificates.map((certificate) => (
          <li className="certificate-list__item" key={certificate.id}>
            <p className="certificate-list__name">{certificate.name}</p>
            <p className="certificate-list__issuer">{certificate.issuer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CertificateList;
