import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchPatient from "./pages/SearchPatient";
import CreatePatient from "./pages/CreatePatient";
import ActiveVisit from "./pages/ActiveVisit";
import ResponsiveDrawer from "./components/Drawer";
import { ThemeProvider } from "@mui/system";
import { theme } from "./lib/theme";
import Patient from "./pages/Patient";

function Router() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search-patient" element={<SearchPatient />}></Route>
            <Route path="/patient/:identifier" element={<Patient />}></Route>
            <Route path="/create-patient" element={<CreatePatient />}></Route>
            <Route path="/active-visit" element={<ActiveVisit />}></Route>
          </Routes>
        </ResponsiveDrawer>
      </ThemeProvider>
    </>
  );
}

export default Router;
