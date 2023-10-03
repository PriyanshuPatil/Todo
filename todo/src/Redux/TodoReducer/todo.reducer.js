import {
  DELETE_TODO_ERROR,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_USER_TODO_ERROR,
  GET_USER_TODO_LOADING,
  GET_USER_TODO_SUCCESS,
  POST_TODO_ERROR,
  POST_TODO_LOADING,
  POST_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
} from "./todo.actionType";

const initState = {
  token: "",
  todo: [],
  userTodo: [],
  loading: false,
  error: false,
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_TODO_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case GET_TODO_SUCCESS: {
      return { ...state, loading: false, error: false, todo: payload };
    }
    case UPDATE_TODO_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case UPDATE_TODO_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case UPDATE_TODO_SUCCESS: {
      let updated_todo = state.todo.map((el) => {
        if (el._id == payload) {
          return { ...el, status: !el.status };
        } else {
          return el;
        }
      });
      return { ...state, loading: false, error: false, todo: updated_todo };
    }
    case DELETE_TODO_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case DELETE_TODO_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case DELETE_TODO_SUCCESS: {
      let deleted_todo = state.todo.filter((el) => {
        if (el._id != payload) {
          return el;
        }
      });
      return { ...state, loading: false, error: false, todo: deleted_todo };
    }
    case POST_TODO_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case POST_TODO_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case POST_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        todo: [...state.todo, payload],
      };
    }

    case GET_USER_TODO_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_USER_TODO_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case GET_USER_TODO_SUCCESS: {
      let user_todo = state.todo.filter((el) => {
        if (el.username == payload.username) {
          return el;
        }
      });
      return { ...state, loading: false, error: false, userTodo: user_todo };
    }
    default: {
      return state;
    }
  }
};
