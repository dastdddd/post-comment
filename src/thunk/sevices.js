import axios from "axios";
import { onErrorComments, onLoadComments, onLoadingComments } from "../redux/actions";


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
//базовый URL чтобы не писать каждый раз полный ссылку в axios.get('users')

export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('posts')
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
}
export const getComments = () => {
  return async (dispatch) => {
    dispatch(onLoadingComments(true))
    //onLoadingComments - делаем true до try
    dispatch(onErrorComments(null))
    //onErrorComments - делаем null тоже пока отключаем ошибку
    try {
      const response = await axios.get('comments?_limit=10')
      console.log(response);
      dispatch(onLoadComments(response.data))
      //даем на payload response.data
      dispatch(onLoadingComments(false))
      dispatch(onErrorComments(null))
      //отключаем сообшения и загрузки если успешно
    } catch (e) {
      //console.log(e);
      dispatch(onLoadingComments(false))
      //onLoadingComments - обязаьтельно отключаем
      dispatch(onErrorComments(e.message))
    }
  }
}
//?_limit=10&page=2' -  ? 1й параметр лимит & 2й параметр