import React, { useEffect } from 'react'
import Table from '../../general/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getRoom } from '../../../redux/RoomSlice'
import Loading from '../../Loading';
import { getAcceptedComments, getComment, getUserComment } from '../../../redux/CommentSlice';
import { getUserInfo } from '../../../redux/UserSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
const Comment = () => {

    const roomTitle = [

        { title: "ad" },
        { title: "acıklama" },
        { title: "puan" },
        { title: "durumu" },
        { title: "guncelle" },
        { title: "sil" },

    ]

    const comment = useSelector((state) => state.getComment.comment);
    const user = useSelector((state) => state.getUser.user);
    const dispacth = useDispatch();


    useEffect(() => {
        dispacth(getUserInfo())
      }, [dispacth])


      //userId gore yorumları getiriyor
    useEffect(() => {
        if (user) {
            dispacth(getUserComment(user._id));
        }
      }, [dispacth, user]);

    useEffect(() => { dispacth(getComment()) }, [dispacth, comment])


    //yorum delete func.
    const handleDelete = async (id) => {
        try {
            toast.success("Yorum başarıyla silindi");
            await axios.post(`http://localhost:5000/comment/delete/${id}`);
        } catch (error) {
            toast.error("Yorum silinirken bir hata oluştu");
        }
    };
     
    //yorum update func.
    const handleUpdate = async (id) => {
      try {
          const response = await axios.post(`http://localhost:5000/comment/update/${id}`);
          toast.success("yorum guncellendi")
      } catch (error) {
          toast.error("Hata Oluştu")
      }
    };

    //tablo comps. title, degisken olarak gonderiyorum
    const titleElement = (
        <tr style={{ display: "flex" }}>
            {roomTitle.map((item, i) => (
                <th key={i} style={{ flex: 1 }}>{item.title}</th>
            ))}
        </tr>
    );

    //tablo comps. body, degisken olarak gonderiyorum
    const bodyElement = comment.length > 0 ? (
        comment.map((item, index) => (
            <tr key={item._id} style={{ display: "flex" }}>
                <td>{item.user.firstName + " " + item.user.lastName}</td>
                <td>{item.description}</td>
                <td>{item.rating}</td>
                <td style={{ color: item.status === false ? "red" : item.status === true ? "green" : "" }}>
                    {item.status === false ? "Bekleniyor" : item.status === true ? "onaylandı" : ""}
                </td>
                <td style={{ color: "green", cursor: "pointer" }} onClick={() => handleUpdate(item._id)}><FaCheckCircle size={22} /></td>
                <td style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(item._id)}><FaTrash size={22} /></td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>Yorumunuz Bulunmamaktadır</td>
        </tr>
    );
    



    return (
        <div>
            <div>
             yorumlar
                    <Table titleElement={titleElement} bodyElement={bodyElement}  />

               
            </div>
        </div>
    )
}

export default Comment
