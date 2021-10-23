const path = require('path');
const fs = require('fs');

const version = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json'))).version;

module.exports = {version};