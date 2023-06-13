import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class service {
    
    get_servicios_service() {
        const url = `${API_URL}/app/api/servicios/`;
        return axios.get(url);
    }

    get_proyectos_service(id) {
        const url = `${API_URL}/app/api/servicio/` + id + `/proyectos/`;
        return axios.get(url);
    }
}