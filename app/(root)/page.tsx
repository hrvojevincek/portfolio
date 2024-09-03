import Bio from "../components/Bio";
import Header from "../components/Header";
import Links from "../components/Links";
import ProjectList from "../components/ProjectList";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background text-foreground">
      <div className="max-w-md px-4 py-8 space-y-6">
        <Header />
        <Bio />
        <ProjectList />
        <Links />
      </div>
    </div>
  );
}
