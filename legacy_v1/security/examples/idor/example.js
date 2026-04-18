// ❌ INCORRETO: Confiar no ID enviado pelo cliente sem checar posse
app.get('/api/user/:id', (req, res) => {
  const user = db.find(req.params.id);
  res.json(user);
});

// ✅ CORRETO: Verificar se o usuário autenticado é o dono do ID
app.get('/api/user/:id', (req, res) => {
  if (req.user.id !== req.params.id) return res.status(403).send('Acesso Negado');
  const user = db.find(req.params.id);
  res.json(user);
});
