import React from "react";
import "./styles.css";

const TrainingPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-brand">Cyber Quest</a>
          <ul className="navbar-links">
            <li><a href="/training">Training</a></li>
            <li><a href="/quiz">Quiz</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="training-grid">
        <div className="card module-card">
          <div className="module-header">
            <h3>Phishing Defense</h3>
            <span className="difficulty">Intermediate</span>
          </div>
          <p>Learn to identify and protect against phishing attacks</p>
          <div className="module-progress">
            <div className="progress-bar">
              <div className="progress" style={{ width: "60%" }}>60%</div>
            </div>
          </div>
          <button className="btn-primary">Continue</button>
        </div>
        {/* Add more training modules here */}
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Cyber Quest. All rights reserved.</p>
      </footer>
    </>
  );
};

export default TrainingPage;
