export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href?: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <ul className="box-border caret-transparent gap-x-1 flex flex-col list-none gap-y-1 pl-0">
      <li className="text-[oklch(0.3956_0.0812_166.85)] text-base box-border caret-transparent leading-6">
        {props.title}
      </li>
      {props.links.map((link, index) => (
        <li key={index} className="box-border caret-transparent">
          {link.href ? (
            <a href={link.href} className="box-border caret-transparent">
              {link.text}
            </a>
          ) : (
            <span className="box-border caret-transparent">
              {link.text}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
