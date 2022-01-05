const Skills = ({ skills }) => {
  return (
    <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="skill">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <h2 className="mb-4">Skills</h2>
            {skills.map(skill => {
              const badges = skill.detail?.split(',').map(item => item.trim());

              return (
                <div key={skill.id} className="d-lg-flex align-items-center mb-3">
                  <h4 className="mb-1 mr-2"><span>{skill.name}</span></h4>
                  <div className="d-flex flex-wrap" style={{ rowGap: '5px' }}>{badges.map(badge => <div key={badge} className="medal mr-1">{badge}</div>)}</div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
