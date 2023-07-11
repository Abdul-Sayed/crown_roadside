"use client";

import { useState } from "react";

const OpportunityPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      resume: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset the form
    setFormData({
      name: "",
      email: "",
      about: "",
      resume: null
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Job Opportunities</h1>
      <p className="mb-8">
        We are excited to offer various job opportunities. If you are interested in joining our team, please fill out
        the application form below.
      </p>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2"
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
            htmlFor="email"
            className="block mb-2"
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
            htmlFor="about"
            className="block mb-2"
          >
            About You
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block mb-2"
          >
            Resume (PDF)
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept="application/pdf"
            onChange={handleFileChange}
            required
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OpportunityPage;
