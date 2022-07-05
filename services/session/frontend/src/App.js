/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TeacherApp from './views/teacher';
import StudentApp from './views/student';

const App = ({ userRole, history }) => {
  const [role, setRole] = useState(userRole);
  return (
    <>
      <button onClick={() => {
        if (role === 'teacher') {
          setRole('student');
        }
        else {
          setRole('teacher');
        }
      }}>{role}</button>
      {role === 'teacher' ? (
        <TeacherApp history={history}/>
      ) : (
        <StudentApp history={history} />
      )}
    </>
  );
};

App.propTypes = {
  userRole: PropTypes.string,
  history: PropTypes.object,
  workflowName: PropTypes.string,
};

export default App;
