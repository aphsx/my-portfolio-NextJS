import ProfileSection from "@/components/ProfileSection";
import Hero from "@/components/AboutSection";
import SkillsAndFrameworks from "@/components/Skills";
import Education from "@/components/Education";
import AboutMe from "@/components/AboutMe";
export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 xl:px-0 space-y-10">
      {/* Add spacing between components */}
      <ProfileSection />
      <Hero />
      <SkillsAndFrameworks />
      {/* <Education />
      <AboutMe /> */}
    </div>
  );
}
