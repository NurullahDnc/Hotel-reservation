import MainLayout from "./layout/MainLayout";
import React from 'react'
import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./comporents/navbar/Navbar";
import AdminLayout from "./layout/AdminLayout";


function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />


                  <Route path="*" element={<div>Sayfa Bulunamadı</div>} />
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


        </Routes>
      </Router>

    </div>
  );
}

export default App;
