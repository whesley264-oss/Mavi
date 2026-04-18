// ❌ INCORRETO: Concatenação de strings
const query = "SELECT * FROM users WHERE email = '" + req.body.email + "'";

// ✅ CORRETO: Prepared Statements
const query = "SELECT * FROM users WHERE email = ?";
db.execute(query, [req.body.email]);
