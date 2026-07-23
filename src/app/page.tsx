import { Experience, GetInTouch, Projects, Scales, Skills, Testimonials } from "@/components";
import { Container, Heading, LayoutTextFlip, ResumeButton, SubHeading } from "@/components/ui";
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
              "Full-Stack Engineer",
              "Backend Engineer",
              "Java Developer",
              "Front-end Engineer",
              "AI Integration Engineer"
            ]}
          />
        </div>
        <SubHeading>
          I&apos;m a full-stack developer who builds scalable web apps end-to-end — from
          database schemas and Node.js or Spring Boot APIs to polished React interfaces.
          Currently a Software Engineer at Work Companion.
        </SubHeading>

        <div className="px-4 pt-6">
          <ResumeButton />
        </div>

        <Projects projects={projectsData.slice(0, 3)} />
        <LandingBlogs />
        <Experience />
        <Skills />
        <Testimonials />
        <GetInTouch />
      </Container>

    </div>
  );
};

export default MyPortfolio;
