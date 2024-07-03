import './About.css'
import Skills from './components/skills'

function About() {
  return (
    <section
      id="about"
      className="section-wrapper About-wrapper"
    >
      <div
        className="About-item"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2 className="section-title">About</h2>
        <div className="About-text">
          <p>
            I am a passionate Software Engineer specializing in full-stack development, with a
            strong focus on .NET and React. I have a deep curiosity for exploring the inner workings
            of front-end and back-end technologies, constantly seeking to enhance my knowledge and
            stay up-to-date with the latest trends in the industry.
          </p>
          <p>
            In my spare time, I like to develop web applications. Some of them are open source and
            are mentioned in the <a href="#projects">projects</a> section.
          </p>
        </div>
      </div>
      <div
        className="About-item"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2 className="section-title">Skills</h2>
        <Skills />
      </div>
    </section>
  )
}

export default About
