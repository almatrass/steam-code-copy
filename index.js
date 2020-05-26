const ncp = require('copy-paste');
const code = require('steam-totp').generateAuthCode(require('./config').sharedSecret);
ncp.copy(code);