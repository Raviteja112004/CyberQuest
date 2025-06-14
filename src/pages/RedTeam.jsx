import React from 'react';
import './style.css'; // Assuming you're using CSS directly

const RedTeamHub = () => {
  return (
    <section id="red-team-hub" className="hidden-section team-hub">
      <div className="team-hub-container red-theme">

        {/* Team Overview Dashboard */}
        <div className="team-header">
          <h1><i className="fas fa-dragon"></i> Red Team Operations Center</h1>
          <div className="team-stats">
            <span className="stat-item"><i className="fas fa-medal"></i> Team Rank: Elite</span>
            <span className="stat-item"><i className="fas fa-crosshairs"></i> Active Operations: 3</span>
            <span className="stat-item"><i className="fas fa-chart-line"></i> Success Rate: 78%</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="hub-grid">

          {/* Active Operations */}
          <div className="card operations-card">
            <div className="card-header">
              <h2><i className="fas fa-fire"></i> Active Operations</h2>
              <button className="btn-primary"><i className="fas fa-plus"></i> New Operation</button>
            </div>

            <div className="operation-list">
              {/* Operation 1 */}
              <div className="operation">
                <h3>Operation Shadow Strike</h3>
                <p><i className="fas fa-user-secret"></i> Advanced Persistence Training</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '45%' }}>45%</div>
                </div>
                <div className="operation-details">
                  <span><i className="fas fa-clock"></i> Time: 2:30:00</span>
                  <span><i className="fas fa-signal"></i> Difficulty: Hard</span>
                </div>
                <button className="btn-primary">Resume Operation</button>
              </div>

              {/* Operation 2 */}
              <div className="operation">
                <h3>Operation Data Breach</h3>
                <p><i className="fas fa-database"></i> SQL Injection Scenarios</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}>75%</div>
                </div>
                <div className="operation-details">
                  <span><i className="fas fa-clock"></i> Time: 1:45:00</span>
                  <span><i className="fas fa-signal"></i> Difficulty: Medium</span>
                </div>
                <button className="btn-primary">Resume Operation</button>
              </div>
            </div>
          </div>

          {/* Attack Vector Training */}
          <div className="card vector-library">
            <h2><i className="fas fa-book"></i> Attack Vector Library</h2>
            <div className="vector-grid">
              {[
                { icon: 'fa-bug', label: 'Exploit Development', progress: '65%' },
                { icon: 'fa-user-ninja', label: 'Social Engineering', progress: '80%' },
                { icon: 'fa-network-wired', label: 'Network Infiltration', progress: '45%' },
                { icon: 'fa-mobile-alt', label: 'Mobile Exploitation', progress: '30%' },
              ].map((item, idx) => (
                <div key={idx} className="vector-item">
                  <i className={`fas ${item.icon}`}></i>
                  <span>{item.label}</span>
                  <div className="vector-progress">
                    <div className="progress-mini" style={{ width: item.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Lab */}
          <div className="card training-lab">
            <h2><i className="fas fa-flask"></i> Red Team Lab</h2>
            <div className="lab-environments">
              {[
                {
                  title: 'Corporate Network Simulation',
                  desc: 'Practice enterprise network penetration',
                  systems: '12',
                  security: 'High',
                },
                {
                  title: 'Web Application Suite',
                  desc: 'Web vulnerability exploitation training',
                  systems: '8',
                  security: 'Medium',
                },
              ].map((lab, idx) => (
                <div key={idx} className="lab-env">
                  <h3>{lab.title}</h3>
                  <p>{lab.desc}</p>
                  <div className="env-details">
                    <span><i className="fas fa-server"></i> Systems: {lab.systems}</span>
                    <span><i className="fas fa-shield-alt"></i> Security: {lab.security}</span>
                  </div>
                  <button className="btn-primary">Launch Environment</button>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Board */}
          <div className="card mission-board">
            <h2><i className="fas fa-tasks"></i> Mission Board</h2>
            <div className="mission-list">
              {[
                {
                  title: 'Advanced Persistence',
                  xp: '500 XP',
                  desc: 'Establish persistent access in a hardened environment',
                  tags: ['Advanced', 'Stealth'],
                },
                {
                  title: 'Zero-Day Hunt',
                  xp: '1000 XP',
                  desc: 'Find and exploit unknown vulnerabilities',
                  tags: ['Expert', 'Research'],
                },
              ].map((mission, idx) => (
                <div key={idx} className="mission">
                  <div className="mission-header">
                    <h3>{mission.title}</h3>
                    <span className="mission-reward">{mission.xp}</span>
                  </div>
                  <p>{mission.desc}</p>
                  <div className="mission-tags">
                    {mission.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag">{tag}</span>
                    ))}
                  </div>
                  <button className="btn-primary">Accept Mission</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Tree */}
        <div className="skill-tree-container">
          <h2><i className="fas fa-tree"></i> Red Team Skill Tree</h2>
          <div className="skill-paths">
            <div className="skill-path">
              <h3>Exploitation</h3>
              <div className="skill-nodes">
                <div className="skill-node unlocked">
                  <i className="fas fa-bug"></i>
                  <span>Basic Exploits</span>
                </div>
                <div className="skill-node">
                  <i className="fas fa-virus"></i>
                  <span>Advanced Malware</span>
                </div>
              </div>
            </div>
            <div className="skill-path">
              <h3>Infiltration</h3>
              <div className="skill-nodes">
                <div className="skill-node unlocked">
                  <i className="fas fa-user-secret"></i>
                  <span>Stealth Basics</span>
                </div>
                <div className="skill-node">
                  <i className="fas fa-ghost"></i>
                  <span>Ghost Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RedTeamHub;
