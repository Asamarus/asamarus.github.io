import { useRef, useEffect } from 'react';
import './Top.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typed from 'typed.js';

function Top() {
  const spanEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(spanEl.current, {
      strings: [
        'I am Software Engineer',
        'I solve problems',
        'I am Front-end developer',
        'I am Back-end developer',
        'I build websites',
      ],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="Top-wrapper">
      <div className="Top-info">
        <p className="Top-info-text" data-aos="fade-right">
          Hello! 👋 My name is
        </p>
        <h1 className="Top-info-title" data-aos="fade-right">
          Deniss Maksimenkovs
        </h1>
        <span ref={spanEl} className="Top-info-typed" data-aos="fade-in" />

        <div className="Top-icons" data-aos="fade-in">
          <a href="mailto:demax333@gmail.com">
            <MdEmail className="Top-icon" size={40} />
          </a>
          <a
            href="https://github.com/asamarus"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="Top-icon" size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/deniss-maksimenkovs-600694279/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="Top-icon" size={40} />
          </a>
        </div>
      </div>
      <div className="Top-image-wrapper">
        <img
          src="/profile.jpg"
          alt="profile"
          className="Top-profile"
          data-aos="zoom-in"
        />
      </div>
    </section>
  );
}

export default Top;
