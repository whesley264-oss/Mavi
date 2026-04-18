// ✅ CORRETO: Implementação de Rate Limiting no Login
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // 5 tentativas por IP
  message: 'Muitas tentativas de login. Tente novamente mais tarde.'
});

app.post('/login', loginLimiter, (req, res) => {
  // lógica de login
});
