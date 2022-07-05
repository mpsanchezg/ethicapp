/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import PropTypes from 'prop-types';

const StudentCard = ({ student, details }) => {
  return(
    <div
      className="px-6 py-2 rounded-lg w-96 h-16 bg-gray-400"
    >
      <p className="text-lg">{ student.name }</p>
      <p className="text-sm">{ student.email }</p>
      { details ? 'detalle' : <></> }
    </div>
  );
};

StudentCard.propTypes = {
  student: PropTypes.object,
  details: PropTypes.bool,
};

export default StudentCard;