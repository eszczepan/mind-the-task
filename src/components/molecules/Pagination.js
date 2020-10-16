import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from '../atoms/Select';
import Button from '../atoms/Button';

const StyledPagination = styled.div`
  font-size: 1.4rem;
  width: 50%;
  margin-left: auto;
  padding: 2.5rem 1.5rem;

  @media (max-width: 1300px) {
    width: 60%;
  }

  @media (max-width: 1100px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 580px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Pagination = ({
  handlePerPage,
  handlePrevPage,
  handleNextPage,
  perPage,
  indexOfFirstTodo,
  currentPage,
  todos,
  indexOfLastTodo,
}) => {
  return (
    <StyledPagination>
      <StyledWrapper>
        <label htmlFor="rows">
          Rows per page:
          <Select onChange={handlePerPage} value={perPage} name="rows" id="rows">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Select>
        </label>
        <p>
          {indexOfFirstTodo + 1} -{' '}
          {currentPage >= todos.length / perPage ? todos.length : indexOfLastTodo} of {todos.length}
        </p>
        <div>
          <Button pagination type="button" onClick={handlePrevPage}>
            &#60;
          </Button>
          <Button pagination type="button" onClick={handleNextPage}>
            &#62;
          </Button>
        </div>
      </StyledWrapper>
    </StyledPagination>
  );
};

Pagination.propTypes = {
  handlePerPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  indexOfFirstTodo: PropTypes.number.isRequired,
  indexOfLastTodo: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Pagination;
