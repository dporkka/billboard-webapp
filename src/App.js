import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Auth from './components/Auth';
import BillboardManagement from './components/BillboardManagement';
import CampaignScheduler from './components/CampaignScheduler';
import FileUpload from './components/FileUpload';
import Home from './components/Home';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/billboards" element={<BillboardManagement />} />
          <Route path="/campaigns" element={<CampaignScheduler />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
