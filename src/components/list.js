import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './listItem';
import { getComments } from '../thunk/sevices';

const List = () => {
  const { comments, isLoading, isErrorMessage } = useSelector(state => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('redux-comments', JSON.stringify(comments))
  }, [comments]);

  useEffect(() => {
    dispatch(getComments())
  }, [])

  //--------если isLoading -true (условие в sevices.js написано)
  if (isLoading) {
    return <h1>Loading...</h1>
    //загрузка условие в sevices.js
  }

  //-------------если ошибка работает эта условие (условие в sevices.js написано)
  if (isErrorMessage !== null) {
    return <h1>{isErrorMessage}</h1>
    //ошибка условие в sevices.js
  }


  //---------если данные пришла работает эта условие (условие в sevices.js написано)
  return (
    <div className='list'>
      {
        comments.map(item => <ListItem key={item.id} {...item} />)
      }
    </div>
  );
};

export default List;