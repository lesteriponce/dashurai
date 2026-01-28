import { useState } from "react";

type CardData = {
  title: string;
  description: string;
  imageUrl: string;
};

const cardData: CardData[] = [
  {
    title: "Graphic Design",
    description:
      "Elevate your brand with our creative graphic design service. We transform ideas into captivating visuals that leave a lasting impression.",
    imageUrl: "/assets/newLogo/GraphicDesign1.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Unlock the power of exceptional user experiences with our UI/UX design service. We ensure your product stands out and delights users.",
    imageUrl: "/assets/newLogo/UIUX1.png",
  },
  {
    title: "APP DEVELOPMENT",
    description:
      "Transform your ideas into exceptional mobile experiences with our cutting-edge app development services.",
    imageUrl: "/assets/newLogo/AppDevelopment1.png",
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Revolutionize your online presence with our web development services. Our skilled team creates websites that captivate users.",
    imageUrl: "/assets/newLogo/WebDevelopment1.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Elevate your brand's online visibility and reach new heights with our comprehensive digital marketing services.",
    imageUrl: "/assets/newLogo/DigitalMarketing1.png",
  },
  {
    title: "SEO",
    description:
      "Boost your online presence and climb search engine rankings with our SEO expertise. Our tailored strategies focus on traffic.",
    imageUrl: "/assets/newLogo/SEO1.png",
  },
];

export const DashuraiServiceCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:grid-rows-[repeat(2,minmax(0px,1fr))]">
      {cardData.map((card, index) => (
        <article
          key={index}
          className="relative aspect-[3_/_4] bg-gradient-to-br from-slate-800 to-slate-900 box-border caret-transparent flex isolate overflow-hidden rounded-xl transition-all duration-700 ease-out cursor-pointer group hover:scale-[1.08] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] hover:backdrop-blur-md hover:before:absolute hover:before:inset-0 hover:before:bg-gradient-to-t hover:before:from-black/20 hover:before:to-transparent hover:before:z-0"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="text-white box-border caret-transparent flex flex-col h-full justify-end w-full px-6 py-8 relative z-10 transition-all duration-700 group-hover:translate-y-[-4px]">
            <div className="items-center box-border caret-transparent flex justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-semibold box-border caret-transparent leading-7 md:text-2xl md:leading-8 transition-all duration-700 group-hover:text-white group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  {card.title}
                </h1>
                {index === 0 && (
                  <img 
                    src="/assets/newLogo/GraphicDesign1.png" 
                    alt="Graphic Design Logo" 
                    className="w-8 h-8 object-contain"
                  />
                )}
              </div>
              
            </div>
            <div
              className={`box-border caret-transparent transition-all duration-700 overflow-hidden ${
                hoveredIndex === index
                  ? "max-h-[200px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white/80 text-sm leading-relaxed transition-all duration-700 group-hover:text-white/90">{card.description}</p>
            </div>
          </div>
          <img
            src={card.imageUrl}
            alt=""
            className="[mask-image:linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(0,0,0)_50%,rgba(0,0,0,0)_100%),linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(255,255,255),rgb(255,255,255))] absolute aspect-[auto_1053_/_1578] box-border caret-transparent brightness-100 h-full [mask-clip:border-box,border-box,border-box,border-box,border-box,border-box] [mask-composite:intersect,intersect,intersect,intersect,intersect,intersect] [mask-mode:match-source,match-source,match-source,match-source,match-source,match-source] [mask-origin:border-box,border-box,border-box,border-box,border-box,border-box] [mask-repeat:repeat,repeat,repeat,repeat,repeat,repeat] [mask-size:auto,auto,auto,auto,auto,auto] max-w-full object-cover w-full -z-50 [mask-position:0%,0%,0%,0%,0%,0%] inset-0 transition-all duration-700 ease-out group-hover:scale-115 group-hover:brightness-110 group-hover:contrast-110"
          />
        </article>
      ))}
    </div>
  );
};
