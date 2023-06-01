import './About.css';
import Skills from './components/skills';

function About() {
  return (
    <section id="about" className="section-wrapper About-wrapper">
      <div
        className="About-item"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h2 className="section-title">About</h2>
        <div className="About-text">
          <p>
            I am a passionate Software Engineer specializing in front-end
            development, with a strong focus on React and Node.js. I have a deep
            curiosity for exploring the inner workings of front-end related npm
            packages, constantly seeking to enhance my knowledge and stay
            up-to-date with the latest trends in the industry.
          </p>
          <p>
            In my spare time, I like to develop web applications. Some of them
            are open source and are mentioned in the{' '}
            <a href="#projects">projects</a> section.
          </p>
          <p>
            Along with my proficiency in front-end development, I also have a
            strong background in back-end development, utilizing Laravel and
            PHP. I have developed many websites that are publicly available. You
            can see them in the <a href="#projects">projects</a> section.{' '}
          </p>
        </div>
      </div>
      <div className="About-item" data-aos="fade-left" data-aos-duration="1500">
        <h2 className="section-title">Skills</h2>
        <Skills />
      </div>
    </section>
  );
}

export default About;
