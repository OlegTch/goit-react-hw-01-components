import PropTypes from "prop-types";

const StatisticsItem = (props) => {
  const { id, label, percentage } = props;
  return (
    <li className="item" id={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">
        {stats.map((statistic) => (
          // <li className="item" key={statistic.id}>
          <StatisticsItem
            key={statistic.id}
            label={statistic.label}
            percentage={statistic.percentage}
          />
          // </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

// import data from "/путь/к/data.json";

// <Statistics title="Upload stats" stats={data} />;
// <Statistics stats={data} />;
