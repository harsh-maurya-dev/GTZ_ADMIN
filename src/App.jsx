import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../src/assets/css/responsive.css";
import "../src/assets/css/style.css";
import Layout from './layout/Layout';
import Dashboards from './pages/Dashboard';
import NoPage from './pages/NoPage';
import Customer from './pages/Customer';
import TradingPlatform from './pages/TradingPlatform';
import Order from './pages/Order';
import Challenge from './pages/Challenge';
import Contract from './pages/Contract';
import PendingUpgrades from './pages/PendingUpgrades';
import RiskTriggers from './pages/RiskTriggers';
import PropAccount from './pages/PropAccount';
import ReportManagement from './pages/ReportManagement';
import AffiliatePayout from './pages/AffiliatePayout';
import ContentManagement from './pages/ContentManagement';
import FAQ from './pages/FAQ';
import Download from './pages/Download';
import VideoManagement from './pages/VideoManagement';
import ImageManagement from './pages/ImageManagement';
import UserManagement from './pages/UserManagement';
import Announcement from './pages/Announcement';
import DiscountCodes from './pages/DiscountCodes';
import EmailManagement from './pages/EmailManagement';
import PropPayout from './pages/PropPayout';
import PlansManagement from './pages/PlansManagement';
import Login from './pages/login_auth/Login';
import Affiliates from './pages/Affiliates';
import PrivateRoute from './auth/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import ForgetPassword from './pages/login_auth/ForgetPassword';
import OTP from './pages/login_auth/OTP';
import ResetPassword from './pages/login_auth/ResetPassword';
import ProfileInfo from './pages/ProfileInfo';
import CustomerAdd from './pages/CustomerAdd';
import ChallengeAdd from './pages/ChallengeAdd';
import ChallengeEdit from './pages/ChallengeEdit';
import CustomerView from './pages/CustomerView';
import CustomerEdit from './pages/CustomerEdit';

function App() {
  return (

    <BrowserRouter>
      <ToastContainer autoClose={1000}/>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset_password" element={<ResetPassword />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboards />} />
            <Route path="/customers_management" element={<Customer />} />
            <Route path="/customers_view/:id" element={<CustomerView />} />
            <Route path="/customer_add" element={<CustomerAdd />} />
            <Route path="/customer_edit/:id" element={<CustomerEdit />} />
            <Route path="/trading_platform" element={<TradingPlatform />} />
            <Route path="/challenge_management" element={<Challenge />} />
            <Route path="/challenge_add" element={<ChallengeAdd />} />
            <Route path="/challenge_edit/:id" element={<ChallengeEdit />} />
            <Route path="/orders_management" element={<Order />} />
            <Route path="/contract_management" element={<Contract />} />
            <Route path="/pending_upgrades" element={<PendingUpgrades />} />
            <Route path="/risk_triggers" element={<RiskTriggers />} />
            <Route path="/affiliates_management" element={<Affiliates />} />
            <Route path="/affiliate_payout_management" element={<AffiliatePayout />} />
            <Route path="/plans_management" element={<PlansManagement />} />
            <Route path="/prop_account_management" element={<PropAccount />} />
            <Route path="/prop_payout_management" element={<PropPayout />} />
            <Route path="/reports_management" element={<ReportManagement />} />
            <Route path="/content_management" element={<ContentManagement />} />
            <Route path="/FAQ_management" element={<FAQ />} />
            <Route path="/download_management" element={<Download />} />
            <Route path="/video_management" element={<VideoManagement />} />
            <Route path="/image_management" element={<ImageManagement />} />
            <Route path="/users_management" element={<UserManagement />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/discount_codes_management" element={<DiscountCodes />} />
            <Route path="/email_management" element={<EmailManagement />} />

            {/* Profile Routes */}
            <Route path="/profile_info" element={<ProfileInfo />} />
            <Route path="/help" element={<EmailManagement />} />
            <Route path="/settings" element={<EmailManagement />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
