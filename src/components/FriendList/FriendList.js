import Friend from "./FriendListItem";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map((friend) => (
        // <li key={friend.id}>
        <Friend
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
        // </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
