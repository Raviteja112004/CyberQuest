import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faLock, 
  faShieldVirus,
  faNetworkWired,
  faCode
} from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
`;

const TrainingContainer = styled.div`
  padding: 2.5rem 0;
  animation: ${fadeIn} 0.8s cubic-bezier(.4,2,.3,1);
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: var(--accent);
  }
`;

const TrainingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ModuleCard = styled.div`
  background: var(--glass-bg);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all var(--transition);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 35px 0 rgba(31, 38, 135, 0.4);
  }
`;

const ModuleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
  }

  .difficulty {
    background: rgba(255,255,255,0.1);
    padding: 0.3em 0.8em;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent);
    border: 1px solid rgba(255,255,255,0.2);
  }
`;

const ModuleDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ProgressBarWrap = styled.div`
  background: var(--progress-bg);
  border-radius: 8px;
  height: 12px;
  width: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: var(--progress-bar);
  border-radius: 8px;
  width: ${props => props.value || 0}%;
  transition: width 1.2s cubic-bezier(.4,2,.3,1);
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
  transition: all var(--transition);

  &:hover {
    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const Training = () => {
  const trainingModules = [
    {
      id: 1,
      title: 'Phishing Defense',
      difficulty: 'Intermediate',
      description: 'Learn to identify and protect against phishing attacks.',
      progress: 60,
      icon: faLock,
    },
    {
      id: 2,
      title: 'Malware Analysis',
      difficulty: 'Advanced',
      description: 'Dive deep into malware types and analysis techniques.',
      progress: 30,
      icon: faShieldVirus,
    },
    {
      id: 3,
      title: 'Network Security',
      difficulty: 'Beginner',
      description: 'Understand the fundamentals of securing computer networks.',
      progress: 85,
      icon: faNetworkWired,
    },
    {
      id: 4,
      title: 'Web Application Security',
      difficulty: 'Intermediate',
      description: 'Identify and mitigate common web vulnerabilities like XSS and SQLi.',
      progress: 45,
      icon: faCode,
    },
  ];

  return (
    <TrainingContainer>
      <SectionTitle><FontAwesomeIcon icon={faGraduationCap} /> Training Modules</SectionTitle>
      <TrainingGrid>
        {trainingModules.map((module) => (
          <ModuleCard key={module.id} className="glass">
            <ModuleHeader>
              <h3>{module.title}</h3>
              <span className="difficulty">{module.difficulty}</span>
            </ModuleHeader>
            <ModuleDescription>{module.description}</ModuleDescription>
            <div>
              <ProgressBarWrap>
                <ProgressBar value={module.progress} />
              </ProgressBarWrap>
              <ContinueButton>Continue</ContinueButton>
            </div>
          </ModuleCard>
        ))}
      </TrainingGrid>
    </TrainingContainer>
  );
};

export default Training; 