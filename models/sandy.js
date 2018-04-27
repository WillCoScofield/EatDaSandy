var orm = require("../config/orm.js");

var sandy = {
    all: function (cb) {
        orm.all("sandys", function (res) {
            cb(res);
        })
    },
    create: function (cols, vals, cb) {
        orm.create("sandys", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("sandys", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("sandys", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (sandysController.js).

module.exports = sandy;