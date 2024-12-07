import { Suspense, lazy } from 'react';
import './App.css';
import Sidebar from './layouts/sidebar/Sidebar';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { Box, createTheme, Skeleton, ThemeProvider } from '@mui/material';
import getDesignTokens, { gray, white } from './config/theme/themePrintives';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

// Lazy User Page
const Home = lazy(() => import('./pages/user-role/home/Home'));
const Contest = lazy(() => import('./pages/user-role/contest/Contest'));
const ContestCreating = lazy(() => import('./pages/user-role/contest-creating/ContestCreating'));
const DetailContest = lazy(() => import('./pages/user-role/contest/DetailContest'));
const Search = lazy(() => import('./pages/user-role/home/Search'));
const Registration = lazy(() => import('./pages/user-role/registration/Registration'));

// Lazy Admin Page
const AdminDashboard = lazy(() => import('./pages/admin-role/dashboard/Dashboard'));
const AdminContest = lazy(() => import('./pages/admin-role/contests/Contests'));

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
const Profile = lazy(() => import('./pages/profile/Profile'));

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
                <Route path="/participant/home" element={<Home />} />
                <Route path="/participant/contest" element={<Contest />} />
                <Route path="/participant/profile" element={<Profile />} />
                <Route path="/participant/contest-creating" element={<ContestCreating />} />
                <Route path="/participant/detail-contest" element={<DetailContest />} />
                <Route path="/participant/search" element={<Search />} />
                <Route path="/participant/registration" element={<Registration />} />
              </Route>

              {/* Admin Route */}
              <Route element={<PrivateRoute allowedRoles={['admin', 'Admin']} />}>
                <Route path="/admin/home" element={<AdminDashboard />} />
                <Route path="/admin/contests" element={<AdminContest />} />
                <Route path="/admin/profile" element={<Profile />} />
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
};

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        padding: 3,
        backgroundColor: gray[100],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "18rem",
          height: "90vh",
          borderRadius: 2,
          backgroundColor: white[50],
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: 2,
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 1 }} />

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Skeleton variant="text" width="70%" height={25} />
          <Skeleton variant="text" width="50%" height={25} />
          <Skeleton variant="text" width="60%" height={25} />
          <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
        </Box>

        <Skeleton
          variant="rectangular"
          width="100%"
          height={50}
          sx={{
            borderRadius: 1,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
        />

        <Skeleton
          variant="rectangular"
          width="100%"
          height={80}
          sx={{
            mt: "auto",
            borderRadius: 1,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "90vh",
          borderRadius: 2,
          backgroundColor: white[50],
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: 3,
        }}
      >
        <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: 2 }} />
      </Box>
    </Box>
  );
}

function App() {
  const theme = createTheme(getDesignTokens());

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
      <ToastContainer position="top-center" autoClose={1000} />
    </Suspense>
  );
}

export default App;
