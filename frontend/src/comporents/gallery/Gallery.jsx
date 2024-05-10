import React, { useEffect, useState } from 'react'
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import PageTitleImage from '../general/PageTitleImage'
import ScrollReveal from 'scrollreveal'
import { toast } from 'react-toastify';
import axios from 'axios';

const MyGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/gallery`);
        setGallery(response.data.data);
         setImagesLoaded(true);
      } catch (error) {
        toast.error(error.response.data.error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      ScrollReveal().reveal('.gallery-img', {
        duration: 1000,
        scale: 0.5,
        easing: 'ease-in-out',
        interval: 300
      });
    }
  }, [imagesLoaded]);

  return (
    <div className='gallery'>
      <PageTitleImage
image={"https://images.pexels.com/photos/17154931/pexels-photo-17154931/free-photo-of-deniz-doga-tatil-mavi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}         title={'Galeri'}
      />
      
      <Gallery>
        {gallery.map((item, i) => (
          <Item
            key={i}
            original={item.image}
            thumbnail={item.image}
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img
                className='gallery-img'
                ref={ref}
                onClick={open}
                style={{ visibility: imagesLoaded ? 'visible' : 'hidden' }} // Resim yüklendikten sonra görünür olacak
                src={item.image}
              />
            )}
          </Item>
        ))}
      </Gallery>
    </div>
  );
};

export default MyGallery;
