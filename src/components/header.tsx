import React from 'react';
import '../styles/header.scss';
import coding from '../assets/coding.png';

export default function Header() {
const headerText : string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const words = headerText.trim().split(" ");
  return (
    <>
  
   <header className="site-header">
      <div className="content">
       <h1>Welcome.</h1>
     {words.map((word, i) => (
        <span
          key={i}
        
          style={{ animationDelay: `${i * 0.03}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
    <div className='header-image'>
      <img src={coding} alt="Laptop with code and coffee" />
    </div>


      <div className="header-curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z"  />
        </svg>
      </div>
    </header>
    
  
    </>
  );
}
