import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const CreatePatient: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img width={400} src="https://librehealth.io/img/logo.png" alt="Logo" />
        <Typography variant="h3" color="#757270">
          Welcome on LibreHealth Toolkit
        </Typography>
      </Box>
    </Container>
  )
}

export default CreatePatient
