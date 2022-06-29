import { Alert, Button, Paper, Snackbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetPatient } from '../api/hooks/patient'
import { Edit } from '@mui/icons-material'
import { useMutation } from 'react-query'
import { publicAxios } from '../api/api'

import '@lh-toolkit/fhir-patient-get/fhir-patient-get.js'

export default function EditPatient() {
  const { identifier } = useParams()
  const { data: patient } = useGetPatient(identifier ?? '')

  const patientRef = useRef()

  const [nodeReady, setNodeReady] = useState(false)
  const [rootelem, setRootElem] = useState<any>({})

  const [successToast, setSuccessToast] = useState(false)
  const [errorToast, setErrorToast] = useState(false)

  useEffect(() => {
    if (patientRef.current && nodeReady === false) {
      setNodeReady(true)
      setRootElem(patientRef.current)
    }
  }, [nodeReady])

  // Mutating (updating) Patient
  const updatePatient = async (updatedPatient: any) => {
    return publicAxios.put(`/Patient/${identifier}`, updatedPatient)
  }

  const mutation = useMutation(updatePatient, {
    onSuccess: () => setSuccessToast(true),
    onError: (error) => {
      setErrorToast(true)
      console.log(error)
    },
  })

  const handleUpdate = async () => {
    mutation.mutate(rootelem.value)
  }

  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
      <Paper
        sx={{ padding: '10px', margin: '10px  0 10px 0' }}
        variant="outlined"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">{`${patient?.name?.[0].prefix?.[0] ?? ''} ${
            patient?.name?.[0].given?.[0]
          } ${patient?.name?.[0]?.family}`}</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            ID: {patient?.id}
          </Typography>
        </Box>
      </Paper>
      <Paper
        sx={{ padding: '10px', margin: '10px  0 50px 0' }}
        variant="outlined"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px',
          }}
        >
          <Typography variant="h5">Editing Patient</Typography>
        </Box>
        <Box>
          <fhir-patient-get
            value={JSON.stringify(patient)}
            ref={patientRef}
            patientMarriage="false"
          />
        </Box>
        <Box sx={{ '& button': { mt: 5 } }}>
          <Button
            onClick={() => handleUpdate()}
            size="large"
            startIcon={<Edit />}
            variant="outlined"
          >
            Save Edit
          </Button>
        </Box>
      </Paper>

      {/*Toasts*/}
      <Snackbar
        open={successToast}
        autoHideDuration={6000}
        onClose={() => setSuccessToast(false)}
      >
        <Alert
          onClose={() => setSuccessToast(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Updated Succesfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorToast}
        autoHideDuration={6000}
        onClose={() => setErrorToast(false)}
      >
        <Alert
          onClose={() => setErrorToast(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          Error when updating Patient, see console for more info.
        </Alert>
      </Snackbar>
    </Container>
  )
}
