/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import PropTypes from 'prop-types';

const SessionCard = ({
  sessionName,
  goToStartSession,
  goToViewSession,
  goToEditSession,
  sessionStudents,
  sessionState,
  deleteSession,
}) => {
  return (
    <div className="flex px-2 rounded-lg min-w-full h-28 bg-gray-400">
      <div className="flex px-2 py-6">
        <button
          className="w-16 px-4 py-3 rounded-full bg-gray-800"
          onClick={goToStartSession}
        >
          <svg
            className="px-1.5"
            width="36"
            height="42"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2485 21L0.248457 0.79274L0.248457 41.2073L35.2485 21Z"
              fill="#EEEEEE"
            />
          </svg>
        </button>
      </div>
      <div className="grid w-2/3 px-3 py-6">
        <p className="text-lg truncate">{sessionName}</p>
        <div className="flex">
          <p className="flex text-sm pr-1">
            <svg
              className="pr-1"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.75C5.92893 0.75 4.25 2.42893 4.25 4.5C4.25 6.57107 5.92893 8.25 8 8.25C10.0711 8.25 11.75 6.57107 11.75 4.5C11.75 2.42893 10.0711 0.75 8 0.75Z"
                fill="black"
              />
              <path
                d="M4 10.25C1.92893 10.25 0.25 11.9289 0.25 14V15.1883C0.25 15.9415 0.795884 16.5837 1.53927 16.7051C5.8181 17.4037 10.1819 17.4037 14.4607 16.7051C15.2041 16.5837 15.75 15.9415 15.75 15.1883V14C15.75 11.9289 14.0711 10.25 12 10.25H11.6591C11.4746 10.25 11.2913 10.2792 11.1159 10.3364L10.2504 10.6191C8.78813 11.0965 7.21187 11.0965 5.74959 10.6191L4.88407 10.3364C4.70869 10.2792 4.52536 10.25 4.34087 10.25H4Z"
                fill="black"
              />
            </svg>
            {`${sessionStudents} students`}
          </p>
          <p className="flex text-sm pl-3">
            <svg
              className="pr-1"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9ZM9.75 4C9.75 3.58579 9.41421 3.25 9 3.25C8.58579 3.25 8.25 3.58579 8.25 4V9C8.25 9.25859 8.38321 9.49895 8.6025 9.636L11.6025 11.511C11.9538 11.7305 12.4165 11.6238 12.636 11.2725C12.8555 10.9212 12.7488 10.4585 12.3975 10.239L9.75 8.58431V4Z"
                fill="black"
              />
            </svg>
            {`State: ${sessionState}`}
          </p>
        </div>
      </div>
      <div className="flex px-3 place-items-center justify-items-end">
        <button
          className="w-12 h-8 m-0.5 rounded bg-gray-600 text-sm text-white px-2 py-1.5"
          onClick={goToViewSession}
        >
          {'View'}
        </button>
        <button
          className="w-12 h-8 m-0.5 rounded bg-gray-600 text-sm text-white px-2.5 py-1.5"
          onClick={goToEditSession}
        >
          {'Edit'}
        </button>
        <button
          className="w-12 h-8 m-0.5 rounded bg-gray-600 text-sm text-white"
          onClick={deleteSession}
        >
          {'Delete'}
        </button>
      </div>
    </div>
  );
};

SessionCard.propTypes = {
  sessionId: PropTypes.number,
  sessionName: PropTypes.string,
  sessionStudents: PropTypes.number,
  sessionState: PropTypes.string,
  goToStartSession: PropTypes.any,
  goToViewSession: PropTypes.any,
  goToEditSession: PropTypes.any,
  deleteSession: PropTypes.func,
};

export default SessionCard;
