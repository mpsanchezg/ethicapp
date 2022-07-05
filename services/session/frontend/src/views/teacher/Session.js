/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePostApiRequest } from '../../hooks/use-api-request';

const Session = ({ sessionName, sessionId }) => {
  const [startSessionResponse, , startSessionFetch] = usePostApiRequest(
    `sessions/${sessionId}/start`,
    {
      teacherId: 1,
    }
  );

  useEffect(() => {
    startSessionFetch();
  },[]);
  return (
    <div>
      <p className="text-2xl"> {sessionName} </p>
    </div>
  );
};

Session.propTypes = {
  sessionName: PropTypes.string,
  sessionId: PropTypes.any,
};

export default Session;