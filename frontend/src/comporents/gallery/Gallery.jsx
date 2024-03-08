import React, { useEffect } from 'react'
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import PageTitleImage from '../general/PageTitleImage'
import ScrollReveal from 'scrollreveal'

const MyGallery = () => {

  const gallerydata = [
    {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "http://localhost:3000/image/ozel2.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "http://localhost:3000/image/ozel2.jpg"
    }, {

      img: "./image/ozel.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "http://localhost:3000/image/ozel2.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "./image/ozel.jpg"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, , {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "http://localhost:3000/image/ozel2.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "./image/ozel.jpg"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    },{

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "http://localhost:3000/image/ozel2.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "http://localhost:3000/image/ozel2.jpg"
    }, {

      img: "./image/ozel.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "http://localhost:3000/image/ozel2.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "./image/ozel.jpg"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    }, , {

      img: "https://placekitten.com/1024/768?image=1"
    }, {

      img: "http://localhost:3000/image/ozel2.jpg"
    }, {

      img: "./image/ozel2.jpg"
    }, {

      img: "./image/ozel.jpg"
    }, {

      img: "https://placekitten.com/1024/768?image=1"
    },
  ]
  useEffect(() => {

    ScrollReveal().reveal('.gallery-img', {
      duration: 1000,
      scale: 0.5,
      easing: 'ease-in-out',
      interval: 300
    })

  }, [])

  return (
    <div className='gallery'>

      <PageTitleImage iamge={"https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"} title={"Galeri"} />

      <Gallery>

        {
          gallerydata.map((item, i) => (
            <Item
              key={i}
              original={item.img}
              thumbnail={item.img}
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img className='gallery-img' ref={ref} onClick={open} src={item.img} />
              )}
            </Item>
          ))
        }

      </Gallery>
    </div>
  )
}

export default MyGallery
