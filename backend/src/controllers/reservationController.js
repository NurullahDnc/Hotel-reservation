import Reservation from '../models/reservationModal.js';

//rezervasyon olsuturma 
const createReservation = async (req, res) => {
    try {
        // data değişkenine at
        const {
            room,
            user,
            checkInDate,
            checkOutDate,
            numberOfGuests,
            Price,
            description
        } = req.body;


        if (!user) {
            res.status(500).json({
                success: false,
                error: "Kullanıcı bulunamadı."
            });
        }


        // Giriş ve çıkış tarihlerini Date objelerine dönüştür
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);

        // Gün sayısını hesapla
        const dayDifference = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

        const totalPrice = dayDifference * Price;

        // Yeni bir rezervasyon belgesi oluşturun, db'ye kaydedin
        const newReservation = await Reservation.create({
            room,
            user, // Kullanıcının kimliğini rezervasyon belgesine ekleyin
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
            error: error.error
        });
    }
};

//gelen userId gore rezervasyonları buluyor
const getApReservations = async (req, res) => {

    try {

        // Kullanıcının rezervasyonlarını bulun
        const reservations = await Reservation.find({
            user: req.headers.authorization
        }).populate('room'); // Odaları da al

        // Eğer her rezervasyonun oda bilgisi alındıysa
        if (reservations) {
            //tarih foramtına ceviriyor
            const formattedReservations = reservations.map((reservation) => {
                return {
                    ...reservation.toObject(),
                    checkInDate: new Date(reservation.checkInDate).toLocaleDateString(),
                    checkOutDate: new Date(reservation.checkOutDate).toLocaleDateString()
                };
            });

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
};


// Rezervasyonu onaylama
const setApproved = async (reservationId) => {
    try {
        // rezervasyonun ıd gore guncelle, durumunu approved yap
        const reservation = await Reservation.findByIdAndUpdate(reservationId, {
            status: 'approved'
        }, {
            new: true
        });

        return reservation; // Güncellenmiş rezervasyon belgesini döndür
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Rezervasyonu iptal etme
const setCancelled = async (reservationId) => {
    try {
        // rezervasyonun ıd gore guncelle, durumunu cancelled yap
        const reservation = await Reservation.findByIdAndUpdate(reservationId, {
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
    getApReservations,
    setApproved,
    setCancelled,
};