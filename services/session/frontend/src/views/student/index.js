/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { studentUser } from '../../mockups/Mocks';
import WaitingSession from './WaitingSession';

const StudentApp = ({ history }) => {
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
              studentId={studentUser.id}
              studentName={studentUser.name}
              studentEmail={studentUser.email}
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
};

export default StudentApp;
