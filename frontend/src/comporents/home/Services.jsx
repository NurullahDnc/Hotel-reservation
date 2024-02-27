import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import Heading from '../general/Heading';
import { FaUtensils, FaBicycle, FaWifi, FaSwimmingPool, FaGlassCheers, FaSpa } from 'react-icons/fa';


const Services = () => {
    const datas = [
        { id: "1", icon: FaUtensils, name: "Yemek" },
        { id: "2", icon: FaBicycle, name: "Aktiviteler" },
        { id: "4", icon: FaWifi, name: "Wi-Fi" },
        { id: "5", icon: FaSwimmingPool, name: "Havuz" },
        { id: "6", icon: FaGlassCheers, name: "Restoran" },
        { id: "7", icon: FaSpa, name: "Spa" },

    ];

    return (
        <div className='Services'>
            {/*hizmetlerin baslıgı */}

            <Heading title={"Hizmetlerimiz"} />
           
            <div className='Services-container'>
                {
                    datas.map((item, i) => (
                        <div key={item.id} className='Services-container-item'>

                            {/*icon'u dogrudan kulanamıyoruz icon bileseini olusturduk */}
                            <div className='Services-container-item-icon'>
                            {
                                React.createElement(item.icon)    
                            }
                            </div>
                            
                            {/*hizmetlerin adı */}
                            <div className='Services-container-item-text'>
                            {
                                item.name
                            }
                           </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
