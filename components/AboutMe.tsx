import aboutData from "@/data/Data";
export const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="text-left pl-10 font-bold text-4xl">About Me.</div>
      <ul className="timeline">
        <li>
          <div className="circle"></div>
          <div className="content">
            <h2>
              Experience{" "}
              <a
                href="https://github.com/your-github"
                target="_blank"
                className="view-link"
              >
                View Github
              </a>
            </h2>
            <p>
              The power of first impressions cannot be underestimated, and the
              gateway to capitalizing on them lies in exceptional website
              design...
            </p>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <h2>
              Product{" "}
              <a href="/projects" target="_blank" className="view-link">
                View Products
              </a>
            </h2>
            <p>
              While I may not fit the conventional mold of a product manager, my
              diverse skill set in research, product design, and product
              coordination...
            </p>
          </div>
        </li>
        <li>
          <div className="circle"></div>
          <div className="content">
            <h2>
              Design{" "}
              <a
                href="https://dribbble.com/your-dribbble"
                target="_blank"
                className="view-link"
              >
                View Dribbble
              </a>
            </h2>
            <p>
              Despite not fitting the typical designer stereotype, my
              exceptional visual abilities enable me to excel as a presenter,
              effectively conveying...
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
