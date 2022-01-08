import { useEffect, useContext } from 'react';
import type { NextPage, GetStaticProps } from 'next';
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

type HomeProps = {
  user: User,
  skills: Array<Skill>,
  experiences: Array<Experience>,
  educations: Array<Education>,
  histories: Array<History>,
  err: Object,
}

const Home: NextPage<HomeProps> = ({ user, skills = [], experiences = [], educations = [], histories = [], err }: HomeProps) => {
  const [isDarkMode] = useContext(ThemeContext);
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('body')?.classList.add('dark-mode');
    } else {
      document.querySelector('body')?.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  if (err) {
    return <Error />;
  }

  return (
    <div>
      <Head>
        <title>{`${user.name}'s porfolio`}</title>
        <meta name="description" content={user.bio} />
        <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, ES6, ReactJS, NextJS, NodeJS" />
        <meta name="author" content={user.name} />
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

export const getStaticProps: GetStaticProps = async () => {
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
