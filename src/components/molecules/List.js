import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from '../atoms/ListItem';

const StyledList = styled.ul`
  list-style: none;
`;

const StyledButton = styled.button`
  position: absolute;
  width: 3rem;
  height: 50%;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  border: none;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 10%;
  cursor: pointer;
`;

const List = ({ currentTodos, removeItem, toggleCheckbox }) => {
  return (
    <StyledList>
      {currentTodos.map(({ id, content, priority, done }) => {
        return (
          <ListItem key={id}>
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

            <StyledButton onClick={() => removeItem(id)} type="button">
              X
            </StyledButton>
          </ListItem>
        );
      })}
    </StyledList>
  );
};

List.propTypes = {
  currentTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
};

export default List;
