import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
import { ExpandMoreSharp } from '@mui/icons-material'
import { Box } from '@mui/system'
import { useParams } from 'react-router-dom'
import { useGetPatient } from '../api/hooks/patient'
import PatientDashboardTabs from '../components/PatientDashboardTabs'

export default function Patient() {
  const { identifier } = useParams()
  const { data: patient } = useGetPatient(identifier ?? '')

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
        variant="outlined"
        sx={{ padding: '10px', margin: '10px 0 10px 0', overflowY: 'hidden' }}
      >
        <PatientDashboardTabs patient={patient} />

        {/*JSON Response*/}
        <Divider />
        <Accordion sx={{ marginY: '20px' }} variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMoreSharp />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{ fontWeight: 'bold', width: '33%', flexShrink: 0 }}
            >
              JSON Response
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div dangerouslySetInnerHTML={{ __html: patient?.text?.div }} />
            <pre>{JSON.stringify(patient, null, 2)}</pre>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  )
}
