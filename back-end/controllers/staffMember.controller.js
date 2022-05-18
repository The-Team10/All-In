const db = require('../database-mysql')


let insertStaffMember = (req,res)=>{
    let {first_name,last_name,email,password,role} = req.body
    const sql = `INSERT into admins (first_name,last_name,email,password,role) values (?,?,?,?,?)`
    db.query(sql,[first_name,last_name,email,password,role],(err,staffMember)=>{
        if (err) res.status(500).send(err)
        else res.status(200).send(staffMember)
    })
}

var signUp = 


module.exports = { insertStaffMember }