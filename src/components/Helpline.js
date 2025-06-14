import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing, faPhone, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: none; }
`;

const HelplineContainer = styled.div`
  padding: 2.5rem 0;
  animation: ${fadeIn} 0.8s cubic-bezier(.4,2,.3,1);
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: var(--accent);
  }
`;

const FormCard = styled.div`
  background: var(--glass-bg);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const HelplineForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;

  input,
  textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background-color: transparent;
    color: var(--text);
    font-size: 1.1rem;
    outline: none;
    resize: vertical;

    &:focus {
      border-color: var(--primary);
    }
    &::placeholder {
      color: var(--text-secondary);
    }
  }

  textarea {
    min-height: 120px;
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
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label {
    top: -1.2rem;
    left: 0.5rem;
    font-size: 0.9rem;
    color: var(--primary);
    background-color: var(--card-bg);
    padding: 0 0.5rem;
    border-radius: 4px;
  }
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

const SuccessMessage = styled.p`
  color: var(--success);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const Helpline = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend API
    console.log({ name, phoneNumber, issueDescription });
    setSuccess(true);
    setName('');
    setPhoneNumber('');
    setIssueDescription('');
    setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <HelplineContainer>
      <SectionTitle><FontAwesomeIcon icon={faLifeRing} /> Helpline Support</SectionTitle>
      <FormCard className="glass">
        {success && <SuccessMessage>Your request has been submitted successfully!</SuccessMessage>}
        <HelplineForm onSubmit={handleSubmit}>
          <InputGroup>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name"><FontAwesomeIcon icon={faUser} /> Name</label>
          </InputGroup>
          <InputGroup>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder=" "
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="phoneNumber"><FontAwesomeIcon icon={faPhone} /> Phone Number</label>
          </InputGroup>
          <InputGroup>
            <textarea
              id="issueDescription"
              name="issueDescription"
              placeholder=" "
              rows="6"
              required
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
            ></textarea>
            <label htmlFor="issueDescription"><FontAwesomeIcon icon={faFileAlt} /> Issue Description</label>
          </InputGroup>
          <SubmitButton type="submit">Submit Request</SubmitButton>
        </HelplineForm>
      </FormCard>
    </HelplineContainer>
  );
};

export default Helpline; 