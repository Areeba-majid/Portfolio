import Contact from "./contact/page";
import Skills from "@/app/skills/page";
import Project from "@/app/projects/page";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href="/skills">Learn More</Link>
      <Link href="/project">My Project</Link>
      <Link href="/contact">Contact Me</Link>
      <>
      <Contact/>
      <Project />
      <Skills/>
      </>
    </div>
  );
}