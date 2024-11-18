const mysql = require('mysql');

class User {
    constructor(id, username, password, telefono, puesto, fechadecontratacion) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.telefono = telefono;
        this.puesto = puesto;
        this.fechadecontratacion = fechadecontratacion;
    }
}
const express = require('express');
const db = require('./db'); 
const app = express();

app.get('/api/gente', (req, res) => {
    const query = 'SELECT username, telefono, puesto, Fechadecontratacion FROM AWS.users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: 'Error en el servidor' });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});


function getAll() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'carlos04',
            database: 'AWS'
        });

        connection.connect(err => {
            if (err) {
                reject(err);
            } else {
                console.log('MySQL Connected...');
            }
        });

        const query = "SELECT id, username, password, telefono, puesto, fechadecontratacion FROM aws.users";
        
        connection.query(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                const listaUser = result.map(row => new User(
                    row.id,
                    row.username,
                    row.password,
                    row.telefono,
                    row.puesto,
                    row.fechadecontratacion
                ));
                resolve(listaUser);
            }
            connection.end();
        });
    });
}

// Ejemplo de uso:
getAll().then(users => {
    console.log(users);
}).catch(err => {
    console.error(err);
});
