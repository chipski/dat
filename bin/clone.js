var log = require('../lib/progress-log')
var EOL = require('os').EOL

module.exports = function(dat, opts, cb) {
  var remote = opts._[1]
  var clone = dat.clone(remote, opts, cb)
  if (!opts.quiet) log(clone, 'Pulled', 'Clone from remote has completed.')
}