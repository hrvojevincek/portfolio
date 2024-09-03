import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export default function ProjectItem({
  title,
  description,
  linkText,
  linkHref,
}: ProjectItemProps) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <Link
        href={linkHref}
        className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        prefetch={false}
      >
        {linkText}
      </Link>
    </div>
  );
}
