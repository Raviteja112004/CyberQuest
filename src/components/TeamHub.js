import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDragon,
  faShieldAlt,
  faCheck,
  faMedal,
  faCrosshairs,
  faChartLine,
  faFire,
  faPlus,
  faUserSecret,
  faClock,
  faSignal,
  faBook,
  faBug,
  faUserNinja,
  faNetworkWired,
  faMobileAlt,
  faFlask,
  faServer,
  faCode,
  faTasks,
  faTree,
  faVirus,
  faGhost,
  faEye,
  faBolt,
  faHammer,
  faDatabase,
  faShieldVirus,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
`;

const TeamHubContainer = styled.div`
  padding: 2.5rem 0;
  text-align: center;
  animation: ${fadeIn} 0.8s cubic-bezier(.4,2,.3,1);
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: var(--accent);
  }
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
`;

const TeamCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
`;

const TeamCard = styled.div`
  background: var(--glass-bg);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.45);
  }

  &.red-team {
    .team-icon {
      color: #e74c3c;
    }
    h2 {
      color: #e74c3c;
    }
  }

  &.white-team {
    .team-icon {
      color: #2ecc71;
    }
    h2 {
      color: #2ecc71;
    }
  }
`;

const TeamIcon = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  margin-bottom: 0.8rem;
  color: var(--primary);
`;

const TeamName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const TeamDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
`;

const TeamFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--text);
    font-size: 1rem;
    margin-bottom: 0.5rem;
    svg {
      color: var(--success);
    }
  }
`;

const SelectButton = styled.button`
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  padding: 0.9rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4);
  transition: all var(--transition);

  &:hover {
    box-shadow: 0 8px 25px rgba(108, 99, 255, 0.6);
    transform: translateY(-3px);
  }
`;

const TeamDashboard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--glass-bg);
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  box-shadow: var(--shadow);
  animation: ${fadeIn} 1s cubic-bezier(.4,2,.3,1);
`;

const TeamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  h1 {
    margin-bottom: 0;
    font-size: 2.2rem;
    color: ${props => props.team === 'red' ? '#e74c3c' : '#2ecc71'};
  }
`;

const TeamStats = styled.div`
  display: flex;
  gap: 2rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 500;

    svg {
      color: var(--primary);
    }
  }
`;

const HubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const HubCard = styled.div`
  background: rgba(255,255,255,0.07);
  border-radius: var(--radius);
  padding: 1.8rem;
  box-shadow: 0 2px 8px rgba(108,99,255,0.08);
  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;

const OperationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Operation = styled.div`
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  padding: 1.2rem;
  h3 {
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 0.4rem;
  }
  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  .progress-bar {
    height: 10px;
    background: var(--progress-bg);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0.8rem;
    .progress {
      height: 100%;
      background: var(--progress-bar);
      width: ${props => props.value || 0}%;
      transition: width 1s ease-out;
    }
  }
  .operation-details {
    display: flex;
    gap: 1.5rem;
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
`;

const VectorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1rem;
`;

const VectorItem = styled.div`
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  svg {
    font-size: 1.8rem;
    color: var(--accent);
  }
  span {
    font-size: 0.95rem;
    color: var(--text);
  }
  .progress-mini {
    height: 6px;
    background: var(--progress-bg);
    border-radius: 3px;
    width: 100%;
    margin-top: 0.5rem;
    div {
      height: 100%;
      background: var(--progress-bar);
      width: ${props => props.value || 0}%;
      border-radius: 3px;
    }
  }
`;

const SkillTreeContainer = styled.div`
  margin-top: 3rem;
  h2 {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    justify-content: center;
  }
`;

const SkillPaths = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const SkillPath = styled(HubCard)`
  text-align: center;
  h3 {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
`;

const SkillNodes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const SkillNode = styled.div`
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: 2px solid ${props => props.unlocked ? 'var(--primary)' : 'var(--border)'};
  opacity: ${props => props.unlocked ? 1 : 0.6};
  cursor: ${props => props.unlocked ? 'default' : 'not-allowed'};
  transition: all var(--transition);

  &:hover {
    transform: ${props => props.unlocked ? 'scale(1.05)' : 'none'};
    box-shadow: ${props => props.unlocked ? '0 0 15px rgba(108,99,255,0.3)' : 'none'};
  }

  svg {
    font-size: 2rem;
    color: ${props => props.unlocked ? 'var(--accent)' : 'var(--text-secondary)'};
  }
  span {
    font-size: 0.85rem;
    color: ${props => props.unlocked ? 'var(--text)' : 'var(--text-secondary)'};
    text-align: center;
  }
`;

const TeamSelection = ({ onSelectTeam }) => (
  <TeamHubContainer>
    <SectionTitle>Choose Your Path</SectionTitle>
    <IntroText>Select your specialized training track in cybersecurity</IntroText>
    <TeamCards>
      <TeamCard className="glass red-team" onClick={() => onSelectTeam('red')}>
        <TeamIcon icon={faDragon} className="team-icon" />
        <TeamName>Red Team</TeamName>
        <TeamDescription>Offensive Security Specialists</TeamDescription>
        <TeamFeatures>
          <li><FontAwesomeIcon icon={faCheck} /> Penetration Testing</li>
          <li><FontAwesomeIcon icon={faCheck} /> Exploit Development</li>
          <li><FontAwesomeIcon icon={faCheck} /> Social Engineering</li>
          <li><FontAwesomeIcon icon={faCheck} /> Advanced Persistence</li>
        </TeamFeatures>
        <SelectButton>Join Red Team</SelectButton>
      </TeamCard>

      <TeamCard className="glass white-team" onClick={() => onSelectTeam('white')}>
        <TeamIcon icon={faShieldAlt} className="team-icon" />
        <TeamName>White Team</TeamName>
        <TeamDescription>Defensive Security Experts</TeamDescription>
        <TeamFeatures>
          <li><FontAwesomeIcon icon={faCheck} /> System Hardening</li>
          <li><FontAwesomeIcon icon={faCheck} /> Incident Response</li>
          <li><FontAwesomeIcon icon={faCheck} /> Threat Analysis</li>
          <li><FontAwesomeIcon icon={faCheck} /> Security Architecture</li>
        </TeamFeatures>
        <SelectButton>Join White Team</SelectButton>
      </TeamCard>
    </TeamCards>
  </TeamHubContainer>
);

const RedTeamDashboard = () => (
  <TeamDashboard team="red">
    <TeamHeader team="red">
      <SectionTitle><FontAwesomeIcon icon={faDragon} /> Red Team Operations Center</SectionTitle>
      <TeamStats>
        <span><FontAwesomeIcon icon={faMedal} /> Team Rank: Elite</span>
        <span><FontAwesomeIcon icon={faCrosshairs} /> Active Ops: 3</span>
        <span><FontAwesomeIcon icon={faChartLine} /> Success Rate: 78%</span>
      </TeamStats>
    </TeamHeader>

    <HubGrid>
      <HubCard className="glass">
        <h2><FontAwesomeIcon icon={faFire} /> Active Operations</h2>
        <OperationList>
          <Operation>
            <h3>Operation Shadow Strike</h3>
            <p><FontAwesomeIcon icon={faUserSecret} /> Advanced Persistence Training</p>
            <div className="progress-bar"><div className="progress" style={{width: '45%'}} value={45}></div></div>
            <div className="operation-details">
              <span><FontAwesomeIcon icon={faClock} /> Time: 2:30:00</span>
              <span><FontAwesomeIcon icon={faSignal} /> Difficulty: Hard</span>
            </div>
            <button className="btn-primary">Resume Operation</button>
          </Operation>
          <Operation>
            <h3>Operation Data Breach</h3>
            <p><FontAwesomeIcon icon={faDatabase} /> SQL Injection Scenarios</p>
            <div className="progress-bar"><div className="progress" style={{width: '75%'}} value={75}></div></div>
            <div className="operation-details">
              <span><FontAwesomeIcon icon={faClock} /> Time: 1:45:00</span>
              <span><FontAwesomeIcon icon={faSignal} /> Difficulty: Medium</span>
            </div>
            <button className="btn-primary">Resume Operation</button>
          </Operation>
        </OperationList>
      </HubCard>

      <HubCard className="glass">
        <h2><FontAwesomeIcon icon={faBook} /> Attack Vector Library</h2>
        <VectorGrid>
          <VectorItem>
            <FontAwesomeIcon icon={faBug} />
            <span>Exploit Dev</span>
            <div className="progress-mini"><div value={65}></div></div>
          </VectorItem>
          <VectorItem>
            <FontAwesomeIcon icon={faUserNinja} />
            <span>Social Eng</span>
            <div className="progress-mini"><div value={80}></div></div>
          </VectorItem>
          <VectorItem>
            <FontAwesomeIcon icon={faNetworkWired} />
            <span>Network Infiltration</span>
            <div className="progress-mini"><div value={45}></div></div>
          </VectorItem>
          <VectorItem>
            <FontAwesomeIcon icon={faMobileAlt} />
            <span>Mobile Exploitation</span>
            <div className="progress-mini"><div value={30}></div></div>
          </VectorItem>
        </VectorGrid>
      </HubCard>

      <HubCard className="glass">
        <h2><FontAwesomeIcon icon={faFlask} /> Red Team Lab</h2>
        <OperationList>
          <Operation>
            <h3>Corporate Network Simulation</h3>
            <p>Practice enterprise network penetration</p>
            <div className="operation-details">
                <span><FontAwesomeIcon icon={faServer} /> Systems: 12</span>
                <span><FontAwesomeIcon icon={faShieldAlt} /> Security: High</span>
            </div>
            <button className="btn-primary">Launch Environment</button>
          </Operation>
          <Operation>
            <h3>Web Application Suite</h3>
            <p>Web vulnerability exploitation training</p>
            <div className="operation-details">
                <span><FontAwesomeIcon icon={faCode} /> Apps: 8</span>
                <span><FontAwesomeIcon icon={faShieldAlt} /> Security: Medium</span>
            </div>
            <button className="btn-primary">Launch Environment</button>
          </Operation>
        </OperationList>
      </HubCard>

      <HubCard className="glass">
        <h2><FontAwesomeIcon icon={faTasks} /> Mission Board</h2>
        <OperationList>
          <Operation>
            <h3>Advanced Persistence</h3>
            <p>Establish persistent access in a hardened environment</p>
            <div className="operation-details">
              <span>500 XP</span>
              <span className="tag">Advanced</span>
            </div>
            <button className="btn-primary">Accept Mission</button>
          </Operation>
          <Operation>
            <h3>Zero-Day Hunt</h3>
            <p>Find and exploit unknown vulnerabilities</p>
            <div className="operation-details">
              <span>1000 XP</span>
              <span className="tag">Expert</span>
            </div>
            <button className="btn-primary">Accept Mission</button>
          </Operation>
        </OperationList>
      </HubCard>
    </HubGrid>

    <SkillTreeContainer>
      <h2><FontAwesomeIcon icon={faTree} /> Red Team Skill Tree</h2>
      <SkillPaths>
        <SkillPath className="glass">
          <h3>Exploitation</h3>
          <SkillNodes>
            <SkillNode unlocked><FontAwesomeIcon icon={faBug} /><span>Basic Exploits</span></SkillNode>
            <SkillNode><FontAwesomeIcon icon={faVirus} /><span>Advanced Malware</span></SkillNode>
          </SkillNodes>
        </SkillPath>
        <SkillPath className="glass">
          <h3>Infiltration</h3>
          <SkillNodes>
            <SkillNode unlocked><FontAwesomeIcon icon={faUserSecret} /><span>Stealth Basics</span></SkillNode>
            <SkillNode><FontAwesomeIcon icon={faGhost} /><span>Ghost Protocol</span></SkillNode>
          </SkillNodes>
        </SkillPath>
      </SkillPaths>
    </SkillTreeContainer>
  </TeamDashboard>
);

const WhiteTeamDashboard = () => (
  <TeamDashboard team="white">
    <TeamHeader team="white">
      <SectionTitle><FontAwesomeIcon icon={faShieldAlt} /> White Team Defense Center</SectionTitle>
      <TeamStats>
        <span><FontAwesomeIcon icon={faMedal} /> Security Rating: A+</span>
        <span><FontAwesomeIcon icon={faCrosshairs} /> Active Defenses: 5</span>
        <span><FontAwesomeIcon icon={faChartLine} /> Prevention Rate: 92%</span>
      </TeamStats>
    </TeamHeader>

    <HubGrid>
      <HubCard className="glass">
        <h2><FontAwesomeIcon icon={faFire} /> Active Defenses</h2>
        <OperationList>
          <Operation>
            <h3>Operation Fortress</h3>
            <p>Implement zero-trust architecture</p>
            <div className="progress-bar"><div className="progress" style={{width: '65%'}} value={65}></div></div>
            <div className="operation-details">
              <span><FontAwesomeIcon icon={faClock} /> Time: 3:00:00</span>
              <span><FontAwesomeIcon icon={faSignal} /> Difficulty: Advanced</span>
            </div>
            <button className="btn-primary">Monitor Defense</button>
          </Operation>
          <Operation>
            <h3>Incident Response Drill</h3>
            <p>Simulate a major security incident</p>
            <div className="progress-bar"><div className="progress" style={{width: '80%'}} value={80}></div></div>
            <div className="operation-details">
              <span><FontAwesomeIcon icon={faClock} /> Time: 2:00:00</span>
              <span><FontAwesomeIcon icon={faSignal} /> Difficulty: Hard</span>
            </div>
            <button className="btn-primary">Start Drill</button>
          </Operation>
        </OperationList>
      </HubCard>

      <HubCard className="glass">
        <h2><FontAwesomeIcon icon={faBook} /> Security Tools Library</h2>
        <VectorGrid>
          <VectorItem>
            <FontAwesomeIcon icon={faShieldVirus} />
            <span>Intrusion Prevention</span>
            <div className="progress-mini"><div value={70}></div></div>
          </VectorItem>
          <VectorItem>
            <FontAwesomeIcon icon={faEye} />
            <span>Threat Detection</span>
            <div className="progress-mini"><div value={85}></div></div>
          </VectorItem>
          <VectorItem>
            <FontAwesomeIcon icon={faLock} />
            <span>Access Control</span>
            <div className="progress-mini"><div value={60}></div></div>
          </VectorItem>
          <VectorItem>
            <FontAwesomeIcon icon={faServer} />
            <span>Endpoint Security</span>
            <div className="progress-mini"><div value={40}></div></div>
          </VectorItem>
        </VectorGrid>
      </HubCard>

      <HubCard className="glass">
        <h2><FontAwesomeIcon icon={faFlask} /> White Team Lab</h2>
        <OperationList>
          <Operation>
            <h3>SCADA System Defense</h3>
            <p>Secure critical infrastructure systems</p>
            <div className="operation-details">
                <span><FontAwesomeIcon icon={faServer} /> Systems: 8</span>
                <span><FontAwesomeIcon icon={faShieldAlt} /> Security: Very High</span>
            </div>
            <button className="btn-primary">Launch Environment</button>
          </Operation>
          <Operation>
            <h3>Cloud Security Scenario</h3>
            <p>Defend cloud-based applications</p>
            <div className="operation-details">
                <span><FontAwesomeIcon icon={faCode} /> Apps: 5</span>
                <span><FontAwesomeIcon icon={faShieldAlt} /> Security: High</span>
            </div>
            <button className="btn-primary">Launch Environment</button>
          </Operation>
        </OperationList>
      </HubCard>

      <HubCard className="glass">
        <h2><FontAwesomeIcon icon={faTasks} /> Defense Missions</h2>
        <OperationList>
          <Operation>
            <h3>Proactive Threat Hunting</h3>
            <p>Identify and neutralize hidden threats before they escalate</p>
            <div className="operation-details">
              <span>450 XP</span>
              <span className="tag">Advanced</span>
            </div>
            <button className="btn-primary">Accept Mission</button>
          </Operation>
          <Operation>
            <h3>Forensic Analysis</h3>
            <p>Investigate a simulated breach and recover evidence</p>
            <div className="operation-details">
              <span>900 XP</span>
              <span className="tag">Expert</span>
            </div>
            <button className="btn-primary">Accept Mission</button>
          </Operation>
        </OperationList>
      </HubCard>
    </HubGrid>

    <SkillTreeContainer>
      <h2><FontAwesomeIcon icon={faTree} /> White Team Skill Tree</h2>
      <SkillPaths>
        <SkillPath className="glass">
          <h3>Detection</h3>
          <SkillNodes>
            <SkillNode unlocked><FontAwesomeIcon icon={faEye} /><span>Log Analysis</span></SkillNode>
            <SkillNode><FontAwesomeIcon icon={faShieldVirus} /><span>IDS/IPS Mgmt</span></SkillNode>
          </SkillNodes>
        </SkillPath>
        <SkillPath className="glass">
          <h3>Response</h3>
          <SkillNodes>
            <SkillNode unlocked><FontAwesomeIcon icon={faBolt} /><span>Incident Handling</span></SkillNode>
            <SkillNode><FontAwesomeIcon icon={faHammer} /><span>Malware Removal</span></SkillNode>
          </SkillNodes>
        </SkillPath>
      </SkillPaths>
    </SkillTreeContainer>
  </TeamDashboard>
);

const TeamHub = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
  };

  return (
    <>
      {selectedTeam === 'red' && <RedTeamDashboard />}
      {selectedTeam === 'white' && <WhiteTeamDashboard />}
      {!selectedTeam && <TeamSelection onSelectTeam={handleSelectTeam} />}
    </>
  );
};

export default TeamHub; 