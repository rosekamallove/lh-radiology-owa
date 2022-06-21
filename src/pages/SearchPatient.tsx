import React, { useState } from "react";
import { useSearchPatientName } from "../api/hooks/patient";

const CreatePatient: React.FC = () => {
  const [name, setName] = useState("pati");

  const result = useSearchPatientName(name);

  return (
    <div>
      <h1>Search Patient</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {result.data?.entry.map((e: any) => (
        <div>{e?.resource.name[0].family}</div>
      ))}{" "}
    </div>
  );
};

export default CreatePatient;
