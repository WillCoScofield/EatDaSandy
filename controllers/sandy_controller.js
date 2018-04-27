var express = require("express");

var router = express.Router();

var sandy = require("../models/sandy.js");

router.get("/", function (req, res) {
    sandy.all(function (data) {
        var sandyHandle = {
            sandys: data
        };
        console.log(sandyHandle);
        res.render("index", sandyHandle);
    });
});

// router.get("/", function (req, resp) {
//     connection.query("SELECT * FROM sandys;", function (err, data) {
//         if (err) {
//             return res.status(500).end();
//         }

//         res.render("index", { sandys: data });
//     });
// })

// router.post("/api/sandys", function (req, res) {
//     sandy.create([
//         "sandy_name",
//     ], [
//             req.body.name
//         ], function (result) {
//             // Send back the ID of the new quote
//             res.json({ id: result.insertId });
//         });
// });

// router.put("/api/sandys/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     sandy.update({
//         sandy: req.body.sandy_name
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// router.delete("/api/sandys/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     sandy.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;


