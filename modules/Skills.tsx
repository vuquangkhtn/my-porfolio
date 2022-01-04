const Skills = ({ skills }) => {
    return (
        <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="skill">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="mb-4">Skills</h2>
                        {skills.map(skill => (
                            <div key={skill.id} className="timeline">
                                <div className="timeline-info">
                                    <h4><span>{skill.name}</span><p>{skill.detail}</p></h4>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
