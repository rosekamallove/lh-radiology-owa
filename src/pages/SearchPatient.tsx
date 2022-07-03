import { useState } from 'react'
import { useSearchPatientName } from '../api/hooks/patient'
import { Container } from '@mui/system'
import { Box, Grid, Paper, TextField, Typography } from '@mui/material'
import SearchTable from '../components/SearchTable'
import TableSkeleton from '../components/TableSekeleton'

const CreatePatient = () => {
  const [name, setName] = useState<string | undefined>()
  const [id, setId] = useState<string | undefined>()
  const [toFetch, setToFetch] = useState('100')

  const result = useSearchPatientName(name, id, toFetch)

  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
      <Paper
        sx={{
          padding: '0px',
          marginY: '40px',
          border: '2px solid #F59031',
          borderRadius: '5px',
        }}
        variant="outlined"
      >
        <Typography
          sx={{
            color: 'white',
            fontWeight: 'bold',
            background: '#F59031',
            padding: '5px',
          }}
          variant="h4"
        >
          Search Patient
        </Typography>
        <Grid
          component="form"
          sx={{
            margin: '20px',
            flexDirection: 'column',
          }}
        >
          <TextField
            sx={{ width: '45ch', mt: 2, mr: 2 }}
            label="Enter Name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ width: '45ch', mt: 2, mr: 2 }}
            type="number"
            label="Enter Identifier"
            defaultValue={id}
            onChange={(e) => {
              setName(undefined)
              setId(e.target.value)
            }}
          />
          <TextField
            sx={{ width: '10%', mt: 2, mr: 2 }}
            value={toFetch}
            type="number"
            label="Results"
            onChange={(e) => setToFetch(e.target.value)}
          />
        </Grid>
        <Box sx={{ m: 2 }}>
          {!result.data && (id || name) && <TableSkeleton />}
          {result.data && <SearchTable result={result} />}
        </Box>
      </Paper>
    </Container>
  )
}

export default CreatePatient
