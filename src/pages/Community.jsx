

import React, { useState } from 'react';
import { formatDate } from '../utils/dateUtils';

const Community = ({ user, posts = [] }) => {
  const [newPost, setNewPost] = useState('');
  const [replyTexts, setReplyTexts] = useState({});

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    try {
      const response = await fetch('/community/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newPost }),
      });
      
      if (response.ok) {
        setNewPost('');
        // Refresh posts or update state
        window.location.reload();
      }
    } catch (error) {
      console.error('Error posting:', error);
    }
  };

  const handleReplySubmit = async (postId, e) => {
    e.preventDefault();
    const replyText = replyTexts[postId];
    if (!replyText?.trim()) return;

    try {
      const response = await fetch(`/community/reply/${postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: replyText }),
      });
      
      if (response.ok) {
        setReplyTexts({ ...replyTexts, [postId]: '' });
        // Refresh posts or update state
        window.location.reload();
      }
    } catch (error) {
      console.error('Error replying:', error);
    }
  };

  const handleReplyChange = (postId, value) => {
    setReplyTexts({ ...replyTexts, [postId]: value });
  };

  return (
    <div className="dark-mode min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-shield-alt text-green-400"></i>
              <span className="text-xl font-bold">CyberGuard</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="/" className="flex items-center space-x-1 text-green-400">
                <i className="fas fa-home"></i>
                <span>Dashboard</span>
              </a>
              <a href="/wardrobe" className="flex items-center space-x-1 hover:text-green-400">
                <i className="fas fa-graduation-cap"></i>
                <span>Training</span>
              </a>
              <a href="/lab" className="flex items-center space-x-1 hover:text-green-400">
                <i className="fas fa-flask"></i>
                <span>Cyber Lab</span>
              </a>
              <a href="/quests" className="flex items-center space-x-1 hover:text-green-400">
                <i className="fas fa-tasks"></i>
                <span>Quests</span>
              </a>
              <a href="/community" className="flex items-center space-x-1 hover:text-green-400">
                <i className="fas fa-newspaper"></i>
                <span>News</span>
              </a>
            </div>

            {user && (
              <div className="flex items-center space-x-3">
                <img 
                  src="/api/placeholder/40/40" 
                  alt="User Avatar" 
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-sm">
                  <div className="font-medium">{user.username}</div>
                  <div className="text-gray-400">Level {user.level}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Community Engagement</h1>

        {/* Post Form */}
        {user ? (
          <form onSubmit={handlePostSubmit} className="mb-8">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows="3"
              placeholder="Share something with the community..."
              className="w-full border border-gray-600 bg-gray-800 text-white p-3 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Post
            </button>
          </form>
        ) : (
          <p className="mb-4">
            Please <a href="/login" className="text-blue-400 hover:underline">log in</a> to post.
          </p>
        )}

        {/* Posts Section */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-800 text-green-400 border-2 border-green-400 p-4 rounded-md shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{post.username}</span>
                <span className="text-gray-500 text-sm">
                  {formatDate(post.createdAt)}
                </span>
              </div>
              <p className="mb-4">{post.text}</p>

              {/* Replies */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Replies:</h3>
                {post.replies && post.replies.length > 0 ? (
                  <div className="space-y-2">
                    {post.replies.map((reply, index) => (
                      <div key={index} className="ml-4 p-2 bg-gray-700 rounded">
                        <span className="font-semibold">{reply.username}</span>: {reply.text}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="ml-4 text-gray-400">No replies yet.</p>
                )}
              </div>

              {/* Reply Form */}
              {user && (
                <form onSubmit={(e) => handleReplySubmit(post._id, e)} className="mt-4">
                  <textarea
                    value={replyTexts[post._id] || ''}
                    onChange={(e) => handleReplyChange(post._id, e.target.value)}
                    rows="3"
                    placeholder="Reply..."
                    className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Reply
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 shadow-md py-8 w-full mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 CyberGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Community;