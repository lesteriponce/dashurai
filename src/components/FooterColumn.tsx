export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href?: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">
        {props.title}
      </h3>
      <ul className="space-y-2">
        {props.links.map((link, index) => (
          <li key={index}>
            {link.href ? (
              <a 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.text}
              </a>
            ) : (
              <span className="text-gray-300 text-sm">
                {link.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
