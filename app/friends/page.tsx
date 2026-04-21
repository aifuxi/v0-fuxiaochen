import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { getAllFriends, type Friend } from "@/lib/friends-data";

export const metadata: Metadata = {
  title: "Friends | Fuxiaochen",
  description: "Links to my friends and people whose work I admire.",
};

function getCategoryLabel(category: Friend["category"]) {
  const labels = {
    developer: "Developer",
    designer: "Designer",
    blogger: "Blogger",
    creator: "Creator",
  };
  return labels[category];
}

export default function FriendsPage() {
  const friends = getAllFriends();

  const groupedFriends = friends.reduce(
    (acc, friend) => {
      if (!acc[friend.category]) {
        acc[friend.category] = [];
      }
      acc[friend.category].push(friend);
      return acc;
    },
    {} as Record<Friend["category"], Friend[]>
  );

  const categoryOrder: Friend["category"][] = [
    "developer",
    "designer",
    "blogger",
    "creator",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            Friends
          </h1>
          <p className="text-lg text-muted-foreground">
            Links to my friends and people whose work I admire. Check out their
            amazing blogs and projects.
          </p>
        </header>

        {/* Friends Grid by Category */}
        <div className="space-y-12">
          {categoryOrder.map((category) => {
            const categoryFriends = groupedFriends[category];
            if (!categoryFriends || categoryFriends.length === 0) return null;

            return (
              <section key={category}>
                <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {getCategoryLabel(category)}s
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {categoryFriends.map((friend) => (
                    <Link
                      key={friend.id}
                      href={friend.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                    >
                      <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="size-12 flex-shrink-0 rounded-full object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="font-medium text-foreground group-hover:text-primary">
                            {friend.name}
                          </span>
                          <ExternalLink className="size-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {friend.description}
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground/70">
                          {friend.url.replace(/^https?:\/\//, "")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Want to exchange links?
          </h2>
          <p className="mb-4 text-muted-foreground">
            If you have a blog or portfolio and would like to be featured here,
            feel free to reach out!
          </p>
          <Badge variant="secondary" className="cursor-pointer hover:bg-accent">
            Contact me
          </Badge>
        </div>
      </main>

      <Footer />
    </div>
  );
}
