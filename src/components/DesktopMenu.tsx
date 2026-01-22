import { NavItem } from "./NavItem";
import { CTAButtons } from "./CTAButtons";

export const DesktopMenu = () => {
  return (
    <ul className="absolute bg-[oklch(0.25_0.05_240)] box-border caret-transparent gap-x-[normal] hidden list-none min-h-0 min-w-0 gap-y-[normal] w-full p-1 rounded-[32px] left-0 top-full md:static md:bg-[oklch(0.25_0.05_240)] md:gap-x-1 md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-1 md:p-0 md:rounded-[32px] md:left-auto md:top-auto">
      <NavItem
        label="Home"
        hasDropdown={false}
        href="#home"
      />
      <NavItem
        label="About"
        hasDropdown={false}
        href="#about"
      />
      <NavItem
        label="Capabilities"
        hasDropdown={false}
        href="#capabilities"
      />
      <NavItem
        label="Markets"
        hasDropdown={false}
        href="#the-markets"
      />
      <NavItem
        label="Careers"
        hasDropdown={false}
        href="#careers"
      />
      <CTAButtons />
    </ul>
  );
};
