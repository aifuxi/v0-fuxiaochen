import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/blog-data";

type SimilarPostsProps = {
  posts: BlogPost[];
};

export function SimilarPosts({ posts }: SimilarPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-foreground">
          Similar Articles
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:bg-accent/50"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{post.category}</Badge>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="font-medium text-foreground group-hover:text-foreground/90 text-balance line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                <time className="mt-auto text-xs text-muted-foreground">
                  {post.date}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
