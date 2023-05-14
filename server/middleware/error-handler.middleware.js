function errorHandler (err, req, res, next) {
  let statusCode = 500
  let message
  if (err.name === 'SequelizeUniqueConstraintError') {
    statusCode = 400
    message = 'Email is already taken'
  } else if (
    err.name === 'FileSizeMax255KBSupportedFilesJusTBetweenJpegAndPng' ||
    err.name === 'EmptyImageFiles'
  ) {
    statusCode = 400
    message = 'File Size Max 255KB Supported Files just between jpeg and png'
  } else if (
    err.name === 'Unauthenthicated' ||
    err.name === 'JsonWebTokenError'
  ) {
    statusCode = 401
    message = 'You are not authorized'
  } else if (err.name === 'RecordNotFound') {
    statusCode = 404
    message = 'Not Found'
  } else if (err.name === 'SequelizeDatabaseError') {
    statusCode = 400
    message = err.parent.routine
  } else if (err.name === 'ForbiddenAccess') {
    statusCode = 403
    message = 'Forbidden Access'
  } else if (err.err?.details[0].message !== '') {
    statusCode = 400
    message = err.err?.details[0].message
  }

  res.status(statusCode).json({
    message: message
  })
}

module.exports = errorHandler
