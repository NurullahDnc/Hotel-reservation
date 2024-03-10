import React from 'react'
import ActivityCart from '../general/ActivityCart'

const Activity = () => {

    const ActivityData =[
        {
            id: "1",
            title: "Spor Aktiviteleri",
            text : "Profesyonel grubumuzun hazırladığı Animasyon programlarımız sabah erken saatlerde su aerobiği ile başlayarak gün boyu çeşitli su ve kara oyunları ile devam etmektedir. Sahil  bölümünde su sporlarıyla eğlenceli saatler geçirebilirsiniz. Plaj voleybolu ile turnuvalar düzenleyerek günün heyecanını daha da artırabilirsiniz.",
            btnText: "Daha Fazla",
            imgOne: "https://cdn.emirhotels.com/image/510/sense/spa/fitness/1.jpg",
            imgTwo: "https://www.acapulco.com.tr/images/details/b/acapulco-resort-spa-aktiviteler-747.jpg",
            btnUrl: "/aktiviteler"
        },
    ]

    const restdata =[
        
        {
            id: "2",
            title: "Şeflerimizden Lezzetli Bir Deneyim Edinin",
            text : "Ünlü Türk mutfağından ve dünyanın her yerinden eşsiz lezzetleri bir araya getiren seçkin Şeflerimiz, Sizler için bir dizi yemek keyfi hazırlayacaktır.",
            btnText: "Daha Fazla",
            imgOne: "https://www.leta.com.tr/wp-content/uploads/2022/06/Zennup-1844-Fis%CC%A7ekhane.jpg",
            imgTwo: "https://staticb.yolcu360.com/blog/wp-content/uploads/2021/12/14173110/gastronomi-acik-bufe-luks-yemek-otel.jpg",
            btnUrl: "/restaurant"

        }
    ]

  return (
    <div>
        {
            ActivityData.map(item =>(
                <ActivityCart 
                    key={item.id} 
                    title={item.title} 
                    text={item.text} 
                    btnText={item.btnText} 
                    imgOne={item.imgOne} 
                    imgTwo={item.imgTwo} 
                    btnUrl={item.btnUrl}
                
                />
            ))
        }

{
            restdata.map(item =>(
                <ActivityCart 
                    key={item.id} 
                    title={item.title} 
                    text={item.text} 
                    btnText={item.btnText} 
                    imgOne={item.imgOne} 
                    imgTwo={item.imgTwo} 
                    btnUrl={item.btnUrl}
                
                />
            ))
        }
 
    </div>
  )
}

export default Activity
