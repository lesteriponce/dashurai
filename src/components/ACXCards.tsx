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
    imageUrl: "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=undefined.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Unlock the power of exceptional user experiences with our UI/UX design service. We ensure your product stands out and delights users",
    imageUrl: "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=undefined-1.png",
  },
  {
    title: "App Development",
    description:
      "Transform your ideas into exceptional mobile experiences with our cutting-edge app development services.",
    imageUrl: "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=undefined-2.png",
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Revolutionize your online presence with our web development services. Our skilled team creates websites that captivate users.",
    imageUrl: "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=undefined.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Elevate your brand's online visibility and reach new heights with our comprehensive digital marketing services.",
    imageUrl: "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=undefined-1.png",
  },
  {
    title: "SEO",
    description:
      "Boost your online presence and climb search engine rankings with our SEO expertise. Our tailored strategies focus on traffic.",
    imageUrl: "https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=undefined-2.png",
  },
];

export const ACXCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-5 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:grid-rows-[repeat(2,minmax(0px,1fr))]">
      {cardData.map((card, index) => (
        <article
          key={index}
          className="relative aspect-[3_/_4] bg-[oklch(0.331_0.0104_253.98)] box-border caret-transparent flex isolate overflow-hidden rounded-lg transition-all duration-300 cursor-pointer group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="text-[oklch(0.9821_0_0)] box-border caret-transparent flex flex-col h-full justify-end w-full px-6 py-8 relative z-10">
            <div className="items-center box-border caret-transparent flex justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-lg box-border caret-transparent leading-7 md:text-2xl md:leading-8">
                  {card.title}
                </h1>
                {index === 0 && (
                  <img 
                    src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/w=undefined-3.png" 
                    alt="Graphic Design Logo" 
                    className="w-8 h-8 object-contain"
                  />
                )}
              </div>
              <div className="items-center bg-[oklch(0.1489_0.0027_248.08)] box-border caret-transparent flex shrink-0 h-10 justify-center leading-4 w-10 rounded-[3.35544e+07px] transition-transform duration-300 group-hover:rotate-90">
                <span className="text-[oklch(0.9821_0_0)] text-2xl font-light">
                  {hoveredIndex === index ? "−" : "+"}
                </span>
              </div>
            </div>
            <div
              className={`box-border caret-transparent transition-all duration-300 overflow-hidden ${
                hoveredIndex === index
                  ? "max-h-[200px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="box-border caret-transparent">{card.description}</p>
            </div>
          </div>
          <img
            src={card.imageUrl}
            alt=""
            className="[mask-image:linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(0,0,0)_50%,rgba(0,0,0,0)_100%),linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(255,255,255),rgb(255,255,255))] absolute aspect-[auto_1053_/_1578] box-border caret-transparent brightness-100 h-full [mask-clip:border-box,border-box,border-box,border-box,border-box,border-box] [mask-composite:intersect,intersect,intersect,intersect,intersect,intersect] [mask-mode:match-source,match-source,match-source,match-source,match-source,match-source] [mask-origin:border-box,border-box,border-box,border-box,border-box,border-box] [mask-repeat:repeat,repeat,repeat,repeat,repeat,repeat] [mask-size:auto,auto,auto,auto,auto,auto] max-w-full object-cover w-full -z-50 [mask-position:0%,0%,0%,0%,0%,0%] inset-0 transition-transform duration-300 group-hover:scale-105"
          />
        </article>
      ))}
    </div>
  );
};
