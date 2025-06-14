import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import TeamHub from './components/TeamHub';
import Training from './components/Training';
import Community from './components/Community';
import Helpline from './components/Helpline';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  color: var(--text);
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
`;

const Header = styled.header`
  background-color: var(--nav-bg);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-md);
`;

const Title = styled.h1`
  color: var(--primary-color);
  font-size: 2rem;
  text-align: center;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/training" element={<Training />} />
            <Route path="/lab" element={<TeamHub />} />
            <Route path="/quests" element={<div>Quests (Coming Soon)</div>} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/helpline" element={<Helpline />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
