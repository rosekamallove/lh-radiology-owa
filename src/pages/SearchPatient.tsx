import { useState } from 'react'
import { useSearchPatientName } from '../api/hooks/patient'
import { Container, Box } from '@mui/system'
import { Paper, TextField, Typography } from '@mui/material'
import SearchTable from '../components/SearchTable'
import '@lh-toolkit/fhir-patient-get/fhir-patient-get.js'
import TableSkeleton from '../components/TableSekeleton'

const CreatePatient = () => {
  const [name, setName] = useState<string | undefined>()
  const [id, setId] = useState<string | undefined>()

  const result = useSearchPatientName(name, id)

  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
      <Typography variant="h3">Search Patient</Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mt: 2, width: '45ch' },
          display: 'flex',
          marginTop: '20px',
          flexDirection: 'column',
        }}
        noValidate
      >
        <Paper
          sx={{ padding: '10px' }}
          variant="outlined"
        >
          <fhir-patient-get></fhir-patient-get>
        </Paper>
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
      {!result.data && (id || name) && <TableSkeleton />}
      {result.data && <SearchTable result={result} />}
    </Container>
  )
}

export default CreatePatient
