import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faHome, faGraduationCap, faFlask, faTasks, faNewspaper, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: var(--glass-bg);
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.03em;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  a {
    color: var(--text-secondary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.08rem;
    font-weight: 600;
    padding: 0.4em 1em;
    border-radius: var(--radius);
    position: relative;
    transition: color var(--transition), background var(--transition);
    &.active, &:hover {
      color: var(--primary);
      background: rgba(108, 99, 255, 0.08);
    }
    &.active::after {
      content: '';
      position: absolute;
      left: 0; right: 0; bottom: -6px;
      height: 3px;
      border-radius: 2px;
      background: var(--primary);
      box-shadow: 0 2px 8px var(--primary);
      animation: navActive 0.4s cubic-bezier(.4,2,.3,1);
    }
  }
  @keyframes navActive {
    from { width: 0; opacity: 0; }
    to { width: 100%; opacity: 1; }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(255,255,255,0.07);
  padding: 0.4em 1em 0.4em 0.7em;
  border-radius: var(--radius);
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.10);
`;

const Avatar = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: var(--primary);
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    line-height: 1.1;
  }
  .level {
    font-size: 0.9rem;
    color: var(--accent);
    font-weight: 500;
  }
`;

const Navigation = () => {
  const location = useLocation();
  return (
    <Nav className="glass">
      <NavContainer>
        <Logo>
          <FontAwesomeIcon icon={faShieldAlt} />
          <span>CyberGuard</span>
        </Logo>
        <NavLinks>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}><FontAwesomeIcon icon={faHome} />Dashboard</Link>
          <Link to="/training" className={location.pathname === '/training' ? 'active' : ''}><FontAwesomeIcon icon={faGraduationCap} />Training</Link>
          <Link to="/lab" className={location.pathname === '/lab' ? 'active' : ''}><FontAwesomeIcon icon={faFlask} />Cyber Lab</Link>
          <Link to="/quests" className={location.pathname === '/quests' ? 'active' : ''}><FontAwesomeIcon icon={faTasks} />Quests</Link>
          <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}><FontAwesomeIcon icon={faNewspaper} />News</Link>
        </NavLinks>
        <Profile>
          <Avatar icon={faUserCircle} />
          <ProfileInfo>
            <span>John Doe</span>
            <span className="level">Level 12</span>
          </ProfileInfo>
        </Profile>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 