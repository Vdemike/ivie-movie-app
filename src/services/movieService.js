import http from "../http-common";

class MovieDataService {
  getAll() {
    return http.get("/movies");
  }

  get(id) {
    return http.get(`/movies/${id}`);
  }

  create(data) {
    return http.post("/movies", data);
  }

  update(id, data) {
    return http.put(`/movies/${id}`, data);
  }

  delete(id) {
    return http.delete(`/movies/${id}`);
  }

  deleteAll() {
    return http.delete(`/movies`);
  }

  findByTitle(title) {
    return http.get(`/movies?title=${title}`);
  }
}

export default new MovieDataService();
