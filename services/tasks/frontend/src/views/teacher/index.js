import React from 'react';
import ShowTask from './ShowTask';

const TeacherTaskView = ({ userEmail, history }) => {
  const taskId = 0;
  return (
    <div>
      <ShowTask userEmail={userEmail} taskId={taskId} history={history}/> 
    </div>
  )
}

export default TeacherTaskView;
