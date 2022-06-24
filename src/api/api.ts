import axios from 'axios'

export const publicAxios = axios.create({
  baseURL: 'https://hapi.fhir.org/baseR4',
})
