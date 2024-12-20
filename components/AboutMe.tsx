import aboutMe from "@/data/Data";  // Import aboutMe data

export const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="text-left pl-10 font-bold text-4xl">About Me.</div>
      <ul className="timeline">
        {aboutMe.map((item, index) => (
          <li key={index}>
            <div className="circle"></div>
            <div className="content">
              <h2 className="font-semibold">
                {item.title}{" "}
                <a
                  href={item.link.href}
                  target="_blank"
                  className="view-link"
                >
                  {item.link.text}
                </a>
              </h2>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMe;
