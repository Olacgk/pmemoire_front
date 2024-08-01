import { Outlet } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import Topbar from "../components/LandingPage/Topbar";

export default function LandingLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Topbar/>
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
