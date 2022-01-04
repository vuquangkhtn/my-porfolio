const Educations = ({ educations }) => {
    return (
        <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="education">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="mb-4">Educations</h2>
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
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Educations;
