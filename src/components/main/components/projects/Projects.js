import './Projects.css';

import { MdOpenInNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const items = [
  {
    name: 'Notes',
    description: 'An open-source note taking application.',
    image: 'notes',
    tags: ['React', 'Adonis.js', 'SQLite'],
    url: 'https://github.com/asamarus/notes',
    source: 'https://github.com/asamarus/notes',
  },
  {
    name: 'Battleship',
    description:
      'A classic battleship game with different bonuses and penalties.',
    image: 'battleship',
    tags: ['React', 'PWA'],
    source: 'https://github.com/asamarus/battleship',
    url: 'https://asamarus.github.io/battleship/',
  },
  {
    name: 'Divi naži',
    description: 'Online store for a local restaurant.',
    image: 'divinazi',
    tags: ['React', 'Laravel'],
    url: 'https://www.divinazi.lv/',
  },
  {
    name: 'Prowristbands',
    description: 'Website for a bracelet manufacturing company.',
    image: 'prowristbands',
    tags: ['React', 'Laravel'],
    url: 'https://www.prowristbands.eu/',
  },
  {
    name: 'LJP',
    description: 'Website for the largest youth energy network of Latvia.',
    image: 'ljp',
    tags: ['React', 'Laravel'],
    url: 'https://www.ljp.lv/',
  },
  {
    name: 'Lauvu spēles',
    description: 'Quiz game for kids and their parents.',
    image: 'lauvuspeles',
    tags: ['React', 'Laravel', 'PWA'],
    url: 'https://www.lauvuspeles.lv/',
  },
  {
    name: 'Ecosiplat',
    description:
      'Website for a manufacturing and construction company specializing in SIP panel technology.',
    image: 'ecosiplat',
    tags: ['React', 'Laravel'],
    url: 'https://www.ecosiplat.lv/',
  },
  {
    name: 'Devox',
    description: 'Website for a company that organizes trainings.',
    image: 'devox',
    tags: ['React', 'Laravel'],
    url: 'https://www.devox.lv/',
  },
  {
    name: 'Kurzemes sēklas',
    description: 'Online store for a seed selling company.',
    image: 'kurzemesseklas',
    tags: ['React', 'Laravel'],
    url: 'https://www.kurzemesseklas.lv/',
  },
  {
    name: 'Ainma',
    description:
      'Website for a stainless and non-ferrous components manufacturing company.',
    image: 'ainma',
    tags: ['React', 'Laravel'],
    url: 'https://www.ainma.eu/',
  },
  {
    name: 'AKB industrial',
    description: 'Website for a plastic plant cassettes manufacturing company.',
    image: 'akb',
    tags: ['React', 'Laravel'],
    url: 'https://www.akbindustrial.lv/',
  },
  {
    name: 'Mentāli vesels',
    description:
      'Website for a company that organizes summer camps for children.',
    image: 'mentali_vesels',
    tags: ['React', 'Laravel'],
    url: 'https://www.mentalivesels.lv/',
  },
];

function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <h2 className="section-title">Projects</h2>
      {items.map((item, index) => (
        <div key={index} className="Projects-item" data-aos="flip-up">
          <a
            className="Projects-image-wrapper"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="Projects-image"
              alt={item.name}
              src={`/projects/${item.image}.png`}
            />
          </a>
          <div className="Projects-info">
            <div className="Projects-title">{item.name}</div>
            <div className="Projects-description">{item.description}</div>
            <div className="Projects-tags">
              {item.tags.map((tag, index) => (
                <div key={index} className="Projects-tag">
                  {tag}
                </div>
              ))}
            </div>
            <div className="Projects-icons">
              {item.source && (
                <a href={item.source} target="_blank" rel="noreferrer">
                  <FaGithub className="Projects-icon" size={30} />
                </a>
              )}
              {item.url && (
                <a href={item.url} target="_blank" rel="noreferrer">
                  <MdOpenInNew className="Projects-icon" size={30} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
