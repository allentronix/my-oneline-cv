function ResourceSection({ id, icon, title, description, links }) {
  return (
    <div id={id}>
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href={`/icons.svg#${icon}`} />
      </svg>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.icon && (
                <img className={link.iconClassName} src={link.icon} alt="" />
              )}
              {link.symbol && (
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={`/icons.svg#${link.symbol}`} />
                </svg>
              )}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceSection;
