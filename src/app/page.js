import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Form from "./Form";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  // this is the nextjs 13's new fetch api
  // fetch data from https://mapato.co/api
  // and set in such a way that it will be incerementally static regenerated

  /*
  const res = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });

  const result = await res.json();
  const { page: data, services } = result;
	*/
  const services = [
    {
      name: "Digital Strategy",
      slug: "digital-strategy",
      image:
        "https://cdn.sanity.io/images/g4cdv36z/production/fb10c93d3099e08998e74fc01018b09ec14061b0-6016x4016.jpg",
      description:
        "In an ever-changing and complex landscape, we offer clarity. Our range in expertise helps our clients identify the best channels to reach the target audience. From social, to email, from paid to organic, we offer what's best for you.",
    },
    {
      image:
        "https://cdn.sanity.io/images/g4cdv36z/production/8bc218634207ff1fe4ecffdfdba08c207cbd03aa-5568x3712.jpg",
      description:
        "Content is King, and we are the King's wisest advisors. We help our clients find their voice and style in the content they produce. We'll help you inspire, educate, engage and entertain your audience.",
      name: "Content Strategy",
      slug: "content-strategy",
    },
    {
      image:
        "https://cdn.sanity.io/images/g4cdv36z/production/6ad6613c6bd4c1bc2d60f419045c908fa9cd52e5-4608x3072.jpg",
      description:
        "The strategies we work on fit in perfectly with our clients' business goals. We'll hold your hand from identifying the target audience, crafting unique value propositions, and developing messaging that resonates with your audience and delivers results.",
      name: "Marketing Strategy",
      slug: "marketing-strategy",
    },
    {
      name: "Copywriting",
      slug: "copywriting",
      image:
        "https://cdn.sanity.io/images/g4cdv36z/production/7392d3d5f60872b74193432ad10fa2d8dd1edaad-5184x3456.jpg",
      description:
        "Craftsmen when it comes to communication, we deliver messaging that not only resonates, but is effective and engaging.",
    },
  ];
  const data = {
    hero: {
      backgroundImage: null,
      title: "Get personalized and creative marketing for your business.",
      subtitle: null,
    },
    sections: [
      {
        title: "Who are we?",
        description:
          "Driven by our values, we demand results, creativity and innovation in all our work. Our solutions are personalised and speak to our commitment to customer focus. We are effective team players and put an emphasis on collaboration, agility and continuous improvement.\n\nWe value all this with the singular vision of providing the most innovative, personal and creative marketing solutions for our clients. It’s our job to help our clients tell their unique story and communicate effectively.",
        slug: "about-us",
      },
      {
        title: "Services we offer",
        description:
          "We are passionate about delivering effective copy, and strategy in marketing, digital and content.",
        slug: "services",
      },
      {
        title: "Contact us",
        description:
          "If there's anything we can do for you, don't hesitate to reach out by filling the form below.",
        slug: "contact-us",
      },
    ],
  };

  return (
    <main className={`bg-[#1b1f22] text-white lg:pb-10 ${inter.className}`}>
      <NavBar />
      <Hero
        title={data?.hero?.title}
        subtitle={data?.hero?.subtitle}
        backgroundImage={data?.hero?.backgroundImage}
      />
      {data?.sections?.map((section) => {
        if (section.slug === "about-us") {
          return (
            <AboutUs
              slug={section.slug}
              title={section.title}
              description={section.description}
            />
          );
        } else if (section.slug === "services") {
          return (
            <Services
              slug={section.slug}
              title={section.title}
              description={section.description}
              services={services}
            />
          );
        } else if (section.slug === "contact-us") {
          return (
            <Form
              slug={section.slug}
              title={section.title}
              description={section.description}
            />
          );
        }
      })}
    </main>
  );
}
