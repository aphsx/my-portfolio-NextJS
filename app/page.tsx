import AboutPage from '@/components/AboutPage';
import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';

export default function Home() {
  return (
      <div className="min-h-scree py-10 px-4 sm:px-10">
            <AboutMe />
            <Education />
          </div>
  );
}
