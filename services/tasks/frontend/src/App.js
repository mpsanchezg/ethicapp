import React from 'react';
import PropTypes from 'prop-types';

import TeacherTaskView from './views/teacher/index';
import StudentTaskView from './views/student';

const App = ({ hasPermission, userRole, userEmail, history }) => {
  return (
    <>
      {
        hasPermission ?
          ( userRole === 'teacher' ? (
            <TeacherTaskView userEmail={userEmail} history={history} />
          ) : (
            <StudentTaskView userEmail={userEmail} history={history} />
          )) : (
          <div>
            <p>{'ERROR 401: Unauthorized'}</p>
          </div>
        )
      }
    </>
  )
}

App.propTypes = {
  hasPermission: PropTypes.bool,
  userEmail: PropTypes.string,
  userRole: PropTypes.string,
  history: PropTypes.any
}

export default App;
