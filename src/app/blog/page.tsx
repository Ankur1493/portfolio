import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Ankur Sharma",
  description:
    "Ankur Sharma is a full stack developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Blog() {

  const blogs = [
    {
      title: "How I learned git and github",
      slug: "HILGG",
      link: "https://ankur25.hashnode.dev/how-i-learned-git-and-github",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1670145491130/z-V8lDnI_.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      date: "Dec 4, 2022",
      description: "How I learned git and github, as they are one of the major tools any software engineer should learn"
    },
    {
      title: "Mastering the art of REST API's",
      slug: "MARA",
      link: "https://ankur25.hashnode.dev/mastering-the-art-of-rest-apis-a-complete-overview",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1689430852111/59df6c3c-66dd-47af-a8af-78081f552688.png?auto=compress,format&format=webp",
      date: "Aug 14, 2023",
      description: "In this we will be discussing all about the REST api's in depth. How they work behind the scenes etc"
    }
  ]

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={blogs} />
    </Container>
  );
}
