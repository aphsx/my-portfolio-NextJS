export const Education = () => {
  return (
    <section className="">
      <div className="text-left font-bold text-4xl mt-10">Education.</div>
      <div className="about-section">
      <ul className="timeline">
        <li>
          <div className="circle"></div>
          <div className="content">
            <h2 className="font-semibold">
              Bangkok University 2023
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
            <h2 className="font-semibold">
            Matthayomwatmaikrongtong School 2018
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
      </ul>
      </div>
    </section>
  );
};

export default Education;
