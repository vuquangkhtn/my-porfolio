const monthDiff = (dateFrom, dateTo) => {
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
};

const getDateFrom = (dateString = '') => {
  const splited = dateString.split('/');
  const date = new Date(Number.parseInt(splited[1]), Number.parseInt(splited[0]));
  return date;
};

const generateMonths = (fromDateString, toDateString) => {
  const currentToDate = toDateString ? getDateFrom(toDateString) : new Date();
  const fromDate = getDateFrom(fromDateString);
  const months = monthDiff(fromDate, currentToDate);
  return `${months} mth${months > 1 ? 's' : ''}`;
};

const Histories = ({ histories }) => {
  return (
    <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="history">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <h2 className="mb-4">Histories</h2>
            <div className="timeline">
              {histories.map(history => (
                <div key={history.id} className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>{generateMonths(history.time, history.nextTime?.time)}</span>
                  </div>
                  <div className="timeline-info">
                    <h3><span />{history.name}<small>{history.company}</small></h3>
                    <p>{`From ${history.time} to ${history.nextTime?.time || 'Present'}`}</p>
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

export default Histories;
