import './Experience.css'

const items = [
  {
    years: '2023 – present',
    place: 'SIA S-TEC Latvia',
    position: 'Full-stack (.Net/React) developer',
    listItems: [
      'Worked at a multinational company with offices in Latvia and Germany in a team of 20+ developers.',
      'Developed a multi-modular .NET/React application.',
      'Conducted peer code reviews.',
      'Mentored Junior developers.',
    ],
  },
  {
    years: '2018 – 2022',
    place: 'SIA A4 Studio',
    position: 'Full-stack (Laravel/React) developer',
    listItems: [
      'Developed large number of websites using company’s CMS based on Laravel and React components library.',
      'Developed and maintained React component library.',
      'Developed and maintained Laravel based CMS system.',
      'Websites developed in these categories: landing pages, company info websites, online stores, internal document, and product management systems.',
    ],
  },
  {
    years: '2015 – 2021',
    place: 'SIA Dreamit',
    position: 'Full-stack (Laravel/React) developer',
    listItems: [
      'Developed and maintained document and product management system.',
      'Transitioned system from plain PHP/JavaScript to CodeIgniter and jQuery.',
      'Transitioned system from CodeIgniter and jQuery to Laravel and React/Redux.',
    ],
  },
  {
    years: '2014 – 2015',
    place: 'SIA "PhoneAD" ',
    position: 'Full-stack (PHP/jQuery) and Android (Java) developer',
    listItems: [
      'Developed and maintained Android application that was used to show advertisements to users.',
      'Developed and maintained website that was used as a backed end for Android application.',
      'Developed and maintained administration panel to manage advertisements.',
    ],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="section-wrapper"
    >
      <h2 className="section-title">Experience</h2>
      <div className="Experience-items">
        {items.map((item, index) => (
          <div
            key={index}
            className="Experience-item"
            data-aos="fade-in"
          >
            <div className="Experience-years">
              {item.years} <strong>{item.place}</strong>
            </div>
            <div className="Experience-position">
              Position: <strong>{item.position}</strong>.
            </div>
            <ul className="Experience-list">
              {item.listItems.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
