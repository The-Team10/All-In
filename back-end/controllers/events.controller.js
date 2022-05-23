var db = require("../database-mysql");
const { getOne, select, add, modifyOne, deleteOne } = require("../database-mysql/eventModel.js");



  
module.exports = { 
//   selectOne: function(req, res, ) {
//     getOne(req.params.id,(err, results) => {
//       if (err) {
//           res.status(500).send(err);
//       }
//       else {
//           res.status(201).json(results);
//       }
//     })
//     },
//     selectAllById:function(req,res){
//         selectManyById(req.params.id,(err, results) => {
//             if (err) {
//              res.status(500).send(err);
//             }
//             else {
//              res.status(201).json(results);
//             }
//         })
//     },

//   selectAllEvents:function(req,res){
// select((err, results) => {
//   if (err) {
//       res.status(500).send(err);
//   }
//   else {
//       res.status(201).json(results);
//   }
// })
// },
//   addEvent: function (req, res) {
//     add(req.body, (err, results) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         else {
//             res.status(201).json(results);
//         }
//     })
// },
// modifyEvent: function (req, res) {
//     modifOne(req.body, req.params.id, (err, results) => {
//         console.log(req.params.id)
//         if (err) {
//             res.status(500).send(err);
//             console.log(err)
//         }
//         else {
//             res.status(201).json(results);
//         }
//     })
// },
// deleteEvent: function (req, res) {
//     let id = req.params.id;
//     deleteOne(id, (err, results) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         else {
//             res.status(201).json(results);
//         }
//     })
// } 
};