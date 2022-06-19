import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchPatient from "./pages/SearchPatient";
import CreatePatient from "./pages/CreatePatient";
import ActiveVisit from "./pages/ActiveVisit";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-patient" element={<SearchPatient />}></Route>
        <Route path="/create-patient" element={<CreatePatient />}></Route>
        <Route path="/active-visit" element={<ActiveVisit />}></Route>
      </Routes>
    </>
  );
}

export default Router;
