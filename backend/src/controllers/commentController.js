import Comment from "../models/commetModals.js"



const createComment = async (req, res) => {
    try {
        const comments = await Comment.create(req.body)

        res.status(201).json({
            succeded: true,
            message: "Yorumunuz başarıyla oluşturuldu."
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const getComment = async (req, res) => {

    try {
        const comments = (await Comment.find().populate("user").populate("room")).reverse();
        res.status(201).json({
            succeded: true,
            data: comments
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const commentDelete = async (req, res) => {

    try {
        const {
            id
        } = req.params
        const comment = await Comment.findByIdAndDelete({
            _id: id
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const commentUpdate = async (req, res) => {
    const id = req.params.id;
    const {
        description,
        rating
    } = req.body; // Güncellenecek yorumun yeni verileri

    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            id, {
                description,
                rating
            }, {
                new: true,
                runValidators: true
            } // Yenilenmiş veriyi döndürmek {new: true} 
        );

        if (!updatedComment) {
            return res.status(404).json({
                success: false,
                message: "Güncellenecek yorum bulunamadı."
            });
        }

        res.status(200).json({
            success: true,
            data: updatedComment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};


//kulanıcı yorumlarını getiriyor userId gore
const getUserComment = async (req, res) => {

    try {
        const comments = await Comment.find({
            user: req.params.id
        }).populate('user')

        res.status(200).json({
            success: true,
            data: comments
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}


//yorum onaylama
const setApproved = async (req, res) => {
    try {
        // rezervasyonun ıd gore guncelle, durumunu approved yap
        const comment = await Comment.findByIdAndUpdate(req.params.id, {
            status: 'true'
        }, {
            new: true
        });

        return res.json(comment); // Güncellenmiş yorumu belgesini JSON olarak yanıtla
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }

}

//onaylanan yorumlar
const getAcceptedComments = async (req, res) => {
    try {
        const acceptedComments = await Comment.find({
            status: true
        }).populate('user').populate("room");

        const formattedComments = acceptedComments.map(comment => ({
            ...comment.toObject(),
            createdAt: comment.createdAt.toISOString().slice(0, 19).replace('T', ' '),
        })).reverse();

        res.status(200).json({
            success: true,
            data: formattedComments
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}



//yorum reddetme
const setCancelled = async (req, res) => {
    try {
        // rezervasyonun ıd gore guncelle, durumunu approved yap
        const comment = await Comment.findByIdAndUpdate(req.params.id, {
            status: 'false'
        }, {
            new: false
        });

        return res.json(comment); // Güncellenmiş yorumu belgesini JSON olarak yanıtla
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}



export {
    createComment,
    getComment,
    getUserComment,
    setApproved,
    setCancelled,
    getAcceptedComments,
    commentDelete,
    commentUpdate
}