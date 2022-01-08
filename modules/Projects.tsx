const Features = ({ experiences }: { experiences: Array<Experience> }) => {
  return (
    <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="project">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Project Experiences</h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>{index + 1}</span>
                  </div>
                  <div className="timeline-info">
                    <h3><span>{exp.name}</span><small>{exp.industry}</small></h3>
                    <p>{exp.description}</p>
                    <b>{exp.skills}</b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
