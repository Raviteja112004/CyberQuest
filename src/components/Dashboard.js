import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faShieldVirus, faTrophy, faMedal, faUser } from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  padding: 2.5rem 0 1.5rem 0;
  width: 100%;
  animation: ${fadeIn} 0.8s cubic-bezier(.4,2,.3,1);
`;

const Card = styled.div`
  background: var(--glass-bg);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  padding: 2.2rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
  animation: ${fadeIn} 1.2s cubic-bezier(.4,2,.3,1);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.7rem;
`;

const Stat = styled.div`
  margin-bottom: 1.1rem;
  .label {
    color: var(--text-secondary);
    font-size: 1.05rem;
    font-weight: 500;
  }
  .value {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--accent);
    margin-left: 0.5rem;
  }
`;

const ProgressBarWrap = styled.div`
  background: var(--progress-bg);
  border-radius: 8px;
  height: 14px;
  width: 100%;
  margin: 0.5rem 0 0.7rem 0;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: var(--progress-bar);
  border-radius: 8px;
  width: ${props => props.value || 0}%;
  min-width: 18px;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.7em;
  box-shadow: 0 2px 8px 0 rgba(108,99,255,0.15);
  transition: width 1.2s cubic-bezier(.4,2,.3,1);
`;

const ChallengeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Challenge = styled.div`
  background: rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.1rem 1.2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  box-shadow: 0 2px 8px 0 rgba(108,99,255,0.08);
`;

const ChallengeInfo = styled.div`
  flex: 1;
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.2rem;
  }
  p {
    color: var(--text-secondary);
    font-size: 0.98rem;
    margin-bottom: 0.3rem;
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const Achievement = styled.div`
  background: rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.1rem 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px 0 rgba(108,99,255,0.08);
  color: ${props => props.locked ? 'var(--text-secondary)' : 'var(--primary)'};
  opacity: ${props => props.locked ? 0.5 : 1};
`;

const LeaderboardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const LeaderboardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  background: ${props => props.current ? 'rgba(108,99,255,0.13)' : 'rgba(255,255,255,0.07)'};
  box-shadow: 0 2px 8px 0 rgba(108,99,255,0.08);
  font-weight: 600;
  color: ${props => props.current ? 'var(--primary)' : 'var(--text-secondary)'};
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6c63ff 60%, #eebbc3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
`;

const Dashboard = () => {
  return (
    <DashboardGrid>
      {/* Progress Overview */}
      <Card className="glass">
        <CardTitle>Your Progress</CardTitle>
        <Stat>
          <span className="label">Overall Progress</span>
          <ProgressBarWrap>
            <ProgressBar value={75}>75%</ProgressBar>
          </ProgressBarWrap>
        </Stat>
        <Stat>
          <span className="label">Points</span>
          <span className="value">2,450</span>
        </Stat>
        <Stat>
          <span className="label">Completed Modules</span>
          <span className="value">15/20</span>
        </Stat>
      </Card>

      {/* Active Challenges */}
      <Card className="glass">
        <CardTitle>Active Challenges</CardTitle>
        <ChallengeList>
          <Challenge>
            <FontAwesomeIcon icon={faLock} size="lg" style={{marginTop: 2}} />
            <ChallengeInfo>
              <h3>Phishing Defense</h3>
              <p>Identify and report suspicious emails</p>
              <ProgressBarWrap>
                <ProgressBar value={60}>60%</ProgressBar>
              </ProgressBarWrap>
            </ChallengeInfo>
          </Challenge>
          <Challenge>
            <FontAwesomeIcon icon={faShieldVirus} size="lg" style={{marginTop: 2}} />
            <ChallengeInfo>
              <h3>Malware Analysis</h3>
              <p>Learn to detect and analyze malware</p>
              <ProgressBarWrap>
                <ProgressBar value={30}>30%</ProgressBar>
              </ProgressBarWrap>
            </ChallengeInfo>
          </Challenge>
        </ChallengeList>
      </Card>

      {/* Recent Achievements */}
      <Card className="glass">
        <CardTitle>Recent Achievements</CardTitle>
        <AchievementsGrid>
          <Achievement>
            <FontAwesomeIcon icon={faTrophy} size="lg" />
            <span>Firewall Master</span>
          </Achievement>
          <Achievement>
            <FontAwesomeIcon icon={faMedal} size="lg" />
            <span>Encryption Expert</span>
          </Achievement>
          <Achievement locked>
            <FontAwesomeIcon icon={faLock} size="lg" />
            <span>Network Guardian</span>
          </Achievement>
        </AchievementsGrid>
      </Card>

      {/* Leaderboard */}
      <Card className="glass">
        <CardTitle>Top Performers</CardTitle>
        <LeaderboardList>
          <LeaderboardItem>
            <span>1</span>
            <Avatar><FontAwesomeIcon icon={faUser} /></Avatar>
            <span>Sarah Connor</span>
            <span style={{marginLeft: 'auto'}}>3,250 pts</span>
          </LeaderboardItem>
          <LeaderboardItem>
            <span>2</span>
            <Avatar><FontAwesomeIcon icon={faUser} /></Avatar>
            <span>John Smith</span>
            <span style={{marginLeft: 'auto'}}>3,100 pts</span>
          </LeaderboardItem>
          <LeaderboardItem current>
            <span>3</span>
            <Avatar><FontAwesomeIcon icon={faUser} /></Avatar>
            <span>You</span>
            <span style={{marginLeft: 'auto'}}>2,450 pts</span>
          </LeaderboardItem>
        </LeaderboardList>
      </Card>
    </DashboardGrid>
  );
};

export default Dashboard; 