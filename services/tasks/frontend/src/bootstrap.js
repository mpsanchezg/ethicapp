import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (element, { hasPermission, userRole, userEmail, onNavigate, defaultHistory, initialPath }) => {
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
    userRole = 'profesora@ethic.app';
  }

  ReactDOM.render(
    <App
      history={history}
      userEmail={userEmail}
      userRole={userEmail}
      hasPermission={hasPermission || true} // sacar el true
    />,
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

const element = document.querySelector('#ethic-tasks');

if (element) {
  mount(element, { defaultHistory: createBrowserHistory() });
}

export { mount };
