import http from '../utils/http';

const baseUrl = '/club';

const ClubSerice = {
  list() {
    return http.get(baseUrl);
  },

  get(id) {
    return http.get(`${baseUrl}/${id}`);
  },

  post(data) {
    return http.post(baseUrl, data);
  },

  delete(id) {
    return http.delete(`${baseUrl}/${id}`);
  },

  byUser(id) {
    return http.get(`${baseUrl}/byUser/${id}`);
  },

  byUserCurrent() {
    return http.get(`${baseUrl}/byUser/current`);
  },

  join(data) {
    return http.post(`${baseUrl}/join`, data);
  },
};

export default ClubSerice;
