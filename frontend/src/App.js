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
import Account from "./pages/Account";
import ProfileLayout from "./layout/ProfileLayout";
import ProfilePage from "./pages/ProfilePage";
import Table from "./comporents/general/Table";
import Reservation from "./comporents/account/reservation/Reservation";
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
                <Route path="/reservation" element={<Reservation />} />

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
