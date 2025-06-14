import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
`;

const CommunityContainer = styled.div`
  padding: 2.5rem 0;
  animation: ${fadeIn} 0.8s cubic-bezier(.4,2,.3,1);
  max-width: 900px;
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

const PostForm = styled.form`
  background: var(--glass-bg);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  padding: 2rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 10px;
    background-color: transparent;
    color: var(--text);
    font-size: 1rem;
    min-height: 100px;
    resize: vertical;
    outline: none;

    &:focus {
      border-color: var(--primary);
    }
    &::placeholder {
      color: var(--text-secondary);
    }
  }

  button {
    align-self: flex-end;
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
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
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostCard = styled.div`
  background: var(--glass-bg);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    .username {
      font-weight: 700;
      color: var(--primary);
      font-size: 1.1rem;
    }

    .date {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
  }

  .post-text {
    color: var(--text);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const RepliesSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.05);

  h3 {
    font-size: 1.1rem;
    color: var(--accent);
    margin-bottom: 1rem;
  }
`;

const ReplyItem = styled.div`
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  margin-bottom: 0.7rem;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  
  .reply-username {
    font-weight: 600;
    color: var(--text);
  }

  .reply-text {
    color: var(--text-secondary);
  }
`;

const ReplyForm = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border);
    border-radius: 10px;
    background-color: transparent;
    color: var(--text);
    font-size: 0.95rem;
    min-height: 70px;
    resize: vertical;
    outline: none;

    &:focus {
      border-color: var(--primary);
    }
    &::placeholder {
      color: var(--text-secondary);
    }
  }

  button {
    align-self: flex-end;
    padding: 0.6rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
    color: white;
    border-radius: var(--radius);
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(108, 99, 255, 0.2);
    transition: all var(--transition);

    &:hover {
      box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3);
      transform: translateY(-1px);
    }
  }
`;

// Dummy Data
const dummyPosts = [
  {
    _id: 'post1',
    username: 'CyberWizard',
    createdAt: '2024-06-14T10:00:00Z',
    text: "Just completed the advanced penetration testing module! Highly recommend it. What's everyone working on today?",
    replies: [
      { username: 'NetDefender', text: "That's awesome! I'm currently trying to set up a secure honeypot." },
      { username: 'AnonSec', text: "Any tips for new ethical hackers?" }
    ],
  },
  {
    _id: 'post2',
    username: 'DataGuardian',
    createdAt: '2024-06-13T15:30:00Z',
    text: 'Has anyone explored the new AI-powered threat detection tools? Looking for recommendations.',
    replies: [],
  },
];

const Community = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [newPostText, setNewPostText] = useState('');
  const [replyTexts, setReplyTexts] = useState({}); // { postId: replyText }

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostText.trim()) {
      const newPost = {
        _id: `post${posts.length + 1}`,
        username: 'CurrentUser', // Replace with dynamic user
        createdAt: new Date().toISOString(),
        text: newPostText.trim(),
        replies: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostText('');
    }
  };

  const handleReplySubmit = (e, postId) => {
    e.preventDefault();
    const replyText = replyTexts[postId];
    if (replyText && replyText.trim()) {
      setPosts(posts.map(post => 
        post._id === postId
          ? { ...post, replies: [...post.replies, { username: 'CurrentUser', text: replyText.trim() }] }
          : post
      ));
      setReplyTexts(prev => ({ ...prev, [postId]: '' }));
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Assume user is logged in for now
  const userLoggedIn = true; 

  return (
    <CommunityContainer>
      <SectionTitle><FontAwesomeIcon icon={faNewspaper} /> Community Forum</SectionTitle>

      {userLoggedIn ? (
        <PostForm onSubmit={handlePostSubmit} className="glass">
          <textarea
            name="text"
            rows="3"
            placeholder="Share something with the community..."
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Post</button>
        </PostForm>
      ) : (
        <p style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem'}}>Please <Link to="/login" style={{color: 'var(--primary)'}}>log in</Link> to post.</p>
      )}

      <PostList>
        {posts.map((post) => (
          <PostCard key={post._id} className="glass">
            <div className="post-header">
              <span className="username"><FontAwesomeIcon icon={faUserCircle} /> {post.username}</span>
              <span className="date">{formatDate(post.createdAt)}</span>
            </div>
            <p className="post-text">{post.text}</p>

            <RepliesSection>
              <h3>Replies:</h3>
              {post.replies.length > 0 ? (
                post.replies.map((reply, index) => (
                  <ReplyItem key={index}>
                    <span className="reply-username"><FontAwesomeIcon icon={faUserCircle} size="sm" /> {reply.username}</span>:
                    <span className="reply-text">{reply.text}</span>
                  </ReplyItem>
                ))
              ) : (
                <p style={{marginLeft: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>No replies yet.</p>
              )}
            </RepliesSection>

            {userLoggedIn && (
              <ReplyForm onSubmit={(e) => handleReplySubmit(e, post._id)}>
                <textarea
                  name="text"
                  rows="2"
                  placeholder="Reply..."
                  value={replyTexts[post._id] || ''}
                  onChange={(e) => setReplyTexts(prev => ({ ...prev, [post._id]: e.target.value }))}
                  required
                ></textarea>
                <button type="submit">Reply</button>
              </ReplyForm>
            )}
          </PostCard>
        ))}
      </PostList>
    </CommunityContainer>
  );
};

export default Community; 