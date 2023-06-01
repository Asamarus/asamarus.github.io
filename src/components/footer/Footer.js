import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './Footer.css';

function Footer() {
  return (
    <footer className="Footer-wrapper">
      <div className="Footer-icons">
        <a href="mailto:demax333@gmail.com">
          <MdEmail className="Footer-icon" size={40} />
        </a>
        <a href="https://github.com/asamarus" target="_blank" rel="noreferrer">
          <FaGithub className="Footer-icon" size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/deniss-maksimenkovs-600694279/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="Footer-icon" size={40} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
