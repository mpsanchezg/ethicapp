import api from './index';

const sessionStateUrl = 'http://localhost:3031/api/';

export default {
  getSessionState(sessionId) {
    return api({
      method: 'get',
      url: `${sessionStateUrl}sessions/${sessionId}/state`,
    });
  },
};
