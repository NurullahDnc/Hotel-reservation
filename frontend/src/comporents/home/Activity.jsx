import React from 'react'
import ActivityCart from '../general/ActivityCart'

const Activity = () => {

    const ActivityData =[
        {
            id: "1",
            title: "Spor Aktiviteleri",
            text : "Profesyonel grubumuzun hazırladığı Animasyon programlarımız sabah erken saatlerde su aerobiği ile başlayarak gün boyu çeşitli su ve kara oyunları ile devam etmektedir. Sahil  bölümünde su sporlarıyla eğlenceli saatler geçirebilirsiniz. Plaj voleybolu ile turnuvalar düzenleyerek günün heyecanını daha da artırabilirsiniz.",
            btnText: "Daha Fazla",
            imgOne: "./image/ozel2.jpg",
            imgTwo: "./image/ozel3.jpg",
        },
        {
            id: "2",
            title: "Şeflerimizden Lezzetli Bir Deneyim Edinin",
            text : "Ünlü Türk mutfağından ve dünyanın her yerinden eşsiz lezzetleri bir araya getiren seçkin Şeflerimiz, Sizler için bir dizi yemek keyfi hazırlayacaktır.",
            btnText: "Daha Fazla",
            imgOne: "./image/ozel.jpg",
            imgTwo: "./image/ozel3.jpg",
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
                
                />
            ))
        }
 
    </div>
  )
}

export default Activity
