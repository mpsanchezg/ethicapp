/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from './index';

const sessionStateUrl = 'http://localhost:3003/api/';

export default {
  getSessionState(sessionId) {
    return api({
      method: 'get',
      url: `${sessionStateUrl}sessions/${sessionId}/state`,
    });
  },
};
