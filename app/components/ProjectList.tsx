import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "AI Travel Planner",
    description:
      "AI Travel Planner - NextJS, NextAuth, Prisma, Express, Postgrsql, Docker, TailwindCSS",
    linkText2: "Github",
    linkText: "Live",
    linkGithub: "Github",
    linkHref: "https://ai-travel-plan.vercel.app/",
  },
  {
    title: "Event Platform",
    description:
      "Event Platform - full-stack platform for managing events, featuring payment processing through Stripe.",
    linkText: "Live",
    linkGithub: "GitHub",
    linkHref: "https://event-platform-beige-nu.vercel.app/",
  },
  {
    title: "Fistbump - team management tool",
    description:
      "Group project - August 2023: NextJS, Prisma, MongoDB, GraphQL.",
    linkText: "Github",
    linkText2: "Github",
    linkHref: "https://github.com/hrvojevincek/fistbump",
  },
  {
    title: "Coffee Job Board",
    description: "Simple crud job board for coffee shops built with React.",
    linkText: "Live",
    linkText2: "Github",
    linkHref: "https://coffee-career.vercel.app/",
  },
];

export default function ProjectList() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="space-y-2 mt-2">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
