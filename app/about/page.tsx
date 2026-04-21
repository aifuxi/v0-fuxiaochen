import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About - Fuxiaochen",
  description: "Learn more about Fuxiaochen, a full stack developer passionate about building great products.",
};

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Startup",
    period: "2022 - Present",
    description: "Leading the frontend architecture and building scalable web applications using React, Next.js, and TypeScript.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Developed custom web solutions for clients across various industries, focusing on performance and accessibility.",
  },
  {
    role: "Frontend Developer",
    company: "Software Company",
    period: "2018 - 2020",
    description: "Built responsive user interfaces and implemented design systems for enterprise applications.",
  },
];

const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Rust", "Go"],
  frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
};

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:hello@example.com", label: "Email", icon: Mail },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              <div className="relative size-32 shrink-0 overflow-hidden rounded-2xl border border-border md:size-48">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Fuxiaochen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  About Me
                </h1>
                <p className="text-lg text-primary">Full Stack Developer</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <link.icon className="size-5" />
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <h2 className="text-2xl font-semibold text-foreground">Hello!</h2>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a full stack developer with a passion for building products that make a difference. 
                I specialize in creating accessible, performant web applications using modern technologies 
                like React, Next.js, and TypeScript.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in software development began over 6 years ago, and since then I&apos;ve had the 
                privilege of working with startups, agencies, and large corporations. I believe in writing 
                clean, maintainable code and creating user experiences that delight.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me writing technical articles, contributing to open source 
                projects, or exploring the latest developments in web technologies. I&apos;m always excited to 
                learn new things and share knowledge with the community.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="size-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
            </div>
            <div className="flex flex-col gap-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex flex-col gap-2 border-l-2 border-border pl-6 pb-2"
                >
                  <div className="absolute -left-[9px] top-0 size-4 rounded-full border-2 border-primary bg-background" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="size-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="size-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Beyond Code</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
                <h3 className="font-medium text-foreground">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Contributing to projects that make developers&apos; lives easier.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
                <h3 className="font-medium text-foreground">Writing</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing knowledge through technical articles and tutorials.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
                <h3 className="font-medium text-foreground">Photography</h3>
                <p className="text-sm text-muted-foreground">
                  Capturing moments and exploring visual storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col items-center gap-6 rounded-lg border border-border bg-muted/50 p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground">
                Let&apos;s Work Together
              </h2>
              <p className="max-w-md text-muted-foreground">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild>
                  <Link href="mailto:hello@example.com">
                    <Mail className="mr-2 size-4" />
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects">View Projects</Link>
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
