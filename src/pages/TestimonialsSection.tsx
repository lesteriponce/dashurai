import { TestimonialCard } from "../components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="box-border caret-transparent max-w-none w-full mx-auto my-[72px] px-4 md:max-w-screen-xl md:my-[120px]">
      <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
        <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
          Trusted by the world’s leading enterprises
        </h1>
      </header>
      <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5">
        <TestimonialCard
          variant="border-[oklch(0.3125_0.0278_328.73)]"
          imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502.jpg"
          imageAlt=""
          title={
            <>
              Deliver extraordinary experiences on{" "}
              <em className="text-3xl italic box-border caret-transparent leading-9 md:text-5xl md:leading-[48px]">
                all the channels
              </em>
            </>
          }
          statistic="42% reduction in average agent handle time"
          caseStudyUrl="/case-study/monday-com/"
          caseStudyText="View Monday.com's Case Study"
          linkVariant="text-[oklch(0.9821_0_0)] bg-[oklch(0.3125_0.0278_328.73)]"
          quote="“With Ada, we know the automated resolution will continue to improve as the AI agent learns and grows. There’s significant flexibility in making changes and improvements. The responses and the accuracy are phenomenal.”"
          authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=144,h=144.png"
          authorImageAlt="Tal Gulst portrait"
          authorImageVariant="bg-[oklab(0.3125_0.0237615_-0.0144302_/_0.4)]"
          authorName="Tal Gulst"
          authorTitle="Bot Manager"
        />
        <TestimonialCard
          variant="border-[oklch(0.3956_0.0812_166.85)]"
          imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502-1.jpg"
          imageAlt=""
          title="A teammate that delivers a notch above"
          statistic="84% automated resolution rate"
          caseStudyUrl="/case-study/tilt/"
          caseStudyText="View Tilt's Case Study"
          linkVariant="text-[oklch(0.9821_0_0)] bg-[oklch(0.3956_0.0812_166.85)]"
          quote='“Ada’s AI agent has had a huge impact on our operational efficiency. Now, we have the same "brain" and logic powering both our email and chat channels.”'
          authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=144,h=144-1.png"
          authorImageAlt="Delan Diaz portrait"
          authorImageVariant="bg-[oklab(0.3956_-0.0790708_0.0184731_/_0.4)]"
          authorName="Delan Diaz"
          authorTitle="CX Generative AI Manager"
        />
        <TestimonialCard
          variant="border-[oklch(0.8747_0.114_327.97)]"
          imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502-2.jpg"
          imageAlt=""
          title={
            <>
              Create more{" "}
              <em className="text-3xl italic box-border caret-transparent leading-9 md:text-5xl md:leading-[48px]">
                meaningful
              </em>{" "}
              relationships
            </>
          }
          statistic="80% CSAT"
          caseStudyUrl="/case-study/loop-earplugs/"
          caseStudyText="View Loop's Case Study"
          linkVariant="bg-[oklch(0.8747_0.114_327.97)]"
          quote="“Customers will actually prefer using automation. Faster, more accurate,  more tailored experiences—this isn’t just about efficiency. It’s about a better way to serve customers.”"
          authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=144,h=144-2.png"
          authorImageAlt="Milan Vanmarcke portrait"
          authorImageVariant="bg-[oklab(0.8747_0.0966458_-0.0604614_/_0.4)]"
          authorName="Milan Vanmarcke"
          authorTitle="Customer Happiness Manager"
        />
        <TestimonialCard
          variant="border-[oklch(0.8346_0.0735_257.42)]"
          imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502-3.jpg"
          imageAlt=""
          title={
            <>
              Grow CX ambition,{" "}
              <em className="text-3xl italic box-border caret-transparent leading-9 md:text-5xl md:leading-[48px]">
                not cost
              </em>
            </>
          }
          statistic="943% ROI in four months"
          caseStudyUrl="/case-study/ipsy/"
          caseStudyText="View IPSY's Case Study"
          linkVariant="bg-[oklch(0.8346_0.0735_257.42)]"
          quote="“Every dollar we save through efficiency gets channeled back into elevating the member experience. That’s how you turn Customer Care from a cost center into a growth driver.”"
          authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=144,h=144-3.png"
          authorImageAlt="TJ Stein portrait"
          authorImageVariant="bg-[oklab(0.8346_-0.0160085_-0.0717355_/_0.4)]"
          authorName="TJ Stein"
          authorTitle="Head of Customer Care"
        />
      </div>
    </section>
  );
};
