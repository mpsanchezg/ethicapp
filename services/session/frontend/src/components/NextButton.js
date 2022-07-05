/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ onClick }) => {
  return (
    <button
      className="flex h-8 rounded-lg bg-gray-400 place-items-center"
      onClick={onClick}
    >
      <p className="flex place-items-center p-3">
        {'Siguiente'}
        <svg
          className="pl-1.5"
          width="18"
          height="20"
          viewBox="0 0 27 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 13C0.895431 13 0 13.8954 0 15C0 16.1046 0.895431 17 2 17L2 13ZM25.591 16.4142C26.372 15.6332 26.372 14.3668 25.591 13.5858L12.863 0.857864C12.082 0.0768158 10.8157 0.0768158 10.0346 0.857864C9.25356 1.63891 9.25356 2.90524 10.0346 3.68629L21.3483 15L10.0346 26.3137C9.25356 27.0948 9.25356 28.3611 10.0346 29.1421C10.8157 29.9232 12.082 29.9232 12.863 29.1421L25.591 16.4142ZM2 17L24.1767 17L24.1767 13L2 13L2 17Z"
            fill="#EEEEEE"
          />
        </svg>
      </p>
    </button>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func,
};

export default NextButton;
