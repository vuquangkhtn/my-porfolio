import { useEffect, useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Menu from 'modules/Menu';
import About from 'modules/About';
import Projects from 'modules/Projects';
import Features from 'modules/Features';
import Contact from 'modules/Contact';
import Footer from 'modules/Footer';

import ThemeContext from 'context/ThemeContext';

const Home: NextPage = () => {
  const [isDarkMode] = useContext(ThemeContext);
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body")?.classList.add("dark-mode");
    } else {
      document.querySelector("body")?.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <Head>
        <title>My porfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <About />
      <Projects />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
