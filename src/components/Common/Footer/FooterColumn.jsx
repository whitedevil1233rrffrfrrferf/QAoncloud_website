export default function FooterColumn({ heading, links }) {
  return (
    <div>
      <h4>{heading}</h4>
      <ul>
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <a href={link.href}>{link.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
