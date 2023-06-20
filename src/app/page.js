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
  const res = await fetch("https://mapato.co/api", {
	  cache: "no-store",
  });

  const result = await res.json();
  const { page: data, services } = result;	

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
