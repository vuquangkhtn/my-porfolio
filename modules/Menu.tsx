import { useEffect, useContext, useState, WheelEvent } from 'react';
import { Icon, NavBarToggler } from 'common';
import ThemeContext from 'context/ThemeContext';
import { checkScrollDirectionIsUp, isScrollBottom, isScrollTop } from 'utils/scroll';

const Menu = ({ username }: { username: string }) => {
  const [isDarkMode, setDarkMode] = useContext(ThemeContext);
  const [menuShown, showMenu] = useState(false);
  const toggleColorMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleNavbar = () => {
    showMenu(!menuShown);
  };

  useEffect(() => {
    const checkScrollDirection = (e: any | WheelEvent) => {
      const navBarDOM = document.querySelector('.navbar');
      if (checkScrollDirectionIsUp(e)) {
        navBarDOM?.classList.add('headroom--pinned');
        navBarDOM?.classList.remove('headroom--unpinned');
      } else {
        navBarDOM?.classList.add('headroom--unpinned');
        navBarDOM?.classList.remove('headroom--pinned');
      }
    };

    const checkScrollPosition = () => {
      const navBarDOM = document.querySelector('.navbar');
      if (isScrollTop(document)) {
        navBarDOM?.classList.add('headroom--top');
        navBarDOM?.classList.remove('headroom--not-top');
      } else {
        navBarDOM?.classList.remove('headroom--top');
        navBarDOM?.classList.add('headroom--not-top');
      }

      if (isScrollBottom(document)) {
        navBarDOM?.classList.add('headroom--bottom');
        navBarDOM?.classList.remove('headroom--not-bottom');
      } else {
        navBarDOM?.classList.remove('headroom--bottom');
        navBarDOM?.classList.add('headroom--not-bottom');
      }
    };

    document.addEventListener('wheel', checkScrollDirection, { passive: true });
    document.addEventListener('scroll', checkScrollPosition, { passive: true });
    return () => {
      document.removeEventListener('wheel', checkScrollDirection);
      document.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-sm navbar-light headroom">
      <div className="container">
        <a className="navbar-brand" href=""><Icon icon='uil:user' width="40" /> {username}</a>
        <NavBarToggler className="navbar-toggler" onClick={toggleNavbar} expanded={menuShown} title="Navbar Toggler" />

        <div className={`navbar-collapse ${menuShown ? 'show' : 'collapse'}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#skill" className="nav-link"><span data-hover="Skill">Skill</span></a>
            </li>
            <li className="nav-item">
              <a href="#history" className="nav-link"><span data-hover="History">History</span></a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link"><span data-hover="Project">Project</span></a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
            </li>
          </ul>

          <ul className="navbar-nav ml-lg-auto">
            <li className="ml-lg-4">
              <div
                className="color-mode d-lg-flex justify-content-center align-items-center"
                onClick={toggleColorMode}
                data-testid={isDarkMode ? 'dark-icon' : 'light-icon'}
              >
                {isDarkMode ?
                  <Icon icon="uil:sun" width="30" color="white" />
                  :
                  <Icon icon="uil:moon" width="30" color="black" />
                }
                Color mode
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
