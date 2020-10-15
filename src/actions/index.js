export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};

export const addItem = (id, content, priority) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      id,
      content,
      priority,
    },
  };
};

export const toggleCheckbox = (id) => {
  return {
    type: 'TOGGLE_CHECKBOX',
    payload: {
      id,
    },
  };
};

export const sort = (attribute, isAsc) => {
  return {
    type: 'SORT',
    payload: {
      attribute,
      isAsc,
    },
  };
};
