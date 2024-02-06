import { ADD_TODO_ITEM, DELETE_ITEM } from "../types";


const initialState = {//состояние
  comments: JSON.parse(localStorage.getItem('redux-comments')) || [],
  isLoading: false,
  //isLoading - загрузка по умолчании false
  isErrorMessage: null,
  //isErrorMessage - ошибка по умолчании null
}

export const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { comments } = state;
  switch (type) {
    case ADD_TODO_ITEM: {
      const newItem = {
        id: Date.now(),
        name: payload,
        body: payload,
        postId: 1,
        email: `${payload}@mail.ru`
        
      }
      return {
        ...state,
        comments: [newItem, ...comments]
      }
    }
    case DELETE_ITEM: {
      const newItem = comments.filter(item => item.id !== payload);
      return {
        ...state,
        comments: newItem
      }
    }
    case 'ON_LOAD_COMMENTS': {
      return{
        ...state,
        comments: payload
      }
    }
    case 'ON_LOADING_COMMENTS': {
      return {
        ...state,
        isLoading: payload
      }
    }
    case 'ON_ERROR_COMMENTS': {
      return {
        ...state,
        isErrorMessage: payload
      }
    }
    default:
      return state
  }
}
