/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  removeItem as removeItemAction,
  sort as sortItems,
  toggleCheckbox as toggleCheckboxItem,
} from '../actions';

const StyledBox = styled.div`
  background-color: white;
  width: 60%;
  margin: 5rem 0;
  box-shadow: 0px 10px 30px -10px hsla(0, 0%, 0%, 0.5);
`;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledListItem = styled.li`
  background-color: ${(props) => (props.header ? '#45421f' : 'transparent')};
  color: ${(props) => (props.header ? 'white' : 'black')};
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: ${(props) => (props.header ? '2rem 1.5rem' : '2.5rem 1.5rem')};
  border-bottom: 1px solid gray;
  position: relative;
`;

const StyledButton = styled.button`
  position: absolute;
  width: 3rem;
  height: 100%;
  top: 0;
  right: 0;
  border: none;
  background-color: orangered;
  color: white;
  font-size: 2rem;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledPagination = styled.div`
  font-size: 1.4rem;
  width: 50%;
  margin-left: auto;
  padding: 2.5rem 1.5rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = ({ todos, removeItem, sort, toggleCheckbox }) => {
  const [isNameAsc, setIsNameAsc] = useState(true);
  const [isPriorityAsc, setIsPriorityAsc] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
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

  const handleMouseHover = () => setIsHovering(!isHovering);

  const indexOfLastTodo = currentPage * perPage;
  const indexOfFirstTodo = indexOfLastTodo - perPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handlePerPage = (e) => {
    setPerPage(e.target.value * 1);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) return console.log('error');
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage >= todos.length / perPage) return console.log('error');
    setCurrentPage(currentPage + 1);
  };

  return (
    <StyledBox>
      <StyledListItem header>
        <p onClick={handleName}>Task name</p>
        <p onClick={handlePriority}>Priority</p>
        <p onClick={handleCheckbox}>Done</p>
      </StyledListItem>
      <StyledList onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
        {currentTodos.map(({ id, content, priority, done }) => {
          return (
            <StyledListItem key={id}>
              <p>{content}</p>
              {priority === 1 && <p>Low</p>}
              {priority === 2 && <p>Medium</p>}
              {priority === 3 && <p>High</p>}
              {done ? (
                <input
                  type="checkbox"
                  name="done"
                  id="done"
                  defaultChecked
                  onClick={() => toggleCheckbox(id)}
                />
              ) : (
                <input type="checkbox" name="done" id="done" onClick={() => toggleCheckbox(id)} />
              )}

              {isHovering && (
                <StyledButton onClick={() => removeItem(id)} type="button">
                  X
                </StyledButton>
              )}
            </StyledListItem>
          );
        })}
      </StyledList>
      <StyledPagination>
        <StyledWrapper>
          <label htmlFor="rows">
            Rows per page
            <select onChange={handlePerPage} value={perPage} name="rows" id="rows">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="15">20</option>
            </select>
          </label>
          <p>
            {indexOfFirstTodo + 1}-
            {currentPage >= todos.length / perPage ? todos.length : indexOfLastTodo} of{' '}
            {todos.length}
          </p>
          <div>
            <button type="button" onClick={handlePrevPage}>
              &#60;
            </button>
            <button type="button" onClick={handleNextPage}>
              &#62;
            </button>
          </div>
        </StyledWrapper>
      </StyledPagination>
    </StyledBox>
  );
};

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  sort: (attribute, isAsc) => dispatch(sortItems(attribute, isAsc)),
  toggleCheckbox: (id) => dispatch(toggleCheckboxItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
