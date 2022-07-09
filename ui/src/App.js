import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Progress from './components/shared/Progress';
import Header from './components/shared/Header';

const AuthLazy = lazy(() => import('./components/AuthApp'));
const SessionLazy = lazy(() => import('./components/SessionApp'));
const InstructionalDesignLazy = lazy(() =>
  import('./components/InstructionalDesignApp')
);

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (isSignedIn) {
      history.push('/sessions');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <div>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy
                onSignIn={() => {
                  console.log('User signed in!');
                  setIsSignedIn(true);
                  console.log('ROLE', userRole);
                }}
                setUserEmail={setUserEmail}
                setUserRole={setUserRole}
              />
            </Route>
            <Route path="/sessions">
              {isSignedIn ? (
                <SessionLazy
                  userEmail={userEmail}
                  userRole={userRole}
                />) : (
                <AuthLazy
                  onSignIn={() => {
                    console.log('User signed in!');
                    setIsSignedIn(true);
                  }}
                  setUserEmail={setUserEmail}
                  setUserRole={setUserRole}
                />)
              }
            </Route>
            <Route exact path="/instructional-design" component={
              isSignedIn && InstructionalDesignLazy }/>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
