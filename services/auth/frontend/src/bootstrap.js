import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (element, { setUserEmail, setUserRole, onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App
      onSignIn={onSignIn}
      setUserEmail={setUserEmail}
      setUserRole={setUserRole}
      history={history}
    />, element);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      console.log(nextPathname);
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

const element = document.querySelector('#ethic-auth');

if (element) {
  mount(element, { defaultHistory: createBrowserHistory() });
}

export { mount };
