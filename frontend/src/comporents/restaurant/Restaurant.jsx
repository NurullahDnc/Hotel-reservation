import React from 'react'
import ActivityCart from '../general/ActivityCart';

const Restaurant = () => {

  const activityData = [
    {
        id: "1",
        title: "Kahvaltı Keyfi",
        text: "Hafta sonları özel kahvaltı keyfimize katılın! Taze sebzeler, yöresel peynirler ve enfes reçellerle dolu bir kahvaltıyla güne enerjik bir başlangıç yapın.",
        btnText: "Kahvaltı Menüsü",
        imgOne: "./image/ozel2.jpg",
        imgTwo: "./image/ozel3.jpg",
    },{
      id: "2",
      title: "Lezzetli Yemekler",
      text: "Usta şeflerimiz tarafından hazırlanan nefis yemeklerle damaklarınızı şenlendirin. Özel menümüzde yer alan seçeneklerle unutulmaz bir lezzet deneyimi yaşayın.",
      btnText: "Menüyü İncele",
      imgOne: "./image/ozel2.jpg",
      imgTwo: "./image/ozel3.jpg",
  },
  {
      id: "3",
      title: "Canlı Müzik Etkinlikleri",
      text: "Akşam yemeklerinizi canlı müzik eşliğinde daha keyifli hale getirin. Ünlü sanatçılar ve müzik gruplarıyla unutulmaz anlar yaşayın.",
      btnText: "Etkinlik Takvimi",
      imgOne: "./image/ozel2.jpg",
      imgTwo: "./image/ozel3.jpg",
  },
  {
      id: "4",
      title: "Özel İçecek Menüsü",
      text: "Bartenderlarımız tarafından özenle hazırlanan kokteyllerimizle serinleyin. Geniş içecek menümüzde yer alan seçenekler arasında favorinizi bulacaksınız.",
      btnText: "İçecekler",
      imgOne: "./image/ozel2.jpg",
      imgTwo: "./image/ozel3.jpg",
  },
  {
      id: "5",
      title: "Tatlı Molası",
      text: "Özel pasta ve tatlılarımızla tatlı bir mola verin. Tatlılarımız, deneyimli pastacılarımız tarafından özenle hazırlanmaktadır.",
      btnText: "Tatlı Menüsü",
      imgOne: "./image/ozel2.jpg",
      imgTwo: "./image/ozel3.jpg",
  },
  {
      id: "6",
      title: "Kahve Keyfi",
      text: "Öğle molasında veya akşam yemeğinden sonra lezzetli bir kahve içmek ister misiniz? Kahve menümüzde özel kahve çeşitleri sizi bekliyor.",
      btnText: "Kahve Çeşitleri",
      imgOne: "./image/ozel2.jpg",
      imgTwo: "./image/ozel3.jpg",
  },
  ];
  
  return (
    <div>
   {
        activityData.map(item =>(
            <ActivityCart 
                key={item.id} 
                title={item.title} 
                text={item.text} 
                imgOne={item.imgOne} 
                imgTwo={item.imgTwo} 
            
            />
        ))
    }    </div>
  )
}

export default Restaurant
