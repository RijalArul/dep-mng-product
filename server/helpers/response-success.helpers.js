function successHandler (res, code, message, data) {
  return res.status(code).json({
    message: message,
    data: data,
    status: true
  })
}

module.exports = {
  successHandler
}
