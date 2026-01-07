import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import NAE from './pages/NAE';
import ProfessionalDetail from './pages/ProfessionalDetail';
import Scholarships from './pages/Scholarships';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        {/* Routes wrapped in Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/bolsas" element={<Layout><Scholarships /></Layout>} />
        <Route path="/nucleo-atendimento-especializado" element={<Layout><NAE /></Layout>} />
        <Route path="/equipe/:slug" element={<Layout><ProfessionalDetail /></Layout>} />
        <Route path="/educacao-infantil" element={<Layout><Education type="infantil" imageHash={101} /></Layout>} />
        <Route path="/ensino-fundamental-1" element={<Layout><Education type="fund1" imageHash={102} /></Layout>} />
        <Route path="/ensino-fundamental-2" element={<Layout><Education type="fund2" imageHash={103} /></Layout>} />
        <Route path="/ensino-medio" element={<Layout><Education type="medio" imageHash={104} /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/contato" element={<Layout><Contact /></Layout>} />
        
        {/* Standalone Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/area-responsavel" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;