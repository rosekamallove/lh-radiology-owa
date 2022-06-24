import React, { useState } from "react";
import { useSearchPatientName } from "../api/hooks/patient";
import { useNavigate } from "react-router-dom";
import { Container, Box } from "@mui/system";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Typography,
  tableCellClasses,
  TableContainer,
  Paper,
  TableBody,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { OpenInNew } from "@mui/icons-material";

const CreatePatient: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string | undefined>();
  const [id, setId] = useState<string | undefined>();

  const result = useSearchPatientName(name, id);

  return (
    <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
      <Typography variant="h3">Search Patient</Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 2, width: "45ch" },
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
        }}
        noValidate
      >
        <TextField
          label="Enter Name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="number"
          label="Enter Identifier"
          defaultValue={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Box>
      {result.data && (
        <TableContainer component={Paper} sx={{ my: 5 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontWeight: "bold" }}>
                <StyledTableCell>S. No</StyledTableCell>
                <StyledTableCell>Identifier</StyledTableCell>
                <StyledTableCell>Family Name</StyledTableCell>
                <StyledTableCell>Given Name</StyledTableCell>
                <StyledTableCell>Gender</StyledTableCell>
                <StyledTableCell>Full URL</StyledTableCell>
                <StyledTableCell>Dashboard</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.data?.entry?.map((e: any, idx: number) => (
                <StyledTableRow key={idx}>
                  <StyledTableCell component="th" scope="row">
                    {idx}
                  </StyledTableCell>
                  <StyledTableCell>{e.resource?.id}</StyledTableCell>
                  <StyledTableCell>
                    {e.resource?.name?.[0]?.family}
                  </StyledTableCell>
                  <StyledTableCell>
                    {e.resource?.name?.[0]?.given?.[0]}
                  </StyledTableCell>
                  <StyledTableCell sx={{ textTransform: "capitalize" }}>
                    {e.resource?.gender}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Link href={e.fullUrl}>{e.fullUrl}</Link>
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => navigate(`/patient/${e.resource?.id}`)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Link>
                      <OpenInNew />
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default CreatePatient;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.secondary.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
