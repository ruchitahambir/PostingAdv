import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
//import { Link } from 'react-router-dom';


function Cards() {

  
  return (
    <div className='cards'>
      <h1>Check out these Ads!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem   
              src='images/electronic.jpg'
              text='Technologies are growing at a very fast rate in the world, and it is important for technology enthusiasts to pace up with the latest changes in society.'
              label='Electronics'
              path='/News' 
              newsSrc="https://4.imimg.com/data4/QV/RE/MY-14001471/advertising-agency-for-electronic-media-500x500.jpg"     
           />
           
            <CardItem
              src='images/Fashion.jpg'
              text='The Indian fashion is changing rapidly with the international fashion trends. The word ‘fashion’ is also used as synonym for beauty, style and glamour'
              label='Luxury'
              path='/News'
              newsSrc="https://www.eymockup.com/wp-content/uploads/2018/04/A4-6-Mockup-4.jpg"     
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/travel-industry.jpg'
              text='The world is a book and those who do not travel read only one page. So grab your bags and book your tickets with us for dream destination.'
              label='Travel'
              newsSrc="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <CardItem
              src='images/Education.jpg'
              text='We need to understand that if we all work on inclusion together, it’s going to be faster, broader, better, and more thorough than anything we can do on our own.'
              label='Education'
              newsSrc="https://www.thebalancecareers.com/thmb/Da6oriAtBfnNN9CssexWxRlwPKI=/1333x1000/smart/filters:no_upscale()/career-profile-of-arts-education-coordinator-1295346-2ba831f6af4d4191b850a6cccad842c6.png"
            />
            <CardItem
              src='images/Shaadi.jpg'
              text='Planning a wedding is stressful enough – let me make it easy. Helping to plan the event of a lifetime is my expertise.I manage details, so you don’t have to'
              label='Explore Love'
              newsSrc="https://media.istockphoto.com/photos/hindi-wedding-ceremony-picture-id1127706701?k=20&m=1127706701&s=612x612&w=0&h=b9i58EpoCYhqzMArnQ4FaSDH69Oe6SxlCRjvpAA6NRY="
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
