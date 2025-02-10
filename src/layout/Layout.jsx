import { Outlet } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  // const handleNavToggle = () => {
  //   setIsOpenNav(!isOpenNav)
  // }
  return (
    <>
      <div class="container-fluid comman-px">
        <div class="row">
          <div className="col-3 sidebar-wrapper">
            <Sidebar />
          </div>
          <div class="col-9 content-part-wrapper">
            <div class="content-part">
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
