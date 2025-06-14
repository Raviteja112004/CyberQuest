import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px); /* Adjust based on header/footer height */
  padding: 2rem;
`;

const FormCard = styled.div`
  ${({ className }) => className === 'glass' ? '' : `
    background: rgba(255, 255, 250, 0.094);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1.5px solid rgba(255,255,255,0.08);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  `}
  padding: 2.5rem 3rem;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  min-height: 550px;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--primary);
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background-color: transparent;
    color: var(--text);
    font-size: 1.1rem;
    outline: none;

    &:focus {
      border-color: var(--primary);
    }

    &::placeholder {
      color: var(--text-secondary);
    }
  }

  label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: var(--text-secondary);
    font-size: 1.1rem;
    pointer-events: none;
    transition: 0.2s ease all;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top: -1.2rem;
    left: 0.5rem;
    font-size: 0.9rem;
    color: var(--primary);
    background-color: var(--card-bg);
    padding: 0 0.5rem;
    border-radius: 4px;
  }
`;

const ErrorMessage = styled.p`
  color: var(--danger);
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 0.95rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  transition: all var(--transition);

  &:hover {
    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4);
    transform: translateY(-2px);
  }
`;

const StyledLink = styled(Link)`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: var(--text-secondary);
  &:hover {
    color: var(--primary);
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend for authentication
    // For now, let's simulate a login attempt
    if (username === 'testuser' && password === 'password123') {
      alert('Login successful!');
      setError('');
      // Redirect or update app state
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <PageContainer>
      <FormCard className="glass">
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <input
              type="text"
              id="username"
              name="name"
              placeholder=" "
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </InputGroup>
          <InputGroup>
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </InputGroup>
          <SubmitButton type="submit">Log in</SubmitButton>
        </LoginForm>
        <StyledLink to="/signup">Don't Have an Account?</StyledLink>
      </FormCard>
    </PageContainer>
  );
};

export default Login; 