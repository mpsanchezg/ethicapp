import React from 'react';
import PropTypes from 'prop-types';

const StudentInstructionalDesign = ({ sessionId, children }) => {
  
  
  return(
    <>
      { children }
    </>
  )
}

StudentInstructionalDesign.propTypes = {
  sessionId: PropTypes.any,
  children: PropTypes.element,
}

export default StudentInstructionalDesign;
