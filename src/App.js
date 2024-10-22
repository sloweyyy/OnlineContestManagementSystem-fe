import { Suspense, lazy } from 'react';
import './App.css';
import Sidebar from './layouts/sidebar/Sidebar';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import getDesignTokens from './config/theme/themePrintives';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/Home'));
const Contest = lazy(() => import('./pages/contest/Contest'));
const Profile = lazy(() => import('./pages/user-profile/UserProfile'));
const ContestCreating = lazy(() => import('./pages/contest-creating/ContestCreating'));

function App() {
  const theme = createTheme(getDesignTokens());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <Router>
          <Box display={'flex'}>
            <Sidebar />
            <Box flex={1}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contest-creating" element={<ContestCreating />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
