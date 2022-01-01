import { useEffect, useContext, useState } from 'react';
import ThemeContext from 'context/ThemeContext';

const checkScrollDirectionIsUp = (event) => {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
};

const isScrollTop = () => {
  return document.documentElement.scrollTop < 10;
};

const isScrollBottom = () => {
  return document.documentElement.scrollTop + document.documentElement.clientHeight + 10 > document.documentElement.scrollHeight;
};

const Menu = () => {
  const [isDarkMode, setDarkMode] = useContext(ThemeContext);
  const toggleColorMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const checkScrollDirection = (e) => {
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
      if (isScrollTop()) {
        navBarDOM?.classList.add('headroom--top');
        navBarDOM?.classList.remove('headroom--not-top');
      } else {
        navBarDOM?.classList.remove('headroom--top');
        navBarDOM?.classList.add('headroom--not-top');
      }

      if (isScrollBottom()) {
        navBarDOM?.classList.add('headroom--bottom');
        navBarDOM?.classList.remove('headroom--not-bottom');
      } else {
        navBarDOM?.classList.remove('headroom--bottom');
        navBarDOM?.classList.add('headroom--not-bottom');
      }
    };

    document.addEventListener('wheel', checkScrollDirection);
    document.addEventListener('scroll', checkScrollPosition);
    return () => {
      document.removeEventListener('wheel', checkScrollDirection);
      document.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-sm navbar-light headroom">
      <div className="container">
        <a className="navbar-brand" href="index.html"><i className='uil uil-user'></i> Marvel</a>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link"><span data-hover="About">About</span></a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link"><span data-hover="Projects">Projects</span></a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link"><span data-hover="Resume">Resume</span></a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
            </li>
          </ul>

          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div className="color-mode d-lg-flex justify-content-center align-items-center" onClick={toggleColorMode}>
                <i className={`color-mode-icon ${isDarkMode ? 'active' : null}`}></i>
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
