import React from 'react';
import PropTypes from 'prop-types';

import TeacherApp from './views/teacher';
import StudentApp from './views/student';

const App = ({ userRole, history }) => {
  return (
    <>
      { userRole === 'teacher' ? (
        <TeacherApp history={history}/>
      ) : (
        <StudentApp history={history} />
      ) }
    </>
  );
};

App.propTypes = {
  userRole: PropTypes.string,
  history: PropTypes.object,
  workflowName: PropTypes.string,
};

export default App;
