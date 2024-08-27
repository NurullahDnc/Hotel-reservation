import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const PageTitleImage = ({ image, title }) => {
  useEffect(() => {
    ScrollReveal().reveal('.PageTitleImage-title', {
      origin: 'left',
      distance: '300px',
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='PageTitleImage'>
      <div className='PageTitleImage-image'>
        <img className='PageTitleImage-image-img' src={image} alt='Resim Yuklenmedi' />
      </div>
      <h1 className='PageTitleImage-title'>{title}</h1>
    </div>
  );
};

export default PageTitleImage;
