import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItem as addItemAction } from '../actions';

const StyledForm = styled.form`
  width: 30%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 30px -10px hsla(0, 0%, 0%, 0.5);
`;

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-color: ${(props) => (props.invalid ? 'red' : 'transparent')};
  border-radius: 10px;
`;

const Form = ({ addItem }) => {
  const [contentValue, setContentValue] = useState('');
  const [priorityValue, setPriorityValue] = useState(2);
  const [invalidInput, setInvalidInput] = useState(false);

  const generateId = () => Math.floor(Math.random() * (100000 - 1)) + 1;

  const handleContent = (e) => {
    setContentValue(e.target.value);
  };

  const handlePriority = (e) => setPriorityValue(e.target.value * 1);

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (contentValue.trim() === '') {
      return setInvalidInput(true);
    }
    setContentValue('');
    setInvalidInput(false);
    return addItem(generateId(), contentValue.trim(), priorityValue);
  };

  return (
    <StyledForm>
      <StyledInput
        type="text"
        value={contentValue}
        onChange={handleContent}
        invalid={invalidInput}
        placeholder={invalidInput ? 'Text is required...' : null}
      />
      <label htmlFor="priority">
        Priority
        <select onChange={handlePriority} value={priorityValue} name="priority" id="priority">
          <option value="3">High</option>
          <option value="2">Medium</option>
          <option value="1">Low</option>
        </select>
      </label>
      <button onClick={handleAddBtn} type="submit">
        Add task
      </button>
    </StyledForm>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (id, content, priority) => dispatch(addItemAction(id, content, priority)),
});

export default connect(null, mapDispatchToProps)(Form);
