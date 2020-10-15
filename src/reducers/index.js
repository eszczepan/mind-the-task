const initialState = {
  todos: [
    {
      id: 1,
      content: 'Take out the trash',
      priority: 2,
      done: false,
    },
    {
      id: 2,
      content: 'Feed the dog',
      priority: 3,
      done: true,
    },
    {
      id: 3,
      content: 'Order lunch',
      priority: 3,
      done: false,
    },
    {
      id: 4,
      content: 'Send email to Peter',
      priority: 1,
      done: true,
    },
    {
      id: 5,
      content: 'Buy groceries',
      priority: 2,
      done: false,
    },
    {
      id: 6,
      content: 'Sell groceries',
      priority: 1,
      done: false,
    },
    {
      id: 7,
      content: 'Eat groceries',
      priority: 3,
      done: false,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM': {
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload.id)],
      };
    }
    case 'ADD_ITEM': {
      const { id, content, priority } = action.payload;
      return {
        ...state,
        todos: [
          {
            id,
            content,
            priority,
            done: false,
          },
          ...state.todos,
        ],
      };
    }

    case 'TOGGLE_CHECKBOX': {
      const { id } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            if (item.id === id) {
              item.done = !item.done;
            }
            return item;
          }),
        ],
      };
    }
    case 'SORT': {
      const { attribute, isAsc } = action.payload;
      switch (attribute) {
        case 'name':
          return {
            ...state,
            todos: [
              ...state.todos.sort((a, b) =>
                a.content.toLowerCase() < b.content.toLowerCase() ? -1 : 1 * (isAsc ? 1 : -1),
              ),
            ],
          };
        case 'priority':
          return {
            ...state,
            todos: [
              ...state.todos.sort((a, b) =>
                isAsc ? b.priority - a.priority : a.priority - b.priority,
              ),
            ],
          };
        case 'done':
          return {
            ...state,
            todos: [...state.todos.sort((a, b) => (isAsc ? a.done - b.done : b.done - a.done))],
          };
        default:
          return state;
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
