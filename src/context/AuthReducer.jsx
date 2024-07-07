export const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
  };
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          token: null,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  