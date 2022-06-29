import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

import '@lh-toolkit/fhir-human-name/fhir-human-name.js'
import '@lh-toolkit/fhir-human-address/fhir-human-address.js'
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js'
import '@lh-toolkit/fhir-birth-date/fhir-birth-date.js'
import '@lh-toolkit/fhir-human-gender/fhir-human-gender.js'
import '@lh-toolkit/fhir-decease-status/fhir-decease-status.js'

import { baseURL } from '../api/api'
import { Edit } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Demographics({ patient }: { patient: any }) {
  const patientURL = `${baseURL}/Patient/${patient?.id}`
  const navigate = useNavigate()

  return (
    <>
      <Paper
        sx={{
          padding: '0px',
          margin: '10px  0 10px 0',
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
          variant="h5"
        >
          Patient
        </Typography>
        <Box sx={{ padding: '5px' }}>
          <Box sx={{ marginBottom: '15px' }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', display: 'flex' }}
            >
              Name:
            </Typography>
            <fhir-human-name url={patientURL} />
          </Box>

          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', display: 'flex', gap: '2px' }}
          >
            Identifier:
          </Typography>
          <fhir-person-identifier url={patientURL} />

          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', display: 'flex' }}
          >
            BirthDate:
          </Typography>
          <fhir-birth-date url={patientURL} />

          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', display: 'flex' }}
          >
            Gender:
          </Typography>
          <fhir-human-gender url={patientURL} />
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', display: 'flex' }}
          >
            Deceased:
          </Typography>
          <fhir-decease-status url={patientURL} />
        </Box>
      </Paper>

      <Paper
        sx={{
          padding: '0px',
          margin: '10px  0 10px 0',
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
            marginTop: '-1px',
            padding: '5px',
          }}
          variant="h5"
        >
          Address
        </Typography>
        <Box sx={{ padding: '5px', marginY: '15px' }}>
          <fhir-human-address url={patientURL} />
        </Box>
      </Paper>
      <Box sx={{ '& button': { mt: 5 } }}>
        <Button
          onClick={() => navigate(`/search-patient/${patient?.id}/edit`)}
          size="large"
          startIcon={<Edit />}
          variant="outlined"
        >
          Edit this patient
        </Button>
      </Box>
    </>
  )
}
