import PropTypes from "prop-types";

function Friend(props) {
  const { isOnline, avatar, name } = props;
  return (
    <li className="item">
      <span className="status">{isOnline ? "Онлайн" : "offline"}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
