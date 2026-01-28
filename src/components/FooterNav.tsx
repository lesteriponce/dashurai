import { FooterColumn } from "./FooterColumn";

export const FooterNav = () => {
  return (
    <nav className="text-sm box-border caret-transparent gap-x-5 grid grid-cols-[repeat(2,minmax(0px,1fr))] leading-5 gap-y-5 md:grid-cols-[repeat(5,minmax(0px,1fr))]">
      <FooterColumn
        title="Quick Links"
        links={[
          { text: "Home", href: "/" },
          { text: "Capabilities", href: "/capabilities" },
          { text: "Careers", href: "/careers" },
          { text: "About", href: "/about" },
          { text: "Markets", href: "/markets" },
          { text: "Contact", href: "/contact" },
        ]}
      />
    </nav>
  );
};
