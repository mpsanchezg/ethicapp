import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import WaitingSession from './WaitingSession';
import NextButton from '../../components/NextButton';

const StudentApp = ({ studentEmail, history }) => {
  const [sessionName, ] = useState('prueba');
  const [sessionId, ] = useState('1');

  const goToWaitingRoom = () => {
    history.push(`sessions/${sessionId}/wait`);
  };

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/sessions">
          <NextButton onClick={goToWaitingRoom} />
        </Route>
        <Route exact path="/sessions/:id/wait">
          {sessionName && (
            <WaitingSession
              history={history}
              sessionName={sessionName}
              sessionId={sessionId}
              studentEmail={studentEmail}
            />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

StudentApp.propTypes = {
  history: PropTypes.object,
  workflowName: PropTypes.string,
  studentEmail: PropTypes.string,
};

export default StudentApp;
