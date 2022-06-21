import { useQuery } from "react-query";
import { publicAxios } from "../api";

export const useSearchPatientName = (name: string) => {
  return useQuery(["searchPatient", name], async () => {
    console.log(process.env.FHIR_BASE_URL);
    const data = await publicAxios.get(`/Patient?name=${name}`);
    return data.data as any;
  });
};
