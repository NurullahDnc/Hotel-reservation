import React from 'react'
import Header from '../comporents/home/Header'
import ActivityCart from '../comporents/general/ActivityCart'
import PageContainerS from '../containers/PageContainers'
import HolidayCart from '../comporents/home/HolidayCart'
import Services from '../comporents/home/Services'
import Category from '../comporents/home/Category'
import NavbarBottom from '../comporents/navbar/navbarBottom'

const Home = () => {
  return (
    <div>
      <Header />
      <NavbarBottom />
      <PageContainerS>
        <HolidayCart />
        <Category/>
        <ActivityCart title={"Spor Aktiviteleri"} text={"Profesyonel grubumuzun hazırladığı Animasyon programlarımız sabah erken saatlerde su aerobiği ile başlayarak gün boyu çeşitli su ve kara oyunları ile devam etmektedir. Sahil  bölümünde su sporlarıyla eğlenceli saatler geçirebilirsiniz. Plaj voleybolu ile turnuvalar düzenleyerek günün heyecanını daha da artırabilirsiniz."} imgOne={"./image/ozel2.jpg"} imgTwo={"./image/ozel3.jpg"} />
        <ActivityCart title={"Spor Aktiviteleri"} text={"Profesyonel grubumuzun hazırladığı Animasyon programlarımız sabah erken saatlerde su aerobiği ile başlayarak gün boyu çeşitli su ve kara oyunları ile devam etmektedir. Sahil  bölümünde su sporlarıyla eğlenceli saatler geçirebilirsiniz. Plaj voleybolu ile turnuvalar düzenleyerek günün heyecanını daha da artırabilirsiniz."} imgOne={"./image/ozel2.jpg"} imgTwo={"./image/ozel3.jpg"} />

        <Services />
      </PageContainerS>
    </div>
  )
}

export default Home
