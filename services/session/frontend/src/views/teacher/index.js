import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sessions from './Sessions';
import ShowSession from './ShowSession';
import StartSession from './StartSession';
import { sessions } from '../../mockups/Mocks';

const TeacherApp = ({ teacherEmail, history }) => {
  const [sessionName, setSessionName] = useState('');
  const [sessionId, setSessionId] = useState('');

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/sessions">
          <Sessions
            history={history}
            sessions={sessions}
            setSessionName={setSessionName}
            setSessionId={setSessionId}
          />
        </Route>
        <Route exact path="/sessions/:id">
          {sessionName && (
            <ShowSession
              session={sessions.find((session) => {
                return session.id === sessionId;
              })}
            />
          )}
        </Route>
        <Route exact path="/sessions/:id/start">
          {sessionName && (
            <StartSession
              history={history}
              sessionName={sessionName}
              sessionId={sessionId}
              workflowName={sessionName}
              teacherEmail={teacherEmail}
            />
          )}
        </Route>
        {/* SESSION STATE: IN-PROGRESS
        <Route exact path="/sessions/:id/instructional-design">
          {sessionName && (
            <Session 
              sessionName={sessionName}
              sessionId={sessionId}
            />
          )}
        </Route> */}
      </Switch>
    </Router>
  );
};

TeacherApp.propTypes = {
  history: PropTypes.object,
  teacherEmail: PropTypes.string,
};

export default TeacherApp;
