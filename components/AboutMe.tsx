import aboutData from "@/data/Data";
export const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="text-left pl-10 font-bold text-4xl">About Me.</div>
      <ul className="timeline">
        <li>
          <div className="circle"></div>
          <div className="content">
            <h2 className="font-semibold">
              Center of Specialty Innovation (CoSI) 2024
              <a
                href="https://cosi.bu.ac.th/en/about"
                target="_blank"
                className="view-link"
              >
                Visite
              </a>
            </h2>
            <p>
              oined the Center of Specialty Innovation (CoSI), a research lab
              under Bangkok University. Formerly known as BUMIT, CoSI is a
              multidisciplinary center established in 2012, focusing on
              advancing multimedia applications and AI technologies.
              Participated in projects involving web applications, software
              development, and other fields, gaining practical experience in a
              professional environment.
            </p>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <h2 className="font-semibold">
              Bangkok University 2023
              <a
                href="https://th.wikipedia.org/wiki/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E"
                target="_blank"
                className="view-link"
              >
                Visite
              </a>
            </h2>
            <p>
              Currently studying Computer Science at Bangkok University, a
              leading institution fostering innovation and technological
              advancement.
            </p>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <h2 className="font-semibold">
              Matthayomwatmaikrongtong School 2018
              <a
                href="https://th.wikipedia.org/wiki/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%A3%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87"
                target="_blank"
                className="view-link"
              >
                Visite
              </a>
            </h2>
            <p>
              Successfully completed secondary education, attending from
              Mathayom 1 (Grade 7) to Mathayom 6 (Grade 12), building a strong
              academic foundation and participating in various school activities
              and programs.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
