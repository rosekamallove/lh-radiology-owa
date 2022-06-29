import axios from 'axios'

export const baseURL = 'https://hapi.fhir.org/baseR4'

export const publicAxios = axios.create({ baseURL })
