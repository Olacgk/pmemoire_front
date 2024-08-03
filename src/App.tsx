import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "./layouts/landingLayout";
import Home from "./pages/landing-page/home";
import Login from "./pages/landing-page/login";
import DashboardLayout from "./layouts/dashboardLayout";
import Expert from "./pages/dashboard-pages/expert";
import { Refine } from "@refinedev/core";
import { myDataProvider } from "./providers/myDataProvider";
import Accueil from "./pages/dashboard-pages/accueil";
import NotFoundPage from "./pages/dashboard-pages/404";

function App() {
  return (
    <BrowserRouter>
      <Refine resources={[{ name: "Expert" }, { name: "Lecteur" }]} dataProvider={myDataProvider}>
        <Routes>
          <Route path="" element={<LandingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Accueil/>}/>
            <Route path="experts" element={<Expert />} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
}

export default App;
