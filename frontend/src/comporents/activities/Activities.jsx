import React from 'react'
import ActivityCart from './ActivityCart';
import PageTitleImage from '../general/PageTitleImage';

const Activities = () => {

  const activityData = [
    {
      id: "1",
      title: "Spor Aktiviteleri",
      text: "Profesyonel grubumuzun hazırladığı Animasyon programlarımız sabah erken saatlerde su aerobiği ile başlayarak gün boyu çeşitli su ve kara oyunları ile devam etmektedir. Sahil bölümünde su sporlarıyla eğlenceli saatler geçirebilirsiniz. Plaj voleybolu ile turnuvalar düzenleyerek günün heyecanını daha da artırabilirsiniz.",
      btnText: "Daha Fazla",
      imgOne: "https://cdn.emirhotels.com/image/510/sense/spa/fitness/1.jpg",
      imgTwo: "https://www.acapulco.com.tr/images/details/b/acapulco-resort-spa-aktiviteler-747.jpg",
    },
    {
      id: "2",
      title: "Şeflerimizden Lezzetli Bir Deneyim Edinin",
      text: "Ünlü Türk mutfağından ve dünyanın her yerinden eşsiz lezzetleri bir araya getiren seçkin Şeflerimiz, Sizler için bir dizi yemek keyfi hazırlayacaktır.",
      btnText: "Daha Fazla",
      imgOne: "https://www.nghotels.com.tr/media/yq0f4gsw/ng-afyon-aktiviteler-havuzlar-card.jpg",
      imgTwo: "https://www.nghotels.com.tr/media/yiaduepu/ng-enjoy-aktiviteler-banner-mobile.jpg",
    },
    {
      id: "3",
      title: "Plaj Partileri",
      text: "Her hafta düzenlenen plaj partileri ile eğlence dolu anlar yaşayabilirsiniz. DJ performansları ve özel gösterilerle plaj partilerimiz unutulmaz anılar biriktirmenize olanak tanır.",
      btnText: "Daha Fazla",
      imgOne: "https://cdn.emirhotels.com/image/510/sense/spa/fitness/1.jpg",
      imgTwo: "https://www.acapulco.com.tr/images/details/b/acapulco-resort-spa-aktiviteler-747.jpg",
    },
    {
      id: "4",
      title: "Spa ve Masaj Hizmetleri",
      text: "Rahatlamak ve kendinize özel bir zaman ayırmak için lüks spa ve masaj hizmetlerimizden faydalanabilirsiniz. Profesyonel terapistlerimiz size özel bir huzur atmosferi yaratmak için buradalar.",
      btnText: "Daha Fazla",
      imgOne: "https://www.nghotels.com.tr/media/yq0f4gsw/ng-afyon-aktiviteler-havuzlar-card.jpg",
      imgTwo: "https://www.nghotels.com.tr/media/yiaduepu/ng-enjoy-aktiviteler-banner-mobile.jpg",
    },
    {
      id: "5",
      title: "Aqua Park Keyfi",
      text: "Otelimizde bulunan aqua park ile suyun keyfini çıkarın. Renkli su kaydırakları ve eğlenceli su oyunları ile unutulmaz bir tatil deneyimi yaşayın.",
      btnText: "Daha Fazla",
      imgOne: "https://cdn.emirhotels.com/image/510/sense/spa/fitness/1.jpg",
      imgTwo: "https://www.acapulco.com.tr/images/details/b/acapulco-resort-spa-aktiviteler-747.jpg",
    },
    {
      id: "6",
      title: "Gece Kulübü",
      text: "Otelimizdeki gece kulübünde müzik ve dansın tadını çıkarın. Profesyonel DJ'lerimiz ve eğlenceli atmosferimiz ile unutulmaz geceler geçireceksiniz.",
      btnText: "Daha Fazla",
      imgOne: "https://www.nghotels.com.tr/media/yq0f4gsw/ng-afyon-aktiviteler-havuzlar-card.jpg",
      imgTwo: "https://www.nghotels.com.tr/media/yiaduepu/ng-enjoy-aktiviteler-banner-mobile.jpg",
    },
    {
      id: "7",
      title: "Çocuk Kulübü",
      text: "Çocuklarınız için özel olarak tasarlanmış çocuk kulübümüzde eğlenceli aktivitelerle dolu zamanlar geçirin. Deneyimli animatörlerimiz çocuklarınıza unutulmaz anlar yaşatacak.",
      btnText: "Daha Fazla",
      imgOne: "https://cdn.emirhotels.com/image/510/sense/spa/fitness/1.jpg",
      imgTwo: "https://www.acapulco.com.tr/images/details/b/acapulco-resort-spa-aktiviteler-747.jpg",
    },
    {
      id: "8",
      title: "Günübirlik Turlar",
      text: "Otelimizden düzenlenen günübirlik turlara katılarak çevredeki turistik yerleri keşfedin. Doğa yürüyüşleri, tarihi geziler ve daha fazlası sizi bekliyor.",
      btnText: "Daha Fazla",
      imgOne: "https://www.nghotels.com.tr/media/yq0f4gsw/ng-afyon-aktiviteler-havuzlar-card.jpg",
      imgTwo: "https://www.nghotels.com.tr/media/yiaduepu/ng-enjoy-aktiviteler-banner-mobile.jpg",
    },
    {
      id: "9",
      title: "Eğlenceli Tema Geceleri",
      text: "Otelimizde düzenlenen tema geceleri ile farklı kültürleri deneyimleyin. Akşam yemeklerinizde, dans partilerinde ve diğer etkinliklerde farklı temalara katılabilirsiniz.",
      btnText: "Daha Fazla",
      imgOne: "https://cdn.emirhotels.com/image/510/sense/spa/fitness/1.jpg",
      imgTwo: "https://www.acapulco.com.tr/images/details/b/acapulco-resort-spa-aktiviteler-747.jpg",
    },
    {
      id: "10",
      title: "Fitness ve Wellness",
      text: "Fitness salonumuzda egzersiz yaparak formunuzu koruyun. Wellness alanlarımızda sauna ve buhar odası gibi imkanlarla rahatlayın.",
      btnText: "Daha Fazla",
      imgOne: "https://www.nghotels.com.tr/media/yq0f4gsw/ng-afyon-aktiviteler-havuzlar-card.jpg",
      imgTwo: "https://www.nghotels.com.tr/media/yiaduepu/ng-enjoy-aktiviteler-banner-mobile.jpg",
    },
  ];

  return (
    <div>
        <PageTitleImage image={"https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"} title={"Aktiviteler"} />

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
    }

</div>
  )
}

export default Activities
