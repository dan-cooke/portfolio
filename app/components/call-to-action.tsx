import { motion } from "framer-motion";
export const CallToAction = () => {
  return (
    <div className="flex w-full h-screen">
      <motion.img
        src="/idle_large.gif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden lg:block -ml-32 w-300 h-5/6 mt-auto mb-0"
      />
      <motion.section
        className="grid gap-7 w-full lg:w-1/2 pt-48 lg:ml-auto lg:mr-0 h-1/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <sub className="font-mono text-primary text-xl ">
          Hi there! My name is...
        </sub>
        <h1 className="font-header text-white font-bold text-6xl">
          Daniel Cooke
        </h1>
        <h2 className="font-header text-secondary-text text-5xl">
          I’m a professional web developer and hobbyist programmer.
        </h2>
        <p className="text-secondary-text text-xl">
          I've been building rich user experiences since 2018 with a keen focus
          on code quality. In my spare time I'm building{" "}
          <a href="https://baggers.app" className="text-primary font-bold">
            baggers.app
          </a>
        </p>
      </motion.section>
    </div>
  );
};
