import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const mount = (element, { userRole, onNavigate, defaultHistory, initialPath }) => {
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

  ReactDOM.render(
    <App history={history} userRole={userRole}/>,
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
