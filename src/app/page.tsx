import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Ankur</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> currently building
        <Link className="mx-2 text-sky-600" href={"https://viewus.in"}>Viewus</Link>
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have been building scalable web apps that are performance optimised and stunning design for{" "}
        <Highlight>more than 3 years now</Highlight>
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I am working as a
        <Highlight className="mx-2">Software Developer Intern</Highlight>
        at {" "}
        <Link className="text-sky-600" target="_blank" href="https://0x.day/">Autocrud</Link>
        {" "}from Dec 2024,
      </Paragraph>
      <Paragraph className="max-w-xl mt-2">
        Previously at{" "}
        <Link className="text-sky-600" target="_blank" href="https://www.devtoolsacademy.com/tools">DTA</Link>
        {" | "}
        <Link className="text-sky-600" target="_blank" href="https://www.linkedin.com/company/thinkit-club/">Thinkit.club</Link>
        {" | "}
        <Link className="text-sky-600" target="_blank" href="https://www.linkedin.com/company/getdevkit/">Devkit</Link>
        {" | "}
        <Link className="text-sky-600" target="_blank" href="https://www.linkedin.com/company/0xday/">0x.day</Link>
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
