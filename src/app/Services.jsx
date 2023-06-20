import ServiceCard from "./ServiceCard";
import Heading2 from "./Heading2";

const Services = ({ title, description, slug, services }) => {
  return (
    <section
      id={slug}
      className="lg:py-20 md:py-16 py-14 lg:px-20 px-10 w-full flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-7xl gap-10 flex flex-col ">
        <Heading2 text={title} />
        <p className="w-full max-w-4xl flex lg:text-xl md:text-lg text-md">
          {description}
        </p>
        <div className="flex flex-col gap-6 w-full">
          {services?.map((service, idx) => (
            <ServiceCard
              imageSrc={service.image}
              title={service.name}
              paragraph={service.description}
              reverse={idx % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
