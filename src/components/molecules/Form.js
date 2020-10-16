import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItem as addItemAction } from '../../actions';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Select from '../atoms/Select';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80%;
  margin: 5rem 0 0;
  padding: 4rem 3rem;
  box-shadow: 0px 10px 30px -10px hsla(0, 0%, 0%, 0.5);
  @media (max-width: 580px) {
    margin: 3rem 0 0;
    padding: 4rem 1.5rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
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
      <StyledDiv>
        <Input
          type="text"
          value={contentValue}
          onChange={handleContent}
          invalid={invalidInput}
          placeholder={invalidInput ? 'Text is required...' : 'MindTheTask'}
          maxlength="50"
        />
        <Label htmlFor="priority">Priority</Label>
        <Select
          priority
          onChange={handlePriority}
          value={priorityValue}
          name="priority"
          id="priority"
        >
          <option value="3">High</option>
          <option value="2">Medium</option>
          <option value="1">Low</option>
        </Select>
      </StyledDiv>
      <Button add onClick={handleAddBtn} type="submit">
        Add task
      </Button>
    </StyledForm>
  );
};

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (id, content, priority) => dispatch(addItemAction(id, content, priority)),
});

export default connect(null, mapDispatchToProps)(Form);
