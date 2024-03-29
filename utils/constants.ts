




export const initialState = { user: {}, account: {} };

export function reducer(state:any, action:any) {
    switch (action.type) {
      case 'change':
        return { ...state, ...action.payload };
      case 'decrement':
        return { ...state, ...action.payload };
      case 'reset':
        return initialState;
      default:
        throw new Error('Unknown action type');
    }
  }
  