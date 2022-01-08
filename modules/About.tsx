import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Icon, confirmPopup } from 'common';
import { downloadResume } from 'api/download';
import softwareEngineerImg from 'images/undraw/undraw_software_engineer_lvl5.svg';

const About = ({ user }) => {
  const router = useRouter();
  const download = async () => {
    const isAccepted = await confirmPopup({
      header: 'Download Confirmation',
      confirmation: 'Are you sure to donwload this resume?',
    });
    if (!isAccepted) return;
    downloadResume();
  };

  return <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div className="container">
      <div className="row">

        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
          <div className="about-text">
            <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
            <h1 className="animated animated-text">
              <span className="mr-2">Hey folks, I am</span>
              <div className="animated-info">
                <span className="animated-item">{user.name}</span>
                <span className="animated-item">{user.position}</span>
              </div>
            </h1>

            <p>{user.bio}</p>

            <div className="custom-btn-group mt-4">
              <Button className="mr-lg-2 mb-2" onClick={download}><div className='d-flex align-items-center'><Icon className="mr-1" icon='uil:file-alt' width="20" /> <span>Download Resume</span></div></Button>
              <Button className="ml-2 mb-2" mode="secondary" onClick={() => router.push('#contact')}>Get a free quote</Button>
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
