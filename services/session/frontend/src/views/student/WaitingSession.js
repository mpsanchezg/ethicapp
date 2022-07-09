import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import JoinButton from '../../components/JoinButton';
import {
  usePostApiRequest,
} from '../../hooks/use-api-request';
import Loading from '../../components/Loading';
import NextButton from '../../components/NextButton';
import { poll } from '../../utils/poll'; 
import SessionApi from '../../api/session';

const WaitingSession = ({
  sessionId,
  sessionName,
  studentEmail,
  history,
}) => {
  const [sessionState, setSessionState] = useState('out');
  const [joinResponse, joinError, doJoinFetch] = usePostApiRequest(
    `sessions/${sessionId}/join-session`,
    { studentEmail: studentEmail }
  );

  useEffect(() => {
    console.log('HOLAAAA');
  },[]);

  const startInstructionalDesign = () => {
    history.push('/instructional-design/start');
  };
  
  const join = () => {
    doJoinFetch().then(() => {
      if (joinResponse) console.log(joinResponse);
      if (joinError) console.log(joinError);
      setSessionState('waiting');
    });
  };

  const getSessionStatePolling = () => {
    poll({
      fn: SessionApi.getSessionState,
      interval: 1000,
      attr: sessionId,
      maxAttempts: 20,
    }).then((res) => {
      console.log('res', res);
      setSessionState('ready');
    });
  };

  return (
    <div>
      {sessionState === 'waiting' ? (
        <>
          <Loading
            onLoading={getSessionStatePolling}
          />
        </>
      ) : sessionState === 'ready' ? (
        <>
          <p>{'Para empezar, haz click en el siguiente botón'}</p>
          <NextButton
            onClick={startInstructionalDesign}
          />
        </>
      ) : (
        <div>
          <p className="text-2xl">{`${sessionName}`}</p>
          <JoinButton
            onJoin={join}
          />
        </div>
      )}
    </div>
  );
};

WaitingSession.propTypes = {
  sessionName: PropTypes.string,
  sessionId: PropTypes.string,
  studentEmail: PropTypes.string,
  history: PropTypes.any,
};

export default WaitingSession;
