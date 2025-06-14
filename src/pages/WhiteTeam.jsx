import React from "react";

const WhiteTeamHub = () => {
  return (
    <section id="white-team-hub" className="team-hub white-theme">
      <div className="team-hub-container white-theme">
        <div className="team-header">
          <h1><i className="fas fa-shield-alt"></i> White Team Defense</h1>
          <div className="team-stats">
            <span>Security Rating: A+</span>
            <span>Active Defenses: 5</span>
            <span>Prevention Rate: 92%</span>
          </div>
        </div>

        <div className="hub-grid">
          {/* Active Defenses */}
          <div className="card defenses-card">
            <h2>Active Defenses</h2>
            <div className="defense-list">
              <div className="defense">
                <h3>Operation Fortress</h3>
                <p>Implement zero-trust architecture</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "65%" }}>65%</div>
                </div>
                <button className="btn-primary">Monitor Defense</button>
              </div>
            </div>
          </div>

          {/* Security Tools */}
          <div className="card tools-library">
            <h2>Security Tools</h2>
            <div className="tools-grid">
              <div className="tool-item">
                <i className="fas fa-shield-virus"></i>
                <span>Intrusion Prevention</span>
              </div>
              <div className="tool-item">
                <i className="fas fa-eye"></i>
                <span>Threat Detection</span>
              </div>
              <div className="tool-item">
                <i className="fas fa-lock"></i>
                <span>Access Control</span>
              </div>
            </div>
          </div>

          {/* Defense Scenarios */}
          <div className="card scenarios-card">
            <h2>Defense Scenarios</h2>
            <div className="scenario-list">
              <div className="scenario">
                <h3>APT Response</h3>
                <p>Difficulty: Expert</p>
                <button className="btn-primary">Start Defense</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteTeamHub;
