import { Suspense, lazy } from 'react';
import './App.css';
import Sidebar from './layouts/sidebar/Sidebar';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { Box, CircularProgress, createTheme, Skeleton, ThemeProvider } from '@mui/material';
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
const ContestEditing = lazy(() => import('./pages/user-role/contest-editing/ContestEditing'));

// Lazy Admin Page
const AdminDashboard = lazy(() => import('./pages/admin-role/dashboard/Dashboard'));
const AdminContest = lazy(() => import('./pages/admin-role/contests/Contests'));
const NewsManagement = lazy(() => import('./pages/admin-role/news/NewsManagement'));
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
  const { isAuthenticated } = useSelector((state) => state.auth);

  const hideLayout =
    location.pathname === '/*' ||
    location.pathname === '/participant/detail-contest';

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
                path="/reset-password"
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
                <Route path="/participant/contest-editing" element={<ContestEditing />} />
              </Route>

              {/* Admin Route */}
              <Route element={<PrivateRoute allowedRoles={['admin', 'Admin']} />}>
                <Route path="/admin/home" element={<AdminDashboard />} />
                <Route path="/admin/contests" element={<AdminContest />} />
                <Route path="/admin/profile" element={<Profile />} />
                <Route path="/admin/news" element={<NewsManagement />} />
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

function Loading() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
      bgcolor={gray[100]}
      color={white}
    >
      <CircularProgress
        sx={{ '&.MuiCircularProgress-colorPrimary': { color: gray[400] } }}
        size={50}
      />
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
