var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'ImageNotification', 'coolMethod', [arg0]);
};


module.exports.sendNotification = function (arg0, success, error) {
    exec(success, error, 'ImageNotification', 'sendNotification', [arg0]);
};
