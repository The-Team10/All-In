const db = require('../database-mysql')


let insertAdmin = (req,res)=>{
    let {first_name,last_name,email,password,role} = req.body
    const sql = `INSERT into admins (first_name,last_name,email,password,role) values (?,?,?,?,?)`
    db.query(sql,[first_name,last_name,email,password,role],(err,admin)=>{
        if (err) res.status(500).send(err)
        else res.status(200).send(admin)
    })
}



// var add = function (req, res){
//     let {name,password,email}=req.body
//     User.insertMany({name, password,email})
//     .then((user) => {
//       res.status(200).send(user);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// }



module.exports = { insertAdmin }