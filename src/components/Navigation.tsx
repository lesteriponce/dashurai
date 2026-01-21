import { MobileMenuButton } from "./MobileMenuButton";
import { DesktopMenu } from "./DesktopMenu";

export const Navigation = () => {
  return (
    <nav className="box-border caret-transparent flex w-full">
      <MobileMenuButton />
      <DesktopMenu />
    </nav>
  );
};
