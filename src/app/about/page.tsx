import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | John Doe",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function About() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <div className="flex my-10">
        <Image
          src="/images/about.webp"
          width={800}
          height={600}
          alt="about"
          className="rounded-md"
        />
      </div>
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m John Doe - a passionate developer, avid writer,
          and a connoisseur of awesome design. Welcome to my corner of the
          digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          Since the early days of my journey, I&apos;ve been captivated by the
          art of crafting exceptional digital experiences. As a developer, I
          thrive on turning lines of code into functional and elegant solutions.
          My goal is to not just create software, but to build digital marvels
          that seamlessly merge form and function.
        </Paragraph>

        <Paragraph className=" mt-4">
          But my journey doesn&apos;t stop at coding. With a heart full of words
          and a mind brimming with ideas, I&apos;ve ventured into the realm of
          writing. From tech articles that unravel complex concepts to creative
          tales that ignite the imagination, I weave words to inform, entertain,
          and inspire.
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my unwavering appreciation for design. I believe
          that aesthetics and usability go hand in hand. My eye for awesome
          design ensures that every project I undertake not only works
          flawlessly under the hood but also looks stunning on the surface.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my insights, experiences, and
          creations with you. Whether you&apos;re a fellow developer seeking
          solutions, a fellow writer in search of inspiration, or simply someone
          who appreciates the finer aspects of design, there&apos;s something
          here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Join me on this journey of bytes and narratives, logic and creativity,
          code and prose. Together, we can explore the boundless possibilities
          of technology and storytelling, all while reveling in the sheer beauty
          of thoughtful design.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </Container>
  );
}
