import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Image from 'react-bootstrap/Image'
import { render } from '@testing-library/react';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>AD  WORLD</h1>
    
      <p>A new way to grow your business Faster.</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;