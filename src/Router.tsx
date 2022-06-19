import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchPatient from "./pages/SearchPatient";
import CreatePatient from "./pages/CreatePatient";
import ActiveVisit from "./pages/ActiveVisit";
import ResponsiveDrawer from "./components/Drawer";

function Router() {
  return (
    <>
        <ResponsiveDrawer>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search-patient" element={<SearchPatient />}></Route>
            <Route path="/create-patient" element={<CreatePatient />}></Route>
            <Route path="/active-visit" element={<ActiveVisit />}></Route>
          </Routes>
        </ResponsiveDrawer>
    </>
  );
}

export default Router;
