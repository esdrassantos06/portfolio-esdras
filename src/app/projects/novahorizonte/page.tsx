import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Horizonte | Esdras Portfolio",
  description: "Nova Horizonte is a project focused on civil construction and engineering services, allowing clients to request quotes directly through the website. The project prioritizes an intuitive, responsive, and modern interface, ensuring the best user experience.",
  keywords: 'civil construction, projects, skills, construction, engineering',
  robots: 'index, follow',
  authors: [{ name: 'Esdras' }],
  creator: 'Esdras',
  publisher: 'Esdras',
};

export default function Novahorizonte() {
  return <main className="">Hello World</main>;
}
