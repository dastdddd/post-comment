import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoItem } from './../redux/actions';

const AddComent = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault()
    if (value) {
      dispatch(addTodoItem(value))
      setValue('')
    }else {
      alert ('empty')
    }
  }

  return (
    <form onSubmit={handleClick}>
      <input
        value={value}
        className='input'
        type="text"
        placeholder='Напиши что нибуть'
        onChange={(e) => setValue(e.target.value)} />
      <input hidden type="submit" />
    </form>
  );
};

export default AddComent;