import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { IncomeCalculator } from "@/components/sections/IncomeCalculator";
import { Process } from "@/components/sections/Process";
import { AboutUs } from "@/components/sections/AboutUs";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudyTeaser } from "@/components/sections/CaseStudyTeaser";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { ApplicationCTA } from "@/components/sections/ApplicationCTA";
import { InlineCTA } from "@/components/ui/InlineCTA";
import { faqJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/faq";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqJsonLd(faqItems.map((f) => ({ q: f.q, a: f.a }))),
          ),
        }}
      />
      <Hero />
      <Problems />
      <Stats />
      <Services />
      <InlineCTA />
      <IncomeCalculator />
      <Process />
      <InlineCTA 
        title="Klingt nach dem perfekten Plan?" 
        description="Lass uns genau diesen Blueprint auf deinen Account anwenden. Schreib uns auf WhatsApp." 
      />
      <AboutUs />
      <Comparison />
      <Testimonials />
      <CaseStudyTeaser />
      <BlogTeaser />
      <FAQ />
      <ApplicationCTA />
    </>
  );
}
