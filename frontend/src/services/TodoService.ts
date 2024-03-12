import axios from "axios";

export default class TodoService {
    getAllTodos() {
        return axios.get('/api/todos');
    }
}