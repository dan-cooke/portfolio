import {
  BrandGithub,
  BrandStackoverflow,
  BrandLinkedin,
} from "tabler-icons-react";
import { BrandButton } from "./brand-button";
export const Resume = () => {
  return (
    <article className="prose ml-auto mr-auto mt-10 lg:prose-xl">
      <img src="me_2.png" className="" />

      <h1 className="flex place-items-center">
        Daniel Cooke
        <div className="flex gap-2 ml-4 place-items-end">
          <BrandButton className="bg-slate-800 text-white">
            <BrandGithub size={24} />
          </BrandButton>
          <BrandButton className="bg-orange-400 text-white">
            <BrandStackoverflow size={24} />
          </BrandButton>
          <BrandButton className="bg-blue-400 text-white">
            <BrandLinkedin size={24} />
          </BrandButton>
        </div>
      </h1>
      <p>
        Hi there! 👋 I'm Dan - a full stack web developer who specialises in{" "}
        <strong>React</strong>.
      </p>

      <h2>Work</h2>
      <ul>
        <li>
          <strong>eXRt Intelligent Healthcare</strong>
          <p>Test</p>
        </li>
        <li>Point Topic</li>
      </ul>

      <h2>Projects</h2>
      <h2>Technologies</h2>
      <p>Here are some of the technologies I like to work with:</p>
    </article>
  );
};
