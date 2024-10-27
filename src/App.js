import { Suspense, lazy } from 'react';
import './App.css';
import Sidebar from './layouts/sidebar/Sidebar';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import getDesignTokens from './config/theme/themePrintives';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/Home'));
const Contest = lazy(() => import('./pages/contest/Contest'));
const Profile = lazy(() => import('./pages/user-profile/UserProfile'));
const ContestCreating = lazy(() => import('./pages/contest-creating/ContestCreating'));
const SignIn = lazy(() => import('./pages/auth/SignIn'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const LandingPage = lazy(() => import('./pages/landing-page/LandingPage'));
const NotFoundPage = lazy(() => import('./pages/static-pages/NotFoundPage'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const Contact = lazy(() => import('./pages/landing-page/Contact'));
const About = lazy(() => import('./pages/landing-page/About'));
const Guide = lazy(() => import('./pages/landing-page/Guide'));

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/forgot-password';
  const isAuthenticate = false;

  return (
    <Box display={'flex'}>
      {!hideLayout && isAuthenticate && <Sidebar />}
      <Box flex={1}>
        {!hideLayout && !isAuthenticate && <Header />}
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
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/guide" element={<Guide />} />
            </Routes>
          </Box>
        </Box>
        {!hideLayout && !isAuthenticate && <Footer />}
      </Box>
    </Box>
  );
}

function App() {
  const theme = createTheme(getDesignTokens());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
