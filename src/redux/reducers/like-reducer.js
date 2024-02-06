const initialState = {
  like: JSON.parse(localStorage.getItem('redux-like')) || 0,
  dislike: JSON.parse(localStorage.getItem('redux-dislike')) || 0
}

export const likeReducer = (state = initialState, action) => {
  const { type } = action;
  const { like, dislike } = state;
  switch (type) {
    case 'ON_LIKE_COUNT': {
      return {
        ...state,
        like: like + 1
      }
    }
    case 'ON_DIS_LIKE_COUNT': {
      return {
        ...state,
        dislike: dislike + 1
      }
    }
    default:
      return state
  }
}
