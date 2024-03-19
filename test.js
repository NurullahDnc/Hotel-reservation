// server.js veya app.js gibi bir dosya adıyla kaydedebilirsiniz
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  email: String,
  password: String,
});

app.use(bodyParser.json());

// Kullanıcı kaydı
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Şifre hashleme
    const hashedPassword = await bcrypt.hash(password, 10);

    // MongoDB'ye kullanıcı ekleme
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.json({ success: true, message: 'Kayıt başarıyla tamamlandı.' });
  } catch (error) {
    console.error('Kayıt hatası:', error);
    res.status(500).json({ success: false, message: 'Kayıt sırasında bir hata oluştu.' });
  }
});

// Kullanıcı girişi
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcıyı e-posta adresine göre bulma
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Kullanıcı bulunamadı.' });
    }

    // Şifre karşılaştırma
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Şifre yanlış.' });
    }

    // JWT oluşturma
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ success: true, token });
  } catch (error) {
    console.error('Giriş hatası:', error);
    res.status(500).json({ success: false, message: 'Giriş sırasında bir hata oluştu.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
