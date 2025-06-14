import React, { useState } from 'react';

const IndexComponent = ({ name = "John Doe", content = "", form = "#" }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const switchToTeamHub = (team) => {
    setActiveSection(`${team}-team-hub`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-shield-alt text-blue-400 text-xl"></i>
            <span className="text-xl font-bold">CyberGuard</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => showSection('dashboard')} 
              className={`flex items-center space-x-2 px-3 py-2 rounded ${activeSection === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => showSection('training')} 
              className={`flex items-center space-x-2 px-3 py-2 rounded ${activeSection === 'training' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              <i className="fas fa-graduation-cap"></i>
              <span>Training</span>
            </button>
            <button 
              onClick={() => showSection('lab')} 
              className={`flex items-center space-x-2 px-3 py-2 rounded ${activeSection === 'lab' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              <i className="fas fa-flask"></i>
              <span>Cyber Lab</span>
            </button>
            <button 
              onClick={() => showSection('quests')} 
              className={`flex items-center space-x-2 px-3 py-2 rounded ${activeSection === 'quests' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              <i className="fas fa-tasks"></i>
              <span>Quests</span>
            </button>
            <button 
              onClick={() => showSection('news')} 
              className={`flex items-center space-x-2 px-3 py-2 rounded ${activeSection === 'news' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              <i className="fas fa-newspaper"></i>
              <span>News</span>
            </button>
            <button 
              onClick={() => showSection('team-selection')} 
              className={`flex items-center space-x-2 px-3 py-2 rounded ${activeSection === 'team-selection' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
            >
              <span>Team Selection</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <img src="/api/placeholder/40/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
              <div className="text-sm">
                <div className="font-medium">{name}</div>
                <div className="text-blue-400">Level 12</div>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button onClick={() => showSection('dashboard')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700">
              <i className="fas fa-home mr-2"></i>Dashboard
            </button>
            <button onClick={() => showSection('training')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700">
              <i className="fas fa-graduation-cap mr-2"></i>Training
            </button>
            <button onClick={() => showSection('lab')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700">
              <i className="fas fa-flask mr-2"></i>Cyber Lab
            </button>
            <button onClick={() => showSection('quests')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700">
              <i className="fas fa-tasks mr-2"></i>Quests
            </button>
            <button onClick={() => showSection('news')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700">
              <i className="fas fa-newspaper mr-2"></i>News
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Progress Overview */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Your Progress</h2>
              <div className="space-y-4">
                <div>
                  <span className="block text-sm text-gray-400 mb-2">Overall Progress</span>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full flex items-center justify-center text-xs font-bold" style={{width: '75%'}}>
                      75%
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="block text-sm text-gray-400">Points</span>
                    <span className="text-xl font-bold">2,450</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400">Completed Modules</span>
                    <span className="text-xl font-bold">15/20</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Challenges */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Active Challenges</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-lock text-yellow-500"></i>
                  <div className="flex-1">
                    <h3 className="font-semibold">Phishing Defense</h3>
                    <p className="text-sm text-gray-400">Identify and report suspicious emails</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-shield-virus text-red-500"></i>
                  <div className="flex-1">
                    <h3 className="font-semibold">Malware Analysis</h3>
                    <p className="text-sm text-gray-400">Learn to detect and analyze malware</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <i className="fas fa-trophy text-yellow-500 text-2xl mb-2"></i>
                  <span className="text-sm">Firewall Master</span>
                </div>
                <div className="text-center">
                  <i className="fas fa-medal text-blue-500 text-2xl mb-2"></i>
                  <span className="text-sm">Encryption Expert</span>
                </div>
                <div className="text-center opacity-50">
                  <i className="fas fa-lock text-gray-500 text-2xl mb-2"></i>
                  <span className="text-sm">Network Guardian</span>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Top Performers</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <img src="/api/placeholder/30/30" alt="User" className="w-8 h-8 rounded-full" />
                    <span>Sarah Connor</span>
                  </div>
                  <span className="text-yellow-500 font-semibold">3,250 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <img src="/api/placeholder/30/30" alt="User" className="w-8 h-8 rounded-full" />
                    <span>John Smith</span>
                  </div>
                  <span className="text-gray-400 font-semibold">3,100 pts</span>
                </div>
                <div className="flex items-center justify-between bg-blue-900 p-2 rounded">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <img src="/api/placeholder/30/30" alt="User" className="w-8 h-8 rounded-full" />
                    <span className="font-semibold">You</span>
                  </div>
                  <span className="text-blue-400 font-semibold">2,450 pts</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Training Section */}
        {activeSection === 'training' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Phishing Defense</h3>
                <span className="bg-orange-600 px-2 py-1 rounded text-xs">Intermediate</span>
              </div>
              <p className="text-gray-400 mb-4">Learn to identify and protect against phishing attacks</p>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div className="bg-blue-600 h-3 rounded-full" style={{width: '60%'}}></div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold">Continue</button>
            </div>
          </div>
        )}

        {/* Cyber Lab Section */}
        {activeSection === 'lab' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Virtual Lab Environment</h2>
              <div className="flex space-x-4 mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold">Start Simulation</button>
                <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded font-semibold">Reset Environment</button>
              </div>
              <div className="bg-black rounded-lg p-4">
                <div className="bg-gray-700 px-3 py-1 rounded-t text-sm">Terminal</div>
                <div className="bg-black p-4 rounded-b font-mono text-green-400">
                  <p>root@cyberlab:~# _</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quests Section */}
        {activeSection === 'quests' && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Daily Challenge</h3>
                  <span className="text-orange-400 font-mono">23:45:12</span>
                </div>
                <p className="text-gray-400 mb-4">Complete 3 phishing identification exercises</p>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div className="bg-green-600 h-3 rounded-full flex items-center justify-center text-xs font-bold" style={{width: '33%'}}>
                    1/3
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold">Start Quest</button>
              </div>
            </div>
            
            {/* Quiz Container */}
            <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold mb-6 text-center">Cybersecurity Quiz</h1>
              <div className="space-y-4">
                <div className="question text-lg"></div>
                <div className="options space-y-2"></div>
                <div className="result"></div>
                <div className="flex space-x-4 justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold">Next Question</button>
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold">Submit Quiz</button>
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold">Restart Quiz</button>
                </div>
                <div className="score text-center text-xl font-bold"></div>
              </div>
            </div>
          </div>
        )}

        {/* News Section */}
        {activeSection === 'news' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src="/api/placeholder/300/200" alt="Cyber News" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Latest Cybersecurity Threats</h3>
                <p className="text-gray-400 mb-3">New ransomware variant targeting healthcare sector...</p>
                <span className="text-sm text-blue-400">2 hours ago</span>
              </div>
            </div>
          </div>
        )}

        {/* Team Selection Section */}
        {activeSection === 'team-selection' && (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Choose Your Path</h1>
            <p className="text-gray-400 mb-8">Select your specialized training track in cybersecurity</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-900 to-red-700 rounded-lg p-6">
                <div className="text-center">
                  <i className="fas fa-dragon text-4xl mb-4"></i>
                  <h2 className="text-2xl font-bold mb-2">Red Team</h2>
                  <p className="text-red-200 mb-4">Offensive Security Specialists</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li><i className="fas fa-check text-green-400 mr-2"></i> Penetration Testing</li>
                    <li><i className="fas fa-check text-green-400 mr-2"></i> Exploit Development</li>
                    <li><i className="fas fa-check text-green-400 mr-2"></i> Social Engineering</li>
                    <li><i className="fas fa-check text-green-400 mr-2"></i> Advanced Persistence</li>
                  </ul>
                  <button 
                    onClick={() => switchToTeamHub('red')}
                    className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold text-white"
                  >
                    Join Red Team
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-6">
                <div className="text-center">
                  <i className="fas fa-shield-alt text-4xl mb-4"></i>
                  <h2 className="text-2xl font-bold mb-2">White Team</h2>
                  <p className="text-blue-200 mb-4">Defensive Security Experts</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li><i className="fas fa-check text-green-400 mr-2"></i> System Hardening</li>
                    <li><i className="fas fa-check text-green-400 mr-2"></i> Incident Response</li>
                    <li><i className="fas fa-check text-green-400 mr-2"></i> Threat Analysis</li>
                    <li><i className="fas fa-check text-green-400 mr-2"></i> Security Architecture</li>
                  </ul>
                  <button 
                    onClick={() => switchToTeamHub('white')}
                    className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold text-white"
                  >
                    Join White Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Red Team Hub */}
        {activeSection === 'red-team-hub' && (
          <div className="bg-gradient-to-br from-red-900 to-gray-900 rounded-lg p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4"><i className="fas fa-dragon mr-2"></i> Red Team Operations Center</h1>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-red-700 px-3 py-1 rounded"><i className="fas fa-medal mr-2"></i> Team Rank: Elite</span>
                <span className="bg-red-700 px-3 py-1 rounded"><i className="fas fa-crosshairs mr-2"></i> Active Operations: 3</span>
                <span className="bg-red-700 px-3 py-1 rounded"><i className="fas fa-chart-line mr-2"></i> Success Rate: 78%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Operations */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold"><i className="fas fa-fire mr-2"></i> Active Operations</h2>
                  <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"><i className="fas fa-plus mr-1"></i> New</button>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-700 rounded p-4">
                    <h3 className="font-semibold mb-2">Operation Shadow Strike</h3>
                    <p className="text-gray-400 text-sm mb-2"><i className="fas fa-user-secret mr-1"></i> Advanced Persistence Training</p>
                    <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mb-3">
                      <span><i className="fas fa-clock mr-1"></i> 2:30:00</span>
                      <span><i className="fas fa-signal mr-1"></i> Hard</span>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">Resume Operation</button>
                  </div>
                </div>
              </div>

              {/* Attack Vector Library */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4"><i className="fas fa-book mr-2"></i> Attack Vector Library</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded p-3 text-center">
                    <i className="fas fa-bug text-2xl mb-2 text-red-400"></i>
                    <div className="text-sm">Exploit Development</div>
                    <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
                      <div className="bg-red-500 h-1 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded p-3 text-center">
                    <i className="fas fa-user-ninja text-2xl mb-2 text-red-400"></i>
                    <div className="text-sm">Social Engineering</div>
                    <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
                      <div className="bg-red-500 h-1 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded p-3 text-center">
                    <i className="fas fa-network-wired text-2xl mb-2 text-red-400"></i>
                    <div className="text-sm">Network Infiltration</div>
                    <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
                      <div className="bg-red-500 h-1 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded p-3 text-center">
                    <i className="fas fa-mobile-alt text-2xl mb-2 text-red-400"></i>
                    <div className="text-sm">Mobile Exploitation</div>
                    <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
                      <div className="bg-red-500 h-1 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* White Team Hub */}
        {activeSection === 'white-team-hub' && (
          <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-lg p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4"><i className="fas fa-shield-alt mr-2"></i> White Team Defense</h1>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-blue-700 px-3 py-1 rounded">Security Rating: A+</span>
                <span className="bg-blue-700 px-3 py-1 rounded">Active Defenses: 5</span>
                <span className="bg-blue-700 px-3 py-1 rounded">Prevention Rate: 92%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Defenses */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Active Defenses</h2>
                <div className="bg-gray-700 rounded p-4">
                  <h3 className="font-semibold mb-2">Operation Fortress</h3>
                  <p className="text-gray-400 text-sm mb-2">Implement zero-trust architecture</p>
                  <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Monitor Defense</button>
                </div>
              </div>

              {/* Security Tools */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Security Tools</h2>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3 bg-gray-700 rounded p-3">
                    <i className="fas fa-shield-virus text-blue-400"></i>
                    <span>Intrusion Prevention</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-700 rounded p-3">
                    <i className="fas fa-eye text-blue-400"></i>
                    <span>Threat Detection</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-700 rounded p-3">
                    <i className="fas fa-lock text-blue-400"></i>
                    <span>Access Control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default IndexComponent;