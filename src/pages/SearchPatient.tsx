import { useState } from 'react'
import { useSearchPatientName } from '../api/hooks/patient'
import { Container } from '@mui/system'
import { Grid, TextField, Typography } from '@mui/material'
import SearchTable from '../components/SearchTable'
import TableSkeleton from '../components/TableSekeleton'

const CreatePatient = () => {
  const [name, setName] = useState<string | undefined>()
  const [id, setId] = useState<string | undefined>()

  const result = useSearchPatientName(name, id)

  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
      <Typography variant="h3">Search Patient</Typography>
      <Grid
        component="form"
        sx={{
          '& .MuiTextField-root': { mr: 2, mt: 2, width: '45ch' },
          marginTop: '20px',
          flexDirection: 'column',
        }}
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
      </Grid>
      {!result.data && (id || name) && <TableSkeleton />}
      {result.data && <SearchTable result={result} />}
    </Container>
  )
}

export default CreatePatient
