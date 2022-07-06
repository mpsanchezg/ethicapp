import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (element, { userEmail, userRole, onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  if (!userRole) {
    userRole = 'teacher';
  }

  if (!userEmail) {
    userEmail = 'profesora@ethic.app';
  }

  ReactDOM.render(
    <App history={history} userRole={userRole} userEmail={userEmail} />,
    element
  );

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

const element = document.querySelector('#session');

if (element) {
  mount(element, { defaultHistory: createBrowserHistory() });
}

export { mount };
