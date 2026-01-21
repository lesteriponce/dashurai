import { HeroHeader } from "../components/HeroHeader";

export const Hero = () => {
  return (
    <div className="relative box-border caret-transparent isolate">
      <HeroHeader />
      <img
        src="/hero-bg.jpg"
        alt=""
        sizes="100vw"
        className="absolute aspect-[auto_3200_/_2137] box-border caret-transparent h-full max-w-full object-cover w-full -z-10 left-0 top-0"
      />
    </div>
  );
};
