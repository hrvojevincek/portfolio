import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Slack Clone",
    description: "Tech: NextJS, ShadCN, Jotai, NodeJS, Convex NoSql DB",
    linkText2: "Github",
    linkText: "Live",
    linkGithub: "https://github.com/hrvojevincek/slack-clone",
    linkHref: "https://slack-clone-iota-three.vercel.app/",
  },
  {
    title: "AI Travel Planner",
    description:
      "Tech- NextJS, NextAuth, Prisma, Express, Postgrsql, Docker, TailwindCSS",
    linkText2: "Github",
    linkText: "Live",
    linkGithub: "https://github.com/hrvojevincek/AI-TravelPlan",
    linkHref: "https://ai-travel-plan.vercel.app/",
  },
  {
    title: "Chat App w/ tRPC, Websocket, React, TailwindCSS, ",
    description:
      "Simple chat app with tRPC, Websocket, React, TailwindCSS, NextJS, NodeJS, Express, Postgres.",
    linkText: "Live",
    linkText2: "Github",
    linkGithub: "https://github.com/hrvojevincek/chat-app-trpc-ws",
    linkHref: "https://chat-app-wheat.vercel.app/",
    disabled: true,
  },
  {
    title: "Event Platform",
    description:
      "Tech - full-stack platform for managing events, featuring payment processing through Stripe.",
    linkText: "Live",
    linkText2: "Github",
    linkGithub: "https://github.com/hrvojevincek/event-platform",
    linkHref: "https://event-platform-beige-nu.vercel.app/",
  },
  {
    title: "Fistbump - team management tool",
    description: "NextJS, Prisma, MongoDB, GraphQL.",
    linkText: "Live",
    linkText2: "Github",
    linkHref: "https://github.com/hrvojevincek/fistbump",
    linkGithub: "https://github.com/hrvojevincek/fistbump",
    disabled: true,
  },
  {
    title: "Coffee Job Board",
    description: "React, React Router, NextAuth, Node, Prisma, Postgres.",
    linkText: "Live",
    linkText2: "Github",
    linkHref: "https://coffee-career-accelerator-client.vercel.app/jobs",
    linkGithub: "https://github.com/hrvojevincek/coffee-job-board",
  },
  {
    title: "Movie Database App",
    description:
      "Javascript,React, Webpack, SCSS, React Router, React Hooks, TMDB API",
    linkText2: "Github",
    linkText: "Live",
    linkGithub: "https://github.com/hrvojevincek/movie-app",
    linkHref: "https://movie-database-app-wheat.vercel.app/",
    disabled: true,
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
