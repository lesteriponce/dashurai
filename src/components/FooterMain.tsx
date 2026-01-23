import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";

export const FooterMain = () => {
  return (
    <div className="py-16 border-b border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <FooterBrand />
        
        <FooterColumn
          title="Products"
          links={[
            { text: "AI Platform", href: "#products" },
            { text: "Machine Learning", href: "#ml" },
            { text: "Natural Language Processing", href: "#nlp" },
            { text: "Computer Vision", href: "#vision" },
            { text: "Predictive Analytics", href: "#analytics" },
            { text: "Automation Tools", href: "#automation" },
          ]}
        />
        
        <FooterColumn
          title="Solutions"
          links={[
            { text: "Healthcare AI", href: "#healthcare" },
            { text: "Financial Services", href: "#finance" },
            { text: "Retail & E-commerce", href: "#retail" },
            { text: "Manufacturing", href: "#manufacturing" },
            { text: "Education", href: "#education" },
            { text: "Government", href: "#government" },
          ]}
        />
        
        <FooterColumn
          title="Resources"
          links={[
            { text: "Documentation", href: "#docs" },
            { text: "API Reference", href: "#api" },
            { text: "Tutorials", href: "#tutorials" },
            { text: "Blog", href: "#blog" },
            { text: "Case Studies", href: "#cases" },
            { text: "White Papers", href: "#papers" },
          ]}
        />
        
        <FooterColumn
          title="Company"
          links={[
            { text: "About Us", href: "#about" },
            { text: "Careers", href: "#careers" },
            { text: "Partners", href: "#partners" },
            { text: "Press", href: "#press" },
            { text: "Investors", href: "#investors" },
            { text: "Contact", href: "#contact" },
          ]}
        />
      </div>
    </div>
  );
};
