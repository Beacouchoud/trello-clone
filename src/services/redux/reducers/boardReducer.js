const initialState = {
  columns: []
  // {id: number }
};

export const board = (state = initialState, action) => {

  switch (action.type) {

    case "ADD_COLUMN":
    {
      const { id } = action.payload; 
      return {...state, columns: [...state.columns, id] };
    }

    case "REMOVE_COLUMN": {
      const { columnId } = action.payload;
      const newColumns = state.columns.filter((id)=> id !== columnId);
      return {...state, columns: newColumns };
    }

    default:
      return state;
  }

};