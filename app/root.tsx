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

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: tailwindStylesheet,
  },
];
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Daniel Cooke - Web Dev",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Plus+Jakarta+Sans:wght@400;700&family=Poppins:wght@400;700&family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-purple to-gray">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
