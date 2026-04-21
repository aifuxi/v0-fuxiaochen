import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export function RecentPosts() {
  // Get the 5 most recent posts (excluding featured)
  const recentPosts = blogPosts
    .filter((post) => !post.featured)
    .slice(0, 5);

  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Recent Posts
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All posts
            <ArrowRight className="size-3" />
          </Link>
        </div>

        <div className="flex flex-col">
          {recentPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group flex items-center justify-between py-4 transition-colors hover:text-foreground ${
                index !== recentPosts.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <span className="font-medium text-foreground group-hover:text-foreground/80">
                {post.title}
              </span>
              <time className="shrink-0 text-sm text-muted-foreground">
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
