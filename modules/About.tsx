import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from 'common';
import softwareEngineerImg from 'images/undraw/undraw_software_engineer_lvl5.svg';

const About = () => {
  const router = useRouter();
  return <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div className="container">
      <div className="row">

        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
          <div className="about-text">
            <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
            <h1 className="animated animated-text">
              <span className="mr-2">Hey folks, I am</span>
              <div className="animated-info">
                <span className="animated-item">Marvel Sann</span>
                <span className="animated-item">Web Designer</span>
                <span className="animated-item">UI Specialist</span>
              </div>
            </h1>

            <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>

            <div className="custom-btn-group mt-4">
              <Button className="mr-lg-2"><i className='uil uil-file-alt'></i> Download Resume</Button>
              <Button mode="secondary" onClick={() => router.push('#contact')}>Get a free quote</Button>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-12">
          <div className="about-image svg">
            <Image src={softwareEngineerImg} className="img-fluid" alt="svg image" />
          </div>
        </div>

      </div>
    </div>
  </section >;
};

export default About;
