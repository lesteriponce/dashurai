import { Link } from 'react-router-dom';

export type NavItemProps = {
  label: string;
  href?: string;
  hasDropdown: boolean;
  iconSrc?: string;
  dropdownVariant?: string;
  featuredLinks?: Array<{
    href: string;
    imageSrc: string;
    title: string;
    description: string;
  }>;
  linkSections?: Array<{
    title: string;
    links: Array<{
      href: string;
      label: string;
    }>;
  }>;
};

export const NavItem = (props: NavItemProps) => {
  if (!props.hasDropdown) {
    return (
      <li className="box-border caret-transparent min-h-0 min-w-0 rounded-[32px] md:min-h-[auto] md:min-w-[auto]">
        <Link
          to={props.href || '#'}
          className="text-white items-center bg-[oklch(0.25_0.05_240)] box-border caret-transparent gap-x-2 flex h-12 leading-[20.625px] gap-y-2 w-full px-5 rounded-none md:rounded-[3.35544e+07px]"
        >
          {props.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="box-border caret-transparent min-h-0 min-w-0 rounded-[32px] md:min-h-[auto] md:min-w-[auto]">
      <button className="text-white items-center bg-[oklch(0.25_0.05_240)] box-border caret-transparent gap-x-2 flex h-12 leading-[20.625px] gap-y-2 text-center w-full px-5 py-0 rounded-none md:rounded-[3.35544e+07px]">
        {props.label}
        <img
          src={
            props.iconSrc ||
            "https://c.animaapp.com/mkh4hbwu1IS6us/assets/icon-2.svg"
          }
          alt="Icon"
          className="box-border caret-transparent w-3"
        />
      </button>
      <div className="static box-border caret-transparent hidden w-fit pt-0 top-full md:absolute md:pt-2">
        <div className="bg-[oklch(0.25_0.05_240)] box-border caret-transparent block p-5 rounded-3xl md:bg-[oklch(0.25_0.05_240)] md:flex md:p-2">
          <div
            className={`box-border caret-transparent flex flex-col ${props.dropdownVariant || "gap-x-2 shrink-0 max-w-none gap-y-2 mb-5 md:max-w-xs md:mb-0"}`}
          >
            {props.featuredLinks &&
              props.featuredLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white bg-[oklab(0.9821_0_0_/_0.1)] box-border caret-transparent gap-x-3 flex gap-y-3 rounded-[20px] md:text-white md:bg-[oklab(0.9821_0_0_/_0.1)]"
                >
                  <img
                    src={link.imageSrc}
                    alt=""
                    className="text-white aspect-[auto_80_/_80] box-border caret-transparent max-w-full w-20 rounded-[20px] md:text-white"
                  />
                  <div className="text-white box-border caret-transparent gap-x-2 flex flex-col justify-center gap-y-2 pr-3 py-2 md:text-white">
                    <div className="text-white box-border caret-transparent leading-4 md:text-white">
                      {link.title}
                    </div>
                    <div className="text-white text-sm box-border caret-transparent leading-[17.5px] md:text-white">
                      {link.description}
                    </div>
                  </div>
                </a>
              ))}
            {props.linkSections && (
              <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-6 md:gap-y-6">
                {props.linkSections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="box-border caret-transparent min-w-48 px-0 md:px-5"
                  >
                    <div className="text-white box-border caret-transparent leading-5 mb-2 md:text-white">
                      {section.title}
                    </div>
                    <ul className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 pl-0">
                      {section.links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className="box-border caret-transparent"
                        >
                          <a
                            href={link.href}
                            className="text-white box-border caret-transparent block leading-5 max-w-fit md:text-white"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
