"use client";

import { useState } from "react";
import { MessageSquare, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getCommentsByPostSlug, type Comment } from "@/lib/comments-data";

interface BlogCommentsProps {
  postSlug: string;
}

export function BlogComments({ postSlug }: BlogCommentsProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const comments = getCommentsByPostSlug(postSlug);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !content.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setName("");
    setEmail("");
    setContent("");

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="border-t border-border pt-12">
      <div className="mb-8 flex items-center gap-3">
        <MessageSquare className="size-5 text-foreground" />
        <h2 className="text-xl font-semibold text-foreground">
          Comments ({comments.length})
        </h2>
      </div>

      {/* Comment Form */}
      <div className="mb-10 rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 font-medium text-foreground">Leave a Comment</h3>

        {submitted ? (
          <div className="rounded-lg bg-primary/10 p-4 text-sm text-primary">
            Thank you for your comment! It will appear after moderation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="comment"
                className="mb-1.5 block text-sm text-muted-foreground"
              >
                Comment
              </label>
              <Textarea
                id="comment"
                placeholder="Share your thoughts..."
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="mr-2 size-4" />
                  Post Comment
                </>
              )}
            </Button>
          </form>
        )}
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </section>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        {comment.avatar ? (
          <img
            src={comment.avatar}
            alt={comment.author}
            className="size-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex size-10 items-center justify-center rounded-full bg-muted">
            <User className="size-5 text-muted-foreground" />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="font-medium text-foreground">{comment.author}</span>
          <span className="text-sm text-muted-foreground">
            {comment.createdAt}
          </span>
        </div>
        <p className="text-muted-foreground">{comment.content}</p>
      </div>
    </div>
  );
}
