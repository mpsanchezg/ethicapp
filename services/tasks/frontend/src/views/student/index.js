import React from 'react';
import PropTypes from 'prop-types';
import ShowTask from './ShowTask';

const StudentTaskView = ({ studentEmail }) => {
  return (
    <div>
      <ShowTask userEmail={studentEmail} />
    </div>
  );
}

StudentTaskView.propTypes = {
  studentEmail: PropTypes.string.isRequired,

}

export default StudentTaskView;