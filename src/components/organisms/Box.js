import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  sort as sortItems,
  removeItem as removeItemAction,
  toggleCheckbox as toggleCheckboxItem,
} from '../../actions';
import List from '../molecules/List';
import ListItem from '../atoms/ListItem';
import Pagination from '../molecules/Pagination';

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 60%;
  margin: 5rem 0;
  box-shadow: 0px 10px 30px -10px hsla(0, 0%, 0%, 0.5);
  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Box = ({ todos, sort, removeItem, toggleCheckbox }) => {
  const [isNameAsc, setIsNameAsc] = useState(true);
  const [isPriorityAsc, setIsPriorityAsc] = useState(true);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleName = () => {
    sort('name', isNameAsc);
    return isNameAsc ? setIsNameAsc(false) : setIsNameAsc(true);
  };

  const handlePriority = () => {
    sort('priority', isPriorityAsc);
    return isPriorityAsc ? setIsPriorityAsc(false) : setIsPriorityAsc(true);
  };

  const handleCheckbox = () => {
    sort('done', isPriorityAsc);
    return isPriorityAsc ? setIsPriorityAsc(false) : setIsPriorityAsc(true);
  };

  const indexOfLastTodo = currentPage * perPage;
  const indexOfFirstTodo = indexOfLastTodo - perPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handlePerPage = (e) => {
    setPerPage(e.target.value * 1);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage >= todos.length / perPage) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <StyledBox>
      <ListItem header>
        <p onClick={handleName}>Task name</p>
        <p onClick={handlePriority}>Priority</p>
        <p onClick={handleCheckbox}>Done</p>
      </ListItem>
      <List currentTodos={currentTodos} removeItem={removeItem} toggleCheckbox={toggleCheckbox} />
      <Pagination
        handlePerPage={handlePerPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        perPage={perPage}
        indexOfFirstTodo={indexOfFirstTodo}
        currentPage={currentPage}
        todos={todos}
        indexOfLastTodo={indexOfLastTodo}
      />
    </StyledBox>
  );
};

Box.propTypes = {
  sort: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  sort: (attribute, isAsc) => dispatch(sortItems(attribute, isAsc)),
  toggleCheckbox: (id) => dispatch(toggleCheckboxItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
