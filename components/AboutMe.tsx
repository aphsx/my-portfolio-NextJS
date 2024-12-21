import aboutMe from "@/data/aboutMeData";  // Import aboutMe data

export const AboutMe = () => {
  return (
    <section className="">
      <div className="text-left font-bold text-4xl mt-10">About Me.</div>
      <div className="about-section">
      
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
      </div>
    </section>
  );
};

export default AboutMe;
