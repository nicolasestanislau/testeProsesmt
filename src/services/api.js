import axios from "axios";

// criando uma instancia de axios
const api = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1',
});

export const getTask = async (uf) => {
    const response = await api.get(`brazil/uf/${uf}`)

    return response
}

export const getDate = async (date2) => {
    const response = await api.get(`brazil/${date2}`)

    return response
}

export const getCountrie = async (data) => {
    const response = await api.get(data)

    return response
}

export default api;
