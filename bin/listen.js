module.exports = function(dat, opts, cb) {
  dat.listen(opts, function(err, port) {
    if (err) return cb(err)
    console.log('Listening on port ' + port)
    cb()
  })
}