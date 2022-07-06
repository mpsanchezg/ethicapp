import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (element) => {

  ReactDOM.render(<App />, element);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log(nextPathname);
    },
  };
};

const element = document.querySelector('#ethic-instructional-design');

if (element) {
  mount(element);
}

export { mount };

