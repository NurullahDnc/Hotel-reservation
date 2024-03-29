import Room from '../models/roomModal.js'; // Room modelini içeri aktarın
import Reservation from '../models/reservationModal.js';

const createReservation = async (req, res) => {
    try {

        const {
            room,
            user,
            checkInDate,
            checkOutDate,
            numberOfGuests,
            description
        } = req.body;

        if (!user) {
            return res.status(400).json({
                success: false,
                error: "Kullanıcı bilgisi eksik."
            });
        }

        // Giriş ve çıkış tarihlerini Date objelerine dönüştür
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);

        const dayDifference = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

        //odayı id gore bul, price al
        const roomDoc = await Room.findById(room);

        if (!roomDoc) {
            return res.status(404).json({
                success: false,
                error: "Oda bulunamadı."
            });
        }

        const roomPrice = roomDoc.price;

        const totalPrice = dayDifference * roomPrice;

        const newReservation = await Reservation.create({
            room: roomDoc,
            user,
            checkInDate,
            checkOutDate,
            numberOfGuests,
            totalPrice,
            description,
            status: 'pending', // Rezervasyon durumunu ayarla
            dayCount: dayDifference // Gün sayısını ekle
        });

        res.status(201).json({
            success: true,
            data: newReservation
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || "Rezervasyon oluşturulurken bir hata oluştu."
        });
    }
};

const getReservations = async (req, res) => {
    try {
        // Kullanıcı ve odanın bilgilerini de gönder
        const reservations = await Reservation.find({}).populate('user').populate('room');

        // Tarih formatını düzeltmek için reservations.map içinde her bir rezervasyonun tarih alanlarını düzenleyebiliriz
        const formattedReservations = reservations.map(reservation => ({
            ...reservation.toObject(),
            checkInDate: new Date(reservation.checkInDate).toLocaleDateString("tr-TR"),
            checkOutDate: new Date(reservation.checkOutDate).toLocaleDateString("tr-TR")
        })).reverse();

        res.status(201).json({
            success: true,
            data: formattedReservations
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};




//gelen userId gore rezervasyonları buluyor
async function getUserReservations(req, res) {

    try {

        // gelen userId gore rezervasyonlarını bul
        const reservations = await Reservation.find({
            user: req.headers.authorization
        }).populate('room'); // Odaları da al


        if (reservations) {
            //tarih foramtına ceviriyor
            const formattedReservations = reservations.map((reservation) => {
                return {
                    ...reservation.toObject(),
                    checkInDate: new Date(reservation.checkInDate).toLocaleDateString(),
                    checkOutDate: new Date(reservation.checkOutDate).toLocaleDateString()
                };
            }).reverse(); // Diziyi tersine çevir


            res.status(200).json({
                success: true,
                data: formattedReservations
            });
        } else {
            res.status(404).json({
                success: false,
                error: "Rezervasyon bulunamadı"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}


// Rezervasyonu onaylama
const setApproved = async (req, res) => {
 
    try {
        // rezervasyonun ıd gore guncelle, durumunu approved yap
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, {
            status: 'approved'
        }, {
            new: true
        });

        return res.json(reservation); // Güncellenmiş rezervasyon belgesini JSON olarak yanıtla
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};


// Rezervasyonu iptal etme
const setCancelled = async (req, res) => {
    
    try {
        // rezervasyonun ıd gore guncelle, durumunu cancelled yap
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, {
            status: 'cancelled'
        }, {
            new: true
        });

        return reservation;
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export {
    createReservation,
    getReservations,
    getUserReservations,
    setApproved,
    setCancelled,
};