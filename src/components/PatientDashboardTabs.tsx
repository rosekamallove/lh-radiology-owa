import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Overview from './Overview'
import Visits from './Visits'
import Demographics from './Demographics'
import Graphs from './Graphs'
import FormEntry from './FormEntry'
import Radiology from './Radiology'

export default function PatientDashboardTabs({ patient }: { patient: any }) {
  const [value, setValue] = React.useState('1')

  const handleChange = (_e: React.SyntheticEvent, val: string) => setValue(val)

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Patient Dashboard Tabs">
            <Tab label="Demographics" value="1" />
            <Tab label="Visits" value="2" />
            <Tab label="Overview" value="3" />
            <Tab label="Graphs" value="4" />
            <Tab label="Form Entry" value="5" />
            <Tab label="Radiology" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Demographics patient={patient} />
        </TabPanel>
        <TabPanel value="2">
          <Visits />
        </TabPanel>
        <TabPanel value="3">
          <Overview />
        </TabPanel>
        <TabPanel value="4">
          <Graphs />
        </TabPanel>
        <TabPanel value="5">
          <FormEntry />
        </TabPanel>
        <TabPanel value="6">
          <Radiology />
        </TabPanel>
      </TabContext>
    </Box>
  )
}
