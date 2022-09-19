import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CardItem(props) {
  const navigate = useNavigate();
    const createPost = () => {
        navigate('/News',
            {
                state:props
            });
    }
  return (
    <>
      <li className='cards__item'onClick={() => { createPost() }}>
        <div className='cards__item__link'>

        
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
