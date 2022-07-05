import React, { useState } from 'react';
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
  const [state, setState] = useState('out');
  const [joinResponse, joinError, doJoinFetch] = usePostApiRequest(
    `sessions/${sessionId}/join-session`,
    { studentEmail: studentEmail }
  );

  return (
    <div>
      {state === 'waiting' ? (
        <>
          <Loading
            onLoading={() => {
              poll({
                fn: SessionApi.getSessionState,
                interval: 1000,
                attr: sessionId,
                maxAttempts: 20,
              }).then((res) => {
                console.log('res', res);
                setState('ready');
              });
            }}
          />
        </>
      ) : state === 'ready' ? (
        <>
          <p>{'Para empezar, haz click en el siguiente botón'}</p>
          <NextButton
            onClick={() => {
              history.push('/instructional-design/start');
            }}
          />
        </>
      ) : (
        <div>
          <p className="text-2xl">{`${sessionName}`}</p>
          <JoinButton
            onJoin={() => {
              doJoinFetch().then(() => {
                if (joinResponse) console.log(joinResponse);
                if (joinError) console.log(joinError);
                setState('waiting');
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

WaitingSession.propTypes = {
  sessionName: PropTypes.string,
  sessionId: PropTypes.string,
  studentId: PropTypes.number,
  studentName: PropTypes.string,
  studentEmail: PropTypes.string,
  history: PropTypes.any,
};

export default WaitingSession;
