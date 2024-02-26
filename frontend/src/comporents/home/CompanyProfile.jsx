import React from 'react'
import { FaCity } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import Heading from '../general/Heading';
import { FaPlus } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoHappyOutline } from "react-icons/io5";
import { FaSmileBeam } from "react-icons/fa";


const CompanyProfile = () => {

    const data = [
        {
            id: "1",
            icon: FaClockRotateLeft,
            number: 30,
            text: "Yıllık Deneyim "
    
        },{
            id: "2",
            icon: FaSmileBeam,
            number: 500,
            text: "Mutlu Müsteri "
    
        },{
            id: "3",
            icon: FaPlus,
            number: 40,
            text: "Milyon Tl "
    
        },{
            id: "4",
            icon: HiUsers,
            number: 50,
            text: "İstihdam"
    
        }
    ]

    return (
        <div className='CompanyProfile'>
            
            <Heading title={"Kalite ve Güvenin Tek Adresi"} />


            <div className='CompanyProfile-items'>
                
                {
                    data.map(item => (
                        <div key={item.id} className='CompanyProfile-items-item'>

                            <p className='CompanyProfile-items-item-icon'><item.icon size="30" /></p>
                                <h1 className='CompanyProfile-items-item-number' > {item.number} <span> <FaPlus size={20} /></span> </h1>
                                <p className='CompanyProfile-items-item-text' >{item.text} </p>



                            </div>
                    ))
                }
                
            </div>

        </div>
    )
}

export default CompanyProfile
