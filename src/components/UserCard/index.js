import React from "react";
import { PropTypes } from "prop-types";

const UserCard = (props) => {
  const {
    user: { id, fname, lname, isSelected },
    setIsSelected,
  } = props;
  const styles = { backgroundColor: isSelected ? "teal" : "pink" };
  const handlerBtn = () => setIsSelected(id);
  return (
    <article style={styles}>
      <h3>
        id={id}) {fname} {lname}
      </h3>
      <button onClick={handlerBtn}>Select this user</button>
    </article>
  );
};

export const userPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    fname: PropTypes.string.isRequired,
    sname: PropTypes.string,
    isSelected: PropTypes.bool,
  });

 UserCard.propTypes = {
  user:userPropTypes
  
};

export default UserCard;
