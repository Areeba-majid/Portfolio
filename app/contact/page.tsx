import React from "react";

const Contact = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 px-40 pt-52 opacity-70 z-10 transition-opacity duration-300">
      <form>
        <h2 className="text-4xl font-extrabold mb-5 text-white">Contact Me</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-2 border-sky-400 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-2 border-sky-400 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Your message"
            name="message"
            className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-2 border-sky-400 rounded shadow"
          />
        </div>
        <button className="px-6 mb-10 py-3 text-sm rounded-lg font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-600 hover:bg-blue-400">
          Send a message
        </button>
      </form>
    </div>
  );
};

export default Contact;
