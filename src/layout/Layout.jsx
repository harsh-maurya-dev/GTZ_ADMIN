import { Outlet } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { ProfileProvider } from "../context/ProfileContext";

const Layout = () => {
  // const handleNavToggle = () => {
  //   setIsOpenNav(!isOpenNav)
  // }
  return (
    <>
      <div className="container-fluid comman-px">
        <div className="row">
          <div className="col-3 sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="col-9 content-part-wrapper">
            <div className="content-part">
                <Header />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
