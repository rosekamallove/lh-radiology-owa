import { ThemeProvider } from '@mui/system'
import { Route, Routes } from 'react-router-dom'
import ResponsiveDrawer from './components/Drawer'
import EditPatient from './components/EditPatient'
import { theme } from './lib/theme'
import ActiveVisit from './pages/ActiveVisit'
import CreatePatient from './pages/CreatePatient'
import Home from './pages/Home'
import Patient from './pages/Patient'
import SearchPatient from './pages/SearchPatient'

function Router() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-patient" element={<SearchPatient />} />
            <Route path="/search-patient/:identifier" element={<Patient />} />
            <Route
              path="/search-patient/:identifier/edit"
              element={<EditPatient />}
            />
            <Route path="/create-patient" element={<CreatePatient />} />
            <Route path="/active-visit" element={<ActiveVisit />} />
          </Routes>
        </ResponsiveDrawer>
      </ThemeProvider>
    </>
  )
}

export default Router
