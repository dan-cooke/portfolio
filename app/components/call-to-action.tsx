import { motion } from "framer-motion";
import {
  BrandGithub,
  BrandLinkedin,
  BrandStackoverflow,
  Mail,
} from "tabler-icons-react";
export const CallToAction = () => {
  return (
    <div className="flex w-full h-screen">
      <motion.img
        src="/idle_large.gif"
        className="fixed bottom-0 xl:static -z-10 opacity-10 xl:block -ml-32  mt-auto mb-0"
      />
      <motion.section
        className="grid gap-7 w-full xl:w-1/2 pt-16 xl:pt-32 xl:ml-auto xl:mr-0 h-1/4 text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <sub className="font-mono text-primary text-lg xl:text-xl ">
          Hi there! My name is...
        </sub>
        <h1 className="font-header text-white font-bold text-4xl xl:text-6xl">
          Daniel Cooke
        </h1>
        <h2 className="font-header text-secondary-text text-3xl xl:text-5xl">
          I’m a professional web developer and hobbyist programmer.
        </h2>
        <p className="text-secondary-text text-lg xl:text-xl">
          I've been building rich user experiences since 2018 with a keen focus
          on code quality.
        </p>
        <h2 className="text-primary font-mono mt-8">
          Check out my latest site...
        </h2>

        <a
          className="text-4xl xl:text-6xl text-white hover:text-secondary-text flex align-middle font-['Gilroy'] text-center lg:text-left place-content-center lg:place-content-start"
          href="https://joininvesty.com"
          target="_blank"
        >
          investy
        </a>

        <p className="mt-16 text-primary font-mono">Contact me...</p>
        <div className="text-white flex gap-4 place-content-center lg:place-content-start">
          <a href="mailto:danielcooke1996@gmail.com" target="_blank">
            <Mail
              size={32}
              className="hover:text-secondary-text hover:cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/daniel-cooke-a6a8b7111/">
            <BrandLinkedin
              size={32}
              className="hover:text-secondary-text hover:cursor-pointer"
            />
          </a>
          <a
            href="https://stackoverflow.com/users/5645292/daniel-cooke"
            target="_blank"
          >
            <BrandStackoverflow
              size={32}
              className="hover:text-secondary-text hover:cursor-pointer"
            />
          </a>
          <a href="https://github.com/dan-cooke" target="_blank">
            <BrandGithub
              size={32}
              className="hover:text-secondary-text hover:cursor-pointer"
            />
          </a>
        </div>
      </motion.section>
    </div>
  );
};
