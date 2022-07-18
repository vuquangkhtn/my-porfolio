const EducationList = ({ educations }: { educations: Array<Education> }) => (
  <div className="timeline">
    {educations.map(education => (
      <div key={education.id} className="timeline-wrapper">
        <div className="timeline-yr">
          <span>{education.organization}</span>
        </div>
        <div className="timeline-info">
          <h3><span />{education.name}</h3>
          <p>{education.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const Educations = ({ educations }: { educations: Array<Education> }) => {
  if (!educations || educations.length === 0) return null;

  return (
    <section className="resume py-5 d-lg-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <h2 className="mb-4">Educations</h2>
            <EducationList educations={educations} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Educations;
