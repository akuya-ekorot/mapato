"use client"

import { useForm } from "react-hook-form"
import Image from "next/image";
import { Inter, DM_Serif_Display } from 'next/font/google';
import { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })
const display = DM_Serif_Display({ weight: "400", subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`bg-[#1b1f22] text-white lg:pb-10 ${inter.className}`}>
      <NavBar />
      <Hero />
      <AboutUs />
      <Services />
      <Form />
    </main>
  )
}

const Form = () => {
  const { register, handleSubmit, reset, formState } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({name: "", email: "", phone: "", message: ""})
    }
  }, [formState.isSubmitSuccessful, reset])

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
       })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form id="contact" className="lg:py-20 md:py-16 py-14 lg:px-20 px-10 w-full flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)} >
        <div className="w-full max-w-7xl items-center gap-10 flex flex-col ">
          <Heading2 text="Contact Us" />
          <div className="w-full max-w-xl gap-6 flex flex-col ">
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input className="rounded outline-none p-2 text-black" placeholder="Jane Doe" id="name" type="text" {...register("name", { required: true })} />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone">Phone</label>
              <input className="rounded outline-none p-2 text-black" placeholder="0701234567" id="phone" type="phone" {...register("phone", { required: true })} />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Email</label>
              <input className="rounded outline-none p-2 text-black" placeholder="jane@doe.com" id="email" type="email" {...register("email", { required: true })} />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="message">Message</label>
              <textarea className="rounded outline-none p-2 text-black h-40" placeholder="Start typing..." id="message" type="message" {...register("message", { required: true })}></textarea>
            </div>
            <button type="submit" className="rounded border border-white p-4">Send</button>
          </div>
        </div>
      </form>
    </>
  )
}

const Services = () => {
  return (
    <section id="about-us" className="lg:py-20 md:py-16 py-14 lg:px-20 px-10 w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl gap-10 flex flex-col ">
        <Heading2 text="Services we offer" />
        <p className="w-full max-w-4xl flex lg:text-xl md:text-lg text-md">
          We are passionate about delivering effective copy, and strategy in marketing, digital and content.
        </p>
        <div className="flex flex-col gap-6 w-full">
          <ServiceCard 
            {...{
                  imageSrc: "/copywriting-photo.jpg",
                  title: "Copywriting",
                  paragraph: "Craftsmen when it comes to communication, we deliver messaging that not only resonates, but is effective and engaging."
                }}
          />
          <ServiceCard 
              imageSrc="/marketing-strategy-photo.jpg"
              title="Marketing Strategy"
              paragraph="The strategies we work on fit in perfectly with our clients' business goals. We'll hold your hand from identifying the target audience, crafting unique value propositions, and developing messaging that resonates with your audience and delivers results."
              reverse
          />
          <ServiceCard 
            {...{
                  imageSrc: "/digital-strategy-photo.jpg",
                  title: "Digital Strategy",
                  paragraph: "In an ever-changing and complex landscape, we offer clarity. Our range in expertise helps our clients identify the best channels to reach the target audience. From social, to email, from paid to organic, we offer what's best for you."
                }}
          />
          <ServiceCard 
              imageSrc="/content-strategy-photo.jpg"
              title="Content Strategy"
              paragraph="Content is King, and we are the King's wisest advisors. We help our clients find their voice and style in the content they produce. We'll help you inspire, educate, engage and entertain your audience."
              reverse
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ imageSrc, title, paragraph, reverse }) => {
  return (
    <div className={`flex ${reverse ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"} lg:gap-8 grow border border-gray-700 rounded overflow-hidden`}>
      <Image className="grow lg:w-[400px] md:w-[240px] h-[300px] object-cover" src={imageSrc} height="400" width="600" alt="" />
      <div className="flex flex-col gap-6 p-6 grow justify-center">
        <Heading3 text={title}/>
        <p className="w-full max-w-4xl flex lg:text-xl md:text-lg text-md">
          {paragraph}
        </p>
      </div>
    </div>
    
  )
}

const Heading3 = ({ text }) => (
    <h3 className={`text-4xl ${display.className}`}>{text}</h3>
)

const Heading2 = ({ text }) => (
    <h2 className={`lg:text-6xl md:text-4xl text-3xl ${display.className}`}>{text}</h2>
)

const AboutUs = () => {
  return (
    <section id="about-us" className="lg:py-20 md:py-16 py-14 lg:px-20 px-10 w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl gap-10 flex flex-col">
        <Heading2 text="Who are we?" />
        <p className="w-full max-w-4xl flex lg:text-xl md:text-lg text-md">
          Driven by our values, we demand results, creativity and innovation in all our work. Our solutions are personalised and speak to our commitment to customer focus. We are effective team players and put an emphasis on collaboration, agility and continuous improvement.
          <br />
          <br />
          We value all this with the singular vision of providing the most innovative, personal and creative marketing solutions for our clients. It’s our job to help our clients tell their unique story and communicate effectively.
        </p>
      </div>
    </section>
  );
}

const Hero = () => {
  return (
    <section id="about-us" className="lg:py-20 md:py-16 py-14 lg:px-20 px-10 w-full flex flex-col items-center justify-center">
      <div className="w-full lg:max-w-7xl max-w-5xl">
        <h1 className={`lg:text-7xl md:text-5xl md:text-left text-center text-4xl lg:max-w-6xl max-w-xl ${display.className}`}>Get personalized and creative marketing for your business.</h1>
      </div>
    </section>
  );
}

const NavBar = () => {
  return (
    <nav className="h-[90px] px-10 bg-[#1b1f22] border-b sticky top-0 border-gray-700 flex justify-center">
      <div className="w-full max-w-7xl h-full flex lg:justify-between justify-center">
        <Logo />
        <div className="hidden w-full max-w-3xl lg:flex gap-4 justify-end">
          <Menus />
          <Button />
        </div>
      </div>
    </nav>
  );
}

const Button = () => {
  return (
    <div className="flex items-center">
      <a href="#contact" className="border border-white px-4 py-2">
        <span className="text-md">TALK TO US</span>
      </a>
    </div>
  );
}

const Menus = () => {
  return (
    <div className="flex items-center">
      <a href="#" className="h-full flex items-center px-4">Home</a>
      <a href="#about-us" className="h-full flex items-center px-4">About Us</a>
      <a href="#services" className="h-full flex items-center px-4">Services</a>
      <a href="#contact" className="h-full flex items-center px-4">Contact</a>
    </div>
  );
}

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src={`/mapato-logo-long.png`} width={`180`} height={`60`} />
    </div>
  );
}
