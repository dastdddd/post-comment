import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onLikeCount, onDisLikeCount } from '../redux/actions';
//import images from '../block1-bc.jpg';

const ImagesLike = () => {
  const dispatch = useDispatch()

  const {like, dislike} = useSelector(state=>state.like)

  useEffect(()=>{
    localStorage.setItem('redux-like', JSON.stringify(like))
  },[like])

  useEffect(()=>{
    localStorage.setItem('redux-dislike', JSON.stringify(dislike))
  },[dislike])

  return (
    <div className='images-like'>
      {/*<img src={images} alt="" />*/}
      <div className="imeges">
      </div>
      <div className="like">
        <div onClick={()=>dispatch(onLikeCount())} className="like__plus">+ {like}</div>
        <div onClick={()=>dispatch(onDisLikeCount())} className="like__minus">- {dislike}</div>
      </div>
    </div>
  );
};

export default ImagesLike;