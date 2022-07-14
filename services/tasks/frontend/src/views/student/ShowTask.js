import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useGetApiRequest } from '../../hooks/use-api-request';

const endpoint = 'tasks'

const ShowTask = ({ userEmail, taskId, history }) => {
  const [response, error, doFetch] = useGetApiRequest(`${endpoint}/${taskId}`)

  useEffect(() => {
    doFetch()
  }, [])

  return (
    <div>
      <p>{userEmail}</p>
      <p>{response ? JSON.stringify(response.data) : '...'}</p>
    </div>
  )
}

ShowTask.propTypes = {
  userEmail: PropTypes.string,
  taskId: PropTypes.number,
  history: PropTypes.any
}

export default ShowTask;
