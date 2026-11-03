import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/data/content";

export function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="section bg-paper-2" aria-labelledby="faq-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <h2 id="faq-title" className="display-lg" data-split>
            Questions, answered.
          </h2>
          <p className="lede mt-5" data-reveal>
            Something missing? Ask the organizers directly.
          </p>
          <div className="mt-8" data-reveal data-delay="0.1">
            <Button href="/contact" variant="ink">
              Message us
            </Button>
          </div>
        </div>
        <div data-reveal>
          <Accordion defaultOpen={0} items={FAQ.map((f) => ({ title: f.q, content: <p className="body-copy">{f.a}</p> }))} />
        </div>
      </div>
    </section>
  );
}
