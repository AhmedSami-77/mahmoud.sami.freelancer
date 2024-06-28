"use client";
import React from "react";
import { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      method="POST"
      action="https://formsubmit.co/ahmed222333sami@gmail.com"
    >
      <h2 className="text-2xl font-bold  text-white">Contact Me</h2>
      <div className="mb-2">
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          alt="name"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-2">
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          alt="email"
          placeholder="Your Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-2">
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          alt="subject"
          placeholder="Subject"
          name="subject"
          className="w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-2">
        <input
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Your message"
          alt="message"
          name="message"
          className="w-full px-3 h-24 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button
        onSubmit={() => {
          handleSubmit;
        }}
        type="submit"
        className="px-6  py-2 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
      >
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
