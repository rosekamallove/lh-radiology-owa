import { useParams } from "react-router-dom";
import { useGetPatient } from "../api/hooks/patient";

export default function Patient() {
  const { identifier } = useParams();
  const patient = useGetPatient(identifier ?? "");
  return (
    <div style={{ margin: "50px" }}>
      <div dangerouslySetInnerHTML={{ __html: patient?.data?.text?.div }} />
      <pre>{JSON.stringify(patient?.data, null, 2)}</pre>
    </div>
  );
}
