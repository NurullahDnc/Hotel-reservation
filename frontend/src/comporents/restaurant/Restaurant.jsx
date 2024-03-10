import React from 'react'
import ActivityCart from '../general/ActivityCart';
import PageTitleImage from '../general/PageTitleImage';

const Restaurant = () => {

  const activityData = [
    {
        id: "1",
        title: "Kahvaltı Keyfi",
        text: "Hafta sonları özel kahvaltı keyfimize katılın! Taze sebzeler, yöresel peynirler ve enfes reçellerle dolu bir kahvaltıyla güne enerjik bir başlangıç yapın.",
        btnText: "Kahvaltı Menüsü",
        imgOne: "https://www.leta.com.tr/wp-content/uploads/2022/06/Zennup-1844-Fis%CC%A7ekhane.jpg",
        imgTwo: "https://staticb.yolcu360.com/blog/wp-content/uploads/2021/12/14173110/gastronomi-acik-bufe-luks-yemek-otel.jpg",
    },{
      id: "2",
      title: "Lezzetli Yemekler",
      text: "Usta şeflerimiz tarafından hazırlanan nefis yemeklerle damaklarınızı şenlendirin. Özel menümüzde yer alan seçeneklerle unutulmaz bir lezzet deneyimi yaşayın.",
      btnText: "Menüyü İncele",
      imgOne: "https://www.eray.com.tr/wp-content/uploads/2021/08/restoran-planlari-eray-5-1110x630.jpg",
      imgTwo: "https://www.protel.com.tr/blog/wp-content/uploads/2013/03/restoran-konseptleri.jpg",
  },
  {
      id: "3",
      title: "Canlı Müzik Etkinlikleri",
      text: "Akşam yemeklerinizi canlı müzik eşliğinde daha keyifli hale getirin. Ünlü sanatçılar ve müzik gruplarıyla unutulmaz anlar yaşayın.",
      btnText: "Etkinlik Takvimi",
      imgOne: "https://www.leta.com.tr/wp-content/uploads/2022/06/Zennup-1844-Fis%CC%A7ekhane.jpg",
      imgTwo: "https://staticb.yolcu360.com/blog/wp-content/uploads/2021/12/14173110/gastronomi-acik-bufe-luks-yemek-otel.jpg",
  },
  {
      id: "4",
      title: "Özel İçecek Menüsü",
      text: "Bartenderlarımız tarafından özenle hazırlanan kokteyllerimizle serinleyin. Geniş içecek menümüzde yer alan seçenekler arasında favorinizi bulacaksınız.",
      btnText: "İçecekler",
      imgOne: "https://www.eray.com.tr/wp-content/uploads/2021/08/restoran-planlari-eray-5-1110x630.jpg",
      imgTwo: "https://www.protel.com.tr/blog/wp-content/uploads/2013/03/restoran-konseptleri.jpg",
  },
  {
      id: "5",
      title: "Tatlı Molası",
      text: "Özel pasta ve tatlılarımızla tatlı bir mola verin. Tatlılarımız, deneyimli pastacılarımız tarafından özenle hazırlanmaktadır.",
      btnText: "Tatlı Menüsü",
      imgOne: "https://www.leta.com.tr/wp-content/uploads/2022/06/Zennup-1844-Fis%CC%A7ekhane.jpg",
      imgTwo: "https://staticb.yolcu360.com/blog/wp-content/uploads/2021/12/14173110/gastronomi-acik-bufe-luks-yemek-otel.jpg",
  },
  {
      id: "6",
      title: "Kahve Keyfi",
      text: "Öğle molasında veya akşam yemeğinden sonra lezzetli bir kahve içmek ister misiniz? Kahve menümüzde özel kahve çeşitleri sizi bekliyor.",
      btnText: "Kahve Çeşitleri",
      imgOne: "https://www.eray.com.tr/wp-content/uploads/2021/08/restoran-planlari-eray-5-1110x630.jpg",
      imgTwo: "https://www.protel.com.tr/blog/wp-content/uploads/2013/03/restoran-konseptleri.jpg",
  },
  ];
  
  return (
    <div>
        <PageTitleImage image={"https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"} title={"Restaurant"} />

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
