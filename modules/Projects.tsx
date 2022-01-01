import Image from 'next/image';
import project1Img from 'images/project/project-image01.png';
import project2Img from 'images/project/project-image02.png';
import project3Img from 'images/project/project-image03.png';
import project4Img from 'images/project/project-image04.png';
import project5Img from 'images/project/project-image05.png';
import { useState } from 'react';

const Carousel = ({ items }) => {
  const [active, setActive] = useState(0);
  const handlePrevClicked = () => {
    setActive(active - 1);
  };
  const handleNextClicked = () => {
    setActive(active + 1);
  };


  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => {
          const activeClass = active === index ? ' active' : '';
          return (
            <div key={item.id} className={`carousel-item${activeClass}`}>
              <Image src={item.src} className="img-fluid" alt="project image" />
            </div>
          );
        })}
      </div>
      {active > 0 && (
        <a className="carousel-control-prev" role="button" onClick={handlePrevClicked}>
          <i className='uil uil-angle-left'></i>
        </a>
      )}
      {active < items.length - 1 && (
        <a className="carousel-control-next" role="button" onClick={handleNextClicked}>
          <i className='uil uil-angle-right'></i>
        </a>
      )}

    </div>
  );
};

const carouselItems = [
  {
    id: 'item1',
    src: project1Img,
  },
  {
    id: 'item2',
    src: project2Img,
  },
  {
    id: 'item3',
    src: project3Img,
  },
  {
    id: 'item4',
    src: project4Img,
  },
  {
    id: 'item5',
    src: project5Img,
  },
];

const Projects = () => {
  return (
    <section className="project py-5" id="project">
      <div className="container">

        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">

            <div className="col-lg-8 mx-auto">
              <h2>Things I have designed for digital media agencies</h2>
            </div>
            <Carousel items={carouselItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
