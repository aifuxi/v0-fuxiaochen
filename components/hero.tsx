import Link from "next/link";
import { ArrowRight, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Fuxiaochen
          </h1>
          <p className="text-lg text-primary md:text-xl">
            Full Stack Developer
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I build accessible, pixel-perfect digital experiences for the web.
            Currently focused on building products that help developers ship
            faster and with more confidence.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            In the past, I&apos;ve had the opportunity to develop software across a
            variety of settings - from startups to large corporations.
            I also write about web development, design, and productivity.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button asChild>
              <Link href="/blog">
                Read the blog
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">About me</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="size-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
