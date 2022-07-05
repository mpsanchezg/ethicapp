import React from 'react';
import PropTypes from 'prop-types';

import SessionCard from '../../components/SessionCard';

const Sessions = ({ history, sessions, setSessionId, setSessionName }) => {
  return (
    <div className="w-full md:w-7/12 p-8 bg-gray-100">
      <p className="text-2xl">{'Tus Sesiones'}</p>
      {sessions.map((session) => (
        <SessionCard
          history={history}
          key={session.id}
          sessionId={session.id}
          sessionName={session.name}
          sessionStudents={session.students.length}
          sessionState={session.state}
          goToStartSession={() => {
            setSessionId(session.id);
            setSessionName(session.name);
            history.push(`/sessions/${session.id}/start`);
          }}
          goToViewSession={() => {
            setSessionId(session.id);
            setSessionName(session.name);
            history.push(`/sessions/${session.id}`);
          }}
          goToEditSession={() => {
            setSessionId(session.id);
            setSessionName(session.name);
            history.push(`/sessions/${session.id}/edit`);
          }}
          deleteSession={() => {
            console.log('delete session');
          }}
        />
      ))}
    </div>
  );
};

Sessions.propTypes = {
  history: PropTypes.any,
  sessions: PropTypes.arrayOf(PropTypes.object),
  setSessionId: PropTypes.any,
  setSessionName: PropTypes.any,
};

export default Sessions;
