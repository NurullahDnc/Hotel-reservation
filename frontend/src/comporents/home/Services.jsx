import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";


const Services = () => {
    const datas = [
        { id: "1", icon: IoCall, name: "Telefon" },
        { id: "2", icon: FaAddressBook, name: "Telefon" },
        { id: "3", icon: IoCall, name: "Telefon" },
        { id: "4", icon: FaAddressBook, name: "Telefon" },
        { id: "5", icon: IoCall, name: "Telefon" },
        { id: "6", icon: FaAddressBook, name: "Telefon" },
        { id: "7", icon: IoCall, name: "Telefon" },
        { id: "8", icon: FaAddressBook, name: "Telefon" },

        { id: "9", icon: IoCall, name: "Telefon" },
        { id: "10", icon: FaAddressBook, name: "Telefon" },
        { id: "11", icon: IoCall, name: "Telefon" },
        { id: "12", icon: FaAddressBook, name: "Telefon" },

 
 

    ];

    return (
        <div className='Services'>
            {/*hizmetlerin baslıgı */}
            <div className='Services-title'>
                Hizmetlerimiz
            </div>
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
