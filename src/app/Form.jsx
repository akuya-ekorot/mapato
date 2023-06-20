"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Heading2 from "./Heading2";

const Form = ({ title, description, slug }) => {
  const { register, handleSubmit, reset, formState } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", email: "", phone: "", message: "" });
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    try {
      await fetch("http://mapato.co/mail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        id={slug}
        className="lg:py-20 md:py-16 py-14 lg:px-20 px-10 w-full flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full max-w-7xl items-center gap-10 flex flex-col ">
          <Heading2 text={title} />
          <div className="w-full max-w-xl gap-6 flex flex-col ">
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input
                className="rounded outline-none p-2 text-black"
                placeholder="Jane Doe"
                id="name"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone">Phone</label>
              <input
                className="rounded outline-none p-2 text-black"
                placeholder="0701234567"
                id="phone"
                type="phone"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Email</label>
              <input
                className="rounded outline-none p-2 text-black"
                placeholder="jane@doe.com"
                id="email"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="rounded outline-none p-2 text-black h-40"
                placeholder="Start typing..."
                id="message"
                type="message"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <button type="submit" className="rounded border border-white p-4">
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
