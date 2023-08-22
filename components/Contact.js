"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Have any questions or inquiries? We&apos;d love to hear from you! Use the form below to send us a message, or
          reach out to us using the contact information provided.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p>1615 Dundas St East, Whitby ON L1N2H1</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Hours</h2>
            <p>Monday-Friday: 9am-5pm</p>
            <p>Saturday-Sunday: Closed</p>
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
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
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
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
