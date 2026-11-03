import { Button } from "@/components/ui/Button";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden pt-[calc(var(--header-h)+4rem)] pb-28">
      <div className="wrap">
        <p className="label">Error 404</p>
        <h1 className="display-xl mt-4 max-w-4xl">
          This page <span className="italic-accent">wandered off.</span>
        </h1>
        <p className="lede mt-6">The link may be old, or the page may have moved. Try one of these instead.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/resources" variant="ghost">
            Browse resources
          </Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
