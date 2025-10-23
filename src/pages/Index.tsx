import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PlanningModules } from "@/components/PlanningModules";
import { ScenarioBuilder } from "@/components/ScenarioBuilder";
import { GrantsExplorer } from "@/components/GrantsExplorer";
import { MentorshipSection } from "@/components/MentorshipSection";
import { LearningSection } from "@/components/LearningSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PlanningModules />
      <ScenarioBuilder />
      <GrantsExplorer />
      <MentorshipSection />
      <LearningSection />
      <Footer />
    </div>
  );
};

export default Index;
