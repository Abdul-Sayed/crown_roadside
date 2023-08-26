"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzgdoyq");
  if (state.succeeded) {
    return (
      <div className="container mx-auto px-4 py-8 h-screen">
        <p>Thanks for your message!</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Have any questions or inquiries? We&apos;d love to hear from you! Click on the whatsApp link, or use the form
        below to send us a message, or reach out to us using the contact information provided.
      </p>
      <div className="my-6">
        <h2 className="text-xl font-semibold mb-2">Click to chat</h2>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/+16476483691"
            as="+16476483691"
            target="_blank"
          >
            <span className="font-bold text-whatsapp-green">+1 (647) 648-3691</span>
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>1615 Dundas St East, Whitby ON L1N2H1</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Hours</h2>
          <p>24 hours 7 days a week</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Contact Number</h2>
        <p>Phone: 416-500-5770</p>
      </div>
      <form
        className="mt-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
        <div className="mb-4">
          <label
            className="block mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-2 border rounded"
            rows={4}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
