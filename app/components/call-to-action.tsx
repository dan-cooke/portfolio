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
        className="grid gap-7 w-full xl:w-1/2 pt-16 xl:pt-32 xl:ml-auto xl:mr-0 h-1/4"
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
          className="text-4xl xl:text-6xl text-white hover:text-secondary-text flex align-middle font-['Archivo_Black']"
          href="https://baggers.app"
          target="_blank"
        >
          <svg
            width="52px"
            height="52px"
            className="inline mr-3"
            viewBox="0 0 36 36"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Logo / Dark Small</title>
            <defs>
              <circle
                id="path-1"
                cx="18.2476259"
                cy="17.1921624"
                r="17.0672597"
              ></circle>
              <circle
                id="path-3"
                cx="18.2476259"
                cy="17.9032982"
                r="17.0672597"
              ></circle>
            </defs>
            <g
              id="Logo-/-Dark-Small"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
              </mask>
              <circle
                stroke="currentColor"
                stroke-width="3"
                cx="18.2476259"
                cy="17.1921624"
                r="15.5672597"
              ></circle>
              <ellipse
                id="Oval-Copy-5"
                fill="currentColor"
                mask="url(#mask-2)"
                transform="translate(9.429079, 17.451592) rotate(-19.000000) translate(-9.429079, -17.451592) "
                cx="9.42907895"
                cy="17.4515922"
                rx="2.70379918"
                ry="2.70461624"
              ></ellipse>
              <ellipse
                id="Oval-Copy-7"
                fill="currentColor"
                mask="url(#mask-2)"
                transform="translate(23.087719, 14.164451) rotate(-19.000000) translate(-23.087719, -14.164451) "
                cx="23.0877195"
                cy="14.1644505"
                rx="2.70379918"
                ry="2.70461624"
              ></ellipse>
              <ellipse
                id="Oval-Copy-8"
                fill="currentColor"
                mask="url(#mask-2)"
                transform="translate(36.521707, 3.408094) rotate(-19.000000) translate(-36.521707, -3.408094) "
                cx="36.5217071"
                cy="3.40809367"
                rx="2.70379918"
                ry="2.70461624"
              ></ellipse>
              <ellipse
                id="Oval-Copy-6"
                fill="currentColor"
                mask="url(#mask-2)"
                transform="translate(17.752263, 23.832404) rotate(-19.000000) translate(-17.752263, -23.832404) "
                cx="17.7522629"
                cy="23.8324036"
                rx="2.70379918"
                ry="2.70461624"
              ></ellipse>
              <mask id="mask-4" fill="white">
                <use xlinkHref="#path-3"></use>
              </mask>
              <circle
                stroke="currentColor"
                stroke-width="3"
                cx="18.2476259"
                cy="17.9032982"
                r="15.5672597"
              ></circle>
              <polyline
                id="Path-7"
                stroke="currentColor"
                stroke-width="2"
                mask="url(#mask-4)"
                points="4.65872018 25.9830162 9.77232734 18 17.7522629 23.8324036 23.1258892 13.5319095 31.1427483 8.63829139"
              ></polyline>
            </g>
          </svg>
          BAGGERS
        </a>

        <p className="mt-16 text-primary font-mono">Contact me...</p>
        <div className="text-white flex gap-4">
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
