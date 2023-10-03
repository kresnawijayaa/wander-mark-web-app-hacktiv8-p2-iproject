module.exports = (error, req, res, next) => {
  let status = error.status || 500;
  let message = error.message || `Internal Server Error`;

  switch (error.name) {
    case "NotAuthenticated":
      status = 401;
      message = "You are not authenticated";
      break;
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid token";
      break;
    case "NotAllowed":
      status = 403;
      message = "You are not authorized";
      break;
    case "NotFound":
      status = 404;
      message = "Data not found";
      break;
  }

  res.status(status).json({
    message,
  });
};
