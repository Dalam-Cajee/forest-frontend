import axios from "axios"

const client = axios.create({ baseURL: "http://10.179.2.82:8082" })
// const client = axios.create({ baseURL: 'http://localhost:8080' })
// const client = axios.create({ baseURL: "http://10.179.2.82:8082/wildlife-mis" })

export const request = ({ ...options }) => {
  if (localStorage.getItem("token"))
    client.defaults.headers.common.Authorization = `Bearer token`

  const onSuccess = (response) => response
  const onError = (error) => {
    throw error
  }

  return client(options).then(onSuccess).catch(onError)
}
