import { Suspense, lazy } from 'react';
import './App.css';
import Sidebar from './layouts/sidebar/Sidebar';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import getDesignTokens from './config/theme/themePrintives';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/home/Home'));
const Contest = lazy(() => import('./pages/contest/Contest'));
const Profile = lazy(() => import('./pages/user-profile/UserProfile'));
const ContestCreating = lazy(() => import('./pages/contest-creating/ContestCreating'));
const SignIn = lazy(() => import('./pages/auth/SignIn'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const LandingPage = lazy(() => import('./pages/landing-page/LandingPage'));
const NotFoundPage = lazy(() => import('./pages/static-pages/NotFoundPage'));
const Contact = lazy(() => import('./pages/landing-page/Contact'));
const About = lazy(() => import('./pages/landing-page/About'));
const Guide = lazy(() => import('./pages/landing-page/Guide'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPasswordCard'));
const OTP = lazy(() => import('./pages/auth/OTP'));
const ConfirmPasswordCard = lazy(() => import('./pages/auth/ConfirmPasswordCard'));
const SuccessfullyCard = lazy(() => import('./pages/auth/SuccessfullyCard'));
const DetailContest = lazy(() => import('./pages/contest/DetailContest'));
const Search = lazy(() => import('./pages/home/Search'));

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/forgot-password' || location.pathname === '/otp' || location.pathname === '/confirm-password' || location.pathname === '/successfully' || location.pathname === '/not-found' || location.pathname === '/detail-contest';

  // const isAuthenticated = useSelector((state) => state.auth);

  const isAuthenticated = true;

  return (
    <Box display={'flex'}>
      {!hideLayout && isAuthenticated && <Sidebar />}
      <Box flex={1}>
        {!hideLayout && !isAuthenticated && <Header />}
        <Box display={'flex'}>
          <Box flex={1}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contest" element={<Contest />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contest-creating" element={<ContestCreating />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/not-found" element={<NotFoundPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/confirm-password" element={<ConfirmPasswordCard />} />
              <Route path="/successfully" element={<SuccessfullyCard />} />
              <Route path="/detail-contest" element={<DetailContest />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Box>
        </Box>
        {!hideLayout && !isAuthenticated && <Footer />}
      </Box>
    </Box>
  );
}

function App() {
  const theme = createTheme(getDesignTokens());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
      <ToastContainer position="bottom-left" autoClose={1000} />
    </Suspense>
  );
}

export default App;
