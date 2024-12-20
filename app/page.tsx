import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import ThreeCanvas from "@/components/ThreeCanvas";
import SkillsAndFrameworks from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-scree py-10 px-4 sm:px-10">
      <div className="items-center justify-center mt-10">
        <ThreeCanvas />
      </div>
      <SkillsAndFrameworks/>
      {/* <AboutMe />
      <Education /> */}
    </div>
  );
}
