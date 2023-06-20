import { DM_Serif_Display } from "next/font/google";
const display = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      id="about-us"
      className="h-[40vh] md:h-[50vh] lg:h-[60vh] lg:py-20 md:py-16 py-14 lg:px-20 px-10 w-full flex flex-col items-center justify-center"
    >
      <div className="w-full lg:max-w-7xl max-w-5xl">
        <h1
          className={`lg:text-7xl md:text-5xl md:text-left text-center text-4xl lg:max-w-6xl max-w-xl ${display.className}`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
