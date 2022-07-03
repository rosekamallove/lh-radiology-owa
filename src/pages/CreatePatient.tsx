import { CssBaseline, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect, useRef } from 'react'
import { baseURL } from '../api/api'

import '@lh-toolkit/fhir-create-patient/fhir-create-patient.js'

const CreatePatient: React.FC = () => {
  const createPatientRef = useRef()

  useEffect(() => {
    console.log(createPatientRef)
  }, [createPatientRef])

  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
      <CssBaseline />
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
          Create Patient
        </Typography>
        <Box sx={{ m: 2, 'mwc-button': { display: 'none' } }}>
          <fhir-create-patient
            ref={createPatientRef}
            url={`${baseURL}/Patient`}
          />
        </Box>
      </Paper>
    </Container>
  )
}

export default CreatePatient
