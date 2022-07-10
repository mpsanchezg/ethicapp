import React from 'react';
import PropTypes from 'prop-types';

const StudentCard = ({ student }) => {
  return(
    <div
      className="p-2 rounded-lg bg-gray-400"
    >
      <p className="text-lg">{ student }</p>
    </div>
  );
};

StudentCard.propTypes = {
  student: PropTypes.string,
};

export default StudentCard;