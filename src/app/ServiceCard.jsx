import Heading3 from "./Heading3";
import Image from "next/image";

const ServiceCard = ({ imageSrc, title, paragraph, reverse }) => {
  return (
    <div
      className={`flex ${
        reverse ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"
      } lg:gap-8 grow border border-gray-700 rounded overflow-hidden`}
    >
      <Image
        className="grow lg:w-[400px] md:w-[240px] h-[300px] object-cover"
        src={imageSrc}
        height="400"
        width="600"
        alt=""
      />
      <div className="flex flex-col gap-6 p-6 grow justify-center">
        <Heading3 text={title} />
        <p className="w-full max-w-4xl flex lg:text-xl md:text-lg text-md">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
