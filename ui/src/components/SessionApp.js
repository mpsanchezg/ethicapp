import { mount } from 'session/SessionApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const SessionApp = ({ userEmail, userRole }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current,
      {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;

          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
        userEmail,
        userRole, 
      });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default SessionApp;
