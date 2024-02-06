import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions';

const ListItem = ({ name, id, postId }) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (name) {
      setValue(`${postId} ${name}`)
      //добовление дополнительной data
    }
  }, [name])
  //измененин коммента

  return (
    <div className='comment-item'>
      <span onClick={() => dispatch(deleteItem(id))}>x</span>
      <input
        onChange={(e) => {
          setValue(e.target.value)
          if (e.target.value.length === 0) {
            dispatch(deleteItem(id))
          }
          // удаляет текс если очистить поле полностью
        }}
        className='comment'
        type="text"
        value={value} />
    </div>
  );
};

export default ListItem;