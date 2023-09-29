import axios from './axios'

const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
}

const postCreateUser = (name, job) => {
  return axios.post('/api/user', { name, job })
}

export { fetchAllUser, postCreateUser }