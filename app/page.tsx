import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Workflow } from '@/components/Workflow';
import { ScheduleCSection } from '@/components/ScheduleCSection';
import { RulesSection } from '@/components/RulesSection';
import { ExportSection } from '@/components/ExportSection';
import { PrivacySection } from '@/components/PrivacySection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <ScheduleCSection />
        <RulesSection />
        <PrivacySection />
        <ExportSection />
        <ComparisonTable />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
