import React from 'react';
import PropTypes from 'prop-types';

import TeacherApp from './views/teacher';
import StudentApp from './views/student';

const App = ({ userEmail, userRole, history }) => {
  return (
    <>
      { userRole === 'teacher' ? (
        <TeacherApp teacherEmail={userEmail} history={history}/>
      ) : (
        <StudentApp studentEmail={userEmail} history={history} />
      ) }
    </>
  );
};

App.propTypes = {
  userRole: PropTypes.string,
  history: PropTypes.object,
  workflowName: PropTypes.string,
  userEmail: PropTypes.string,
};

export default App;
