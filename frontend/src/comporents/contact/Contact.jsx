import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Heading from '../general/Heading';
import ScrollReveal from 'scrollreveal'
import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { Tb24Hours } from "react-icons/tb";
import axios from 'axios'

const Contact = () => {

  const contactUs = [
    {
      id: "1",
      icon: IoCall,
      title: "Bizi Arayın",
      text: "1 (234) 567-891, 1 (234) 987-654"
    }, {
      id: "2",
      icon: IoLocation,
      title: "Yer",
      text: "121 Rock Sreet, 21 Avenue, New York, NY 92103-9000"
    }, {
      id: "3",
      icon: Tb24Hours,
      title: "İş Vakitleri",
      text: "Pzt – Cum …… 10:00 – 20:00, Cmt, Paz ....… Kapalı"
    }

  ]

  //inputtaki verileri tutuyor
  const [inputData, setInputData] = useState(
    {
      surname: "",
      mail: "",
      object: "",
      message: ""
    }
  )

  //veri girilen input'u gunceller, inputData state'ine atar.
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value, id: uuidv4() })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { surname, mail, object, message } = inputData;

    //input kontrolu yapıyor
    if (surname == "" || mail == "" || object == "" || message == "") {
      toast.error("Lütfen Tüm Alanları Doldurun")

    } else {

      try {

        setInputData({ surname: "", mail: "", text: "" })
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/feedback/create`, inputData)
        toast.success("Mesajınız başarılı bir şekilde gönderildi", res);

      } catch (error) { 
        toast.error("Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.", error);

      }
    }

  }


  useEffect(() => {

    ScrollReveal().reveal('.scrollReveal', {
      duration: 1000,
      scale: 0.3,
      easing: 'ease-in-out',
      interval: 300
    })

    ScrollReveal().reveal('.Contact-right', {
      origin: "right",
      distance: "300px",
      duration: 1000,
      easing: "ease-in-out",

    })


  }, [])

  return (
    <div className='Contact'>
      <div className='Contact-left'>
        <Heading title={"Bizimle İletişime Geçin"} />
        <form action="" onSubmit={handleSubmit} className='Contact-left-form'>
          <input
            className='scrollReveal'
            placeholder='Ad Soyad'
            value={inputData.surname}
            name='surname'
            type="text"
            onChange={handleChange}
          />

          <input
            className='scrollReveal'
            placeholder='Email'
            value={inputData.mail}
            name='mail'
            type="text"
            onChange={handleChange}
          />
          <input
            className='scrollReveal'
            placeholder='konu'
            value={inputData.subject}
            name='object'
            type="text"
            onChange={handleChange}
          />
          <textarea
            className='scrollReveal'
            placeholder='mesaj'
            value={inputData.message}
            name="message"
            id=""
            cols="30"
            onChange={handleChange}
            rows="8"></textarea>

          <button className='scrollReveal' type='submit'>Gönder</button>
        </form>
      </div>


      <div className='Contact-right'>
        {
          contactUs.map((item) => (
            <div key={item.id} className='Contact-right-container'>
              <div className='Contact-right-container-title'>
                <item.icon size={30} />
                <h1>{item.title} </h1>
              </div>

              <p className='Contact-right-container-text'>{item.text} </p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Contact
