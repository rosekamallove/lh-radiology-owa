import React, { useState } from "react";
import { useSearchPatientName } from "../api/hooks/patient";
import { useNavigate } from "react-router-dom";

const CreatePatient: React.FC = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

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
      {result.data?.entry.map((e: any, idx: number) => (
        <div
          style={{
            background: "#abb2bf",
            padding: "5px",
            margin: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/patient/${e.resource.id}`)}
          key={idx}
        >
          {e?.resource.name[0].family}
        </div>
      ))}{" "}
    </div>
  );
};

export default CreatePatient;
