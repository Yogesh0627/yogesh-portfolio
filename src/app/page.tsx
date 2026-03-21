import { Experience, GetInTouch, Projects, Scales, Testimonials } from "@/components";
import { Container, Heading, LayoutTextFlip, SubHeading } from "@/components/ui";
import projectsData from "@/data/projectsData.json"
import LandingBlogs from "@/components/LandingBlogs";


const MyPortfolio = () => {

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 pt-10 md:pt-20 md:pb-10">
        <Scales />
        <div className="flex flex-col sm:flex-row sm:items-center">
          <Heading>Yogesh Chauhan</Heading>
          <LayoutTextFlip
            words={[
              "Software Engineer",
              "Front-end Engineer",
              "Design Engineer",
              "Vibe Coding Engineer"
            ]}
          />
        </div>
        <SubHeading>
          I&apos;m a software engineer with a passion for building scalable and efficient
          systems. I&apos;m currently working as a software engineer at WorkCompanion.
        </SubHeading>

        <Projects projects={projectsData.slice(0, 3)} />
        <LandingBlogs />
        <Experience />
        <Testimonials />
        <GetInTouch />
      </Container>

    </div>
  );
};

export default MyPortfolio;
