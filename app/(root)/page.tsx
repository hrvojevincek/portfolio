import Bio from "../components/Bio";
import Header from "../components/Header";
import Links from "../components/Links";
import ProjectList from "../components/ProjectList";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background text-foreground">
      <div className="max-w-5xl w-full px-4 py-8 flex gap-10 items-start">
        <div className="flex flex-col gap-6 w-[40%]">
          <Header />
          <Bio />
        </div>
        <div className="flex flex-col gap-6 w-[70%]">
          <ProjectList />
        </div>
      </div>
      <Links />
    </div>
  );
}
