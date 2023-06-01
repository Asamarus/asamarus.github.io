import { useState } from 'react';
import './Header.css';

import Menu from './components/menu';
import Container from '../../components/common/container';
import ToggleTheme from './components/toggle_theme';
import Hamburger from './components/hamburger';
import classNames from 'classnames';

function Header() {
  const [opened, setOpened] = useState(false);

  const toggle = () => setOpened(!opened);

  return (
    <>
      <header className="Header-wrapper">
        <div className="Header-desktop">
          <Container full>
            <div className="Header-inner">
              <Menu />
              <ToggleTheme />
            </div>
          </Container>
        </div>
        <div className="Header-mobile">
          <Container full>
            <div className="Header-inner">
              <ToggleTheme />
              <Hamburger opened={opened} onClick={toggle} />
            </div>
          </Container>
        </div>
      </header>
      <div
        className={classNames('Header-mobile-menu', {
          'Header-mobile-menu_opened': opened,
        })}
      >
        <div className="Header-mobile-menu-inner" onClick={toggle}>
          <Menu />
        </div>
      </div>
      <div className="Header-placeholder" />
    </>
  );
}

export default Header;
