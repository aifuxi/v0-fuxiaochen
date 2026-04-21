import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getFeaturedProjects, getProjectsByYear } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Projects - Fuxiaochen",
  description: "Explore the projects and open source work by Fuxiaochen.",
};

export default function ProjectsPage() {
  const featuredProjects = getFeaturedProjects();
  const projectsByYear = getProjectsByYear();
  const years = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Projects
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              A collection of projects I&apos;ve built over the years. From open source tools to 
              full-stack applications, each project represents a learning journey and a passion for solving problems.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-xl font-semibold text-foreground">Featured</h2>
            <div className="flex flex-col gap-8">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/20"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden md:aspect-auto md:w-72">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {project.year}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                              <Github className="size-4" />
                              <span className="sr-only">GitHub</span>
                            </Link>
                          )}
                          {project.liveUrl && (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                              <ExternalLink className="size-4" />
                              <span className="sr-only">Live Demo</span>
                            </Link>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects by Year */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-xl font-semibold text-foreground">All Projects</h2>
            <div className="flex flex-col gap-12">
              {years.map((year) => (
                <div key={year}>
                  <h3 className="mb-6 text-lg font-medium text-muted-foreground">{year}</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {projectsByYear[year].map((project) => (
                      <article
                        key={project.id}
                        className="group flex flex-col gap-3 rounded-lg border border-border p-4 transition-colors hover:border-foreground/20 hover:bg-muted/50"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-medium text-foreground">
                            {project.title}
                          </h4>
                          <div className="flex shrink-0 items-center gap-1">
                            {project.githubUrl && (
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                              >
                                <Github className="size-4" />
                                <span className="sr-only">GitHub</span>
                              </Link>
                            )}
                            {project.liveUrl && (
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                              >
                                <ArrowUpRight className="size-4" />
                                <span className="sr-only">Live Demo</span>
                              </Link>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col items-center gap-6 rounded-lg border border-border bg-muted/50 p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground">
                Have a Project in Mind?
              </h2>
              <p className="max-w-md text-muted-foreground">
                I&apos;m always interested in hearing about new projects and opportunities. 
                Let&apos;s build something great together.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild>
                  <Link href="mailto:hello@example.com">
                    Start a Conversation
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 size-4" />
                    Follow on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
