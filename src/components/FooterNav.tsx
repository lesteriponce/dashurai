import { FooterColumn } from "./FooterColumn";

export const FooterNav = () => {
  return (
    <nav className="text-sm box-border caret-transparent gap-x-5 grid grid-cols-[repeat(2,minmax(0px,1fr))] leading-5 gap-y-5 md:grid-cols-[repeat(5,minmax(0px,1fr))]">
      <FooterColumn
        title="Platform"
        links={[
          { text: "Overview" },
          { text: "Playbooks" },
          {
            text: "Integrations",
          },
        ]}
      />
      <FooterColumn
        title="Channels"
        links={[
          { text: "Messaging" },
          { text: "Voice" },
          { text: "Email" },
        ]}
      />
      <FooterColumn
        title="Industries"
        links={[
          {
            text: "Financial Services",
          },
          { text: "Gaming" },
          { text: "Health Insurance" },
          {
            text: "Property Insurance",
          },
          { text: "Retail" },
          { text: "Technology" },
          { text: "Travel" },
        ]}
      />
      <FooterColumn
        title="Resources"
        links={[
          { text: "ACX Academy", href: "https://www.ada-education.com/" },
          { text: "Blog" },
          { text: "Customers" },
          { text: "Documentation", href: "https://docs.ada.cx/" },
          { text: "Pricing" },
          { text: "Resource Library" },
          {
            text: "ROI Calculator",
          },
        ]}
      />
      <FooterColumn
        title="Company"
        links={[
          { text: "Who we are" },
          { text: "Careers" },
          {
            text: "Become a partner",
          },
          { text: "Trust center" },
        ]}
      />
    </nav>
  );
};
