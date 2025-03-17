import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import "../src/assets/css/responsive.css";
import "../src/assets/css/style.css";
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './auth/PrivateRoute';
import InitialLoading from './loaders/InitialLoading';
import { ProfileProvider } from './context/ProfileContext';

// Lazy loading Layout
const Layout = lazy(() => import('./layout/Layout'));

// Lazy loading Auth pages
const Login = lazy(() => import('./pages/login_auth/Login'));
const ForgetPassword = lazy(() => import('./pages/login_auth/ForgetPassword'));
const OTP = lazy(() => import('./pages/login_auth/OTP'));
const ResetPassword = lazy(() => import('./pages/login_auth/ResetPassword'));

// Lazy loading Dashboard
const Dashboards = lazy(() => import('./pages/Dashboard'));
const NoPage = lazy(() => import('./pages/NoPage'));

// Lazy loading Customer Management
const Customer = lazy(() => import('./pages/Customer'));
const CustomerAdd = lazy(() => import('./pages/CustomerAdd'));
const CustomerView = lazy(() => import('./pages/CustomerView'));
const CustomerEdit = lazy(() => import('./pages/CustomerEdit'));

// Lazy loading Trading Platform
const TradingPlatform = lazy(() => import('./pages/TradingPlatform'));

// Lazy loading Challenge Management
const Challenge = lazy(() => import('./pages/Challenge'));
const ChallengeAdd = lazy(() => import('./pages/ChallengeAdd'));
const ChallengeEdit = lazy(() => import('./pages/ChallengeEdit'));
const ChallengeView = lazy(() => import('./pages/ChallengeView'));

// Lazy loading Order Management
const Order = lazy(() => import('./pages/Order'));
const OrderEdit = lazy(() => import('./pages/OrderEdit'));
const OrderView = lazy(() => import('./pages/OrderView'));

// Lazy loading Contract Management
const Contract = lazy(() => import('./pages/Contract'));
const ContractView = lazy(() => import('./pages/ContractView'));
const ContractTemplate = lazy(() => import('./pages/ContractTemplate'));
const ContractTempleteAdd = lazy(() => import('./pages/ContractTempleteAdd'));
const ContractTempleteEdit = lazy(() => import('./pages/ContractTempleteEdit'));

// Lazy loading Pending Upgrades
const PendingUpgrades = lazy(() => import('./pages/PendingUpgrades'));

// Lazy loading Risk Management
const RiskTriggers = lazy(() => import('./pages/RiskTriggers'));
const RiskTriggersAdd = lazy(() => import('./pages/RiskTriggersAdd'));
const RiskTriggersView = lazy(() => import('./pages/RiskTriggersView'));
const RiskTriggersEdit = lazy(() => import('./pages/RiskTriggersEdit'));
const RiskNotification = lazy(() => import('./pages/RiskNotification'));

// Lazy loading Affiliates
const Affiliates = lazy(() => import('./pages/Affiliates'));
const AffiliatePayout = lazy(() => import('./pages/AffiliatePayout'));

// Lazy loading Plans Management
const PlansManagement = lazy(() => import('./pages/PlansManagement'));
const PlanManagementAdd = lazy(() => import('./pages/PlanManagementAdd'));
const PlanManagementEdit = lazy(() => import('./pages/PlanManagementEdit'));
const PlanManagementView = lazy(() => import('./pages/PlanManagementView'));

// Lazy loading Prop Account Management
const PropAccount = lazy(() => import('./pages/PropAccount'));
const PropAccountView = lazy(() => import('./pages/PropAccountView'));
const PropAccountEdit = lazy(() => import('./pages/PropAccountEdit'));
const PropPayout = lazy(() => import('./pages/PropPayout'));

// Lazy loading Reports Management
const ReportManagement = lazy(() => import('./pages/ReportManagement'));
const ReportsManagementAdd = lazy(() => import('./pages/ReportsManagementAdd'));
const ReportsManagementEdit = lazy(() => import('./pages/ReportsManagementEdit'));
const ReportsManagementView = lazy(() => import('./pages/ReportsManagementView'));

// Lazy loading Content Management
const ContentManagement = lazy(() => import('./pages/ContentManagement'));
const ContentManagementAdd = lazy(() => import('./pages/ContentManagementAdd'));
const ContentManagementEdit = lazy(() => import('./pages/ContentManagementEdit'));
const ContentManagementView = lazy(() => import('./pages/ContentManagementView'));

// Lazy loading FAQ Management
const FAQ = lazy(() => import('./pages/FAQ'));
const FAQAdd = lazy(() => import('./pages/FAQAdd'));
const FAQEdit = lazy(() => import('./pages/FAQEdit'));
const FAQView = lazy(() => import('./pages/FAQView'));

// Lazy loading Download Management
const Download = lazy(() => import('./pages/Download'));
const DownloadAdd = lazy(() => import('./pages/DownloadAdd'));
const DownloadEdit = lazy(() => import('./pages/DownloadEdit'));

// Lazy loading Video Management
const VideoManagement = lazy(() => import('./pages/VideoManagement'));
const VideoManagementAdd = lazy(() => import('./pages/VideoManagementAdd'));
const VideoManagementEdit = lazy(() => import('./pages/VideoManagementEdit'));
const VideoManagementView = lazy(() => import('./pages/VideoManagementView'));

// Lazy loading Image Management
const ImageManagement = lazy(() => import('./pages/ImageManagement'));

// Lazy loading User Management
const UserManagement = lazy(() => import('./pages/UserManagement'));
const UserManagementAdd = lazy(() => import('./pages/UserManagementAdd'));
const UserManagementEdit = lazy(() => import('./pages/UserManagementEdit'));

// Lazy loading Announcement
const Announcement = lazy(() => import('./pages/Announcement'));
const AnnouncementAdd = lazy(() => import('./pages/AnnouncementAdd'));
const AnnouncementEdit = lazy(() => import('./pages/AnnouncementEdit'));

// Lazy loading Discount Codes
const DiscountCodes = lazy(() => import('./pages/DiscountCodes'));
const DiscountCodesGlobalView = lazy(() => import('./pages/DiscountCodesGlobalView'));
const DiscountCodesGlobalEdit = lazy(() => import('./pages/DiscountCodesGlobalEdit'));
const DiscountCodesGlobalAdd = lazy(() => import('./pages/DiscountCodesGlobalAdd'));

// Lazy loading Email Management
const EmailManagement = lazy(() => import('./pages/EmailManagement'));

// Lazy loading Profile
const ProfileInfo = lazy(() => import('./pages/ProfileInfo'));

// Lazy loading Competitions
const Competitions = lazy(() => import('./pages/Competitions'));
const CompetitionAdd = lazy(() => import('./pages/CompetitionAdd'));
const CompetitionsView = lazy(() => import('./pages/CompetitionsView'));
const CompetitionsEdit = lazy(() => import('./pages/CompetitionsEdit'));

// Utility component for Suspense-wrapped routes
const SuspenseRoute = ({ element }) => (
  <Suspense fallback={<InitialLoading />}>
    {element}
  </Suspense>
);

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={1000} />
      <Suspense fallback={<InitialLoading />}>
        <ProfileProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<SuspenseRoute element={<Login />} />} />
            <Route path="/forget_password" element={<SuspenseRoute element={<ForgetPassword />} />} />
            <Route path="/otp" element={<SuspenseRoute element={<OTP />} />} />
            <Route path="/reset_password" element={<SuspenseRoute element={<ResetPassword />} />} />

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={
                <Suspense fallback={<InitialLoading />}>
                  <Layout />
                </Suspense>
              }>
                {/* Dashboard */}
                <Route path="/dashboard" element={<SuspenseRoute element={<Dashboards />} />} />

                {/* Competitions */}
                <Route path="/competitions" element={<SuspenseRoute element={<Competitions />} />} />
                <Route path="/competitions_add" element={<SuspenseRoute element={<CompetitionAdd />} />} />
                <Route path="/competitions_view" element={<SuspenseRoute element={<CompetitionsView />} />} />
                <Route path="/competitions_edit/:id" element={<SuspenseRoute element={<CompetitionsEdit />} />} />

                {/* Customer Management */}
                <Route path="/customers_management" element={<SuspenseRoute element={<Customer />} />} />
                <Route path="/customers_view/:id" element={<SuspenseRoute element={<CustomerView />} />} />
                <Route path="/customer_add" element={<SuspenseRoute element={<CustomerAdd />} />} />
                <Route path="/customer_edit/:id" element={<SuspenseRoute element={<CustomerEdit />} />} />

                {/* Trading Platform */}
                <Route path="/trading_platform" element={<SuspenseRoute element={<TradingPlatform />} />} />

                {/* Challenge Management */}
                <Route path="/challenge_management" element={<SuspenseRoute element={<Challenge />} />} />
                <Route path="/challenge_add" element={<SuspenseRoute element={<ChallengeAdd />} />} />
                <Route path="/challenge_edit/:id" element={<SuspenseRoute element={<ChallengeEdit />} />} />
                <Route path="/challenge_view/:id" element={<SuspenseRoute element={<ChallengeView />} />} />

                {/* Order Management */}
                <Route path="/orders_management" element={<SuspenseRoute element={<Order />} />} />
                <Route path="/orders_management_edit/:id" element={<SuspenseRoute element={<OrderEdit />} />} />
                <Route path="/orders_management_view" element={<SuspenseRoute element={<OrderView />} />} />

                {/* Contract Management */}
                <Route path="/contract_management" element={<SuspenseRoute element={<Contract />} />} />
                <Route path="/contract_view" element={<SuspenseRoute element={<ContractView />} />} />
                <Route path="/contract_templete" element={<SuspenseRoute element={<ContractTemplate />} />} />
                <Route path="/contract_templete_add" element={<SuspenseRoute element={<ContractTempleteAdd />} />} />
                <Route path="/contract_templete_edit/:id" element={<SuspenseRoute element={<ContractTempleteEdit />} />} />

                {/* Pending Upgrades */}
                <Route path="/pending_upgrades" element={<SuspenseRoute element={<PendingUpgrades />} />} />

                {/* Risk Management */}
                <Route path="/risk_triggers" element={<SuspenseRoute element={<RiskTriggers />} />} />
                <Route path="/risk_triggers_add" element={<SuspenseRoute element={<RiskTriggersAdd />} />} />
                <Route path="/risk_triggers_view" element={<SuspenseRoute element={<RiskTriggersView />} />} />
                <Route path="/risk_triggers_edit/:id" element={<SuspenseRoute element={<RiskTriggersEdit />} />} />
                <Route path="/risk_notification" element={<SuspenseRoute element={<RiskNotification />} />} />

                {/* Affiliates */}
                <Route path="/affiliates_management" element={<SuspenseRoute element={<Affiliates />} />} />
                <Route path="/affiliate_payout_management" element={<SuspenseRoute element={<AffiliatePayout />} />} />

                {/* Plans Management */}
                <Route path="/plans_management" element={<SuspenseRoute element={<PlansManagement />} />} />
                <Route path="/plans_management_add" element={<SuspenseRoute element={<PlanManagementAdd />} />} />
                <Route path="/plans_management_edit/:id" element={<SuspenseRoute element={<PlanManagementEdit />} />} />
                <Route path="/plans_management_view" element={<SuspenseRoute element={<PlanManagementView />} />} />

                {/* Prop Account Management */}
                <Route path="/prop_account_management" element={<SuspenseRoute element={<PropAccount />} />} />
                <Route path="/prop_account_view" element={<SuspenseRoute element={<PropAccountView />} />} />
                <Route path="/prop_account_edit/:id" element={<SuspenseRoute element={<PropAccountEdit />} />} />
                <Route path="/prop_payout_management" element={<SuspenseRoute element={<PropPayout />} />} />

                {/* Reports Management */}
                <Route path="/reports_management" element={<SuspenseRoute element={<ReportManagement />} />} />
                <Route path="/reports_management_add" element={<SuspenseRoute element={<ReportsManagementAdd />} />} />
                <Route path="/reports_management_edit/:id" element={<SuspenseRoute element={<ReportsManagementEdit />} />} />
                <Route path="/reports_management_view" element={<SuspenseRoute element={<ReportsManagementView />} />} />

                {/* Content Management */}
                <Route path="/content_management" element={<SuspenseRoute element={<ContentManagement />} />} />
                <Route path="/content_management_add" element={<SuspenseRoute element={<ContentManagementAdd />} />} />
                <Route path="/content_management_edit/:id" element={<SuspenseRoute element={<ContentManagementEdit />} />} />
                <Route path="/content_management_view/:id" element={<SuspenseRoute element={<ContentManagementView />} />} />

                {/* FAQ Management */}
                <Route path="/FAQ_management" element={<SuspenseRoute element={<FAQ />} />} />
                <Route path="/FAQ_management_add" element={<SuspenseRoute element={<FAQAdd />} />} />
                <Route path="/FAQ_management_edit/:id" element={<SuspenseRoute element={<FAQEdit />} />} />
                <Route path="/FAQ_management_view/:id" element={<SuspenseRoute element={<FAQView />} />} />

                {/* Download Management */}
                <Route path="/download_management" element={<SuspenseRoute element={<Download />} />} />
                <Route path="/download_management_add" element={<SuspenseRoute element={<DownloadAdd />} />} />
                <Route path="/download_management_edit/:id" element={<SuspenseRoute element={<DownloadEdit />} />} />

                {/* Video Management */}
                <Route path="/video_management" element={<SuspenseRoute element={<VideoManagement />} />} />
                <Route path="/video_management_add" element={<SuspenseRoute element={<VideoManagementAdd />} />} />
                <Route path="/video_management_edit/:id" element={<SuspenseRoute element={<VideoManagementEdit />} />} />
                <Route path="/video_management_view/:id" element={<SuspenseRoute element={<VideoManagementView />} />} />

                {/* Image Management */}
                <Route path="/image_management" element={<SuspenseRoute element={<ImageManagement />} />} />

                {/* User Management */}
                <Route path="/users_management" element={<SuspenseRoute element={<UserManagement />} />} />
                <Route path="/users_management_add" element={<SuspenseRoute element={<UserManagementAdd />} />} />
                <Route path="/users_management_edit/:id" element={<SuspenseRoute element={<UserManagementEdit />} />} />

                {/* Announcement */}
                <Route path="/announcement" element={<SuspenseRoute element={<Announcement />} />} />
                <Route path="/announcement_add" element={<SuspenseRoute element={<AnnouncementAdd />} />} />
                <Route path="/announcement_edit/:id" element={<SuspenseRoute element={<AnnouncementEdit />} />} />

                {/* Discount Codes */}
                <Route path="/discount_codes_management" element={<SuspenseRoute element={<DiscountCodes />} />} />
                <Route path="/discount_codes_management_global_view" element={<SuspenseRoute element={<DiscountCodesGlobalView />} />} />
                <Route path="/discount_codes_management_global_edit/:id" element={<SuspenseRoute element={<DiscountCodesGlobalEdit />} />} />
                <Route path="/discount_codes_management_global_add" element={<SuspenseRoute element={<DiscountCodesGlobalAdd />} />} />

                {/* Email Management */}
                <Route path="/email_management" element={<SuspenseRoute element={<EmailManagement />} />} />

                {/* Profile */}
                <Route path="/profile_info" element={<SuspenseRoute element={<ProfileInfo />} />} />

                {/* 404 Page */}
                <Route path="*" element={<SuspenseRoute element={<NoPage />} />} />
              </Route>
            </Route>
          </Routes>
        </ProfileProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;