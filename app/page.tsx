"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/big.jpg)" }}
      >
        <div className="pt-56 pl-40 md:pl-40 pb-56 md:px-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[40px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-500 underline md:decoration-blue-300">
              {" "}
              Web Development
            </span>
          </h1>
          <h2 className="text-gray-200 hidden md:block">
          My knowledge in Web 3.0 and AI at GIAIC. Explore my projects and get
            to know more about my journey in the tech world. Thank you! Hi
            there! I'm a Frontend web developer on a journey of constant
            learning and growth. Currently expanding.
          </h2>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>
      <div className="absolute bottom-28 right-32   z-[10]">
        <Image
          src="/ai.png"
          alt="AI themed girl"
          height={500}
          width={500}
          className="right-5 bottom-5 rounded-lg"
        />
      </div>
    </main>
  );
}