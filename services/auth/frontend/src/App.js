import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';

import SignIn from './components/Signin';
import useSignIn from './hooks/use-sign-in';

const App = ({ history, onSignIn, setUserEmail, setUserRole }) => {
  const [signInBody, setSignInBody] = useState({});
  const [signInResponse, signInError, signInDoFetch] = useSignIn(signInBody);

  const signIn = () => {
    signInDoFetch().then(() => {
      if(signInError) {
        console.log(signInError);
      } else if (signInResponse?.status === 201) {
        console.log('RESPONSE', signInResponse);
        onSignIn();
        setUserEmail(signInResponse.data.email);
        setUserRole(signInResponse.data.role);
        console.log('hola');
      } else {
        console.log('Intenta de nuevo');
      }
    });
  };

  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin">
          <SignIn
            signInBody={signInBody}
            setSignInBody={setSignInBody}
            onSignIn={signIn}
          />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  history: PropTypes.any,
  onSignIn: PropTypes.any,
  setUserEmail: PropTypes.func,
  setUserRole: PropTypes.func,
};

export default App;
