

import React from "react";
import PropTypes from 'prop-types';

const CiaoSortedList = (props) => {
  const {isUpSortById, isUpSortByLname, sortById, sortByLname} = props;
  return (
    <div>
      <button onClick={sortById}>
        sort by ID {isUpSortById ? "DN" : "UP"}
      </button>
      <button onClick={sortByLname}>
        sort by last name {isUpSortByLname ? "DN" : "UP"}
      </button>
    </div>
  );
};


CiaoSortedList.defaultProps={
  
  isUpSortById:false,
  isUpSortByLname:false,
  sortById:()=>{},
  sortByLname:()=>{},
}


CiaoSortedList.propTypes ={
  isUpSortById:PropTypes.bool,
  isUpSortByLname:PropTypes.bool,
  sortById:PropTypes.func,
  sortByLname:PropTypes.func,
}

export default CiaoSortedList;