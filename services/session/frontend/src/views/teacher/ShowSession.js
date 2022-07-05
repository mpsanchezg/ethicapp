import React from 'react';
import PropTypes from 'prop-types';

const ShowSession = ({ session }) => {
  return (
    <div className="w-full md:w-7/12 p-8 bg-gray-100">
      <p className="text-xl">{session.name}</p>
      <p className="text-l">{`State: ${session.state}`}</p>
      <p className="text-l">{`Instructinal designs: ${session.instructionalDesign}`}</p>
    </div>
  );
};

ShowSession.propTypes = {
  session: PropTypes.object,
};

export default ShowSession;
