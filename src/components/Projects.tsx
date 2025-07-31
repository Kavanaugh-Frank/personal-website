import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS.",
    imageUrl: "/projects/portfolio.png",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Manager App",
    description: "A productivity app to manage your daily tasks efficiently.",
    imageUrl: "/projects/task-manager.png",
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "E-commerce Store",
    description: "An online store built with Next.js and Stripe for payments.",
    imageUrl: "/projects/ecommerce.png",
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS.",
    imageUrl: "/projects/portfolio.png",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Manager App",
    description: "A productivity app to manage your daily tasks efficiently.",
    imageUrl: "/projects/task-manager.png",
    link: "https://github.com/yourusername/task-manager",
  }
];

export default function ProjectCards() {
  // chunk into alternating rows of 3, then 2, etc.
  const rows: Project[][] = [];
  let i = 0;
  let take = 3;
  while (i < projects.length) {
    rows.push(projects.slice(i, i + take));
    i += take;
    take = take === 3 ? 2 : 3;
  }

  return (
    <div className="max-w-[100vw] mx-auto px-4 py-10 space-y-5">
      <h2 className="text-4xl font-bold text-center">My Projects</h2>

      {rows.map((row, rowIndex) => {
        const isTwo = row.length === 2;

        const gridClasses = [
          "grid grid-cols-1 sm:grid-cols-2 gap-y-8",
          isTwo
            ? // two-card row:
              "lg:grid-cols-[1fr_auto_1fr] lg:gap-x-4"
            : // three-card (or one) row:
              "lg:grid-cols-3 lg:gap-8",
        ].join(" ");

        return (
          <div key={rowIndex} className={gridClasses}>
            {row.length === 3 &&
              row.map((p, idx) => (
                <ProjectCard key={`${rowIndex}-${idx}`} project={p} />
              ))}

            {row.length === 2 && (
              <>
                <ProjectCard key={`${rowIndex}-0`} project={row[0]} />
                {/* spacer auto-sized (zero width) */}
                <div className="hidden lg:block" />
                <div className="lg:col-start-3">
                  <ProjectCard key={`${rowIndex}-1`} project={row[1]} />
                </div>
              </>
            )}

            {row.length === 1 && (
              <div className="lg:col-start-2">
                <ProjectCard key={`${rowIndex}-0`} project={row[0]} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-opacity-50">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardContent className="flex flex-col justify-between p-6">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <Button variant="link" className="hover:cursor-pointer">
          View Project
        </Button>
      </CardContent>
    </Card>
  );
}