import { NavItem } from "./NavItem";
import { CTAButtons } from "./CTAButtons";

export const DesktopMenu = () => {
  return (
    <ul className="absolute bg-[oklch(0.25_0.05_240)] box-border caret-transparent gap-x-[normal] hidden list-none min-h-0 min-w-0 gap-y-[normal] w-full p-1 rounded-[32px] left-0 top-full md:static md:bg-[oklch(0.25_0.05_240)] md:gap-x-1 md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-1 md:p-0 md:rounded-[32px] md:left-auto md:top-auto">
      <NavItem
        label="Home"
        hasDropdown={true}
        featuredLinks={[
          {
            href: "https://www.ada.cx/platform/",
            imageSrc:
              "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=80,h=80,fit=crop.jpg",
            title: "Overview",
            description:
              "Measure, test, coach, and extend your AI agent at scale",
          },
          {
            href: "https://www.ada.cx/platform/integrations/",
            imageSrc:
              "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=80,h=80,fit=crop-1.jpg",
            title: "Integrations",
            description:
              "Connect systems to personalize across channels and languages",
          },
          {
            href: "https://www.ada.cx/platform/trust/",
            imageSrc:
              "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=80,h=80,fit=crop-2.jpg",
            title: "Trust & Safety",
            description: "Scale enterprise AI with confidence",
          },
        ]}
        linkSections={[
          {
            title: "Products",
            links: [
              {
                href: "https://www.ada.cx/platform/messaging/",
                label: " Messaging ",
              },
              { href: "https://www.ada.cx/platform/voice/", label: " Voice " },
              { href: "https://www.ada.cx/platform/email/", label: " Email " },
            ],
          },
          {
            title: "Optimize",
            links: [
              {
                href: "https://www.ada.cx/platform/playbooks/",
                label: " Playbooks ",
              },
            ],
          },
        ]}
      />
      <NavItem
        label="About"
        hasDropdown={true}
        linkSections={[
          {
            title: "",
            links: [
              {
                href: "https://www.ada.cx/industry/ecommerce/",
                label: "Ecommerce",
              },
              {
                href: "https://www.ada.cx/industry/financial-services/",
                label: "Financial Services",
              },
              { href: "https://www.ada.cx/industry/gaming/", label: "Gaming" },
              {
                href: "https://www.ada.cx/industry/health-insurance/",
                label: "Health Insurance",
              },
              {
                href: "https://www.ada.cx/industry/property-casualty-insurance/",
                label: "Property & Casualty Insurance",
              },
              { href: "https://www.ada.cx/industry/saas/", label: "SaaS" },
              { href: "https://www.ada.cx/industry/travel/", label: "Travel" },
            ],
          },
        ]}
      />
      <NavItem
        label="Capabilities"
        hasDropdown={true}
        featuredLinks={[
          {
            href: "https://www.ada.cx/case-studies/",
            imageSrc:
              "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=80,h=80,fit=crop-3.jpg",
            title: "Customer stories",
            description:
              "See how 350+ businesses delivered exceptional customer service",
          },
        ]}
      />
      <NavItem
        label="Markets"
        hasDropdown={true}
        featuredLinks={[
          {
            href: "https://www.ada.cx/blog/",
            imageSrc:
              "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=80,h=80,fit=crop-4.jpg",
            title: "Blog",
            description:
              "Explore actionable insights to transform your customer service",
          },
          {
            href: "https://www.ada.cx/resources/",
            imageSrc:
              "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=80,h=80,fit=crop-1.jpg",
            title: "Resource library",
            description:
              "Learn from expert guides, reports, and webinars on AI customer service.",
          },
        ]}
        linkSections={[
          {
            title: "Learn",
            links: [
              {
                href: "https://playbooks.ada.cx/",
                label: " Playbooks Library  ",
              },
              { href: "https://docs.ada.cx/", label: " Documentation ↗ " },
              {
                href: "https://www.ada-education.com/",
                label: " Ada academy ↗ ",
              },
            ],
          },
          {
            title: "Tools",
            links: [
              {
                href: "https://www.ada.cx/roi-calculator/",
                label: " ROI calculator  ",
              },
            ],
          },
        ]}
      />
      <NavItem
        label="Careers"
        hasDropdown={false}
      />
      <CTAButtons />
    </ul>
  );
};
