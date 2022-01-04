import { useEffect, useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Menu from 'modules/Menu';
import About from 'modules/About';
import Projects from 'modules/Projects';
import Skills from 'modules/Skills';
import Educations from 'modules/Educations';
import Histories from 'modules/Histories';
import Contact from 'modules/Contact';
import Footer from 'modules/Footer';
import ThemeContext from 'context/ThemeContext';
import { getHome } from 'api/home';
import Error from './Error';

const Home: NextPage = ({ user = {}, skills = [], experiences = [], educations = [], histories = [], err }) => {
  const [isDarkMode] = useContext(ThemeContext);
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body")?.classList.add("dark-mode");
    } else {
      document.querySelector("body")?.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  if (err) {
    return <Error />;
  }

  return (
    <div>
      <Head>
        <title>{`${user.name}'s porfolio`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu username={user.name} />
      <About user={user} />
      <Skills skills={skills} />
      <Histories histories={histories} />
      <Educations educations={educations} />
      <Projects experiences={experiences} />
      <Contact user={user} />
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const { data } = await getHome();
    return {
      props: data,
    };
  } catch (e) {
    return {
      props: {
        err: {
          statusCode: 404
        }
      }
    };
  }
};

export default Home;
