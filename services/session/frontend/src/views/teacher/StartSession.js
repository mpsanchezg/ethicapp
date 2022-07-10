import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StudentCard from '../../components/StudentCard';
import NextButton from '../../components/NextButton';
import {
  usePostApiRequest,
  useGetApiRequest,
} from '../../hooks/use-api-request';
import { poll } from '../../utils/poll';

const StartSession = ({ history, sessionName, sessionId, workflowName, teacherEmail }) => {
  const [sessionState, setSessionState] = useState('CLOSE_ROOM');
  const [students, setStudents] = useState([]);
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

  const updateStudentsState = (newStudent) => {
    setStudents((previousState) => {
      const isNotNewStudent = previousState.find((student) => student === newStudent);
      console.log('HOLA', isNotNewStudent);
      if (isNotNewStudent) {
        return [...previousState];
      } else {
        return [...previousState, newStudent];
      }
    });
  };

  const startSession = () => {
    startSessionFetch().then(() => {
      if (startSessionResponse.status === 200)
        history.push('/instructional-design');
    });
  };

  const getStudents = () => {
    poll({
      fn: getStudentsFetch,
      interval: 1000,
      maxAttempts: 20,
    });
  };
 
  useEffect(() => {
    openSessionFetch();
    poll({
      fn: getStudentsFetch,
      interval: 3000,
      maxAttempts: 40,
    });
  }, []);

  useEffect(() => {
    if (openSessionResponse && openSessionResponse.status === 200) {
      setSessionState('OPEN_ROOM');
    }
  }, [openSessionResponse]);

  useEffect(() => {  
    if (getStudentsResponse && getStudentsResponse.status === 200) {
      getStudentsResponse.data.map((newStudents) => {
        updateStudentsState(newStudents);
      });
    }
  }, [getStudentsResponse]);

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
          { students.length === 0 ? (
            <>{'Loading...'}</>
          ) : (
            students.map((student, index) => (
              <StudentCard key={index} student={student} details={false} />
            ))
          )}
          <button
            onClick={getStudents}
          >
            {'Update'}
          </button>
          <NextButton
            onClick={startSession}
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
