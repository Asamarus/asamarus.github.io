import './Hamburger.css';

import classNames from 'classnames';

function Hamburger({ onClick, opened = false }) {
  const className = classNames('Hamburger-wrapper', {
    'Hamburger-wrapper_opened': opened,
  });

  return (
    <div className={className} onClick={onClick}>
      <span className="Hamburger-item" />
      <span className="Hamburger-item" />
      <span className="Hamburger-item" />
      <span className="Hamburger-item" />
    </div>
  );
}

export default Hamburger;
