import { useQuery } from "react-query";
import { publicAxios } from "../api";

export const useSearchPatientName = (name?: string, id?: string) => {
  return useQuery(["searchPatient", name, id], async () => {
    if (name) {
      const data = await publicAxios.get(`/Patient?name=${name}`);
      return data.data as any;
    } else if (id) {
      const data = await publicAxios.get(`/Patient/${id}`);
      return data.data as any;
    }
  });
};

export const useGetPatient = (identifier: string) => {
  return useQuery(["getPatient", identifier], async () => {
    const data = await publicAxios.get(`/Patient/${identifier}`);
    return data.data as any;
  });
};
