import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StudentCard from '../../components/StudentCard';
import NextButton from '../../components/NextButton';
import {
  usePostApiRequest,
  useGetApiRequest,
} from '../../hooks/use-api-request';

const StartSession = ({ history, sessionName, sessionId, workflowName, teacherEmail }) => {
  const [sessionState, setSessionState] = useState('CLOSE_ROOM');
  const [students, setStudents] = useState([]);
  const [startWorkflowResponse, startWorkflowError, startWorkflowFetch] =
    usePostApiRequest('netflix-conductor', {
      wf_name: 'teacher_initialize_session',
    });
  const [openSessionResponse, , openSessionFetch] = usePostApiRequest(
    `sessions/${sessionId}/open`,
    {
      teacherEmail: teacherEmail,
    }
  );
  const [getStudentsResponse, , getStudentsFetch] = useGetApiRequest(
    `sessions/${sessionId}/students`
  );
  const [startSessionResponse, , startSessionFetch] = usePostApiRequest(
    `sessions/${sessionId}/start`,
    {
      teacherEmail: teacherEmail,
    }
  );

  useEffect(() => {
    startWorkflowFetch().then(() => {
      if (startWorkflowResponse) {
        console.log('STARTWF', startWorkflowResponse);
      } else {
        console.log(startWorkflowError);
      }
    });

    openSessionFetch().then(() => {
      console.log('STARTSESSION', openSessionResponse);
      setSessionState('OPEN_ROOM');
    });
  }, []);

  return (
    <div className="w-full md:w-7/12 p-8 bg-gray-100">
      <p className="text-2xl">{sessionName}</p>
      <p className="text-sm">{workflowName}</p>
      <p className="text-xl py-4">{'Sala de espera'}</p>
      {/* Esto debe hacer polling a conductor para ver que estudiantes han ingresado y obtener id, nombre, email de estos */}
      {sessionState === 'CLOSE_ROOM' ? (
        <></>
      ) : (
        <div>
          {students.length === 0 ? (
            <>{'Loading...'}</>
          ) : (
            students.map((student) => (
              <StudentCard key={student.id} student={student} details={false} />
            ))
          )}
          <button
            onClick={() => {
              getStudentsFetch().then((data) => {
                console.log(data);
                if (getStudentsResponse.students) {
                  setStudents(() => getStudentsResponse?.students);
                  console.log('STUDENTS', students);
                }
              });
            }}
          >
            {'Update'}
          </button>
          <NextButton
            onClick={() => {
              startSessionFetch().then(() => {
                if (startSessionResponse)
                  history.push('/instructional-design');
              });
            }}
          />
        </div>
      )}
    </div>
  );
};

StartSession.propTypes = {
  history: PropTypes.any.isRequired,
  sessionName: PropTypes.string,
  sessionId: PropTypes.number.isRequired,
  workflowName: PropTypes.string,
  teacherEmail: PropTypes.string,
};

export default StartSession;
