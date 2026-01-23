import { TestimonialCard } from "../components/TestimonialCard";

export const MarketsPage = () => {
  return (
    <div className="text-[oklch(0.9821_0_0)] bg-[oklch(0.1489_0.0027_248.08)] min-h-screen">
      <section className="box-border caret-transparent max-w-none w-full mx-auto py-[72px] px-4 md:max-w-screen-xl md:py-[120px]">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[60px]">
            The Markets
          </h1>
        </header>
        <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5">
          <TestimonialCard
            variant="border-[oklch(0.3125_0.0278_328.73)]"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502.jpg"
            imageAlt=""
            title={
              <>
                Hospitality & Entertainment
              </>
            }
            statistic="Our AI and robotics solutions on Hospitality are streamlining operations and enhancing guest experiences. From automated check-in systems to robot concierges for hotels and resorts deliver services. Also, providing automated adjusting equipment for Entertainment."
            caseStudyUrl="/case-study/monday-com/"
            caseStudyText="View Monday.com's Case Study"
            linkVariant="text-[oklch(0.9821_0_0)] bg-[oklch(0.3125_0.0278_328.73)]"
            quote="Dashurai AI has transformed our hospitality operations with cutting-edge automation."
            authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/author1.jpg"
            authorImageAlt="Hospitality Manager"
            authorImageVariant="circle"
            authorName="Sarah Johnson"
            authorTitle="Hospitality Director"
          />
          <TestimonialCard
            variant="border-[oklch(0.3956_0.0812_166.85)]"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502-1.jpg"
            imageAlt=""
            title="Healthcare"
            statistic="We are revolutionizing patient care, assisting in diagnosis, surgery, and rehabilitation, while also streamlining administrative tasks, leading to improved treatment outcomes and operational efficiency within medical facilities."
            caseStudyUrl="/case-study/tilt/"
            caseStudyText="View Tilt's Case Study"
            linkVariant="text-[oklch(0.9821_0_0)] bg-[oklch(0.3956_0.0812_166.85)]"
            quote="The AI solutions have significantly improved our patient care efficiency."
            authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/author2.jpg"
            authorImageAlt="Healthcare Professional"
            authorImageVariant="circle"
            authorName="Dr. Michael Chen"
            authorTitle="Medical Director"
            
          />
          <TestimonialCard
            variant="border-[oklch(0.8747_0.114_327.97)]"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502-2.jpg"
            imageAlt=""
            title="Manufacturing"
            statistic="Dashur AI is transforming the Manufacturing industry, enhancing efficiency and precision through automated assembly lines, predictive maintenance algorithms, and robotic arms to cope with the evolving market demands."
            caseStudyUrl="/case-study/loop-earplugs/"
            caseStudyText="View Loop's Case Study"
            linkVariant="bg-[oklch(0.8747_0.114_327.97)]"
            quote="Automated systems have revolutionized our manufacturing processes."
            authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/author3.jpg"
            authorImageAlt="Manufacturing Engineer"
            authorImageVariant="circle"
            authorName="Robert Williams"
            authorTitle="Operations Manager"
           
          />
          <TestimonialCard
            variant="border-[oklch(0.8346_0.0735_257.42)]"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502-3.jpg"
            imageAlt=""
            title="Defense"
            statistic="In Defense, we are reshaping military capabilities, enabling autonomous drones, unmanned vehicles, and intelligent surveillance systems to enhance situational awareness, strategic planning, and mission execution, while also minimizing risks to human personnel on the battlefield."
            caseStudyUrl="/case-study/ipsy/"
            caseStudyText="View IPSY's Case Study"
            linkVariant="bg-[oklch(0.8346_0.0735_257.42)]"
            quote="The autonomous systems have enhanced our defense capabilities significantly."
            authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/author4.jpg"
            authorImageAlt="Defense Specialist"
            authorImageVariant="circle"
            authorName="James Mitchell"
            authorTitle="Defense Strategist"
          
          />
          <TestimonialCard
            variant="border-[oklch(0.4567_0.0892_145.32)]"
            imageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=502,h=502-4.jpg"
            imageAlt=""
            title="Aerospace"
            statistic="We help designing and producing advanced aircraft and spacecraft, enabling precise engineering, autonomous navigation, and predictive maintenance, ultimately ensuring safer and more efficient air and space travel. Also, managing aero plane show to attract people in Aerospace."
            caseStudyUrl="/case-study/flow/"
            caseStudyText="View Flow's Case Study"
            linkVariant="bg-[oklch(0.4567_0.0892_145.32)]"
            quote="AI-powered navigation has transformed our aerospace operations."
            authorImageUrl="https://c.animaapp.com/mkh4hbwu1IS6us/assets/author5.jpg"
            authorImageAlt="Aerospace Engineer"
            authorImageVariant="circle"
            authorName="Lisa Anderson"
            authorTitle="Aerospace Director"
          
          />
        </div>
      </section>
    </div>
  );
};
