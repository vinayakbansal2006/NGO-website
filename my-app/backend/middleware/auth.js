module.exports = (req, res, next) => {
  // Mock: all requests are allowed for now
  next();
};
