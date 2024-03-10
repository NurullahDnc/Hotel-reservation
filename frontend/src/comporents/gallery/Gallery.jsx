import React, { useEffect } from 'react'
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import PageTitleImage from '../general/PageTitleImage'
import ScrollReveal from 'scrollreveal'

const MyGallery = () => {

  const gallerydata = [
    {
      id: "1",
      img: "https://staticb.yolcu360.com/blog/wp-content/uploads/2021/12/14173110/gastronomi-acik-bufe-luks-yemek-otel.jpg"
    }, {

      id: "2",
      img: "https://image.posta.com.tr/i/posta/75/750x0/6207132045d2a0c0140b2fd4.jpg"
    }, {
      id: "3",
      img: "https://cdn.emirhotels.com/image/510/sense/spa/fitness/1.jpg"
    }, {
      id: "4",
      img: "https://www.acapulco.com.tr/images/details/b/acapulco-resort-spa-aktiviteler-747.jpg"
    }, {
      id: "5",
      img: "https://www.leta.com.tr/wp-content/uploads/2022/06/Zennup-1844-Fis%CC%A7ekhane.jpg"
    }, {
      id: "6",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/22/02/e5/9c/eliz-restoran-da-enfes.jpg"
    }, {
      id: "7",
      img: "https://images.etstur.com/files/images/hotelImages/TR/51942/m/Titanic-Deluxe-Lara-Genel-366054.jpg"
    }, {
      id: "8",
      img: "https://www.luxury.com.tr/lune-otel-odasi-otel-odasi-mobilyalari-121384-16-B.jpg"
    }, {
      id: "9",
      img: "https://www.fcmobilya.com/upload/slider/2000x2000/otel-odasi-fc-mobilya-2-20200603143740.jpeg"
    }, {
      id: "10",
      img: "https://image-tc.galaxy.tf/wijpeg-206jgoaz9hvbgmz9wb5v745li/exe-frc_standard.jpg?crop=57%2C0%2C911%2C683"
    }, {
      id: "11",
      img: "https://www.acapulco.com.tr/images/details/b/konaklama-otel-odasi-931.jpg"
    }, {
      id: "12",
      img: "https://www.castivalotel.com/Uploads/haber_resim/tmp/20210428_6QFF48VVN6.jpg"
    }, {
      id: "13",
      img: "https://image.posta.com.tr/i/posta/75/750x0/6207132045d2a0c0140b2fd4.jpg"
    }, {
      id: "14",
      img: "./image/about.jpg"
    }, {
      id: "15",
      img: "https://staticb.yolcu360.com/blog/wp-content/uploads/2021/12/14173110/gastronomi-acik-bufe-luks-yemek-otel.jpg"
    }, , {
      id: "16",
      img: "https://ksbrecruitment.co.uk/wp-content/uploads/2019/08/successful-chef-KSB-Rec.jpg"
    },{
      id: "17",
      img: "https://images.pexels.com/photos/3770107/pexels-photo-3770107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "18",
      img: "https://i.ytimg.com/vi/wuivQXlE7os/maxresdefault.jpg"
    },
    {
      id: "19",
      img: "https://erlas.com.tr/uploads/2020/07/otel-etkinlikleri.webp"
    },
    {
      id: "20",
      img: "https://www.orucoglu.com/uploads/resim/290-1/orucoglu-termal-aktivite-fotograf-galerisi-9.jpg"
    },
    {
      id: "20",
      img: "https://images.etstur.com/imgproxy/files/images/hotelImages/TR/210288/l/On-live-Deluxe-Hotel-Genel-280783.jpg"
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

      <PageTitleImage
        image="https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"
        title={'Galeri'}
      />
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
