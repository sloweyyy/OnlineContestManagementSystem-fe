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
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

// Lazy Home Page
const Home = lazy(() => import('./pages/home/Home'));
const Contest = lazy(() => import('./pages/contest/Contest'));
const Profile = lazy(() => import('./pages/user-profile/UserProfile'));
const ContestCreating = lazy(() => import('./pages/contest-creating/ContestCreating'));
const DetailContest = lazy(() => import('./pages/contest/DetailContest'));
const Search = lazy(() => import('./pages/home/Search'));

// Lazy Landing Page
const LandingPage = lazy(() => import('./pages/landing-page/LandingPage'));
const Contact = lazy(() => import('./pages/landing-page/Contact'));
const About = lazy(() => import('./pages/landing-page/About'));
const Guide = lazy(() => import('./pages/landing-page/Guide'));

// Lazy Auth Page
const SignIn = lazy(() => import('./pages/auth/SignIn'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPasswordCard'));
const OTP = lazy(() => import('./pages/auth/OTP'));
const ConfirmPassword = lazy(() => import('./pages/auth/ConfirmPasswordCard'));
const Successfully = lazy(() => import('./pages/auth/SuccessfullyCard'));

// Lazy Other Page
const NotFoundPage = lazy(() => import('./pages/static-pages/NotFoundPage'));

function AppContent() {
  const location = useLocation();
  const hideLayout =
    location.pathname === '/sign-in' ||
    location.pathname === '/sign-up' ||
    location.pathname === '/forgot-password' ||
    location.pathname === '/otp' ||
    location.pathname === '/confirm-password' ||
    location.pathname === '/successfully' ||
    location.pathname === '/*' ||
    location.pathname === '/participant/detail-contest';

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Box display={'flex'}>
      {!hideLayout && isAuthenticated && <Sidebar />}
      <Box flex={1}>
        {!hideLayout && !isAuthenticated && <Header />}
        <Box display={'flex'}>
          <Box flex={1}>
            <Routes>
              {/* Auth Route */}
              <Route
                path="/sign-in"
                element={
                  <PublicRoute>
                    <SignIn />
                  </PublicRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute>
                    <SignUp />
                  </PublicRoute>
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <PublicRoute>
                    <ForgotPassword />
                  </PublicRoute>
                }
              />
              <Route
                path="/otp"
                element={
                  <PublicRoute>
                    <OTP />
                  </PublicRoute>
                }
              />
              <Route
                path="/confirm-password"
                element={
                  <PublicRoute>
                    <ConfirmPassword />
                  </PublicRoute>
                }
              />
              <Route
                path="/successfully"
                element={
                  <PublicRoute>
                    <Successfully />
                  </PublicRoute>
                }
              />

              {/* Public Route */}
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <LandingPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PublicRoute>
                    <Contact />
                  </PublicRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <PublicRoute>
                    <About />
                  </PublicRoute>
                }
              />
              <Route
                path="/guide"
                element={
                  <PublicRoute>
                    <Guide />
                  </PublicRoute>
                }
              />

              {/* User Route */}
              <Route element={<PrivateRoute allowedRoles={['user', 'User']} />}>
                1
                <Route path="/participant/home" element={<Home />} />
                <Route path="/participant/contest" element={<Contest />} />
                <Route path="/participant/profile" element={<Profile />} />
                <Route path="/participant/contest-creating" element={<ContestCreating />} />
                <Route path="/participant/detail-contest" element={<DetailContest />} />
                <Route path="/participant/search" element={<Search />} />
              </Route>

              {/* Other Route */}
              <Route path="/*" element={<NotFoundPage />} />
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
      <ToastContainer position="top-center" autoClose={1000} />
    </Suspense>
  );
}

export default App;
