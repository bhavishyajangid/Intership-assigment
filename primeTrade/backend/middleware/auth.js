const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Expect Authorization: Bearer <token>
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // decoded payload contains { user: { id: ... } }
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
