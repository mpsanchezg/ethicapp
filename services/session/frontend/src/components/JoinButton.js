/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import PropTypes from 'prop-types';

const JoinButton = ({ onJoin }) => {
  return (
    <button className="flex h-8 rounded-lg bg-gray-400 place-items-center" onClick={onJoin}>
      {'Unirme a la sesión'}
    </button>
  );
};

JoinButton.propTypes = {
  onJoin: PropTypes.func,
};

export default JoinButton;
