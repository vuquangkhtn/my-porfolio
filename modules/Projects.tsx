import Image from 'next/image';
import project1Img from 'images/project/project-image01.png';
import project2Img from 'images/project/project-image02.png';
import project3Img from 'images/project/project-image03.png';
import project4Img from 'images/project/project-image04.png';
import project5Img from 'images/project/project-image05.png';

const Projects = () => {
  return (
    <section className="project py-5" id="project">
      <div className="container">

        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">

            <div className="col-lg-8 mx-auto">
              <h2>Things I have designed for digital media agencies</h2>
            </div>

            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="project-info">
                  <Image src={project1Img} className="img-fluid" alt="project image" />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <Image src={project2Img} className="img-fluid" alt="project image" />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <Image src={project3Img} className="img-fluid" alt="project image" />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <Image src={project4Img} className="img-fluid" alt="project image" />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <Image src={project5Img} className="img-fluid" alt="project image" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
