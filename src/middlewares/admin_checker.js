const addminChecker = (req, res, next) => {
  if (req.isAdmin === false) {
    return res.status(403).json({
      success: false,
      message: 'You are not authorized to do this operation.',
    });
  } else {
    return next();
  }
};

module.exports = addminChecker;
