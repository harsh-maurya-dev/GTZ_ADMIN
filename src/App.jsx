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
import ChallengeView from './pages/ChallengeView';
import ContractTemplate from './pages/ContractTemplate';
import ContractTempleteAdd from './pages/ContractTempleteAdd';
import ContractTempleteEdit from './pages/ContractTempleteEdit';
import ContractView from './pages/ContractView';
import RiskTriggersAdd from './pages/RiskTriggersAdd';
import RiskTriggersView from './pages/RiskTriggersView';
import RiskTriggersEdit from './pages/RiskTriggersEdit';
import RiskNotification from './pages/RiskNotification';
import PropAccountView from './pages/PropAccountView';
import PropAccountEdit from './pages/PropAccountEdit';
import PlanManagementAdd from './pages/PlanManagementAdd';
import PlanManagementEdit from './pages/PlanManagementEdit';
import PlanManagementView from './pages/PlanManagementView';
import Competitions from './pages/Competitions';
import CompetitionAdd from './pages/CompetitionAdd';
import CompetitionsView from './pages/CompetitionsView';
import CompetitionsEdit from './pages/CompetitionsEdit';
import ReportsManagementAdd from './pages/ReportsManagementAdd';
import ReportsManagementEdit from './pages/ReportsManagementEdit';
import ReportsManagementView from './pages/ReportsManagementView';
import ContentManagementAdd from './pages/ContentManagementAdd';
import ContentManagementEdit from './pages/ContentManagementEdit';
import ContentManagementView from './pages/ContentManagementView';
import FAQEdit from './pages/FAQEdit';
import FAQAdd from './pages/FAQAdd';
import FAQView from './pages/FAQView';
import DownloadAdd from './pages/DownloadAdd';
import DownloadEdit from './pages/DownloadEdit';
import VideoManagementAdd from './pages/VideoManagementAdd';
import VideoManagementEdit from './pages/VideoManagementEdit';
import VideoManagementView from './pages/VideoManagementView';
import UserManagementAdd from './pages/UserManagementAdd';
import UserManagementEdit from './pages/UserManagementEdit';
import AnnouncementAdd from './pages/AnnouncementAdd';
import AnnouncementEdit from './pages/AnnouncementEdit';
import DiscountCodesGlobalView from './pages/DiscountCodesGlobalView';
import DiscountCodesGlobalEdit from './pages/DiscountCodesGlobalEdit';
import DiscountCodesGlobalAdd from './pages/DiscountCodesGlobalAdd';
import OrderEdit from './pages/OrderEdit';
import OrderView from './pages/OrderView';

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
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/competitions_add" element={<CompetitionAdd />} />
            <Route path="/competitions_view" element={<CompetitionsView />} />
            <Route path="/competitions_edit/:id" element={<CompetitionsEdit />} />
            <Route path="/customers_management" element={<Customer />} />
            <Route path="/customers_view/:id" element={<CustomerView />} />
            <Route path="/customer_add" element={<CustomerAdd />} />
            <Route path="/customer_edit/:id" element={<CustomerEdit />} />
            <Route path="/trading_platform" element={<TradingPlatform />} />
            <Route path="/challenge_management" element={<Challenge />} />
            <Route path="/challenge_add" element={<ChallengeAdd />} />
            <Route path="/challenge_edit/:id" element={<ChallengeEdit />} />
            <Route path="/challenge_view/:id" element={<ChallengeView />} />
            <Route path="/orders_management" element={<Order />} />
            <Route path="/orders_management_edit/:id" element={<OrderEdit />} />
            <Route path="/orders_management_view" element={<OrderView />} />
            <Route path="/contract_management" element={<Contract />} />
            <Route path="/contract_view" element={<ContractView />} />
            <Route path="/contract_templete" element={<ContractTemplate />} />
            <Route path="/contract_templete_add" element={<ContractTempleteAdd />} />
            <Route path="/contract_templete_edit/:id" element={<ContractTempleteEdit />} />
            <Route path="/pending_upgrades" element={<PendingUpgrades />} />
            <Route path="/risk_triggers" element={<RiskTriggers />} />
            <Route path="/risk_triggers_add" element={<RiskTriggersAdd />} />
            <Route path="/risk_triggers_view" element={<RiskTriggersView />} />
            <Route path="/risk_triggers_edit/:id" element={<RiskTriggersEdit />} />
            <Route path="/risk_notification" element={<RiskNotification />} />
            <Route path="/affiliates_management" element={<Affiliates />} />
            <Route path="/affiliate_payout_management" element={<AffiliatePayout />} />
            <Route path="/plans_management" element={<PlansManagement />} />
            <Route path="/plans_management_add" element={<PlanManagementAdd />} />
            <Route path="/plans_management_edit/:id" element={<PlanManagementEdit />} />
            <Route path="/plans_management_view" element={<PlanManagementView />} />
            <Route path="/prop_account_management" element={<PropAccount />} />
            <Route path="/prop_account_view" element={<PropAccountView />} />
            <Route path="/prop_account_edit/:id" element={<PropAccountEdit />} />
            <Route path="/prop_payout_management" element={<PropPayout />} />
            <Route path="/reports_management" element={<ReportManagement />} />
            <Route path="/reports_management_add" element={<ReportsManagementAdd />} />
            <Route path="/reports_management_edit/:id" element={<ReportsManagementEdit />} />
            <Route path="/reports_management_view" element={<ReportsManagementView />} />
            <Route path="/content_management" element={<ContentManagement />} />
            <Route path="/content_management_add" element={<ContentManagementAdd />} />
            <Route path="/content_management_edit/:id" element={<ContentManagementEdit />} />
            <Route path="/content_management_view/:id" element={<ContentManagementView />} />
            <Route path="/FAQ_management" element={<FAQ />} />
            <Route path="/FAQ_management_add" element={<FAQAdd />} />
            <Route path="/FAQ_management_edit/:id" element={<FAQEdit />} />
            <Route path="/FAQ_management_view/:id" element={<FAQView />} />
            <Route path="/download_management" element={<Download />} />
            <Route path="/download_management_add" element={<DownloadAdd />} />
            <Route path="/download_management_edit/:id" element={<DownloadEdit />} />
            <Route path="/video_management" element={<VideoManagement />} />
            <Route path="/video_management_add" element={<VideoManagementAdd />} />
            <Route path="/video_management_edit/:id" element={<VideoManagementEdit />} />
            <Route path="/video_management_view/:id" element={<VideoManagementView />} />
            <Route path="/image_management" element={<ImageManagement />} />
            <Route path="/users_management" element={<UserManagement />} />
            <Route path="/users_management_add" element={<UserManagementAdd />} />
            <Route path="/users_management_edit/:id" element={<UserManagementEdit />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/announcement_add" element={<AnnouncementAdd />} />
            <Route path="/announcement_edit/:id" element={<AnnouncementEdit />} />
            <Route path="/discount_codes_management" element={<DiscountCodes />} />
            <Route path="/discount_codes_management_global_add" element={<DiscountCodesGlobalAdd />} />
            <Route path="/discount_codes_management_global_view" element={<DiscountCodesGlobalView />} />
            <Route path="/discount_codes_management_global_edit/:id" element={<DiscountCodesGlobalEdit />} />
            <Route path="/discount_codes_management_breach_view" element={<DiscountCodes />} />
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
