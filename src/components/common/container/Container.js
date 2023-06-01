import './Container.css';

import classNames from 'classnames';

function Container({ children, full = false }) {
  const containerClass = classNames('Container-wrapper', {
    'Container-full': full,
  });

  return <div className={containerClass}>{children}</div>;
}

export default Container;
