const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contact'
})

connection.connect((err) => {
    if (err) {
        console.log("Gagal connect");
    } else {
        console.log("Berhasil terhubung");
    }
});

const addData = async (data) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO `gleen_rhees` SET ?", data, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = { addData, connection }