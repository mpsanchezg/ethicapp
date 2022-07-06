import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';

import SignIn from './components/Signin';
import useSignIn from './hooks/use-sign-in';

const App = ({ history, onSignIn }) => {
  const [signInBody, setSignInBody] = useState({});
  const [signInResponse, signInError, signInDoFetch] = useSignIn(signInBody);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin">
          <SignIn
            signInBody={signInBody}
            setSignInBody={setSignInBody}
            onSignIn={() => {
              signInDoFetch().then(() => {
                if(signInError) {
                  console.log(signInError);
                } else if (signInResponse?.status === 201) {
                  console.log('Authenticated');
                  onSignIn();
                  console.log('hola');
                } else {
                  console.log('Intenta de nuevo');
                }
              });
            }}
          />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  history: PropTypes.any,
  onSignIn: PropTypes.any
};

export default App;
