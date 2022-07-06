import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import WaitingSession from './WaitingSession';

const StudentApp = ({ studentEmail, history }) => {
  const [sessionName, ] = useState('prueba');
  const [sessionId, ] = useState('1');

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/session">
          <div>{'poner aqui una vista que ponga a que sesion se va a unir'}</div>
        </Route>
        <Route exact path="/session/wait">
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
