import { Suspense, lazy } from 'react';
import './App.css';
import Sidebar from './layouts/sidebar/Sidebar';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import getDesignTokens from './config/theme/themePrintives';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/Home'));
const Contest = lazy(() => import('./pages/contest/Contest'));
const Profile = lazy(() => import('./pages/user-profile/UserProfile'));
const ContestCreating = lazy(() => import('./pages/contest-creating/ContestCreating'));
const SignIn = lazy(() => import('./pages/auth/SignIn'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const LandingPage = lazy(() => import('./pages/landing-page/LandingPage'));
const NotFoundPage = lazy(() => import('./pages/static-pages/NotFoundPage'));

function App() {
  const theme = createTheme(getDesignTokens());
  const isAuthenticated = false;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <Router>
          <Box display={'flex'}>
            {isAuthenticated && <Sidebar />}
            <Box flex={1}>
              {!isAuthenticated && <Header />}
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
                  </Routes>
                </Box>
              </Box>
              {!isAuthenticated && <Footer />}
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
