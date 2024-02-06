import { ADD_TODO_ITEM, DELETE_ITEM } from "./types"; 


export const addTodoItem = (text) =>({type: ADD_TODO_ITEM, payload: text});
export const deleteItem = (id) =>({type: DELETE_ITEM, payload: id});

export const onLikeCount = ()=> ({type: 'ON_LIKE_COUNT'});
export const onDisLikeCount = ()=> ({type: 'ON_DIS_LIKE_COUNT'});

export const onLoadComments = (data) => ({type:'ON_LOAD_COMMENTS', payload: data});
export const onLoadingComments = (bool) => ({type:'ON_LOADING_COMMENTS', payload: bool});
export const onErrorComments = (text) => ({type:'ON_ERROR_COMMENTS', payload: text});