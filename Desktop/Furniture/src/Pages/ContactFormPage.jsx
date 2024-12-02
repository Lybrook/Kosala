import React from "react";

const ContactForm = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/fb/eb/3f/fbeb3f93bd1b260d4054107ea8de2b22.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Form Content */}
      <div className="relative z-10 max-w-4xl w-full p-10 bg-gray-900 bg-opacity-90 rounded-lg shadow-2xl">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-300 mb-8">
          We’d love to hear from you! Fill out the form below or email us at{" "}
          <a
            href="mailto:osalajulius@gmail.com"
            className="text-yellow-500 hover:underline"
          >
            osalajulius@gmail.com
          </a>
          .
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-gray-300">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-2 p-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-gray-300">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-2 p-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              required
            />
          </div>

          {/* Email Address */}
          <div className="col-span-2 flex flex-col">
            <label htmlFor="email" className="text-gray-300">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              required
            />
          </div>

          {/* Subject */}
          <div className="col-span-2 flex flex-col">
            <label htmlFor="subject" className="text-gray-300">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              className="mt-2 p-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              required
            />
          </div>

          {/* Message */}
          <div className="col-span-2 flex flex-col">
            <label htmlFor="message" className="text-gray-300">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              className="mt-2 p-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-yellow-500 text-black font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 transform hover:scale-105 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
