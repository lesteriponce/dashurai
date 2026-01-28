import { TestimonialCard } from "../components/TestimonialCard";

export const MarketsPage = () => {
  return (
    <div className="text-[oklch(0.9821_0_0)] min-h-screen">
      <section className="box-border caret-transparent max-w-none w-full mx-auto py-[72px] px-4 md:max-w-screen-xl md:py-[120px]">
        <header className="box-border caret-transparent text-center mb-12 md:mb-[72px]">
          <h1 className="text-3xl box-border caret-transparent leading-9 max-w-4xl mx-auto md:text-6xl md:leading-[120px] font-extrabold">
            The Markets
          </h1>
        </header>
        <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5">
          <TestimonialCard
            variant="border-[oklch(0.55_0.08_235)]"
            imageUrl="/assets/newLogo/HosEnte.png"
            imageAlt=""
            title={
              <>
                Hospitality & Entertainment
              </>
            }
            statistic="Our AI and robotics solutions on Hospitality are streamlining operations and enhancing guest experiences. From automated check-in systems to robot concierges for hotels and resorts deliver services. Also, providing automated adjusting equipment for Entertainment."
            caseStudyUrl="/case-study/monday-com/"
            caseStudyText="View Monday.com's Case Study"
            linkVariant="text-[oklch(0.9821_0_0)] bg-[oklch(0.55_0.08_235)]"
            quote="Dashurai AI has transformed our hospitality operations with cutting-edge automation."
            authorImageAlt="Hospitality Manager"
            authorImageVariant="circle"
            authorName="Sarah Johnson"
            authorTitle="Hospitality Director"
          />
          <TestimonialCard
            variant="border-[oklch(0.58_0.07_240)]"
            imageUrl="/assets/newLogo/Healthcare.png"
            imageAlt=""
            title="Healthcare"
            statistic="We are revolutionizing patient care, assisting in diagnosis, surgery, and rehabilitation, while also streamlining administrative tasks, leading to improved treatment outcomes and operational efficiency within medical facilities."
            caseStudyUrl="/case-study/tilt/"
            caseStudyText="View Tilt's Case Study"
            linkVariant="text-[oklch(0.9821_0_0)] bg-[oklch(0.58_0.07_240)]"
            quote="The AI solutions have significantly improved our patient care efficiency."
            authorImageAlt="Healthcare Professional"
            authorImageVariant="circle"
            authorName="Dr. Michael Chen"
            authorTitle="Medical Director"
            
          />
          <TestimonialCard
            variant="border-[oklch(0.60_0.06_245)]"
            imageUrl="/assets/newLogo/Manufacturing.png"
            imageAlt=""
            title="Manufacturing"
            statistic="Dashur AI is transforming the Manufacturing industry, enhancing efficiency and precision through automated assembly lines, predictive maintenance algorithms, and robotic arms to cope with the evolving market demands."
            caseStudyUrl="/case-study/loop-earplugs/"
            caseStudyText="View Loop's Case Study"
            linkVariant="bg-[oklch(0.60_0.06_245)]"
            quote="Automated systems have revolutionized our manufacturing processes."
            authorImageAlt="Manufacturing Engineer"
            authorImageVariant="circle"
            authorName="Robert Williams"
            authorTitle="Operations Manager"
           
          />
          <TestimonialCard
            variant="border-[oklch(0.62_0.05_250)]"
            imageUrl="/assets/newLogo/Defense.png"
            imageAlt=""
            title="Defense"
            statistic="In Defense, we are reshaping military capabilities, enabling autonomous drones, unmanned vehicles, and intelligent surveillance systems to enhance situational awareness, strategic planning, and mission execution, while also minimizing risks to human personnel on the battlefield."
            caseStudyUrl="/case-study/ipsy/"
            caseStudyText="View IPSY's Case Study"
            linkVariant="bg-[oklch(0.62_0.05_250)]"
            quote="The autonomous systems have enhanced our defense capabilities significantly."
            authorImageAlt="Defense Specialist"
            authorImageVariant="circle"
            authorName="James Mitchell"
            authorTitle="Defense Strategist"
          
          />
          <TestimonialCard
            variant="border-[oklch(0.65_0.04_255)]"
            imageUrl="/assets/newLogo/Aerospace.png"
            imageAlt=""
            title="Aerospace"
            statistic="We help designing and producing advanced aircraft and spacecraft, enabling precise engineering, autonomous navigation, and predictive maintenance, ultimately ensuring safer and more efficient air and space travel. Also, managing aero plane show to attract people in Aerospace."
            caseStudyUrl="/case-study/flow/"
            caseStudyText="View Flow's Case Study"
            linkVariant="bg-[oklch(0.65_0.04_255)]"
            quote="AI-powered navigation has transformed our aerospace operations."
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
