import http from "../http-common";

class DataService {
    create(data) {
        return http.post("/signUp", data);
    }
}

export default new DataService();