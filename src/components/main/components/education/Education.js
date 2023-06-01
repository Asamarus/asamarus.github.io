import './Education.css';

const items = [
  {
    years: '2019 – 2023',
    line1: 'Professional bachelor’s in information technology.',
    line2: 'Qualification: ',
    qualification: 'Software Engineer',
    line3: 'Liepaja University, Liepaja (Latvia)',
  },
  {
    years: '2011 – 2014',
    line1: 'Professional higher education at 1st level.',
    line2: 'Qualification: ',
    qualification: 'Programmer',
    line3: 'Riga Technical University, Liepaja branch, Liepaja (Latvia)',
  },
];

function Education() {
  return (
    <div id="education" className="section-wrapper">
      <h2 className="section-title">Education</h2>
      <div className="Education-items">
        {items.map((item, index) => (
          <div key={index} className="Education-item" data-aos="fade-down">
            <div className="Education-years">{item.years}</div>
            <div className="Education-text">
              <p>{item.line1}</p>
              <p>
                {item.line2} <strong>{item.qualification}</strong>
              </p>
              <p>{item.line3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
