import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Faq {
  q: string;
  a: string;
}

/** Visible FAQ block. Pair with `faqPageJsonLd` using the same array. */
const FaqSection = ({ faqs, title = "Frequently asked questions", className = "" }: { faqs: Faq[]; title?: string; className?: string }) => (
  <section className={className} aria-labelledby="faq">
    <h2 id="faq" className="text-2xl font-semibold tracking-tight md:text-3xl">
      {title}
    </h2>
    <Accordion type="single" collapsible className="mt-6">
      {faqs.map((faq) => (
        <AccordionItem key={faq.q} value={faq.q}>
          <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default FaqSection;
