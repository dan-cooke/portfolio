import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStylesheet from "./styles/tailwind.css";
import fonts from "./styles/fonts.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: tailwindStylesheet,
  },
  {
    rel: "stylesheet",
    href: fonts,
  },
];
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>Daniel Cooke - Full stack developer</title>
        <meta name="title" content="Daniel Cooke - Full stack developer" />
        <meta
          name="description"
          content="Frontend specialist with a computer science background and over 6 years of professional experience."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dancooke.codes" />
        <meta
          property="og:title"
          content="Daniel Cooke - Full stack developer"
        />
        <meta
          property="og:description"
          content="Frontend specialist with a computer science background and over 6 years of professional experience."
        />
        <meta
          property="og:image"
          content="https://dancooke.codes/preview.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dancooke.codes" />
        <meta
          property="twitter:title"
          content="Daniel Cooke - Full stack developer"
        />
        <meta
          property="twitter:description"
          content="Frontend specialist with a computer science background and over 6 years of professional experience."
        />
        <meta
          property="twitter:image"
          content="https://dancooke.codes/preview.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Plus+Jakarta+Sans:wght@400;700&family=Poppins:wght@400;700&family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-gradient-to-b from-purple to-gray h-screen w-screen -z-20"
        style={{ backgroundAttachment: "fixed" }}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
