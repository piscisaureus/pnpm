'use strict'
var fs = require('fs')

fs.writeFile(process.argv[2] + '.js', 'module.exports = function () {}\n', 'utf8')
