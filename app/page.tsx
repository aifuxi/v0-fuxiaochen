import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedPosts } from "@/components/featured-posts";
import { RecentPosts } from "@/components/recent-posts";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <FeaturedPosts />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
}
