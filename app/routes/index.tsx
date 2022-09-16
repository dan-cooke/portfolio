import { CallToAction } from "~/components/call-to-action";
import { Navbar } from "~/components/navbar";

export default function Index() {
  return (
    <>
      <header className="flex place-content-end">
        <Navbar />
      </header>
      <main className="ml-4 mr-4 lg:ml-32 lg:mr-32">
        <CallToAction />
      </main>
    </>
  );
}
