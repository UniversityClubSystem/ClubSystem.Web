import http from '../utils/http';

const baseUrl = '/post';

const PostService = {
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

  postFeed(id) {
    return http.get(`${baseUrl}/postFeed/${id}`);
  },
};

export default PostService;
