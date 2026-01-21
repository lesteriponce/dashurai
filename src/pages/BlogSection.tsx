import { BlogCard } from "../components/BlogCard";

export const BlogSection = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mt-[72px] mx-auto px-4 md:max-w-screen-xl md:mt-[120px]">
      <section className="bg-[oklch(1_0_0)] box-border caret-transparent pt-[120px] pb-10">
        <header className="box-border caret-transparent max-w-4xl text-center mb-12 mx-auto md:mb-20">
          <h1 className="text-[32px] box-border caret-transparent leading-8 md:text-[64px] md:leading-[64px]">
            Insights to shape the future of AI-powered CX
          </h1>
        </header>
        <div className="bg-[oklch(1_0_0)] box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 px-4 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-10 md:px-0">
          <BlogCard
            href="/blog/ai-customer-service-use-cases-ecommerce/"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/33.webp"
            imageSizes="(min-width: 1536px) 767px, (min-width: 1280px) 639px, (min-width: 1024px) 649px, (min-width: 768px) 734px, (min-width: 640px) 606px, calc(100vw - 32px)"
            imageAlt="AI agent in the field: 5 AI customer service use cases ecommerce brands are automating today"
            category="blog"
            readTime="10 min read"
            title="AI agent in the field: 5 AI customer service use cases ecommerce brands are automating today"
            description="See how ecommerce teams use AI agents to automate high-volume customer service workflows, reduce support load, and deliver faster, more consistent CX."
            variant="gap-x-5 grid col-end-[-1] col-start-1 grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] pb-10 border-b border-solid md:gap-x-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:pb-0 md:border-b-0"
            showReadButton={true}
          />
          <hr className="box-border caret-transparent hidden col-end-[-1] col-start-1 h-0 min-h-0 min-w-0 border-[oklab(0.1489_-0.00100794_-0.00250481_/_0.1)] mx-5 border-b-0 border-x-0 border-solid md:block md:min-h-[auto] md:min-w-[auto] md:mx-10" />
          <BlogCard
            href="/blog/enterprise-ai-customer-service-readiness/"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/30.webp"
            imageSizes="(min-width: 1536px) 767px, (min-width: 1280px) 639px, (min-width: 1024px) 649px, (min-width: 768px) 734px, (min-width: 640px) 606px, calc(100vw - 32px)"
            imageAlt="The readiness gap holding back enterprise AI customer service"
            category="blog"
            readTime="9 min read"
            title="The readiness gap holding back enterprise AI customer service"
            description="The gap between ambition and organizational readiness is where most AI customer service initiatives lose traction. It’s also where the real opportunity lies."
            variant=""
            showReadButton={false}
          />
          <BlogCard
            href="/blog/best-ai-voice-agents-for-insurance/"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/35.webp"
            imageSizes="(min-width: 1536px) 767px, (min-width: 1280px) 639px, (min-width: 1024px) 649px, (min-width: 768px) 734px, (min-width: 640px) 606px, calc(100vw - 32px)"
            imageAlt="Best AI voice agents for insurance: How to choose, deploy, and scale voice CX"
            category="blog"
            readTime="19 min read"
            title="Best AI voice agents for insurance: How to choose, deploy, and scale voice CX"
            description="Here's where AI voice agents for insurance deliver the most value, what to look for in a platform, and how to deploy and scale voice CX with confidence."
            variant=""
          />
          <BlogCard
            href="/blog/ai-use-cases-health-insurance-customer-service/"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/43.webp"
            imageSizes="(min-width: 1536px) 767px, (min-width: 1280px) 639px, (min-width: 1024px) 649px, (min-width: 768px) 734px, (min-width: 640px) 606px, calc(100vw - 32px)"
            imageAlt="AI agent in the field: 5 AI customer service use cases for health insurance"
            category="blog"
            readTime="9 min read"
            title="AI agent in the field: 5 AI customer service use cases for health insurance"
            description="These aren’t pilots. They’re production-ready use cases for AI in health insurance already delivering results. "
            variant=""
          />
        </div>
      </section>
    </div>
  );
};
