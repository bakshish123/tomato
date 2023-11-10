// errorHandler.js

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    error: {
      message: err.message,
    },
  });
};

export default errorHandler;
