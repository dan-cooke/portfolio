export const Navbar = () => {
  return (
    <nav className="py-4 fixed flex w-full lg:mr-8 lg:mr-32 md:place-content-end place-content-center">
      <a
        href="/Dans Latest CV.pdf"
        target="_blank"
        className="font-mono text-white border border-white rounded-sm p-2 px-4 hover:text-primary hover:border-primary"
      >
        View my latest CV
      </a>
    </nav>
  );
};
