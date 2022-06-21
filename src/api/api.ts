import axios from "axios";

export const publicAxios = axios.create({
  baseURL: 'http://hapi.fhir.org/baseR4'
});
