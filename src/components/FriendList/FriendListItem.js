import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

function Friend(props) {
  const { isOnline, avatar, name } = props;
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={`${styles.status} ${styles.online}`}> </span>
      ) : (
        <span className={`${styles.status} ${styles.offline}`}> </span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  // isOnline: PropTypes.oneOf([true, false]).isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
