/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Loading = ({ onLoading }) => {
  useEffect(onLoading, []);

  return <div>{'Loading...'}</div>;
};

Loading.propTypes = {
  onLoading: PropTypes.func,
};

export default Loading;
