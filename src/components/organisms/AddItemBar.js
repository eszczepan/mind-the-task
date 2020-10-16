import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import Form from '../molecules/Form';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 50%;
  padding: 3rem 8rem;
  top: 0;
  right: 0;
  background-color: white;
  border-left: 10px solid ${({ theme }) => theme.thColor};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
  z-index: 100;

  @media (max-width: 1100px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 900px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
  @media (max-width: 580px) {
    padding: 2rem 0.5rem;
  }
`;

const AddItemBar = ({ isVisible }) => {
  return (
    <StyledWrapper isVisible={isVisible}>
      <Heading bar>Create new Task</Heading>
      <Form />
    </StyledWrapper>
  );
};

AddItemBar.propTypes = {
  isVisible: PropTypes.bool,
};

AddItemBar.defaultProps = {
  isVisible: false,
};

export default AddItemBar;
