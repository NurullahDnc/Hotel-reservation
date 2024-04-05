import MainLayout from "./layout/MainLayout";
import React from 'react'
import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./comporents/navbar/Navbar";
import AdminLayout from "./layout/AdminLayout";
import ActivitiesPage from "./pages/ActivitiesPage";
import RestaurantPage from "./pages/RestaurantPage";
import AboutPage from "./pages/AboutPage";
import RoomPage from "./pages/RoomPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from './pages/ContactPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./comporents/auth/Modal";
import Login from "./comporents/auth/Login";
import Register from "./comporents/auth/Register";
 import ProfileLayout from "./layout/ProfileLayout";
import ProfilePage from "./pages/ProfilePage";
import Table from "./comporents/general/Table";
import Reservation from "./comporents/account/reservation/Reservation";
import ReservationFormPage from "./pages/ReservationFormPage";
import ReservationPage from "./pages/ReservationPage";
import AccountRoomPage from "./pages/AccountRoomPage";
import CommentPages from "./pages/CommentPages";

import DashboardPage from "./pages/admin/DashboardPage";
import ReservationsPage from "./pages/admin/ReservationsPage";
import RoomAdminPage from "./pages/admin/RoomPage";
import CustomersPage from "./pages/admin/CustomersPage";
import CommentPage from "./pages/admin/CommentPage";
import FeedbackPage from "./pages/admin/FeedbackPage";
import GalleryAdminPage from "./pages/admin/GalleryPage";






 function App() {

  return (
    <div className="App">
    <ToastContainer position="top-right" reverseOrder={false} />
<Register />
<Login />
       <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/hakkımızda" element={<AboutPage />} />
                  <Route path="/odalar" element={<RoomPage />} />
                  <Route path="/aktiviteler" element={<ActivitiesPage />} />
                  <Route path="/restaurant" element={<RestaurantPage />} />
                  <Route path="/galeri" element={<GalleryPage />} />
                  <Route path="/iletisim" element={<ContactPage />} />



                  <Route path="*" element={<div className="notFound">Sayfa Bulunamadı</div>} />
                </Routes>
              </MainLayout>
            }
          />
  

          <Route
            path="/admin/*"
            element={
              <AdminLayout > 
                <Routes>

                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/Reservations" element={<ReservationsPage />} />
                  <Route path="/Room" element={<RoomAdminPage />} />
                  <Route path="/customers" element={<CustomersPage />} />
                  <Route path="/comment" element={<CommentPage />} />
                  <Route path="/feedback" element={<FeedbackPage />} />
                  <Route path="/gallery" element={<GalleryAdminPage />} />


                <Route path="*" element={<div>Sayfa Bulunamadı</div>} />

                </Routes>
              </AdminLayout>
            }
          />

        <Route
            path="/user/*"
            element={
              <ProfileLayout > 
                <Routes>

                <Route path="/profil" element={<ProfilePage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/reservationform" element={<ReservationFormPage />} />
                <Route path="/room" element={<AccountRoomPage />} />
                <Route path="/comment" element={<CommentPages />} />



                <Route path="/profils" element={<Table/>} />


                {/* <Route path="/profil" element={<UserProfile />} /> */}



                <Route path="*" element={<div className="notFound">Sayfa Bulunamadı</div>} />

                </Routes>
              </ProfileLayout>
            }
          />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
